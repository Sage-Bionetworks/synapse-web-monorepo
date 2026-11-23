import { ReactNode, useId } from 'react'
import {
  Button,
  Chip,
  ChipProps,
  CircularProgress,
  Link as MuiLink,
  List,
  ListItem,
  Popover,
  PopoverProps,
  Stack,
  SxProps,
  Theme,
  Typography,
} from '@mui/material'
import { RequestListItem } from '@sage-bionetworks/aridhia-client/generated/models'
import { useGetAridhiaRequestWorkspace } from '@/aridhia-queries'
import {
  getRequestDataAccess,
  needsWorkspace,
  RequestDataAccess,
  RequestStatus,
} from './aridhiaAccessStatusUtils'
import {
  getAridhiaFairPortalDatasetUrl,
  getAridhiaFairPortalRequestUrl,
} from './aridhiaFairPortalUrls'

const STATUS_CHIP: Record<
  RequestStatus,
  { label: string; color: ChipProps['color'] }
> = {
  approved: { label: 'Approved', color: 'success' },
  pending: { label: 'Pending', color: 'warning' },
  denied: { label: 'Denied', color: 'error' },
  error: { label: 'Error', color: 'default' },
}

/** The text each request row shows about its route to the data. */
export const DAR_DATA_ACCESS_TEXT = {
  transferPending: 'Approved — data transfer pending',
  checkingWorkspace: 'Checking workspace…',
  workspacePreparing: 'Workspace is being prepared',
  workspaceError: "Couldn't load the workspace link",
  dataTransferred: 'Data transferred',
  transferredTo: (workspaceName: string) => `Transferred to ${workspaceName}`,
  openWorkspace: 'Open workspace',
} as const

const DATA_ACCESS_NOTE_SX: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  mt: 0.5,
  wordBreak: 'break-word',
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
 * Detail popover listing the user's DARs for one dataset. Each approved request offers its own
 * route to its data, since separate requests can deliver to separate workspaces.
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
              key={request.code ?? `uncoded-${index}`}
              request={request}
              fairPortalUrl={fairPortalUrl}
              divider={index < requests.length - 1}
            />
          ))}
        </List>
        {/* The catalog entry is otherwise unreachable from this UI once a request exists. */}
        {fairPortalUrl && (
          <Typography variant="body2">
            <MuiLink
              href={getAridhiaFairPortalDatasetUrl(fairPortalUrl, datasetCode)}
              target="_blank"
              rel="noopener noreferrer"
            >
              View dataset in the RDCA-DAP catalog
            </MuiLink>
          </Typography>
        )}
        {onNewRequest && (
          <>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
              }}
            >
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
  const titleId = useId()
  const title = request.name || request.code
  const chip = request.status ? STATUS_CHIP[request.status] : undefined
  const workspaceQuery = useGetAridhiaRequestWorkspace(request.code ?? '', {
    enabled: needsWorkspace(request),
  })

  return (
    <ListItem divider={divider} disableGutters sx={{ display: 'block', py: 1 }}>
      <Stack
        direction="row"
        spacing={1}
        sx={{ alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Typography
          id={titleId}
          variant="subtitle2"
          sx={{ wordBreak: 'break-word' }}
        >
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
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
          }}
        >
          {request.created_at &&
            `Created ${new Date(request.created_at).toLocaleDateString()}`}
          {request.created_at && request.updated_at && ' · '}
          {request.updated_at &&
            `Updated ${new Date(request.updated_at).toLocaleDateString()}`}
        </Typography>
      )}
      <RequestDataAccessRow
        access={getRequestDataAccess(request, workspaceQuery)}
        requestTitleId={titleId}
      />
    </ListItem>
  )
}

/**
 * A request's route to its data. Transferred requests link the workspace inbox their data landed
 * in, as RDCA-DAP's own request pages do; until that link is known (or if it can't be loaded), the
 * request record — linked from the title — remains the route to the data.
 */
function RequestDataAccessRow(props: {
  access: RequestDataAccess
  requestTitleId: string
}) {
  const { access, requestTitleId } = props
  switch (access.kind) {
    case 'none':
      return null
    case 'transferPending':
      return (
        <DataAccessNote>{DAR_DATA_ACCESS_TEXT.transferPending}</DataAccessNote>
      )
    case 'checkingWorkspace':
      return (
        <DataAccessNote>
          <CircularProgress size={12} color="inherit" aria-hidden />
          {DAR_DATA_ACCESS_TEXT.checkingWorkspace}
        </DataAccessNote>
      )
    case 'workspacePreparing':
      return (
        <DataAccessNote>
          {DAR_DATA_ACCESS_TEXT.workspacePreparing}
        </DataAccessNote>
      )
    case 'workspaceError':
      return (
        <DataAccessNote>{DAR_DATA_ACCESS_TEXT.workspaceError}</DataAccessNote>
      )
    case 'workspaceAvailable':
      return (
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <DataAccessNote>
            {access.workspaceName
              ? DAR_DATA_ACCESS_TEXT.transferredTo(access.workspaceName)
              : DAR_DATA_ACCESS_TEXT.dataTransferred}
          </DataAccessNote>
          <Button
            size="small"
            variant="outlined"
            href={access.inboxUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby={requestTitleId}
            sx={{ flexShrink: 0, mt: 0.5 }}
          >
            {DAR_DATA_ACCESS_TEXT.openWorkspace}
          </Button>
        </Stack>
      )
  }
}

function DataAccessNote(props: { children: ReactNode }) {
  return (
    <Typography
      variant="body2"
      sx={[
        {
          color: 'text.secondary',
        },
        ...(Array.isArray(DATA_ACCESS_NOTE_SX)
          ? DATA_ACCESS_NOTE_SX
          : [DATA_ACCESS_NOTE_SX]),
      ]}
    >
      {props.children}
    </Typography>
  )
}
