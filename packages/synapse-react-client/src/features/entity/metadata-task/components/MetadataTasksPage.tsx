import InfiniteTableLayout from '@/components/layout/InfiniteTableLayout'
import StyledTanStackTable from '@/components/TanStackTable/StyledTanStackTable'
import { useMetadataTaskTable } from '@/features/entity/metadata-task/hooks/useMetadataTaskTable'

export type MetadataTaskTableProps = {
  projectId: string
}

/**
 * Displays a list of metadata curation tasks for a particular project, with actions that can be performed on each task.
 * @param props
 * @constructor
 */
export function MetadataTasksPage(props: MetadataTaskTableProps) {
  const { projectId } = props

  const { table, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useMetadataTaskTable({
      projectId,
    })

  return (
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
  )
}
