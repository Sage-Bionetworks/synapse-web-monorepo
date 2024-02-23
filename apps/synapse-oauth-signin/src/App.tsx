import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  SynapseClient,
  defaultQueryClientConfig,
  SynapseTheme,
} from 'synapse-react-client'
import './App.scss'
import AppInitializer from './AppInitializer'
import { OAuth2Form } from './OAuth2Form'
import { getURLParam } from './URLUtils'
import Versions from './Versions'
import generalTheme from './style/theme'
import { createTheme, StyledEngineProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '@mui/material'

const queryClient = new QueryClient(defaultQueryClientConfig)
const theme = createTheme(SynapseTheme.mergeTheme(generalTheme))

function App() {
  const [isLoggedOut, setIsLoggedOut] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <AppInitializer>
                <Switch>
                  <Route exact path="/" render={() => <OAuth2Form />} />
                  <Route
                    exact
                    path="/logout"
                    render={() => {
                      SynapseClient.signOut().then(() => {
                        setIsLoggedOut(true)
                      })
                      return (
                        <p style={{ margin: 10 }}>
                          {isLoggedOut ? 'Logged' : 'Logging'} out
                        </p>
                      )
                    }}
                  />
                  <Route
                    exact
                    path="/login"
                    render={() => {
                      // look for the code from the params
                      const code = getURLParam('code')
                      SynapseClient.setAccessTokenCookie(code).then(() => {
                        setIsLoggedOut(false)
                      })
                      return (
                        <p style={{ margin: 10 }}>
                          {isLoggedOut ? 'Logging' : 'Logged'} in
                        </p>
                      )
                    }}
                  />
                </Switch>
              </AppInitializer>
              <Versions />
            </ThemeProvider>
          </QueryClientProvider>
        </StyledEngineProvider>
      </BrowserRouter>
    </div>
  )
}
export default App
