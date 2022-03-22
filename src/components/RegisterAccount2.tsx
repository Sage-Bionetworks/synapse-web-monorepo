
import React, { useEffect, useState } from 'react'
import {
  Button, Col, Container, FormControl, FormGroup, FormLabel, Row,
} from 'react-bootstrap'
import IconSvg from 'synapse-react-client/dist/containers/IconSvg'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { isAliasAvailable, registerAccountStep2, setAccessTokenCookie } from 'synapse-react-client/dist/utils/SynapseClient'
import { AliasType } from 'synapse-react-client/dist/utils/synapseTypes/Principal/PrincipalServices'
import { getSearchParam, hexDecodeAndDeserialize } from 'URLUtils'
import SageBionetworksLogo from '../assets/SageBionetworksLogo.svg'

export type RegisterAccount2Props = {
}

export const RegisterAccount2 = (props: RegisterAccount2Props) => {
  // const { accessToken } = useSynapseContext()
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  // const [email, setEmail] = useState('')
  const [emailValidationSignedToken, setEmailValidationSignedToken] = useState(undefined as any)

  const emailValidationSignedTokenValue = getSearchParam('emailValidationSignedToken')
  useEffect(() => {
    if (!emailValidationSignedTokenValue) {
      displayToast('Email validation token was not provided in the URL, please contact synapseInfo@sagebase.org', 'danger')
      return
    }
    try {
      const hexDecodedEmailValidationSignedToken = hexDecodeAndDeserialize(emailValidationSignedTokenValue).emailValidationSignedToken
      setEmailValidationSignedToken(hexDecodedEmailValidationSignedToken)
      // setEmail((hexDecodedEmailValidationSignedToken as EmailValidationSignedToken).email)
    } catch (err) {
      displayToast('Unable to process the given email validation token.', 'danger')
    }
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
        password: password1,
        firstName,
        lastName
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

  return (
    <>
      <div className="RegisterAccount2 bootstrap-4-backport blue-background">
        <Container>
          <img
              src={SageBionetworksLogo}
              style={{ height: 100 }}
              alt="Sage Bionetworks Logo"
            />
          <Row>
            <Col xs={12} sm={6}>
              <FormGroup className='required'>
                  <FormLabel>Choose a username</FormLabel>
                  <FormControl 
                    onChange={e => setUsername(e.target.value)} 
                    value = {username}/>
              </FormGroup>
            </Col>
            <Col xs={12} sm={6}>
              {/* <FormGroup>
                  <FormLabel>Email address</FormLabel>
                  <FormControl 
                    disabled
                    value = {email}/>
              </FormGroup> */}
            </Col>
            <Col xs={12} sm={6}>
              <FormGroup>
                  <FormLabel>First Name</FormLabel>
                  <FormControl
                    onChange={e => setFirstName(e.target.value)} 
                    value = {firstName}/>
              </FormGroup>
            </Col>
            <Col xs={12} sm={6}>
              <FormGroup>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl
                    onChange={e => setLastName(e.target.value)} 
                    value = {lastName}/>
              </FormGroup>
            </Col>
            <Col xs={12} sm={6}>
              <FormGroup className='required'>
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    type="password"
                    onChange={e => setPassword1(e.target.value)} 
                    value = {password1}/>
              </FormGroup>
            </Col>
            <Col xs={12} sm={6}>
              <FormGroup className='required'>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl
                    type="password"
                    onChange={e => setPassword2(e.target.value)} 
                    value = {password2}/>
              </FormGroup>
            </Col>
          </Row>
          <div className="buttonsContainer">
            <Button
              variant='primary'
              onClick={onCreateAccount}
              type="button"
              style={{ marginLeft: 20 }}
              disabled={isLoading}
            >
              Continue <IconSvg options={{ icon: 'arrowForward' }} />
            </Button>
          </div>
        </Container>
      </div>
    </>
    
  )
}
