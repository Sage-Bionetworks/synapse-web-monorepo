import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { AppContextProvider } from '../AppContext'
import LoginPage from '../pages/LoginPage'
import FullContextProvider from 'synapse-react-client/stores/FullContextProvider'

describe('App initialization tests', () => {
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
