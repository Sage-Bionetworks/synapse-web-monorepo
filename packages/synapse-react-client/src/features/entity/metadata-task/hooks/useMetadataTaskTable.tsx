import ColumnHeader from '@/components/TanStackTable/ColumnHeader'
import { getGridSourceIdForTask } from '@/features/entity/metadata-task/utils/getGridSourceIdForTask'
import { useGetCurationTasksByProjectInfinite } from '@/synapse-queries/curation/task/useCurationTask'
import { useGetEntityBundle } from '@/synapse-queries/index'
import { formatDate } from '@/utils/functions/DateFormatter'
import { getLinkToEntityPage } from '@/utils/functions/getSynapseWebClientLink'
import { Link } from '@mui/material'
import {
  ListCurationTaskRequest,
  TaskBundle,
} from '@sage-bionetworks/synapse-client'
import {
  createColumnHelper,
  getCoreRowModel,
  Table,
  useReactTable,
} from '@tanstack/react-table'
import dayjs from 'dayjs'
import { useMemo } from 'react'
import MetadataTaskTableActionCell from '../components/MetadataTaskTableActionCell'
import MetadataTasksTableAssigneeCell from '../components/MetadataTasksTableAssigneeCell'

function getColumns(canEdit: boolean) {
  const columnHelper = createColumnHelper<TaskBundle>()
  return [
    columnHelper.accessor('task.dataType', {
      header: props => <ColumnHeader {...props} title={'Task'} />,
      cell: ({ row, getValue }) => {
        const entityId = getGridSourceIdForTask(row.original.task!)
        return <Link href={getLinkToEntityPage(entityId)}>{getValue()}</Link>
      },
      enableSorting: false,
      enableColumnFilter: false,
    }),
    columnHelper.accessor('task.instructions', {
      header: props => <ColumnHeader {...props} title={'Instructions'} />,
      cell: ({ getValue }) => <p>{getValue()}</p>,
      enableSorting: false,
      enableColumnFilter: false,
    }),
    columnHelper.accessor('task.assigneePrincipalId', {
      header: props => <ColumnHeader {...props} title={'Assignee'} />,
      cell: ({ row }) => (
        <MetadataTasksTableAssigneeCell
          taskBundle={row.original}
          canEdit={canEdit}
        />
      ),
      enableSorting: false,
      enableColumnFilter: false,
    }),
    columnHelper.accessor('task.modifiedOn', {
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
          taskBundle={row.original}
          canEdit={canEdit}
        />
      ),
    }),
  ]
}

type UseMetadataTaskTableOptions = {
  listCurationTaskRequest: ListCurationTaskRequest
}

/**
 * Provides a table instance and loading states for displaying metadata curation tasks associated with a project.
 */
export function useMetadataTaskTable(opts: UseMetadataTaskTableOptions) {
  const { listCurationTaskRequest } = opts

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading: isLoadingTasks,
    isFetchingNextPage,
  } = useGetCurationTasksByProjectInfinite(listCurationTaskRequest)

  const { data: projectBundle, isLoading: isLoadingProjectBundle } =
    useGetEntityBundle(
      listCurationTaskRequest.projectId,
      undefined,
      { includePermissions: true },
      {
        enabled: !!listCurationTaskRequest.projectId,
      },
    )

  const canEditTasks = projectBundle?.permissions?.canEdit ?? false

  const tasks = useMemo(
    () => data?.pages.flatMap(page => page.bundlePage!) ?? [],
    [data],
  )

  const table: Table<TaskBundle> = useReactTable<TaskBundle>({
    data: tasks,
    columns: getColumns(canEditTasks),
    getRowId: row => String(row.task!.taskId!),
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
