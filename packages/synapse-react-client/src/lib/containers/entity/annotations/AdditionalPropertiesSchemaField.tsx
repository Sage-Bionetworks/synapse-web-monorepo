import { FieldProps, utils as rjsfUtils } from '@sage-bionetworks/rjsf-core'
import { isEqual } from 'lodash-es'
import React, { useEffect, useState } from 'react'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { useListState } from '../../../utils/hooks/useListState'
import FullWidthAlert from '../../FullWidthAlert'
import { CustomArrayFieldTemplate } from './CustomArrayFieldTemplate'

// Matches ####-##-##T##:##:##.###Z, e.g. 1970-01-01T12:00:000Z
const ISO_TIMESTAMP_REGEX = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/

// Types that correspond to the different input fields that the annotation editor supports
export enum PropertyType {
  STRING = 'String',
  INTEGER = 'Integer',
  FLOAT = 'Float',
  BOOLEAN = 'Boolean',
  DATETIME = 'Datetime',
}

// Selection of react-jsonschema-form Widget types that we can use for the supported property fields
export enum AdditionalPropertyWidget {
  TextWidget = 'TextWidget',
  DateTimeWidget = 'DateTimeWidget',
  CheckboxWidget = 'CheckboxWidget',
}

export function guessPropertyType(list: Array<any>): PropertyType {
  if (
    list.every(
      item => typeof item === 'number' || item === 'NaN', // "NaN" is technically a float value
    )
  ) {
    if (list.every(item => Number.isInteger(item))) {
      return PropertyType.INTEGER
    } else {
      return PropertyType.FLOAT
    }
  } else if (list.every(item => typeof item === 'boolean')) {
    return PropertyType.BOOLEAN
  } else if (
    list.every(item => typeof item === 'string') &&
    list.every((item: string) => !!ISO_TIMESTAMP_REGEX.exec(item))
  ) {
    return PropertyType.DATETIME
  }
  // otherwise, default type is 'string'
  return PropertyType.STRING
}

export function transformDataFromPropertyType(
  list: Array<any>,
  propertyType: PropertyType,
) {
  switch (propertyType) {
    case PropertyType.INTEGER:
      return list.map(item =>
        Number.isNaN(Number(item)) ? undefined : Math.floor(Number(item)),
      )

    case PropertyType.FLOAT:
      return list.map(item => {
        const asFloat = parseFloat(item)
        if (Number.isNaN(asFloat)) {
          return 'NaN'
        } else if (Number.isInteger(asFloat)) {
          return asFloat.toFixed(1)
        } else {
          return asFloat
        }
      })
    case PropertyType.DATETIME:
      return list.map(item => {
        if (typeof item === 'string' && ISO_TIMESTAMP_REGEX.exec(item)) {
          return item
        } else {
          return undefined
        }
      })
    case PropertyType.BOOLEAN:
      return list.map(item => !!item)
    case PropertyType.STRING:
    default:
      return list.map(item => String(item))
  }
}

export function getWidgetFromPropertyType(
  propertyType: PropertyType,
): AdditionalPropertyWidget {
  switch (propertyType) {
    case PropertyType.DATETIME:
      return AdditionalPropertyWidget.DateTimeWidget
    case PropertyType.BOOLEAN:
      return AdditionalPropertyWidget.CheckboxWidget
    case PropertyType.STRING:
    case PropertyType.INTEGER:
    case PropertyType.FLOAT:
    default:
      return AdditionalPropertyWidget.TextWidget
  }
}

