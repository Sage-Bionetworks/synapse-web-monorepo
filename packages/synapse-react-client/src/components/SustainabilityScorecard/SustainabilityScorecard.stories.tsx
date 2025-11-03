import { Meta, StoryObj } from '@storybook/react-vite'
import SustainabilityScorecard from './SustainabilityScorecard'
import { SynapseConstants } from '@/utils'
import {
  QueryBundleRequest,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'

const mockQuery: QueryBundleRequest = {
  entityId: 'syn68561794',
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  partMask:
    SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
    SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
  query: {
    sql: 'SELECT * FROM syn68561794',
    additionalFilters: [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
        columnName: 'toolName',
        operator: ColumnSingleValueFilterOperator.LIKE,
        values: ['%DrugCell%'],
      },
    ],
  },
}

const mockProps = {
  queryRequest: mockQuery,
  filterColumn: 'toolName',
  searchParamKey: 'toolName',
  scoreDescriptorColumnName: 'AlmanackScoreDescriptor',
  metricsConfig: [
    {
      key: 'CloneRepository',
      label: 'Repository',
      text: 'Indicates presence of automated tests',
    },
    {
      key: 'CheckReadme',
      label: 'README',
      text: 'Indicates presence of automated tests',
    },
    {
      key: 'CheckDependencies',
      label: 'Dependencies',
      text: 'Presence of documentation for setup/use',
    },
    {
      key: 'CheckTests',
      label: 'Tests',
      text: 'Presence of documentation for setup/use',
    },
  ],
}

const meta: Meta<typeof SustainabilityScorecard> = {
  title: 'Components/SustainabilityScorecard/Scorecard',
  component: SustainabilityScorecard,
  args: mockProps,
  parameters: {
    chromatic: { viewports: [600, 1200] },
    withRouter: true,
  },
}
export default meta

type Story = StoryObj<typeof SustainabilityScorecard>

export const Demo: Story = {
  render: args => <SustainabilityScorecard {...args} />,
  args: { ...mockProps },
}
