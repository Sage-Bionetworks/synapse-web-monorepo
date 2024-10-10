import { ThemeProvider } from '@mui/material'
import { createTheme, StyledEngineProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import {
  defaultQueryClientConfig,
  SynapseClient,
  SynapseErrorBoundary,
  SynapseTheme,
  useSynapseContext,
} from 'synapse-react-client'
import './App.scss'
import AppInitializer from './AppInitializer'
import { getURLParam } from './URLUtils'
import Versions from './Versions'
import generalTheme from './style/theme'

const defaultQueryClient = new QueryClient(defaultQueryClientConfig)
const theme = createTheme(SynapseTheme.mergeTheme(generalTheme))

type AppProps = {
  // Override the query client used in the app (useful for testing)
  queryClient?: QueryClient
}

export function LogoutComponent() {
  const { accessToken } = useSynapseContext()
  useEffect(() => {
    SynapseClient.signOut()
  }, [])
  return <p style={{ margin: 10 }}>{accessToken ? 'Logging' : 'Logged'} out</p>
}

export function LoginComponent() {
  const { accessToken } = useSynapseContext()
  useEffect(() => {
    const code = getURLParam('code')
    // look for the code from the params
    SynapseClient.setAccessTokenCookie(code)
  }, [])

  return <p style={{ margin: 10 }}>{accessToken ? 'Logged' : 'Logging'} in</p>
}

function App(props: AppProps) {
  const { queryClient = defaultQueryClient } = props

  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <AppInitializer>
              <SynapseErrorBoundary>
                <Outlet />
              </SynapseErrorBoundary>
            </AppInitializer>
            <Versions />
          </ThemeProvider>
        </QueryClientProvider>
      </StyledEngineProvider>
    </div>
  )
}
export default App
