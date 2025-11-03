import { Meta, StoryObj } from '@storybook/react-vite'
import RowDataTableWithQuery from './RowDataTableWithQuery'
import { Query } from '@sage-bionetworks/synapse-types'

const dataColumnAliases = {
  name: 'Name',
  grantDOI: 'DOI',
  dataType: 'Data Type(s)',
}

const mockQuery: Query = {
  sql: 'SELECT * FROM syn52694652',
}
const meta = {
  title: 'UI/RowDataTable/RowDataTableWithQuery',
  component: RowDataTableWithQuery,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: args => <RowDataTableWithQuery {...args} />,
  args: {
    query: mockQuery,
    columnAliases: dataColumnAliases,
    displayedColumns: ['studyId', 'name', 'grantDOI'],
    columnLinks: [
      {
        isMarkdown: false,
        matchColumnName: 'Grant DOI',
        linkColumnName: 'Grant DOI',
      },
    ],
  },
}
