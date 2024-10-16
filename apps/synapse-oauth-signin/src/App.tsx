import { ThemeProvider } from '@mui/material'
import { createTheme, StyledEngineProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { Outlet } from 'react-router-dom'
import {
  defaultQueryClientConfig,
  SynapseErrorBoundary,
  SynapseTheme,
} from 'synapse-react-client'
import './App.scss'
import AppInitializer from './AppInitializer'
import generalTheme from './style/theme'
import Versions from './Versions'

const defaultQueryClient = new QueryClient(defaultQueryClientConfig)
const theme = createTheme(SynapseTheme.mergeTheme(generalTheme))

export type AppProps = {
  // Override the query client used in the app (useful for testing)
  queryClient?: QueryClient
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
