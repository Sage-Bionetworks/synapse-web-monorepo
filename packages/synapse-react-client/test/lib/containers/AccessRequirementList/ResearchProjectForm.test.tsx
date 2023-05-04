import * as React from 'react'
import ResearchProjectForm, {
  ResearchProjectFormProps,
} from '../../../../src/lib/containers/AccessRequirementList/ManagedACTAccessRequirementRequestFlow/ResearchProjectForm'
import {
  ACCESS_TYPE,
  ManagedACTAccessRequirement,
} from '../../../../src/lib/utils/synapseTypes'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { mockManagedACTAccessRequirement } from '../../../../mocks/mockAccessRequirements'
import { SynapseClient } from '../../../../src/lib'
import {
  MOCK_EMPTY_RESEARCH_PROJECT,
  MOCK_RESEARCH_PROJECT,
} from '../../../../mocks/dataaccess/MockResearchProject'
import { MOCK_ACCESS_TOKEN } from '../../../../mocks/MockSynapseContext'
import { SynapseClientError } from '../../../../src/lib/utils/SynapseClientError'

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
})
