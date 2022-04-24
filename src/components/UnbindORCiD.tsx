import React from 'react'
import { SynapseClient, Typography } from 'synapse-react-client'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { PROVIDERS } from 'synapse-react-client/dist/containers/Login'
import { ValidationWizardStep } from './ProfileValidation'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { Button, Modal } from 'react-bootstrap'


export const unbindORCiD = async (orcid: string|undefined, accessToken:string|undefined, redirectAfter?:string) => {
    if(orcid){
        try {
            await SynapseClient.unbindOAuthProviderToAccount(PROVIDERS.ORCID, accessToken, orcid)
            if(redirectAfter){
                localStorage.setItem('after-sso-login-url', redirectAfter)
              } else {
                localStorage.setItem('after-sso-login-url', `${SynapseClient.getRootURL()}authenticated/validate?step=${ValidationWizardStep.VERIFY_IDENTITY}`)
              }
              const redirectUrl = `${SynapseClient.getRootURL()}?provider=${PROVIDERS.ORCID}`
              SynapseClient.oAuthUrlRequest(PROVIDERS.ORCID, redirectUrl)
                .then((data: any) => {
                  const authUrl = data.authorizationUrl
                  window.location.assign(authUrl)
                })
                .catch((err: any) => {
                  displayToast(err.reason as string, 'danger')
                })
        } catch(err: any){
            console.error(err)
        }
    }
}
export type UnbindORCiDModalProps = {
    show: boolean,
    setShow: Function,
    orcid: string|undefined,
    redirectAfter?: string
}

export const UnbindORCiDDialog = (props: UnbindORCiDModalProps) => {
    const { accessToken } = useSynapseContext()

    return(
        <Modal 
        className='bootstrap-4-backport'
        show={props.show}
        animation={false}
        backdrop='static'
        centered
        >
            <Modal.Body style={{margin:0, padding:'32px 0'}}>
                <Typography variant='headline1'>Remove ORCID</Typography>
                <Typography variant='body1'>Are you sure you want to remove this ORCID?</Typography>
                <div style={{float:'right',marginTop:'24px'}}>
                <Button className='btn-container emptyButton' onClick={()=>props.setShow(false)}>Cancel</Button>
                <Button className='btn-container' variant='secondary' onClick={()=>unbindORCiD(props.orcid, accessToken, props.redirectAfter)}>Yes, remove</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}