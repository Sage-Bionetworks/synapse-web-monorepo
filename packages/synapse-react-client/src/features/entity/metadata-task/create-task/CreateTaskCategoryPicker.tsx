import { Stack, Typography } from '@mui/material'
import {
  COMPUTE_TASK_CATEGORY_TITLE,
  CURATE_TASK_CATEGORY_TITLE,
  SELECT_TASK_CATEGORY_DESCRIPTION,
} from '../utils/constants'
import TaskCategoryCard from './TaskCategoryCard'

export type CreateTaskCategoryPickerProps = {
  onSelectCompute: () => void
  onSelectCurate: () => void
}

/**
 * Step 1 of the create-task flow: lets the user pick which category of task to create, Compute Data or
 * Curate Data.
 */
export default function CreateTaskCategoryPicker(
  props: CreateTaskCategoryPickerProps,
) {
  const { onSelectCompute, onSelectCurate } = props

  return (
    <Stack gap={3} alignItems="center">
      <Typography variant="headline3" component="p" color="text.secondary">
        {SELECT_TASK_CATEGORY_DESCRIPTION}
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        gap={3}
        justifyContent="center"
      >
        <TaskCategoryCard
          title={CURATE_TASK_CATEGORY_TITLE}
          onClick={onSelectCurate}
        />
        <TaskCategoryCard
          title={COMPUTE_TASK_CATEGORY_TITLE}
          onClick={onSelectCompute}
        />
      </Stack>
    </Stack>
  )
}
