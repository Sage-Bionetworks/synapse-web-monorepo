import React from 'react'
import ResearchProjectForm, {
  ResearchProjectFormProps,
} from './ResearchProjectForm'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createWrapper } from '../../../../testutils/TestingLibraryUtils'
import {
  mockManagedACTAccessRequirement,
  mockManagedACTAccessRequirementWikiPageKey,
} from '../../../../mocks/mockAccessRequirements'
import { SynapseClient } from '../../../../index'
import {
  MOCK_EMPTY_RESEARCH_PROJECT,
  MOCK_RESEARCH_PROJECT,
} from '../../../../mocks/dataaccess/MockResearchProject'
import { MOCK_ACCESS_TOKEN } from '../../../../mocks/MockSynapseContext'
import { SynapseClientError } from '../../../../utils/SynapseClientError'
import * as AccessRequirementListUtils from '../../AccessRequirementListUtils'
import MarkdownSynapse from '../../../Markdown/MarkdownSynapse'

const MARKDOWN_SYNAPSE_TEST_ID = 'MarkdownSynapseContent'
jest.mock('../../../Markdown/MarkdownSynapse', () => ({
  __esModule: true,
  default: jest.fn(),
}))

const mockMarkdownSynapse = jest.mocked(MarkdownSynapse)
mockMarkdownSynapse.mockImplementation(
  () => (<div data-testid={MARKDOWN_SYNAPSE_TEST_ID} />) as any,
)

const CREATED_RESEARCH_PROJECT_ID = MOCK_RESEARCH_PROJECT.id

jest
  .spyOn(SynapseClient, 'getResearchProject')
  .mockImplementation(() => Promise.resolve(MOCK_EMPTY_RESEARCH_PROJECT))

const mockSaveResearchProject = jest
  .spyOn(SynapseClient, 'updateResearchProject')
  .mockImplementation(submitted =>
    Promise.resolve({
      id: CREATED_RESEARCH_PROJECT_ID,
      ...submitted,
    }),
  )

jest
  .spyOn(SynapseClient, 'getWikiPageKeyForAccessRequirement')
  .mockResolvedValue(mockManagedACTAccessRequirementWikiPageKey)

jest
  .spyOn(AccessRequirementListUtils, 'useCanShowManagedACTWikiInWizard')
  .mockReturnValue(true)

const mockOnSave = jest.fn()
const mockOnHide = jest.fn()

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

async function setUp(props: ResearchProjectFormProps) {
  const user = userEvent.setup()
  const component = await renderComponent(props)
  const projectLeadInput = await screen.findByLabelText('Project Lead')
  const institutionInput = await screen.findByLabelText('Institution')
  const iduInput = screen.queryByLabelText('Intended Data Use Statement', {
    exact: false,
  })
  const saveChangesButton = await screen.findByRole('button', {
    name: 'Save changes',
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

describe('ResearchProjectForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Prompts for a project lead and institution', async () => {
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

    await user.click(saveChangesButton)

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
    const idu = "what I'm going to do with the data"
    await user.type(projectLeadInput, projectLead)
    await user.type(institutionInput, institution)
    await user.type(iduInput!, idu)

    await user.click(saveChangesButton)

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
    const willBePublicLabelledElement = await screen.findByLabelText(
      'this will be visible to the public',
      { exact: false },
    )
    expect(iduInput).toBe(willBePublicLabelledElement)
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

  it('Shows an error if saving fails', async () => {
    const consoleErrorSpy = jest
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

    const projectLead = 'My name'
    const institution = 'My institution'
    const idu = "what I'm going to do with the data"
    await user.type(projectLeadInput, projectLead)
    await user.type(institutionInput, institution)
    await user.type(iduInput!, idu)

    await user.click(saveChangesButton)

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

    expect(mockMarkdownSynapse).toHaveBeenCalledWith(
      expect.objectContaining({
        wikiId: mockManagedACTAccessRequirementWikiPageKey.wikiPageId,
        ownerId: mockManagedACTAccessRequirementWikiPageKey.ownerObjectId,
        objectType: mockManagedACTAccessRequirementWikiPageKey.ownerObjectType,
      }),
      expect.anything(),
    )
  })
})
