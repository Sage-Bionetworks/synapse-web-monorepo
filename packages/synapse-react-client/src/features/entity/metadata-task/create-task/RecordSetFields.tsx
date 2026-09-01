import EntityIdTextField from '@/components/EntityFinder/EntityIdTextField'
import { FinderScope } from '@/components/EntityFinder/tree/EntityTree'
import { VersionSelectionType } from '@/components/EntityFinder/VersionSelectionType'
import { TextField } from '@/components/TextField'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { Stack } from '@mui/material'
import {
  RECORD_SET_DESTINATION_TASK_ID_DESCRIPTION,
  RECORD_SET_DESTINATION_TASK_ID_LABEL,
  RECORD_SET_FOLDER_FINDER_PROMPT,
  RECORD_SET_FOLDER_FINDER_TITLE,
  RECORD_SET_FOLDER_ID_DESCRIPTION,
  RECORD_SET_FOLDER_ID_LABEL,
  RECORD_SET_INSTRUCTIONS_DESCRIPTION,
  RECORD_SET_INSTRUCTIONS_LABEL,
  TASK_ID_FIELD_INVALID_ERROR_MESSAGE,
} from '../utils/constants'
import { isValidTaskIdInput } from './utils/taskIdValidation'

export type RecordSetFieldsValue = {
  folderId: string
  instructions: string
  destinationTaskId: string
}

export const EMPTY_RECORD_SET_VALUE: RecordSetFieldsValue = {
  folderId: '',
  instructions: '',
  destinationTaskId: '',
}

export function isRecordSetFieldsValueValid(
  value: RecordSetFieldsValue,
): boolean {
  return (
    !!value.folderId.trim() &&
    !!value.instructions.trim() &&
    isValidTaskIdInput(value.destinationTaskId)
  )
}

export type RecordSetFieldsProps = {
  value: RecordSetFieldsValue
  onChange: (value: RecordSetFieldsValue) => void
}

/**
 * Fields specific to a Record Set Generation compute task
 * (`RecordSetGenerationExecutionProperties`). Note that `instructions` here is the free-text prompt sent
 * to the transformation agent, distinct from the task-level `CommonTaskFields` instructions shown to the
 * human assignee.
 */
export default function RecordSetFields(props: RecordSetFieldsProps) {
  const { value, onChange } = props

  const destinationTaskIdIsValid = isValidTaskIdInput(value.destinationTaskId, {
    allowEmpty: true,
  })

  return (
    <Stack gap={2}>
      <EntityIdTextField
        label={RECORD_SET_FOLDER_ID_LABEL}
        value={value.folderId}
        onChange={folderId => onChange({ ...value, folderId })}
        description={RECORD_SET_FOLDER_ID_DESCRIPTION}
        required
        entityFinderModalProps={{
          title: RECORD_SET_FOLDER_FINDER_TITLE,
          promptCopy: RECORD_SET_FOLDER_FINDER_PROMPT,
          confirmButtonCopy: 'Select',
          configuration: {
            initialScope: FinderScope.ALL_PROJECTS,
            initialContainer: 'root',
            selectMultiple: false,
            treeOnly: false,
            versionSelection: VersionSelectionType.DISALLOWED,
            selectableTypes: [EntityType.folder],
          },
        }}
      />
      <TextField
        label={RECORD_SET_INSTRUCTIONS_LABEL}
        fullWidth
        required
        multiline
        minRows={3}
        value={value.instructions}
        onChange={e => onChange({ ...value, instructions: e.target.value })}
        description={RECORD_SET_INSTRUCTIONS_DESCRIPTION}
      />
      <TextField
        label={RECORD_SET_DESTINATION_TASK_ID_LABEL}
        fullWidth
        required
        value={value.destinationTaskId}
        onChange={e =>
          onChange({ ...value, destinationTaskId: e.target.value })
        }
        description={RECORD_SET_DESTINATION_TASK_ID_DESCRIPTION}
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
