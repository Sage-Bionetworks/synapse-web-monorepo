import { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

import ForumSearch from './ForumSearch'

const meta = {
  title: 'Synapse/ForumSearch',
  component: ForumSearch,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    forumId: '1032',
    onSearchResultsVisible: fn(),
  },
}
