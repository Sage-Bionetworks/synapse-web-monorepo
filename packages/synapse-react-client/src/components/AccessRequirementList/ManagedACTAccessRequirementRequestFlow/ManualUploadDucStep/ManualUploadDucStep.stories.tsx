import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import { MOCK_DATA_ACCESS_REQUEST } from '@/mocks/dataaccess/MockDataAccessRequest'
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
import ManualUploadDucStep from './ManualUploadDucStep'

const eDucManagedACTAccessRequirement = {
  ...mockManagedACTAccessRequirement,
  eDucTemplateId: 'template-abc-123',
}

const mockDarWithCollaborators = {
  ...MOCK_DATA_ACCESS_REQUEST,
  accessorChanges: [
    { userId: String(MOCK_USER_ID), type: AccessType.GAIN_ACCESS },
    { userId: String(MOCK_USER_ID_2), type: AccessType.GAIN_ACCESS },
  ],
  ducFileHandleId: undefined,
}

const overrideDarHandler = http.get(
  `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE(
    eDucManagedACTAccessRequirement.id,
  )}`,
  () => HttpResponse.json(mockDarWithCollaborators, { status: 200 }),
)

const meta: Meta<typeof ManualUploadDucStep> = {
  title:
    'Governance/Data Access Request Flow/Managed Access Requirement/Step 2d - Manual Upload DUC',
  component: ManualUploadDucStep,
  parameters: {
    stack: 'mock',
    chromatic: { viewports: [600, 1200] },
    msw: {
      handlers: [
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

export const ManualUpload: Story = {
  name: 'Manual print & upload DUC step',
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
    subjectId: '9876543',
    subjectType: RestrictableObjectType.ENTITY,
    downloadHrefOverride:
      'https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf',
  },
}
