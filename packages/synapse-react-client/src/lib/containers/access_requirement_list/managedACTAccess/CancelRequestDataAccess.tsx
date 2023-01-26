import * as React from 'react'
import { RequestInterface } from '../../../utils/synapseTypes'
import * as ReactBootstrap from 'react-bootstrap'
import { Alert, Button } from 'react-bootstrap'
import { useState } from 'react'
import { updateDataAccessRequest } from '../../../utils/SynapseClient'
import { AlertProps } from './RequestDataAccessStep2'
import { useSynapseContext } from '../../../utils/SynapseContext'

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
      <ReactBootstrap.Modal.Header closeButton={true}>
        <ReactBootstrap.Modal.Title className="AccessRequirementList__title">
          Save Changes
        </ReactBootstrap.Modal.Title>
      </ReactBootstrap.Modal.Header>

      <ReactBootstrap.Modal.Body>
        <p>Would you like to save your recent changes?</p>
        {
          /* Alert message */
          alert && <Alert variant={alert.key}>{alert.message}</Alert>
        }
      </ReactBootstrap.Modal.Body>

      <ReactBootstrap.Modal.Footer>
        {!showCloseBtn && (
          <>
            <Button variant="link" onClick={() => onHide?.()}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => handleSave()}>
              Save changes
            </Button>
          </>
        )}
        {showCloseBtn && (
          <Button variant="primary" onClick={() => onHide?.()}>
            Close
          </Button>
        )}
      </ReactBootstrap.Modal.Footer>
    </>
  )
}

export default CancelRequestDataAccess
