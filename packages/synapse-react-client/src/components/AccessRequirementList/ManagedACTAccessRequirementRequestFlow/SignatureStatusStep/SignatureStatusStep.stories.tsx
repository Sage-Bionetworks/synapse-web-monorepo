import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import { MOCK_DATA_ACCESS_REQUEST } from '@/mocks/dataaccess/MockDataAccessRequest'
import { getAccessRequirementHandlers } from '@/mocks/msw/handlers/accessRequirementHandlers'
import { getDataAccessRequestHandlers } from '@/mocks/msw/handlers/dataAccessRequestHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { getWikiHandlers } from '@/mocks/msw/handlers/wikiHandlers'
import { MOCK_USER_ID, MOCK_USER_ID_2 } from '@/mocks/user/mock_user_profile'
import {
  ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE,
  DATA_ACCESS_REQUEST_SIGNATURE_STATUS,
} from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { RestrictableObjectType } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import SignatureStatusStep from './SignatureStatusStep'

const eDucManagedACTAccessRequirement = {
  ...mockManagedACTAccessRequirement,
  eDucTemplateId: 'template-abc-123',
}

const mockDarWithEnvelope = {
  ...MOCK_DATA_ACCESS_REQUEST,
  eDucSignatureEnvelopeId: 'docusign-envelope-123',
}

const overrideDarHandler = http.get(
  `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE(
    eDucManagedACTAccessRequirement.id,
  )}`,
  () => HttpResponse.json(mockDarWithEnvelope, { status: 200 }),
)

const partiallySignedHandler = http.get(
  `${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST_SIGNATURE_STATUS(
    MOCK_DATA_ACCESS_REQUEST.id,
  )}`,
  () =>
    HttpResponse.json(
      {
        ducStatus: 'sent',
        includesRequestChanges: true,
        signerStatus: [
          {
            name: 'Alice Accessor',
            userId: String(MOCK_USER_ID),
            status: 'done',
          },
          {
            name: 'Bob Collaborator',
            userId: String(MOCK_USER_ID_2),
            status: 'pending',
          },
          { name: 'Cara Officer', status: 'pending' },
          { name: 'Dan Declined', status: 'declined' },
        ],
      },
      { status: 200 },
    ),
)

const fullySignedHandler = http.get(
  `${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST_SIGNATURE_STATUS(
    MOCK_DATA_ACCESS_REQUEST.id,
  )}`,
  () =>
    HttpResponse.json(
      {
        ducStatus: 'completed',
        includesRequestChanges: true,
        signerStatus: [
          {
            name: 'Alice Accessor',
            userId: String(MOCK_USER_ID),
            status: 'done',
          },
          {
            name: 'Bob Collaborator',
            userId: String(MOCK_USER_ID_2),
            status: 'done',
          },
          { name: 'Cara Officer', status: 'done' },
        ],
      },
      { status: 200 },
    ),
)

const meta: Meta<typeof SignatureStatusStep> = {
  title:
    'Governance/Data Access Request Flow/Managed Access Requirement/Step 2e - Signature Status',
  component: SignatureStatusStep,
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
  args: {
    managedACTAccessRequirement: eDucManagedACTAccessRequirement,
    subjectId: '9876543',
    subjectType: RestrictableObjectType.ENTITY,
    viewDucHrefOverride:
      'https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const InProgress: Story = {
  name: 'Signatures in progress',
  parameters: {
    msw: {
      handlers: [
        overrideDarHandler,
        partiallySignedHandler,
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}

export const AllSignaturesCollected: Story = {
  name: 'All signatures collected — ready to submit',
  parameters: {
    msw: {
      handlers: [
        overrideDarHandler,
        fullySignedHandler,
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}
