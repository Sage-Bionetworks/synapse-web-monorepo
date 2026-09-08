import InfiniteTableLayout from '@/components/layout/InfiniteTableLayout'
import CurationTaskCard from '@/features/curator/dashboard/components/CurationTaskCard'
import FilteredByTaskIdsBanner from '@/features/curator/dashboard/components/FilteredByTaskIdsBanner'
import { useGetCurationTasksInfinite } from '@/synapse-queries/curation/task/useCurationTask'
import { useGetFeatureFlag } from '@/synapse-queries/index'
import { useGetEntityPermissions } from '@/synapse-queries/entity/useEntity'
import { useCurationTaskListFilters } from '@/utils/hooks/useCurationTaskListFilters'
import { Button, FormControlLabel, Stack, Switch } from '@mui/material'
import { useMemo } from 'react'
import { AddCircleTwoTone } from '@mui/icons-material'
import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'
import { useNavigate } from 'react-router'
import MetadataTasksPageRouter, {
  MetadataTasksPageRouterProps,
} from './MetadataTasksPageRouter'

export type MetadataTaskTableProps = {
  projectId: string
}

/**
 * Displays a list of metadata curation tasks for a particular project, with actions that can be performed on each task.
 */
function MetadataTasksPageInternal(props: MetadataTaskTableProps) {
  const { projectId } = props
  const navigate = useNavigate()
  const {
    request,
    taskIds,
    assignedToMe,
    setAssignedToMe,
    clearTaskIdsFilter,
  } = useCurationTaskListFilters({ projectId })

  const { data: permissions } = useGetEntityPermissions(projectId)

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetCurationTasksInfinite(request)

  const tasks = useMemo(
    () => data?.pages.flatMap(page => page.bundlePage ?? []) ?? [],
    [data],
  )

  const showNewTaskButton = useGetFeatureFlag(
    FeatureFlagEnum.CURATION_TASK_PAGE_SHOW_NEW_TASK_BUTTON,
  )

  return (
    <Stack>
      <Stack direction="row" justifyContent="flex-end">
        <FormControlLabel
          control={
            <Switch
              checked={assignedToMe}
              onChange={(_e, checked) => {
                setAssignedToMe(checked)
              }}
            />
          }
          label="View only tasks assigned to me"
        />
        {showNewTaskButton && permissions?.canAddChild && (
          <Button
            variant="outlined"
            onClick={() => void navigate('create')}
            startIcon={<AddCircleTwoTone />}
          >
            New Task
          </Button>
        )}
      </Stack>
      <FilteredByTaskIdsBanner taskIds={taskIds} onClear={clearTaskIdsFilter} />
      <InfiniteTableLayout
        table={
          <Stack gap={3} sx={{ my: 2 }}>
            {tasks.map(taskBundle => (
              <CurationTaskCard
                key={taskBundle.task?.taskId}
                taskBundle={taskBundle}
              />
            ))}
          </Stack>
        }
        isLoading={isLoading}
        isEmpty={!isLoading && tasks.length === 0}
        hasNextPage={hasNextPage}
        onFetchNextPageClicked={() => void fetchNextPage()}
        isFetchingNextPage={isFetchingNextPage}
      />
    </Stack>
  )
}

export type MetadataTasksPageProps = MetadataTaskTableProps &
  Omit<MetadataTasksPageRouterProps, 'projectId'>

/**
 * A page that displays a project's metadata curation tasks, with included routing logic for the
 * create/edit task pages.
 */
export default function MetadataTasksPage(props: MetadataTasksPageProps) {
  return <MetadataTasksPageRouter {...props} />
}

export { MetadataTasksPageInternal }
