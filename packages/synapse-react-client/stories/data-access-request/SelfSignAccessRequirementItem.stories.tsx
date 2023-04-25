import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import SelfSignAccessRequirementItem from '../../src/lib/containers/access_requirement_list/SelfSignAccessRequirementItem'
import {
  SynapseContextConsumer,
  SynapseContextProvider,
} from '../../src/lib/utils/SynapseContext'
import { mockSelfSignAccessRequirement } from '../../mocks/mockAccessRequirements'
import { getHandlers } from '../../mocks/msw/handlers'
import { MOCK_REPO_ORIGIN } from '../../src/lib/utils/functions/getEndpoint'
import { rest } from 'msw'
import { ACCESS_APPROVAL, USER_BUNDLE } from '../../src/lib/utils/APIConstants'
import {
  AccessApproval,
  ApprovalState,
  UserBundle,
} from '../../src/lib/utils/synapseTypes'
import {
  MOCK_USER_ID,
  mockUserBundle,
} from '../../mocks/user/mock_user_profile'

const meta: Meta = {
  title: 'Governance/Data Access Request Flow/SelfSignAccessRequirementItem',
  component: SelfSignAccessRequirementItem,
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
          <SelfSignAccessRequirementItem {...args} />
        </SynapseContextProvider>
      )}
    </SynapseContextConsumer>
  ),
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

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

export const RequiresUnmetCertificationAndValidation: Story = {
  args: {
    accessRequirement: {
      ...mockSelfSignAccessRequirement,
      isCertifiedUserRequired: true,
      isValidatedProfileRequired: true,
    },
  },
  parameters: {
    msw: {
      handlers: [
        ...getHandlers(MOCK_REPO_ORIGIN),
        getCurrentUserCertifiedValidatedHandler(false, false),
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
}
