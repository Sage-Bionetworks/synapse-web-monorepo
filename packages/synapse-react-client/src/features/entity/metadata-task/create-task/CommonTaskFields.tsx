import { TextField } from '@/components/TextField'
import UserSearchBox from '@/components/UserSearchBox/UserSearchBox'
import { HelpTwoTone } from '@mui/icons-material'
import { Box, InputLabel, Stack, Tooltip } from '@mui/material'
import { TYPE_FILTER } from '@sage-bionetworks/synapse-types'
import {
  ASSIGNEE_TOOLTIP,
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
 * and the assignee themselves. Used by `ComputeTaskForm` and, in the future, the Curate Data create/edit form.
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
      />
      <TextField
        label={TASK_DUE_DATE_INPUT_LABEL}
        fullWidth
        required
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <InputLabel htmlFor={ASSIGNEE_INPUT_ID} required>
            Assignee
          </InputLabel>
          <Tooltip title={ASSIGNEE_TOOLTIP}>
            <div>
              <HelpTwoTone sx={{ color: 'grey.700' }} />
            </div>
          </Tooltip>
        </Box>
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
