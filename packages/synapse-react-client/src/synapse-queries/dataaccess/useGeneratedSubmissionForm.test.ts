import { mockClinicalTemplate } from '@/mocks/accessRequirement/mockFormTemplates'
import { mockClinicalSchema } from '@/mocks/accessRequirement/mockJsonSchemas'
import {
  mockSchemaDataAndFirstClassSubmission,
  mockSchemaDataSubmission,
} from '@/mocks/dataaccess/MockSubmission'
import { getRegisteredSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import { server } from '@/mocks/msw/server'
import {
  createWrapper,
  createWrapperAndQueryClient,
} from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { FormTemplate } from '@sage-bionetworks/synapse-client'
import { renderHook, waitFor } from '@testing-library/react'
import { JSONSchema7 } from 'json-schema'
import { http, HttpResponse } from 'msw'
import {
  GeneratedSubmissionForm,
  MissingFormTemplateRefError,
  useGeneratedSubmissionForm,
} from './useGeneratedSubmissionForm'

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const templateVersion2: FormTemplate = {
  ...mockClinicalTemplate,
  versionNumber: 2,
  steps: [{ ...mockClinicalTemplate.steps[0], title: 'Renamed in v2' }],
}

function registerTemplateVersions(versions: FormTemplate[]) {
  const requestedVersions: string[] = []
  server.use(
    http.get(
      `${REPO_ENDPOINT}/repo/v1/accessRequirement/formTemplate/:id/version/:versionNumber`,
      ({ params }) => {
        requestedVersions.push(String(params.versionNumber))
        const template = versions.find(
          t =>
            t.id === params.id &&
            String(t.versionNumber) === params.versionNumber,
        )
        return template
          ? HttpResponse.json(template)
          : HttpResponse.json({ reason: 'Not found' }, { status: 404 })
      },
    ),
    ...getRegisteredSchemaHandlers(REPO_ENDPOINT, [
      mockClinicalSchema as JSONSchema7,
    ]),
  )
  return requestedVersions
}

function stepPropertyKeys(form: GeneratedSubmissionForm | undefined) {
  return form!.steps.flatMap(s => Object.keys(s.jsonSchema.properties ?? {}))
}

describe('useGeneratedSubmissionForm', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('stays idle for a submission without schemaData, even when it records a template', () => {
    registerTemplateVersions([mockClinicalTemplate])
    const { schemaData: _omitted, ...submissionWithoutSchemaData } =
      mockSchemaDataSubmission
    const { wrapperFn, queryClient } = createWrapperAndQueryClient()

    const { result } = renderHook(
      () => useGeneratedSubmissionForm(submissionWithoutSchemaData),
      { wrapper: wrapperFn },
    )

    expect(result.current).toEqual({
      form: undefined,
      isLoading: false,
      error: undefined,
    })
    expect(queryClient.isFetching()).toBe(0)
  })

  it('generates steps from the template version recorded on the submission, not the latest', async () => {
    const requestedVersions = registerTemplateVersions([
      mockClinicalTemplate,
      templateVersion2,
    ])

    const { result } = renderHook(
      () => useGeneratedSubmissionForm(mockSchemaDataSubmission),
      { wrapper: createWrapper() },
    )

    await waitFor(() => expect(result.current.form).toBeDefined())
    expect(requestedVersions).toEqual(['1'])
    expect(result.current.form!.steps.map(s => s.jsonSchema.title)).toEqual([
      'Project Details',
      'Compliance',
    ])
    expect(result.current.form!.schema).toEqual(mockClinicalSchema)
  })

  it('omits renewal-only fields for an initial request', async () => {
    registerTemplateVersions([mockClinicalTemplate])

    const { result } = renderHook(
      () => useGeneratedSubmissionForm(mockSchemaDataSubmission),
      { wrapper: createWrapper() },
    )

    await waitFor(() => expect(result.current.form).toBeDefined())
    expect(stepPropertyKeys(result.current.form)).not.toContain(
      'irbApprovalNumber',
    )
  })

  it('includes renewal-only fields for a renewal submission', async () => {
    registerTemplateVersions([mockClinicalTemplate])

    const { result } = renderHook(
      () => useGeneratedSubmissionForm(mockSchemaDataAndFirstClassSubmission),
      { wrapper: createWrapper() },
    )

    await waitFor(() => expect(result.current.form).toBeDefined())
    expect(stepPropertyKeys(result.current.form)).toContain('irbApprovalNumber')
  })

  it('reports an error when the submission has schemaData but no template reference', () => {
    registerTemplateVersions([mockClinicalTemplate])
    const { formTemplateRef: _omitted, ...submissionWithoutRef } =
      mockSchemaDataSubmission
    const { wrapperFn, queryClient } = createWrapperAndQueryClient()

    const { result } = renderHook(
      () => useGeneratedSubmissionForm(submissionWithoutRef),
      { wrapper: wrapperFn },
    )

    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBeInstanceOf(MissingFormTemplateRefError)
    expect(queryClient.isFetching()).toBe(0)
  })

  it('surfaces a failure to fetch the template', async () => {
    registerTemplateVersions([])

    const { result } = renderHook(
      () => useGeneratedSubmissionForm(mockSchemaDataSubmission),
      { wrapper: createWrapper() },
    )

    await waitFor(() => expect(result.current.error).toBeDefined())
    expect(result.current.form).toBeUndefined()
  })
})
