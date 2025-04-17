import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router'
import {
  LoginMethod,
  restoreLastPlace,
  StandaloneLoginForm,
  storeLastPlace,
  SynapseConstants,
  SystemUseNotification,
  useApplicationSessionContext,
  useLastLoginInfoState,
} from 'synapse-react-client'
import { backButtonSx } from './components/BackButton.js'
import { SourceAppDescription, SourceAppLogo } from './components/SourceApp.js'
import {
  StyledInnerContainer,
  StyledOuterContainer,
} from './components/StyledComponents.js'
import { useSourceApp } from './components/useSourceApp'
import { RESET_2FA_ROUTE, RESET_2FA_SIGNED_TOKEN_PARAM } from './Constants'

export type LoginPageProps = {
  returnToUrl?: string
}

function getLoginMethodByProviderQueryParam(providerQueryParam: string | null) {
  for (const [key, value] of Object.entries(
    SynapseConstants.OAUTH2_PROVIDERS,
  )) {
    if (providerQueryParam === value) {
      return key as LoginMethod
    }
  }
  // if there isn't a provider query param, then assume logged in via email
  return SynapseConstants.LOGIN_METHOD_EMAIL
}

function getLoginMethod(window: Window) {
  const provider = new URLSearchParams(window.location.search).get('provider')
  return getLoginMethodByProviderQueryParam(provider)
}

function LoginPage(props: LoginPageProps) {
  const { returnToUrl } = props
  const { refreshSession, twoFactorAuthSSOErrorResponse } =
    useApplicationSessionContext()
  const navigate = useNavigate()
  const sourceApp = useSourceApp()
  const {
    lastLoginDateState,
    lastLoginMethodState,
    lastLoginSourceAppNameState,
    lastLoginSourceAppURLState,
  } = useLastLoginInfoState()

  return (
    <StyledOuterContainer>
      <StyledInnerContainer
        sx={theme => ({
          [theme.breakpoints.down('sm')]: {
            '& > div:nth-of-type(1), & > div:nth-of-type(2)': {
              padding: '40px',
            },
          },
        })}
      >
        <Box
          sx={{
            py: 10,
            px: 8,
            height: '100%',
            position: 'relative',
            [`.${SynapseConstants.LOGIN_BACK_BUTTON_CLASS_NAME}`]: backButtonSx,
          }}
        >
          <Box
            sx={{
              minHeight: { xs: '100%', md: '600px' },
            }}
          >
            <div className={'panel-logo'}>
              <SourceAppLogo />
            </div>
            <Box sx={{ my: 4 }}>
              <StandaloneLoginForm
                sessionCallback={() => {
                  if (sourceApp?.friendlyName && sourceApp.appURL) {
                    lastLoginMethodState.set(getLoginMethod(window))
                    lastLoginDateState.set(new Date().toISOString())
                    lastLoginSourceAppNameState.set(sourceApp?.friendlyName)
                    lastLoginSourceAppURLState.set(sourceApp?.appURL)
                  }
                  restoreLastPlace(navigate, returnToUrl)
                  // If we didn't redirect, refresh the session
                  refreshSession()
                }}
                registerAccountUrl={'/register1'}
                resetPasswordUrl={'/resetPassword'}
                onBeginOAuthSignIn={() => {
                  // save current route (so that we can go back here after SSO)
                  storeLastPlace()
                }}
                twoFactorAuthenticationRequired={twoFactorAuthSSOErrorResponse}
                twoFactorAuthResetUri={`${window.location.origin}/${RESET_2FA_ROUTE}?${RESET_2FA_SIGNED_TOKEN_PARAM}=`}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            background: {
              sm: 'none',
              md: "url('https://s3.amazonaws.com/static.synapse.org/images/login-panel-bg.svg') no-repeat right bottom 20px",
            },
          }}
        >
          <Typography
            className="headline"
            variant="headline2"
            sx={{ marginTop: { xs: '45px', md: '95px' } }}
          >
            Sign in to your account
          </Typography>
          <SourceAppDescription />
          <SystemUseNotification />
        </Box>
      </StyledInnerContainer>
    </StyledOuterContainer>
  )
}

export default LoginPage
