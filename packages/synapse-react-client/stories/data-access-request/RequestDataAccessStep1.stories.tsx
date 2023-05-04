import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { mockManagedACTAccessRequirement } from '../../mocks/mockAccessRequirements'
import { MOCK_REPO_ORIGIN } from '../../src/lib/utils/functions/getEndpoint'
import ResearchProjectForm from '../../src/lib/containers/AccessRequirementList/ManagedACTAccessRequirementRequestFlow/ResearchProjectForm'
import { getResearchProjectHandlers } from '../../mocks/msw/handlers/researchProjectHandlers'

const meta: Meta = {
  title:
    'Governance/Data Access Request Flow/Managed Access Requirement/Step 1 - Research Project Information',
  component: ResearchProjectForm,
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
