import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { SynapseComponent } from '../components/SynapseComponent'
import { SynapseConfig } from '../types/portal-config'
import { describe, it } from 'vitest'
import { FullContextProvider } from 'synapse-react-client'

describe('SynapseComponent tests', () => {
  it('renders SRC components correctly', () => {
    const synapseConfig: SynapseConfig = {
      name: 'Markdown',
      props: {
        markdown: '## This is a markdown component',
      },
    }
    render(
      <FullContextProvider
        synapseContext={{
          accessToken: 'abcd',
          utcTime: false,
          isInExperimentalMode: false,
          downloadCartPageUrl: '/DownloadCart',
        }}
      >
        <SynapseComponent synapseConfig={synapseConfig} />
      </FullContextProvider>,
    )
    screen.getByText('This is a markdown component')
  })

  it('renders portal specific components correctly', () => {
    const synapseConfig: SynapseConfig = {
      name: 'RouteControlWrapper',
      props: {
        customRoutes: [],
      },
    }
    render(
      <FullContextProvider
        synapseContext={{
          accessToken: 'abcd',
          utcTime: false,
          isInExperimentalMode: false,
          downloadCartPageUrl: '/DownloadCart',
        }}
      >
        <MemoryRouter>
          <SynapseComponent synapseConfig={synapseConfig} />
        </MemoryRouter>
      </FullContextProvider>,
    )
    screen.getByText('Explore')
  })
})
