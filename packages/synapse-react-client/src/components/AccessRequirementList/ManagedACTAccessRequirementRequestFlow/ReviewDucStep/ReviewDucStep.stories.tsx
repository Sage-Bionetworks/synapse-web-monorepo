import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import { MOCK_DATA_ACCESS_REQUEST } from '@/mocks/dataaccess/MockDataAccessRequest'
import { MOCK_FOLDER_ID } from '@/mocks/entity/mockEntity'
import { getAccessRequirementHandlers } from '@/mocks/msw/handlers/accessRequirementHandlers'
import { getDataAccessRequestHandlers } from '@/mocks/msw/handlers/dataAccessRequestHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { getWikiHandlers } from '@/mocks/msw/handlers/wikiHandlers'
import { MOCK_USER_ID, MOCK_USER_ID_2 } from '@/mocks/user/mock_user_profile'
import { ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE } from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import {
  AccessType,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import ReviewDucStep from './ReviewDucStep'

const eDucManagedACTAccessRequirement = {
  ...mockManagedACTAccessRequirement,
  eDucTemplateId: 'template-abc-123',
}

const mockDarWithPiAndSo = {
  ...MOCK_DATA_ACCESS_REQUEST,
  accessorChanges: [
    { userId: String(MOCK_USER_ID), type: AccessType.GAIN_ACCESS },
    { userId: String(MOCK_USER_ID_2), type: AccessType.GAIN_ACCESS },
  ],
  principalInvestigator: {
    userId: String(MOCK_USER_ID),
    name: 'Dr. Jane Smith',
    institutionalEmail: 'jane.smith@example.edu',
  },
  signingOfficial: {
    name: 'John Official',
    institutionalEmail: 'john.official@example.edu',
  },
}

const overrideDarHandler = http.get(
  `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE(
    eDucManagedACTAccessRequirement.id,
  )}`,
  () => HttpResponse.json(mockDarWithPiAndSo, { status: 200 }),
)

const meta: Meta<typeof ReviewDucStep> = {
  title:
    'Governance/Data Access Request Flow/Managed Access Requirement/Step 2b - Review DUC',
  component: ReviewDucStep,
  parameters: {
    stack: 'mock',
    chromatic: { viewports: [600, 1200] },
    msw: {
      handlers: [
        // Story-level override must come first so MSW matches it before the shared handler.
        overrideDarHandler,
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
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
    subjectId: MOCK_FOLDER_ID,
    subjectType: RestrictableObjectType.ENTITY,
  },
}
