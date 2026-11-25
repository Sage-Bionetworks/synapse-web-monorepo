import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import {
  getUpdatedClinicalFormHandlers,
  mockUpdatedJsonSchemaAR2,
  REMOVED_DATA_USE_PURPOSE,
} from '@/mocks/accessRequirement/mockUpdatedClinicalForm'
import {
  MOCK_CLINICAL_JSON_SCHEMA_DATA_ACCESS_REQUEST,
  MOCK_DATA_ACCESS_REQUEST,
} from '@/mocks/dataaccess/MockDataAccessRequest'
import { getAccessRequirementHandlers } from '@/mocks/msw/handlers/accessRequirementHandlers'
import { getDataAccessRequestHandlers } from '@/mocks/msw/handlers/dataAccessRequestHandlers'
import { getFormTemplateHandlers } from '@/mocks/msw/handlers/formTemplateHandlers'
import { getUserProfileHandlers } from '@/mocks/msw/handlers/userProfileHandlers'
import { getWikiHandlers } from '@/mocks/msw/handlers/wikiHandlers'
import { MOCK_USER_ID, MOCK_USER_ID_2 } from '@/mocks/user/mock_user_profile'
import {
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE,
  DATA_ACCESS_REQUEST_SIGNATURE_STATUS,
} from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import {
  JsonSchemaAccessRequirement,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import { fn } from 'storybook/test'
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
          {
            name: 'Dan Declined',
            status: 'declined',
            declinedReason:
              'The intended data use statement does not match what we agreed on. Please revise section 3 before re-sending.',
            declinedOn: '2026-03-15T14:30:00.000Z',
          },
        ],
      },
      { status: 200 },
    ),
)

const fullySignedStatus = {
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
}

const fullySignedHandler = http.get(
  `${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST_SIGNATURE_STATUS(
    MOCK_DATA_ACCESS_REQUEST.id,
  )}`,
  () => HttpResponse.json(fullySignedStatus, { status: 200 }),
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

const clinicalRequestWithRemovedOption = {
  ...MOCK_CLINICAL_JSON_SCHEMA_DATA_ACCESS_REQUEST,
  eDucSignatureEnvelopeId: 'docusign-envelope-456',
  schemaData: {
    projectTitle: 'Variant frequency across trial cohorts',
    dataUsePurpose: REMOVED_DATA_USE_PURPOSE,
    signedDataUseAgreement: 123,
  },
}

// The mock is typed with the generated client; the step is typed with the legacy access requirement types
const updatedJsonSchemaAccessRequirement =
  mockUpdatedJsonSchemaAR2 as unknown as JsonSchemaAccessRequirement

/**
 * A schema-driven access requirement whose form changed after the DUC was sent for signature, to no longer accept one
 * of the requester's answers. Submit stays disabled until the requester goes Back and changes the answer.
 */
export const JsonSchemaAnswersNeedReview: Story = {
  name: 'Schema-driven — form changed, answers need review',
  args: {
    managedACTAccessRequirement: {
      ...updatedJsonSchemaAccessRequirement,
      eDucTemplateId: 'template-abc-123',
    },
    onBackClicked: fn(),
  },
  parameters: {
    msw: {
      handlers: [
        http.get(
          `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE(
            updatedJsonSchemaAccessRequirement.id,
          )}`,
          () => HttpResponse.json(clinicalRequestWithRemovedOption),
        ),
        http.get(
          `${MOCK_REPO_ORIGIN}${DATA_ACCESS_REQUEST_SIGNATURE_STATUS(
            clinicalRequestWithRemovedOption.id,
          )}`,
          () => HttpResponse.json(fullySignedStatus),
        ),
        http.get(
          `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_BY_ID(updatedJsonSchemaAccessRequirement.id)}`,
          () => HttpResponse.json(updatedJsonSchemaAccessRequirement),
        ),
        ...getUpdatedClinicalFormHandlers(MOCK_REPO_ORIGIN),
        ...getFormTemplateHandlers(MOCK_REPO_ORIGIN),
        ...getUserProfileHandlers(MOCK_REPO_ORIGIN),
        ...getDataAccessRequestHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
}
