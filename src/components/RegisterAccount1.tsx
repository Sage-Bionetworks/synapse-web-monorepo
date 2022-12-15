import React, { useState } from 'react'
import {
  FormControl, FormGroup, FormLabel
} from 'react-bootstrap'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { registerAccountStep1 } from 'synapse-react-client/dist/utils/SynapseClient'
import { getCurrentSourceApp, SourceAppLogo } from './SourceApp'
import { Link } from 'react-router-dom'
import { EmailConfirmationPage } from './EmailConfirmationPage'
import { Button, Link as MuiLink } from '@mui/material'
import IconSvg from 'synapse-react-client/dist/containers/IconSvg'

export type RegisterAccount1Props = {
}

export enum Pages {
  EMAIL_REGISTRATION,
  EMAIL_REGISTRATION_THANK_YOU,
  GOOGLE_REGISTRATION
}

export const RegisterAccount1 = (props: RegisterAccount1Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [page, setPage] = useState(Pages.EMAIL_REGISTRATION)
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
      <div className="panel-wrapper-bg RegisterAccount1 bootstrap-4-backport">
        {page !== Pages.EMAIL_REGISTRATION_THANK_YOU && 
          <div className='panel-wrapper with-login-panel-bg'>
            <div className='mainContent'>
              <Link
                className='back-button'
                to="/authenticated/myaccount"
              >
                <IconSvg icon='arrowBack'/>
              </Link>
              <div className='panel-logo logo-wrapper'>
                <SourceAppLogo />
              </div>
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
