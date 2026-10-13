import {
  mockACTAccessRequirement,
  mockToUAccessRequirement,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import { mockEditableJsonSchemaAR } from '@/mocks/accessRequirement/mockJsonSchemaAccessRequirements'
import {
  mockClinicalSchema,
  mockGenomicsSchema,
} from '@/mocks/accessRequirement/mockJsonSchemas'
import { getAllAccessRequirementHandlers } from '@/mocks/msw/handlers/accessRequirementHandlers'
import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { getRegisteredSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import { ACCESS_REQUIREMENT_BY_ID } from '@/utils/APIConstants'
import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'
import {
  MOCK_PORTAL_ORIGIN,
  MOCK_REPO_ORIGIN,
} from '@/utils/functions/getEndpoint'
import { RestrictableObjectType } from '@sage-bionetworks/synapse-types'
import { Meta, StoryObj } from '@storybook/react-vite'
import { JSONSchema7 } from 'json-schema'
import { http, HttpResponse } from 'msw'
import { fn } from 'storybook/test'
import CreateOrUpdateAccessRequirementWizard from './CreateOrUpdateAccessRequirementWizard'

const meta = {
  title: 'Governance/CreateOrUpdateAccessRequirementWizard',
  component: CreateOrUpdateAccessRequirementWizard,
  parameters: {
    stack: 'development',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const CreateTeamAR: Story = {
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    subject: {
      id: '3429759',
      type: RestrictableObjectType.TEAM,
    },
  },
}

export const CreateEntityAR: Story = {
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    subject: {
      id: 'syn12714410',
      type: RestrictableObjectType.ENTITY,
    },
  },
}

export const EditManagedAR: Story = {
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    accessRequirementId: '9602671',
  },
}

export const EditSelfSignAR: Story = {
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    accessRequirementId: '9602700',
  },
}

/* For Mock Stories, updates to Wiki Instructions will not be visible until MarkdownSynapse is updated to use react-query. */
export const MockTermsOfUseAR: Story = {
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    accessRequirementId: mockToUAccessRequirement.id.toString(),
  },
  parameters: {
    stack: 'mock',
  },
}

export const MockActAR: Story = {
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    accessRequirementId: mockACTAccessRequirement.id.toString(),
  },
  parameters: {
    stack: 'mock',
  },
}

const schemaDrivenHandlers = {
  featureFlags: [
    getFeatureFlagsOverride({
      portalOrigin: MOCK_PORTAL_ORIGIN,
      overrides: { [FeatureFlagEnum.ACT_DASHBOARD_FORM_TEMPLATES]: true },
    }),
  ],
  accessRequirement: [
    http.get(
      `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_BY_ID(':id')}`,
      ({ params }) =>
        params.id === String(mockEditableJsonSchemaAR.id)
          ? HttpResponse.json(mockEditableJsonSchemaAR)
          : undefined,
    ),
    ...getAllAccessRequirementHandlers(MOCK_REPO_ORIGIN),
  ],
  registeredSchema: getRegisteredSchemaHandlers(MOCK_REPO_ORIGIN, [
    mockClinicalSchema as JSONSchema7,
    mockGenomicsSchema as JSONSchema7,
  ]),
}

/** With the feature enabled, the type options include a schema-driven AR, which requires a form template. */
export const MockCreateSchemaDrivenAR: Story = {
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    subject: {
      id: 'syn12714410',
      type: RestrictableObjectType.ENTITY,
    },
  },
  parameters: {
    stack: 'mock',
    msw: { handlers: schemaDrivenHandlers },
  },
}

export const MockEditSchemaDrivenAR: Story = {
  args: {
    open: true,
    onComplete: fn(),
    onCancel: fn(),
    accessRequirementId: mockEditableJsonSchemaAR.id!.toString(),
  },
  parameters: {
    stack: 'mock',
    msw: { handlers: schemaDrivenHandlers },
  },
}
