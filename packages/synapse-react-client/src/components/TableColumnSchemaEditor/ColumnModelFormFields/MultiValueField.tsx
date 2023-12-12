import React, { useMemo, useState } from 'react'
import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import JSONArrayEditorModal from '../../JSONArrayEditor/JSONArrayEditorModal'
import { getJsonSchemaItemDefinitionForColumnType } from '../TableColumnSchemaEditorUtils'
import { TextField, TextFieldProps } from '@mui/material'
import { formatDate } from '../../../utils/functions/DateFormatter'
import dayjs from 'dayjs'

export type MultiValueFieldProps<T = unknown> = {
  value?: T[] | null
  onChange: (newValue: T[] | null) => void
  columnType: ColumnTypeEnum
  TextFieldProps?: Omit<TextFieldProps, 'value' | 'onChange'>
}

export default function MultiValueField<T = unknown>(
  props: MultiValueFieldProps<T>,
) {
  const { columnType, onChange, value = [], TextFieldProps } = props
  const [isShowingModal, setIsShowingModal] = useState(false)

  const arrayItemDefinition = useMemo(
    () => getJsonSchemaItemDefinitionForColumnType(columnType),
    [columnType],
  )

  const textFieldDisplayedValue = useMemo(() => {
    if (value == null) {
      return ''
    }
    if (columnType === ColumnTypeEnum.DATE_LIST) {
      return value.map(v => formatDate(dayjs(v as string))).join(', ')
    }
    return value.join(', ')
  }, [value, columnType])

  return (
    <>
      <JSONArrayEditorModal
        arrayItemDefinition={arrayItemDefinition}
        value={value ?? undefined}
        isShowingModal={isShowingModal}
        onConfirm={values => {
          onChange(values)
          setIsShowingModal(false)
        }}
        onCancel={() => setIsShowingModal(false)}
      />
      <TextField
        {...TextFieldProps}
        value={textFieldDisplayedValue}
        onClick={() => {
          setIsShowingModal(true)
        }}
      />
    </>
  )
}
