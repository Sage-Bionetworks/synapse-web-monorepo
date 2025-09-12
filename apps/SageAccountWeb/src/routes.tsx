import { createBrowserRouter } from 'react-router'
import { convertModuleToRouteObject } from '@sage-bionetworks/synapse-portal-framework/utils/convertModuleToRouteObject'
import AppWrapper from './AppWrapper'
import App from './App'
import { RESET_2FA_ROUTE } from './Constants'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppWrapper>
        <App />
      </AppWrapper>
    ),
    children: [
      {
        index: true,
        lazy: () => import('@/pages/RootPage').then(convertModuleToRouteObject),
      },
      {
        path: 'resetPassword',
        lazy: () =>
          import('@/pages/ResetPassword').then(convertModuleToRouteObject),
      },
      {
        path: 'login',
        lazy: () =>
          import('@/pages/LoginPage').then(convertModuleToRouteObject),
      },
      {
        path: 'logout',
        lazy: () =>
          import('@/pages/LogoutPage').then(convertModuleToRouteObject),
      },
      {
        path: 'register1',
        lazy: () =>
          import('@/pages/RegisterAccount1').then(convertModuleToRouteObject),
      },
      {
        path: 'register2',
        lazy: () =>
          import('@/pages/RegisterAccount2').then(convertModuleToRouteObject),
      },
      {
        path: 'jointeam',
        lazy: () =>
          import('@/pages/JoinTeamPage').then(convertModuleToRouteObject),
      },
      {
        path: 'changePassword',
        lazy: () =>
          import('@/pages/ChangePasswordPage').then(convertModuleToRouteObject),
      },
      {
        path: 'sageresources',
        lazy: () =>
          import('@/pages/SageResourcesPage').then(convertModuleToRouteObject),
      },
      {
        path: RESET_2FA_ROUTE,
        lazy: () =>
          import('@/pages/ResetTwoFactorAuth').then(convertModuleToRouteObject),
      },
      {
        path: 'authenticated',
        lazy: () =>
          import('@/pages/AuthenticatedLayout').then(
            convertModuleToRouteObject,
          ),
        children: [
          {
            path: 'validate',
            lazy: () =>
              import('@/pages/ProfileValidationPage').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'signTermsOfUse',
            lazy: () =>
              import('@/pages/TermsOfUsePage').then(convertModuleToRouteObject),
          },
          {
            path: 'signUpdatedTermsOfUse',
            lazy: () =>
              import('@/pages/SignUpdatedTermsOfUsePage').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'myaccount',
            lazy: () =>
              import('@/pages/AccountSettings').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'currentaffiliation',
            lazy: () =>
              import('@/pages/CurrentAffiliationPage').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'accountcreated',
            lazy: () =>
              import('@/pages/AccountCreatedPage').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'certificationquiz',
            lazy: () =>
              import('@/pages/CertificationQuizPage').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: '2faRequired',
            lazy: () =>
              import('@/pages/MfaRequiredPage').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: '2fa/enroll',
            lazy: () =>
              import('@/pages/TwoFactorAuthEnrollmentPage').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: '2fa/generatecodes',
            lazy: () =>
              import('@/pages/TwoFactorAuthBackupCodesPage').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: '2fa/resetconfirmation',
            lazy: () =>
              import('@/pages/TwoFactorResetConfirmationPage').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'personalaccesstokens',
            lazy: () =>
              import('@/pages/PersonalAccessTokensPage').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'oauthclientmanagement',
            lazy: () =>
              import('@/pages/OAuthClientManagementPage').then(
                convertModuleToRouteObject,
              ),
          },
          {
            path: 'webhook',
            lazy: () =>
              import('@/pages/WebhooksManagementPage').then(
                convertModuleToRouteObject,
              ),
          },
        ],
      },
    ],
  },
])
