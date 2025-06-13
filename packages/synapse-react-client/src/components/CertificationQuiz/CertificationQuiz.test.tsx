import {
  mockPassingRecordFailed,
  mockPassingRecordPassed,
  mockQuiz,
} from '@/mocks/mockCertificationQuiz'
import { server } from '@/mocks/msw/server'
import { mockUserBundle } from '@/mocks/user/mock_user_profile'
import { useGetCurrentUserBundle } from '@/synapse-queries'
import {
  useGetPassingRecord,
  usePostCertifiedUserTestResponse,
} from '@/synapse-queries/user/useCertificationQuiz'
import {
  getUseMutationMock,
  getUseQueryMock,
} from '@/testutils/ReactQueryMockUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { formatDate } from '@/utils/functions/DateFormatter'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  PassingRecord,
  QuizResponse,
  UserBundle,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'
import { noop } from 'lodash-es'
import { http, HttpResponse } from 'msw'
import * as ToastMessage from '../ToastMessage/ToastMessage'
import CertificationQuiz from './CertificationQuiz'

window.open = vi.fn()
vi.mock('../../synapse-queries/user/useCertificationQuiz', () => {
  return {
    usePostCertifiedUserTestResponse: vi.fn(),
    useGetPassingRecord: vi.fn(),
  }
})

const mockUsePostCertifiedUserTestResponse = vi.mocked(
  usePostCertifiedUserTestResponse,
)
const mockUseGetPassingRecord = vi.mocked(useGetPassingRecord)

vi.mock('../../synapse-queries/user/useUserBundle', () => {
  return {
    useGetCurrentUserBundle: vi.fn(),
  }
})
const mockUseGetCurrentUserBundle = vi.mocked(useGetCurrentUserBundle)

const mockToastFn = vi
  .spyOn(ToastMessage, 'displayToast')
  .mockImplementation(() => noop)
const gettingStartedUrl =
  'https://help.synapse.org/docs/Getting-Started.2055471150.html'

const getQuizHandler = http.get(
  `${getEndpoint(
    BackendDestinationEnum.REPO_ENDPOINT,
  )}/repo/v1/certifiedUserTest`,
  () => {
    return HttpResponse.json(mockQuiz, { status: 200 })
  },
)

function renderComponent() {
  render(<CertificationQuiz />, {
    wrapper: createWrapper(),
  })
}

const {
  mock: useGetPassingRecordMockImpl,
  setSuccess: setMockUseGetPassingRecordSuccess,
} = getUseQueryMock<PassingRecord | null, SynapseClientError>()

const {
  mock: useGetCurrentUserBundleMockImpl,
  setSuccess: setMockUseGetCurrentUserBundleSuccess,
} = getUseQueryMock<UserBundle, SynapseClientError>()

const { mock: mutationMockImpl, mockMutate } = getUseMutationMock<
  PassingRecord,
  SynapseClientError,
  QuizResponse
>()

const emptyPassingRecordResult = null
const userBundleResult = { ...mockUserBundle, isCertified: false }

describe('CertificationQuiz tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(getQuizHandler)
    mockUsePostCertifiedUserTestResponse.mockImplementation(mutationMockImpl)
    mockUseGetPassingRecord.mockImplementation(useGetPassingRecordMockImpl)
    mockUseGetCurrentUserBundle.mockImplementation(
      useGetCurrentUserBundleMockImpl,
    )
  })

  afterEach(() => {
    server.resetHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

  it('Shows loads the certification quiz', async () => {
    renderComponent()

    act(() => {
      setMockUseGetPassingRecordSuccess(emptyPassingRecordResult)
      setMockUseGetCurrentUserBundleSuccess(userBundleResult)
    })

    // PORTALS-3131: Quiz header not shown - it's now hard-coded
    await screen.findByText('Certified User Quiz')
    expect(await screen.findAllByRole('radiogroup')).toHaveLength(2)
  })

  it('Open new tab when clicking help button', async () => {
    renderComponent()

    act(() => {
      setMockUseGetPassingRecordSuccess(emptyPassingRecordResult)
      setMockUseGetCurrentUserBundleSuccess(userBundleResult)
    })

    const helpButton = await screen.findByRole('button', { name: 'Help' })
    await userEvent.click(helpButton)
    expect(window.open).toHaveBeenCalledWith(gettingStartedUrl, '_blank')
  })

  it('Submit quiz when not all questions are answered', async () => {
    renderComponent()

    act(() => {
      setMockUseGetPassingRecordSuccess(emptyPassingRecordResult)
      setMockUseGetCurrentUserBundleSuccess(userBundleResult)
    })

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
    renderComponent()

    // set up and verify quiz failed UI. click retry
    act(() => {
      setMockUseGetPassingRecordSuccess(mockPassingRecordFailed)
      setMockUseGetCurrentUserBundleSuccess(userBundleResult)
    })

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

    act(() => {
      setMockUseGetPassingRecordSuccess(emptyPassingRecordResult)
      setMockUseGetCurrentUserBundleSuccess(userBundleResult)
    })

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
    expect(mockMutate).toHaveBeenCalledTimes(1)
  })

  it('Verify passing UI', async () => {
    renderComponent()

    act(() => {
      setMockUseGetPassingRecordSuccess(mockPassingRecordPassed)
      setMockUseGetCurrentUserBundleSuccess({
        ...mockUserBundle,
        isCertified: true,
      })
    })

    const passedOnFormatted = formatDate(
      dayjs(mockPassingRecordPassed.passedOn),
    )
    await screen.findByText(
      `You passed the Synapse Certification Quiz on ${passedOnFormatted}`,
    )
  })

  it('Test ACT revoked case - Passed quiz but not certified', async () => {
    renderComponent()

    act(() => {
      setMockUseGetPassingRecordSuccess({
        ...mockPassingRecordPassed,
        revokedOn: new Date().toISOString(),
      })
      setMockUseGetCurrentUserBundleSuccess({
        ...mockUserBundle,
        isCertified: false,
      })
    })

    await screen.findByText('Your certification was revoked', { exact: false })
    await screen.findByText('retake the quiz')
  })
})
