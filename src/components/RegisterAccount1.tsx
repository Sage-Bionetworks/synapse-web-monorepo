import React, { useState } from 'react'
import {
  Button,
  Col,
  Container,
  FormControl, FormGroup, FormLabel, Row 
} from 'react-bootstrap'
import { SynapseClient, Typography } from 'synapse-react-client'
import { PROVIDERS } from 'synapse-react-client/dist/containers/Login'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { isAliasAvailable, registerAccountStep1 } from 'synapse-react-client/dist/utils/SynapseClient'
import { AliasType } from 'synapse-react-client/dist/utils/synapseTypes/Principal/PrincipalServices'
import SageBionetworksLogo from '../assets/SageBionetworksLogo.svg'
import SourceApp from './SourceApp'

export type RegisterAccount1Props = {
}

export enum Pages {
  EMAIL_REGISTRATION,
  EMAIL_REGISTRATION_THANK_YOU,
  GOOGLE_REGISTRATION
}

export const RegisterAccount1 = (props: RegisterAccount1Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [page, setPage] = useState(Pages.EMAIL_REGISTRATION)
  
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
      setPage(Pages.EMAIL_REGISTRATION_THANK_YOU)
    } catch (err:any) {
      displayToast(err.reason as string, 'danger')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="RegisterAccount1 bootstrap-4-backport">
        {page !== Pages.EMAIL_REGISTRATION_THANK_YOU && <Row>
          <Col xs={12} sm={4} className="sourceAppPanel">
            <SourceApp isAccountCreationTextVisible={true}/>
          </Col>
          <Col xs={12} sm={8} className="blue-background">
            <img
              className="sageLogo"
              src={SageBionetworksLogo}
              alt="Sage Bionetworks Logo"
            />
            <div className="registrationPanel">
              {page === Pages.EMAIL_REGISTRATION && <div className="EmailAddressUI">
                  <Typography variant="headline1">Create a Sage Account</Typography>
                  <FormGroup controlId='emailAddressAccountCreation' className="required">
                      <FormLabel>Email</FormLabel>
                      <FormControl 
                        onChange={e => setEmail(e.target.value)} 
                        value = {email}/>
                  </FormGroup>
                  <Button
                      variant={email ? 'primary' : 'light'}
                      onClick={onSendRegistrationInfo}
                      type="button"
                      disabled={ (email && !isLoading) ? false : true}
                    >
                      Create Account
                  </Button>
              </div>}
              {page === Pages.GOOGLE_REGISTRATION && <div className="GoogleSignUpUI">
                <FormGroup controlId='googleAccountCreation'>
                    <FormLabel>Choose a username</FormLabel>
                    <FormControl 
                      onChange={e => setUsername(e.target.value)} 
                      value = {username}/>
                </FormGroup>
                <Button
                  variant={username ? 'outline-dark' : 'light'}
                  onClick={onSignUpWithGoogle}
                  type="button"
                  disabled={ (username && !isLoading) ? false : true}
                >
                  Sign up with Google
                </Button>
              </div>}
            </div>
          </Col>
        </Row>}

        {page === Pages.EMAIL_REGISTRATION_THANK_YOU && <div className="blue-background">
          <Container>
            <Typography variant="headline3">Thank you for signing up.</Typography>
            <Typography variant="body1">We've sent an email to <strong>{email}</strong>.</Typography>
            <Typography variant="body1">Please check your email to continue.</Typography>
          </Container>
        </div>}
      </div>
    </>
    
  )
}
