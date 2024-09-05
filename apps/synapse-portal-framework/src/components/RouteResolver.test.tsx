import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import RouteResolver from './RouteResolver'
import { FullContextProvider } from 'synapse-react-client'
import { describe, expect, it } from 'vitest'
import routes from '../test-configuration/routesConfig'
import { PortalContextProvider } from './PortalContext'

describe('RouteResolver works', () => {
  function renderComponent(initialEntries) {
    return render(
      <PortalContextProvider
        value={{
          portalName: 'Test Portal',
          routeConfig: routes,
          headerConfig: { title: 'Test Portal', summary: 'Test Summary' },
          footerConfig: {},
          logoHeaderConfig: {},
          logoFooterConfig: {},
        }}
      >
        <MemoryRouter initialEntries={initialEntries}>
          <FullContextProvider
            synapseContext={{
              accessToken: undefined,
              utcTime: false,
              isInExperimentalMode: false,
              downloadCartPageUrl: '/DownloadCart',
            }}
          >
            <RouteResolver />
          </FullContextProvider>
        </MemoryRouter>
      </PortalContextProvider>,
    )
  }

  it('routes to the root (home) page', async () => {
    renderComponent(['/'])
    await screen.findByText('Markdown on the home page')
  })
  it('handles a redirect', async () => {
    // Should redirect from '/Home' to '/'
    renderComponent(['/Home'])
    await screen.findByText('Markdown on the home page')
  })
  it('Shows hides content that should be shown in a child path', async () => {
    renderComponent(['/Organizations'])

    // Both visible because we are on the main Organizations page
    await screen.findByText('Hidden on subpage because exact is true')
    await screen.findByText('Shown on subpage because exact is false')
    // Content on the subpage should not be visible
    expect(screen.queryByText('Content shown when on subpage')).toBeNull()
  })
  it('Hides nonexact parent paths and shows subpage content', async () => {
    renderComponent(['/Organizations/Content'])
    await screen.findByText('Content shown when on subpage')
    await waitFor(() =>
      expect(
        screen.queryByText('Shown on subpage because exact is false'),
      ).not.toBeNull(),
    )
    await waitFor(() =>
      expect(
        screen.queryByText('Hidden on subpage because exact is true'),
      ).toBeNull(),
    )
  })
})
