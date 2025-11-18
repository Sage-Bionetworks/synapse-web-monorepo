import { MOCK_INVALID_PROJECT_NAME } from '@/mocks/entity/mockEntity'
import mockProjectEntityData from '@/mocks/entity/mockProject'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/stores/SynapseContext/SynapseContext'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CANCEL_BUTTON_TEXT } from '../ConfirmationDialog/ConfirmationDialog'
import { CLOSE_BUTTON_LABEL } from '@/react-ui/components/DialogBase'
import {
  CreateProjectModal,
  CreateProjectModalProps,
} from './CreateProjectModal'

const MOCK_PROJECT_NAME = mockProjectEntityData.name

const defaultProps: CreateProjectModalProps = {
  isShowingModal: true,
  onClose: vi.fn(),
}

function renderComponent(wrapperProps?: SynapseContextType) {
  render(<CreateProjectModal {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

function setUp(wrapperProps?: SynapseContextType) {
  const user = userEvent.setup()
  const component = renderComponent(wrapperProps)
  const input = screen.getByRole<HTMLInputElement>('textbox', {
    name: /project name/i,
  })
  const saveButton = screen.getByRole('button', { name: /save/i })
  return { component, user, input, saveButton }
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
    const { user, input, saveButton } = setUp()

    await user.type(input, MOCK_PROJECT_NAME)
    expect(input.value).toBe(MOCK_PROJECT_NAME)
    await user.click(saveButton)

    // should show success alert
    await screen.findByText('Project created')
  })

  it('Creates project on enter', async () => {
    const { user, input } = setUp()

    await user.type(input, MOCK_PROJECT_NAME)
    expect(input.value).toBe(MOCK_PROJECT_NAME)
    await user.keyboard('{ENTER}')

    // should show success alert
    await screen.findByText('Project created')
  })

  it('Shows error if creation fails', async () => {
    const { user, input, saveButton } = setUp()

    await user.type(input, MOCK_INVALID_PROJECT_NAME)
    expect(input.value).toBe(MOCK_INVALID_PROJECT_NAME)
    await user.click(saveButton)

    // should show error alert
    await screen.findByText('Invalid project name')
  })

  it('Clears alert and project name on cancel', async () => {
    const { user, input, saveButton } = setUp()

    await user.type(input, MOCK_INVALID_PROJECT_NAME)
    await user.click(saveButton)

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent('Invalid project name')

    const cancelButton = screen.getByRole('button', {
      name: CANCEL_BUTTON_TEXT,
    })
    await user.click(cancelButton)

    expect(alert).not.toBeInTheDocument()
    expect(input.value).toBe('')
  })

  it('Clears alert and project name on closing dialog', async () => {
    const { user, input, saveButton } = setUp()

    await user.type(input, MOCK_INVALID_PROJECT_NAME)
    await user.click(saveButton)

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveTextContent('Invalid project name')

    const closeButton = screen.getByRole('button', { name: CLOSE_BUTTON_LABEL })
    await user.click(closeButton)

    expect(alert).not.toBeInTheDocument()
    expect(input.value).toBe('')
  })
})
