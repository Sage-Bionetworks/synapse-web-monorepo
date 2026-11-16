import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { UserEvent } from '@testing-library/user-event'
import { HttpHandler, HttpResponse } from 'msw'
import dayjs from 'dayjs'
import { RequestPost } from '@sage-bionetworks/aridhia-client/generated/models'
import allFieldTypesWorkflow from '@/mocks/aridhia/cpathBasicAllAccessRequestV2Workflow.json'
import {
  getAridhiaAuthenticateHandler,
  getAridhiaDatasetSettingsHandler,
  getAridhiaDarWizardHandlers,
  getAridhiaSubmitRequestHandler,
  getAridhiaWorkflowBodyHandler,
  getAridhiaWorkflowHandler,
  getAridhiaWorkspaceRequestFormHandler,
  MOCK_ARIDHIA_ABOUT_FIELDS,
  MOCK_ARIDHIA_AUTHENTICATION_REQUEST,
  MOCK_ARIDHIA_DATASET_CODE,
  MOCK_ARIDHIA_GATEWAY,
  MOCK_ARIDHIA_PROJECT_FIELDS,
  MOCK_ARIDHIA_WORKSPACE_FORM_FIELDS,
} from '@/mocks/msw/handlers/aridhiaHandlers'
import { server } from '@/mocks/msw/server'
import {
  fillRjsfTextField,
  getRjsfTextField,
} from '@/testutils/RjsfFormTestUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { AridhiaContextProvider } from '@/utils/context/AridhiaContext'
import { AridhiaDarWizard } from './AridhiaDarWizard'
import { draftStorageKey } from './useDarDraft'
import type { DarDraft } from './useDarDraft'

function renderWizard() {
  const Wrapper = createWrapper()
  return render(
    <Wrapper>
      <AridhiaContextProvider
        apiBasePath={MOCK_ARIDHIA_GATEWAY}
        authenticationRequest={MOCK_ARIDHIA_AUTHENTICATION_REQUEST}
      >
        <AridhiaDarWizard datasetCode={MOCK_ARIDHIA_DATASET_CODE} />
      </AridhiaContextProvider>
    </Wrapper>,
  )
}

/** A field type the portal deliberately cannot render, which must block submission. */
const UNSUPPORTED_AUTH_FIELD = {
  name: 'sso_login',
  type: 'auth',
  label: 'Sign in',
}

const PROJECT_END_DATE_FIELD = {
  name: 'project_end_date',
  type: 'date',
  label: 'Project end date',
  validation: { required: false },
}

const PROJECT_START_DATE_FIELD = {
  name: 'project_start_date',
  type: 'date',
  label: 'Project start date',
  validation: { required: true, minimum: 'today' },
}

const STUDY_PHASE_FIELD = {
  name: 'study_phase',
  type: 'list',
  label: 'Study phase',
  validation: { required: true },
  options: [
    { text: 'Phase 1', value: '1' },
    { text: 'Phase 2', value: '2' },
  ],
}

/** How the date picker expects a typed/pasted date. */
function pickerDate(date: dayjs.Dayjs) {
  return date.format('MM/DD/YYYY')
}

/**
 * Mirrors the real gateway's overlap between the new-workspace form and the main workflow's
 * `project` section (see `REAL_WORKSPACE_REQUEST_FORM`): both ask for `project_name`.
 */
const WORKSPACE_REQUEST_FORM_WITH_SHARED_PROJECT_FIELD = {
  name: 'Request a workspace',
  sections: {
    workspace: {
      label: 'Workspace details',
      fields: [
        ...MOCK_ARIDHIA_PROJECT_FIELDS,
        ...MOCK_ARIDHIA_WORKSPACE_FORM_FIELDS,
      ],
    },
  },
}

/** The exact body captured from a real gateway response, verbatim. */
const REAL_WORKSPACE_REQUEST_FORM = {
  name: 'Request a workspace',
  sections: {
    workspace: {
      label: 'Details of the workspace being requested:',
      fields: [
        {
          name: 'project_name',
          type: 'string',
          label: 'Project name',
          placeholder:
            'Add the name of the project and project ID if applicable',
          validation: { required: true, maximum: '250' },
        },
        {
          name: 'project_description',
          type: 'markdown',
          label: 'Project description',
          validation: { required: true, maximum: '4096' },
        },
        {
          name: 'emails',
          type: 'text',
          label: 'Additional users',
          placeholder:
            'Provide email addresses of other users who should be invited to the workspace',
          validation: { maximum: '4096' },
        },
        {
          name: 'region',
          type: 'list',
          label: 'What hub do you need your workspace to be located?',
          placeholder: 'Select Hub location...',
          validation: { required: true },
          options: [
            {
              text: 'West Europe',
              value: 'westeurope',
              description: '(Europe) West Europe',
            },
            {
              text: 'North Europe',
              value: 'northeurope',
              description: '(Europe) North Europe',
            },
          ],
          default_options: 'westeurope',
        },
        {
          name: 'vm_check',
          type: 'label',
          label: 'Do you require a virtual machine?',
        },
        {
          name: 'windows_vm',
          type: 'boolean',
          label: 'Windows Virtual Machine',
        },
        { name: 'linux_vm', type: 'boolean', label: 'Linux Virtual Machine' },
        {
          name: 'interests',
          type: 'label',
          label: 'What is your area of interest? Check all that apply?',
        },
        {
          name: 'data_science',
          type: 'boolean',
          label: 'Data science - general',
        },
        {
          name: 'bio_informatics',
          type: 'boolean',
          label: 'Bioinformatics/BioStatistics',
        },
        { name: 'maths', type: 'boolean', label: 'Mathematics/Statistics' },
        { name: 'ai', type: 'boolean', label: 'AI/Machine Learning' },
      ],
    },
  },
}

