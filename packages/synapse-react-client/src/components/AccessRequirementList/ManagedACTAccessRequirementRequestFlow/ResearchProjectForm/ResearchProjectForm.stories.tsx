import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import { getAccessRequirementHandlers } from '@/mocks/msw/handlers/accessRequirementHandlers'
import { getResearchProjectHandlers } from '@/mocks/msw/handlers/researchProjectHandlers'
import { getWikiHandlers } from '@/mocks/msw/handlers/wikiHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import ResearchProjectForm from './ResearchProjectForm'

const meta: Meta = {
  title:
    'Governance/Data Access Request Flow/Managed Access Requirement/Step 1 - Research Project Information',
  component: ResearchProjectForm,
  parameters: {
    stack: 'mock',
    chromatic: { viewports: [600, 1200] },
    msw: {
      handlers: [
        ...getResearchProjectHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Step1: Story = {
  name: 'Step 1 - Research Project Information',
  args: {
    managedACTAccessRequirement: mockManagedACTAccessRequirement,
  },
}
