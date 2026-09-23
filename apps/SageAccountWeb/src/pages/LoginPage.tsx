import { Box, Typography } from '@mui/material'
import { useNavigate, useRevalidator, useSearchParams } from 'react-router'
import { backButtonSx } from '../components/BackButton.js'
import { SourceAppDescription, SourceAppLogo } from '../components/SourceApp.js'
import {
  StyledInnerContainer,
  StyledOuterContainer,
} from '../components/StyledComponents.js'

import { useSourceApp } from '../components/useSourceApp.js'
import { RESET_2FA_ROUTE, RESET_2FA_SIGNED_TOKEN_PARAM } from '../Constants.js'
import StandaloneLoginForm from 'synapse-react-client/components/Authentication/StandaloneLoginForm'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { LoginMethod } from 'synapse-react-client/components/Authentication/LoginMethod'
import { useApplicationSessionContext } from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionContext'
import { useLastLoginInfoState } from 'synapse-react-client/components/Authentication/LastLoginInfo'
import {
  restoreLastPlace,
  storeLastPlace,
} from 'synapse-react-client/utils/AppUtils/AppUtils'
import SystemUseNotification from 'synapse-react-client/components/SystemUseNotification/SystemUseNotification'

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

const SignInHeading = (
  <>
    <Typography
      className="headline"
      variant="headline2"
      sx={theme => ({
        marginTop: '95px',
        [theme.breakpoints.down('md')]: {
          marginTop: 0,
          marginBottom: '10px',
          fontSize: '18px',
        },
      })}
    >
      Sign in to your account
    </Typography>
    <SourceAppDescription />
  </>
)

function LoginPage(props: LoginPageProps) {
  const { returnToUrl } = props
  const { refreshSession, twoFactorAuthSSOErrorResponse } =
    useApplicationSessionContext()
  const { revalidate } = useRevalidator()
  const navigate = useNavigate()
  const sourceApp = useSourceApp()
  const [searchParams] = useSearchParams()

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
              padding: '20px',
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
            <Box
              className={'panel-logo'}
              sx={theme => ({
                [theme.breakpoints.down('md')]: {
                  '& > .SourceAppLogo': {
                    marginBottom: '20px',
                    marginTop: '44px',
                  },
                },
              })}
            >
              <SourceAppLogo />
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              {SignInHeading}
            </Box>
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
                  refreshSession().then(() => {
                    // Revalidate/refetch loader data once the session is set
                    void revalidate()
                  })
                }}
                registerAccountUrl={'/register1'}
                resetPasswordUrl={'/resetPassword'}
                onBeginOAuthSignIn={() => {
                  // save current route (so that we can go back here after SSO)
                  storeLastPlace()
                }}
                twoFactorAuthenticationRequired={twoFactorAuthSSOErrorResponse}
                twoFactorAuthResetUri={`${window.location.origin}/${RESET_2FA_ROUTE}?${RESET_2FA_SIGNED_TOKEN_PARAM}=`}
                realm={sourceApp?.defaultRealm}
                showRASLogin={searchParams.get('appId') === 'ampals'}
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
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {SignInHeading}
          </Box>
          <SystemUseNotification />
        </Box>
      </StyledInnerContainer>
    </StyledOuterContainer>
  )
}

export default LoginPage
