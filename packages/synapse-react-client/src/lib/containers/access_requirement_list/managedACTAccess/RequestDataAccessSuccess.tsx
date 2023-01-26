import * as React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export type RequestDataAccessSuccessProps = {
  onHide: () => void
}

const RequestDataAccessSuccess: React.FC<
  RequestDataAccessSuccessProps
> = props => {
  const { onHide } = props
  return (
    <>
      <ReactBootstrap.Modal.Header closeButton={true}>
        <ReactBootstrap.Modal.Title className="AccessRequirementList__title">
          Your Data Access Request Has Been Submitted!
        </ReactBootstrap.Modal.Title>
      </ReactBootstrap.Modal.Header>
      <ReactBootstrap.Modal.Body>
        <p style={{ margin: '2rem 0' }}>
          Your data access request been submitted and is currently being
          reviewed. Please allow for up to 2 weeks for your request to be
          reviewed and approved.
        </p>
      </ReactBootstrap.Modal.Body>
      <ReactBootstrap.Modal.Footer>
        <Button variant="primary" onClick={() => onHide?.()}>
          Finish
        </Button>
      </ReactBootstrap.Modal.Footer>
    </>
  )
}

export default RequestDataAccessSuccess
