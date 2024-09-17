import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import CertificationQuiz from './CertificationQuiz'
import * as ToastMessage from '../ToastMessage/ToastMessage'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  mockPassingRecordFailed,
  mockPassingRecordPassed,
  mockQuiz,
} from '../../mocks/mockCertificationQuiz'
import {
  useGetPassingRecord,
  usePostCertifiedUserTestResponse,
} from '../../synapse-queries/user/useCertificationQuiz'
import {
  getUseMutationMock,
  getUseQuerySuccessMock,
} from '../../testutils/ReactQueryMockUtils'
import { PassingRecord, QuizResponse } from '@sage-bionetworks/synapse-types'
import { SynapseClientError } from 'synapse-client'
import { BackendDestinationEnum, getEndpoint } from '../../utils/functions'
import { rest, server } from '../../mocks/msw/server'
import { useGetCurrentUserBundle } from '../../synapse-queries'
import { mockUserBundle } from '../../mocks/user/mock_user_profile'
import { formatDate } from '../../utils/functions/DateFormatter'
import dayjs from 'dayjs'
import { noop } from 'lodash-es'

window.open = jest.fn()
jest.mock('../../synapse-queries/user/useCertificationQuiz', () => {
  return {
    usePostCertifiedUserTestResponse: jest.fn(),
    useGetPassingRecord: jest.fn(),
  }
})

const mockUsePostCertifiedUserTestResponse = jest.mocked(
  usePostCertifiedUserTestResponse,
)
const mockUseGetPassingRecord = jest.mocked(useGetPassingRecord)

jest.mock('../../synapse-queries/user/useUserBundle', () => {
  return {
    useGetCurrentUserBundle: jest.fn(),
  }
})
const mockUseGetCurrentUserBundle = jest.mocked(useGetCurrentUserBundle)

const mockToastFn = jest
  .spyOn(ToastMessage, 'displayToast')
  .mockImplementation(() => noop)
const gettingStartedUrl =
  'https://help.synapse.org/docs/Getting-Started.2055471150.html'

const getQuizHandler = rest.get(
  `${getEndpoint(
    BackendDestinationEnum.REPO_ENDPOINT,
  )}/repo/v1/certifiedUserTest`,
  async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockQuiz))
  },
)

function renderComponent() {
  render(<CertificationQuiz />, {
    wrapper: createWrapper(),
  })
}
const mutationMockReturnValue = getUseMutationMock<
  PassingRecord,
  SynapseClientError,
  QuizResponse
>(mockPassingRecordPassed)

describe('CertificationQuiz tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(getQuizHandler)
    mockUsePostCertifiedUserTestResponse.mockReturnValue(
      mutationMockReturnValue,
    )
    mockUseGetPassingRecord.mockReturnValue(getUseQuerySuccessMock(null))
    mockUseGetCurrentUserBundle.mockReturnValue(
      getUseQuerySuccessMock({ ...mockUserBundle, isCertified: false }),
    )
  })

  afterEach(() => {
    server.resetHandlers()
    jest.clearAllMocks()
  })
  afterAll(() => server.close())

  it('Shows loads the certification quiz', async () => {
    renderComponent()
    // PORTALS-3131: Quiz header not shown - it's now hard-coded
    await screen.findByText('Certified User Quiz')
    expect(await screen.findAllByRole('radiogroup')).toHaveLength(2)
  })

  it('Open new tab when clicking help button', async () => {
    renderComponent()
    const helpButton = await screen.findByRole('button', { name: 'Help' })
    await userEvent.click(helpButton)
    expect(window.open).toHaveBeenCalledWith(gettingStartedUrl, '_blank')
  })

  it('Submit quiz when not all questions are answered', async () => {
    renderComponent()
    const submitButton = await screen.findByRole('button', { name: 'Submit' })
    await userEvent.click(submitButton)

    await waitFor(() =>
      expect(mockToastFn).toHaveBeenCalledWith(
        'Please answer all of the questions and try again.',
        'warning',
      ),
    )
  })

  it('Submit quiz that did not pass', async () => {
    // set up and verify quiz failed UI. click retry
    mockUseGetPassingRecord.mockReturnValue(
      getUseQuerySuccessMock(mockPassingRecordFailed),
    )

    renderComponent()

    await screen.findByText('Quiz Failed')

    expect(mockToastFn).not.toHaveBeenCalled()

    // Test retaking test
    const retakeLink = await screen.findByRole('link', {
      name: 'retake the quiz',
    })
    await userEvent.click(retakeLink)

    const radio1 = await screen.findByLabelText(
      mockQuiz.questions[0].answers[0].prompt,
    )
    const radio2 = await screen.findByLabelText(
      mockQuiz.questions[1].answers[0].prompt,
    )
    expect(radio1).not.toBeChecked()
    expect(radio2).not.toBeChecked()
    expect(screen.queryByText('Quiz Failed')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: 'retake the quiz' }),
    ).not.toBeInTheDocument()
  })

  it('Submit quiz that did pass', async () => {
    renderComponent()

    const radio1 = await screen.findByLabelText(
      mockQuiz.questions[0].answers[0].prompt,
    )
    const radio2 = await screen.findByLabelText(
      mockQuiz.questions[1].answers[0].prompt,
    )

    const submitButton = await screen.findByRole('button', { name: 'Submit' })

    await userEvent.click(radio1)
    await userEvent.click(radio2)

    expect(radio1).toBeChecked()
    expect(radio2).toBeChecked()

    await userEvent.click(submitButton)
    expect(mutationMockReturnValue.mutate).toHaveBeenCalledTimes(1)
  })

  it('Verify passing UI', async () => {
    mockUseGetCurrentUserBundle.mockReturnValue(
      getUseQuerySuccessMock({ ...mockUserBundle, isCertified: true }),
    )
    mockUseGetPassingRecord.mockReturnValue(
      getUseQuerySuccessMock(mockPassingRecordPassed),
    )

    renderComponent()

    const passedOnFormatted = formatDate(
      dayjs(mockPassingRecordPassed.passedOn),
    )
    await screen.findByText(
      `You passed the Synapse Certification Quiz on ${passedOnFormatted}`,
    )
  })

  it('Test ACT revoked case - Passed quiz but not certified', async () => {
    mockUseGetCurrentUserBundle.mockReturnValue(
      getUseQuerySuccessMock({
        ...mockUserBundle,
        isCertified: false,
      }),
    )
    mockUseGetPassingRecord.mockReturnValue(
      getUseQuerySuccessMock({
        ...mockPassingRecordPassed,
        revokedOn: new Date().toISOString(),
      }),
    )

    renderComponent()

    await screen.findByText('Your certification was revoked', { exact: false })
    await screen.findByText('retake the quiz')
  })
})
