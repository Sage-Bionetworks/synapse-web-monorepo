import { render, screen } from '@testing-library/react'
import { AppContextProvider } from 'AppContext'
import LoginPage from 'LoginPage'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { SynapseContextProvider } from 'synapse-react-client/dist/utils/SynapseContext'

describe('App initialization tests', () => {
  it('renders a branded experience', async () => {
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
          <SynapseContextProvider
            synapseContext={{
              accessToken: undefined,
              utcTime: false,
              isInExperimentalMode: false,
              downloadCartPageUrl: '',
            }}
          >
            <LoginPage returnToUrl="/" />
          </SynapseContextProvider>
        </AppContextProvider>
      </MemoryRouter>,
    )
    await screen.findByAltText('Mobile Toolbox Logo')
    await screen.findByText('Sign in with Google')
    await screen.findByText('Sign in with your email')
  })
})
