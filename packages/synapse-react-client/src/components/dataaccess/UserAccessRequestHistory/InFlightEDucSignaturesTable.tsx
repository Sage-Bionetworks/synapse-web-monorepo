import { SkeletonTable } from '@/components/Skeleton'
import ColumnHeader from '@/components/TanStackTable/ColumnHeader'
import StyledTanStackTable from '@/components/TanStackTable/StyledTanStackTable'
import { useListAllUserDataAccessRequests } from '@/synapse-queries'
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
import { useMemo } from 'react'

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
 * The underlying query walks every page of `POST /dataAccessRequest/list` inside its `queryFn`
 * because filtering is done client-side pending PLFM-9907 (which will add an `isEDuc` server-side
 * filter). Once server-side filtering ships, callers can switch back to a per-page infinite query
 * with a "Show More" button.
 *
 * Renders nothing when the fully-loaded, filtered list is empty.
 */
export function InFlightEDucSignaturesTable() {
  const {
    data: summaries,
    isLoading,
    error,
  } = useListAllUserDataAccessRequests()

  const rows = useMemo(
    () =>
      (summaries ?? []).filter(
        summary =>
          summary.isEDuc === true &&
          summary.status !== undefined &&
          (IN_FLIGHT_STATUSES as readonly string[]).includes(summary.status),
      ),
    [summaries],
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

  if (isLoading) {
    return <SkeletonTable numCols={columns.length} fullWidthCells />
  }

  if (rows.length === 0) {
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
