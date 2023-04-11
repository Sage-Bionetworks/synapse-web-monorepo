import { BrowserRouter, Switch } from 'react-router-dom'
import * as React from 'react'
import './App.scss'
import Footer from './Footer'
import AppInitializer from './AppInitializer'
import Navbar from './Navbar'
import CookiesNotification from './CookiesNotification'
import { CookiesProvider } from 'react-cookie'
import { SynapseComponents } from 'synapse-react-client'
import { LogInDialogContextProvider } from './LogInDialogContext'
import { createTheme, ThemeProvider } from '@mui/material'
import palette from './config/paletteConfig'
import { mergeTheme } from 'synapse-react-client/dist/utils/theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { defaultQueryClientConfig } from 'synapse-react-client/dist/utils/FullContextProvider'

const RouteResolver = React.lazy(() => import('./RouteResolver'))
const theme = createTheme(mergeTheme({ palette }))
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
                  <SynapseComponents.SynapseToastContainer />
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
