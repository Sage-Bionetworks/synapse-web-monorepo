import { Meta, StoryObj } from '@storybook/react-vite'
import UpsetPlot from './UpsetPlot'
import { Query } from '@sage-bionetworks/synapse-types'
import { fn } from 'storybook/test'

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
    onClick: selection => {
      const sets = (selection as any).sets
      const query: Query = {
        sql: 'select * from syn12345', // stub files sql
        selectedFacets: [
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
            columnName: 'Assays',
            facetValues: [...sets.values()].map((v: any) => v.name) as string[],
          },
        ],
      }
      const url = `/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(
        query,
      )}`
      console.log(url)
    },
  },
}
export const ElitePortalDemo: Story = {
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    rgbIndex: 0,
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    onClick: fn(),
  },
}

export const AMPALSPortalVariant: Story = {
  args: {
    sql: 'SELECT individualID, assay FROM syn51489960 WHERE metadataType IS NULL and assay IS NOT NULL',
    maxBarCount: 10,
    setName: 'Set size',
    combinationName: 'Intersection size',
    variant: 'ampals',
    onClick: fn(),
  },
}
