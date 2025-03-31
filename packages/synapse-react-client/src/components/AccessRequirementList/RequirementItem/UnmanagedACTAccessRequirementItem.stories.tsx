import {
  mockACTAccessRequirement,
  mockACTAccessRequirementWithWiki,
  mockToUAccessRequirement,
  mockToUAccessRequirementWithWiki,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import { getAccessRequirementHandlers } from '@/mocks/msw/handlers/accessRequirementHandlers'
import { getCurrentUserCertifiedValidatedHandler } from '@/mocks/msw/handlers/userProfileHandlers'
import { getWikiHandlers } from '@/mocks/msw/handlers/wikiHandlers'
import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
import {
  ACCESS_APPROVAL,
  ACCESS_REQUIREMENT_STATUS,
} from '@/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import {
  AccessApproval,
  AccessRequirementStatus,
  ApprovalState,
} from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react'
import { rest } from 'msw'
import UnmanagedACTAccessRequirementItem from './UnmanagedACTAccessRequirementItem'

const meta: Meta = {
  title:
    'Governance/Data Access Request Flow/Requirements/UnmanagedACTAccessRequirementItem',
  component: UnmanagedACTAccessRequirementItem,
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

export const LegacyACTAccessRequirement: Story = {
  args: {
    accessRequirement: mockACTAccessRequirement,
  },
  parameters: {
    msw: {
      handlers: [
        // ...getHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, false, false),
        rest.get(
          `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_STATUS(':id')}`,

          async (req, res, ctx) => {
            const response: AccessRequirementStatus = {
              accessRequirementId: req.params.id as string,
              concreteType:
                'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
              isApproved: false,
            }
            return res(ctx.status(200), ctx.json(response))
          },
        ),
        rest.post(
          `${MOCK_REPO_ORIGIN}${ACCESS_APPROVAL}`,
          async (req, res, ctx) => {
            const response: AccessApproval = {
              requirementId: mockToUAccessRequirement.id,
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
            return res(ctx.status(201), ctx.json(response))
          },
        ),
      ],
    },
  },
}

export const LegacyACTAccessRequirementWithWiki: Story = {
  args: {
    accessRequirement: mockACTAccessRequirementWithWiki,
  },
  parameters: {
    msw: {
      handlers: [
        // ...getHandlers(MOCK_REPO_ORIGIN),
        ...getAccessRequirementHandlers(MOCK_REPO_ORIGIN),
        ...getWikiHandlers(MOCK_REPO_ORIGIN),
        getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, false, false),
        rest.get(
          `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_STATUS(':id')}`,

          async (req, res, ctx) => {
            const response: AccessRequirementStatus = {
              accessRequirementId: req.params.id as string,
              concreteType:
                'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
              isApproved: false,
            }
            return res(ctx.status(200), ctx.json(response))
          },
        ),
        rest.post(
          `${MOCK_REPO_ORIGIN}${ACCESS_APPROVAL}`,
          async (req, res, ctx) => {
            const response: AccessApproval = {
              requirementId: mockToUAccessRequirementWithWiki.id,
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
            return res(ctx.status(201), ctx.json(response))
          },
        ),
      ],
    },
  },
}
