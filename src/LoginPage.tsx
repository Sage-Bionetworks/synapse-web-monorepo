import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Typography } from 'synapse-react-client'
import StandaloneLoginForm from 'synapse-react-client/dist/containers/auth/StandaloneLoginForm'
import { SourceAppDescription, SourceAppLogo } from './components/SourceApp'
import { Box } from '@mui/material'
import {
  StyledInnerContainer,
  StyledOuterContainer,
} from 'components/StyledComponents'

export type OwnProps = {
  returnToUrl: string
}
export type LoginPageProps = OwnProps & RouteComponentProps

const LoginPage: React.FunctionComponent<LoginPageProps> = ({
  returnToUrl,
}: OwnProps) => {
  const [isSessionEstablished, setIsSessionEstablished] =
    React.useState<boolean>(false)
  if (isSessionEstablished) {
    // using this instead of Redirect since we may need a page refresh
    window.location.replace(returnToUrl)
  }
  return (
    <StyledOuterContainer>
      <StyledInnerContainer>
        <Box sx={{ py: 10, px: 8, height: '100%', position: 'relative' }}>
          <Box sx={{ minHeight: '530px' }}>
            <div className={'panel-logo'}>
              <SourceAppLogo />
            </div>
            <StandaloneLoginForm
              sessionCallback={() => setIsSessionEstablished(true)}
              registerAccountUrl={'/register1'}
              resetPasswordUrl={'/resetPassword'}
              onBeginOAuthSignIn={() => {
                // save current route (so that we can go back here after SSO)
                localStorage.setItem(
                  'after-sso-login-url',
                  window.location.href,
                )
              }}
            />
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
            sx={{ marginTop: '115px' }}
          >
            Sign in to your account
          </Typography>
          <SourceAppDescription />
        </Box>
      </StyledInnerContainer>
    </StyledOuterContainer>
  )
}

export default withRouter(LoginPage)
