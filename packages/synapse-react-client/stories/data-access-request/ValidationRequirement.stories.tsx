import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { MOCK_REPO_ORIGIN } from '../../src/lib/utils/functions/getEndpoint'
import ValidationRequirement from '../../src/lib/containers/AccessRequirementList/RequirementItem/ValidationRequirement'
import { getCurrentUserCertifiedValidatedHandler } from '../../mocks/msw/handlers/userProfileHandlers'

const meta: Meta = {
  title:
    'Governance/Data Access Request Flow/Requirements/ValidationRequirement',
  component: ValidationRequirement,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Validated: Story = {
  parameters: {
    msw: {
      handlers: [
        getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true),
      ],
    },
  },
}

export const NotValidated: Story = {
  parameters: {
    msw: {
      handlers: [
        getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, false),
      ],
    },
  },
}
