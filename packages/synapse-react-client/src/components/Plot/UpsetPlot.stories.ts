import { Meta, StoryObj } from '@storybook/react'
import UpsetPlot from './UpsetPlot'
import { Query } from '@sage-bionetworks/synapse-types'

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
    sql: 'SELECT individualId, Assay FROM syn52234184 WHERE individualId IS NOT NULL and metadataType IS NULL and Assay IS NOT NULL',
    rgbIndex: 0,
    maxBarCount: 20,
    setName: 'Set size',
    combinationName: 'Intersection size',
    onClick: (selection, event) => {
      console.log(
        'onClick() has been called with this selection and event',
        selection,
        event,
      )
    },
  },
}
