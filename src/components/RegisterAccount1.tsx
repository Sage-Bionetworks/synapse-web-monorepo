import React, { useState } from 'react'
import {
  Button,
  FormControl, FormGroup, FormLabel 
} from 'react-bootstrap'
import { SynapseClient } from 'synapse-react-client'
import { PROVIDERS } from 'synapse-react-client/dist/containers/Login'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { isAliasAvailable, registerAccountStep1 } from 'synapse-react-client/dist/utils/SynapseClient'
import { AliasType } from 'synapse-react-client/dist/utils/synapseTypes/Principal/PrincipalServices'
import SourceApp from './SourceApp'

export type RegisterAccount1Props = {
}

export const RegisterAccount1 = (props: RegisterAccount1Props) => {
  // const { accessToken } = useSynapseContext()
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  
  const onSignUpWithGoogle = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (!username) {
      displayToast('Please provide a user name and try again.', 'danger')
      return
    }
    setIsLoading(true)
    try {
      const aliasCheckResponse = await isAliasAvailable({
        alias: username,
        type: AliasType.USER_NAME
      })
      if (!aliasCheckResponse.available) {
        displayToast('Sorry, that username has already been taken.', 'danger')
      } else if (!aliasCheckResponse.valid) {
        displayToast('Sorry, that username is not valid.', 'danger')
      } else {
        // Looks good!  Go to Google oauth account creation flow
        // redirect to Google login, passing the username through via the state param.
        // Send us back to the special oauth2 account creation step2 path (which is ignored by our AppInitializer)
        localStorage.setItem('after-sso-login-url', `${SynapseClient.getRootURL()}authenticated/signTermsOfUse`)
        const redirectUrl = `${SynapseClient.getRootURL()}?provider=${PROVIDERS.GOOGLE}`
        SynapseClient.oAuthUrlRequest(PROVIDERS.GOOGLE, redirectUrl, username)
          .then((data: any) => {
            const authUrl = data.authorizationUrl
            window.location.assign(authUrl)
          })
          .catch((err: any) => {
            displayToast(err.reason as string, 'danger')
          })
      }
    } catch (err:any) {
      displayToast(err.reason as string, 'danger')
    } finally {
      setIsLoading(false)
    }
  }

  const onSendRegistrationInfo = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (!email) {
      displayToast('Please provide a valid email and try again.', 'danger')
      return
    }
    setIsLoading(true)
    try {
      const callbackUrl = `${window.location.protocol}//${window.location.host}/register2?emailValidationSignedToken=`
      await registerAccountStep1({email}, callbackUrl)
      displayToast('We have sent you an email with instructions on how to complete the registration process.', 'success')
    } catch (err:any) {
      displayToast(err.reason as string, 'danger')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <SourceApp />
      <div className="RegisterAccount1 bootstrap-4-backport">
        <div className="GoogleSignUpUI">
            <FormGroup controlId='googleAccountCreation'>
                <FormLabel>Choose a username</FormLabel>
                <FormControl 
                  onChange={e => setUsername(e.target.value)} 
                  value = {username}/>
            </FormGroup>
            <Button
              variant={username ? 'primary' : 'dark'}
              onClick={onSignUpWithGoogle}
              type="button"
              style={{ marginLeft: 20 }}
              disabled={ (username && !isLoading) ? false : true}
            >
              Sign up with Google
            </Button>
        </div>
        <div className="EmailAddressUI">
          <FormGroup controlId='emailAddressAccountCreation'>
              <FormLabel>Enter your email address and we will send you the instructions on how to complete the registration process.</FormLabel>
              <FormControl 
                onChange={e => setEmail(e.target.value)} 
                value = {email}/>
          </FormGroup>
          <Button
              variant={email ? 'primary' : 'dark'}
              onClick={onSendRegistrationInfo}
              type="button"
              style={{ marginLeft: 20 }}
              disabled={ (email && !isLoading) ? false : true}
            >
              Send registration info
            </Button>
        </div>
      </div>
    </>
    
  )
}
