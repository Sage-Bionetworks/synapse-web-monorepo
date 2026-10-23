import { useId } from 'react'
import {
  Button,
  Chip,
  ChipProps,
  Link as MuiLink,
  List,
  ListItem,
  Popover,
  PopoverProps,
  Stack,
  Typography,
} from '@mui/material'
import { RequestListItem } from '@sage-bionetworks/aridhia-client/generated/models'
import {
  getAridhiaFairPortalDatasetUrl,
  getAridhiaFairPortalRequestUrl,
} from './aridhiaFairPortalUrls'

type RequestStatus = NonNullable<RequestListItem['status']>

const STATUS_CHIP: Record<
  RequestStatus,
  { label: string; color: ChipProps['color'] }
> = {
  approved: { label: 'Approved', color: 'success' },
  pending: { label: 'Pending', color: 'warning' },
  denied: { label: 'Denied', color: 'error' },
  error: { label: 'Error', color: 'default' },
}

export type AridhiaDarStatusPopoverProps = Pick<
  PopoverProps,
  'anchorEl' | 'open' | 'id' | 'onClose'
> & {
  datasetCode: string
  /** Every request the user holds for the dataset, in display order. */
  requests: RequestListItem[]
  /** Base URL of the RDCA-DAP FAIR portal's browsable UI, e.g. `https://fair.dap.c-path.org`. */
  fairPortalUrl?: string
  /** When set, offers to start another request (e.g. for different tables, or after a denial). */
  onNewRequest?: () => void
}

/**
 * Detail popover listing the user's DARs for one dataset.
 */
export default function AridhiaDarStatusPopover(
  props: AridhiaDarStatusPopoverProps,
) {
  const {
    anchorEl,
    open,
    id,
    onClose,
    datasetCode,
    requests,
    fairPortalUrl,
    onNewRequest,
  } = props
  const headingId = useId()
  const hasApprovedRequest = requests.some(r => r.status === 'approved')

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Stack spacing={1.5} sx={{ p: 2, width: 360, maxWidth: '100%' }}>
        <Typography id={headingId} variant="subtitle1" component="h2">
          Your data access requests
        </Typography>
        <List aria-labelledby={headingId} disablePadding>
          {requests.map((request, index) => (
            <DarListItem
              key={request.code}
              request={request}
              fairPortalUrl={fairPortalUrl}
              divider={index < requests.length - 1}
            />
          ))}
        </List>
        {hasApprovedRequest && fairPortalUrl && (
          <Button
            variant="outlined"
            href={getAridhiaFairPortalDatasetUrl(fairPortalUrl, datasetCode)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open dataset on RDCA-DAP
          </Button>
        )}
        {onNewRequest && (
          <>
            <Typography variant="body2" color="text.secondary">
              Need different tables, or was a request denied? You can submit
              another request.
            </Typography>
            <Button variant="contained" onClick={onNewRequest}>
              Submit a new request
            </Button>
          </>
        )}
      </Stack>
    </Popover>
  )
}

function DarListItem(props: {
  request: RequestListItem
  fairPortalUrl?: string
  divider: boolean
}) {
  const { request, fairPortalUrl, divider } = props
  const title = request.name || request.code
  const chip = request.status ? STATUS_CHIP[request.status] : undefined

  return (
    <ListItem divider={divider} disableGutters sx={{ display: 'block', py: 1 }}>
      <Stack
        direction="row"
        spacing={1}
        sx={{ alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Typography variant="subtitle2" sx={{ wordBreak: 'break-word' }}>
          {fairPortalUrl && request.code ? (
            <MuiLink
              href={getAridhiaFairPortalRequestUrl(fairPortalUrl, request.code)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </MuiLink>
          ) : (
            title
          )}
        </Typography>
        {chip && <Chip size="small" label={chip.label} color={chip.color} />}
      </Stack>
      {(request.created_at || request.updated_at) && (
        <Typography variant="body2" color="text.secondary">
          {request.created_at &&
            `Created ${new Date(request.created_at).toLocaleDateString()}`}
          {request.created_at && request.updated_at && ' · '}
          {request.updated_at &&
            `Updated ${new Date(request.updated_at).toLocaleDateString()}`}
        </Typography>
      )}
    </ListItem>
  )
}
