import { Meta, StoryObj } from '@storybook/react'
import SustainabilityScorecardSummary, {
  SustainabilityScorecardSummaryProps,
} from './SustainabilityScorecardSummary'
import { MemoryRouter } from 'react-router'

const mockProps: SustainabilityScorecardSummaryProps = {
  entityId: 'syn68561794',
  filterColumn: 'toolName',
  searchParamKey: 'toolName',
  scoreDescriptorColumnName: 'AlmanackScoreDescriptor',
  text: (
    <p>
      This section provides an overview of the sustainability metrics and
      scores.
    </p>
  ),
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

const meta = {
  title: 'Components/SustainabilityScorecard/Scorecard Summary',
  component: SustainabilityScorecardSummary,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: args => (
    <MemoryRouter initialEntries={['/Tools/DetailsPage?toolName=DrugCell']}>
      <SustainabilityScorecardSummary {...args} />
    </MemoryRouter>
  ),
  args: { ...mockProps },
}
