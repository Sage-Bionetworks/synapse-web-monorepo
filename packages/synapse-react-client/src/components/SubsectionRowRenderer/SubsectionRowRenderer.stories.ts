import { Meta, StoryObj } from '@storybook/react-vite'
import SubsectionRowRenderer from './SubsectionRowRenderer'

const meta = {
  title: 'Explore/SubsectionRowRenderer',
  component: SubsectionRowRenderer,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  name: 'SubsectionRowRenderer',
  args: {
    sql: 'SELECT abstract as "Summary" FROM syn21918972.488',
    searchParams: {
      grantNumber: 'CA217655',
    },
    isMarkdown: false,
  },
}