/**
 * react-jsonschema-form SchemaField override for "additionalProperties" only.
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
export function AdditionalPropertiesSchemaField<T>(
  props: FieldProps<T> & {
    onDropPropertyClick: (key: string) => (event: any) => void
  },
) {
  /**
   * Custom annotations in Synapse are always arrays. This function converts initial data to be an array type.
   * If the initial data is an array, return the data itself.
   * If the intitial data is a string, returns an array of substrings separated by commas.
   * Otherwise, wrap the data in an array.
   */
  function convertToArray(value: T): Array<any> {
    if (Array.isArray(value)) {
      return value
    } else if (typeof value === 'string') {
      return value.split(',').map(s => s.trim()) // split a string of comma-separated values, then trim whitespace
    } else {
      return [value]
    }
  }

  const {
    id,
    formData,
    onChange,
    registry,
    schema,
    name,
    onDropPropertyClick,
    uiSchema,
  } = props

  const { list, handleListChange, handleListRemove, appendToList, setList } =
    useListState(convertToArray(formData))

  // The type determines which widget we show.
  const [propertyType, setPropertyType] = useState(guessPropertyType(list))

  // If the property type is updated, store it in a new variable where we'll show a warning if data may be lost on coersion
  const [nextPropertyType, setNextPropertyType] = useState(propertyType)

  const [widget, setWidget] = useState<AdditionalPropertyWidget>(
    AdditionalPropertyWidget.TextWidget,
  )

  useEffect(() => {
    // The item may not be an array when we get it, and we need to convert it right away because the order of items is not stable, and seems to depend on if the item is an array or not.
    // Otherwise, the order of the properties will change when the user modifies the data. We may be able to fix this by modifying react-jsonschema-form to stabilize the item order.

    // FIXME: This doesn't work without a delay.
    setTimeout(() => {
      onChange(list)
    }, 50)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /**
   * This effect is invoked whenever the user attempts to change the data type of a custom annotation.
   */
  useEffect(() => {
    function onNextPropertyTypeUpdate() {
      const dataIsEmpty =
        list.length === 0 || list.every(item => item == null || item == '')
      const coercedList = transformDataFromPropertyType(list, nextPropertyType)
      // if the data is empty or identical after conversion, then just update the property type
      if (dataIsEmpty || nextPropertyType !== propertyType) {
        if (isEqual(list, coercedList)) {
          setPropertyType(nextPropertyType)
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
      const coercedList = transformDataFromPropertyType(list, nextPropertyType)

      // Data conversion is non-destructive or has been confirmed by the user
      setPropertyType(nextPropertyType)
      // When the selected type changes, switch to the appropriate widget for accepting input
      setWidget(getWidgetFromPropertyType(nextPropertyType))
      // Coerce the data to match the new type
      setList(coercedList)
    }

    coerceDataAndUpdateWidget()
    // Don't add other properties to dependency array because we don't want to automatically coerce input
    // i.e. Only coerce data when the type changes, which should only be on mount or when the user explicitly chooses a new type.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyType])

  useEffect(() => {
    onChange(list)
  }, [onChange, list])

  const Widget = rjsfUtils.getWidget(
    schema,
    AdditionalPropertyWidget[widget],
    registry.widgets,
  )

  const items = list.map((item: unknown, index: number) => {
    return {
      children: (
        <Widget
          id={`${name}-${index}`}
          aria-label={`${name}-${index}`}
          schema={schema}
          value={item}
          onChange={(value: any) => {
            handleListChange(index)(value)
          }}
          uiSchema={uiSchema}
          required={props.required}
          disabled={props.disabled}
          readonly={props.readonly}
          autofocus={props.autofocus}
          placeholder={props.placeholder ?? ''}
          options={{}}
          formContext={props.formContext as T}
          onFocus={props.onFocus}
          onBlur={(id: string, value: any) => {
            setList(transformDataFromPropertyType(list, propertyType))
            props.onBlur(id, value)
          }}
          label={props.title ?? ''}
          multiple={true}
          rawErrors={[]}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore - The Widget needs the registry prop even though it's not in the type signature
          registry={registry}
        />
      ),
      onDropIndexClick: () => {
        if (list.length === 1) {
          // If this is the only item, then remove the property from the field
          return onDropPropertyClick(name)
        } else {
          // Otherwise, remove the item from the list
          return handleListRemove(index)
        }
      },
      className: props.className ?? '',
      disabled: props.disabled,
      hasMoveDown: false,
      hasMoveUp: false,
      hasRemove: false,
      hasToolbar: false,
      index: index,
      onAddIndexClick: () => {
        return () => {
          // no-op
        }
      },
      onReorderClick: () => {
        return () => {
          //no-op
        }
      },
      readonly: props.readonly,
      key: `${index}`,
    }
  })

  return (
    <>
      <FormGroup className="col-xs-3">
        <FormLabel htmlFor={`${id}-type`}>Type</FormLabel>
        <FormControl
          as="select"
          role="listbox"
          disabled={props.disabled}
          readOnly={props.readonly}
          value={propertyType}
          required={true}
          id={`${id}-type`}
          onChange={e => {
            setNextPropertyType(e.target.value as PropertyType)
          }}
        >
          {Object.keys(PropertyType).map(type => (
            <option key={type} value={PropertyType[type] as string}>
              {PropertyType[type]}
            </option>
          ))}
        </FormControl>
      </FormGroup>
      <CustomArrayFieldTemplate
        className="col-xs-6"
        onAddClick={() => appendToList(null)}
        canAdd={true}
        title={name}
        schema={schema}
        items={items}
        registry={registry}
        DescriptionField={() => null}
        TitleField={() => null}
        disabled={props.disabled}
        idSchema={props.idSchema}
        readonly={props.readonly}
        required={props.required}
        uiSchema={props.uiSchema}
        formContext={props.formContext as unknown}
        formData={props.formData}
      />
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
    </>
  )
}
