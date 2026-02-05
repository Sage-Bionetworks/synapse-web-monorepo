import { StyledEngineProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router'
import AppInitializer from './AppInitializer'
import { SourceAppProvider } from './components/useSourceApp'
import { RESET_2FA_ROUTE, RESET_2FA_SIGNED_TOKEN_PARAM } from './Constants'
import ApplicationSessionManager from 'synapse-react-client/utils/AppUtils/session/ApplicationSessionManager'
import { SynapseErrorBoundary } from 'synapse-react-client/components/error/ErrorBanner'
import { SynapseToastContainer } from 'synapse-react-client/components/ToastMessage/ToastMessage'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 50 * 1000, // 50s
      retry: false, // SynapseClient knows which queries to retry
    },
  },
})

/**
 * Wraps the application in all required providers, and is also useful for wrapping components under test.
 * @constructor
 */
export default function AppWrapper(
  props: PropsWithChildren<Record<never, never>>,
) {
  const navigate = useNavigate()

  return (
    <StyledEngineProvider injectFirst>
      <QueryClientProvider client={queryClient}>
        <SynapseErrorBoundary
          onReset={() => {
            // Navigate to root instead of reloading the page
            navigate('/')
          }}
        >
          <ApplicationSessionManager
            onTwoFactorAuthResetThroughSSO={(twoFaError, twoFaResetCode) => {
              // The user completed SSO with a twoFaResetCode
              // Send them to the reset 2FA page with the token
              navigate(
                `${RESET_2FA_ROUTE}?${RESET_2FA_SIGNED_TOKEN_PARAM}=${twoFaResetCode}`,
              )
            }}
          >
            <SourceAppProvider>
              <SynapseToastContainer />
              <AppInitializer>{props.children}</AppInitializer>
            </SourceAppProvider>
          </ApplicationSessionManager>
        </SynapseErrorBoundary>
      </QueryClientProvider>
    </StyledEngineProvider>
  )
}
