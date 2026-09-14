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

/**
 * A detail panel beside the chart, describing whichever flow is under the
 * cursor. The panel's content is supplied by the consumer, so each portal can
 * surface the metadata that matters to it.
 */
export const WithDetailPanel: Story = {
  args: {
    sql: `SELECT source, count(source), sum(datasetItemCount) FROM ${TABLE_ID} group by source`,
    rootLabel: 'All Datasets',
    unitLabel: 'datasets',
    rightValueColumn: 2,
    rightLabel: 'All Files',
    rightUnitLabel: 'files',
    renderDetailPanel: focusedCategory => (
      <div
        style={{
          padding: '24px',
          border: '1px solid #ccc',
          borderRadius: '6px',
        }}
      >
        <h3 style={{ marginTop: 0 }}>{focusedCategory ?? 'All sources'}</h3>
        <p style={{ margin: 0 }}>
          {focusedCategory
            ? 'Details for the focused flow go here.'
            : 'Hover a flow to see its details.'}
        </p>
      </div>
    ),
  },
}
