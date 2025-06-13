import { server } from '@/mocks/msw/server'
import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { EVALUATION, EVALUATION_BY_ID } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { Evaluation } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent, { PointerEventsCheckLevel } from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { EvaluationEditor, EvaluationEditorProps } from './EvaluationEditor'

describe('test EvaluationEditor', () => {
  const evaluationId = '1234'
  const entityId = 'syn1111111'
  let evaluation: Evaluation
  let props: EvaluationEditorProps

  const mockOnSaveSuccess = vi.fn()
  const mockOnDeleteSuccess = vi.fn()

  const onCreateEvaluation = vi.fn()
  const onUpdateEvaluation = vi.fn()
  const onDeleteEvaluation = vi.fn()
  let user: ReturnType<(typeof userEvent)['setup']>
  beforeAll(() => {
    server.listen()
    user = userEvent.setup({
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    })
  })
  beforeEach(() => {
    evaluation = {
      id: evaluationId,
      etag: 'eeeeeeeeeeeeeeeee',
      name: 'E V A L U A T I O N',
      description: 'This is an awesome queue',
      ownerId: MOCK_USER_ID.toString(),
      createdOn: '2020-09-18T09:44:04.939Z',
      contentSource: entityId,
      submissionInstructionsMessage: "no you can't just make a submission",
      submissionReceiptMessage: 'haha submission go brrrrrrrr',
    }

    props = {
      evaluationId: evaluationId,
      onDeleteSuccess: mockOnDeleteSuccess,
      onSaveSuccess: mockOnSaveSuccess,
    }

    server.use(
      // getEvaluation
      http.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${EVALUATION_BY_ID(
          ':evalId',
        )}`,
        () => {
          return HttpResponse.json(evaluation, { status: 200 })
        },
      ),
      // updateEvaluation
      http.put(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${EVALUATION_BY_ID(
          ':evalId',
        )}`,
        () => {
          onUpdateEvaluation()
          return HttpResponse.json(evaluation, { status: 200 })
        },
      ),

      // createEvaluation
      http.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${EVALUATION}`,
        () => {
          onCreateEvaluation()
          return HttpResponse.json(evaluation, { status: 201 })
        },
      ),

      // deleteEvaluation
      http.delete(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${EVALUATION_BY_ID(
          ':evalId',
        )}`,
        () => {
          onDeleteEvaluation()
          return new Response('', { status: 202 })
        },
      ),
    )
  })
  afterEach(() => {
    server.restoreHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => {
    server.close()
  })

  test('retrieve evaluation from API if evaluationId is provided', async () => {
    render(<EvaluationEditor {...props} />, {
      wrapper: createWrapper(),
    })

    await screen.findByText('Edit Evaluation Queue')

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  test('do not retrieve evaluation from API if id is not provided', async () => {
    props = { ...props, entityId, evaluationId: undefined }
    render(<EvaluationEditor {...props} />, {
      wrapper: createWrapper(),
    })

    await screen.findByText('Create Evaluation Queue')

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  test('retrieve evaluation from API failed', async () => {
    server.use(
      http.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${EVALUATION_BY_ID(
          ':evalId',
        )}`,
        () => {
          return HttpResponse.json(
            { reason: 'GetEvaluation error' },
            { status: 400 },
          )
        },
      ),
    )

    render(<EvaluationEditor {...props} />, {
      wrapper: createWrapper(),
    })

    within(await screen.findByRole('alert')).getByText('GetEvaluation error')
  })

  test('error thrown when using both evaluationId and entityId', () => {
    props = { ...props, entityId, evaluationId }

    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() =>
      render(<EvaluationEditor {...props} />, {
        wrapper: createWrapper(),
      }),
    ).toThrow(Error)

    consoleSpy.mockRestore()
  })

  test('save button clicked when using entityId creates new evaluation', async () => {
    props = { ...props, entityId, evaluationId: undefined }

    render(<EvaluationEditor {...props} />, {
      wrapper: createWrapper(),
    })

    const nameInputBox = await screen.findByLabelText('Name')
    await user.type(nameInputBox, 'E V A L U A T I O N')

    let saveButton = screen.getByRole('button', { name: 'Save' })
    await user.click(saveButton)

    await waitFor(() => expect(onCreateEvaluation).toHaveBeenCalled())
    expect(onUpdateEvaluation).not.toHaveBeenCalled()
    await waitFor(() =>
      expect(mockOnSaveSuccess).toHaveBeenCalledWith(evaluationId),
    )

    //clicking save button again after the first time should call update instead
    saveButton = screen.getByRole('button', { name: 'Save' })
    await user.click(saveButton)
    await waitFor(() => expect(onUpdateEvaluation).toHaveBeenCalled())
    expect(mockOnSaveSuccess).toHaveBeenCalledWith(evaluationId)

    const alert = await screen.findByRole('alert')
    expect(alert).toHaveClass('save-success-alert')
  })

  test('save button clicked when using evaluationId updates evaluation', async () => {
    render(<EvaluationEditor {...props} />, {
      wrapper: createWrapper(),
    })
    await screen.findByText('Edit Evaluation Queue')
    //clicking save button again after the first time should call update instead
    const saveButton = screen.getByRole('button', { name: 'Save' })
    await user.click(saveButton)
    await waitFor(() => expect(onUpdateEvaluation).toHaveBeenCalled())
    expect(onCreateEvaluation).not.toHaveBeenCalled()
    await waitFor(() =>
      expect(mockOnSaveSuccess).toHaveBeenCalledWith(evaluationId),
    )
    const alert = await screen.findByRole('alert')
    expect(alert).toHaveClass('save-success-alert')
  })

  test('save button clicked - save failure', async () => {
    server.use(
      http.put(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${EVALUATION_BY_ID(
          ':evalId',
        )}`,
        () => {
          onUpdateEvaluation()
          return HttpResponse.json(
            { reason: 'UpdateEvaluation error' },
            { status: 404 },
          )
        },
      ),
    )

    render(<EvaluationEditor {...props} />, {
      wrapper: createWrapper(),
    })

    await screen.findByText('Edit Evaluation Queue')

    //clicking save button again after the first time should call update instead
    const saveButton = screen.getByRole('button', { name: 'Save' })
    await user.click(saveButton)

    await waitFor(() => expect(onUpdateEvaluation).toHaveBeenCalled())
    expect(onCreateEvaluation).not.toHaveBeenCalled()
    const alert = await screen.findByRole('alert')
    expect(alert).not.toHaveClass('save-success-alert')
    within(alert).getByText('UpdateEvaluation error')
    expect(mockOnSaveSuccess).not.toHaveBeenCalled()
  })

  test('dropdown menu evaluation has no id - hide delete option', async () => {
    props = { ...props, entityId, evaluationId: undefined }

    render(<EvaluationEditor {...props} />, {
      wrapper: createWrapper(),
    })

    const dropdownToggle = await screen.findByRole('button', { name: '' })
    await user.click(dropdownToggle)

    // the warning modal for delete should not be instantiated at all
    const dropdownItems = await screen.findAllByRole('menuitem')
    expect(dropdownItems).toHaveLength(1)

    const saveOption = dropdownItems[0]
    within(saveOption).getByText('Save')
    await user.click(saveOption)

    await waitFor(() => expect(onCreateEvaluation).toHaveBeenCalled())
    expect(onUpdateEvaluation).not.toHaveBeenCalled()
  })

  test('dropdown menu evaluation has id - delete successful', async () => {
    render(<EvaluationEditor {...props} />, {
      wrapper: createWrapper(),
    })

    await screen.findByText('Edit Evaluation Queue')

    const dropdownToggle = await screen.findByRole('button', { name: '' })
    await user.click(dropdownToggle)

    const dropdownItems = await screen.findAllByRole('menuitem')
    expect(dropdownItems).toHaveLength(2)

    const saveOption = dropdownItems[0]
    within(saveOption).getByText('Save')
    await user.click(saveOption)
    await waitFor(() => expect(onUpdateEvaluation).toHaveBeenCalled())
    expect(onCreateEvaluation).not.toHaveBeenCalled()

    const deleteOption = dropdownItems[1]
    within(deleteOption).getByText('Delete')
    await user.click(deleteOption)

    const warningDialog = await screen.findByRole('dialog')

    //simulate the warning button click
    const deleteButton = await within(warningDialog).findByRole('button', {
      name: 'Delete',
    })
    await user.click(deleteButton)
    await waitFor(() => expect(onDeleteEvaluation).toHaveBeenCalled())
    await waitFor(() => expect(mockOnDeleteSuccess).toHaveBeenCalled())
  })

  test('dropdown menu evaluation has id - delete failed', async () => {
    server.use(
      http.delete(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${EVALUATION_BY_ID(
          ':evalId',
        )}`,
        () => {
          onDeleteEvaluation()
          return HttpResponse.json(
            { reason: 'DeleteEvaluation error' },
            { status: 400 },
          )
        },
      ),
    )
    render(<EvaluationEditor {...props} />, {
      wrapper: createWrapper(),
    })

    await screen.findByText('Edit Evaluation Queue')

    const dropdownToggle = await screen.findByRole('button', { name: '' })
    await user.click(dropdownToggle)

    const dropdownItems = await screen.findAllByRole('menuitem')
    expect(dropdownItems).toHaveLength(2)

    const saveOption = dropdownItems[0]
    within(saveOption).getByText('Save')
    await user.click(saveOption)
    await waitFor(() => expect(onUpdateEvaluation).toHaveBeenCalled())
    expect(onCreateEvaluation).not.toHaveBeenCalled()

    //delete should exist, but clicking it is predestined to fail
    const deleteOption = dropdownItems[1]
    within(deleteOption).getByText('Delete')
    await user.click(deleteOption)

    const dialog = await screen.findByRole('dialog')

    //simulate the warning button click
    const deleteButton = within(dialog).getByRole('button', { name: 'Delete' })
    await user.click(deleteButton)

    await screen.findByText('DeleteEvaluation error')
    expect(onDeleteEvaluation).toHaveBeenCalled()
    expect(mockOnDeleteSuccess).not.toHaveBeenCalled()

    const alert = await screen.findByRole('alert')
    expect(alert).not.toHaveClass('save-success-alert')
  })
})
