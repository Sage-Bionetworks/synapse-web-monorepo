import { SkeletonTable } from '@/components/Skeleton'
import ColumnHeader from '@/components/TanStackTable/ColumnHeader'
import StyledTanStackTable from '@/components/TanStackTable/StyledTanStackTable'
import { useListUserDataAccessRequestsInfinite } from '@/synapse-queries'
import { Alert, Box, Typography } from '@mui/material'
import {
  AccessRequestSummary,
  AccessRequestSummaryStatusEnum,
} from '@sage-bionetworks/synapse-client'
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useEffect, useMemo } from 'react'

const IN_FLIGHT_STATUSES: readonly AccessRequestSummaryStatusEnum[] = [
  'sent',
  'delivered',
  'completed',
] as const

const STATUS_DISPLAY: Record<string, string> = {
  sent: 'Signatures pending',
  delivered: 'Signatures pending',
  completed: 'Ready to submit',
}

const columnHelper = createColumnHelper<AccessRequestSummary>()
const columns = [
  columnHelper.accessor('accessRequirementName', {
    header: props => <ColumnHeader {...props} title={'Request type'} />,
    enableSorting: false,
    enableColumnFilter: false,
  }),
  columnHelper.display({
    id: 'signatureProgress',
    header: props => <ColumnHeader {...props} title={'Signature progress'} />,
    enableSorting: false,
    cell: ctx => {
      const acquired = ctx.row.original.signaturesAcquired ?? 0
      const requested = ctx.row.original.signaturesRequested ?? 0
      return `${acquired} of ${requested}`
    },
    enableColumnFilter: false,
    size: 150,
  }),
  columnHelper.accessor('status', {
    header: props => <ColumnHeader {...props} title={'Current status'} />,
    enableSorting: false,
    cell: ctx => {
      const status = ctx.getValue()
      return status ? (STATUS_DISPLAY[status] ?? status) : ''
    },
    enableColumnFilter: false,
    size: 150,
  }),
]

/**
 * Lists the requester's active eDUC signatures (routed / signed but not yet submitted).
 *
 * Every page of `POST /dataAccessRequest/list` is fetched before rendering because filtering is
 * done client-side pending PLFM-9907 (which will add an `isEDuc` server-side filter). Once
 * server-side filtering ships, this can move to a standard InfiniteTableLayout with "Show More".
 *
 * Renders nothing when the fully-loaded, filtered list is empty.
 */
export function InFlightEDucSignaturesTable() {
  const {
    data: infiniteData,
    isLoading,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useListUserDataAccessRequestsInfinite()

  // Auto-fetch remaining pages so client-side filtering sees the complete list.
  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage) {
      void fetchNextPage()
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  const rows = useMemo(
    () =>
      (infiniteData?.pages ?? [])
        .flatMap(page => page.results ?? [])
        .filter(
          summary =>
            summary.isEDuc === true &&
            summary.status !== undefined &&
            (IN_FLIGHT_STATUSES as readonly string[]).includes(summary.status),
        ),
    [infiniteData],
  )

  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange',
  })

  if (error) {
    return (
      <Alert severity={'error'}>
        <strong>
          Sorry, we couldn&apos;t load your in-flight eDUC signatures.
        </strong>
        <br />
        {error.reason}
      </Alert>
    )
  }

  const isStillLoading = isLoading || hasNextPage || isFetchingNextPage
  if (isStillLoading && rows.length === 0) {
    return <SkeletonTable numCols={columns.length} fullWidthCells />
  }

  if (!isStillLoading && rows.length === 0) {
    return null
  }

  return (
    <Box>
      <Typography variant={'headline2'} component={'h2'} gutterBottom>
        In-flight eDUC signatures
      </Typography>
      <StyledTanStackTable table={table} fullWidth={true} />
    </Box>
  )
}
