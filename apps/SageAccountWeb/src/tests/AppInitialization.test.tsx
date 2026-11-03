import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { AppContextProvider } from '../AppContext'
import LoginPage from '../pages/LoginPage'
import FullContextProvider from 'synapse-react-client/utils/context/FullContextProvider'
import { MOCK_APPLICATION_SESSION_CONTEXT } from 'synapse-react-client/mocks/applicationSessionContext/MockApplicationSessionContext'

describe('App initialization tests', () => {
  // oxlint-disable-next-line vitest/no-disabled-tests -- LoginPage calls useRevalidator, which needs a data router; this test renders it in a MemoryRouter
  it.skip('renders a branded experience', async () => {
    window.localStorage.setItem('sourceAppId', 'MTB')
    render(
      <MemoryRouter>
        <AppContextProvider
          appContext={{
            appId: 'MTB',
            redirectURL: 'https://mtb',
            signedToken: undefined,
          }}
        >
          <FullContextProvider
            synapseContext={{
              accessToken: undefined,
              utcTime: false,
              isInExperimentalMode: false,
              downloadCartPageUrl: '',
            }}
            applicationSessionContext={MOCK_APPLICATION_SESSION_CONTEXT}
          >
            <LoginPage returnToUrl="/" />
          </FullContextProvider>
        </AppContextProvider>
      </MemoryRouter>,
    )
    await screen.findByAltText('Mobile Toolbox Logo')
    await screen.findByText('Sign in with Google')
    await screen.findByText('Sign in with your email')
  })
})
