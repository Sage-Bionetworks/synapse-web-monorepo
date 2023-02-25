import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles'
import { AppContextConsumer } from 'AppContext'
import { SageResourcesPage } from 'components/SageResourcesPage'
import { AccountCreatedPage } from 'components/AccountCreatedPage'
import { AccountSettings } from 'components/AccountSettings'
import { CertificationQuiz } from 'components/CertificationQuiz'
import CookiesNotification from 'components/CookiesNotification'
import { CurrentAffiliationPage } from 'components/CurrentAffiliationPage'
import { JoinTeamPage } from 'components/JoinTeamPage'
import { ProfileValidation } from 'components/ProfileValidation/ProfileValidation'
import { RegisterAccount1 } from 'components/RegisterAccount1'
import { RegisterAccount2 } from 'components/RegisterAccount2'
import { ResetPassword } from 'components/ResetPassword'
import { TermsOfUsePage } from 'components/TermsOfUsePage'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { SynapseComponents } from 'synapse-react-client'
import { signOut } from 'synapse-react-client/dist/utils/SynapseClient'
import {
  SynapseContextConsumer,
  SynapseContextType,
} from 'synapse-react-client/dist/utils/SynapseContext'
import { getSearchParam } from 'URLUtils'
import './App.scss'
import AppInitializer from './AppInitializer'
import LoginPage from './LoginPage'
import generalTheme from './style/theme'

const isCodeSearchParam = getSearchParam('code') !== undefined
const isProviderSearchParam = getSearchParam('provider') !== undefined
const isInSSOFlow = isCodeSearchParam && isProviderSearchParam

// theme is a merge of a general theme and particular color pallettesfor the source app
const theme = createTheme(generalTheme)

const App: React.FC = () => {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Router>
            <AppInitializer>
              <CookiesNotification />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => {
                    return (
                      <SynapseContextConsumer>
                        {(ctx?: SynapseContextType) => {
                          if (!ctx?.accessToken) {
                            return <LoginPage returnToUrl={'/'} />
                          } else {
                            return (
                              <AppContextConsumer>
                                {appContext => (
                                  <>
                                    {appContext?.redirectURL &&
                                      !isInSSOFlow &&
                                      window.location.replace(
                                        appContext?.redirectURL,
                                      )}
                                  </>
                                )}
                              </AppContextConsumer>
                            )
                          }
                        }}
                      </SynapseContextConsumer>
                    )
                  }}
                />
                <Route
                  exact
                  path="/logout"
                  render={props => {
                    signOut().then(() => {
                      window.location.assign('/authenticated/myaccount')
                    })
                    return <></>
                  }}
                />
                <Route exact path="/register1" component={RegisterAccount1} />
                <Route exact path="/register2" component={RegisterAccount2} />
                <Route exact path="/jointeam" component={JoinTeamPage} />
                <Route
                  exact
                  path="/sageresources"
                  component={SageResourcesPage}
                />
                <Route
                  exact
                  path="/resetPassword"
                  render={props => {
                    return (
                      <ResetPassword returnToUrl="/authenticated/myaccount" />
                    )
                  }}
                />
                {/* check for an access token for any route in the "/authenticated/" path */}
                <Route
                  path="/authenticated/"
                  render={routeProps => {
                    const path = routeProps.location.pathname
                    return (
                      <SynapseContextConsumer>
                        {(ctx?: SynapseContextType) => {
                          if (!ctx?.accessToken) {
                            return <LoginPage returnToUrl={path} />
                          }
                          if (path === '/authenticated/validate') {
                            return <ProfileValidation />
                          } else if (path === '/authenticated/signTermsOfUse') {
                            return <TermsOfUsePage />
                          } else if (path === '/authenticated/myaccount') {
                            return <AccountSettings />
                          } else if (
                            path === '/authenticated/currentaffiliation'
                          ) {
                            return <CurrentAffiliationPage />
                          } else if (path === '/authenticated/accountcreated') {
                            return <AccountCreatedPage />
                          } else if (
                            path === '/authenticated/certificationquiz'
                          ) {
                            return <CertificationQuiz />
                          } else {
                            return (
                              <>
                                <p>Unrecognized match path {path}</p>
                              </>
                            )
                          }
                        }}
                      </SynapseContextConsumer>
                    )
                  }}
                />
                <Route
                  exact={true}
                  path="/login"
                  render={props => {
                    return <LoginPage returnToUrl={'/'} />
                  }}
                />
              </Switch>
            </AppInitializer>
          </Router>
        </ThemeProvider>
      </StyledEngineProvider>
      <SynapseComponents.SynapseToastContainer />
    </div>
  )
}
export default App
