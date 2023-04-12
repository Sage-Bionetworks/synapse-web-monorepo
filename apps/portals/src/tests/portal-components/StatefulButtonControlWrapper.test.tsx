import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import StatefulButtonControlWrapper, {
  StatefulButtonControlWrapperProps,
} from '../../portal-components/StatefulButtonControlWrapper'

// Michael TODO: Investigate why SynapseComponents has undefined CardContainer/CardContainerLogic
// exclusively at the start of this test
describe('StatefulButtonControlWrapper works', () => {
  const props: StatefulButtonControlWrapperProps = {
    configs: [
      {
        synapseConfigArray: [
          {
            name: 'Markdown',
            props: {
              markdown: '## This is a markdown component',
            },
          },
        ],
        name: 'Route 1',
      },
    ],
  }

  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <StatefulButtonControlWrapper {...props} />
      </MemoryRouter>,
    )
    // check that it renders a markdown component
    screen.getByText('This is a markdown component')
  })
})
