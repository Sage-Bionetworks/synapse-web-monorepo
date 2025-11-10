import { ErrorBanner } from '@/components/index'
import { StyledPopover } from '@/components/styled/StyledPopover'
import { useGetCurationTask } from '@/synapse-queries/curation/task/useCurationTask'
import { useGetGridSession } from '@/synapse-queries/grid/useGridSession'
import { useGetEntityHeader } from '@/synapse-queries/index'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions/index'
import { Link, Stack, Tooltip, Typography } from '@mui/material'

type GridPageTitleProps = {
  sessionId: string
  taskId?: number
}

export default function GridPageTitle(props: GridPageTitleProps) {
  const { sessionId, taskId } = props
  const { data: gridSession, error: gridSessionError } =
    useGetGridSession(sessionId)
  const { data: gridSourceEntity } = useGetEntityHeader(
    gridSession?.sourceEntityId,
  )
  const { data: curationTask } = useGetCurationTask(taskId || 0, {
    enabled: taskId != null,
  })

  if (gridSessionError) {
    return <ErrorBanner error={gridSessionError} />
  }

  return (
    <div className={'pageHeader'}>
      <h3 className={'pageHeaderTitle'}>
        Working Copy{' '}
        {gridSourceEntity?.name ? `of ${gridSourceEntity.name}` : ''}
      </h3>
      <Stack className={'description'} spacing={1}>
        <Typography variant={'headline2'}>ID: {sessionId}</Typography>
        {curationTask && (
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant={'body1'}>
              <strong>Task Name:</strong> {curationTask.dataType}{' '}
            </Typography>
            <StyledPopover popoverContent={curationTask.instructions}>
              <Link underline="hover">View Instructions</Link>
            </StyledPopover>
          </Stack>
        )}
        {gridSession?.gridJsonSchema$Id && (
          <div>
            <Tooltip title={gridSession?.gridJsonSchema$Id} placement={'right'}>
              <Link
                target={'_blank'}
                href={`${getEndpoint(
                  BackendDestinationEnum.REPO_ENDPOINT,
                )}/repo/v1/schema/type/registered/${
                  gridSession?.gridJsonSchema$Id
                }`}
              >
                View Validation Schema (JSON)
              </Link>
            </Tooltip>
          </div>
        )}
      </Stack>
    </div>
  )
}
