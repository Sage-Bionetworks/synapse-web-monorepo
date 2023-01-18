import React, { useEffect, useState } from 'react'
import { FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { Button } from '@mui/material'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import {
  isAliasAvailable,
  registerAccountStep2,
  setAccessTokenCookie,
} from 'synapse-react-client/dist/utils/SynapseClient'
import { AliasType } from 'synapse-react-client/dist/utils/synapseTypes/Principal/PrincipalServices'
import { getSearchParam, hexDecodeAndDeserialize } from 'URLUtils'
import { SourceAppLogo } from './SourceApp'

export type RegisterAccount2Props = {}

export const RegisterAccount2 = (props: RegisterAccount2Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [emailValidationSignedToken, setEmailValidationSignedToken] = useState(
    undefined as any,
  )

  const emailValidationSignedTokenValue = getSearchParam(
    'emailValidationSignedToken',
  )
  useEffect(() => {
    if (!emailValidationSignedTokenValue) {
      displayToast(
        'Email validation token was not provided in the URL, please contact synapseInfo@sagebase.org',
        'danger',
      )
      return
    }
    try {
      const hexDecodedEmailValidationSignedToken = hexDecodeAndDeserialize(
        emailValidationSignedTokenValue,
      ).emailValidationSignedToken
      setEmailValidationSignedToken(hexDecodedEmailValidationSignedToken)
    } catch (err) {
      displayToast(
        'Unable to process the given email validation token.',
        'danger',
      )
    }
  }, [emailValidationSignedTokenValue])

  const onCreateAccount = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    if (!username) {
      displayToast('Please provide a username and try again.', 'danger')
      return
    }
    if (!password1 || !password2 || password1 !== password2) {
      displayToast('The passwords do not match.', 'danger')
      return
    }
    try {
      setIsLoading(true)
      const aliasCheckResponse = await isAliasAvailable({
        alias: username,
        type: AliasType.USER_NAME,
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
        password: password1,
        firstName,
        lastName,
      })
      setAccessTokenCookie(loginResponse.accessToken, () =>
        window.location.replace('/authenticated/signTermsOfUse'),
      )
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="panel-wrapper-bg RegisterAccount1">
        <div className="panel-wrapper with-white-panel-bg">
          <div className="mainContent">
            <div className="panel-logo logo-wrapper">
              <SourceAppLogo />
            </div>
            <div className="form-wrapper">
              <FormGroup className="required">
                <FormLabel>Choose a username</FormLabel>
                <FormControl
                  onChange={e => setUsername(e.target.value)}
                  value={username}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>First Name</FormLabel>
                <FormControl
                  onChange={e => setFirstName(e.target.value)}
                  value={firstName}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Last Name</FormLabel>
                <FormControl
                  onChange={e => setLastName(e.target.value)}
                  value={lastName}
                />
              </FormGroup>
              <FormGroup className="required">
                <FormLabel>Password</FormLabel>
                <FormControl
                  type="password"
                  onChange={e => setPassword1(e.target.value)}
                  value={password1}
                />
              </FormGroup>
              <FormGroup className="required">
                <FormLabel>Confirm password</FormLabel>
                <FormControl
                  type="password"
                  onChange={e => setPassword2(e.target.value)}
                  value={password2}
                />
              </FormGroup>
              <Button
                variant="contained"
                onClick={onCreateAccount}
                type="button"
                disabled={isLoading}
              >
                Continue
              </Button>
            </div>
          </div>
          <div className={'panel-right'}>
            <div className={'panel-right-text'}>
              <h3>Email address verified!</h3>
              <h4>Now complete your registration.</h4>
              <p>
                Your <strong>username</strong> can be made with letters and
                numbers, but no spaces.
              </p>
              <p>
                <strong>First and last names</strong> are optional, but
                recommended because they make it easier for team members to find
                you.
              </p>
              <p>
                Your <strong>password</strong> needs to be at least 8 letters.
                We recommend using a strong, unique <strong>password</strong> of
                between 16-32 characters. You can use letters, numbers, and
                punctuation marks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
