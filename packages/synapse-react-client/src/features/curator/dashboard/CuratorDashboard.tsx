import InfiniteTableLayout from '@/components/layout/InfiniteTableLayout'
import OpenInvitationsToUserCard from '@/features/team/invitation/components/OpenInvitationsToUserCard'
import { useGetCurationTasksInfinite } from '@/synapse-queries/curation/task/useCurationTask'
import { useCurationTaskListFilters } from '@/utils/hooks/useCurationTaskListFilters'
import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import { useMemo } from 'react'
import CurationTaskCard from './components/CurationTaskCard'
import FilteredByTaskIdsBanner from './components/FilteredByTaskIdsBanner'
import sharedStyles from './components/shared.module.scss'

export default function CuratorDashboardContent() {
  const { request, taskIds, clearTaskIdsFilter } = useCurationTaskListFilters({
    defaultAssignedToMe: true,
  })

  const {
    data: curationTasks,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetCurationTasksInfinite(request)

  const tasks = useMemo(() => {
    return curationTasks?.pages.flatMap(page => page.bundlePage ?? []) ?? []
  }, [curationTasks])

  return (
    <Stack gap={4}>
      <Typography variant="headline1">On Your Radar</Typography>
      <OpenInvitationsToUserCard cardProps={{ className: sharedStyles.card }} />
      <FilteredByTaskIdsBanner taskIds={taskIds} onClear={clearTaskIdsFilter} />
      <InfiniteTableLayout
        table={
          <Stack gap={3}>
            {tasks.map(taskBundle => (
              <CurationTaskCard
                key={taskBundle.task?.taskId}
                taskBundle={taskBundle}
              />
            ))}
          </Stack>
        }
        isLoading={isLoading}
        isEmpty={tasks.length === 0}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
        onFetchNextPageClicked={() => void fetchNextPage()}
        noResults={'There are currently no curation tasks assigned to you.'}
      ></InfiniteTableLayout>
    </Stack>
  )
}
