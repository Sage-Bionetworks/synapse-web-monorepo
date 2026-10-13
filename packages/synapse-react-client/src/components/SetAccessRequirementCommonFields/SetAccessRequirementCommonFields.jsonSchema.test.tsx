import { MOCK_NEWLY_CREATED_AR_ID } from '@/mocks/accessRequirement/mockAccessRequirements'
import { mockClinicalTemplate } from '@/mocks/accessRequirement/mockFormTemplates'
import { mockEditableJsonSchemaAR } from '@/mocks/accessRequirement/mockJsonSchemaAccessRequirements'
import { MOCK_FILE_ENTITY_ID } from '@/mocks/entity/mockFileEntity'
import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ACCESS_REQUIREMENT_BY_ID } from '@/utils/APIConstants'
import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  ACCESS_TYPE,
  JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { createRef } from 'react'
import SetAccessRequirementCommonFields, {
  SetAccessRequirementCommonFieldsHandle,
  SetAccessRequirementCommonFieldsProps,
} from '.'
import { SELECT_FORM_TEMPLATE_ERROR } from '../FormTemplateReferenceField/FormTemplateReferenceField'

const SCHEMA_DRIVEN_TYPE_LABEL =
  'Schema-driven - requests are in Synapse, using a form template'

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const onSave = vi.fn()
const onError = vi.fn()
const createAccessRequirementSpy = vi.spyOn(
  SynapseClient,
  'createAccessRequirement',
)
const updateAccessRequirementSpy = vi.spyOn(
  SynapseClient,
  'updateAccessRequirement',
)

const newEntityArProps: SetAccessRequirementCommonFieldsProps = {
  subject: { id: MOCK_FILE_ENTITY_ID, type: RestrictableObjectType.ENTITY },
  onSave,
  onError,
}
const existingJsonSchemaArProps: SetAccessRequirementCommonFieldsProps = {
  accessRequirementId: mockEditableJsonSchemaAR.id!.toString(),
  onSave,
  onError,
}

function setSchemaDrivenFeatureEnabled(enabled: boolean) {
  server.use(
    getFeatureFlagsOverride({
      portalOrigin: getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT),
      overrides: { [FeatureFlagEnum.ACT_DASHBOARD_FORM_TEMPLATES]: enabled },
    }),
  )
}

function serveJsonSchemaAccessRequirement() {
  server.use(
    http.get(`${REPO_ENDPOINT}${ACCESS_REQUIREMENT_BY_ID(':id')}`, () =>
      HttpResponse.json(mockEditableJsonSchemaAR, { status: 200 }),
    ),
  )
}

async function setUp(props: SetAccessRequirementCommonFieldsProps) {
  const user = userEvent.setup()
  const ref = createRef<SetAccessRequirementCommonFieldsHandle>()
  render(<SetAccessRequirementCommonFields ref={ref} {...props} />, {
    wrapper: createWrapper(),
  })
  const nameInput = await screen.findByRole('textbox', { name: 'Name' })
  return { ref, user, nameInput }
}