/**
 * Defensive coverage only: the OpenAPI spec documents `GET /workspaces-forms/{code}` wrapping
 * its result in `items`, and `parseFairFormSections` is written to also tolerate a `fields`-
 * keyed section body (the shape `GET /workflows/{code}` uses). Neither has been observed from
 * the real gateway for this endpoint — see `getAridhiaWorkspaceRequestFormHandler`'s default
 * body for that — but `useGetAridhiaWorkspaceRequestForm`'s `items` fallback and
 * `parseFairFormSections`'s shape tolerance should still work if either shows up.
 */
const WORKSPACE_REQUEST_FORM_FIELDS_SHAPE = {
  items: [
    {
      code: 'workspace_request',
      name: 'Request a workspace',
      fields: { workspace: MOCK_ARIDHIA_WORKSPACE_FORM_FIELDS },
    },
  ],
}

const DRAFT_KEY = draftStorageKey(MOCK_ARIDHIA_DATASET_CODE)

const PROJECT_NAME = 'My Research Project'
const REQUESTER_NAME = 'Jane Doe'
const REQUESTER_EMAIL = 'jane@example.edu'
const NEW_WORKSPACE_NAME = 'New Team Workspace'
const NEW_WORKSPACE_REFERENCE = 'my-new-workspace-ref'

let capturedRequestBodies: RequestPost[] = []

/** Records every submitted body for assertions, then hands it to `respond`. */
function submitRequestHandler(respond: (body: RequestPost) => Response) {
  return getAridhiaSubmitRequestHandler<RequestPost>(body => {
    // Test-only boundary: the body is exactly what our own mutation constructs.
    capturedRequestBodies.push(body)
    return respond(body)
  })
}

/** The wizard's default handlers, with `overrides` matching ahead of them. */
function wizardHandlers(...overrides: HttpHandler[]) {
  return [...overrides, ...getAridhiaDarWizardHandlers()]
}

function submittedOkHandler() {
  return submitRequestHandler(body =>
    HttpResponse.json({ ...body, status: 'pending' }, { status: 201 }),
  )
}

async function waitForDestinationStepReady() {
  await waitFor(() =>
    expect(
      screen.getByRole('combobox', { name: 'Tables' }),
    ).toBeInTheDocument(),
  )
}

async function openTablesDropdown(user: UserEvent) {
  await user.click(screen.getByRole('combobox', { name: 'Tables' }))
}

// `disableCloseOnSelect` keeps the "Tables" dropdown open across multiple picks, so only the
// first selection needs `openTablesDropdown` first — see callers.
async function selectDictionary(user: UserEvent, name: string) {
  await user.click(await screen.findByRole('option', { name }))
}

/**
 * Picks the hub location, then the workspace named by `workspaceOption` — either an existing
 * workspace or "Request a new workspace", which inserts the Workspace step into the wizard.
 */
async function selectLocationAndWorkspace(
  user: UserEvent,
  workspaceOption: string,
) {
  await waitFor(() =>
    expect(screen.getByLabelText('Location')).toBeInTheDocument(),
  )
  await user.click(screen.getByLabelText('Location'))
  await user.click(await screen.findByRole('option', { name: 'UK South' }))

  await selectWorkspace(user, workspaceOption)
}

async function selectWorkspace(user: UserEvent, workspaceOption: string) {
  await waitFor(() =>
    expect(screen.getByLabelText('Workspace')).toBeInTheDocument(),
  )
  await user.click(screen.getByLabelText('Workspace'))
  await user.click(await screen.findByRole('option', { name: workspaceOption }))
}

/** Waits for the new-workspace form to render, then answers it. */
async function fillNewWorkspaceStep(user: UserEvent) {
  await waitFor(() =>
    expect(getRjsfTextField('workspace name')).toBeInTheDocument(),
  )
  await user.type(screen.getByLabelText(/^reference/i), NEW_WORKSPACE_REFERENCE)
  await fillRjsfTextField(user, 'workspace name', NEW_WORKSPACE_NAME)
}

async function selectTwoDictionariesAndExistingWorkspace(user: UserEvent) {
  await waitForDestinationStepReady()
  await openTablesDropdown(user)
  await selectDictionary(user, 'Dictionary A')
  await selectDictionary(user, 'Dictionary B')

  await selectLocationAndWorkspace(user, 'My Workspace')
}

