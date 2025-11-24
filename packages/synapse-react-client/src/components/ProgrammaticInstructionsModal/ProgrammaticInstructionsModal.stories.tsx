import { Meta, StoryObj } from '@storybook/react-vite'
import ProgrammaticInstructionsModal from './ProgrammaticInstructionsModal'
import { fn } from 'storybook/test'

const meta = {
  title: 'Download/ProgrammaticInstructionsModal',
  component: ProgrammaticInstructionsModal,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    show: true,
    title: 'Programmatic Instructions',
    cliNotes: <>Can provide Synapse CLI specific notes</>,
    cliCode: 'Synapse CLI client code',
    rNotes: <>Can provide Synapse R Client specific notes</>,
    rCode: 'Synapse R client code',
    pythonNotes: <>Can provide Synapse Python Client specific notes</>,
    pythonCode: 'Synapse Python client code',
    helpUrl: 'https://help.synapse.org',
    helpMarkdown:
      'Option to show a _HelpPopover_ in the title bar with a link to the docs site',
    onClose: fn(),
  },
}
