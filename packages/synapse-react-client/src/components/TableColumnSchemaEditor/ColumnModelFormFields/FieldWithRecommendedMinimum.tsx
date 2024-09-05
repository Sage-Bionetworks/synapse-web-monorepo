import React from 'react'
import { TextField, TextFieldProps, Tooltip } from '@mui/material'
import { isFormDataValueSmallerThanRecommendedValue } from '../TableColumnSchemaEditorUtils'
import { ColumnType, ColumnTypeEnum } from '@sage-bionetworks/synapse-types'

export type FieldWithRecommendedValueProps = Omit<TextFieldProps, 'value'> & {
  value: string | number | undefined
  recommendedValue?: number
  columnType: ColumnType
}

export function FieldWithRecommendedMinimum(
  props: FieldWithRecommendedValueProps,
) {
  const {
    value,
    recommendedValue,
    columnType,
    error: errorFromProps,
    ...textFieldProps
  } = props

  const isSmallerThanRecommendedValue =
    isFormDataValueSmallerThanRecommendedValue(value, recommendedValue)

  const showError = !!errorFromProps || isSmallerThanRecommendedValue

  const tooltipText = isSmallerThanRecommendedValue ? (
    <>
      <p>Data annotations are longer than allowed by current schema.</p>
      <p>
        Recommended size is <strong>{recommendedValue}</strong>.
      </p>
      {ColumnTypeEnum.STRING === columnType && (
        <p>If unsure, choose “MediumText” from the Column Type menu.</p>
      )}
    </>
  ) : (
    ''
  )

  return (
    <Tooltip title={tooltipText}>
      <TextField
        value={value ?? ''}
        error={showError}
        color={showError ? 'error' : undefined}
        focused={isSmallerThanRecommendedValue ? true : undefined}
        {...textFieldProps}
      />
    </Tooltip>
  )
}
