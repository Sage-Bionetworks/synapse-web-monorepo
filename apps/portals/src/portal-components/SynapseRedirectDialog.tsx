import * as React from 'react'
import { Modal } from 'react-bootstrap'
import { Typography } from 'synapse-react-client'

export type SynapseRedirectDialogProps = {
  onCancelRedirect: ()=>void
  synapseRedirectUrl?: string
}

const SynapseRedirectDialog = (props: SynapseRedirectDialogProps) => {
  const [countdownSeconds, setCountdownSeconds] = React.useState(10)
  const {synapseRedirectUrl, onCancelRedirect} = props
  React.useEffect(() => {
    if (synapseRedirectUrl) {
      // You would expect that we should redirect when countdownSeconds reaches 0,
      // but it actually takes about a second to perform the redirect. 
      // So let's start the process when we get to 1.
      if (countdownSeconds <= 1) {
        window.location.assign(synapseRedirectUrl!)
      }
      setTimeout(() => {
        setCountdownSeconds(countdownSeconds => countdownSeconds - 1)
      }, 1000)
    }
  }, [synapseRedirectUrl, countdownSeconds])

  const onClose = () => {
    // cancel the redirect
    onCancelRedirect()
    // and reset countdown seconds
    setCountdownSeconds(10)
  }
  return ( 
    <>
      {synapseRedirectUrl && (<Modal
            animation={false}
            show={true}
            // @ts-ignore
            onHide={onClose}
            backdrop='static'
            className='SynapseRedirectDialog'
          >
            <Modal.Header
              // @ts-ignore
              onHide={onClose}
              closeButton={true}
            ></Modal.Header>
            <Modal.Body>
              <div className="redirect-dialog-body">
                <Typography variant="headline1" className='redirect-title'>Hang tight!</Typography>
                <p>You are being redirected to Synapse to view this data.<br/>
                You will be redirected in <strong>{countdownSeconds} seconds</strong>
                <div className="links-container">
                  <button className="btn btn-link" onClick={() => {
                    window.location.assign(synapseRedirectUrl!)
                  }}>Go to Synapse now</button>
                  <button className="btn btn-link" onClick={onClose}>Stay in the Portal</button>
                </div>
                </p>
              </div>
              <div className="redirect-dialog-footer">
                <img
                  className="synapse-logo-image"
                  src="https://www.synapse.org/images/logo.svg"
                  alt=""
                />
                <h3 className="synapse-logo-text">SYNAPSE</h3>
                <img
                  className="synapse-hero-image"
                  src="https://s3.amazonaws.com/static.synapse.org/images/homepage-composite.svg"
                  alt=""
                />
              </div>
            </Modal.Body>
          </Modal>)}
    </>
  )
}

export default SynapseRedirectDialog
