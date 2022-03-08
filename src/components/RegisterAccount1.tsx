import React, { useState } from 'react'
import {
  Button,
} from 'react-bootstrap'
import { Typography } from 'synapse-react-client'
import FullWidthAlert from 'synapse-react-client/dist/containers/FullWidthAlert'
import { isAliasAvailable, registerAccountStep1 } from 'synapse-react-client/dist/utils/SynapseClient'
import { AliasType } from 'synapse-react-client/dist/utils/synapseTypes/Principal/PrincipalServices'
// import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'

export type RegisterAccount1Props = {
}

type AlertConfig = {
  message: string
  variant?: string
}

export const UNDEFINED_USERNAME = 'Please provide a user name and try again.'
export const UNDEFINED_EMAIL = 'Please provide a valid email and try again.'

export const RegisterAccount1 = (props: RegisterAccount1Props) => {
  // const { accessToken } = useSynapseContext()
  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState<AlertConfig>()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  
  const onSignUpWithGoogle = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setAlert(undefined)
    if (!username) {
      setAlert({
        message: UNDEFINED_USERNAME,
        variant: 'danger',
      })
      return
    }
    setIsLoading(true)
    try {
      const aliasCheckResponse = await isAliasAvailable({
        alias: username,
        type: AliasType.USER_NAME
      })
      if (!aliasCheckResponse.available) {
        setAlert({
          message: 'Sorry, that username has already been taken.',
          variant: 'danger',
        })
      } else if (!aliasCheckResponse.valid) {
        setAlert({
          message: 'Sorry, that username is not valid.',
          variant: 'danger',
        })
      } else {
        // TODO: Looks good!  Go to Google oauth account creation flow

      }
    } catch (err:any) {
      setAlert({
        message: err.reason as string,
        variant: 'danger',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const onSendRegistrationInfo = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setAlert(undefined)
    if (!email) {
      setAlert({
        message: UNDEFINED_EMAIL,
        variant: 'danger',
      })
      return
    }
    setIsLoading(true)
    try {
      const callbackUrl = `${window.location.protocol}//${window.location.host}/register2?emailValidationSignedToken=`
      await registerAccountStep1({email}, callbackUrl)
      setAlert({
        message: 'We have sent you an email with instructions on how to complete the registration process.',
        variant: 'success',
      })
    } catch (err:any) {
      setAlert({
        message: err.reason as string,
        variant: 'danger',
      })
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
      {!isLoading && <FullWidthAlert
        show={!!alert}
        variant={alert?.variant ? alert.variant : 'success'}
        description={alert?.message}
        autoCloseAfterDelayInSeconds={10}
        onClose={() => { setAlert(undefined) }}
      />}
    </>
    
  )
}
