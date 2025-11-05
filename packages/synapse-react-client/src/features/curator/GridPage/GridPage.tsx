import SynapseGrid from '@/components/DataGrid/index'
import { ErrorBanner } from '@/components/index'
import GridPageRouter, {
  GridPageRouterProps,
} from '@/features/curator/GridPage/components/GridPageRouter'
import GridPageTitle from '@/features/curator/GridPage/components/GridPageTitle'
import {
  GRID_PAGE_SESSION_ID_QUERY_PARAM,
  GRID_PAGE_AGENT_REGISTRATION_ID_QUERY_PARAM,
  GRID_PAGE_TASK_ID_QUERY_PARAM,
} from '@/utils/SynapseConstants'
import { useSearchParams } from 'react-router'

function GridPageInternal() {
  const [searchParams] = useSearchParams()

  const sessionId = decodeURIComponent(
    searchParams.get(GRID_PAGE_SESSION_ID_QUERY_PARAM) ?? '',
  )
  const rawTaskId = searchParams.get(GRID_PAGE_TASK_ID_QUERY_PARAM)
  const taskId = rawTaskId ? parseInt(rawTaskId) : undefined
  const agentRegistrationId = searchParams.get(
    GRID_PAGE_AGENT_REGISTRATION_ID_QUERY_PARAM,
  )

  // If no session id, error
  if (!sessionId) {
    return <ErrorBanner error={'Missing sessionId'} />
  }

  return (
    <>
      <GridPageTitle sessionId={sessionId} taskId={taskId} />
      <div className={'pageContent'}>
        <SynapseGrid
          agentRegistrationId={agentRegistrationId ?? undefined}
          ref={handle => {
            if (!handle) return
            handle.loadExistingSession(sessionId)
          }}
        />
      </div>
    </>
  )
}

export type GridPageProps = Omit<GridPageRouterProps, 'children'>

/**
 * A page that displays the Curator grid, with included routing logic
 */
export default function GridPage(props: GridPageProps) {
  return (
    <GridPageRouter {...props}>
      <GridPageInternal />
    </GridPageRouter>
  )
}
