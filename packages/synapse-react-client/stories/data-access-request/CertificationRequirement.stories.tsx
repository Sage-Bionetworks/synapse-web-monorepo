import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { MOCK_REPO_ORIGIN } from '../../src/lib/utils/functions/getEndpoint'
import CertificationRequirement from '../../src/lib/containers/AccessRequirementList/RequirementItem/CertificationRequirement'
import { getCurrentUserCertifiedValidatedHandler } from '../../mocks/msw/handlers/userProfileHandlers'

const meta: Meta = {
  title:
    'Governance/Data Access Request Flow/Requirements/CertificationRequirement',
  component: CertificationRequirement,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Certified: Story = {
  parameters: {
    msw: {
      handlers: [
        getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, true, true),
      ],
    },
  },
}
export const NotCertified: Story = {
  parameters: {
    msw: {
      handlers: [
        getCurrentUserCertifiedValidatedHandler(MOCK_REPO_ORIGIN, false, true),
      ],
    },
  },
}
