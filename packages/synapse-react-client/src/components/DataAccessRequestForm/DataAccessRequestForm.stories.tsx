import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import { Meta, StoryObj } from '@storybook/react-vite'
import { mockFormFields } from '@/mocks/accessRequirement/mockFormFields'
import { mockFormSteps } from '@/mocks/accessRequirement/mockFormSteps'
import {
  mockJsonSchemaAR1,
  mockJsonSchemaAR2,
} from '@/mocks/accessRequirement/mockJsonSchemaAccessRequirements'
import { getFormFieldHandlers } from '@/mocks/msw/handlers/formFieldHandlers'
import { getFormStepHandlers } from '@/mocks/msw/handlers/formStepHandlers'
import { DataAccessRequestForm } from './DataAccessRequestForm'

const meta: Meta<typeof DataAccessRequestForm> = {
  title: 'Governance/JSON Schema AR/Data Access Request Form',
  component: DataAccessRequestForm,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: [
        ...getFormFieldHandlers(MOCK_REPO_ORIGIN),
        ...getFormStepHandlers(MOCK_REPO_ORIGIN),
      ],
    },
  },
  args: {
    allFields: mockFormFields,
    formSteps: mockFormSteps,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataAccessRequestForm>

export default meta
type Story = StoryObj<typeof meta>

/** Single Access Requirement — multi-step form with all fields from AR 1. */
export const SingleAccessRequirement: Story = {
  args: {
    accessRequirements: [mockJsonSchemaAR1],
  },
}

/**
 * Two Access Requirements sharing the "Institution" field.
 * Demonstrates deduplication: Institution appears only once in the unified form.
 */
export const MultipleWithDeduplication: Story = {
  args: {
    accessRequirements: [mockJsonSchemaAR1, mockJsonSchemaAR2],
  },
}
