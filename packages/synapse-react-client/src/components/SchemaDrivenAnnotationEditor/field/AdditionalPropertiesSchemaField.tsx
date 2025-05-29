import {
  FieldProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from '@rjsf/utils'
import { isEqual } from 'lodash-es'
import { useEffect, useState } from 'react'
import FullWidthAlert from '../../FullWidthAlert/FullWidthAlert'
import { convertToArray } from '../AnnotationEditorUtils'
import { Grid, InputLabel } from '@mui/material'
import { AdditionalPropertyContextProvider } from '../template/AdditionalPropertyContext'

// Matches ####-##-##T##:##:##.###Z, e.g. 1970-01-01T12:00:000Z
const ISO_TIMESTAMP_REGEX = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/

// Types that correspond to the different input fields that the annotation editor supports
const propertyTypeArray = [
  'String',
  'Integer',
  'Float',
  'Boolean',
  'Datetime',
] as const

export type PropertyType = (typeof propertyTypeArray)[number]

export function guessPropertyType(list: Array<unknown>): PropertyType {
  if (list.length === 0) {
    // The field was just added, so default to string
    return 'String'
  } else if (
    list.every(
      item => typeof item === 'number' || item === 'NaN', // "NaN" is technically a float value
    )
  ) {
    if (list.every(item => Number.isInteger(item))) {
      return 'Integer'
    } else {
      return 'Float'
    }
  } else if (list.every(item => typeof item === 'boolean')) {
    return 'Boolean'
  } else if (
    list.every(item => typeof item === 'string') &&
    list.every((item: string) => !!ISO_TIMESTAMP_REGEX.exec(item))
  ) {
    return 'Datetime'
  }
  // otherwise, default type is 'string'
  return 'String'
}

export function transformDataFromPropertyType(
  list: Array<any>,
  propertyType: PropertyType,
) {
  switch (propertyType) {
    case 'Integer':
      return list.map(item =>
        Number.isNaN(Number(item)) ? 0 : Math.floor(Number(item)),
      )

    case 'Float':
      return list.map(item => {
        const asFloat = parseFloat(item as string)
        if (Number.isNaN(asFloat)) {
          return 'NaN'
        } else if (Number.isInteger(asFloat)) {
          return asFloat.toFixed(1)
        } else {
          return asFloat
        }
      })
    case 'Datetime':
      return list.map(item => {
        if (typeof item === 'string' && ISO_TIMESTAMP_REGEX.exec(item)) {
          return item
        } else {
          return new Date().toISOString()
        }
      })
    case 'Boolean':
      return list.map(item => !!item)
    case 'String':
    default:
      return list.map(item => String(item))
  }
}

/**
 * Maps a Synapse Annotation PropertyType to a JSON Schema that captures the type and format.
 * @param propertyType
 */
export function getSchemaForPropertyType(propertyType: PropertyType) {
  switch (propertyType) {
    case 'Datetime':
      return { type: 'string', format: 'datetime' }
    case 'Boolean':
      return { type: 'boolean' }
    case 'Float':
      return { type: 'number' }
    case 'Integer':
      return { type: 'integer' }
    case 'String':
    default:
      return { type: 'string' }
  }
}

/**
 * react-jsonschema-form SchemaField override for "additionalProperties" only. In Synapse these are "custom annotations".
 * Modifies the data to provide full compatibility with Synapse annotations features.
 *
 * This component provides these enhancements to the SchemaField:
 * - Supports selecting a type, and changing the input widget appropriately
 * - Identifying the type on mount
 * - Treat all field values as arrays
 * - When the last array value is removed, remove the entire key from the form.
 * @param props
 * @returns
 */
export function AdditionalPropertiesSchemaField<
  T extends Array<unknown> = Array<unknown>,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(
  props: FieldProps<T, S, F> & {
    onDropPropertyClick: (key: string) => (event: any) => void
  },
) {
  const {
    formData,
    onChange,
    registry,
    schema,
    name,
    onDropPropertyClick,
    idSchema,
  } = props
  const id = idSchema.$id
  const { ArrayField } = registry.fields
  const { SelectWidget } = registry.widgets

  // The type determines which widget we show.
  const [propertyType, setPropertyType] = useState(
    guessPropertyType(convertToArray(formData)),
  )

  // If the property type is updated, store it in a new variable where we'll show a warning if data may be lost on coersion
  const [nextPropertyType, setNextPropertyType] = useState(propertyType)

  /**
   * This effect is invoked whenever the user attempts to change the datatype of a custom annotation.
   */
  useEffect(() => {
    function onNextPropertyTypeUpdate() {
      if (Array.isArray(formData)) {
        const dataIsEmpty =
          formData.length === 0 ||
          formData.every(item => item == null || item == '')
        const coercedList = transformDataFromPropertyType(
          formData,
          nextPropertyType,
        )
        // if the data is empty or identical after conversion, then just update the property type
        if (dataIsEmpty || nextPropertyType !== propertyType) {
          if (isEqual(formData, coercedList)) {
            setPropertyType(nextPropertyType)
          }
        }
      }
    }

    onNextPropertyTypeUpdate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nextPropertyType])

  /**
   * This effect is invoked whenever the propertyType changes.
   */
  useEffect(() => {
    function coerceDataAndUpdateWidget() {
      if (Array.isArray(formData)) {
        if (formData.every(item => item == null)) {
          onDropPropertyClick(name)(new CustomEvent('dropEmptyProperty'))
        } else {
          const coercedList = transformDataFromPropertyType(
            formData,
            nextPropertyType,
          ) as unknown as T

          // Data conversion is non-destructive or has been confirmed by the user
          setPropertyType(nextPropertyType)
          // Coerce the data to match the new type
          onChange(coercedList)
        }
      }
    }

    coerceDataAndUpdateWidget()
    // Don't add other properties to dependency array because we don't want to automatically coerce input
    // i.e. Only coerce data when the type changes, which should only be on mount or when the user explicitly chooses a new type.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyType])

  const itemsSchema = getSchemaForPropertyType(propertyType)

  useEffect(() => {
    // If the additional property has not yet been coerced to an array, trigger an update to coerce and render nothing.
    // We must do this because RJSF does not currently batch these kinds of updates
    // See https://github.com/rjsf-team/react-jsonschema-form/issues/3367
    if (!Array.isArray(formData)) {
      onChange(convertToArray(formData) as unknown as T)
    }
  }, [formData, onChange])

  if (!Array.isArray(formData)) {
    return <></>
  }

  return (
    <AdditionalPropertyContextProvider
      value={{
        dropProperty: e => {
          onDropPropertyClick(name)(e)
        },
      }}
    >
      <Grid item xs={2}>
        <InputLabel htmlFor={`${id}-type`}>Type</InputLabel>
        <SelectWidget
          name={'Type'}
          id={`${id}-type`}
          schema={{} as S}
          options={{
            enumOptions: propertyTypeArray.map(type => ({
              label: type,
              value: type,
            })),
          }}
          value={propertyType}
          onChange={value => {
            setNextPropertyType(value as PropertyType)
          }}
          disabled={props.disabled}
          readOnly={props.readonly}
          required={true}
          isClearable={false}
          onBlur={() => {}}
          onFocus={() => {}}
          registry={registry}
          label={'Type'}
        />
      </Grid>
      <Grid item xs={7}>
        <ArrayField
          {...props}
          uiSchema={{
            ...props.uiSchema,
            'ui:title': 'Value(s)',
            items: {
              ...props.uiSchema?.items,
              'ui:placeholder': 'New Value',
            },
          }}
          schema={{
            ...schema,
            items: {
              ...itemsSchema,
            },
          }}
        />
      </Grid>
      {propertyType !== nextPropertyType && (
        <FullWidthAlert
          variant="warning"
          title="Data may be lost when converting types"
          description={`Are you sure you want to convert ${name} from ${propertyType} to ${nextPropertyType}? Current values may be lost on conversion.`}
          primaryButtonConfig={{
            text: 'Convert',
            onClick: () => {
              setPropertyType(nextPropertyType)
            },
          }}
          secondaryButtonConfig={{
            text: 'Cancel',
            onClick: () => {
              setNextPropertyType(propertyType)
            },
          }}
          isGlobal={false}
        />
      )}
    </AdditionalPropertyContextProvider>
  )
}
