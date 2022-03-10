import React, { useEffect, useState } from 'react'
import {
  Button,
} from 'react-bootstrap'
import { Typography } from 'synapse-react-client'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { isAliasAvailable, registerAccountStep2, setAccessTokenCookie } from 'synapse-react-client/dist/utils/SynapseClient'
import { AliasType, EmailValidationSignedToken } from 'synapse-react-client/dist/utils/synapseTypes/Principal/PrincipalServices'
import { getSearchParam, hexDecodeAndDeserialize } from 'URLUtils'

export type RegisterAccount2Props = {
}

export const RegisterAccount2 = (props: RegisterAccount2Props) => {
  // const { accessToken } = useSynapseContext()
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [email, setEmail] = useState('')
  const [emailValidationSignedToken, setEmailValidationSignedToken] = useState(undefined as any)

  const emailValidationSignedTokenValue = getSearchParam('emailValidationSignedToken')
  useEffect(() => {
    if (!emailValidationSignedTokenValue) {
      displayToast('Email validation token was not provided in the URL, please contact synapseInfo@sagebase.org', 'danger')
      return
    }
    const hexDecodedEmailValidationSignedToken = hexDecodeAndDeserialize(emailValidationSignedTokenValue).emailValidationSignedToken  
    setEmailValidationSignedToken(hexDecodedEmailValidationSignedToken)
    setEmail((hexDecodedEmailValidationSignedToken as EmailValidationSignedToken).email)
  }, [emailValidationSignedTokenValue])

  const onCreateAccount = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (!username) {
      displayToast('Please provide a username and try again.', 'danger')
      return
    }
    if (!password1 || !password2 || (password1 !== password2)) {
      displayToast('The passwords do not match.', 'danger')
      return
    }
    try {
      setIsLoading(true)
      const aliasCheckResponse = await isAliasAvailable({
        alias: username,
        type: AliasType.USER_NAME
      })
      if (!aliasCheckResponse.available) {
        displayToast('Sorry, that username has already been taken.', 'danger')
        return
      } else if (!aliasCheckResponse.valid) {
        displayToast('Sorry, that username is not valid.', 'danger')
        return
      }
      // capture loginResponse here
      const loginResponse = await registerAccountStep2({
        username,
        emailValidationSignedToken,
        password: password1
      })
      setAccessTokenCookie(
        loginResponse.accessToken,
        () => window.location.replace('/authenticated/signTermsOfUse')
      )
    } catch (err:any) {
      displayToast(err.reason as string, 'danger')
    } finally {
      setIsLoading(false)
    }
  }

  const onChangeUsername = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value)
  }
  const onChangePassword1 = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setPassword1(event.currentTarget.value)
  }
  const onChangePassword2 = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setPassword2(event.currentTarget.value)
  }

  return (
    <>
      <div className="RegisterAccount2 bootstrap-4-backport">
        <div>
          <Typography variant='label'>Choose a username</Typography>
          <input
              onChange={onChangeUsername}
              type="text"
              placeholder="Choose a username"
            ></input>
        </div>
        <div>
          <Typography variant='label'>Email address</Typography>
          <input
              type="text"
              value={email}
              readOnly={true}
            ></input>
        </div>
        <div>
          <Typography variant='label'>Password</Typography>
          <input
              onChange={onChangePassword1}
              type='password'
            ></input>
        </div>
        <div>
          <Typography variant='label'>Confirm password</Typography>
          <input
              onChange={onChangePassword2}
              type='password'
            ></input>
        </div>
        <Button
          variant='primary'
          onClick={onCreateAccount}
          type="button"
          style={{ marginLeft: 20 }}
          disabled={isLoading}
        >
          Create Account
        </Button>
      </div>
    </>
    
  )
}
