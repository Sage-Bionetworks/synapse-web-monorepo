import { alpha } from '@mui/material/styles'
import { SxProps } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { TextFieldProps } from '@mui/material/TextField'
import { Theme } from '@mui/material/styles'
import Tooltip from '@mui/material/Tooltip'
import { ColumnType, ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import {
  getFormDataValueAsNumber,
  isFormDataValueSmallerThanRecommendedValue,
} from '../TableColumnSchemaEditorUtils'

export type FieldWithRecommendedValueProps = Omit<TextFieldProps, 'value'> & {
  value: string | number | undefined
  originalValue?: string | number | undefined
  recommendedValue?: number
  columnType: ColumnType
}

export function FieldWithRecommendedMinimum(
  props: FieldWithRecommendedValueProps,
) {
  const {
    value,
    originalValue,
    recommendedValue,
    columnType,
    error: errorFromProps,
    ...textFieldProps
  } = props

  const isSmallerThanRecommendedValue =
    isFormDataValueSmallerThanRecommendedValue(value, recommendedValue)

  const hasChangedFromOriginal =
    originalValue != null &&
    getFormDataValueAsNumber(value) !== getFormDataValueAsNumber(originalValue)

  const showError = !!errorFromProps || isSmallerThanRecommendedValue

  let tooltipText = null
  let additionalSx: SxProps<Theme> | undefined = undefined
  if (isSmallerThanRecommendedValue) {
    tooltipText = (
      <>
        <p>Data annotations are longer than allowed by current schema.</p>
        <p>
          Recommended size is <strong>{recommendedValue}</strong>.
        </p>
        {ColumnTypeEnum.STRING === columnType && (
          <p>If unsure, choose “MediumText” from the Column Type menu.</p>
        )}
      </>
    )
  } else if (hasChangedFromOriginal) {
    tooltipText = (
      <>
        <p>This value has changed since the table was last saved.</p>
        <p>The last saved value was {originalValue}.</p>
      </>
    )
    additionalSx = theme => ({
      '& .MuiInputBase-root': {
        backgroundColor: alpha(theme.palette.info.main, 0.1),
        border: '1px solid',
        borderColor: theme.palette.info.main,
      },
    })
  }

  return (
    <Tooltip title={tooltipText}>
      <TextField
        value={value ?? ''}
        error={showError}
        color={showError ? 'error' : undefined}
        focused={isSmallerThanRecommendedValue ? true : undefined}
        sx={[
          ...(Array.isArray(textFieldProps.sx)
            ? textFieldProps.sx
            : [textFieldProps.sx]),
          additionalSx,
        ]}
        {...textFieldProps}
      />
    </Tooltip>
  )
}
