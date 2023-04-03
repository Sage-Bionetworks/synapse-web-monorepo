import * as React from 'react'
import RouteControlWrapper, {
  RouteControlWrapperProps,
} from '../../portal-components/RouteControlWrapper'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import FullContextProvider from 'synapse-react-client/dist/utils/FullContextProvider'

describe('RouteControlWrapper works', () => {
  const routeName = 'custom route'
  const props: RouteControlWrapperProps = {
    synapseConfig: {
      name: 'Markdown',
      props: {
        markdown: '## This is a markdown component',
      },
    },
    customRoutes: [routeName],
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
