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
import dayjs, { isDayjs } from 'dayjs'
import FormHelperText from '@mui/material/FormHelperText'
import MultiValueField from './MultiValueField'
import { ColumnModelFormData } from '../Validators/ColumnModelValidator'

export type DefaultValueFieldProps<T> = {
  columnModel: ColumnModelFormData
  value: T | undefined
  onChange: (newValue: T | undefined) => void
  disabled?: boolean
  TextFieldProps?: Omit<TextFieldProps, 'value' | 'onChange' | 'disabled'>
  SelectProps?: Omit<SelectProps, 'value' | 'onChange' | 'disabled'>
  selectFormHelperText?: React.ReactNode
}

function DefaultValueBooleanField(props: DefaultValueFieldProps<string>) {
  const { onChange, value, disabled, SelectProps, selectFormHelperText } = props
  return (
    <FormControl fullWidth>
      <Select
        {...SelectProps}
        disabled={disabled}
        value={value}
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
    if (value != null) {
      return dayjs(value)
    }
    return value
  }, [value])

  return (
    <DateTimePicker
      value={valueAsDayjs}
      onChange={newValue => {
        if (isDayjs(newValue)) {
          onChange(newValue.toISOString())
        } else if (newValue == null) {
          onChange(undefined)
        } else {
          onChange(newValue)
        }
      }}
      disabled={disabled}
      slotProps={{
        textField: TextFieldProps,
      }}
    />
  )
}

function DefaultValueListField(props: DefaultValueFieldProps<string>) {
  const {
    onChange,
    value: _value = null,
    columnModel,
    TextFieldProps,
    disabled,
  } = props
  // The backend returns the default value as a serialized JSON string
  // Try to deserialize it
  const value = useMemo(() => {
    if (_value == null || _value == '') {
      return null
    }
    try {
      const parsedValue = JSON.parse(_value) as unknown[]
      if (columnModel.columnType === ColumnTypeEnum.DATE_LIST) {
        // if it's a DATE_LIST, then the values are Unix timestamps in milliseconds
        // divide by 1000 then parse with dayjs
        return parsedValue.map(v => {
          if (typeof v === 'number') {
            return dayjs(v / 1000)
          }
          return dayjs(v as string)
        })
      }
      return parsedValue
    } catch (e) {
      return null
    }
  }, [_value, columnModel.columnType])

  return (
    <MultiValueField
      value={value}
      onChange={arr => {
        if (arr == null) {
          onChange(undefined)
        }
        onChange(JSON.stringify(arr))
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
        {...(props as unknown as DefaultValueFieldProps<string>)}
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
