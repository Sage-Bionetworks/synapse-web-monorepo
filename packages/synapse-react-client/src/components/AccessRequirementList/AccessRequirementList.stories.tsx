import {
  mockAccessRequirements,
  mockACTAccessRequirement,
  mockManagedACTAccessRequirement,
  mockSelfSignAccessRequirement,
  mockToUAccessRequirement,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import { mockApprovedSubmission } from '@/mocks/dataaccess/MockSubmission'
import mockFileEntity from '@/mocks/entity/mockFileEntity'
import {
  getAccessRequirementEntityBindingHandlers,
  getAccessRequirementHandlers,
  getAccessRequirementStatusHandlers,
} from '@/mocks/msw/handlers/accessRequirementHandlers'
import { getEntityHandlers } from '@/mocks/msw/handlers/entityHandlers'
import { getResearchProjectHandlers } from '@/mocks/msw/handlers/researchProjectHandlers'
import { getCurrentUserCertifiedValidatedHandler } from '@/mocks/msw/handlers/userProfileHandlers'
import { getWikiHandlers } from '@/mocks/msw/handlers/wikiHandlers'
import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
import { ACCESS_APPROVAL } from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import {
  AccessApproval,
  ApprovalState,
  SubmissionState,
  TwoFactorAuthStatus,
} from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { http, HttpResponse } from 'msw'
import AccessRequirementList from './AccessRequirementList'

const meta: Meta = {
  title: 'Governance/Data Access Request Flow/AccessRequirementList',
  component: AccessRequirementList,
  parameters: { stack: 'mock' },
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
    },
  },
  args: {
    isAuthenticated: true,
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function getTwoFactorAuthStatusHandler(enabled: boolean) {
  return [
    http.get(
      `${MOCK_REPO_ORIGIN}/auth/v1/2fa`,

      () => {
        const status = 200
        const response: TwoFactorAuthStatus = {
          status: enabled ? 'ENABLED' : 'DISABLED',
        }
        return HttpResponse.json(response, { status })
      },
    ),
  ]
}

export const NoRequirements: Story = {
  args: {
    entityId: mockFileEntity.id,
    renderAsModal: true,
  },
  parameters: {
    msw: {
      handlers: [
        ...getEntityHandlers(MOCK_REPO_ORIGIN),
        ...getTwoFactorAuthStatusHandler(false),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementEntityBindingHandlers(
          MOCK_REPO_ORIGIN,
          undefined,
          [],
        ),
      ],
    },
  },
}

export const HasMetRequirements: Story = {
  parameters: {
    msw: {
      handlers: [
        ...getEntityHandlers(MOCK_REPO_ORIGIN),
        getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true),
        ...getTwoFactorAuthStatusHandler(true),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN),

        ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [
          {
            accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
            isApproved: true,
            /* Current submission status. Will be undefined if no submission has been created */
            currentSubmissionStatus: {
              submissionId: mockApprovedSubmission.id,
              submittedBy: mockApprovedSubmission.submittedBy,
              modifiedOn: mockApprovedSubmission.modifiedOn,
              state: SubmissionState.APPROVED,
            },
          },
          {
            accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: true,
          },

          {
            accessRequirementId: mockToUAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: true,
          },
          {
            accessRequirementId: mockACTAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: true,
          },
        ]),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
  args: {
    entityId: mockFileEntity.id,
    isAuthenticated: true,
    renderAsModal: true,
  },
}

const expandedMockAccessRequirements = [
  ...mockAccessRequirements,
  { ...mockManagedACTAccessRequirement, id: 21 },
  { ...mockToUAccessRequirement, id: 22 },

  { ...mockSelfSignAccessRequirement, id: 23 },
  { ...mockACTAccessRequirement, id: 24 },
]
/** Verify ARs are grouped by type, and sorted by completion status */
export const HasUnmetRequirementsOfEveryType: Story = {
  parameters: {
    msw: {
      handlers: [
        ...getEntityHandlers(MOCK_REPO_ORIGIN),
        getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true),
        ...getTwoFactorAuthStatusHandler(true),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementEntityBindingHandlers(
          MOCK_REPO_ORIGIN,
          undefined,
          expandedMockAccessRequirements,
        ),
        ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [
          {
            accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
            isApproved: true,
            /* Current submission status. Will be undefined if no submission has been created */
            currentSubmissionStatus: {
              submissionId: mockApprovedSubmission.id,
              submittedBy: mockApprovedSubmission.submittedBy,
              modifiedOn: mockApprovedSubmission.modifiedOn,
              state: SubmissionState.APPROVED,
            },
          },
          {
            accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: true,
          },

          {
            accessRequirementId: mockToUAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: true,
          },
          {
            accessRequirementId: mockACTAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: true,
          },
          {
            accessRequirementId: '21',
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
            isApproved: false,
          },
          {
            accessRequirementId: '22',
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: false,
          },
          {
            accessRequirementId: '23',
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: false,
          },
          {
            accessRequirementId: '24',
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: false,
          },
        ]),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        ...getResearchProjectHandlers(MOCK_REPO_ORIGIN),
        http.post(`${MOCK_REPO_ORIGIN}${ACCESS_APPROVAL}`, () => {
          const response: AccessApproval = {
            requirementId: mockACTAccessRequirement.id,
            submitterId: MOCK_USER_ID.toString(),
            accessorId: MOCK_USER_ID.toString(),
            state: ApprovalState.APPROVED,
            id: 123,
            etag: 'etag',
            createdOn: new Date().toISOString(),
            modifiedOn: new Date().toISOString(),
            createdBy: String(MOCK_USER_ID),
            modifiedBy: String(MOCK_USER_ID),
          }
          return HttpResponse.json(response, { status: 201 })
        }),
      ],
    },
  },
  args: {
    entityId: mockFileEntity.id,
    isAuthenticated: true,
    renderAsModal: true,
  },
}

