import { Meta, StoryObj } from '@storybook/react-vite'
import SynapseSankeyPlot from './SynapseSankeyPlot'

const meta = {
  title: 'Components/SynapseSankeyPlot',
  component: SynapseSankeyPlot,
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const TABLE_ID = 'syn66496326'
const SQL = `SELECT source, count(source) FROM ${TABLE_ID} group by source`

export const SourcesByDataset: Story = {
  args: {
    sql: SQL,
    rootLabel: 'All Datasets',
    // title: 'Datasets by Source',
  },
}
