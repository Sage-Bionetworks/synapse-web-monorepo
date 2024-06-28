import { BrowserRouter, Switch } from 'react-router-dom'
import React, { useMemo } from 'react'
import Footer from './components/Footer'
import AppInitializer from './components/AppInitializer'
import Navbar from './components/Navbar'
import { CookiesProvider } from 'react-cookie'
import {
  CookiesNotification,
  SynapseTheme,
  SynapseToastContainer,
  defaultQueryClientConfig,
} from 'synapse-react-client'
import { LogInDialogContextProvider } from './components/LogInDialogContext'
import { createTheme, ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PortalProps } from './components/PortalProps'
import { PortalContextProvider } from './components/PortalContext'

const RouteResolver = React.lazy(() => import('./components/RouteResolver'))
const queryClient = new QueryClient(defaultQueryClientConfig)

function Portal(props: PortalProps) {
  const { palette, ...context } = props
  const theme = useMemo(
    () => createTheme(SynapseTheme.mergeTheme({ palette })),
    [palette],
  )
  return (
    <PortalContextProvider value={context}>
      <CookiesProvider>
        <BrowserRouter>
          <LogInDialogContextProvider>
            <ThemeProvider theme={theme}>
              <QueryClientProvider client={queryClient}>
                <AppInitializer>
                  <SynapseToastContainer />
                  <Navbar />
                  <CookiesNotification />
                  <main className="main">
                    {/* all the content below */}
                    <React.Suspense fallback={<div />}>
                      <Switch>
                        <RouteResolver />
                      </Switch>
                    </React.Suspense>
                  </main>
                  <Footer />
                </AppInitializer>
              </QueryClientProvider>
            </ThemeProvider>
          </LogInDialogContextProvider>
        </BrowserRouter>
      </CookiesProvider>
    </PortalContextProvider>
  )
}

export default Portal
