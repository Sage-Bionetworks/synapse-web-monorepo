import * as React from 'react'
import {
  Box,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Stack,
} from '@mui/material'
import IconSvg from '../../IconSvg'

export type RequestDataAccessSuccessProps = {
  onHide: () => void
}

const RequestDataAccessSuccess: React.FC<
  RequestDataAccessSuccessProps
> = props => {
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
        <p style={{ margin: '2rem 0' }}>
          Your data access request been submitted and is currently being
          reviewed. Please allow for up to 2 weeks for your request to be
          reviewed and approved.
        </p>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onHide}>
          Finish
        </Button>
      </DialogActions>
    </>
  )
}

export default RequestDataAccessSuccess
