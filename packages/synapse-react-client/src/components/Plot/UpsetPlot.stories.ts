import { Meta, StoryObj } from '@storybook/react'
import UpsetPlot from './UpsetPlot'

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
export const ElitePortalDemo: Story = {
  args: {
    sql: 'SELECT files, assay FROM syn51581771',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: '# Files per data type',
    combinationName: '# Files',
    onClick: (selection, event) => {
      console.log(
        'onClick() has been called with this selection and event',
        selection,
        event,
      )
    },
  },
}
