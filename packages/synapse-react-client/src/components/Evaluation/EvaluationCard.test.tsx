import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent, { PointerEventsCheckLevel } from '@testing-library/user-event'
import SynapseClient from '../../synapse-client'
import {
  EvaluationCard,
  EvaluationCardProps,
  ExistingEvaluation,
} from './EvaluationCard'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { UserEvaluationPermissions } from '@sage-bionetworks/synapse-types'
import { server } from '../../mocks/msw/server'

describe('test Evaluation Card', () => {
  let permissions: UserEvaluationPermissions
  let evaluation: ExistingEvaluation
  let props: EvaluationCardProps

  let mockGetEvaluationPermissions: jest.Mock
  let mockDeleteEvaluation: jest.Mock

  let mockOnEdit: jest.Mock
  let mockOnModifyAccess: jest.Mock
  let mockOnSubmit: jest.Mock
  let mockOnDeleteSuccess: jest.Mock

  let user: ReturnType<(typeof userEvent)['setup']>

  beforeAll(() => {
    server.listen()
    user = userEvent.setup({
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    })
  })
  beforeEach(() => {
    evaluation = {
      id: '1234',
      etag: 'eeeeeeeeeeeeeeeee',
      name: 'E V A L U A T I O N',
      description: 'This is an awesome queue',
      ownerId: '1231231321',
      createdOn: '2020-09-18T09:44:04.939Z',
      contentSource: 'syn1111111',
      submissionInstructionsMessage: "no you can't just make a submission",
      submissionReceiptMessage: 'haha submission go brrrrrrrr',
    }

    permissions = {
      canChangePermissions: true,
      canDeleteSubmissions: true,
      canEditSubmissionStatuses: true,
      canParticipate: true,
      canPublicRead: true,
      canView: true,
      canViewPrivateSubmissionStatusAnnotations: true,
      ownerPrincipalId: 12345,
      canEdit: true,
      canSubmit: true,
      canDelete: true,
    }

    mockOnEdit = jest.fn()
    mockOnModifyAccess = jest.fn()
    mockOnSubmit = jest.fn()
    mockOnDeleteSuccess = jest.fn()

    props = {
      evaluation: evaluation,
      onEdit: mockOnEdit,
      onModifyAccess: mockOnModifyAccess,
      onSubmit: mockOnSubmit,
      onDeleteSuccess: mockOnDeleteSuccess,
    }

    mockGetEvaluationPermissions = jest.fn().mockResolvedValue(permissions)
    jest
      .spyOn(SynapseClient, 'getEvaluationPermissions')
      .mockImplementation(mockGetEvaluationPermissions)

    mockDeleteEvaluation = jest.fn().mockResolvedValue(null)
    jest
      .spyOn(SynapseClient, 'deleteEvaluation')
      .mockImplementation(mockDeleteEvaluation)
  })

  afterEach(() => {
    server.restoreHandlers()
    jest.clearAllMocks()
  })
  afterAll(() => server.close())

  test('retrieve evaluation permissions - failure', async () => {
    mockGetEvaluationPermissions.mockRejectedValue(
      new Error("OOPS! It's a error getting EvaluationPermission"),
    )

    render(<EvaluationCard {...props} />, {
      wrapper: createWrapper(),
    })

    within(await screen.findByRole('alert')).getByText(
      "OOPS! It's a error getting EvaluationPermission",
    )
  })

  test('all retrieve calls happy case', async () => {
    render(<EvaluationCard {...props} />, {
      wrapper: createWrapper(),
    })

    await screen.findByRole('heading', { name: 'E V A L U A T I O N (1234)' })
    screen.getByText("no you can't just make a submission")
    screen.getByText('This is an awesome queue')
    screen.getByText(/Created on .+ by/)
    screen.getByRole('button', { name: 'Submit' })

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  test('submit button not shown when user does not have permission', async () => {
    permissions.canSubmit = false

    render(<EvaluationCard {...props} />, {
      wrapper: createWrapper(),
    })

    await waitFor(() =>
      expect(
        screen.queryByRole('button', { name: 'Submit' }),
      ).not.toBeInTheDocument(),
    )
  })

  test('no permissions for any dropdown option - no dropdown shown', async () => {
    permissions.canEdit = false
    permissions.canChangePermissions = false
    permissions.canDelete = false

    render(<EvaluationCard {...props} />, {
      wrapper: createWrapper(),
    })

    await waitFor(() =>
      expect(
        screen.queryByRole('button', { name: 'Options' }),
      ).not.toBeInTheDocument(),
    )
  })

  test('no permissions for edit dropdown option - hide option', async () => {
    permissions.canEdit = false

    render(<EvaluationCard {...props} />, {
      wrapper: createWrapper(),
    })

    // Open the dropdown menu
    const dropdown = await screen.findByRole('button', { name: 'Options' })
    await user.click(dropdown)

    const dropdownItems = screen.getAllByRole('menuitem')
    expect(dropdownItems).toHaveLength(2)

    // Click "Modify Access"
    const modifyAccessOption = dropdownItems[0]
    within(modifyAccessOption).getByText('Modify Access')
    await user.click(modifyAccessOption)
    expect(mockOnModifyAccess).toHaveBeenCalled()

    // Click "Delete"
    const deleteOption = dropdownItems[1]
    within(deleteOption).getByText('Delete')
    await user.click(deleteOption)

    // Confirm delete
    const modal = screen.getByRole('dialog')
    const deleteButton = within(modal).getByRole('button', { name: 'Delete' })
    await userEvent.click(deleteButton)

    expect(mockDeleteEvaluation).toHaveBeenCalled()
    expect(mockOnDeleteSuccess).toHaveBeenCalled()
  })

  test('no permissions for modify access dropdown option - hide option', async () => {
    permissions.canChangePermissions = false

    render(<EvaluationCard {...props} />, {
      wrapper: createWrapper(),
    })

    // Open the dropdown menu
    const dropdown = await screen.findByRole('button', { name: 'Options' })
    await user.click(dropdown)

    const dropdownItems = screen.getAllByRole('menuitem')
    expect(dropdownItems).toHaveLength(2)

    // Click "Edit"
    const editOption = dropdownItems[0]
    within(editOption).getByText('Edit')
    await user.click(editOption)
    expect(mockOnEdit).toHaveBeenCalled()

    // Click "Delete"
    const deleteOption = dropdownItems[1]
    within(deleteOption).getByText('Delete')
    await user.click(deleteOption)

    // Confirm delete
    const modal = screen.getByRole('dialog')
    const deleteButton = within(modal).getByRole('button', { name: 'Delete' })
    await user.click(deleteButton)

    expect(mockDeleteEvaluation).toHaveBeenCalled()
    expect(mockOnDeleteSuccess).toHaveBeenCalled()
  })

  test('no permissions for delete dropdown option - hide option', async () => {
    permissions.canDelete = false

    render(<EvaluationCard {...props} />, {
      wrapper: createWrapper(),
    })

    // Open the dropdown menu
    const dropdown = await screen.findByRole('button', { name: 'Options' })
    await user.click(dropdown)

    const dropdownItems = screen.getAllByRole('menuitem')
    expect(dropdownItems).toHaveLength(2)

    // Click "Edit"
    const editOption = dropdownItems[0]
    within(editOption).getByText('Edit')
    await user.click(editOption)
    expect(mockOnEdit).toHaveBeenCalled()

    // Click "Modify Access"
    const modifyAccessOption = dropdownItems[1]
    within(modifyAccessOption).getByText('Modify Access')
    await user.click(modifyAccessOption)
    expect(mockOnModifyAccess).toHaveBeenCalled()
  })

  test('permissions for all dropdown options', async () => {
    render(<EvaluationCard {...props} />, {
      wrapper: createWrapper(),
    })

    // Open the dropdown menu
    const dropdown = await screen.findByRole('button', { name: 'Options' })
    await user.click(dropdown)

    const dropdownItems = screen.getAllByRole('menuitem')
    expect(dropdownItems).toHaveLength(3)

    // Click "Edit"
    const editOption = dropdownItems[0]
    within(editOption).getByText('Edit')
    await user.click(editOption)
    expect(mockOnEdit).toHaveBeenCalled()

    // Click "Modify Access"
    const modifyAccessOption = dropdownItems[1]
    within(modifyAccessOption).getByText('Modify Access')
    await user.click(modifyAccessOption)
    expect(mockOnModifyAccess).toHaveBeenCalled()

    // Click "Delete"
    const deleteOption = dropdownItems[2]
    within(deleteOption).getByText('Delete')
    await user.click(deleteOption)

    // Confirm delete
    const modal = screen.getByRole('dialog')
    const deleteButton = within(modal).getByRole('button', { name: 'Delete' })
    await user.click(deleteButton)

    expect(mockDeleteEvaluation).toHaveBeenCalled()
    expect(mockOnDeleteSuccess).toHaveBeenCalled()
  })

  test('Delete options API call failure - onDeleteSuccess callback not called', async () => {
    mockDeleteEvaluation.mockRejectedValue(
      new Error("OOPS! It's a error Deleting"),
    )

    render(<EvaluationCard {...props} />, {
      wrapper: createWrapper(),
    })

    // Open the dropdown menu
    const dropdown = await screen.findByRole('button', { name: 'Options' })
    await user.click(dropdown)

    const dropdownItems = screen.getAllByRole('menuitem')
    expect(dropdownItems).toHaveLength(3)

    // Click "Delete"
    const deleteOption = dropdownItems[2]
    within(deleteOption).getByText('Delete')
    await user.click(deleteOption)

    // Confirm delete
    const modal = screen.getByRole('dialog')
    const deleteButton = within(modal).getByRole('button', { name: 'Delete' })
    await user.click(deleteButton)

    expect(mockDeleteEvaluation).toHaveBeenCalled()
    expect(mockOnDeleteSuccess).not.toHaveBeenCalled()
  })
})