describe('SetAccessRequirementCommonFields for schema-driven access requirements', () => {
  beforeEach(() => vi.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('does not offer the schema-driven type when the feature is disabled', async () => {
    setSchemaDrivenFeatureEnabled(false)
    await setUp(newEntityArProps)

    await screen.findByRole('radio', { name: 'Click wrap' })
    expect(
      screen.queryByRole('radio', { name: SCHEMA_DRIVEN_TYPE_LABEL }),
    ).not.toBeInTheDocument()
  })

  test('requires a form template to create a schema-driven AR', async () => {
    setSchemaDrivenFeatureEnabled(true)
    const { ref, user, nameInput } = await setUp(newEntityArProps)

    await user.type(nameInput, 'Schema-driven AR')
    await user.click(
      await screen.findByRole('radio', { name: SCHEMA_DRIVEN_TYPE_LABEL }),
    )
    expect(
      await screen.findByRole('combobox', { name: 'Form template' }),
    ).toBeVisible()

    act(() => ref.current?.save())

    expect(await screen.findByText(SELECT_FORM_TEMPLATE_ERROR)).toBeVisible()
    expect(onError).toHaveBeenCalledTimes(1)
    expect(createAccessRequirementSpy).not.toHaveBeenCalled()
  })

  test('creates a schema-driven AR that references the selected form template version', async () => {
    setSchemaDrivenFeatureEnabled(true)
    const { ref, user, nameInput } = await setUp(newEntityArProps)

    await user.type(nameInput, 'Schema-driven AR')
    await user.click(
      await screen.findByRole('radio', { name: SCHEMA_DRIVEN_TYPE_LABEL }),
    )
    await user.click(
      await screen.findByRole('combobox', { name: 'Form template' }),
    )
    await user.click(
      await screen.findByRole('option', { name: mockClinicalTemplate.name }),
    )
    await screen.findByRole('combobox', { name: 'Template version' })

    act(() => ref.current?.save())

    await waitFor(() => {
      expect(createAccessRequirementSpy).toHaveBeenCalledExactlyOnceWith(
        MOCK_ACCESS_TOKEN,
        {
          concreteType: JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
          name: 'Schema-driven AR',
          subjectIds: [newEntityArProps.subject],
          accessType: ACCESS_TYPE.DOWNLOAD,
          subjectsDefinedByAnnotations: false,
          formTemplateRef: {
            templateId: mockClinicalTemplate.id,
            templateVersionNumber: mockClinicalTemplate.versionNumber,
          },
        },
      )
      expect(onSave).toHaveBeenCalledExactlyOnceWith(
        MOCK_NEWLY_CREATED_AR_ID.toString(),
        JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
      )
    })
  })

  test('saving an existing schema-driven AR keeps its pinned form template version', async () => {
    setSchemaDrivenFeatureEnabled(true)
    serveJsonSchemaAccessRequirement()
    const { ref } = await setUp(existingJsonSchemaArProps)

    await screen.findByRole('combobox', { name: 'Template version' })
    act(() => ref.current?.save())

    await waitFor(() => {
      expect(updateAccessRequirementSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        expect.objectContaining({
          formTemplateRef: mockEditableJsonSchemaAR.formTemplateRef,
        }),
      )
      expect(onSave).toHaveBeenCalledTimes(1)
    })
  })

  test('does not save an AR pinned to a deprecated form template version', async () => {
    setSchemaDrivenFeatureEnabled(true)
    serveJsonSchemaAccessRequirement()
    server.use(
      http.get(
        `${REPO_ENDPOINT}/repo/v1/accessRequirement/formTemplate/:id/version/:versionNumber`,
        () => HttpResponse.json({ ...mockClinicalTemplate, deprecated: true }),
      ),
    )
    const { ref } = await setUp(existingJsonSchemaArProps)

    await screen.findByText(/is deprecated/)
    act(() => ref.current?.save())

    expect(
      await screen.findByText(/so it cannot be referenced by an Access/),
    ).toBeVisible()
    expect(onError).toHaveBeenCalledTimes(1)
    expect(updateAccessRequirementSpy).not.toHaveBeenCalled()
  })

  test('leaves the form template reference untouched when the feature is disabled', async () => {
    setSchemaDrivenFeatureEnabled(false)
    serveJsonSchemaAccessRequirement()
    const { ref } = await setUp(existingJsonSchemaArProps)

    expect(
      screen.queryByRole('combobox', { name: 'Form template' }),
    ).not.toBeInTheDocument()
    act(() => ref.current?.save())

    await waitFor(() => {
      expect(updateAccessRequirementSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        expect.objectContaining({
          formTemplateRef: mockEditableJsonSchemaAR.formTemplateRef,
        }),
      )
    })
  })
})
