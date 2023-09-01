import { BrowserRouter, Switch } from 'react-router-dom'
import React from 'react'
import './App.scss'
import { CookiesProvider } from 'react-cookie'
import {
  SynapseTheme,
  SynapseToastContainer,
  defaultQueryClientConfig,
} from 'synapse-react-client'
import { createTheme, ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from 'react-query'
import Footer from './Footer'
import AppInitializer from './AppInitializer'
import Navbar from './Navbar'
import CookiesNotification from './CookiesNotification'
import { LogInDialogContextProvider } from './LogInDialogContext'
import palette from './config/paletteConfig'

const RouteResolver = React.lazy(() => import('./RouteResolver'))
const theme = createTheme(SynapseTheme.mergeTheme({ palette }))
const queryClient = new QueryClient(defaultQueryClientConfig)

function App() {
  return (
    <>
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
    </>
  )
}

export default App
