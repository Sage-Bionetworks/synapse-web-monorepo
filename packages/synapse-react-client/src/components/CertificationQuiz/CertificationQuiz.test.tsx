import {
  mockPassingRecordFailed,
  mockPassingRecordPassed,
  mockQuiz,
} from '@/mocks/mockCertificationQuiz'
import { server } from '@/mocks/msw/server'
import { mockUserBundle } from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { formatDate } from '@/utils/functions/DateFormatter'
import {
  MULTICHOICE_RESPONSE_CONCRETE_TYPE_VALUE,
  PassingRecord,
  UserBundle,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import dayjs from 'dayjs'
import { noop } from 'lodash-es'
import { http, HttpResponse } from 'msw'
import * as ToastMessage from '../ToastMessage/ToastMessage'
import CertificationQuiz from './CertificationQuiz'

window.open = vi.fn()
window.scrollTo = vi.fn()

const mockToastFn = vi
  .spyOn(ToastMessage, 'displayToast')
  .mockImplementation(() => noop)
const gettingStartedUrl =
  'https://help.synapse.org/docs/Getting-Started.2055471150.html'

const repoEndpoint = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const getQuizHandler = http.get(
  `${repoEndpoint}/repo/v1/certifiedUserTest`,
  () => {
    return HttpResponse.json(mockQuiz, { status: 200 })
  },
)

const passingRecordRequestSpy = vi.fn()
const postQuizResponseSpy = vi.fn()

/**
 * Mocks the user's certification state. A null passing record is represented by a 404, which is how the backend
 * reports that the user has never taken the quiz.
 */
function mockCertificationState(
  passingRecord: PassingRecord | null,
  userBundle: UserBundle,
) {
  server.use(
    http.get(`${repoEndpoint}/repo/v1/user/bundle`, () =>
      HttpResponse.json(userBundle, { status: 200 }),
    ),
    // Note: SynapseClient.getPassingRecord builds a URL with a double slash after /repo/v1
    http.get(
      `${repoEndpoint}/repo/v1//user/:id/certifiedUserPassingRecord`,
      () => {
        passingRecordRequestSpy()
        return passingRecord
          ? HttpResponse.json(passingRecord, { status: 200 })
          : HttpResponse.json(
              { reason: 'No passing record found' },
              { status: 404 },
            )
      },
    ),
  )
}

function renderComponent() {
  render(<CertificationQuiz />, {
    wrapper: createWrapper(),
  })
}

/**
 * Waits until the user bundle has been loaded and the passing record has been requested. Until then, the
 * component renders the quiz form as if the user had not taken the quiz, which is replaced by a skeleton once the
 * passing record is being loaded.
 */
async function waitForCertificationStateRequested() {
  await waitFor(() => expect(passingRecordRequestSpy).toHaveBeenCalled())
}

const userBundleResult = { ...mockUserBundle, isCertified: false }

describe('CertificationQuiz tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(
      getQuizHandler,
      http.post(
        `${repoEndpoint}/repo/v1/certifiedUserTestResponse`,
        async ({ request }) => {
          postQuizResponseSpy(await request.json())
          return HttpResponse.json(mockPassingRecordPassed, { status: 201 })
        },
      ),
    )
  })

  afterEach(() => {
    server.resetHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

  it('Shows loads the certification quiz', async () => {
    mockCertificationState(null, userBundleResult)
    renderComponent()

    // PORTALS-3131: Quiz header not shown - it's now hard-coded
    await screen.findByText('Certified User Quiz')
    expect(await screen.findAllByRole('radiogroup')).toHaveLength(2)
  })

  it('Open new tab when clicking help button', async () => {
    mockCertificationState(null, userBundleResult)
    renderComponent()
    await waitForCertificationStateRequested()

    const helpButton = await screen.findByRole('button', { name: 'Help' })
    await userEvent.click(helpButton)
    expect(window.open).toHaveBeenCalledWith(gettingStartedUrl, '_blank')
  })

  it('Submit quiz when not all questions are answered', async () => {
    mockCertificationState(null, userBundleResult)
    renderComponent()
    await waitForCertificationStateRequested()

    const submitButton = await screen.findByRole('button', { name: 'Submit' })
    await userEvent.click(submitButton)

    await waitFor(() =>
      expect(mockToastFn).toHaveBeenCalledWith(
        'Please answer all of the questions and try again.',
        'warning',
      ),
    )
    expect(postQuizResponseSpy).not.toHaveBeenCalled()
  })

  it('Submit quiz that did not pass', async () => {
    mockCertificationState(mockPassingRecordFailed, userBundleResult)
    renderComponent()

    // set up and verify quiz failed UI. click retry
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
    mockCertificationState(null, userBundleResult)
    renderComponent()
    await waitForCertificationStateRequested()

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

    await waitFor(() => expect(postQuizResponseSpy).toHaveBeenCalledTimes(1))
    const expectedQuizResponse = {
      quizId: mockQuiz.id,
      questionResponses: [
        {
          questionIndex: 0,
          answerIndex: [0],
          concreteType: MULTICHOICE_RESPONSE_CONCRETE_TYPE_VALUE,
        },
        {
          questionIndex: 1,
          answerIndex: [0],
          concreteType: MULTICHOICE_RESPONSE_CONCRETE_TYPE_VALUE,
        },
      ],
    }
    expect(postQuizResponseSpy).toHaveBeenCalledWith(expectedQuizResponse)
  })

  it('Verify passing UI', async () => {
    mockCertificationState(mockPassingRecordPassed, {
      ...mockUserBundle,
      isCertified: true,
    })
    renderComponent()

    const passedOnFormatted = formatDate(
      dayjs(mockPassingRecordPassed.passedOn),
    )
    await screen.findByText(
      `You passed the Synapse Certification Quiz on ${passedOnFormatted}`,
    )
  })

  it('Test ACT revoked case - Passed quiz but not certified', async () => {
    mockCertificationState(
      {
        ...mockPassingRecordPassed,
        revokedOn: new Date().toISOString(),
      },
      {
        ...mockUserBundle,
        isCertified: false,
      },
    )
    renderComponent()

    await screen.findByText('Your certification was revoked', { exact: false })
    await screen.findByText('retake the quiz')
  })
})
