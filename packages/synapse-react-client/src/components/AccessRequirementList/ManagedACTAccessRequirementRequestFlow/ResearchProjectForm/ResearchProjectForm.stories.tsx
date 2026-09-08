import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import { getAccessRequirementHandlers } from '@/mocks/msw/handlers/accessRequirementHandlers'
import { getDataAccessRequestHandlers } from '@/mocks/msw/handlers/dataAccessRequestHandlers'
import { getResearchProjectHandlers } from '@/mocks/msw/handlers/researchProjectHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
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
        ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN),
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

export const Step1EDucEnabled: Story = {
  name: 'Step 1 - eDUC enabled (with PI selector + email)',
  parameters: {
    msw: {
      handlers: [
        ...getResearchProjectHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
  args: {
    managedACTAccessRequirement: {
      ...mockManagedACTAccessRequirement,
      eDucTemplateId: 'template-abc-123',
    },
  },
}
