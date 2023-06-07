import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { rest } from 'msw'
import { MOCK_REPO_ORIGIN } from '../../src/utils/functions/getEndpoint'
import { ACCESS_APPROVAL } from '../../src/utils/APIConstants'
import {
  mockACTAccessRequirement,
  mockManagedACTAccessRequirement,
  mockSelfSignAccessRequirement,
  mockToUAccessRequirement,
} from '../../mocks/mockAccessRequirements'
import mockFileEntity from '../../mocks/entity/mockFileEntity'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
} from '../../src/utils/context/SynapseContext'
import {
  AccessApproval,
  AccessRequirement,
  AccessRequirementStatus,
  ApprovalState,
  SubmissionState,
  TwoFactorAuthStatus,
} from '@sage-bionetworks/synapse-types'
import { MOCK_USER_ID } from '../../mocks/user/mock_user_profile'
import AccessRequirementList from '../../src/components/AccessRequirementList/AccessRequirementList'
import { getWikiHandlers } from '../../mocks/msw/handlers/wikiHandlers'
import {
  getAccessRequirementEntityBindingHandlers,
  getAccessRequirementHandlers,
  getAccessRequirementStatusHandlers,
} from '../../mocks/msw/handlers/accessRequirementHandlers'
import { getEntityHandlers } from '../../mocks/msw/handlers/entityHandlers'
import { mockApprovedSubmission } from '../../mocks/dataaccess/MockSubmission'
import { getCurrentUserCertifiedValidatedHandler } from '../../mocks/msw/handlers/userProfileHandlers'
import { getResearchProjectHandlers } from '../../mocks/msw/handlers/researchProjectHandlers'

const meta: Meta = {
  title: 'Governance/Data Access Request Flow/AccessRequirementList',
  component: AccessRequirementList,
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
  parameters: { stack: 'mock' },
  render: args => (
    <SynapseContextConsumer>
      {context => (
        <SynapseContextProvider
          synapseContext={{
            ...context,
            accessToken: args.isAuthenticated
              ? context.accessToken ?? 'fake token'
              : undefined,
          }}
        >
          <AccessRequirementList {...args} />
        </SynapseContextProvider>
      )}
    </SynapseContextConsumer>
  ),
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

type AccessRequirementAndStatus = {
  accessRequirement: AccessRequirement
  status: AccessRequirementStatus
}

const touMarkdown =
  "# Terms of use\n\nthese are the terms of use:\n\n1. follow the rules\n2. submit an IRB approval form\n3. click accept terms\n4. don't do step 1."

function getTwoFactorAuthStatusHandler(enabled: boolean) {
  return [
    rest.get(
      `${MOCK_REPO_ORIGIN}/auth/v1/2fa`,

      async (req, res, ctx) => {
        let status = 200
        let response: TwoFactorAuthStatus = {
          status: enabled ? 'ENABLED' : 'DISABLED',
        }
        return res(ctx.status(status), ctx.json(response))
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

        ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, {
          [mockManagedACTAccessRequirement.id.toString()]: {
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
          [mockSelfSignAccessRequirement.id.toString()]: {
            accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: true,
          },

          [mockToUAccessRequirement.id.toString()]: {
            accessRequirementId: mockToUAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: true,
          },

          [mockACTAccessRequirement.id.toString()]: {
            accessRequirementId: mockACTAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: true,
          },
        }),
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

export const HasUnmetRequirements: Story = {
  parameters: {
    msw: {
      handlers: [
        ...getEntityHandlers(MOCK_REPO_ORIGIN),
        getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, false, false),
        ...getTwoFactorAuthStatusHandler(false),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementEntityBindingHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, {
          [mockManagedACTAccessRequirement.id.toString()]: {
            accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
            isApproved: false,
          },
          [mockSelfSignAccessRequirement.id.toString()]: {
            accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: false,
          },

          [mockToUAccessRequirement.id.toString()]: {
            accessRequirementId: mockToUAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: false,
          },

          [mockACTAccessRequirement.id.toString()]: {
            accessRequirementId: mockACTAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: false,
          },
        }),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        ...getResearchProjectHandlers(MOCK_REPO_ORIGIN),
        rest.post(
          `${MOCK_REPO_ORIGIN}${ACCESS_APPROVAL}`,
          async (req, res, ctx) => {
            const response: AccessApproval = {
              submitterId: MOCK_USER_ID.toString(),
              accessorId: MOCK_USER_ID.toString(),
              state: ApprovalState.APPROVED,
            }
            return res(ctx.status(201), ctx.json(response))
          },
        ),
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
        ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, {
          [mockSelfSignAccessRequirement.id.toString()]: {
            accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: false,
          },
        }),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        rest.post(
          `${MOCK_REPO_ORIGIN}${ACCESS_APPROVAL}`,
          async (req, res, ctx) => {
            const response: AccessApproval = {
              submitterId: MOCK_USER_ID.toString(),
              accessorId: MOCK_USER_ID.toString(),
              state: ApprovalState.APPROVED,
            }
            return res(ctx.status(201), ctx.json(response))
          },
        ),
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
        ...getAccessRequirementStatusHandlers(MOCK_REPO_ORIGIN, {
          [mockSelfSignAccessRequirement.id.toString()]: {
            accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
            concreteType:
              'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: false,
          },
        }),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        rest.post(
          `${MOCK_REPO_ORIGIN}${ACCESS_APPROVAL}`,
          async (req, res, ctx) => {
            const response: AccessApproval = {
              submitterId: MOCK_USER_ID.toString(),
              accessorId: MOCK_USER_ID.toString(),
              state: ApprovalState.APPROVED,
            }
            return res(ctx.status(201), ctx.json(response))
          },
        ),
      ],
    },
  },
  args: {
    entityId: mockFileEntity.id,
    renderAsModal: true,
    isAuthenticated: true,
  },
}
