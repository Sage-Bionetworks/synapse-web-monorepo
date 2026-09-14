import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material'
import { RDCA_DAP_URL } from './rdcaDapConstants'

/**
 * Explains why the user can't use the RDCA-DAP API yet. A one-time RDCA-DAP sign-in links
 * the Synapse account.
 */
export function RdcaDapEligibilityExplainer() {
  return (
    <Stack spacing={2}>
      <Typography>
        You need a linked RDCA-DAP account before you can request access to this
        dataset.
      </Typography>
      <Typography>
        To create a new account or link an existing account, open RDCA-DAP and
        sign in with your ALS Knowledge Portal (Synapse) account.
      </Typography>
    </Stack>
  )
}

export type RdcaDapEligibilityDialogProps = {
  open: boolean
  onClose: () => void
}

export default function RdcaDapEligibilityDialog(
  props: RdcaDapEligibilityDialogProps,
) {
  const { open, onClose } = props
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Link your RDCA-DAP account</DialogTitle>
      <DialogContent>
        <RdcaDapEligibilityExplainer />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button
          variant="contained"
          href={RDCA_DAP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to RDCA-DAP
        </Button>
      </DialogActions>
    </Dialog>
  )
}
