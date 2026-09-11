import {
  Popover,
  PopoverProps,
  Stack,
  Typography,
  Link as MuiLink,
} from '@mui/material'
import { RequestListItem } from '@sage-bionetworks/aridhia-client/generated/models'
import { getAridhiaFairPortalRequestUrl } from './aridhiaFairPortalUrls'

export type AridhiaDarStatusPopoverProps = Pick<
  PopoverProps,
  'anchorEl' | 'open' | 'id' | 'onClose'
> & {
  request: RequestListItem
  /** Base URL of the RDCA-DAP FAIR portal's browsable UI, e.g. `https://fair.dap.c-path.org`. */
  fairPortalUrl?: string
}

/**
 * Detail popover for a pending or denied DAR.
 */
export default function AridhiaDarStatusPopover(
  props: AridhiaDarStatusPopoverProps,
) {
  const { anchorEl, open, id, onClose, request, fairPortalUrl } = props

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Stack spacing={1} sx={{ p: 2, maxWidth: 320 }}>
        <Typography variant="subtitle2">
          {request.name ?? request.code}
        </Typography>
        <Typography variant="body2">Code: {request.code}</Typography>
        <Typography variant="body2">Status: {request.status}</Typography>
        {request.created_at && (
          <Typography variant="body2">
            Created: {new Date(request.created_at).toLocaleDateString()}
          </Typography>
        )}
        {request.updated_at && (
          <Typography variant="body2">
            Updated: {new Date(request.updated_at).toLocaleDateString()}
          </Typography>
        )}
        {fairPortalUrl && request.code && (
          <MuiLink
            href={getAridhiaFairPortalRequestUrl(fairPortalUrl, request.code)}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on RDCA-DAP
          </MuiLink>
        )}
      </Stack>
    </Popover>
  )
}
