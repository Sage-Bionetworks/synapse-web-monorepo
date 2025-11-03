import { Meta, StoryObj } from '@storybook/react-vite'
import RowDataTable from './RowDataTable'
import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'

const dataColumnAliases = {
  name: 'Name',
  grantDOI: 'DOI',
  dataType: 'Data Type(s)',
}

const nameVal = 'Synodos NF2'
const dataTypeVal =
  '["Analysis, drugScreen, geneExpression, genomicVariants, immunoassay, kinomics, volume"]'
const doiVal =
  '["https://doi.org/10.48105/pc.gr.88541, https://doi.org/10.48105/pc.gr.88552, https://doi.org/10.48105/pc.gr.88580, https://doi.org/10.48105/pc.gr.88495, https://doi.org/10.48105/pc.gr.88438, https://doi.org/10.48105/pc.gr.88461, https://doi.org/10.48105/pc.gr.88567, https://doi.org/10.48105/pc.gr.88682, https://doi.org/10.48105/pc.gr.88823"]'

const meta = {
  title: 'UI/RowDataTable',
  component: RowDataTable,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: args => <RowDataTable {...args} />,
  args: {
    rowData: [nameVal, dataTypeVal, doiVal],
    headers: [
      {
        name: 'name',
        columnType: ColumnTypeEnum.STRING,
      },
      {
        name: 'dataType',
        columnType: ColumnTypeEnum.STRING_LIST,
      },
      {
        name: 'grantDOI',
        columnType: ColumnTypeEnum.STRING_LIST,
      },
    ],
    columnAliases: dataColumnAliases,
    columnLinks: [
      {
        isMarkdown: false,
        matchColumnName: 'Grant DOI',
        linkColumnName: 'Grant DOI',
      },
    ],
  },
}
