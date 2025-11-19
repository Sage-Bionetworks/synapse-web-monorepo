import Button from '@/react-ui/components/Button'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useRef } from 'react'
import SynapseGrid, { SynapseGridHandle } from './SynapseGrid'

type SynapseGridPropsAndCustomArgs = React.ComponentProps<
  typeof SynapseGrid
> & { query?: string }

const meta = {
  title: 'Components/SynapseGrid',
  component: SynapseGrid,
  parameters: {
    stack: 'staging',
    requireLogin: true,
  },
  argTypes: {
    query: {
      control: 'text',
    },
    showDebugInfo: {
      control: 'boolean',
      description:
        'Show debug information including session details and model snapshot',
    },
  },
} satisfies Meta<SynapseGridPropsAndCustomArgs>
export default meta

type Story = StoryObj<SynapseGridPropsAndCustomArgs>

export const GridWithQuery = {
  args: {
    query: 'SELECT * FROM syn35295069',
  },
  render: function GridWithButton({ query, ...args }) {
    const gridRef = useRef<SynapseGridHandle>(null)

    return (
      <div>
        <Button
          variant="outlined"
          onClick={() =>
            gridRef.current?.initializeGrid({
              initialQuery: { sql: query || 'SELECT * FROM syn35295069' },
              concreteType:
                'org.sagebionetworks.repo.model.grid.CreateGridRequest',
            })
          }
          sx={{ color: 'inherit', margin: '10px 0' }}
        >
          Start Grid Session
        </Button>
        <SynapseGrid ref={gridRef} {...args} />
      </div>
    )
  },
} satisfies Story

export const GridWithUserInputAndDebugInfo: Story = {
  args: {
    showDebugInfo: true,
  },
}
