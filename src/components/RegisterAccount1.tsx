import React, { useState } from 'react'
import {
  Button,
} from 'react-bootstrap'
import { Typography } from 'synapse-react-client'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { isAliasAvailable, registerAccountStep1 } from 'synapse-react-client/dist/utils/SynapseClient'
import { AliasType } from 'synapse-react-client/dist/utils/synapseTypes/Principal/PrincipalServices'
// import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'

export type RegisterAccount1Props = {
}

export const UNDEFINED_USERNAME = 'Please provide a user name and try again.'
export const UNDEFINED_EMAIL = 'Please provide a valid email and try again.'

export const RegisterAccount1 = (props: RegisterAccount1Props) => {
  // const { accessToken } = useSynapseContext()
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  
  const onSignUpWithGoogle = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (!username) {
      displayToast(UNDEFINED_USERNAME, 'danger')
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
        // TODO: Looks good!  Go to Google oauth account creation flow

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
      displayToast(UNDEFINED_EMAIL, 'danger')
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

  const onChangeUsername = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value)
  }
  const onChangeEmail = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value)
  }

  return (
    <>
      <div className="RegisterAccount bootstrap-4-backport">
        <div className="GoogleSignUpUI">
          <Typography variant='label'>Choose a username</Typography>
          {<div className="inputAndCreateButton">
            <input
              onChange={onChangeUsername}
              type="text"
              placeholder="Choose a username"
              style={{width:'233px'}}
            ></input>
            <Button
              variant={username ? 'primary' : 'dark'}
              onClick={onSignUpWithGoogle}
              type="button"
              style={{ marginLeft: 20 }}
              disabled={ (username && !isLoading) ? false : true}
            >
              Sign up with Google
            </Button>
          </div>}
        </div>
        <div className="EmailAddressUI">
          <Typography variant='label'>Enter your email address and we will send you the instructions on how to complete the registration process.</Typography>
          {<div className="inputAndCreateButton">
            <input
              onChange={onChangeEmail}
              type="text"
              placeholder="Your email address"
              style={{width:'233px'}}
            ></input>
            <Button
              variant={email ? 'primary' : 'dark'}
              onClick={onSendRegistrationInfo}
              type="button"
              style={{ marginLeft: 20 }}
              disabled={ (email && !isLoading) ? false : true}
            >
              Send registration info
            </Button>
          </div>}
        </div>
      </div>
    </>
    
  )
}
