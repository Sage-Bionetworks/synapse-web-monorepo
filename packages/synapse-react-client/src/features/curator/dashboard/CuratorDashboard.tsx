import InfiniteTableLayout from '@/components/layout/InfiniteTableLayout'
import OpenInvitationsToUserCard from '@/features/team/invitation/components/OpenInvitationsToUserCard'
import { useGetCurationTasksInfinite } from '@/synapse-queries/curation/task/useCurationTask'
import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import { useMemo } from 'react'
import CurationTaskCard from './components/CurationTaskCard'
import sharedStyles from './components/shared.module.scss'
import SWCPageLayout from '@/components/layout/SWCPageLayout'

export default function CuratorDashboard() {
  const {
    data: curationTasks,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetCurationTasksInfinite({
    assignedToMe: true,
  })

  const tasks = useMemo(() => {
    return curationTasks?.pages.flatMap(page => page.bundlePage ?? []) ?? []
  }, [curationTasks])

  return (
    <SWCPageLayout header={{ title: 'Curator Dashboard' }}>
      <Stack className="pageContent" gap={4} mt={5}>
        <Typography variant="headline1">On Your Radar</Typography>
        <OpenInvitationsToUserCard
          cardProps={{ className: sharedStyles.card }}
        />
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
    </SWCPageLayout>
  )
}
