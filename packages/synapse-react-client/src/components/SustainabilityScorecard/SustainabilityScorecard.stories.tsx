import { Meta, StoryObj } from '@storybook/react'
import SustainabilityScorecard, {
  SustainabilityScorecardProps,
} from './SustainabilityScorecard'
import { MemoryRouter } from 'react-router'

const mockProps: SustainabilityScorecardProps = {
  entityId: 'syn68349264',
  sustainabilityReportLink: 'https://example.com/sustainability-report',
  metricsConfig: [
    {
      key: 'dependencyFiles',
      label: 'Dependency Files',
      text: 'Some tooltip text for dependency files',
    },
    {
      key: 'testFiles',
      label: 'Test Files',
      text: 'Some tooltip text for test files',
    },
    {
      key: 'readmeFiles',
      label: 'README Files',
      text: 'Some tooltip text for README files',
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
    <MemoryRouter>
      <SustainabilityScorecard {...args} />
    </MemoryRouter>
  ),
  args: { ...mockProps },
}
