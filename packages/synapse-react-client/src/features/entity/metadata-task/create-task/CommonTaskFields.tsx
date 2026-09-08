import FieldDescription from '@/components/FieldDescription'
import { TextField } from '@/components/TextField'
import UserSearchBox from '@/components/UserSearchBox/UserSearchBox'
import { Box, InputLabel, Stack } from '@mui/material'
import { TYPE_FILTER } from '@sage-bionetworks/synapse-types'
import {
  ASSIGNEE_INPUT_DESCRIPTION,
  TASK_DUE_DATE_INPUT_DESCRIPTION,
  TASK_DUE_DATE_INPUT_LABEL,
  TASK_INSTRUCTIONS_INPUT_DESCRIPTION,
  TASK_NAME_INPUT_DESCRIPTION,
} from '../utils/constants'

const ASSIGNEE_INPUT_ID = 'create-task-assignee'

export type CommonTaskFieldsProps = {
  dataType: string
  onDataTypeChange: (value: string) => void
  dueDate: string
  onDueDateChange: (value: string) => void
  instructions: string
  onInstructionsChange: (value: string) => void
  assigneePrincipalId: string | undefined
  onAssigneePrincipalIdChange: (value: string | undefined) => void
}

/**
 * The fields shared by every Curation Task category: task name, due date, instructions to the assignee,
 * and the assignee themselves. Used by `ComputeTaskForm` and `CurateTaskForm`. Due date is optional.
 */
export default function CommonTaskFields(props: CommonTaskFieldsProps) {
  const {
    dataType,
    onDataTypeChange,
    dueDate,
    onDueDateChange,
    instructions,
    onInstructionsChange,
    assigneePrincipalId,
    onAssigneePrincipalIdChange,
  } = props

  return (
    <Stack gap={2}>
      <TextField
        label="Task Name"
        fullWidth
        required
        value={dataType}
        onChange={e => onDataTypeChange(e.target.value)}
        description={TASK_NAME_INPUT_DESCRIPTION}
        placeholder="Enter name"
      />
      <TextField
        label={TASK_DUE_DATE_INPUT_LABEL}
        fullWidth
        type="date"
        value={dueDate}
        onChange={e => onDueDateChange(e.target.value)}
        description={TASK_DUE_DATE_INPUT_DESCRIPTION}
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <TextField
        label="Instructions"
        fullWidth
        required
        multiline
        minRows={3}
        value={instructions}
        onChange={e => onInstructionsChange(e.target.value)}
        description={TASK_INSTRUCTIONS_INPUT_DESCRIPTION}
      />
      <Box>
        <InputLabel htmlFor={ASSIGNEE_INPUT_ID}>Assignee</InputLabel>
        <FieldDescription>{ASSIGNEE_INPUT_DESCRIPTION}</FieldDescription>
        <UserSearchBox
          inputId={ASSIGNEE_INPUT_ID}
          value={assigneePrincipalId ?? null}
          onChange={id => onAssigneePrincipalIdChange(id ?? undefined)}
          typeFilter={TYPE_FILTER.ALL}
        />
      </Box>
    </Stack>
  )
}
