import * as React from 'react'
import { Modal } from 'react-bootstrap'
import { Typography } from 'synapse-react-client'

export type RedirectDialogProps = {
  onCancelRedirect: ()=>void
  redirectUrl?: string
}
export const redirectInstructionsMap = {
  'https://sites.google.com/sagebase.org/mc2intranet/home?authuser=0' : <p>
    You are currently being redirected to the Multi-Consortia Coordinating (MC2) Center Intranet. The MC2 Center Intranet is a protected website containing MC2 Center resources. If you are not a participating member of the MC2 Center community, you will not be able to access the intranet.
    Feel free to contact the MC2 Center to learn more or if you have any questions. <a target="_blank" rel="noreferrer" href="https://help.cancercomplexity.synapse.org/doc/contact-us">Contact Us</a>
  </p>
}

const RedirectDialog = (props: RedirectDialogProps) => {
  const [countdownSeconds, setCountdownSeconds] = React.useState(10)
  const {redirectUrl, onCancelRedirect} = props
  const [redirectInstructions, setRedirectInstructions] = React.useState(10)
  const [isSynapseURL, setIsSynapseURL] = React.useState(false)
  
  React.useEffect(() => {
    if (redirectUrl) {
      // You would expect that we should redirect when countdownSeconds reaches 0,
      // but it actually takes about a second to perform the redirect. 
      // So let's start the process when we get to 1.
      if (countdownSeconds <= 1) {
        window.location.assign(redirectUrl!)
      }
      setTimeout(() => {
        setCountdownSeconds(countdownSeconds => countdownSeconds - 1)
      }, 1000)
    }
  }, [redirectUrl, countdownSeconds])


  React.useEffect(() => {
    const isRedirectToSynapse = redirectUrl ? new URL(redirectUrl).hostname.toLowerCase() === 'www.synapse.org' : false
    if (redirectUrl) {
      setCountdownSeconds(isRedirectToSynapse ? 10 : 30)
      setRedirectInstructions(isRedirectToSynapse ? <p>You are being redirected to Synapse to view this data.</p> : 
        redirectInstructionsMap[redirectUrl])
    }
    setIsSynapseURL(isRedirectToSynapse)
  }, [redirectUrl])
  const onClose = () => {
    // cancel the redirect
    onCancelRedirect()
    // and reset countdown seconds
    setCountdownSeconds(isSynapseURL ? 10 : 30)
  }
  
  return ( 
    <>
      {redirectUrl && (<Modal
            animation={false}
            show={true}
            // @ts-ignore
            onHide={onClose}
            backdrop='static'
            className='RedirectDialog'
          >
            <Modal.Header
              // @ts-ignore
              onHide={onClose}
              closeButton={true}
            ></Modal.Header>
            <Modal.Body>
              <div className="redirect-dialog-body">
                <Typography variant="headline1" className='redirect-title'>Hang tight!</Typography>
                {redirectInstructions}
                <p>
                You will be redirected in <strong>{countdownSeconds} seconds</strong>
                <div className="links-container">
                  <button className="btn btn-link" onClick={() => {
                    window.location.assign(redirectUrl!)
                  }}>Go to the site now</button>
                  <button className="btn btn-link" onClick={onClose}>Stay in the Portal</button>
                </div>
                </p>
              </div>
              {isSynapseURL && <div className="redirect-dialog-footer">
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
              </div>}
            </Modal.Body>
          </Modal>)}
    </>
  )
}

export default RedirectDialog
