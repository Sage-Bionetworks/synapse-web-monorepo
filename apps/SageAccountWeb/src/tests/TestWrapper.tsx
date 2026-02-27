import { PropsWithChildren } from 'react'
import { MemoryRouter, MemoryRouterProps } from 'react-router'
import {
  SourceAppContext,
  SYNAPSE_SOURCE_APP_ID,
} from '../components/useSourceApp'
import { StyledEngineProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import ApplicationSessionManager from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionManager'
import { SynapseErrorBoundary } from 'synapse-react-client/components/error/ErrorBanner'
import { SynapseToastContainer } from 'synapse-react-client/components/ToastMessage/ToastMessage'
import AppInitializer from '../AppInitializer'
import { RESET_2FA_ROUTE, RESET_2FA_SIGNED_TOKEN_PARAM } from '../Constants'
import { STATIC_SOURCE_APP_CONFIG } from 'synapse-react-client/utils/hooks/useSourceAppConfigs'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { defaultMuiThemeOptions } from 'synapse-react-client/theme/DefaultTheme'
import { sageAccountWebThemeOverrides } from '../style/theme'
import {
  ApplicationSessionContextProvider,
  ApplicationSessionContextType,
} from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 50 * 1000, // 50s
      retry: false, // SynapseClient knows which queries to retry
    },
  },
})

const testSourceAppConfig = {
  ...STATIC_SOURCE_APP_CONFIG,
  appId: SYNAPSE_SOURCE_APP_ID,
}

const theme = createTheme(defaultMuiThemeOptions, sageAccountWebThemeOverrides)

export type TestWrapperProps = PropsWithChildren<{
  memoryRouterProps?: MemoryRouterProps
  applicationSessionContext?: ApplicationSessionContextType
}>

/**
 * Test wrapper that provides a hardcoded static sourceApp config to avoid table queries.
 * Optionally accepts an applicationSessionContext to simulate SSO 2FA flows.
 */
function TestWrapperInner(props: TestWrapperProps) {
  const navigate = useNavigate()
  const { applicationSessionContext } = props

  const content = (
    <SourceAppContext.Provider value={testSourceAppConfig}>
      <ThemeProvider theme={theme}>
        <SynapseToastContainer />
        <AppInitializer>{props.children}</AppInitializer>
      </ThemeProvider>
    </SourceAppContext.Provider>
  )

  return (
    <StyledEngineProvider injectFirst>
      <QueryClientProvider client={queryClient}>
        <SynapseErrorBoundary
          onReset={() => {
            // Navigate to root instead of reloading the page
            navigate('/')
          }}
        >
          {applicationSessionContext ? (
            <ApplicationSessionContextProvider
              context={applicationSessionContext}
            >
              {content}
            </ApplicationSessionContextProvider>
          ) : (
            <ApplicationSessionManager
              onTwoFactorAuthResetThroughSSO={(twoFaError, twoFaResetCode) => {
                // The user completed SSO with a twoFaResetCode
                // Send them to the reset 2FA page with the token
                navigate(
                  `${RESET_2FA_ROUTE}?${RESET_2FA_SIGNED_TOKEN_PARAM}=${twoFaResetCode}`,
                )
              }}
            >
              {content}
            </ApplicationSessionManager>
          )}
        </SynapseErrorBoundary>
      </QueryClientProvider>
    </StyledEngineProvider>
  )
}

export default function TestWrapper(props: TestWrapperProps) {
  return (
    <MemoryRouter {...props.memoryRouterProps}>
      <TestWrapperInner {...props} />
    </MemoryRouter>
  )
}
