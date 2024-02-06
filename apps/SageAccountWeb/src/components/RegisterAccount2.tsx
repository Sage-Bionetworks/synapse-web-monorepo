import { Button, TextField, Typography } from '@mui/material'
import { StyledFormControl } from './StyledComponents'
import React, { useEffect, useState } from 'react'
import { displayToast, SynapseClient } from 'synapse-react-client'
import { AliasType } from '@sage-bionetworks/synapse-types'
import { getSearchParam, hexDecodeAndDeserialize } from '../URLUtils'
import { LeftRightPanel } from './LeftRightPanel'
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
      const aliasCheckResponse = await SynapseClient.isAliasAvailable({
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
      const loginResponse = await SynapseClient.registerAccountStep2({
        username,
        emailValidationSignedToken,
        password: password1,
        firstName,
        lastName,
      })
      SynapseClient.setAccessTokenCookie(loginResponse.accessToken).then(() =>
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
      <LeftRightPanel
        className={'RegisterAccount2'}
        leftContent={
          <div className="mainContent">
            <div className="panel-logo logo-wrapper">
              <SourceAppLogo />
            </div>
            <div className="form-wrapper">
              <StyledFormControl
                fullWidth
                required
                variant="standard"
                margin="normal"
              >
                <TextField
                  fullWidth
                  required
                  label={'Choose a username'}
                  id="username"
                  name="username"
                  onChange={e => setUsername(e.target.value)}
                  value={username || ''}
                />
              </StyledFormControl>
              <StyledFormControl fullWidth variant="standard" margin="normal">
                <TextField
                  fullWidth
                  label={'First name'}
                  id="firstName"
                  name="firstName"
                  onChange={e => setFirstName(e.target.value)}
                  value={firstName || ''}
                />
              </StyledFormControl>
              <StyledFormControl fullWidth variant="standard" margin="normal">
                <TextField
                  fullWidth
                  label={'Last name'}
                  id="lastName"
                  name="lastName"
                  onChange={e => setLastName(e.target.value)}
                  value={lastName || ''}
                />
              </StyledFormControl>
              <StyledFormControl
                fullWidth
                required
                variant="standard"
                margin="normal"
              >
                <TextField
                  type="password"
                  fullWidth
                  required
                  label={'Password'}
                  id="password1"
                  name="password1"
                  onChange={e => setPassword1(e.target.value)}
                  value={password1 || ''}
                />
              </StyledFormControl>
              <StyledFormControl
                fullWidth
                required
                variant="standard"
                margin="normal"
              >
                <TextField
                  type="password"
                  fullWidth
                  required
                  label={'Confirm password'}
                  id="password2"
                  name="password2"
                  onChange={e => setPassword2(e.target.value)}
                  value={password2 || ''}
                />
              </StyledFormControl>
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
        }
        rightContent={
          <div>
            <Typography variant="headline2">Email address verified!</Typography>
            <Typography variant="headline3" sx={{ marginTop: '20px' }}>
              Now complete your registration.
            </Typography>
            <Typography variant="smallText1" sx={{ marginTop: '20px' }}>
              Your <strong>username</strong> can be made with letters and
              numbers, but no spaces.
            </Typography>
            <Typography variant="smallText1" sx={{ marginTop: '20px' }}>
              <strong>First and last names</strong> are optional, but
              recommended because they make it easier for team members to find
              you.
            </Typography>
            <Typography variant="smallText1" sx={{ marginTop: '20px' }}>
              Your <strong>password</strong> needs to be at least 8 letters. We
              recommend using a strong, unique <strong>password</strong> of
              between 16-32 characters. You can use letters, numbers, and
              punctuation marks.
            </Typography>
          </div>
        }
      ></LeftRightPanel>
    </>
  )
}
