import ColumnHeader from '@/components/TanStackTable/ColumnHeader'
import { UserBadge } from '@/components/UserCard/UserBadge'
import { getGridSourceIdForTask } from '@/features/entity/metadata-task/utils/getGridSourceIdForTask'
import { useGetCurationTasksByProjectInfinite } from '@/synapse-queries/curation/task/useCurationTask'
import { useGetEntityBundle } from '@/synapse-queries/index'
import { formatDate } from '@/utils/functions/DateFormatter'
import { getLinkToEntityPage } from '@/utils/functions/getSynapseWebClientLink'
import { Link } from '@mui/material'
import { CurationTask } from '@sage-bionetworks/synapse-client'
import {
  createColumnHelper,
  getCoreRowModel,
  Table,
  useReactTable,
} from '@tanstack/react-table'
import dayjs from 'dayjs'
import { useMemo } from 'react'
import MetadataTaskTableActionCell from '../components/MetadataTaskTableActionCell'

function getColumns(canEdit: boolean) {
  const columnHelper = createColumnHelper<CurationTask>()
  return [
    columnHelper.accessor('dataType', {
      header: props => <ColumnHeader {...props} title={'Tasks'} />,
      cell: ({ row, getValue }) => {
        const entityId = getGridSourceIdForTask(row.original)
        return <Link href={getLinkToEntityPage(entityId)}>{getValue()}</Link>
      },
      enableSorting: false,
      enableColumnFilter: false,
    }),
    columnHelper.accessor('instructions', {
      header: props => <ColumnHeader {...props} title={'Instructions'} />,
      cell: ({ getValue }) => <p>{getValue()}</p>,
      enableSorting: false,
      enableColumnFilter: false,
    }),
    columnHelper.accessor('modifiedBy', {
      header: props => <ColumnHeader {...props} title={'Modified By'} />,
      cell: ({ getValue }) => <UserBadge userId={getValue()} />,
      enableSorting: false,
      enableColumnFilter: false,
    }),
    columnHelper.accessor('modifiedOn', {
      header: props => <ColumnHeader {...props} title={'Modified On'} />,
      cell: ({ getValue }) => formatDate(dayjs(getValue())),
      enableSorting: false,
      enableColumnFilter: false,
    }),
    columnHelper.display({
      id: 'actions',
      header: props => <ColumnHeader {...props} title={'Actions'} />,
      cell: ({ row }) => (
        <MetadataTaskTableActionCell
          curationTask={row.original}
          canEdit={canEdit}
        />
      ),
    }),
  ]
}
type UseMetadataTaskTableOptions = {
  projectId: string
}

/**
 * Provides a table instance and loading states for displaying metadata curation tasks associated with a project.
 */
export function useMetadataTaskTable(opts: UseMetadataTaskTableOptions) {
  const { projectId } = opts

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading: isLoadingTasks,
    isFetchingNextPage,
  } = useGetCurationTasksByProjectInfinite(projectId)

  const { data: projectBundle, isLoading: isLoadingProjectBundle } =
    useGetEntityBundle(projectId)

  const canEditTasks = projectBundle?.permissions?.canEdit ?? false

  const tasks = useMemo(
    () => data?.pages.flatMap(page => page.page!) ?? [],
    [data],
  )

  const table: Table<CurationTask> = useReactTable<CurationTask>({
    data: tasks,
    columns: getColumns(canEditTasks),
    getRowId: row => String(row.taskId!),
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange',
    manualSorting: false,
    meta: {
      getWrapInExpandableTd: cell => cell.column.id === 'instructions',
    },
  })

  return {
    table,
    isLoading: isLoadingTasks || isLoadingProjectBundle,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  }
}
