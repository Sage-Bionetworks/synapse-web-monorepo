import InfiniteTableLayout from '@/components/layout/InfiniteTableLayout'
import StyledTanStackTable from '@/components/TanStackTable/StyledTanStackTable'
import { useMetadataTaskTable } from '@/features/entity/metadata-task/hooks/useMetadataTaskTable'
import { useGetFeatureFlag } from '@/synapse-queries/index'
import { Button, FormControlLabel, Stack, Switch } from '@mui/material'
import { useState } from 'react'
import { ListCurationTaskRequest } from '@sage-bionetworks/synapse-client'
import { useGetEntityPermissions } from '@/synapse-queries/entity/useEntity'
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
  const [listCurationTaskRequest, setListCurationTaskRequest] =
    useState<ListCurationTaskRequest>({
      projectId,
      assignedToMe: false,
    })

  const { data: permissions } = useGetEntityPermissions(projectId)

  const { table, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useMetadataTaskTable({
      listCurationTaskRequest,
    })

  const showNewTaskButton = useGetFeatureFlag(
    FeatureFlagEnum.CURATION_TASK_PAGE_SHOW_NEW_TASK_BUTTON,
  )

  return (
    <Stack>
      <Stack direction="row" justifyContent="flex-end">
        <FormControlLabel
          control={
            <Switch
              checked={!!listCurationTaskRequest.assignedToMe}
              onChange={(_e, checked) => {
                setListCurationTaskRequest(prev => ({
                  ...prev,
                  assignedToMe: checked,
                }))
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
      <InfiniteTableLayout
        table={
          <StyledTanStackTable
            table={table}
            styledTableContainerProps={{ sx: { my: 2 } }}
          />
        }
        isLoading={isLoading}
        isEmpty={!isLoading && table.getRowModel().rows.length === 0}
        hasNextPage={hasNextPage}
        onFetchNextPageClicked={() => {
          fetchNextPage()
        }}
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
