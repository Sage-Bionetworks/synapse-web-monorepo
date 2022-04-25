import React, { useState } from 'react'
import { SynapseClient, Typography } from 'synapse-react-client'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { PROVIDERS } from 'synapse-react-client/dist/containers/Login'
import { Button, Modal } from 'react-bootstrap'
import { onBindToORCiD } from './ORCiDButton'


export const unbindORCiD = async (event: React.SyntheticEvent, setIsLoading: Function, orcid: string|undefined, accessToken:string|undefined, redirectAfter?:string) => {
    event.preventDefault()
    if(orcid){
        try {
            await SynapseClient.unbindOAuthProviderToAccount(PROVIDERS.ORCID, accessToken, orcid)
            onBindToORCiD(event, setIsLoading, redirectAfter)
        } catch(err: any){
            console.error(err)
        }
    }
}
export type UnbindORCiDDialogProps = {
    show: boolean,
    setShow: Function,
    orcid: string|undefined,
    redirectAfter?: string
}

export const UnbindORCiDDialog = (props: UnbindORCiDDialogProps) => {
    const { accessToken } = useSynapseContext()
    const [isLoading, setIsLoading] = useState(false)
    return(
        <Modal 
        className='bootstrap-4-backport UnbindORCiD'
        show={props.show}
        animation={false}
        backdrop='static'
        centered
        >
            <Modal.Body className='unbind-modal'>
                <Typography variant='headline1'>Remove ORCID</Typography>
                <Typography variant='body1'>Are you sure you want to remove this ORCID?</Typography>
                <div className='btn-holder'>
                <Button className='btn-container emptyButton' onClick={()=>props.setShow(false)}>Cancel</Button>
                <Button 
                className='btn-container' 
                variant='secondary' 
                disabled={ isLoading } 
                onClick={event=>unbindORCiD(event,setIsLoading, props.orcid, accessToken, props.redirectAfter)}>Yes, remove</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}