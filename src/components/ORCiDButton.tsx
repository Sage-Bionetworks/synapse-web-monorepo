import React, { useState } from 'react'
import {
  Button,
} from 'react-bootstrap'
import { SynapseClient } from 'synapse-react-client'
import { PROVIDERS } from 'synapse-react-client/dist/containers/Login'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { ValidationWizardStep } from './ProfileValidation'
import EditIcon from '../assets/RedEditPencil.svg'

export type ORCiDButtonProps = {
  redirectAfter?: any
  editButton?: boolean
}

export const ORCiDButton = (props: ORCiDButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const onBindToORCiD = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      // after binding, go to ???
      if(props.redirectAfter){
        localStorage.setItem('after-sso-login-url', props.redirectAfter)
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
    } catch (err:any) {
      displayToast(err.reason as string, 'danger')
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
    {props.editButton  ? 
      <button onClick={onBindToORCiD}><img src={EditIcon} alt="edit icon"/></button>
    : <Button
      variant='secondary'
      onClick={onBindToORCiD}
      type="button"
      style={{ marginLeft: 20 }}
      disabled={ isLoading }
    >
      Link My ORCiD
    </Button>
    }
    </>
  )
}
