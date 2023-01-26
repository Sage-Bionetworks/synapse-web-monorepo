import { Modal, ModalBody, ModalFooter, Button } from 'react-bootstrap'
import React from 'react'

export type DownloadLoginModalProps = {
  showModal?: boolean
  onHide: () => void
}

export const DownloadLoginModal: React.FunctionComponent<
  DownloadLoginModalProps
> = props => {
  return (
    <Modal
      animation={false}
      show={true}
      onHide={() => props.onHide()}
      backdrop="static"
    >
      <Modal.Header closeButton>
        <span
          style={{ fontWeight: 'bold', color: '#515359', fontSize: '1.5em' }}
        >
          Sign In Required
        </span>
      </Modal.Header>
      <ModalBody>
        <p>
          Anyone can browse public content on the Synapse website, but in order
          to download and create content you will need to register for an
          account using an email address.
        </p>
        <p>
          To find out more see&nbsp;
          <a
            href="https://help.synapse.org/docs/Managing-your-account.2055405596.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            User Accounts
          </a>
          <span> and </span>
          <a
            href="https://help.synapse.org/docs/Synapse-Governance.2004255211.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Governance Overview
          </a>
          .
        </p>
      </ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={() => props.onHide()}>
          CANCEL
        </Button>
        <Button
          className="SRC-SIGN-IN-CLASS"
          variant="primary"
          onClick={() => props.onHide()}
        >
          Sign in
        </Button>
      </ModalFooter>
    </Modal>
  )
}
