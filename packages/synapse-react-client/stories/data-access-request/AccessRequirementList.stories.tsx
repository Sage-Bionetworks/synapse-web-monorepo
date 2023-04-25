import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { rest } from 'msw'
import { MOCK_REPO_ORIGIN } from '../../src/lib/utils/functions/getEndpoint'
import {
  ACCESS_APPROVAL,
  ACCESS_REQUIREMENT_STATUS,
  DATA_ACCESS_REQUEST_SUBMISSION,
  ENTITY_ACCESS_REQUIREMENTS,
  FILE_HANDLE_BATCH,
  USER_BUNDLE,
} from '../../src/lib/utils/APIConstants'
import {
  mockManagedACTAccessRequirement,
  mockSelfSignAccessRequirement,
} from '../../mocks/mockAccessRequirements'
import mockFileEntity from '../../mocks/entity/mockFileEntity'
import { getHandlers } from '../../mocks/msw/handlers'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
} from '../../src/lib/utils/SynapseContext'
import {
  AccessApproval,
  AccessRequirement,
  AccessRequirementStatus,
  ApprovalState,
  BatchFileResult,
  PaginatedResults,
  SubmissionState,
  UserBundle,
} from '../../src/lib/utils/synapseTypes'
import {
  MOCK_USER_ID,
  mockUserBundle,
} from '../../mocks/user/mock_user_profile'
import { mockFileHandle } from '../../mocks/mock_file_handle'
import AccessRequirementList from '../../src/lib/containers/access_requirement_list/AccessRequirementList'
import { TwoFactorAuthStatus } from '../../src/lib/utils/synapseTypes/TotpSecret'

import { getDataAccessRequestHandlers } from '../../mocks/msw/handlers/dataAccessRequestHandlers'
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
          <p>
            First, use the StackChanger component to switch to the Mocked Data
            stack
          </p>

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

function getCurrentUserCertifiedValidatedHandler(
  isCertified: boolean,
  isValidated: boolean,
) {
  return rest.get(
    `${MOCK_REPO_ORIGIN}${USER_BUNDLE}`,
    async (req, res, ctx) => {
      let status = 200
      let response: UserBundle = {
        ...mockUserBundle,
        isCertified: isCertified,
        isVerified: isValidated,
      }
      return res(ctx.status(status), ctx.json(response))
    },
  )
}

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

function getAccessRequirementHandlers(
  accessRequirements: AccessRequirementAndStatus[],
) {
  return [
    rest.get(
      `${MOCK_REPO_ORIGIN}${ENTITY_ACCESS_REQUIREMENTS(':entityId')}`,

      async (req, res, ctx) => {
        let status = 200
        let response: PaginatedResults<AccessRequirement> = {
          results: accessRequirements.map(ar => ar.accessRequirement),
          totalNumberOfResults: accessRequirements.length,
        }
        return res(ctx.status(status), ctx.json(response))
      },
    ),
    rest.get(
      `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_STATUS(':id')}`,

      async (req, res, ctx) => {
        const matchingArAndStatus = accessRequirements.find(
          accessRequirements =>
            req.params.id ===
            accessRequirements.accessRequirement.id.toString(),
        )
        const response = matchingArAndStatus?.status
        const status = response ? 200 : 404
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
        ...getHandlers(MOCK_REPO_ORIGIN),
        ...getTwoFactorAuthStatusHandler(false),
        ...getAccessRequirementHandlers([]),
      ],
    },
  },
}

export const HasMetRequirements: Story = {
  parameters: {
    msw: {
      handlers: [
        ...getHandlers(MOCK_REPO_ORIGIN),
        getCurrentUserCertifiedValidatedHandler(true, true),
        ...getTwoFactorAuthStatusHandler(true),
        ...getAccessRequirementHandlers([
          {
            accessRequirement: mockManagedACTAccessRequirement,
            status: {
              accessRequirementId:
                mockManagedACTAccessRequirement.id.toString(),
              concreteType:
                'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
              isApproved: true,
              expiredOn: '2040-06-01T00:00:00.000Z',
              currentSubmissionStatus: {
                submissionId: '123',
                submittedBy: MOCK_USER_ID.toString(),
                rejectedReason: '',
                state: SubmissionState.APPROVED,
                modifiedOn: '2022-06-01T00:00:00.000Z',
              },
            },
          },
          {
            accessRequirement: mockSelfSignAccessRequirement,
            status: {
              accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
              concreteType:
                'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
              isApproved: true,
            },
          },
        ]),
      ],
    },
  },
  args: {
    entityId: mockFileEntity.id,
    renderAsModal: true,
  },
}

export const HasUnmetRequirements: Story = {
  parameters: {
    msw: {
      handlers: [
        ...getHandlers(MOCK_REPO_ORIGIN),
        getCurrentUserCertifiedValidatedHandler(true, true),
        ...getTwoFactorAuthStatusHandler(false),
        ...getAccessRequirementHandlers([
          {
            accessRequirement: mockManagedACTAccessRequirement,
            status: {
              accessRequirementId:
                mockManagedACTAccessRequirement.id.toString(),
              concreteType:
                'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
              isApproved: false,
            },
          },
          {
            accessRequirement: mockSelfSignAccessRequirement,
            status: {
              accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
              concreteType:
                'org.sagebionetworks.repo.model.SelfSignAccessRequirement',
              isApproved: false,
            },
          },
        ]),
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
  },
}

export const NotValidated: Story = {
  parameters: {
    msw: {
      handlers: [
        ...getHandlers(MOCK_REPO_ORIGIN),
        getCurrentUserCertifiedValidatedHandler(true, false),
        ...getTwoFactorAuthStatusHandler(true),
        ...getAccessRequirementHandlers([
          {
            accessRequirement: mockManagedACTAccessRequirement,
            status: {
              accessRequirementId:
                mockManagedACTAccessRequirement.id.toString(),
              concreteType:
                'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
              isApproved: false,
            },
          },
          {
            accessRequirement: mockSelfSignAccessRequirement,
            status: {
              accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
              concreteType:
                'org.sagebionetworks.repo.model.SelfSignAccessRequirement',
              isApproved: false,
            },
          },
        ]),
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
  },
}

export const NotCertified: Story = {
  parameters: {
    msw: {
      handlers: [
        ...getHandlers(MOCK_REPO_ORIGIN),
        getCurrentUserCertifiedValidatedHandler(false, true),
        ...getTwoFactorAuthStatusHandler(true),
        ...getAccessRequirementHandlers([
          {
            accessRequirement: mockManagedACTAccessRequirement,
            status: {
              accessRequirementId:
                mockManagedACTAccessRequirement.id.toString(),
              concreteType:
                'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus',
              isApproved: false,
            },
          },
          {
            accessRequirement: mockSelfSignAccessRequirement,
            status: {
              accessRequirementId: mockSelfSignAccessRequirement.id.toString(),
              concreteType:
                'org.sagebionetworks.repo.model.SelfSignAccessRequirement',
              isApproved: false,
            },
          },
        ]),
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
  },
}
