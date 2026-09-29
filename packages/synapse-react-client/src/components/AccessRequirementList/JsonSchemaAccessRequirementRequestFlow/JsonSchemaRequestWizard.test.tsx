import {
  mockJsonSchemaAR1,
  mockJsonSchemaAR2,
} from '@/mocks/accessRequirement/mockJsonSchemaAccessRequirements'
import {
  mockClinicalSchema,
  mockGenomicsSchema,
} from '@/mocks/accessRequirement/mockJsonSchemas'
import { getRegisteredSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SUBMISSION_CONTEXT_PROPERTY } from '@/utils/jsonschema/submissionContext'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  JsonSchemaAccessRequirement,
  Renewal,
  Request,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JSONSchema7 } from 'json-schema'
import { http, HttpResponse } from 'msw'
import JsonSchemaRequestWizard, {
  FIRST_CLASS_FIELDS_STEP_LABEL,
  JsonSchemaRequestWizardProps,
} from './JsonSchemaRequestWizard'

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const genomicsAccessRequirement =
  mockJsonSchemaAR1 as unknown as JsonSchemaAccessRequirement
const clinicalAccessRequirement =
  mockJsonSchemaAR2 as unknown as JsonSchemaAccessRequirement

const REQUEST_ID = '9100'
const SUBMISSION_ID = '5551212'

function createRequest(
  accessRequirement: JsonSchemaAccessRequirement,
  overrides: Partial<Request> = {},
): Request {
  return {
    id: REQUEST_ID,
    accessRequirementId: String(accessRequirement.id),
    researchProjectId: '',
    irbFileHandleId: '',
    createdOn: '2026-01-01T00:00:00.000Z',
    modifiedOn: '2026-01-01T00:00:00.000Z',
    createdBy: '1',
    modifiedBy: '1',
    accessorChanges: [],
    etag: 'etag-0',
    concreteType: 'org.sagebionetworks.repo.model.dataaccess.Request',
    ...overrides,
  }
}

function createRenewal(
  accessRequirement: JsonSchemaAccessRequirement,
): Renewal {
  return {
    ...createRequest(accessRequirement),
    concreteType: 'org.sagebionetworks.repo.model.dataaccess.Renewal',
  }
}

/**
 * Serves the request for the access requirement, records what is saved to it, and creates a submission (or rejects it)
 */
function mockRequestServices(
  accessRequirement: JsonSchemaAccessRequirement,
  initialRequest: Request | Renewal,
  options: { submissionRejection?: string } = {},
) {
  let currentRequest = initialRequest
  const savedRequests: Array<Request | Renewal> = []
  const submissionRequests: unknown[] = []
  server.use(
    ...getRegisteredSchemaHandlers(REPO_ENDPOINT, [
      mockGenomicsSchema as JSONSchema7,
      mockClinicalSchema as JSONSchema7,
    ]),
    http.get(
      `${REPO_ENDPOINT}/repo/v1/accessRequirement/${accessRequirement.id}/dataAccessRequestForUpdate`,
      () => HttpResponse.json(currentRequest),
    ),
    http.post(
      `${REPO_ENDPOINT}/repo/v1/dataAccessRequest`,
      async ({ request }) => {
        const body = (await request.json()) as Request | Renewal
        currentRequest = { ...body, etag: `etag-${savedRequests.length + 1}` }
        savedRequests.push(currentRequest)
        return HttpResponse.json(currentRequest)
      },
    ),
    http.post(
      `${REPO_ENDPOINT}/repo/v1/dataAccessRequest/:requestId/submission`,
      async ({ request }) => {
        submissionRequests.push(await request.json())
        if (options.submissionRejection) {
          return HttpResponse.json(
            { reason: options.submissionRejection },
            { status: 400 },
          )
        }
        return HttpResponse.json({ submissionId: SUBMISSION_ID })
      },
    ),
  )
  return { savedRequests, submissionRequests }
}

function renderWizard(
  accessRequirement: JsonSchemaAccessRequirement,
  overrides: Partial<JsonSchemaRequestWizardProps> = {},
) {
  const props: JsonSchemaRequestWizardProps = {
    accessRequirement,
    subjectId: 'syn123',
    subjectType: RestrictableObjectType.ENTITY,
    onHide: vi.fn(),
    onCancel: vi.fn(),
    onSubmissionCreated: vi.fn(),
    ...overrides,
  }
  render(<JsonSchemaRequestWizard {...props} />, {
    wrapper: createWrapper(),
  })
  return props
}

async function chooseTrue(user: ReturnType<typeof userEvent.setup>) {
  await user.click(await screen.findByRole('combobox'))
  await user.click(await screen.findByRole('option', { name: 'true' }))
}

async function advanceToStep(user: ReturnType<typeof userEvent.setup>) {
  await user.click(await screen.findByRole('button', { name: 'Next' }))
}

