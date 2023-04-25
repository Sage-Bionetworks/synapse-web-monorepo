import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { mockManagedACTAccessRequirement } from '../../mocks/mockAccessRequirements'
import { MOCK_REPO_ORIGIN } from '../../src/lib/utils/functions/getEndpoint'
import RequestDataAccessStep1 from '../../src/lib/containers/access_requirement_list/managedACTAccess/RequestDataAccessStep1'
import { getResearchProjectHandlers } from '../../mocks/msw/handlers/researchProjectHandlers'

const meta: Meta = {
  title:
    'Governance/Data Access Request Flow/Managed Access Requirement/Step 1 - Research Project Information',
  component: RequestDataAccessStep1,
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Step1: Story = {
  args: {
    managedACTAccessRequirement: mockManagedACTAccessRequirement,
  },
  parameters: {
    msw: {
      handlers: [...getResearchProjectHandlers(MOCK_REPO_ORIGIN)],
    },
  },
}
