import React, { useMemo } from 'react'
import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import {
  FormControl,
  MenuItem,
  Select,
  SelectProps,
  TextField,
  TextFieldProps,
} from '@mui/material'
import DateTimePicker from '../../DateTimePicker/DateTimePicker'
import dayjs from 'dayjs'
import FormHelperText from '@mui/material/FormHelperText'
import MultiValueField from './MultiValueField'
import { ColumnModelFormData } from '../Validators/ColumnModelValidator'
import customParseFormat from 'dayjs/plugin/customParseFormat'

// required to parse unix timestamp below
dayjs.extend(customParseFormat)

export type DefaultValueFieldProps<TValue, TReturn = TValue> = {
  columnModel: ColumnModelFormData
  value: TValue | undefined
  onChange: (newValue: TReturn | undefined) => void
  disabled?: boolean
  TextFieldProps?: Omit<TextFieldProps, 'value' | 'onChange' | 'disabled'>
  SelectProps?: Omit<SelectProps, 'variant' | 'value' | 'onChange' | 'disabled'>
  selectFormHelperText?: React.ReactNode
}

function DefaultValueBooleanField(props: DefaultValueFieldProps<string>) {
  const { onChange, value, disabled, SelectProps, selectFormHelperText } = props
  return (
    <FormControl fullWidth>
      <Select
        {...SelectProps}
        disabled={disabled}
        value={value || ''}
        onChange={e => {
          if (e.target.value == null) {
            onChange(undefined)
          } else {
            onChange(e.target.value as string)
          }
        }}
      >
        <MenuItem value={undefined}>{''}</MenuItem>
        <MenuItem value={'true'}>true</MenuItem>
        <MenuItem value={'false'}>false</MenuItem>
      </Select>
      {selectFormHelperText && (
        <FormHelperText color={'error.main'}>
          {selectFormHelperText}
        </FormHelperText>
      )}
    </FormControl>
  )
}

function DefaultValueDateField(props: DefaultValueFieldProps<string>) {
  const { onChange, value = null, disabled, TextFieldProps } = props

  const valueAsDayjs = useMemo(() => {
    if (value) {
      // The backend service returns a string that contains an integer unix timestamp with millisecond precision
      // Passing the raw string to dayjs without a format option will parse the value incorrectly
      // 'x' indicates parsing the value as a ms Unix Timestamp - https://day.js.org/docs/en/parse/string-format
      return dayjs(value, 'x')
    }
    return null
  }, [value])

  return (
    <DateTimePicker
      value={valueAsDayjs}
      onChange={newValue => {
        if (newValue == null) {
          onChange(undefined)
        } else {
          // onChange argument should match the backend's passed value
          onChange(String(newValue.valueOf()))
        }
      }}
      disabled={disabled}
      slotProps={{
        textField: TextFieldProps,
      }}
    />
  )
}

function DefaultValueListField(
  props: DefaultValueFieldProps<(string | number)[], (string | number)[]>,
) {
  // Note the backend returns a string that is a serialized JSON array.
  // However, TableColumnSchemaEditorUtils.transformColumnModelsToFormData will parse this before this component receives the value.
  // So this component will get an array of strings or numbers
  const {
    onChange,
    value: _value = null,
    columnModel,
    TextFieldProps,
    disabled,
  } = props
  const value = useMemo(() => {
    try {
      if (
        columnModel.columnType === ColumnTypeEnum.DATE_LIST &&
        Array.isArray(_value)
      ) {
        // if it's a DATE_LIST, then the values are Unix timestamps in milliseconds
        // The `MultiValueField` component expects ISO strings to match the JSON Schema 'date-time' format
        return _value.map(v => {
          return dayjs(v, 'x').toISOString()
        })
      }
      return _value
    } catch (e) {
      return null
    }
  }, [_value, columnModel.columnType])

  return (
    <MultiValueField
      value={value}
      onChange={arr => {
        if (arr == null) {
          // Convert null to undefined
          onChange(undefined)
        } else if (columnModel.columnType === ColumnTypeEnum.DATE_LIST) {
          // Transform the ISO Timestamps to integer unix timestamps to match the passed value
          onChange(arr.map(val => dayjs(val).valueOf()))
        } else {
          onChange(arr)
        }
      }}
      columnType={columnModel.columnType as ColumnTypeEnum}
      TextFieldProps={{ ...TextFieldProps, disabled }}
    />
  )
}

export default function DefaultValueField<T>(props: DefaultValueFieldProps<T>) {
  const { columnModel, onChange, value, disabled, TextFieldProps } = props

  const { columnType } = columnModel

  if (columnType === ColumnTypeEnum.BOOLEAN) {
    return (
      <DefaultValueBooleanField
        {...(props as unknown as DefaultValueFieldProps<string>)}
      />
    )
  }

  if (columnType === ColumnTypeEnum.DATE) {
    return (
      <DefaultValueDateField
        {...(props as unknown as DefaultValueFieldProps<string>)}
      />
    )
  }

  if (columnType.endsWith('_LIST')) {
    return (
      <DefaultValueListField
        {...(props as unknown as DefaultValueFieldProps<(string | number)[]>)}
      />
    )
  }

  return (
    <TextField
      {...TextFieldProps}
      type={'text'}
      value={value || undefined}
      onChange={event => {
        if (event.target.value == '') {
          onChange(undefined as T)
        } else {
          onChange(event.target.value as T)
        }
      }}
      disabled={disabled}
    />
  )
}
