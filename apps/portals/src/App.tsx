import { BrowserRouter, Switch } from 'react-router-dom'
import React from 'react'
import './App.scss'
import Footer from './Footer'
import AppInitializer from './AppInitializer'
import Navbar from './Navbar'
import { CookiesProvider } from 'react-cookie'
import {
  CookiesNotification,
  SynapseTheme,
  SynapseToastContainer,
  defaultQueryClientConfig,
} from 'synapse-react-client'
import { LogInDialogContextProvider } from './LogInDialogContext'
import { createTheme, ThemeProvider } from '@mui/material'
import palette from './config/paletteConfig'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const RouteResolver = React.lazy(() => import('./RouteResolver'))
const theme = createTheme(SynapseTheme.defaultMuiThemeOptions, { palette })
const queryClient = new QueryClient(defaultQueryClientConfig)

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CookiesProvider>
          <BrowserRouter>
            <LogInDialogContextProvider>
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
            </LogInDialogContextProvider>
          </BrowserRouter>
        </CookiesProvider>
      </ThemeProvider>
    </>
  )
}

export default App
