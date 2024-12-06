import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  CookiesNotification,
  processRedirectURLInOneSage,
  SynapseContextConsumer,
  SynapseContextType,
  useSynapseContext,
} from 'synapse-react-client'
import './App.scss'
import { useAppContext } from './AppContext'
import { AccountCreatedPage } from './components/AccountCreatedPage'
import { AccountSettings } from './components/AccountSettings'
import { CertificationQuiz } from './components/CertificationQuiz'
import { ChangePasswordPage } from './components/ChangePasswordPage'
import { CurrentAffiliationPage } from './components/CurrentAffiliationPage'
import Footer from './components/Footer'
import { JoinTeamPage } from './components/JoinTeamPage'
import LogoutPage from './components/LogoutPage'
import { OAuthClientManagementPage } from './components/OAuthClientManagementPage'
import { PersonalAccessTokensPage } from './components/PersonalAccessTokensPage'
import { ProfileValidation } from './components/ProfileValidation/ProfileValidation'
import { RegisterAccount1 } from './components/RegisterAccount1'
import { RegisterAccount2 } from './components/RegisterAccount2'
import { ResetPassword } from './components/ResetPassword'
import { SageResourcesPage } from './components/SageResourcesPage'
import { TermsOfUsePage } from './components/TermsOfUsePage'
import { ResetTwoFactorAuth } from './components/TwoFactorAuth/ResetTwoFactorAuth'
import TwoFactorAuthBackupCodesPage from './components/TwoFactorAuth/TwoFactorAuthBackupCodesPage'
import TwoFactorAuthEnrollmentPage from './components/TwoFactorAuth/TwoFactorAuthEnrollmentPage'
import { WebhookManagementPage } from './components/WebhooksManagementPage'
import { RESET_2FA_ROUTE } from './Constants'
import useMaybeRedirectToSignTermsOfService from './hooks/useMaybeRedirectToSignTermsOfService'
import LoginPage from './LoginPage'
import { getSearchParam } from './URLUtils'

function LoggedInRedirector() {
  const { accessToken } = useSynapseContext()
  const appContext = useAppContext()

  const isCodeSearchParam = getSearchParam('code') !== undefined
  const isProviderSearchParam = getSearchParam('provider') !== undefined
  const isInSSOFlow = isCodeSearchParam && isProviderSearchParam

  const { mayRedirect: mayRedirectToSignToS } =
    useMaybeRedirectToSignTermsOfService()

  useEffect(() => {
    // User is on the root page (implied by route), logged in, not in the SSO Flow, and does not need to sign the ToS
    // then redirect!
    if (accessToken && !isInSSOFlow && !mayRedirectToSignToS) {
      // take user back to page they came from in the source app, if stored in a cookie
      const isProcessed = processRedirectURLInOneSage()
      if (!isProcessed && appContext?.redirectURL) {
        // if not in the cookie, take them to the app redirect URL
        window.location.replace(appContext?.redirectURL)
      }
    }
  }, [accessToken, appContext?.redirectURL, isInSSOFlow, mayRedirectToSignToS])
  return <></>
}

function AuthenticatedRoutes() {
  const { accessToken } = useSynapseContext()
  const isAuthenticated = Boolean(accessToken)

  if (!isAuthenticated) {
    return <LoginPage />
  }
  return (
    <Routes>
      <Route path={'validate'} element={<ProfileValidation />} />
      <Route path={'signTermsOfUse'} element={<TermsOfUsePage />} />
      <Route path={'myaccount'} element={<AccountSettings />} />
      <Route path={'currentaffiliation'} element={<CurrentAffiliationPage />} />
      <Route path={'accountcreated'} element={<AccountCreatedPage />} />
      <Route path={'certificationquiz'} element={<CertificationQuiz />} />
      <Route path={'2fa/enroll'} element={<TwoFactorAuthEnrollmentPage />} />
      <Route
        path={'2fa/generatecodes'}
        element={<TwoFactorAuthBackupCodesPage />}
      />
      <Route
        path={'personalaccesstokens'}
        element={<PersonalAccessTokensPage />}
      />
      <Route
        path={'oauthclientmanagement'}
        element={<OAuthClientManagementPage />}
      />
      <Route path={'webhook'} element={<WebhookManagementPage />} />
    </Routes>
  )
}

function App() {
  return (
    <div className="App">
      <CookiesNotification />
      <Routes>
        <Route
          path=""
          element={
            <SynapseContextConsumer>
              {(ctx?: SynapseContextType) => {
                if (!ctx?.accessToken) {
                  return <LoginPage returnToUrl={'/'} />
                } else {
                  return <LoggedInRedirector />
                }
              }}
            </SynapseContextConsumer>
          }
        />
        <Route
          path="resetPassword"
          element={<ResetPassword returnToUrl="/authenticated/myaccount" />}
        />
        <Route path="logout" element={<LogoutPage />} />
        <Route path="register1" element={<RegisterAccount1 />} />
        <Route path="register2" element={<RegisterAccount2 />} />
        <Route path="jointeam" element={<JoinTeamPage />} />
        <Route path="changePassword" element={<ChangePasswordPage />} />
        <Route path="sageresources" element={<SageResourcesPage />} />
        <Route
          path="resetPassword"
          element={<ResetPassword returnToUrl="/authenticated/myaccount" />}
        />
        <Route path={RESET_2FA_ROUTE} element={<ResetTwoFactorAuth />} />
        <Route
          path="authenticated/*"
          element={
            <>
              <AuthenticatedRoutes />
              <Footer />
            </>
          }
        />
        <Route path="login" element={<LoginPage returnToUrl={'/'} />} />
      </Routes>
    </div>
  )
}
export default App
