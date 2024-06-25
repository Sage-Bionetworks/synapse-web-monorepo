import React from 'react'
import RouteControlWrapper, {
  RouteControlWrapperProps,
} from './RouteControlWrapper'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { FullContextProvider } from 'synapse-react-client'
import { describe, it } from 'vitest'

describe('RouteControlWrapper works', () => {
  const routeName = 'custom route'
  const props: RouteControlWrapperProps = {
    customRoutes: [
      {
        path: routeName,
        synapseConfigArray: [
          {
            name: 'Markdown',
            props: {
              markdown: '## This is a markdown component',
            },
          },
        ],
      },
    ],
  }

  it('renders correctly', () => {
    render(
      <FullContextProvider
        synapseContext={{
          accessToken: 'abcd',
          utcTime: false,
          isInExperimentalMode: false,
          downloadCartPageUrl: '/DownloadCart',
        }}
      >
        <MemoryRouter initialEntries={[`/Explore/${routeName}`]}>
          <RouteControlWrapper {...props} />
        </MemoryRouter>
      </FullContextProvider>,
    )
    // check that it renders a MarkdownSynapse component
    screen.getByText('This is a markdown component')
    screen.getByRole('tab', { name: routeName })
  })
})
