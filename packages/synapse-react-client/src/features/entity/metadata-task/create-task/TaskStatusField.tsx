import { StyledFormControl } from '@/components/styled'
import { InputLabel, MenuItem, Select } from '@mui/material'
import { TaskStatusStateEnum } from '@sage-bionetworks/synapse-client'
import { TASK_STATUS_CONFIG, TASK_STATUS_INPUT_LABEL } from '../utils/constants'

export type TaskStatusFieldProps = {
  value: TaskStatusStateEnum | undefined
  onChange: (state: TaskStatusStateEnum) => void
  disabled: boolean
  /**
   * States the user must not be able to manually select into (e.g. EXECUTING, which a compute task
   * enters automatically). These still render as `MenuItem`s -- so a task already in one of these
   * states continues to display it correctly -- but are disabled.
   */
  disabledStates: TaskStatusStateEnum[]
  /** Must be unique per rendered instance; passed through to both the `InputLabel` and the `Select`. */
  labelId: string
}

/**
 * The task status `<Select>` shown in edit mode by both `ComputeTaskForm` and `CurateTaskForm`.
 */
export default function TaskStatusField(props: TaskStatusFieldProps) {
  const { value, onChange, disabled, disabledStates, labelId } = props

  return (
    <StyledFormControl fullWidth>
      <InputLabel id={labelId}>{TASK_STATUS_INPUT_LABEL}</InputLabel>
      <Select
        labelId={labelId}
        value={value ?? ''}
        label={TASK_STATUS_INPUT_LABEL}
        disabled={disabled}
        onChange={e => onChange(e.target.value as TaskStatusStateEnum)}
      >
        {Object.values(TaskStatusStateEnum).map(state => (
          <MenuItem
            key={state}
            value={state}
            disabled={disabledStates.includes(state)}
          >
            {TASK_STATUS_CONFIG[state].label}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  )
}
