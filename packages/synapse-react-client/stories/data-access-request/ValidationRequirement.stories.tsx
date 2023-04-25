import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { rest } from 'msw'
import { MOCK_REPO_ORIGIN } from '../../src/lib/utils/functions/getEndpoint'
import { USER_BUNDLE } from '../../src/lib/utils/APIConstants'
import { UserBundle } from '../../src/lib/utils/synapseTypes'
import { mockUserBundle } from '../../mocks/user/mock_user_profile'
import ValidationRequirement from '../../src/lib/containers/access_requirement_list/ValidationRequirement'

const meta: Meta = {
  title: 'Governance/Data Access Request Flow/ValidationRequirement',
  component: ValidationRequirement,
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
export const Validated: Story = {
  parameters: {
    msw: {
      handlers: [getCurrentUserCertifiedValidatedHandler(true, true)],
    },
  },
}

export const NotValidated: Story = {
  parameters: {
    msw: {
      handlers: [getCurrentUserCertifiedValidatedHandler(true, false)],
    },
  },
}
