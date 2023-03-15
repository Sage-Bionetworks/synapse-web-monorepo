import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  setAccessTokenCookie,
  signOut,
} from 'synapse-react-client/dist/utils/SynapseClient'
import './App.scss'
import AppInitializer from './AppInitializer'
import { OAuth2Form } from './OAuth2Form'
import { getURLParam } from './URLUtils'
import Versions from './Versions'
import generalTheme from './style/theme'
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles'

const App: React.FC = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false)
  const theme = createTheme(generalTheme)
  debugger
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Router>
            <AppInitializer>
              <Switch>
                <Route exact path="/" render={() => <OAuth2Form />} />
                <Route
                  exact
                  path="/logout"
                  render={() => {
                    signOut().then(() => {
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
                    setAccessTokenCookie(code).then(() => {
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
          </Router>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  )
}
export default App
