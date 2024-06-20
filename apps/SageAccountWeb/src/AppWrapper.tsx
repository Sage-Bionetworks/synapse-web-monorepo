import React from 'react'
import { RESET_2FA_ROUTE, RESET_2FA_SIGNED_TOKEN_PARAM } from './Constants'
import { StyledEngineProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  ApplicationSessionManager,
  SynapseToastContainer,
} from 'synapse-react-client'
import { SourceAppProvider } from './components/useSourceApp'
import AppInitializer from './AppInitializer'
import { useHistory } from 'react-router-dom'

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
  props: React.PropsWithChildren<Record<never, never>>,
) {
  const history = useHistory()

  return (
    <StyledEngineProvider injectFirst>
      <QueryClientProvider client={queryClient}>
        <ApplicationSessionManager
          onTwoFactorAuthResetThroughSSO={(twoFaError, twoFaResetCode) => {
            // The user completed SSO with a twoFaResetCode
            // Send them to the reset 2FA page with the token
            history.push(
              `${RESET_2FA_ROUTE}?${RESET_2FA_SIGNED_TOKEN_PARAM}=${twoFaResetCode}`,
            )
          }}
        >
          <SourceAppProvider>
            <SynapseToastContainer />
            <AppInitializer>{props.children}</AppInitializer>
          </SourceAppProvider>
        </ApplicationSessionManager>
      </QueryClientProvider>
    </StyledEngineProvider>
  )
}
