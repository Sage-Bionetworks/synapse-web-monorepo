import React from 'react'
import ResearchProjectForm, {
  ResearchProjectFormProps,
} from '../../../src/components/AccessRequirementList/ManagedACTAccessRequirementRequestFlow/ResearchProjectForm'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  mockManagedACTAccessRequirement,
  mockManagedACTAccessRequirementWikiPageKey,
} from '../../../mocks/mockAccessRequirements'
import { SynapseClient } from '../../../src'
import {
  MOCK_EMPTY_RESEARCH_PROJECT,
  MOCK_RESEARCH_PROJECT,
} from '../../../mocks/dataaccess/MockResearchProject'
import { MOCK_ACCESS_TOKEN } from '../../../mocks/MockSynapseContext'
import { SynapseClientError } from '../../../src/utils/SynapseClientError'
import * as AccessRequirementListUtils from '../../../src/components/AccessRequirementList/AccessRequirementListUtils'
import * as MarkdownSynapseModule from '../../../src/components/Markdown/MarkdownSynapse'

const CREATED_RESEARCH_PROJECT_ID = MOCK_RESEARCH_PROJECT.id

const mockGetResearchProjectForUpdate = jest
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

const MARKDOWN_SYNAPSE_TEST_ID = 'MarkdownSynapseContent'

const mockMarkdownSynapse = jest
  .spyOn(MarkdownSynapseModule, 'default')
  .mockReturnValue(<div data-testid={MARKDOWN_SYNAPSE_TEST_ID}></div>)

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
  await act(() => {
    render(<ResearchProjectForm {...props} />, {
      wrapper: createWrapper(),
    })
  })
}

async function setUp(props: ResearchProjectFormProps) {
  const user = userEvent.setup()
  const component = await renderComponent(props)
  const projectLeadInput = screen.getByLabelText('Project Lead')
  const institutionInput = screen.getByLabelText('Institution')
  const iduInput = screen.queryByLabelText('Intended Data Use Statement', {
    exact: false,
  })
  const saveChangesButton = screen.getByRole('button', {
    name: 'Save changes',
  })
  const cancelButton = screen.getByRole('button', { name: 'Cancel' })
  const wiki = screen.queryByTestId(MARKDOWN_SYNAPSE_TEST_ID)
  return {
    component,
    user,
    projectLeadInput,
    institutionInput,
    iduInput,
    saveChangesButton,
    cancelButton,
    wiki,
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

    const projectLead = 'My name'
    const institution = 'My institution'
    const idu = "what I'm going to do with the data"
    await user.type(projectLeadInput, projectLead)
    await user.type(institutionInput, institution)
    await user.type(iduInput, idu)

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
        expect.getState().currentTestName,
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

    const projectLead = 'My name'
    const institution = 'My institution'
    const idu = "what I'm going to do with the data"
    await user.type(projectLeadInput, projectLead)
    await user.type(institutionInput, institution)
    await user.type(iduInput, idu)

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
    const { wiki } = await setUp({
      ...defaultProps,
    })

    expect(wiki).toBeInTheDocument()
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
