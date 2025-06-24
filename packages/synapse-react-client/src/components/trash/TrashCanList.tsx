import {
  useGetItemsInTrashCanInfinite,
  usePurgeEntities,
  useRestoreEntities,
} from '@/synapse-queries/trash/useTrashCan'
import { formatDate } from '@/utils/functions/DateFormatter'
import { entityTypeToFriendlyName } from '@/utils/functions/EntityTypeUtils'
import { Alert, Box, Button, Typography } from '@mui/material'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { TrashedEntity } from '@sage-bionetworks/synapse-types'
import {
  ColumnDef,
  createColumnHelper,
  getCoreRowModel,
  RowSelectionState,
  Table,
  useReactTable,
} from '@tanstack/react-table'
import dayjs from 'dayjs'
import { useMemo, useState } from 'react'
import {
  CheckBoxCell,
  CheckBoxHeader,
} from '../EntityHeaderTable/EntityHeaderTableCellRenderers'
import { EntityLink } from '../EntityLink'
import { BlockingLoader, SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import WarningDialog from '../SynapseForm/WarningDialog'
import StyledTanStackTable from '../TanStackTable/StyledTanStackTable'

/**
 * Convert an array of Promise results to an array of errors
 */
function toSynapseClientErrorList(
  results: PromiseSettledResult<void>[],
): SynapseClientError[] {
  return results
    .filter(
      (result): result is PromiseRejectedResult => result.status === 'rejected',
    )
    .map(result => result.reason as SynapseClientError)
}

const columnHelper = createColumnHelper<TrashedEntity>()

function getTrashCanColumns(
  onRestore: (entityId: string) => void,
): ColumnDef<TrashedEntity, any>[] {
  return [
    {
      id: 'select',
      header: CheckBoxHeader,
      cell: CheckBoxCell,
      maxSize: 50,
    },
    columnHelper.accessor('entityId', {
      header: 'ID',
    }),
    columnHelper.accessor('entityName', {
      header: 'Name',
    }),
    columnHelper.accessor('entityType', {
      header: 'Entity Type',
      cell: info => entityTypeToFriendlyName(info.getValue()),
    }),
    columnHelper.accessor('originalParentId', {
      header: 'Location',
      cell: info => (
        <>
          {info.getValue() && <EntityLink entity={info.getValue()} />} (
          {info.getValue()})
        </>
      ),
      size: 200,
    }),
    columnHelper.accessor('deletedOn', {
      header: 'Deleted On',
      cell: info => formatDate(dayjs(info.getValue())),
    }),
    {
      id: 'restoreButton',
      header: '',
      cell: ({ row }) => (
        <Button
          size="small"
          variant="outlined"
          onClick={() => {
            onRestore(row.original.entityId)
            row.toggleSelected(false)
          }}
        >
          Restore
        </Button>
      ),
      maxSize: 100,
    },
  ]
}

export function TrashCanList() {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false)
  const [errors, setErrors] = useState<SynapseClientError[]>([])
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})

  /**
   * When a mutation operation settles, update the list of errors and clear the selected set
   */
  function onMutateSettled(
    results?: PromiseSettledResult<void>[],
    error?: SynapseClientError | null,
  ) {
    if (results) {
      setErrors(toSynapseClientErrorList(results))
    } else if (error) {
      setErrors([error])
    }
    setRowSelection({})
  }

  const { mutate: restore, isPending: isPendingRestore } = useRestoreEntities({
    onSettled: onMutateSettled,
  })
  const { mutate: purge, isPending: isPendingPurge } = usePurgeEntities({
    onSettled: onMutateSettled,
  })

  const isMutating = isPendingRestore || isPendingPurge

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetItemsInTrashCanInfinite({
      throwOnError: true,
    })
  const items = useMemo(
    () => data?.pages.flatMap(page => page.results) ?? [],
    [data],
  )

  const columns = useMemo<ColumnDef<TrashedEntity, any>[]>(
    () =>
      getTrashCanColumns(entityId => {
        restore(entityId)
      }),
    [restore],
  )

  const table: Table<TrashedEntity> = useReactTable<TrashedEntity>({
    data: items,
    columns,
    state: {
      rowSelection: rowSelection,
    },
    getRowId: row => row.entityId,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange',
  })

  const selectedEntityIds = table
    .getSelectedRowModel()
    .rows.map(row => row.original.entityId)

  return (
    <div>
      <BlockingLoader
        show={isMutating}
        headlineText={isPendingPurge ? 'Deleting...' : 'Restoring...'}
      />
      <Typography variant="body1">
        The trash can contains items that were recently deleted. You can recover
        deleted items in the trash can by clicking &quot;Restore&quot;. Items
        will remain in the trash can for 30 days before being automatically
        purged.
      </Typography>
      <WarningDialog
        title="Delete selected items from your Trash?"
        content={
          <Typography variant="body1">
            You can&apos;t undo this action.
          </Typography>
        }
        confirmButtonText="Delete"
        confirmButtonColor="error"
        onConfirm={() => {
          purge(selectedEntityIds)
          setShowDeleteConfirmation(false)
        }}
        onCancel={() => {
          setShowDeleteConfirmation(false)
        }}
        open={showDeleteConfirmation}
      />
      {isLoading && <SynapseSpinner />}
      {!isLoading && items.length === 0 && (
        <Alert severity={'info'} sx={{ my: 2 }}>
          <Typography variant="body1">
            Your trash can is currently empty.
          </Typography>
        </Alert>
      )}
      {!isLoading && items.length > 0 && (
        <>
          <StyledTanStackTable
            table={table}
            styledTableContainerProps={{ sx: { my: 4 } }}
          />
          {errors.length > 0 && (
            <Alert severity={'error'} sx={{ mb: 1 }}>
              The following errors were encountered:
              <ul style={{ marginBottom: 0 }}>
                {errors.map(error => (
                  <li key={error.message}>{error.message}</li>
                ))}
              </ul>
            </Alert>
          )}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 2,
            }}
          >
            {hasNextPage && (
              <Button
                variant="contained"
                disabled={isFetchingNextPage}
                onClick={() => {
                  fetchNextPage()
                }}
              >
                Load More
              </Button>
            )}
            <div style={{ margin: 'auto' }} />
            <Button
              variant="contained"
              color="error"
              disabled={selectedEntityIds.length === 0}
              onClick={() => {
                setShowDeleteConfirmation(true)
              }}
            >
              Delete Selected
            </Button>
            <Button
              variant="outlined"
              disabled={selectedEntityIds.length === 0}
              onClick={() => {
                restore(selectedEntityIds)
              }}
            >
              Restore Selected
            </Button>
          </Box>
        </>
      )}
    </div>
  )
}

export default TrashCanList
