import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Typography } from 'synapse-react-client'
import StandaloneLoginForm from 'synapse-react-client/dist/containers/auth/StandaloneLoginForm'
import { SourceAppDescription, SourceAppLogo } from './components/SourceApp'
import { Box } from '@mui/material'
import { LeftRightPanel } from 'synapse-react-client/dist/components/styled/LeftRightPanel'

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
    <LeftRightPanel
      leftContent={
        <>
          <Box sx={{ py: 10, px: 8, height: '100%', position: 'relative' }}>
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
        </>
      }
      rightContent={
        <Box
          sx={{
            py: 10,
            height: '100%',
            background:
              "url('https://s3.amazonaws.com/static.synapse.org/images/login-panel-bg.svg') no-repeat right bottom 20px",
          }}
        >
          <Box
            sx={{
              py: 10,
              px: 9,
              color: '#1e4964',
            }}
          >
            <Typography className="headline" variant="headline2">
              Sign in to your account
            </Typography>
            <SourceAppDescription />
          </Box>
        </Box>
      }
    />
  )
}

export default withRouter(LoginPage)
