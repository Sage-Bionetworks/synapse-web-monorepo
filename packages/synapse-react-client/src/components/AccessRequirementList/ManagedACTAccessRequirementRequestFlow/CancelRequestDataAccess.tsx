import { useUpdateDataAccessRequest } from '@/synapse-queries'
import {
  Alert,
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { Renewal, Request } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import IconSvg from '../../IconSvg/IconSvg'
import { AlertProps } from './DataAccessRequestAccessorsFilesForm/DataAccessRequestAccessorsFilesForm'

export type CancelRequestDataAccessProps = {
  /* The data access request with unsaved changes */
  modifiedDataAccessRequest: Request | Renewal | undefined
  onHide: () => void
}

function CancelRequestDataAccess(props: CancelRequestDataAccessProps) {
  const { modifiedDataAccessRequest, onHide } = props
  const [alert, setAlert] = useState<AlertProps | undefined>()
  const [showCloseBtn, setShowCloseBtn] = useState<boolean>(false)

  const { mutate: updateRequest } = useUpdateDataAccessRequest({
    onSuccess: () => {
      onHide()
    },
    onError: e => {
      setAlert({
        key: 'error',
        message: `Sorry, there is an error in submitting your request. ${
          e.reason ? e.reason + '.' : ' '
        }Please close this dialog and try again later.`,
      })
      setShowCloseBtn(true)
    },
  })

  function handleSave() {
    if (modifiedDataAccessRequest) {
      updateRequest(modifiedDataAccessRequest)
    }
  }

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
          Save Changes
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={onHide}>
            <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <Typography variant={'body1'}>
          Would you like to save your recent changes?
        </Typography>
        {alert && <Alert severity={alert.key}>{alert.message}</Alert>}
      </DialogContent>

      <DialogActions>
        {!showCloseBtn && (
          <>
            <Button variant="outlined" onClick={onHide}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                handleSave()
              }}
            >
              Save changes
            </Button>
          </>
        )}
        {showCloseBtn && (
          <Button variant="contained" onClick={onHide}>
            Close
          </Button>
        )}
      </DialogActions>
    </>
  )
}

export default CancelRequestDataAccess
