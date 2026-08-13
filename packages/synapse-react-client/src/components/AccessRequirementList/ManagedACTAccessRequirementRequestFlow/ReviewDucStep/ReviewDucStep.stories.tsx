import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import { MOCK_FOLDER_ID } from '@/mocks/entity/mockEntity'
import { getAccessRequirementHandlers } from '@/mocks/msw/handlers/accessRequirementHandlers'
import { getDataAccessRequestHandlers } from '@/mocks/msw/handlers/dataAccessRequestHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { getWikiHandlers } from '@/mocks/msw/handlers/wikiHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { RestrictableObjectType } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import ReviewDucStep from './ReviewDucStep'

const meta: Meta<typeof ReviewDucStep> = {
  title:
    'Governance/Data Access Request Flow/Managed Access Requirement/Step 2b - Review DUC',
  component: ReviewDucStep,
  parameters: {
    stack: 'mock',
    chromatic: { viewports: [600, 1200] },
    msw: {
      handlers: [
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const ReviewDuc: Story = {
  name: 'Review / Create a DUC step',
  args: {
    managedACTAccessRequirement: {
      ...mockManagedACTAccessRequirement,
      eDucTemplateId: 'template-abc-123',
    },
    subjectId: MOCK_FOLDER_ID,
    subjectType: RestrictableObjectType.ENTITY,
  },
}
