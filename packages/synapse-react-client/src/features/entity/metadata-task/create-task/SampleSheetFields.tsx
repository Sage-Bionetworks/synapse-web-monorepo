import { TextField } from '@/components/TextField'
import { Stack } from '@mui/material'
import {
  SAMPLE_SHEET_DESTINATION_TASK_ID_DESCRIPTION,
  SAMPLE_SHEET_DESTINATION_TASK_ID_LABEL,
  SAMPLE_SHEET_INPUT_TASK_ID_DESCRIPTION,
  SAMPLE_SHEET_INPUT_TASK_ID_LABEL,
  TASK_ID_FIELD_INVALID_ERROR_MESSAGE,
} from '../utils/constants'
import { SampleSheetFieldsValue } from './utils/buildComputeTaskPayload'
import { isValidTaskIdInput } from './utils/taskIdValidation'

export type SampleSheetFieldsProps = {
  value: SampleSheetFieldsValue
  onChange: (value: SampleSheetFieldsValue) => void
}

/**
 * Fields specific to a Sample Sheet Generation compute task
 * (`SampleSheetGenerationExecutionProperties`).
 */
export default function SampleSheetFields(props: SampleSheetFieldsProps) {
  const { value, onChange } = props

  const inputTaskIdIsValid = isValidTaskIdInput(value.inputTaskId, {
    allowEmpty: true,
  })
  const destinationTaskIdIsValid = isValidTaskIdInput(value.destinationTaskId, {
    allowEmpty: true,
  })

  return (
    <Stack gap={2}>
      <TextField
        label={SAMPLE_SHEET_INPUT_TASK_ID_LABEL}
        fullWidth
        required
        value={value.inputTaskId}
        onChange={e => onChange({ ...value, inputTaskId: e.target.value })}
        description={SAMPLE_SHEET_INPUT_TASK_ID_DESCRIPTION}
        error={!inputTaskIdIsValid}
        helperText={
          inputTaskIdIsValid ? undefined : TASK_ID_FIELD_INVALID_ERROR_MESSAGE
        }
      />
      <TextField
        label={SAMPLE_SHEET_DESTINATION_TASK_ID_LABEL}
        fullWidth
        required
        value={value.destinationTaskId}
        onChange={e =>
          onChange({ ...value, destinationTaskId: e.target.value })
        }
        description={SAMPLE_SHEET_DESTINATION_TASK_ID_DESCRIPTION}
        error={!destinationTaskIdIsValid}
        helperText={
          destinationTaskIdIsValid
            ? undefined
            : TASK_ID_FIELD_INVALID_ERROR_MESSAGE
        }
      />
    </Stack>
  )
}