export const NotValidated: Story = {
  parameters: {
    msw: {
      handlers: [
        ...getEntityHandlers(MOCK_REPO_ORIGIN),
        getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, false),
        ...getTwoFactorAuthStatusHandler(true),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [
          {
            accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: false,
          },
        ]),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        http.post(`${MOCK_REPO_ORIGIN}${ACCESS_APPROVAL}`, () => {
          const response: AccessApproval = {
            requirementId: mockSelfSignAccessRequirement.id,
            submitterId: MOCK_USER_ID.toString(),
            accessorId: MOCK_USER_ID.toString(),
            state: ApprovalState.APPROVED,
            id: 123,
            etag: 'etag',
            createdOn: new Date().toISOString(),
            modifiedOn: new Date().toISOString(),
            createdBy: String(MOCK_USER_ID),
            modifiedBy: String(MOCK_USER_ID),
          }
          return HttpResponse.json(response, { status: 201 })
        }),
      ],
    },
  },
  args: {
    entityId: mockFileEntity.id,
    renderAsModal: true,
    isAuthenticated: true,
  },
}

export const NotCertified: Story = {
  parameters: {
    msw: {
      handlers: [
        ...getEntityHandlers(MOCK_REPO_ORIGIN),
        getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, false, true),
        ...getTwoFactorAuthStatusHandler(true),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [
          {
            accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: false,
          },
        ]),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        http.post(`${MOCK_REPO_ORIGIN}${ACCESS_APPROVAL}`, () => {
          const response: AccessApproval = {
            requirementId: mockSelfSignAccessRequirement.id,
            submitterId: MOCK_USER_ID.toString(),
            accessorId: MOCK_USER_ID.toString(),
            state: ApprovalState.APPROVED,
            id: 123,
            etag: 'etag',
            createdOn: new Date().toISOString(),
            modifiedOn: new Date().toISOString(),
            createdBy: String(MOCK_USER_ID),
            modifiedBy: String(MOCK_USER_ID),
          }
          return HttpResponse.json(response, { status: 201 })
        }),
      ],
    },
  },
  args: {
    entityId: mockFileEntity.id,
    renderAsModal: true,
    isAuthenticated: true,
  },
}

export const RejectedRequirement: Story = {
  parameters: {
    msw: {
      handlers: [
        ...getEntityHandlers(MOCK_REPO_ORIGIN),
        getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true),
        ...getTwoFactorAuthStatusHandler(true),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementEntityBindingHandlers(
          MOCK_REPO_ORIGIN,
          undefined,
          [mockManagedACTAccessRequirement],
        ),
        ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, [
          {
            accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
            isApproved: false,
            /* Current submission status. Will be undefined if no submission has been created */
            currentSubmissionStatus: {
              submissionId: mockApprovedSubmission.id,
              submittedBy: mockApprovedSubmission.submittedBy,
              modifiedOn: mockApprovedSubmission.modifiedOn,
              state: SubmissionState.REJECTED,
              rejectedReason:
                "Thank you for requesting access, but you were rejected. Here's why:\n * You did not meet the requirements.\n * Another reason: you did not meet the requirements.\nFeel free to apply again.",
            },
          },
        ]),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        ...getResearchProjectHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
  args: {
    entityId: mockFileEntity.id,
    isAuthenticated: true,
    renderAsModal: true,
  },
}
