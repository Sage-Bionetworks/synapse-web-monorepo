import {
  render,
  screen,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import JestMockPromise from 'jest-mock-promise'
import dayjs, { Dayjs } from 'dayjs'
import duration from 'dayjs/plugin/duration'
import {
  EvaluationRoundEditor,
  EvaluationRoundEditorProps,
  HelpersToTest,
} from './EvaluationRoundEditor'
import {
  EvaluationRoundInput,
  EvaluationRoundLimitInput,
} from './input_models/models'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import SynapseClient from '../../synapse-client'
import { EvaluationRound } from '@sage-bionetworks/synapse-types'
import { MOCK_CONTEXT_VALUE } from '../../mocks/MockSynapseContext'

dayjs.extend(duration)

describe('test EvaluationRoundEditor', () => {
  let props: EvaluationRoundEditorProps
  let mockOnDelete: jest.Mock
  let mockOnSave: jest.Mock

  let mockCreateEvaluationRound: jest.Mock
  let mockUpdateEvaluationRound: jest.Mock
  let mockDeleteEvaluationRound: jest.Mock

  const fakeEvaluationRoundInput: EvaluationRoundInput = {
    otherLimits: [],
    reactListKey: 'fake key',
    totalSubmissionLimit: '121221',
    evaluationId: '12321',
    roundStart: '123123',
    roundEnd: '1231232',
  }

  beforeEach(() => {
    mockOnDelete = jest.fn()
    mockOnSave = jest.fn()

    mockCreateEvaluationRound = jest.fn(
      () => new JestMockPromise(resolve => resolve(fakeEvaluationRoundInput)),
    )
    mockUpdateEvaluationRound = jest.fn(
      () => new JestMockPromise(resolve => resolve(fakeEvaluationRoundInput)),
    )
    mockDeleteEvaluationRound = jest.fn(
      () => new JestMockPromise(resolve => resolve()),
    )

    jest
      .spyOn(SynapseClient, 'createEvaluationRound')
      .mockImplementation(mockCreateEvaluationRound)
    jest
      .spyOn(SynapseClient, 'updateEvaluationRound')
      .mockImplementation(mockUpdateEvaluationRound)

    jest
      .spyOn(SynapseClient, 'deleteEvaluationRound')
      .mockImplementation(mockDeleteEvaluationRound)

    props = {
      evaluationRoundInput: {
        reactListKey: 'SOME FAKE KEY',
        evaluationId: '123',
        roundStart: '1970-01-01T00:00:00Z',
        roundEnd: '1970-12-01T00:00:00Z',
        totalSubmissionLimit: '',
        otherLimits: [],
      },
      onDelete: mockOnDelete,
      onSave: mockOnSave,
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('test clicking advanced limits link', async () => {
    render(<EvaluationRoundEditor {...props} />, { wrapper: createWrapper() })

    //initially not shown
    expect(
      screen.queryByTestId('EvaluationRoundLimitOptionsList'),
    ).not.toBeInTheDocument()

    // first click enables the advanced limits list
    await userEvent.click(
      screen.getByRole('button', { name: 'Advanced Limits' }),
    )
    expect(
      screen.queryByTestId('EvaluationRoundLimitOptionsList'),
    ).toBeInTheDocument()

    // click again disables the advanced limits list
    await userEvent.click(
      screen.getByRole('button', { name: 'Advanced Limits' }),
    )
    expect(
      screen.queryByTestId('EvaluationRoundLimitOptionsList'),
    ).not.toBeInTheDocument()
  })

  it('test remove advanced RoundLimit: 1 item left in list should disable advanced Mode', async () => {
    props.evaluationRoundInput.otherLimits = [
      { type: 'MONTHLY', maxSubmissionString: '45' },
      { type: 'DAILY', maxSubmissionString: '36' },
    ]

    render(<EvaluationRoundEditor {...props} />, {
      wrapper: createWrapper(),
    })

    //enable rendering of the advanced limits list
    await userEvent.click(
      screen.getByRole('button', { name: 'Advanced Limits' }),
    )
    expect(
      screen.queryByTestId('EvaluationRoundLimitOptionsList'),
    ).toBeInTheDocument()

    //we have 2 advanced limits so 2 buttons
    let removeLimitButtons = screen.getAllByRole('button', { name: 'Remove' })
    expect(removeLimitButtons).toHaveLength(2)

    // click on one button should remove one, but the EvaluationRoundLimitOptionsList is still shown
    await userEvent.click(removeLimitButtons[0])
    expect(
      screen.queryByTestId('EvaluationRoundLimitOptionsList'),
    ).toBeInTheDocument()

    // after 1 remove was clicked there should only be 1 more remove button left
    removeLimitButtons = screen.getAllByRole('button', { name: 'Remove' })
    expect(removeLimitButtons).toHaveLength(1)

    // once we click this button, we expect the EvaluationRoundLimitOptionsList to stop being shown at all
    await userEvent.click(removeLimitButtons[0])
    expect(
      screen.queryByTestId('EvaluationRoundLimitOptionsList'),
    ).not.toBeInTheDocument()
  })

  it('test start date input: disabled when current time past start', () => {
    const roundStartInPast = dayjs().subtract(1, 'days')
    const roundEnd = dayjs().add(1, 'days')
    props.evaluationRoundInput.roundStart = roundStartInPast.toJSON()
    props.evaluationRoundInput.roundEnd = roundEnd.toJSON()

    render(<EvaluationRoundEditor {...props} />, { wrapper: createWrapper() })

    const roundStartInput = screen.getByLabelText('Round Start')
    expect(roundStartInput).toBeDisabled()
  })

  it('test start date input: enabled when current time not past start', () => {
    const roundStartInFuture = dayjs().add(1, 'days')
    const roundEnd = dayjs().add(2, 'days')
    props.evaluationRoundInput.roundStart = roundStartInFuture.toJSON()
    props.evaluationRoundInput.roundEnd = roundEnd.toJSON()

    render(<EvaluationRoundEditor {...props} />, { wrapper: createWrapper() })

    const roundStartInput = screen.getByLabelText('Round Start')
    expect(roundStartInput).not.toBeDisabled()
  })

  it('test save: no id in props => create new EvaluationRound', async () => {
    // remove the id
    delete props.evaluationRoundInput.id

    render(<EvaluationRoundEditor {...props} />, { wrapper: createWrapper() })

    await userEvent.click(screen.getByRole('button', { name: 'Save' }))

    const expectedConvertedEvaulationRound: EvaluationRound = {
      etag: undefined,
      evaluationId: '123',
      id: undefined,
      limits: [],
      roundEnd: '1970-12-01T00:00:00.000Z',
      roundStart: '1970-01-01T00:00:00.000Z',
    }

    expect(mockCreateEvaluationRound).toHaveBeenCalledWith(
      expectedConvertedEvaulationRound,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(mockUpdateEvaluationRound).not.toHaveBeenCalled()

    expect(mockOnSave).toHaveBeenCalled()

    screen.getByRole('heading', { name: 'ROUND STATUS' })
    within(screen.getByRole('alert')).getByText('Successfully saved.')
  })

  it('test save: existing id in props => update EvaluationRound', async () => {
    const id = '1234'
    const etag = 'eeeeeeeee'
    props.evaluationRoundInput.id = id
    props.evaluationRoundInput.etag = etag

    render(<EvaluationRoundEditor {...props} />, { wrapper: createWrapper() })

    await userEvent.click(screen.getByRole('button', { name: 'Save' }))

    const expectedConvertedEvaulationRound: EvaluationRound = {
      etag: etag,
      evaluationId: '123',
      id: id,
      limits: [],
      roundEnd: '1970-12-01T00:00:00.000Z',
      roundStart: '1970-01-01T00:00:00.000Z',
    }

    expect(mockUpdateEvaluationRound).toHaveBeenCalledWith(
      expectedConvertedEvaulationRound,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(mockCreateEvaluationRound).not.toHaveBeenCalled()

    expect(mockOnSave).toHaveBeenCalled()

    screen.getByRole('heading', { name: 'ROUND STATUS (1234)' })
    within(screen.getByRole('alert')).getByText('Successfully saved.')
  })

  it('test save: Error occur', async () => {
    //make the SynapseClient call throw an error
    mockUpdateEvaluationRound.mockImplementation(
      () =>
        new JestMockPromise((resolve, reject) => {
          reject(new Error('oops! you got a fake error'))
        }),
    )

    const id = '1234'
    const etag = 'eeeeeeeee'
    props.evaluationRoundInput.id = id
    props.evaluationRoundInput.etag = etag

    render(<EvaluationRoundEditor {...props} />, { wrapper: createWrapper() })

    await userEvent.click(screen.getByRole('button', { name: 'Save' }))

    const expectedConvertedEvaulationRound: EvaluationRound = {
      etag: etag,
      evaluationId: '123',
      id: id,
      limits: [],
      roundEnd: '1970-12-01T00:00:00.000Z',
      roundStart: '1970-01-01T00:00:00.000Z',
    }

    expect(mockUpdateEvaluationRound).toHaveBeenCalledWith(
      expectedConvertedEvaulationRound,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(mockCreateEvaluationRound).not.toHaveBeenCalled()

    expect(mockOnSave).not.toHaveBeenCalled()

    within(screen.getByRole('alert')).getByText('oops! you got a fake error')
  })

  async function simulateDeleteClick() {
    // Open the dropdown menu
    await userEvent.click(screen.getByRole('button', { name: 'Round Options' }))

    // Click the delete button in the dropdown menu
    await userEvent.click(screen.getByRole('button', { name: 'Delete' }))

    // Click delete on the button inside the warning modal
    const dialog = screen.getByRole('dialog')
    const confirmDeleteButton = within(dialog).getByRole('button', {
      name: 'Delete',
    })
    await userEvent.click(confirmDeleteButton)
    await waitForElementToBeRemoved(dialog)
  }

  it('test delete: no id', async () => {
    delete props.evaluationRoundInput.id
    delete props.evaluationRoundInput.etag

    render(<EvaluationRoundEditor {...props} />, {
      wrapper: createWrapper(),
    })
    await simulateDeleteClick()

    expect(mockOnDelete).toHaveBeenCalledWith()
    expect(mockDeleteEvaluationRound).not.toHaveBeenCalled()
  })

  it('test delete: has id and successful', async () => {
    const id = '1234'
    const etag = 'eeeeeeeee'
    props.evaluationRoundInput.id = id
    props.evaluationRoundInput.etag = etag

    render(<EvaluationRoundEditor {...props} />, {
      wrapper: createWrapper(),
    })

    //Simulate a deletion
    await simulateDeleteClick()

    expect(mockOnDelete).toHaveBeenCalledWith()
    expect(mockDeleteEvaluationRound).toHaveBeenCalledWith(
      props.evaluationRoundInput.evaluationId,
      id,
      MOCK_CONTEXT_VALUE.accessToken,
    )
  })

  it('test delete: has id and Error occur', async () => {
    const id = '1234'
    const etag = 'eeeeeeeee'
    props.evaluationRoundInput.id = id
    props.evaluationRoundInput.etag = etag

    mockDeleteEvaluationRound.mockImplementation(
      () =>
        new JestMockPromise((resolve, reject) =>
          reject(new Error('oops! you got a fake error')),
        ),
    )

    render(<EvaluationRoundEditor {...props} />, {
      wrapper: createWrapper(),
    })

    //Simulate a deletion
    await simulateDeleteClick()

    expect(mockDeleteEvaluationRound).toHaveBeenCalledWith(
      props.evaluationRoundInput.evaluationId,
      id,
      MOCK_CONTEXT_VALUE.accessToken,
    )

    //error occurred so we never used the passed in callback from props
    expect(mockOnDelete).not.toHaveBeenCalled()

    //error should be shown
    within(screen.getByRole('alert')).getByText('oops! you got a fake error')
  })
})

describe('test determineRoundStatus helper', () => {
  it('status: in progress', () => {
    const roundStart = dayjs().subtract(1, 'days')
    const roundEnd = dayjs().add(1, 'days')
    expect(
      render(
        HelpersToTest.determineRoundStatus(roundStart, roundEnd),
      ).container.querySelector('.status-in-progress'),
    ).toBeDefined()
  })

  it('status: completed', () => {
    const roundStart = dayjs().subtract(2, 'days')
    const roundEnd = dayjs().subtract(1, 'days')
    expect(
      render(
        HelpersToTest.determineRoundStatus(roundStart, roundEnd),
      ).container.querySelector('.status-completed'),
    ).toBeDefined()
  })

  it('status: not yet started', () => {
    const roundStart = dayjs().add(1, 'days')
    const roundEnd = dayjs().add(2, 'days')
    expect(
      render(
        HelpersToTest.determineRoundStatus(roundStart, roundEnd),
      ).container.querySelector('.status-not-yet-started'),
    ).toBeDefined()
  })
})

describe('test convertInputsToEvaluationRound', () => {
  let evaluationRoundInputProp: EvaluationRoundInput
  let startDate: string | Dayjs
  let endDate: string | Dayjs
  let totalSubmissionLimit: string
  let advancedLimits: EvaluationRoundLimitInput[]
  let expected: EvaluationRound

  beforeEach(() => {
    evaluationRoundInputProp = {
      id: '456',
      etag: 'abcdef',
      evaluationId: '123',

      //these should not be used in the conversion
      reactListKey: 'lk;ajdlaksfjsa',
      otherLimits: [],
      roundEnd: '1970-01-01T00:00:00',
      roundStart: '1970-01-02T00:00:00',
      totalSubmissionLimit: '99999999999999',
    }
    startDate = '2020-01-01T00:00:00'
    endDate = '3030-12-01T00:00:00'
    totalSubmissionLimit = '1213456'
    advancedLimits = [
      { type: 'MONTHLY', maxSubmissionString: '35' },
      { type: 'DAILY', maxSubmissionString: '42' },
    ]

    expected = {
      etag: 'abcdef',
      evaluationId: '123',
      id: '456',
      roundStart: '2020-01-01T00:00:00.000Z',
      roundEnd: '3030-12-01T00:00:00.000Z',
      limits: [
        {
          limitType: 'TOTAL',
          maximumSubmissions: 1213456,
        },
        {
          limitType: 'MONTHLY',
          maximumSubmissions: 35,
        },
        {
          limitType: 'DAILY',
          maximumSubmissions: 42,
        },
      ],
    }
  })

  it('test empty string totalSubmissionLimit is allowed', () => {
    totalSubmissionLimit = ''

    //TOTAL limits is removed
    expected.limits = [
      {
        limitType: 'MONTHLY',
        maximumSubmissions: 35,
      },
      {
        limitType: 'DAILY',
        maximumSubmissions: 42,
      },
    ]

    expect(
      HelpersToTest.convertInputsToEvaluationRound(
        evaluationRoundInputProp,
        startDate,
        endDate,
        totalSubmissionLimit,
        advancedLimits,
      ),
    ).toEqual(expected)
  })

  it('test non-numeric string totalSubmissionLimit throws exception', () => {
    totalSubmissionLimit = 'asdf'

    expect(() =>
      HelpersToTest.convertInputsToEvaluationRound(
        evaluationRoundInputProp,
        startDate,
        endDate,
        totalSubmissionLimit,
        advancedLimits,
      ),
    ).toThrow(TypeError)
  })

  it('test empty advancedLimits array is allowed', () => {
    advancedLimits = []

    //only total limit should now exists
    expected.limits = [
      {
        limitType: 'TOTAL',
        maximumSubmissions: 1213456,
      },
    ]

    expect(
      HelpersToTest.convertInputsToEvaluationRound(
        evaluationRoundInputProp,
        startDate,
        endDate,
        totalSubmissionLimit,
        advancedLimits,
      ),
    ).toEqual(expected)
  })

  it('test empty string existing in advancedLimits array is allowed', () => {
    advancedLimits = [
      {
        type: 'MONTHLY',
        maxSubmissionString: '',
      },
      {
        type: 'DAILY',
        maxSubmissionString: '42',
      },
    ]

    expected.limits = [
      {
        limitType: 'TOTAL',
        maximumSubmissions: 1213456,
      },
      {
        limitType: 'DAILY',
        maximumSubmissions: 42,
      },
    ]

    expect(
      HelpersToTest.convertInputsToEvaluationRound(
        evaluationRoundInputProp,
        startDate,
        endDate,
        totalSubmissionLimit,
        advancedLimits,
      ),
    ).toEqual(expected)
  })

  it('test non-numeric string existing in advancedLimits array throws exception', () => {
    advancedLimits = [{ type: 'WEEKLY', maxSubmissionString: 'asdf123asdf' }]

    expect(() =>
      HelpersToTest.convertInputsToEvaluationRound(
        evaluationRoundInputProp,
        startDate,
        endDate,
        totalSubmissionLimit,
        advancedLimits,
      ),
    ).toThrow(TypeError)
  })

  it('test no limits at all', () => {
    advancedLimits = []
    totalSubmissionLimit = ''

    //only total limit should now exists
    expected.limits = []

    expect(
      HelpersToTest.convertInputsToEvaluationRound(
        evaluationRoundInputProp,
        startDate,
        endDate,
        totalSubmissionLimit,
        advancedLimits,
      ),
    ).toEqual(expected)
  })

  it('general case', () => {
    expect(
      HelpersToTest.convertInputsToEvaluationRound(
        evaluationRoundInputProp,
        startDate,
        endDate,
        totalSubmissionLimit,
        advancedLimits,
      ),
    ).toEqual(expected)
  })
})

describe('test disallowCalendarDateBefore', () => {
  const now = dayjs()
  const generatedFunc = HelpersToTest.disallowCalendarDateBefore(now)

  it('before now', () =>
    expect(generatedFunc(now.clone().subtract(1, 'days'))).toBe(false))

  it('is now', () => expect(generatedFunc(now.clone())).toBe(true))

  it('after now', () =>
    expect(generatedFunc(now.clone().add(1, 'days'))).toBe(true))
})
