import { Meta, StoryObj } from '@storybook/react'
import ShareThisPage from './ShareThisPage'

const meta: Meta<typeof ShareThisPage> = {
  title: 'UI/ShareThisPage',
  component: ShareThisPage,
  parameters: {},
}

export default meta

type Story = StoryObj<typeof ShareThisPage>

export const Default: Story = {
  args: {},
}
