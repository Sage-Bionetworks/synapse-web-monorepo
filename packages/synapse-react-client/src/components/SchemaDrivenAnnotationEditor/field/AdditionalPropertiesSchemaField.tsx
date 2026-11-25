import {
  FieldProps,
  FormContextType,
  partId,
  RJSFSchema,
  StrictRJSFSchema,
  UiSchema,
} from '@rjsf/utils'
import { isEqual } from 'lodash-es'
import { useEffect, useMemo, useState } from 'react'
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
        const asFloat = Number.parseFloat(item as string)
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
      return list.map(String)
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
 * - When the last array value is removed, remove the entire key from the form.
 *
 * The annotation editor's `transformChange` keeps every custom annotation an array.
 * @param props
 * @returns
 */
export function AdditionalPropertiesSchemaField<
  T extends Array<unknown> = Array<unknown>,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>(props: FieldProps<T, S, F>) {
  const {
    formData,
    onChange,
    registry,
    schema,
    name,
    onRemoveProperty,
    id,
    fieldPath,
  } = props
  const { ArrayField } = registry.fields
  const { SelectWidget } = registry.widgets

  // The type determines which widget we show.
  const [propertyType, setPropertyType] = useState(() =>
    guessPropertyType(convertToArray(formData)),
  )

  // A type the user chose whose conversion may lose data, waiting for them to confirm it
  const [pendingPropertyType, setPendingPropertyType] = useState<
    PropertyType | undefined
  >(undefined)

  function convertTo(newPropertyType: PropertyType) {
    setPropertyType(newPropertyType)
    setPendingPropertyType(undefined)
    if (Array.isArray(formData)) {
      if (formData.every(item => item == null)) {
        onRemoveProperty?.()
      } else {
        // Coerce the data to match the new type
        onChange(
          transformDataFromPropertyType(formData, newPropertyType),
          fieldPath,
        )
      }
    }
  }

  function onPropertyTypeSelected(newPropertyType: PropertyType) {
    if (newPropertyType === propertyType) {
      setPendingPropertyType(undefined)
    } else if (
      Array.isArray(formData) &&
      isEqual(
        formData,
        transformDataFromPropertyType(formData, newPropertyType),
      )
    ) {
      // The conversion changes no data, so make it right away
      convertTo(newPropertyType)
    } else {
      setPendingPropertyType(newPropertyType)
    }
  }

  // Store the values as the guessed type, e.g. a Float's whole numbers as "1.0". Only a value that changes is reported.
  useEffect(() => {
    if (Array.isArray(formData)) {
      const coercedList = transformDataFromPropertyType(formData, propertyType)
      if (!isEqual(formData, coercedList)) {
        onChange(coercedList, fieldPath)
      }
    }
    // Only on mount: later, the data changes only by the user's edits and their chosen type
    // oxlint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const additionalPropertyContext = useMemo(
    () => ({ dropProperty: () => onRemoveProperty?.() }),
    [onRemoveProperty],
  )

  const uiSchema = useMemo(
    () => ({
      ...props.uiSchema,
      'ui:title': 'Value(s)',
      items: {
        ...props.uiSchema?.items,
        'ui:placeholder': 'New Value',
      },
    }),
    [props.uiSchema],
  )
  const arraySchema = useMemo(
    () => ({ ...schema, items: getSchemaForPropertyType(propertyType) }),
    [schema, propertyType],
  )

  if (!Array.isArray(formData)) {
    return <></>
  }

  const typeId = partId(id, 'type')
  return (
    <AdditionalPropertyContextProvider value={additionalPropertyContext}>
      <Grid size={2}>
        <InputLabel htmlFor={typeId}>Type</InputLabel>
        <SelectWidget
          name={'Type'}
          id={typeId}
          htmlName={typeId}
          schema={{} as S}
          options={{
            enumOptions: propertyTypeArray.map(type => ({
              label: type,
              value: type,
            })),
            isClearable: false,
          }}
          value={pendingPropertyType ?? propertyType}
          onChange={value => {
            onPropertyTypeSelected(value as PropertyType)
          }}
          disabled={props.disabled}
          readonly={props.readonly}
          required={true}
          onBlur={() => {}}
          onFocus={() => {}}
          registry={registry}
          label={'Type'}
        />
      </Grid>
      <Grid size={7}>
        <ArrayField
          {...props}
          // The items' uiSchema is the custom annotation's, which `UiSchema<T>` can't relate to the items of `T`
          uiSchema={uiSchema as UiSchema<T, S, F>}
          schema={arraySchema}
        />
      </Grid>
      {pendingPropertyType !== undefined && (
        <FullWidthAlert
          variant="warning"
          title="Data may be lost when converting types"
          description={`Are you sure you want to convert ${name} from ${propertyType} to ${pendingPropertyType}? Current values may be lost on conversion.`}
          primaryButtonConfig={{
            text: 'Convert',
            onClick: () => {
              convertTo(pendingPropertyType)
            },
          }}
          secondaryButtonConfig={{
            text: 'Cancel',
            onClick: () => {
              setPendingPropertyType(undefined)
            },
          }}
          isGlobal={false}
        />
      )}
    </AdditionalPropertyContextProvider>
  )
}
