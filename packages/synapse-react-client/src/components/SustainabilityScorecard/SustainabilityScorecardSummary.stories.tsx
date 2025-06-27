import { Meta, StoryObj } from '@storybook/react'
import SustainabilityScorecardSummary, {
  SustainabilityScorecardSummaryProps,
} from './SustainabilityScorecardSummary'

const mockProps: SustainabilityScorecardSummaryProps = {
  entityId: 'syn68349264',
  text: (
    <p>
      This section provides an overview of the sustainability metrics and
      scores.
    </p>
  ),
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
  title: 'Components/SustainabilityScorecard/Scorecard Summary',
  component: SustainabilityScorecardSummary,
  parameters: {
    chromatic: { viewports: [600, 1200] },
  },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: { ...mockProps },
}
