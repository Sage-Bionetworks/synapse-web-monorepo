import React, { useMemo, useState } from 'react'
import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import JSONArrayEditorModal from '../../JSONArrayEditor/JSONArrayEditorModal'
import { getJsonSchemaItemDefinitionForColumnType } from '../TableColumnSchemaEditorUtils'
import { TextField, TextFieldProps } from '@mui/material'

export type RestrictedValuesFieldProps = {
  value?: string[]
  onChange: (newValue: string[]) => void
  columnType: ColumnTypeEnum
  TextFieldProps?: Omit<TextFieldProps, 'value' | 'onChange'>
}

export default function RestrictedValuesField(
  props: RestrictedValuesFieldProps,
) {
  const { columnType, onChange, value = [], TextFieldProps } = props
  const [isShowingModal, setIsShowingModal] = useState(false)

  const arrayItemDefinition = useMemo(
    () => getJsonSchemaItemDefinitionForColumnType(columnType),
    [columnType],
  )

  return (
    <>
      <JSONArrayEditorModal
        arrayItemDefinition={arrayItemDefinition}
        value={value}
        isShowingModal={isShowingModal}
        onConfirm={values => {
          onChange(values)
          setIsShowingModal(false)
        }}
        onCancel={() => setIsShowingModal(false)}
      />
      <TextField
        {...TextFieldProps}
        value={value.join(', ')}
        onClick={() => {
          setIsShowingModal(true)
        }}
      />
    </>
  )
}
