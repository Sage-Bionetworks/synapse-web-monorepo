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
import { Route, Switch } from 'react-router-dom'
import {
  CookiesNotification,
  SynapseClient,
  SynapseContextConsumer,
  SynapseContextType,
} from 'synapse-react-client'
import { getSearchParam } from './URLUtils'
import './App.scss'
import LoginPage from './LoginPage'
import TwoFactorAuthEnrollmentPage from './components/TwoFactorAuth/TwoFactorAuthEnrollmentPage'
import TwoFactorAuthBackupCodesPage from './components/TwoFactorAuth/TwoFactorAuthBackupCodesPage'
import { PersonalAccessTokensPage } from './components/PersonalAccessTokensPage'
import { OAuthClientManagementPage } from './components/OAuthClientManagementPage'
import { ResetTwoFactorAuth } from './components/TwoFactorAuth/ResetTwoFactorAuth'
import { RESET_2FA_ROUTE } from './Constants'
import { ChangePasswordPage } from './components/ChangePasswordPage'

function App() {
  return (
    <div className="App">
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
                    {appContext => {
                      const isCodeSearchParam =
                        getSearchParam('code') !== undefined
                      const isProviderSearchParam =
                        getSearchParam('provider') !== undefined
                      const isInSSOFlow =
                        isCodeSearchParam && isProviderSearchParam
                      return (
                        <>
                          {appContext?.redirectURL &&
                            !isInSSOFlow &&
                            window.location.replace(appContext?.redirectURL)}
                        </>
                      )
                    }}
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
              window.history.replaceState(null, '', '/authenticated/myaccount')
            })
            return <></>
          }}
        />
        <Route exact path="/register1" component={RegisterAccount1} />
        <Route exact path="/register2" component={RegisterAccount2} />
        <Route exact path="/jointeam" component={JoinTeamPage} />
        <Route exact path="/changePassword" component={ChangePasswordPage} />
        <Route exact path="/sageresources" component={SageResourcesPage} />
        <Route exact path="/resetPassword">
          <ResetPassword returnToUrl="/authenticated/myaccount" />
        </Route>
        <Route exact path={RESET_2FA_ROUTE}>
          <ResetTwoFactorAuth />
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
                    <Route path={'/authenticated/signTermsOfUse'} exact>
                      <TermsOfUsePage />
                    </Route>
                    <Route path={'/authenticated/myaccount'} exact>
                      <AccountSettings />
                    </Route>
                    <Route path={'/authenticated/currentaffiliation'} exact>
                      <CurrentAffiliationPage />
                    </Route>
                    <Route path={'/authenticated/accountcreated'} exact>
                      <AccountCreatedPage />
                    </Route>
                    <Route path={'/authenticated/certificationquiz'} exact>
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
                      render={() => <TwoFactorAuthBackupCodesPage />}
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
    </div>
  )
}
export default App
