import { Meta, StoryObj } from '@storybook/react'
import SubsectionRowRenderer from '../src/lib/containers/SubsectionRowRenderer'

const meta = {
  title: 'Explore/SubsectionRowRenderer',
  component: SubsectionRowRenderer,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    sql: 'SELECT funderName as "Funding Agency" FROM syn26344829',
    searchParams: { Resource_id: '844b598c-0171-4972-91c3-27aa21b45d52' },
    isMarkdown: false,
  },
}
