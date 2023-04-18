import React from 'react'
import { Typography } from 'synapse-react-client'
import StandaloneLoginForm from 'synapse-react-client/dist/containers/auth/StandaloneLoginForm'
import { SourceAppDescription, SourceAppLogo } from './components/SourceApp'
import { Box } from '@mui/material'
import {
  StyledInnerContainer,
  StyledOuterContainer,
} from 'components/StyledComponents'
import {
  preparePostSSORedirect,
  redirectAfterSSO,
} from 'synapse-react-client/dist/utils/AppUtils'
import { useHistory } from 'react-router-dom'
import { useApplicationSessionContext } from 'synapse-react-client/dist/utils/apputils/session/ApplicationSessionContext'
import { backButtonSx } from 'components/BackButton'
import { LOGIN_BACK_BUTTON_CLASS_NAME } from 'synapse-react-client/dist/utils/SynapseConstants'

export type LoginPageProps = {
  returnToUrl?: string
}

function LoginPage(props: LoginPageProps) {
  const { returnToUrl } = props
  const { refreshSession, twoFactorAuthErrorResponse } =
    useApplicationSessionContext()
  const history = useHistory()
  return (
    <StyledOuterContainer>
      <StyledInnerContainer>
        <Box
          sx={{
            py: 10,
            px: 8,
            height: '100%',
            position: 'relative',
            [`.${LOGIN_BACK_BUTTON_CLASS_NAME}`]: backButtonSx,
          }}
        >
          <Box
            sx={{
              minHeight: '530px',
            }}
          >
            <div className={'panel-logo'}>
              <SourceAppLogo />
            </div>
            <Box sx={{ my: 4 }}>
              <StandaloneLoginForm
                sessionCallback={() => {
                  redirectAfterSSO(history, returnToUrl)
                  // If we didn't redirect, refresh the session
                  refreshSession()
                }}
                registerAccountUrl={'/register1'}
                resetPasswordUrl={'/resetPassword'}
                onBeginOAuthSignIn={() => {
                  // save current route (so that we can go back here after SSO)
                  preparePostSSORedirect()
                }}
                twoFactorAuthenticationRequired={twoFactorAuthErrorResponse}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            background:
              "url('https://s3.amazonaws.com/static.synapse.org/images/login-panel-bg.svg') no-repeat right bottom 20px",
          }}
        >
          <Typography
            className="headline"
            variant="headline2"
            sx={{ marginTop: '95px' }}
          >
            Sign in to your account
          </Typography>
          <SourceAppDescription />
        </Box>
      </StyledInnerContainer>
    </StyledOuterContainer>
  )
}

export default LoginPage
