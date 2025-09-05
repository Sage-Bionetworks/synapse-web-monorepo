import { Meta, StoryObj } from '@storybook/react'
import { SynapseSearchPageResults } from './SynapseSearchPageResults'

const meta: Meta<typeof SynapseSearchPageResults> = {
  title: 'Components/SynapseSearch/SynapseSearchPageResults',
  component: SynapseSearchPageResults,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
