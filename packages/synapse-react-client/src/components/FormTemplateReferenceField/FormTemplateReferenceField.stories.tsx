import { mockClinicalTemplate } from '@/mocks/accessRequirement/mockFormTemplates'
import {
  mockClinicalSchema,
  mockGenomicsSchema,
} from '@/mocks/accessRequirement/mockJsonSchemas'
import {
  getFormTemplateHandlers,
  getFormTemplateService,
} from '@/mocks/msw/handlers/formTemplateHandlers'
import { getRegisteredSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import { MOCK_REPO_ORIGIN } from '@/utils/functions/getEndpoint'
import {
  FormTemplate,
  FormTemplateReference,
} from '@sage-bionetworks/synapse-client'
import { Meta, StoryObj } from '@storybook/react-vite'
import { JSONSchema7 } from 'json-schema'
import { http, HttpResponse } from 'msw'
import { useState } from 'react'
import { FormTemplateReferenceField } from './FormTemplateReferenceField'
import { SELECT_FORM_TEMPLATE_ERROR } from './FormTemplateReferenceField'

const TEMPLATE_URL = `${MOCK_REPO_ORIGIN}/repo/v1/accessRequirement/formTemplate`

const clinicalTemplateVersions: FormTemplate[] = [
  { ...mockClinicalTemplate, versionNumber: 1 },
  {
    ...mockClinicalTemplate,
    versionNumber: 2,
    deprecated: true,
    steps: [
      { ...mockClinicalTemplate.steps[0], title: 'Project Details (v2)' },
    ],
  },
  {
    ...mockClinicalTemplate,
    versionNumber: 3,
    steps: [
      { ...mockClinicalTemplate.steps[0], title: 'Project Details (v3)' },
    ],
  },
]

/** The mock form template service only holds one version of each template, so versions are served here. */
const versionedTemplateHandlers = [
  http.get(`${TEMPLATE_URL}/${mockClinicalTemplate.id}`, () =>
    HttpResponse.json(clinicalTemplateVersions[2]),
  ),
  http.get(
    `${TEMPLATE_URL}/${mockClinicalTemplate.id}/version/:versionNumber`,
    ({ params }) => {
      const version = clinicalTemplateVersions.find(
        template => String(template.versionNumber) === params.versionNumber,
      )
      return version
        ? HttpResponse.json(version)
        : HttpResponse.json({ reason: 'Not found' }, { status: 404 })
    },
  ),
  ...getRegisteredSchemaHandlers(MOCK_REPO_ORIGIN, [
    mockClinicalSchema as JSONSchema7,
    mockGenomicsSchema as JSONSchema7,
  ]),
]

const meta = {
  title: 'Governance/FormTemplateReferenceField',
  component: FormTemplateReferenceField,
  parameters: {
    stack: 'mock',
    msw: {
      handlers: {
        formTemplate: [
          ...versionedTemplateHandlers,
          ...getFormTemplateHandlers(
            MOCK_REPO_ORIGIN,
            getFormTemplateService(),
          ),
        ],
      },
    },
  },
  render: function Render(args) {
    const [value, setValue] = useState<FormTemplateReference | undefined>(
      args.value,
    )
    return (
      <FormTemplateReferenceField {...args} value={value} onChange={setValue} />
    )
  },
} satisfies Meta<typeof FormTemplateReferenceField>

export default meta

type Story = StoryObj<typeof meta>

const clinicalReference = (
  templateVersionNumber: number,
): FormTemplateReference => ({
  templateId: mockClinicalTemplate.id!,
  templateVersionNumber,
})

export const NothingSelected: Story = {
  args: { value: undefined, onChange: () => {} },
}

export const MissingSelectionError: Story = {
  args: {
    value: undefined,
    onChange: () => {},
    error: SELECT_FORM_TEMPLATE_ERROR,
  },
}

export const PinnedToLatestVersion: Story = {
  args: { value: clinicalReference(3), onChange: () => {} },
}

/** A newer version is offered, but the AR stays on its version until ACT chooses to update. */
export const NewerVersionAvailable: Story = {
  args: { value: clinicalReference(1), onChange: () => {} },
}

export const PinnedToDeprecatedVersion: Story = {
  args: { value: clinicalReference(2), onChange: () => {} },
}
