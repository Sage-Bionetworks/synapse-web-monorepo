import { Meta, StoryObj } from '@storybook/react'
import SynapseGrid, { SynapseGridProps } from './SynapseGrid'
import { useRef } from 'react'
import { Button } from '@mui/material'

const meta = {
  title: 'Components/SynapseGrid',
  component: SynapseGrid,
  parameters: {
    stack: 'staging',
  },
  argTypes: {
    showDebugInfo: {
      control: 'boolean',
      description:
        'Show debug information including session details and model snapshot',
    },
  },
} satisfies Meta<typeof SynapseGrid>

export default meta
type Story = StoryObj<typeof meta>

const GridWithButton = (args: SynapseGridProps) => {
  const gridRef = useRef<{ initializeGrid: () => void }>(null)
  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => gridRef.current?.initializeGrid()}
        sx={{ color: 'inherit', margin: '10px 0' }}
      >
        Start Grid Session
      </Button>
      <SynapseGrid ref={gridRef} {...args} />
    </div>
  )
}

export const GridWithQuery: Story = {
  render: GridWithButton,
  args: {
    query: 'SELECT * FROM syn35295069',
  },
  parameters: {
    msw: {
      handlers: [],
    },
  },
}

export const GridWithUserInputAndDebugInfo: Story = {
  args: {
    query: '',
    showDebugInfo: true,
  },
  parameters: {
    msw: {
      handlers: [],
    },
  },
}
