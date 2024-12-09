import {
  Box,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
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
        <Stack direction="row" alignItems={'center'} gap={'5px'}>
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
