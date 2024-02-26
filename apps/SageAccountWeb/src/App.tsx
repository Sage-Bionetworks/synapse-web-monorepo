import { StyledEngineProvider } from '@mui/material/styles'
import { AppContextConsumer } from './AppContext'
import { SageResourcesPage } from './components/SageResourcesPage'
import { AccountCreatedPage } from './components/AccountCreatedPage'
import { AccountSettings } from './components/AccountSettings'
import { CertificationQuiz } from './components/CertificationQuiz'
import { CurrentAffiliationPage } from './components/CurrentAffiliationPage'
import { JoinTeamPage } from './components/JoinTeamPage'
import { ProfileValidation } from './components/ProfileValidation/ProfileValidation'
import { RegisterAccount1 } from './components/RegisterAccount1'
import { RegisterAccount2 } from './components/RegisterAccount2'
import { ResetPassword } from './components/ResetPassword'
import { TermsOfUsePage } from './components/TermsOfUsePage'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  ApplicationSessionManager,
  CookiesNotification,
  SynapseClient,
  SynapseContextConsumer,
  SynapseContextType,
  SynapseToastContainer,
} from 'synapse-react-client'
import { getSearchParam } from './URLUtils'
import './App.scss'
import AppInitializer from './AppInitializer'
import LoginPage from './LoginPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TwoFactorAuthEnrollmentPage from './components/TwoFactorAuth/TwoFactorAuthEnrollmentPage'
import TwoFactorAuthBackupCodesPage from './components/TwoFactorAuth/TwoFactorAuthBackupCodesPage'
import { PersonalAccessTokensPage } from './components/PersonalAccessTokensPage'
import { OAuthClientManagementPage } from './components/OAuthClientManagementPage'
import { SourceAppProvider } from './components/useSourceApp'

const isCodeSearchParam = getSearchParam('code') !== undefined
const isProviderSearchParam = getSearchParam('provider') !== undefined
const isInSSOFlow = isCodeSearchParam && isProviderSearchParam

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 50 * 1000, // 50s
      retry: false, // SynapseClient knows which queries to retry
    },
  },
})

function App() {
  return (
    <div className="App">
      <Router>
        <StyledEngineProvider injectFirst>
          <QueryClientProvider client={queryClient}>
            <ApplicationSessionManager>
              <SourceAppProvider>
                <AppInitializer>
                  <CookiesNotification />
                  <Switch>
                    <Route exact path="/">
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
                    </Route>
                    <Route
                      exact
                      path="/logout"
                      render={props => {
                        SynapseClient.signOut().then(() => {
                          window.history.replaceState(
                            null,
                            '',
                            '/authenticated/myaccount',
                          )
                        })
                        return <></>
                      }}
                    />
                    <Route
                      exact
                      path="/register1"
                      component={RegisterAccount1}
                    />
                    <Route
                      exact
                      path="/register2"
                      component={RegisterAccount2}
                    />
                    <Route exact path="/jointeam" component={JoinTeamPage} />
                    <Route
                      exact
                      path="/sageresources"
                      component={SageResourcesPage}
                    />
                    <Route exact path="/resetPassword">
                      <ResetPassword returnToUrl="/authenticated/myaccount" />
                    </Route>
                    <SynapseContextConsumer>
                      {(ctx?: SynapseContextType) => {
                        const isAuthenticated = !!ctx?.accessToken
                        return (
                          <>
                            {/* If not signed in and in the "/authenticated" path, show the login page */}
                            {!isAuthenticated && (
                              <Route path="/authenticated" exact={false}>
                                <LoginPage />
                              </Route>
                            )}
                            {isAuthenticated && (
                              <>
                                <Route path={'/authenticated/validate'} exact>
                                  <ProfileValidation />
                                </Route>
                                <Route
                                  path={'/authenticated/signTermsOfUse'}
                                  exact
                                >
                                  <TermsOfUsePage />
                                </Route>
                                <Route path={'/authenticated/myaccount'} exact>
                                  <AccountSettings />
                                </Route>
                                <Route
                                  path={'/authenticated/currentaffiliation'}
                                  exact
                                >
                                  <CurrentAffiliationPage />
                                </Route>
                                <Route
                                  path={'/authenticated/accountcreated'}
                                  exact
                                >
                                  <AccountCreatedPage />
                                </Route>
                                <Route
                                  path={'/authenticated/certificationquiz'}
                                  exact
                                >
                                  <CertificationQuiz />
                                </Route>
                                <Route
                                  path={'/authenticated/2fa/enroll'}
                                  exact
                                  render={() => <TwoFactorAuthEnrollmentPage />}
                                />
                                <Route
                                  path={'/authenticated/2fa/generatecodes'}
                                  exact
                                  render={() => (
                                    <TwoFactorAuthBackupCodesPage />
                                  )}
                                />
                                <Route
                                  path={'/authenticated/personalaccesstokens'}
                                  exact
                                  render={() => <PersonalAccessTokensPage />}
                                />
                                <Route
                                  path={'/authenticated/oauthclientmanagement'}
                                  exact
                                  render={() => <OAuthClientManagementPage />}
                                />
                              </>
                            )}
                          </>
                        )
                      }}
                    </SynapseContextConsumer>
                    <Route exact={true} path="/login">
                      <LoginPage returnToUrl={'/'} />
                    </Route>
                  </Switch>
                </AppInitializer>
              </SourceAppProvider>
            </ApplicationSessionManager>
            <SynapseToastContainer />
          </QueryClientProvider>
        </StyledEngineProvider>
      </Router>
    </div>
  )
}
export default App
