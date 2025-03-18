import { Meta, StoryObj } from '@storybook/react'
import CardMetadataDisplay from './CardMetadataDisplay'

const dataColumnAliases = {
  name: 'Name',
  grantDOI: 'DOI',
  dataType: 'Data Type(s)',
}

const meta = {
  title: 'UI/CardMetadataDisplay',
  component: CardMetadataDisplay,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: args => <CardMetadataDisplay {...args} />,
  args: {
    sql: 'SELECT * FROM syn52694652',
    labels: ['name', 'dataType', 'grantDOI'],
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
