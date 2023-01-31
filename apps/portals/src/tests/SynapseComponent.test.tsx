import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { SynapseContextProvider } from 'synapse-react-client/dist/utils/SynapseContext'
import { SynapseComponent } from 'SynapseComponent'
import { SynapseConfig } from 'types/portal-config'

describe('SynapseComponent tests', () => {
  it('renders SRC components correctly', () => {
    const synapseConfig: SynapseConfig = {
      name: 'Markdown',
      props: {
        markdown: '## This is a markdown component',
      },
    }
    render(
      <SynapseContextProvider
        synapseContext={{
          accessToken: 'abcd',
          utcTime: false,
          isInExperimentalMode: false,
          downloadCartPageUrl: '/DownloadCart'
        }}
      >
        <SynapseComponent synapseConfig={synapseConfig} />
      </SynapseContextProvider>,
    )
    screen.getByText('This is a markdown component')
  })

  it('renders portal specific components correctly', () => {
    const synapseConfig: SynapseConfig = {
      name: 'StatefulButtonControlWrapper',
      props: {
        configs: [
          {
            name: 'mock2',
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
      },
    }
    render(
      <SynapseContextProvider
        synapseContext={{
          accessToken: 'abcd',
          utcTime: false,
          isInExperimentalMode: false,
          downloadCartPageUrl: '/DownloadCart'
        }}
      >
        <MemoryRouter>
          <SynapseComponent synapseConfig={synapseConfig} />
        </MemoryRouter>
      </SynapseContextProvider>,
    )
    screen.getByText('This is a markdown component')
  })
})
