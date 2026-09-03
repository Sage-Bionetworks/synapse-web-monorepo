import AccessRequirementList, {
  RequestDataStep,
} from '@/components/AccessRequirementList/AccessRequirementList'
import { SkeletonTable } from '@/components/Skeleton'
import ColumnHeader from '@/components/TanStackTable/ColumnHeader'
import StyledTanStackTable from '@/components/TanStackTable/StyledTanStackTable'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import {
  useListAllUserDataAccessRequests,
  useVoidDataAccessRequestSignature,
} from '@/synapse-queries'
import { useGetAccessRequirements } from '@/synapse-queries/dataaccess/useAccessRequirements'
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link as MuiLink,
  Stack,
  Typography,
} from '@mui/material'
import {
  AccessRequestSummary,
  AccessRequestSummaryStatusEnum,
} from '@sage-bionetworks/synapse-client'
import { ManagedACTAccessRequirement } from '@sage-bionetworks/synapse-types'
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'
import { Link as RouterLink } from 'react-router'
import {
  USER_ACCESS_HISTORY_REQUEST_SIGNATURE_SUBPATH,
  USER_ACCESS_HISTORY_REQUEST_SUBPATH,
} from './RouteConstants'

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

const signatureDeepLink = (requestId: string) =>
  `/${USER_ACCESS_HISTORY_REQUEST_SUBPATH}/${requestId}/${USER_ACCESS_HISTORY_REQUEST_SIGNATURE_SUBPATH}`

const columnHelper = createColumnHelper<AccessRequestSummary>()

type ActionCallbacks = {
  onModify: (summary: AccessRequestSummary) => void
  onCancel: (summary: AccessRequestSummary) => void
}

function buildColumns(actions: ActionCallbacks) {
  return [
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
    columnHelper.display({
      id: 'actions',
      header: props => <ColumnHeader {...props} title={'Actions'} />,
      enableSorting: false,
      enableColumnFilter: false,
      cell: ctx => {
        const summary = ctx.row.original
        const requestId = summary.requestId
        if (!requestId) return null
        return (
          <Stack
            direction={'column'}
            sx={{ alignItems: 'flex-start', gap: 0.5 }}
          >
            <MuiLink component={RouterLink} to={signatureDeepLink(requestId)}>
              Review Signatures and Submit
            </MuiLink>
            <MuiLink
              component={'button'}
              type={'button'}
              onClick={() => actions.onModify(summary)}
              disabled={!summary.accessRequirementId}
              sx={{ textAlign: 'left' }}
            >
              Modify Request
            </MuiLink>
            <MuiLink
              component={'button'}
              type={'button'}
              onClick={() => actions.onCancel(summary)}
              sx={{ textAlign: 'left' }}
            >
              Cancel Request
            </MuiLink>
          </Stack>
        )
      },
      size: 220,
    }),
  ]
}

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

  const [modifyingArId, setModifyingArId] = useState<string | undefined>()
  const [cancellingSummary, setCancellingSummary] = useState<
    AccessRequestSummary | undefined
  >()

  const { mutate: voidSignature, isPending: isVoiding } =
    useVoidDataAccessRequestSignature({
      onSuccess: () => {
        displayToast('Your access request has been cancelled.', 'success')
        setCancellingSummary(undefined)
      },
      onError: e => {
        displayToast(
          `Sorry, we couldn't cancel your request. ${e.reason ?? ''}`.trim(),
          'danger',
        )
      },
    })

  const columns = useMemo(
    () =>
      buildColumns({
        onModify: summary => {
          if (summary.accessRequirementId) {
            setModifyingArId(summary.accessRequirementId)
          }
        },
        onCancel: summary => setCancellingSummary(summary),
      }),
    [],
  )

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
      <Stack sx={{ gap: 2 }}>
        <Typography variant="headline1" gutterBottom>
          In-flight eDUC signatures
        </Typography>
        <StyledTanStackTable table={table} fullWidth={true} />
      </Stack>
      {modifyingArId && (
        <ModifyRequestModal
          accessRequirementId={modifyingArId}
          onClose={() => setModifyingArId(undefined)}
        />
      )}
      <Dialog
        open={Boolean(cancellingSummary)}
        onClose={() => setCancellingSummary(undefined)}
      >
        <DialogTitle>Cancel request?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Cancelling this request will void the electronic signature envelope
            for{' '}
            <strong>
              {cancellingSummary?.accessRequirementName ?? 'this request'}
            </strong>
            . Any signatures already collected will be discarded. You can start
            a new request at any time. This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant={'outlined'}
            onClick={() => setCancellingSummary(undefined)}
            disabled={isVoiding}
          >
            Keep Request
          </Button>
          <Button
            variant={'contained'}
            color={'error'}
            loading={isVoiding}
            onClick={() => {
              if (cancellingSummary?.requestId) {
                voidSignature(cancellingSummary.requestId)
              }
            }}
          >
            Cancel Request
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

/**
 * Small helper that lazily fetches the AR for the row the user clicked "Modify Request" on,
 * then mounts the wizard at the research project step so the user can edit their DAR.
 */
function ModifyRequestModal(props: {
  accessRequirementId: string
  onClose: () => void
}) {
  const { accessRequirementId, onClose } = props
  const { data: accessRequirement } =
    useGetAccessRequirements<ManagedACTAccessRequirement>(accessRequirementId, {
      staleTime: Infinity,
    })

  if (!accessRequirement) return null

  return (
    <AccessRequirementList
      renderAsModal
      onHide={onClose}
      initialWizardEntry={{
        step: RequestDataStep.UPDATE_RESEARCH_PROJECT,
        managedACTAccessRequirement: accessRequirement,
      }}
    />
  )
}
