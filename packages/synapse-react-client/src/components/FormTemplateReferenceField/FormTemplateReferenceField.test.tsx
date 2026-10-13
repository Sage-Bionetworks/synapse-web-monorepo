import { useGetFormTemplateVersion } from '@/synapse-queries/dataaccess/useFormTemplate'
import { mockClinicalTemplate } from '@/mocks/accessRequirement/mockFormTemplates'
import {
  mockClinicalSchema,
  mockGenomicsSchema,
} from '@/mocks/accessRequirement/mockJsonSchemas'
import { getFormTemplateSearchUrl } from '@/mocks/msw/handlers/formTemplateHandlers'
import { getRegisteredSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { FormTemplate } from '@sage-bionetworks/synapse-client'
import {
  render,
  renderHook,
  screen,
  waitFor,
  within,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JSONSchema7 } from 'json-schema'
import { http, HttpResponse } from 'msw'
import {
  FormTemplateReferenceField,
  SELECT_FORM_TEMPLATE_ERROR,
  useFormTemplateReferenceError,
} from './FormTemplateReferenceField'

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const TEMPLATE_URL = `${REPO_ENDPOINT}/repo/v1/accessRequirement/formTemplate`

const version = (
  versionNumber: number,
  overrides: Partial<FormTemplate> = {},
): FormTemplate => ({
  ...mockClinicalTemplate,
  versionNumber,
  ...overrides,
})

/** Serves every given version of mockClinicalTemplate; the highest version number is the latest. */
function serveTemplateVersions(versions: FormTemplate[]) {
  const latest = versions.reduce((a, b) =>
    a.versionNumber! > b.versionNumber! ? a : b,
  )
  server.use(
    http.get(`${TEMPLATE_URL}/:id`, () => HttpResponse.json(latest)),
    http.get(`${TEMPLATE_URL}/:id/version/:versionNumber`, ({ params }) => {
      const found = versions.find(
        v => String(v.versionNumber) === params.versionNumber,
      )
      return found
        ? HttpResponse.json(found)
        : HttpResponse.json({ reason: 'Not found' }, { status: 404 })
    }),
    ...getRegisteredSchemaHandlers(REPO_ENDPOINT, [
      mockClinicalSchema as JSONSchema7,
      mockGenomicsSchema as JSONSchema7,
    ]),
  )
}

const onChange = vi.fn()
const reference = (templateVersionNumber: number) => ({
  templateId: mockClinicalTemplate.id!,
  templateVersionNumber,
})

describe('FormTemplateReferenceField', () => {
  beforeEach(() => vi.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('shows the pinned template, its version, and its schema', async () => {
    serveTemplateVersions([version(1), version(2)])
    render(
      <FormTemplateReferenceField value={reference(2)} onChange={onChange} />,
      { wrapper: createWrapper() },
    )

    await waitFor(() =>
      expect(
        screen.getByRole('combobox', { name: 'Form template' }),
      ).toHaveValue(mockClinicalTemplate.name),
    )
    expect(
      await screen.findByText(mockClinicalTemplate.schema$id),
    ).toBeVisible()
    expect(
      screen.getByRole('combobox', { name: 'Template version' }),
    ).toHaveTextContent('Version 2 (latest)')
  })

  test('lists versions newest first and disables deprecated versions', async () => {
    const user = userEvent.setup()
    serveTemplateVersions([
      version(1),
      version(2, { deprecated: true }),
      version(3),
    ])
    render(
      <FormTemplateReferenceField value={reference(1)} onChange={onChange} />,
      { wrapper: createWrapper() },
    )

    await user.click(
      await screen.findByRole('combobox', { name: 'Template version' }),
    )
    const options = await screen.findAllByRole('option')
    await waitFor(() => expect(options).toHaveLength(3))
    expect(options.map(o => o.textContent)).toEqual([
      'Version 3 (latest)',
      'Version 2 (deprecated)',
      'Version 1',
    ])
    expect(options[1]).toHaveAttribute('aria-disabled', 'true')

    await user.click(options[0])
    expect(onChange).toHaveBeenCalledWith(reference(3))
  })

  test('offers a newer version without adopting it', async () => {
    const user = userEvent.setup()
    serveTemplateVersions([version(1), version(2)])
    render(
      <FormTemplateReferenceField value={reference(1)} onChange={onChange} />,
      { wrapper: createWrapper() },
    )

    const update = await screen.findByRole('button', {
      name: 'Update to version 2',
    })
    expect(onChange).not.toHaveBeenCalled()

    await user.click(update)
    expect(onChange).toHaveBeenCalledExactlyOnceWith(reference(2))
  })

  test('does not offer an update when the pinned version is the latest', async () => {
    serveTemplateVersions([version(1), version(2)])
    render(
      <FormTemplateReferenceField value={reference(2)} onChange={onChange} />,
      { wrapper: createWrapper() },
    )

    await screen.findByText(mockClinicalTemplate.schema$id)
    await screen.findByRole('combobox', { name: 'Template version' })
    expect(
      screen.queryByRole('button', { name: /Update to version/ }),
    ).not.toBeInTheDocument()
  })

  test('does not offer an update to a deprecated latest version', async () => {
    serveTemplateVersions([version(1), version(2, { deprecated: true })])
    render(
      <FormTemplateReferenceField value={reference(1)} onChange={onChange} />,
      { wrapper: createWrapper() },
    )

    await screen.findByText(mockClinicalTemplate.schema$id)
    await waitFor(() =>
      expect(
        screen.getByRole('combobox', { name: 'Template version' }),
      ).toHaveTextContent('Version 1'),
    )
    expect(
      screen.queryByRole('button', { name: /Update to version/ }),
    ).not.toBeInTheDocument()
  })

  test('warns when the pinned version is deprecated', async () => {
    serveTemplateVersions([version(1, { deprecated: true }), version(2)])
    render(
      <FormTemplateReferenceField value={reference(1)} onChange={onChange} />,
      { wrapper: createWrapper() },
    )

    expect(
      await screen.findByText(/Version 1 of this form template is deprecated/),
    ).toBeVisible()
  })

  test('selecting a template pins its latest version', async () => {
    const user = userEvent.setup()
    serveTemplateVersions([version(1), version(4)])
    server.use(
      http.post(getFormTemplateSearchUrl(REPO_ENDPOINT), () =>
        HttpResponse.json({ results: [version(4)] }),
      ),
    )
    render(
      <FormTemplateReferenceField value={undefined} onChange={onChange} />,
      {
        wrapper: createWrapper(),
      },
    )

    await user.click(
      await screen.findByRole('combobox', { name: 'Form template' }),
    )
    await user.click(
      await screen.findByRole('option', { name: mockClinicalTemplate.name }),
    )

    expect(onChange).toHaveBeenCalledExactlyOnceWith(reference(4))
    // Nothing is pinned until the parent supplies a value
    expect(
      screen.queryByRole('combobox', { name: 'Template version' }),
    ).not.toBeInTheDocument()
  })

  test('previews the pinned version of the form', async () => {
    const user = userEvent.setup()
    serveTemplateVersions([version(1), version(2)])
    render(
      <FormTemplateReferenceField value={reference(1)} onChange={onChange} />,
      { wrapper: createWrapper() },
    )

    await user.click(
      await screen.findByRole('button', { name: 'Preview form' }),
    )

    const dialog = await screen.findByRole('dialog')
    expect(
      within(dialog).getByText(
        `Preview: ${mockClinicalTemplate.name} (version 1)`,
      ),
    ).toBeVisible()
    expect(
      await within(dialog).findByRole('button', {
        name: mockClinicalTemplate.steps[0].title,
      }),
    ).toBeVisible()
  })

  test('shows the error supplied by the parent', async () => {
    serveTemplateVersions([version(1)])
    render(
      <FormTemplateReferenceField
        value={undefined}
        onChange={onChange}
        error={SELECT_FORM_TEMPLATE_ERROR}
      />,
      { wrapper: createWrapper() },
    )

    expect(await screen.findByText(SELECT_FORM_TEMPLATE_ERROR)).toBeVisible()
  })
})

describe('useFormTemplateReferenceError', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('requires a reference', () => {
    const { result } = renderHook(
      () => useFormTemplateReferenceError(undefined),
      {
        wrapper: createWrapper(),
      },
    )
    expect(result.current).toBe(SELECT_FORM_TEMPLATE_ERROR)
  })

  test('accepts a reference to a version that exists and is not deprecated', async () => {
    serveTemplateVersions([version(1)])
    const { result } = renderHook(
      () => ({
        error: useFormTemplateReferenceError(reference(1)),
        version: useGetFormTemplateVersion(mockClinicalTemplate.id, 1),
      }),
      { wrapper: createWrapper() },
    )
    await waitFor(() => expect(result.current.version.data).toBeDefined())
    expect(result.current.error).toBeUndefined()
  })

  test('rejects a reference to a version that does not exist', async () => {
    serveTemplateVersions([version(1)])
    const { result } = renderHook(
      () => useFormTemplateReferenceError(reference(7)),
      { wrapper: createWrapper() },
    )
    await waitFor(() =>
      expect(result.current).toContain(
        `Version 7 of the form template with the id '${mockClinicalTemplate.id}' could not be loaded`,
      ),
    )
  })

  test('rejects a reference to a deprecated version', async () => {
    serveTemplateVersions([version(1, { deprecated: true })])
    const { result } = renderHook(
      () => useFormTemplateReferenceError(reference(1)),
      { wrapper: createWrapper() },
    )
    await waitFor(() => expect(result.current).toContain('is deprecated'))
  })
})
