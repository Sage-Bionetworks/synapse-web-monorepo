import {
  mockManagedACTAccessRequirement,
  mockManagedACTAccessRequirementWikiPageKey,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import {
  MOCK_EMPTY_RESEARCH_PROJECT,
  MOCK_RESEARCH_PROJECT,
} from '@/mocks/dataaccess/MockResearchProject'
import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'
import * as SynapseClient from '@/synapse-client/SynapseClient'
import MarkdownSynapse from '../../../Markdown/MarkdownSynapse'
import * as AccessRequirementListUtils from '../../AccessRequirementListUtils'
import ResearchProjectForm, {
  ResearchProjectFormProps,
} from './ResearchProjectForm'

const MARKDOWN_SYNAPSE_TEST_ID = 'MarkdownSynapseContent'
vi.mock('../../../Markdown/MarkdownSynapse', () => ({
  __esModule: true,
  default: vi.fn(),
}))

const mockMarkdownSynapse = vi.mocked(MarkdownSynapse)
mockMarkdownSynapse.mockImplementation(
  () => (<div data-testid={MARKDOWN_SYNAPSE_TEST_ID} />) as any,
)

const CREATED_RESEARCH_PROJECT_ID = MOCK_RESEARCH_PROJECT.id

const validIduStatement = 'this must be at least 50 words long '.repeat(10)

vi.spyOn(SynapseClient, 'getResearchProject').mockImplementation(() =>
  Promise.resolve(MOCK_EMPTY_RESEARCH_PROJECT),
)

const mockSaveResearchProject = vi
  .spyOn(SynapseClient, 'updateResearchProject')
  .mockImplementation(submitted =>
    Promise.resolve({
      id: CREATED_RESEARCH_PROJECT_ID,
      ...submitted,
    }),
  )

vi.spyOn(SynapseClient, 'getWikiPageKeyForAccessRequirement').mockResolvedValue(
  mockManagedACTAccessRequirementWikiPageKey,
)

vi.spyOn(
  AccessRequirementListUtils,
  'useCanShowManagedACTWikiInWizard',
).mockReturnValue(true)

const mockOnSave = vi.fn()
const mockOnHide = vi.fn()

const defaultProps: ResearchProjectFormProps = {
  managedACTAccessRequirement: mockManagedACTAccessRequirement,
  onSave: mockOnSave,
  onHide: mockOnHide,
}

async function renderComponent(props: ResearchProjectFormProps) {
  let component
  // We must await asynchronous events for our assertions to pass
  // eslint-disable-next-line @typescript-eslint/require-await
  await act(async () => {
    component = render(<ResearchProjectForm {...props} />, {
      wrapper: createWrapper(),
    })
  })
  if (component) {
    return component
  } else {
    throw new Error('Error rendering component')
  }
}

async function clickSaveAndContinue(user: UserEvent) {
  // The button will appear twice, since there is a confirmation screen
  let saveChangesButton = await screen.findByRole('button', {
    name: 'Save and Continue',
  })
  await user.click(saveChangesButton)

  saveChangesButton = await screen.findByRole('button', {
    name: 'Save and Continue',
  })
  await user.click(saveChangesButton)
}

async function setUp(props: ResearchProjectFormProps) {
  const user = userEvent.setup()
  const component = await renderComponent(props)
  const projectLeadInput = await screen.findByLabelText(
    'First and last names of your project lead or PI',
    { exact: false },
  )
  const institutionInput = await screen.findByLabelText('Your Institution', {
    exact: false,
  })
  const iduInput = screen.queryByLabelText('Intended Data Use (IDU)', {
    exact: false,
  })
  const saveChangesButton = await screen.findByRole('button', {
    name: 'Save and Continue',
  })
  const cancelButton = await screen.findByRole('button', { name: 'Cancel' })
  return {
    component,
    user,
    projectLeadInput,
    institutionInput,
    iduInput,
    saveChangesButton,
    cancelButton,
  }
}

describe('ResearchProjectForm', { timeout: 30_000 }, () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('Prompts for a project lead and institution', async () => {
    const { user, projectLeadInput, institutionInput, iduInput } = await setUp({
      ...defaultProps,
      managedACTAccessRequirement: {
        ...mockManagedACTAccessRequirement,
        isIDURequired: false,
      },
    })
    expect(projectLeadInput).toBeInTheDocument()
    expect(institutionInput).toBeInTheDocument()
    expect(iduInput).not.toBeInTheDocument()

    // Ensure the server data has finished loading by checking that the inputs are not disabled
    await waitFor(() => {
      expect(projectLeadInput).not.toBeDisabled()
      expect(institutionInput).not.toBeDisabled()
    })

    const projectLead = 'My name'
    const institution = 'My institution'
    await user.type(projectLeadInput, projectLead)
    await user.type(institutionInput, institution)

    await clickSaveAndContinue(user)

    await waitFor(() => {
      expect(mockSaveResearchProject).toHaveBeenCalledWith(
        {
          ...MOCK_EMPTY_RESEARCH_PROJECT,
          projectLead,
          institution,
        },
        MOCK_ACCESS_TOKEN,
      )
      expect(mockOnSave).toHaveBeenCalledWith({
        ...MOCK_EMPTY_RESEARCH_PROJECT,
        id: CREATED_RESEARCH_PROJECT_ID,
        projectLead,
        institution,
      })
    })
  })
  it('Prompts for an IDU statement if required', async () => {
    const { user, projectLeadInput, institutionInput, iduInput } = await setUp({
      ...defaultProps,
      managedACTAccessRequirement: {
        ...mockManagedACTAccessRequirement,
        isIDURequired: true,
        isIDUPublic: false,
      },
    })
    expect(projectLeadInput).toBeInTheDocument()
    expect(institutionInput).toBeInTheDocument()
    expect(iduInput).toBeInTheDocument()

    // Ensure the server data has finished loading by checking that the inputs are not disabled
    await waitFor(() => {
      expect(projectLeadInput).not.toBeDisabled()
      expect(institutionInput).not.toBeDisabled()
      expect(iduInput).not.toBeDisabled()
    })

    const projectLead = 'My name'
    const institution = 'My institution'
    const idu = validIduStatement
    await user.type(projectLeadInput, projectLead)
    await user.type(institutionInput, institution)
    await user.type(iduInput!, idu)

    await clickSaveAndContinue(user)

    await waitFor(() => {
      expect(mockSaveResearchProject).toHaveBeenCalledWith(
        {
          ...MOCK_EMPTY_RESEARCH_PROJECT,
          projectLead,
          institution,
          intendedDataUseStatement: idu,
        },
        MOCK_ACCESS_TOKEN,
      )
      expect(mockOnSave).toHaveBeenCalledWith({
        ...MOCK_EMPTY_RESEARCH_PROJECT,
        id: CREATED_RESEARCH_PROJECT_ID,
        projectLead,
        institution,
        intendedDataUseStatement: idu,
      })
    })
  })

  it('informs the user if the IDU will be public', async () => {
    const { iduInput } = await setUp({
      ...defaultProps,
      managedACTAccessRequirement: {
        ...mockManagedACTAccessRequirement,
        isIDURequired: true,
        isIDUPublic: true,
      },
    })

    expect(iduInput).toBeInTheDocument()
    expect(iduInput).toHaveAccessibleDescription(
      'This will be visible to the public',
    )
  })

  it('Hides on the Cancel action', async () => {
    const { user, cancelButton } = await setUp({
      ...defaultProps,
      managedACTAccessRequirement: {
        ...mockManagedACTAccessRequirement,
        isIDURequired: true,
        isIDUPublic: false,
      },
    })

    await user.click(cancelButton)

    await waitFor(() => {
      expect(mockOnHide).toHaveBeenCalled()
      expect(mockSaveResearchProject).not.toHaveBeenCalled()
    })
  })

  it('Blocks the save button if the form is invalid', async () => {
    const {
      user,
      projectLeadInput,
      institutionInput,
      iduInput,
      saveChangesButton,
    } = await setUp({
      ...defaultProps,
      managedACTAccessRequirement: {
        ...mockManagedACTAccessRequirement,
        isIDURequired: true,
        isIDUPublic: false,
      },
    })

    await waitFor(() => {
      expect(projectLeadInput).not.toBeDisabled()
      expect(institutionInput).not.toBeDisabled()
      expect(iduInput).not.toBeDisabled()
    })

    // Nothing is filled out
    expect(saveChangesButton).toBeDisabled()

    // Fill everything out
    const projectLead = 'My name'
    const institution = 'My institution'
    await user.type(projectLeadInput, projectLead)
    await user.type(institutionInput, institution)
    await user.type(iduInput!, validIduStatement)

    expect(saveChangesButton).not.toBeDisabled()

    // Blocks when project lead is empty
    await user.clear(projectLeadInput)
    expect(saveChangesButton).toBeDisabled()
    await user.type(projectLeadInput, projectLead)

    // Blocks when institution is empty
    await user.clear(institutionInput)
    expect(saveChangesButton).toBeDisabled()
    await user.type(institutionInput, institution)

    // Blocks when IDU is empty
    await user.clear(iduInput!)
    expect(saveChangesButton).toBeDisabled()

    // Blocks when IDU is too short
    await user.type(iduInput!, 'short')
    expect(saveChangesButton).toBeDisabled()

    // Blocks when IDU is too long
    act(() => {
      // user.type takes too long for an input this large, so use fireEvent.input
      fireEvent.input(iduInput!, {
        target: {
          value: 'this is far too long for a valid idu statement '.repeat(51),
        },
      })
    })
    await waitFor(() => expect(saveChangesButton).toBeDisabled())

    // Unblocks when IDU is valid
    await user.clear(iduInput!)
    await user.type(iduInput!, validIduStatement)
  })

  it('Does not block save without IDU when IDU is not required', async () => {
    const {
      user,
      projectLeadInput,
      institutionInput,
      iduInput,
      saveChangesButton,
    } = await setUp({
      ...defaultProps,
      managedACTAccessRequirement: {
        ...mockManagedACTAccessRequirement,
        isIDURequired: false,
        isIDUPublic: false,
      },
    })

    await waitFor(() => {
      expect(projectLeadInput).not.toBeDisabled()
      expect(institutionInput).not.toBeDisabled()
      expect(iduInput).not.toBeInTheDocument()
    })

    // Fill everything out
    const projectLead = 'My name'
    const institution = 'My institution'
    await user.type(projectLeadInput, projectLead)
    await user.type(institutionInput, institution)

    expect(saveChangesButton).not.toBeDisabled()
  })

  it('Shows an error if saving fails', async () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {})
    const errorReason = 'Something went wrong'
    mockSaveResearchProject.mockImplementation(() => {
      throw new SynapseClientError(
        500,
        errorReason,
        expect.getState().currentTestName!,
      )
    })

    const { user, projectLeadInput, institutionInput, iduInput } = await setUp({
      ...defaultProps,
      managedACTAccessRequirement: {
        ...mockManagedACTAccessRequirement,
        isIDURequired: true,
        isIDUPublic: false,
      },
    })

    await waitFor(() => {
      expect(projectLeadInput).not.toBeDisabled()
      expect(institutionInput).not.toBeDisabled()
      expect(iduInput).not.toBeDisabled()
    })

    const projectLead = 'My name'
    const institution = 'My institution'
    const idu = validIduStatement
    await user.type(projectLeadInput, projectLead)
    await user.type(institutionInput, institution)
    await user.type(iduInput!, idu)

    await clickSaveAndContinue(user)

    await waitFor(() => {
      expect(mockSaveResearchProject).toHaveBeenCalledWith(
        {
          ...MOCK_EMPTY_RESEARCH_PROJECT,
          projectLead,
          institution,
          intendedDataUseStatement: idu,
        },
        MOCK_ACCESS_TOKEN,
      )
      expect(mockOnSave).not.toHaveBeenCalled()
      expect(mockOnHide).not.toHaveBeenCalled()
    })

    const alert = await screen.findByRole('alert')
    within(alert).getByText(errorReason)

    consoleErrorSpy.mockRestore()
  })

  it('Shows the AR wiki', async () => {
    await setUp({
      ...defaultProps,
    })

    await screen.findByTestId(MARKDOWN_SYNAPSE_TEST_ID)

    expect(mockMarkdownSynapse).toHaveBeenRenderedWithProps(
      expect.objectContaining({
        wikiId: mockManagedACTAccessRequirementWikiPageKey.wikiPageId,
        ownerId: mockManagedACTAccessRequirementWikiPageKey.ownerObjectId,
        objectType: mockManagedACTAccessRequirementWikiPageKey.ownerObjectType,
      }),
    )
  })
})
