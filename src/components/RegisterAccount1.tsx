import React, { useState } from 'react'
import {
  FormControl, FormGroup, FormLabel
} from 'react-bootstrap'
import { SynapseClient } from 'synapse-react-client'
import { PROVIDERS } from 'synapse-react-client/dist/containers/Login'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { isAliasAvailable, registerAccountStep1 } from 'synapse-react-client/dist/utils/SynapseClient'
import { AliasType } from 'synapse-react-client/dist/utils/synapseTypes/Principal/PrincipalServices'
import { getCurrentSourceApp, SourceAppLogo } from './SourceApp'
import { Link } from 'react-router-dom'
import { EmailConfirmationPage } from './EmailConfirmationPage'
import { Button, IconButton, Link as MuiLink } from '@mui/material'
import IconSvg from 'synapse-react-client/dist/containers/IconSvg'
import GoogleLogo from '../assets/g-logo.png'

export type RegisterAccount1Props = {
}

export enum Pages {
  CHOOSE_REGISTRATION,
  EMAIL_REGISTRATION,
  EMAIL_REGISTRATION_THANK_YOU,
  GOOGLE_REGISTRATION
}

export const RegisterAccount1 = (props: RegisterAccount1Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [page, setPage] = useState(Pages.CHOOSE_REGISTRATION)
  const [sourceAppName, setSourceAppName] = useState<string>()

  React.useEffect(() => {
    const source = getCurrentSourceApp()
    setSourceAppName(source?.friendlyName)
  },[])

  const buttonSx={
    width : '100%',
    padding: '10px',
    color: 'white',
  }

  const chooseButtonSx = {
    color: '#666',
    borderColor:'#EAECEE'
  }

  const BackButton = () => {
    switch(page) {
      case Pages.CHOOSE_REGISTRATION:
        return <Link
              className='back-button'
              to="/authenticated/myaccount"
            >
              <IconSvg icon='arrowBack'/>
        </Link>
      case Pages.EMAIL_REGISTRATION:
      case Pages.GOOGLE_REGISTRATION:
        return <IconButton className='back-button' onClick={()=>setPage(Pages.CHOOSE_REGISTRATION)}>
          <IconSvg icon='arrowBack'/>
        </IconButton>
        default:
          return <></>
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

  return (
    <>
      <div className="panel-wrapper-bg RegisterAccount1 bootstrap-4-backport">
        {page !== Pages.EMAIL_REGISTRATION_THANK_YOU && 
          <div className='panel-wrapper with-login-panel-bg'>
            <BackButton/>
            <div className='mainContent'>
              <div className='panel-logo logo-wrapper'>
                <SourceAppLogo />
              </div>
              {page === Pages.CHOOSE_REGISTRATION && 
              <div style={{marginTop:'30px'}}>
                <Button onClick={() => setPage(Pages.GOOGLE_REGISTRATION)} sx={chooseButtonSx} variant='outlined'>
                  <img
                    className="googleLogo"
                    src={GoogleLogo}
                    alt="Google Logo"
                    style={{width: 25}}
                  />
                    <span className='signInText'>Create account with Google</span>
                </Button>
                <Button onClick={() => setPage(Pages.EMAIL_REGISTRATION)} sx={chooseButtonSx} variant='outlined'>
                  <IconSvg icon='email'/> 
                  Create account with your email
                </Button>
              </div>                
              }
              {page === Pages.EMAIL_REGISTRATION && 
                <div className="EmailAddressUI">
                  <FormGroup controlId='emailAddressAccountCreation' className="required">
                      <FormLabel>Email address</FormLabel>
                      <FormControl 
                        onChange={e => setEmail(e.target.value)} 
                        value = {email}
                        onKeyPress={(e:any) => {
                          if (e.key === "Enter") {
                            onSendRegistrationInfo(e)
                          }
                        }}
                      />
                  </FormGroup>
                  <Button
                    sx={buttonSx}
                    variant='contained'
                    onClick={onSendRegistrationInfo}
                    type="button"
                    disabled={ (email && !isLoading) ? false : true}
                  >
                    Continue
                  </Button>
            </div>}
            {page === Pages.GOOGLE_REGISTRATION && 
              <div>
                <FormGroup controlId='emailAddressAccountCreation' className="required">
                  <FormLabel>Username</FormLabel>
                  <FormControl 
                    onChange={e => setUsername(e.target.value)} 
                    value = {username}
                    onKeyPress={(e:any) => {
                      if (e.key === "Enter") {
                        onSignUpWithGoogle(e)
                      }
                    }}
                  />
                  </FormGroup>
                  <Button
                    sx={buttonSx}
                    variant='contained'
                    onClick={onSignUpWithGoogle}
                    type="button"
                    disabled={ (username && !isLoading) ? false : true}
                  >
                    Continue
                  </Button>
              </div>
            }
          </div>
          <div className={'panel-right'}>
            <div className={'panel-right-text'}>
              <h3>Create an Account</h3>
              <p>Your <strong>{sourceAppName}</strong> account is also a <strong>Sage account</strong>. You can also use it to access many other resources from Sage.</p>
              <MuiLink>More about Sage accounts</MuiLink>
            </div>
          </div>
          </div>
        }

        {page === Pages.EMAIL_REGISTRATION_THANK_YOU && 
          <EmailConfirmationPage email={email} />
        }
      </div>
    </>

  )
}