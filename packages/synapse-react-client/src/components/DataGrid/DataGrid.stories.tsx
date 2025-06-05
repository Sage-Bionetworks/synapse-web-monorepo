import { Meta, StoryObj } from '@storybook/react'
import { keyColumn, textColumn } from 'react-datasheet-grid'
import { SynapseGrid } from './SynapseGrid'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { getGridHandlers } from '@/mocks/msw/handlers/gridHandlers'

const dataRows = [{ id: 1, col2: 'cell', col3: 'data' }]
const dataCols = [
  { ...keyColumn('id', textColumn), title: 'id' },
  { ...keyColumn('col2', textColumn), title: 'col2' },
  { ...keyColumn('col3', textColumn), title: 'col3' },
]

const meta = {
  title: 'Curator/SynapseGrid',
  component: SynapseGrid,
} satisfies Meta<typeof SynapseGrid>
type Story2 = StoryObj<typeof meta>
export default meta
export const SynapseGridDemo: Story2 = {
  args: {
    initialRows: dataRows,
    initialColumns: dataCols,
  },
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [...getGridHandlers(MOCK_REPO_ORIGIN)],
    },
  },
}
