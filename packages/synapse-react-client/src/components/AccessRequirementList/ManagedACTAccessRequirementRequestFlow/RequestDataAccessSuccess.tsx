import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconSvg from '../../IconSvg/IconSvg'

export type RequestDataAccessSuccessProps = {
  onHide: () => void
}

export default function RequestDataAccessSuccess(
  props: RequestDataAccessSuccessProps,
) {
  const { onHide } = props
  return (
    <>
      <DialogTitle>
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            gap: '5px',
          }}
        >
          Your Data Access Request Has Been Submitted
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={onHide}>
            <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <Typography variant="body1">
          Your data access request been submitted and is currently being
          reviewed. Please allow for up to 2 weeks for your request to be
          reviewed and approved.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onHide}>
          Finish
        </Button>
      </DialogActions>
    </>
  )
}
