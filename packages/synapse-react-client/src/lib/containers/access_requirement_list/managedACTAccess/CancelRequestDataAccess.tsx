import React from 'react'
import { RequestInterface } from '../../../utils/synapseTypes'
import { Alert } from 'react-bootstrap'
import { useState } from 'react'
import { updateDataAccessRequest } from '../../../utils/SynapseClient'
import { AlertProps } from './RequestDataAccessStep2'
import { useSynapseContext } from '../../../utils/SynapseContext'
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from '@mui/material'
import IconSvg from '../../IconSvg'

export type CancelRequestDataAccessProps = {
  formSubmitRequestObject: RequestInterface | undefined
  onHide: () => void
}

const CancelRequestDataAccess: React.FC<
  CancelRequestDataAccessProps
> = props => {
  const { accessToken } = useSynapseContext()
  const { formSubmitRequestObject, onHide } = props
  const [alert, setAlert] = useState<AlertProps | undefined>()
  const [showCloseBtn, setShowCloseBtn] = useState<boolean>(false)

  const handleSave = async () => {
    if (formSubmitRequestObject) {
      try {
        const resp = await updateDataAccessRequest(
          formSubmitRequestObject,
          accessToken!,
        )
        if (resp) {
          // save success, close dialog
          onHide?.()
        } else {
          setAlert({
            key: 'danger',
            message:
              'Sorry, there is an error in submitting your request. Please close this dialog and try again later.',
          })
          setShowCloseBtn(true)
        }
      } catch (e) {
        console.log('CancelRequestDataAccess: Error updating form', e)
        setAlert({
          key: 'danger',
          message: `Sorry, there is an error in submitting your request. ${
            e.reason || ''
          }. Please close this dialog and try again later`,
        })
        setShowCloseBtn(true)
      }
    }
  }

  return (
    <>
      <DialogTitle>
        <Stack direction="row" alignItems={'center'} gap={'5px'}>
          Save Changes
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={onHide}>
            <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <p>Would you like to save your recent changes?</p>
        {
          /* Alert message */
          alert && (
            <Alert variant={alert.key} transition={false}>
              {alert.message}
            </Alert>
          )
        }
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
