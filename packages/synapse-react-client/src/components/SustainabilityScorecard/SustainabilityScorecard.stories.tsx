import { Meta, StoryObj } from '@storybook/react'
import SustainabilityScorecard, {
  SustainabilityScorecardProps,
} from './SustainabilityScorecard'
import { MemoryRouter } from 'react-router'

const mockProps: SustainabilityScorecardProps = {
  entityId: 'syn68561794',
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

const meta = {
  title: 'Components/SustainabilityScorecard/Scorecard',
  component: SustainabilityScorecard,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  render: args => (
    <MemoryRouter initialEntries={['/Tools/DetailsPage?toolName=DrugCell']}>
      <SustainabilityScorecard {...args} />
    </MemoryRouter>
  ),
  args: { ...mockProps },
}
