import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
} from '../../../utils/context/SynapseContext'
import {
  mockACTAccessRequirement,
  mockACTAccessRequirementWithWiki,
  mockToUAccessRequirement,
  mockToUAccessRequirementWithWiki,
} from '../../../mocks/mockAccessRequirements'
import { MOCK_REPO_ORIGIN } from '../../../utils/functions/getEndpoint'
import { http, HttpResponse } from 'msw'
import {
  ACCESS_APPROVAL,
  ACCESS_REQUIREMENT_STATUS,
} from '../../../utils/APIConstants'
import {
  AccessApproval,
  AccessRequirementStatus,
  ApprovalState,
} from '@sage-bionetworks/synapse-types'
import { MOCK_USER_ID } from '../../../mocks/user/mock_user_profile'
import { getAccessRequirementHandlers } from '../../../mocks/msw/handlers/accessRequirementHandlers'
import { getWikiHandlers } from '../../../mocks/msw/handlers/wikiHandlers'
import { getCurrentUserCertifiedValidatedHandler } from '../../../mocks/msw/handlers/userProfileHandlers'
import UnmanagedACTAccessRequirementItem from './UnmanagedACTAccessRequirementItem'

const meta: Meta = {
  title:
    'Governance/Data Access Request Flow/Requirements/UnmanagedACTAccessRequirementItem',
  component: UnmanagedACTAccessRequirementItem,
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
  decorators: [
    (Story, args) => (
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
            <Story />
          </SynapseContextProvider>
        )}
      </SynapseContextConsumer>
    ),
  ],
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
        http.get(
          `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_STATUS(':id')}`,

          async ({ request, params }) => {
            const response: AccessRequirementStatus = {
              accessRequirementId: params.id as string,
              concreteType:
                'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
              isApproved: false,
            }
            return HttpResponse.json(response, { status: 200 })
          },
        ),
        http.post(
          `${MOCK_REPO_ORIGIN}${ACCESS_APPROVAL}`,
          async ({ request, params }) => {
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
            return HttpResponse.json(response, { status: 201 })
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
        http.get(
          `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_STATUS(':id')}`,

          async ({ request, params }) => {
            const response: AccessRequirementStatus = {
              accessRequirementId: params.id as string,
              concreteType:
                'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
              isApproved: false,
            }
            return HttpResponse.json(response, { status: 200 })
          },
        ),
        http.post(
          `${MOCK_REPO_ORIGIN}${ACCESS_APPROVAL}`,
          async ({ request, params }) => {
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
            return HttpResponse.json(response, { status: 201 })
          },
        ),
      ],
    },
  },
}