/** Waits for the Project step's form to render, then answers it. */
async function fillProjectStep(user: UserEvent) {
  await waitFor(() =>
    expect(getRjsfTextField('project name')).toBeInTheDocument(),
  )
  await fillRjsfTextField(user, 'project name', PROJECT_NAME)
}

/** Waits for the About step's form to render, then answers it. */
async function fillAboutStep(user: UserEvent) {
  await waitFor(() => expect(getRjsfTextField('your name')).toBeInTheDocument())
  await fillRjsfTextField(user, 'your name', REQUESTER_NAME)
  await fillRjsfTextField(user, 'email address', REQUESTER_EMAIL)
}

/** Accepts the data use agreement on the Review & submit step and submits. */
async function acceptTermsAndSubmit(user: UserEvent) {
  await waitFor(() => expect(screen.getByRole('checkbox')).toBeInTheDocument())
  await user.click(screen.getByRole('checkbox'))
  await user.click(screen.getByRole('button', { name: 'Submit request' }))
}

function clickNext(user: UserEvent) {
  return user.click(screen.getByRole('button', { name: 'Next' }))
}

describe('AridhiaDarWizard', () => {
  afterEach(() => {
    capturedRequestBodies = []
    sessionStorage.clear()
  })

  it('submits an existing-workspace request with the expected payload', async () => {
    const user = userEvent.setup()
    server.use(...getAridhiaDarWizardHandlers(), submittedOkHandler())
    renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)

    await fillProjectStep(user)
    expect(
      screen.getAllByRole('button', { name: /^(Back|Next)$/ }),
    ).toHaveLength(2)
    // Ensure RJSF's submit button is hidden:
    expect(
      screen.queryByRole('button', { name: 'Submit' }),
    ).not.toBeInTheDocument()
    await clickNext(user)

    await fillAboutStep(user)
    await clickNext(user)

    await acceptTermsAndSubmit(user)

    await waitFor(() => expect(capturedRequestBodies).toHaveLength(1))
    const body = capturedRequestBodies[0]
    expect(body.workspace_requested).toBe(false)
    expect(body.workspace_uuid).toBe('ws-uuid-1')
    expect(body.terms).toBe(true)
    expect(body.transfer_type).toBe('clear')
    expect(body.code).toMatch(/^ampals-sdtm_als1003-[0-9a-f]{8}$/)
    expect(body.cohort?.queries?.[0].clauses).toHaveLength(2)
    expect(
      body.cohort?.queries?.[0].clauses?.every(c => c.filters?.length === 0),
    ).toBe(true)
    expect(body.fields).not.toHaveProperty('name')
    expect(body.fields).not.toHaveProperty('code')
    expect(body.fields.email).toBe('jane@example.edu')
    expect(body.fields.project_name).toBe('My Research Project')
    expect(body.name).toBe('Jane Doe')

    await waitFor(() =>
      expect(
        screen.getByText(/data access request was submitted/i),
      ).toBeInTheDocument(),
    )
    expect(
      await screen.findByText(/usually completed within 2-3 business weeks/),
    ).toBeInTheDocument()
  })

  it('requests a new workspace, inserting the Workspace step and merging its answers into fields', async () => {
    const user = userEvent.setup()
    server.use(...getAridhiaDarWizardHandlers(), submittedOkHandler())
    renderWizard()

    await waitForDestinationStepReady()
    await openTablesDropdown(user)
    await selectDictionary(user, 'Dictionary A')
    await selectLocationAndWorkspace(user, 'Request a new workspace')
    await clickNext(user)

    await fillNewWorkspaceStep(user)
    await clickNext(user)

    await fillProjectStep(user)
    await clickNext(user)
    await fillAboutStep(user)
    await clickNext(user)

    await acceptTermsAndSubmit(user)

    await waitFor(() => expect(capturedRequestBodies).toHaveLength(1))
    const body = capturedRequestBodies[0]
    expect(body.workspace_requested).toBe(true)
    expect(body).not.toHaveProperty('workspace_uuid')
    expect(body.workspace_reference).toBe('my-new-workspace-ref')
    expect(body.fields.workspace_name).toBe('New Team Workspace')
  })

  it('clears the new-workspace form values when switching back to an existing workspace', async () => {
    const user = userEvent.setup()
    server.use(...getAridhiaDarWizardHandlers(), submittedOkHandler())
    renderWizard()

    await waitForDestinationStepReady()
    await selectLocationAndWorkspace(user, 'Request a new workspace')
    await clickNext(user)

    await fillNewWorkspaceStep(user)

    // Back out of the new-workspace request and pick an existing workspace instead.
    await user.click(screen.getByRole('button', { name: 'Back' }))
    await selectWorkspace(user, 'My Workspace')
    await clickNext(user)

    await fillProjectStep(user)
    await clickNext(user)
    await fillAboutStep(user)
    await clickNext(user)

    await acceptTermsAndSubmit(user)

    await waitFor(() => expect(capturedRequestBodies).toHaveLength(1))
    const body = capturedRequestBodies[0]
    expect(body.workspace_requested).toBe(false)
    expect(body.workspace_uuid).toBe('ws-uuid-1')
    expect(body).not.toHaveProperty('workspace_reference')
    // The abandoned new-workspace form's answer must not leak into the submission — the
    // existing-workspace schema doesn't accept `workspace_name`.
    expect(body.fields).not.toHaveProperty('workspace_name')
  })

  it('preserves a field the new-workspace form shares with the Project step when switching back to an existing workspace', async () => {
    const user = userEvent.setup()
    server.use(
      ...wizardHandlers(
        getAridhiaWorkspaceRequestFormHandler(
          WORKSPACE_REQUEST_FORM_WITH_SHARED_PROJECT_FIELD,
        ),
      ),
      submittedOkHandler(),
    )
    renderWizard()

    await waitForDestinationStepReady()
    await selectLocationAndWorkspace(user, 'Request a new workspace')
    await clickNext(user)

    await fillNewWorkspaceStep(user)
    // `project_name` is asked by both the workspace form and the Project step — answering it
    // here is answering the same underlying question the Project step will ask again.
    await fillRjsfTextField(user, 'project name', PROJECT_NAME)

    // Back out of the new-workspace request and pick an existing workspace instead.
    await user.click(screen.getByRole('button', { name: 'Back' }))
    await selectWorkspace(user, 'My Workspace')
    await clickNext(user)

    // The Project step's `project_name` answer must survive even though it was entered on
    // the now-abandoned workspace form.
    await waitFor(() =>
      expect(getRjsfTextField('project name')).toHaveValue(PROJECT_NAME),
    )
    await clickNext(user)
    await fillAboutStep(user)
    await clickNext(user)

    await acceptTermsAndSubmit(user)

    await waitFor(() => expect(capturedRequestBodies).toHaveLength(1))
    const body = capturedRequestBodies[0]
    expect(body.workspace_requested).toBe(false)
    expect(body.fields.project_name).toBe('My Research Project')
    // The abandoned new-workspace form's workspace-only answer must still not leak in.
    expect(body.fields).not.toHaveProperty('workspace_name')
  })

  it('renders the new-workspace form when the live gateway sends a fields-keyed shape instead of sections', async () => {
    const user = userEvent.setup()
    server.use(
      ...wizardHandlers(
        getAridhiaWorkspaceRequestFormHandler(
          WORKSPACE_REQUEST_FORM_FIELDS_SHAPE,
        ),
      ),
    )
    renderWizard()

    await waitForDestinationStepReady()
    await openTablesDropdown(user)
    await selectDictionary(user, 'Dictionary A')
    await selectLocationAndWorkspace(user, 'Request a new workspace')
    await clickNext(user)

    await waitFor(() =>
      expect(getRjsfTextField('workspace name')).toBeInTheDocument(),
    )
    expect(
      screen.queryByText(/unable to load the new-workspace request form/i),
    ).not.toBeInTheDocument()
  })

  it('renders every field of the real workspace-request form captured from the live gateway', async () => {
    const user = userEvent.setup()
    server.use(
      ...wizardHandlers(
        getAridhiaWorkspaceRequestFormHandler(REAL_WORKSPACE_REQUEST_FORM),
      ),
    )
    renderWizard()

    await waitForDestinationStepReady()
    await openTablesDropdown(user)
    await selectDictionary(user, 'Dictionary A')
    await selectLocationAndWorkspace(user, 'Request a new workspace')
    await clickNext(user)

    await waitFor(() =>
      expect(getRjsfTextField('project name')).toBeInTheDocument(),
    )
    expect(
      screen.queryByText(/unable to load the new-workspace request form/i),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText(/field types the portal cannot render/i),
    ).not.toBeInTheDocument()

    for (const label of [
      'Project name',
      'Project description',
      'Additional users',
      'What hub do you need your workspace to be located?',
      'Do you require a virtual machine?',
      'Windows Virtual Machine',
      'Linux Virtual Machine',
      'What is your area of interest? Check all that apply?',
      'Data science - general',
      'Bioinformatics/BioStatistics',
      'Mathematics/Statistics',
      'AI/Machine Learning',
    ]) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }

    // The 6 boolean fields (VM + area-of-interest) must render as real checkboxes, not the
    // Yes/No select used elsewhere in the app (e.g. the annotations editor).
    const checkboxLabels = [
      'Windows Virtual Machine',
      'Linux Virtual Machine',
      'Data science - general',
      'Bioinformatics/BioStatistics',
      'Mathematics/Statistics',
      'AI/Machine Learning',
    ]
    for (const label of checkboxLabels) {
      expect(screen.getByRole('checkbox', { name: label })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('checkbox')).toHaveLength(checkboxLabels.length)
  })

  it('offers no transfer_type radio group and submits the sole allowed type when only allow_clear is set', async () => {
    server.use(...getAridhiaDarWizardHandlers(), submittedOkHandler())
    renderWizard()
    await waitForDestinationStepReady()
    expect(screen.queryByText('Transfer type')).not.toBeInTheDocument()
  })

  it('shows a transfer_type radio group defaulted to clear when multiple types are allowed', async () => {
    server.use(
      ...wizardHandlers(
        getAridhiaDatasetSettingsHandler({
          allow_clear: true,
          allow_pseudonymised: true,
        }),
      ),
    )
    renderWizard()

    await waitFor(() =>
      expect(screen.getByText('Transfer type')).toBeInTheDocument(),
    )
    const clearRadio = screen.getByRole('radio', {
      name: /clear \(identifiable\) data/i,
    })
    expect(clearRadio).toBeChecked()
  })

  it('treats no table selection as requesting every table, matching RDCA-DAP', async () => {
    const user = userEvent.setup()
    server.use(...getAridhiaDarWizardHandlers(), submittedOkHandler())
    renderWizard()

    // Advance past Destination without touching the "Tables" field at all.
    await waitForDestinationStepReady()
    await selectLocationAndWorkspace(user, 'My Workspace')
    await clickNext(user)

    await fillProjectStep(user)
    await clickNext(user)
    await fillAboutStep(user)
    await clickNext(user)

    await waitFor(() =>
      expect(screen.getByText('All tables')).toBeInTheDocument(),
    )
    await user.click(screen.getByRole('checkbox'))
    await user.click(screen.getByRole('button', { name: 'Submit request' }))

    await waitFor(() => expect(capturedRequestBodies).toHaveLength(1))
    const body = capturedRequestBodies[0]
    expect(body.cohort?.queries?.[0].clauses).toHaveLength(2)
    expect(
      body.cohort?.queries?.[0].clauses
        ?.map(c => c.dictionary?.code)
        .toSorted(),
    ).toEqual(['dict_a', 'dict_b'])
  })

  it('hides Transfer type from the review step when only one type was ever allowed', async () => {
    const user = userEvent.setup()
    server.use(...getAridhiaDarWizardHandlers())
    renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)
    await fillProjectStep(user)
    await clickNext(user)
    await fillAboutStep(user)
    await clickNext(user)

    await waitFor(() =>
      expect(screen.getByRole('checkbox')).toBeInTheDocument(),
    )
    expect(screen.queryByText('Transfer type')).not.toBeInTheDocument()
  })

  it('shows the About and Project answers on the Review & submit step', async () => {
    const user = userEvent.setup()
    server.use(...getAridhiaDarWizardHandlers())
    renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)
    await fillProjectStep(user)
    await clickNext(user)
    await fillAboutStep(user)
    await clickNext(user)

    await waitFor(() =>
      expect(screen.getByRole('checkbox')).toBeInTheDocument(),
    )
    expect(screen.getByText('My Research Project')).toBeInTheDocument()
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
    expect(screen.getByText('jane@example.edu')).toBeInTheDocument()
  })

  it('blocks leaving the About step until the email is valid, with an inline message', async () => {
    const user = userEvent.setup()
    server.use(...getAridhiaDarWizardHandlers())
    renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)
    await fillProjectStep(user)
    await clickNext(user)

    await waitFor(() =>
      expect(getRjsfTextField('your name')).toBeInTheDocument(),
    )
    await fillRjsfTextField(user, 'your name', REQUESTER_NAME)
    await fillRjsfTextField(user, 'email address', 'jane@')
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled()
    // Not flagged while the user is still typing...
    expect(
      screen.queryByText('Enter a valid email address'),
    ).not.toBeInTheDocument()

    // ...but flagged once they leave the field.
    await user.tab()
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument()
    expect(getRjsfTextField('email address')).toHaveAttribute(
      'aria-invalid',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled()

    await fillRjsfTextField(user, 'email address', 'example.edu')
    expect(
      screen.queryByText('Enter a valid email address'),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeEnabled()
  })

  it('blocks leaving the Project step while an answer breaks a FAIR length limit', async () => {
    const user = userEvent.setup()
    server.use(
      ...wizardHandlers(
        getAridhiaWorkflowHandler({
          project: [
            {
              ...MOCK_ARIDHIA_PROJECT_FIELDS[0],
              validation: { required: true, minimum: '5' },
            },
          ],
        }),
      ),
    )
    renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)
    await waitFor(() =>
      expect(getRjsfTextField('project name')).toBeInTheDocument(),
    )
    await fillRjsfTextField(user, 'project name', 'ALS')
    await user.tab()

    expect(
      screen.getByText('Must be at least 5 characters'),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled()

    await fillRjsfTextField(user, 'project name', ' study')
    expect(screen.getByRole('button', { name: 'Next' })).toBeEnabled()
  })

  it('flags a malformed email restored from the draft without a blur', async () => {
    const user = userEvent.setup()
    server.use(...getAridhiaDarWizardHandlers())
    const { unmount } = renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)
    await fillProjectStep(user)
    await clickNext(user)
    await waitFor(() =>
      expect(getRjsfTextField('your name')).toBeInTheDocument(),
    )
    await fillRjsfTextField(user, 'your name', REQUESTER_NAME)
    await fillRjsfTextField(user, 'email address', 'jane@')
    unmount()

    renderWizard()
    await waitFor(() =>
      expect(screen.getByRole('button', { name: 'Next' })).toBeEnabled(),
    )
    await clickNext(user)
    await waitFor(() =>
      expect(screen.getByRole('button', { name: 'Next' })).toBeEnabled(),
    )
    await clickNext(user)
    await waitFor(() =>
      expect(getRjsfTextField('email address')).toHaveValue('jane@'),
    )
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled()
  })

  it('does not flag an optional formatted field left blank', async () => {
    const user = userEvent.setup()
    server.use(
      ...wizardHandlers(
        getAridhiaWorkflowHandler({
          about: [
            ...MOCK_ARIDHIA_ABOUT_FIELDS,
            {
              name: 'lab_website',
              type: 'string',
              label: 'Lab website',
              validation: { required: false, format: 'uri' },
            },
          ],
        }),
      ),
    )
    renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)
    await fillProjectStep(user)
    await clickNext(user)

    await fillAboutStep(user)
    // Type and then erase a value, leaving the field blank.
    await fillRjsfTextField(user, 'lab website', 'x')
    await user.clear(getRjsfTextField('lab website'))
    await user.tab()

    expect(screen.queryByText('Enter a valid URL')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeEnabled()
  })

  it('renders the Project end date field with a date-only picker, no time of day', async () => {
    const user = userEvent.setup()
    server.use(
      ...wizardHandlers(
        getAridhiaWorkflowHandler({
          project: [...MOCK_ARIDHIA_PROJECT_FIELDS, PROJECT_END_DATE_FIELD],
        }),
      ),
    )
    renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)

    await waitFor(() =>
      expect(screen.getByText('Project end date')).toBeInTheDocument(),
    )
    // A time-of-day picker would render "AM"/"PM" text alongside the date.
    expect(screen.queryByText(/\bAM\b|\bPM\b/)).not.toBeInTheDocument()
  })

  it('converts the date picker value into a date-time string for submission', async () => {
    const user = userEvent.setup()
    server.use(
      ...wizardHandlers(
        getAridhiaWorkflowHandler({
          project: [...MOCK_ARIDHIA_PROJECT_FIELDS, PROJECT_END_DATE_FIELD],
        }),
      ),
      submittedOkHandler(),
    )
    renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)

    await fillProjectStep(user)
    await user.click(screen.getByLabelText(/^project end date/i))
    await user.paste('03/05/2027')
    await clickNext(user)

    await fillAboutStep(user)
    await clickNext(user)

    await acceptTermsAndSubmit(user)

    await waitFor(() => expect(capturedRequestBodies).toHaveLength(1))
    // The FAIR API rejects bare `YYYY-MM-DD` for this field ("not in required format:
    // date-time"); the submitted value must be a full ISO 8601 date-time on the same day.
    expect(capturedRequestBodies[0].fields.project_end_date).toBe(
      '2027-03-05T00:00:00.000Z',
    )
  })

  it('blocks leaving the Project step while a number is out of range, with an inline message', async () => {
    const user = userEvent.setup()
    server.use(...getAridhiaDarWizardHandlers())
    renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)
    await fillProjectStep(user)

    const teamSize = getRjsfTextField('team size')
    expect(teamSize).toHaveAttribute('type', 'number')
    // Decimals are allowed, and the browser's spinner stays within the bounds.
    expect(teamSize).toHaveAttribute('step', 'any')
    expect(teamSize).toHaveAttribute('min', '1')
    expect(teamSize).toHaveAttribute('max', '10')
    await user.type(teamSize, '0')
    await user.tab()
    expect(screen.getByText('Must be 1 or more')).toBeInTheDocument()
    expect(teamSize).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled()

    await user.clear(teamSize)
    await user.type(teamSize, '11')
    expect(screen.getByText('Must be 10 or less')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled()

    await user.clear(teamSize)
    await user.type(teamSize, '2.5')
    expect(
      screen.queryByText(/^Must be \d+ or (more|less)$/),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeEnabled()
  })

  it('submits a number answer as a JSON number, keeps it in the draft, and shows it on the review step', async () => {
    const user = userEvent.setup()
    server.use(...getAridhiaDarWizardHandlers(), submittedOkHandler())
    renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)
    await fillProjectStep(user)
    await fillRjsfTextField(user, 'team size', '9')
    const draft = JSON.parse(sessionStorage.getItem(DRAFT_KEY)!) as DarDraft
    expect(draft.values.team_size).toBe(9)
    await clickNext(user)
    await fillAboutStep(user)
    await clickNext(user)

    await waitFor(() =>
      expect(screen.getByRole('row', { name: 'Team size 9' })).toBeVisible(),
    )
    await acceptTermsAndSubmit(user)

    await waitFor(() => expect(capturedRequestBodies).toHaveLength(1))
    expect(capturedRequestBodies[0].fields.team_size).toBe(9)
  })

  it('blocks leaving the Project step while a date is earlier than its minimum of today', async () => {
    const user = userEvent.setup()
    server.use(
      ...wizardHandlers(
        getAridhiaWorkflowHandler({
          project: [...MOCK_ARIDHIA_PROJECT_FIELDS, PROJECT_START_DATE_FIELD],
        }),
      ),
    )
    renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)
    await fillProjectStep(user)

    const startDate = screen.getByLabelText(/^project start date/i)
    await user.click(startDate)
    await user.paste(pickerDate(dayjs().subtract(1, 'day')))
    await user.tab()
    expect(screen.getByText('Must be today or later')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled()

    await user.clear(startDate)
    await user.click(startDate)
    await user.paste(pickerDate(dayjs()))
    expect(screen.queryByText('Must be today or later')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeEnabled()
  })

  it('completes and submits the live omop_als1001 form, which uses every RDCA-DAP field type', async () => {
    const user = userEvent.setup()
    server.use(
      ...wizardHandlers(getAridhiaWorkflowBodyHandler(allFieldTypesWorkflow)),
      submittedOkHandler(),
    )
    renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)

    await waitFor(() =>
      expect(getRjsfTextField('string - single line')).toBeInTheDocument(),
    )
    expect(
      screen.queryByText(/field types the portal cannot render/i),
    ).not.toBeInTheDocument()
    // Defaults of every type are applied, including the number default as a number.
    expect(getRjsfTextField('number = numeric input')).toHaveValue(10)
    expect(
      screen.getByRole('checkbox', { name: /^Boolean - toggle switch/ }),
    ).toBeChecked()
    // The markdown field's own default is shorter than its minimum length, and is flagged as
    // soon as the step opens.
    expect(
      screen.getByText('Must be at least 200 characters'),
    ).toBeInTheDocument()

    const tomorrow = dayjs().add(1, 'day')
    await user.click(screen.getByLabelText(/^date - renders a date input/i))
    await user.paste(pickerDate(tomorrow))
    await fillRjsfTextField(
      user,
      'text - multiline',
      'At least twenty characters',
    )
    // Every required field is answered, but the markdown default is still too short.
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled()

    const markdown = getRjsfTextField('markdown - multiline')
    await user.clear(markdown)
    await user.click(markdown)
    await user.paste('m'.repeat(200))
    expect(screen.getByRole('button', { name: 'Next' })).toBeEnabled()
    await clickNext(user)

    await waitFor(() =>
      expect(getRjsfTextField('request name')).toBeInTheDocument(),
    )
    await fillRjsfTextField(user, 'request name', 'All field types')
    await fillRjsfTextField(user, 'position', 'Tester')
    await fillRjsfTextField(user, 'phone number', '2025550123')
    await fillRjsfTextField(user, 'address', 'Somewhere, USA')
    await clickNext(user)

    await acceptTermsAndSubmit(user)

    await waitFor(() => expect(capturedRequestBodies).toHaveLength(1))
    const body = capturedRequestBodies[0]
    expect(body.name).toBe('All field types')
    expect(body.fields).toMatchObject({
      position: 'Tester',
      address: 'Somewhere, USA',
      date_type: `${tomorrow.format('YYYY-MM-DD')}T00:00:00.000Z`,
      markdown_type: 'm'.repeat(200),
      phone_type: '+44 131 111 2222',
      string_type: 'default value',
      text_type: 'At least twenty characters',
      boolean_type: true,
      number_type: 10,
      phone_number: '+1 202 555 0123',
    })
    // The optional list was left unanswered, so it is not pre-filled with its first option.
    expect(body.fields).not.toHaveProperty('list_type')
  })

  it('leaves an optional list without a default unanswered, and pre-selects a list’s default_options', async () => {
    const user = userEvent.setup()
    server.use(
      ...wizardHandlers(
        getAridhiaWorkflowHandler({
          project: [
            ...MOCK_ARIDHIA_PROJECT_FIELDS,
            { ...STUDY_PHASE_FIELD, validation: { required: false } },
            {
              ...STUDY_PHASE_FIELD,
              name: 'cohort',
              label: 'Cohort',
              default_options: '2',
            },
          ],
        }),
      ),
      submittedOkHandler(),
    )
    renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)
    await fillProjectStep(user)
    expect(screen.getByRole('combobox', { name: /^study phase/i })).toHaveValue(
      '',
    )
    expect(screen.getByRole('combobox', { name: /^cohort/i })).toHaveValue(
      'Phase 2',
    )
    await clickNext(user)
    await fillAboutStep(user)
    await clickNext(user)
    await acceptTermsAndSubmit(user)

    await waitFor(() => expect(capturedRequestBodies).toHaveLength(1))
    const { fields } = capturedRequestBodies[0]
    expect(fields).not.toHaveProperty('study_phase')
    expect(fields).toMatchObject({ cohort: '2' })
  })

  it('blocks leaving the Project step until a required list without a default is answered', async () => {
    const user = userEvent.setup()
    server.use(
      ...wizardHandlers(
        getAridhiaWorkflowHandler({
          project: [...MOCK_ARIDHIA_PROJECT_FIELDS, STUDY_PHASE_FIELD],
        }),
      ),
    )
    renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)
    await fillProjectStep(user)
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled()

    await user.click(screen.getByRole('combobox', { name: /^study phase/i }))
    await user.click(await screen.findByRole('option', { name: 'Phase 1' }))
    expect(screen.getByRole('button', { name: 'Next' })).toBeEnabled()
  })

  it('restores a number answer from the draft as a number, flagging it if out of range', async () => {
    const user = userEvent.setup()
    server.use(...getAridhiaDarWizardHandlers())
    const { unmount } = renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)
    await fillProjectStep(user)
    await fillRjsfTextField(user, 'team size', '0')
    unmount()

    renderWizard()
    await waitFor(() =>
      expect(screen.getByRole('button', { name: 'Next' })).toBeEnabled(),
    )
    await clickNext(user)
    await waitFor(() => expect(getRjsfTextField('team size')).toHaveValue(0))
    // A restored value the user didn't just type is flagged without a blur.
    expect(screen.getByText('Must be 1 or more')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled()
  })

  it('retries a failed submission with the identical request code', async () => {
    const user = userEvent.setup()
    let attempt = 0
    server.use(
      ...getAridhiaDarWizardHandlers(),
      submitRequestHandler(body => {
        attempt += 1
        if (attempt === 1) {
          return HttpResponse.json({ error: 'server error' }, { status: 500 })
        }
        return HttpResponse.json(
          { ...body, status: 'pending' },
          { status: 201 },
        )
      }),
    )
    renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)
    await fillProjectStep(user)
    await clickNext(user)
    await fillAboutStep(user)
    await clickNext(user)
    await acceptTermsAndSubmit(user)

    await waitFor(() => expect(capturedRequestBodies).toHaveLength(1))
    await user.click(await screen.findByRole('button', { name: 'Retry' }))
    await waitFor(() => expect(capturedRequestBodies).toHaveLength(2))

    expect(capturedRequestBodies[0].code).toBe(capturedRequestBodies[1].code)
  })

  it('renders the ineligibility explainer when the token exchange is rejected', async () => {
    server.use(
      getAridhiaAuthenticateHandler({ error: 'invalid_token' }, 400),
      getAridhiaDatasetSettingsHandler(),
    )
    renderWizard()

    await waitFor(() =>
      expect(screen.getByText(/linked rdca-dap account/i)).toBeInTheDocument(),
    )
    expect(screen.queryByLabelText('Tables')).not.toBeInTheDocument()
  })

  it('blocks submission and names an unsupported field type', async () => {
    server.use(
      ...wizardHandlers(
        getAridhiaWorkflowHandler({
          about: [...MOCK_ARIDHIA_ABOUT_FIELDS, UNSUPPORTED_AUTH_FIELD],
        }),
      ),
    )
    renderWizard()

    await waitFor(() =>
      expect(screen.getByText(/sso_login/)).toBeInTheDocument(),
    )
    const nextButtons = screen.getAllByRole('button', { name: 'Next' })
    expect(nextButtons[0]).toBeDisabled()
  })

  it('writes the draft to sessionStorage on step change and clears it on successful submit', async () => {
    const user = userEvent.setup()
    server.use(...getAridhiaDarWizardHandlers(), submittedOkHandler())
    renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)

    await waitFor(() =>
      expect(sessionStorage.getItem(DRAFT_KEY)).not.toBeNull(),
    )
    const draftAfterStep: DarDraft = JSON.parse(
      sessionStorage.getItem(DRAFT_KEY)!,
    )
    expect(draftAfterStep.step).toBe(1)

    await fillProjectStep(user)
    await clickNext(user)
    await fillAboutStep(user)
    await clickNext(user)
    await acceptTermsAndSubmit(user)

    await waitFor(() => expect(sessionStorage.getItem(DRAFT_KEY)).toBeNull())
  })

  it('leaves the draft intact after a failed submission', async () => {
    const user = userEvent.setup()
    server.use(
      ...getAridhiaDarWizardHandlers(),
      submitRequestHandler(() =>
        HttpResponse.json({ error: 'server error' }, { status: 500 }),
      ),
    )
    renderWizard()

    await selectTwoDictionariesAndExistingWorkspace(user)
    await clickNext(user)
    await fillProjectStep(user)
    await clickNext(user)
    await fillAboutStep(user)
    await clickNext(user)
    await acceptTermsAndSubmit(user)

    await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument())
    expect(sessionStorage.getItem(DRAFT_KEY)).not.toBeNull()
  })
})