describe('JsonSchemaRequestWizard', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('shows the requester information followed by the template steps, in order', async () => {
    mockRequestServices(
      genomicsAccessRequirement,
      createRequest(genomicsAccessRequirement),
    )
    const user = userEvent.setup()
    renderWizard(genomicsAccessRequirement)

    await screen.findByText(FIRST_CLASS_FIELDS_STEP_LABEL, {
      selector: '.MuiStepLabel-label',
    })
    const stepLabels = Array.from(
      document.querySelectorAll('.MuiStepLabel-label'),
    ).map(label => label.textContent)
    expect(stepLabels).toEqual([
      FIRST_CLASS_FIELDS_STEP_LABEL,
      'Research Use',
      'Agreements',
    ])

    await advanceToStep(user)
    expect(await screen.findByRole('textbox')).toBeVisible()
    expect(screen.queryByRole('combobox')).not.toBeInTheDocument()
  })

  it('does not advance past a step with a missing required answer', async () => {
    const { savedRequests } = mockRequestServices(
      genomicsAccessRequirement,
      createRequest(genomicsAccessRequirement),
    )
    const user = userEvent.setup()
    renderWizard(genomicsAccessRequirement)
    await advanceToStep(user)
    await screen.findByRole('textbox')
    const savesBeforeNext = savedRequests.length

    await user.click(screen.getByRole('button', { name: 'Next' }))

    expect(await screen.findAllByText(/required/i)).not.toHaveLength(0)
    expect(screen.queryByRole('combobox')).not.toBeInTheDocument()
    expect(savedRequests).toHaveLength(savesBeforeNext)
  })

  it('submits the answers with the submission context and confirms the submission', async () => {
    const { savedRequests, submissionRequests } = mockRequestServices(
      genomicsAccessRequirement,
      createRequest(genomicsAccessRequirement),
    )
    const user = userEvent.setup()
    const props = renderWizard(genomicsAccessRequirement)
    await advanceToStep(user)
    await user.type(await screen.findByRole('textbox'), 'Studying the genome')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await chooseTrue(user)
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    await waitFor(() =>
      expect(props.onSubmissionCreated).toHaveBeenCalledWith(SUBMISSION_ID),
    )
    expect(savedRequests.at(-1)?.schemaData).toEqual({
      intendedDataUse: 'Studying the genome',
      agreeToTerms: true,
      [SUBMISSION_CONTEXT_PROPERTY]: 'REQUEST',
    })
    expect(submissionRequests).toEqual([
      expect.objectContaining({
        requestId: REQUEST_ID,
        requestEtag: savedRequests.at(-1)?.etag,
      }),
    ])
  })

  it('shows the server message and keeps the answers when the submission is rejected', async () => {
    const rejection = 'The intended data use is too vague'
    mockRequestServices(
      genomicsAccessRequirement,
      createRequest(genomicsAccessRequirement),
      { submissionRejection: rejection },
    )
    const user = userEvent.setup()
    const props = renderWizard(genomicsAccessRequirement)
    await advanceToStep(user)
    await user.type(await screen.findByRole('textbox'), 'Studying the genome')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await chooseTrue(user)
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    await screen.findByText(rejection)
    expect(props.onSubmissionCreated).not.toHaveBeenCalled()
    await user.click(screen.getByRole('button', { name: 'Back' }))
    expect(await screen.findByRole('textbox')).toHaveValue(
      'Studying the genome',
    )
  })

  it('restores answers saved to the request', async () => {
    mockRequestServices(
      genomicsAccessRequirement,
      createRequest(genomicsAccessRequirement, {
        schemaData: { intendedDataUse: 'Saved answer' },
      }),
    )
    const user = userEvent.setup()
    renderWizard(genomicsAccessRequirement)
    await advanceToStep(user)

    expect(await screen.findByRole('textbox')).toHaveValue('Saved answer')
  })

  it.each([
    { requestType: 'request', shown: false, request: createRequest },
    { requestType: 'renewal', shown: true, request: createRenewal },
  ])(
    'shows renewal-only questions only for a renewal ($requestType)',
    async ({ shown, request }) => {
      mockRequestServices(
        clinicalAccessRequirement,
        request(clinicalAccessRequirement),
      )
      const user = userEvent.setup()
      renderWizard(clinicalAccessRequirement)
      await advanceToStep(user)
      await user.type(await screen.findByRole('textbox'), 'Trial')
      await user.click(screen.getByRole('button', { name: 'Next' }))

      await screen.findByText('Provide any required compliance documentation.')
      if (shown) {
        expect(await screen.findByRole('textbox')).toBeVisible()
      } else {
        expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
      }
    },
  )

  it('does not allow submission while a question requires a file upload', async () => {
    mockRequestServices(
      clinicalAccessRequirement,
      createRequest(clinicalAccessRequirement),
    )
    const user = userEvent.setup()
    renderWizard(clinicalAccessRequirement)
    await advanceToStep(user)
    await user.type(await screen.findByRole('textbox'), 'Trial')
    await user.click(screen.getByRole('button', { name: 'Next' }))

    await screen.findByText(/file upload questions/)
    expect(screen.getByRole('button', { name: 'Submit' })).toBeDisabled()
  })

  it('saves the answers and continues to the eDUC steps instead of submitting', async () => {
    const eDucAccessRequirement = {
      ...genomicsAccessRequirement,
      eDucTemplateId: 'educ-1',
    }
    const { savedRequests, submissionRequests } = mockRequestServices(
      eDucAccessRequirement,
      createRequest(eDucAccessRequirement, {
        institution: 'Sage',
        principalInvestigator: {
          name: 'Pat Investigator',
          userId: '2',
          institutionalEmail: 'pat@sage.org',
        },
        signingOfficial: {
          name: 'Sam Official',
          institutionalEmail: 'sam@sage.org',
        },
      }),
    )
    const user = userEvent.setup()
    const props = renderWizard(eDucAccessRequirement, {
      onEDucContinue: vi.fn(),
    })
    await advanceToStep(user)
    await user.type(await screen.findByRole('textbox'), 'Studying the genome')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await chooseTrue(user)
    await user.click(screen.getByRole('button', { name: 'Continue' }))

    await waitFor(() => expect(props.onEDucContinue).toHaveBeenCalled())
    expect(savedRequests.at(-1)?.schemaData).toMatchObject({
      intendedDataUse: 'Studying the genome',
    })
    expect(submissionRequests).toHaveLength(0)
  })
})
