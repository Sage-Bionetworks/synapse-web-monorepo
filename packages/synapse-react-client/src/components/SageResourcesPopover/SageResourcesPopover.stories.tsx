import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react-vite'
import { SageResourcesPopover } from './SageResourcesPopover'

const meta: Meta<typeof SageResourcesPopover> = {
  title: 'Home Page/SageResources',
  component: SageResourcesPopover,
  render: function RenderFn(args) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const handleClose = () => {
      setAnchorEl(null)
    }
    return (
      <>
        <a onClick={event => setAnchorEl(event.currentTarget)}>Show portals</a>
        <SageResourcesPopover anchorEl={anchorEl} onClose={handleClose} />
      </>
    )
  },
} satisfies Meta<typeof SageResourcesPopover>

export default meta
type Story = StoryObj<typeof meta>

export const SageResourcesPopoverDemo: Story = {
  args: {},
}
