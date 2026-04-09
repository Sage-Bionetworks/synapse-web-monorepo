import InfiniteTableLayout from '@/components/layout/InfiniteTableLayout'
import StyledTanStackTable from '@/components/TanStackTable/StyledTanStackTable'
import { useMetadataTaskTable } from '@/features/entity/metadata-task/hooks/useMetadataTaskTable'
import { FormControlLabel, Stack, Switch } from '@mui/material'
import { useState } from 'react'
import { ListCurationTaskRequest } from '@sage-bionetworks/synapse-client'

export type MetadataTaskTableProps = {
  projectId: string
}

/**
 * Displays a list of metadata curation tasks for a particular project, with actions that can be performed on each task.
 * @param props
 * @constructor
 */
export default function MetadataTasksPage(props: MetadataTaskTableProps) {
  const { projectId } = props
  const [listCurationTaskRequest, setListCurationTaskRequest] =
    useState<ListCurationTaskRequest>({
      projectId,
      assignedToMe: false,
    })

  const { table, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useMetadataTaskTable({
      listCurationTaskRequest,
    })

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
