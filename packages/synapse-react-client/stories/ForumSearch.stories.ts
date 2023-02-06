import { Meta, StoryObj } from '@storybook/react'

import ForumSearch from '../src/lib/containers/ForumSearch'

const meta = {
  title: 'Synapse/ForumSearch',
  component: ForumSearch,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    forumId: '1032',
    onSearchResultsVisible: visible => alert(`Is visible? ${visible}`),
  },
}
