import { Meta, StoryObj } from '@storybook/react'
import UpsetPlot from '../src/lib/containers/UpsetPlot'

const meta = {
  title: 'Home Page/UpsetPlot',
  component: UpsetPlot,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    sql: 'SELECT unnest(individualID), assay FROM syn20821313.6 WHERE individualID is not null GROUP BY assay, unnest(individualID)',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: 'Individuals (#) per Assay',
    combinationName: 'Individuals (#)',
    summaryLink: '#',
    summaryLinkText: 'Explore All Of Something',
  },
}
