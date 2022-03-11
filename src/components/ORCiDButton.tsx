import React, { useState } from 'react'
import {
  Button,
} from 'react-bootstrap'
import { SynapseClient } from 'synapse-react-client'
import { PROVIDERS } from 'synapse-react-client/dist/containers/Login'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'

export type ORCiDButtonProps = {
}

export const ORCiDButton = (props: ORCiDButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)
  
  const onBindToORCiD = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)
    try {
      // after binding, go to ???
      localStorage.setItem('after-sso-login-url', `${SynapseClient.getRootURL()}authenticated/myaccount`)
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
    <Button
      variant='primary'
      onClick={onBindToORCiD}
      type="button"
      style={{ marginLeft: 20 }}
      disabled={ isLoading }
    >
      Bind ORCiD
    </Button>
  )
}
