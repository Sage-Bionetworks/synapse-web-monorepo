import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import {
  CreateProjectModal,
  CreateProjectModalProps,
} from '../../../lib/containers/CreateProjectModal'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../../lib/utils/SynapseContext'
import { MOCK_INVALID_PROJECT_NAME } from '../../../mocks/entity/mockEntity'
import mockProjectEntityData from '../../../mocks/entity/mockProject'
import { server } from '../../../mocks/msw/server'

const MOCK_PROJECT_NAME = mockProjectEntityData.name

const defaultProps: CreateProjectModalProps = {
  isShowingModal: true,
  onClose: jest.fn(),
}

function renderComponent(wrapperProps?: SynapseContextType) {
  render(<CreateProjectModal {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('CreateProjectModal tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Shows the modal', async () => {
    renderComponent()
    await screen.findByText('Create a new Project')
  })

  it('Creates project on submit', async () => {
    renderComponent()
    const input: HTMLInputElement = (await screen.findByTestId(
      'projectInput',
    )) as HTMLInputElement
    fireEvent.change(input, { target: { value: MOCK_PROJECT_NAME } })
    expect(input.value).toBe(MOCK_PROJECT_NAME)
    fireEvent.keyDown(input, { key: 'Enter' })

    // should show success alert
    await screen.findByText('Project created')
  })

  it('Shows error if creation fails', async () => {
    renderComponent()
    const input: HTMLInputElement = (await screen.findByTestId(
      'projectInput',
    )) as HTMLInputElement
    fireEvent.change(input, { target: { value: MOCK_INVALID_PROJECT_NAME } })
    expect(input.value).toBe(MOCK_INVALID_PROJECT_NAME)
    fireEvent.keyDown(input, { key: 'Enter' })

    // should show error alert
    await screen.findByText('Invalid project name')
  })
})
