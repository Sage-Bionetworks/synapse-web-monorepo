import { Button, DialogContent, DialogActions, Typography } from '@mui/material'
import { DialogBaseTitle } from '../../DialogBase'

export type RequestDataAccessSuccessProps = {
  onHide: () => void
}

export default function RequestDataAccessSuccess(
  props: RequestDataAccessSuccessProps,
) {
  const { onHide } = props
  return (
    <>
      <DialogBaseTitle
        title={'Your Data Access Request Has Been Submitted'}
        onCancel={onHide}
      />

      <DialogContent>
        <Typography variant="body1">
          Your data access request has been submitted and is currently being
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
