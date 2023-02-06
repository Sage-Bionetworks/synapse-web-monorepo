import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import CertificationQuiz from '../../../src/lib/containers/CertificationQuiz'
import { displayToast } from '../../../src/lib/containers/ToastMessage'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../src/lib/utils/functions/getEndpoint'
import { rest, server } from '../../../mocks/msw/server'
import {
  mockQuiz,
  mockPassingRecord,
} from '../../../mocks/mockCertificationQuiz'

window.open = jest.fn()
jest.mock('../../../src/lib/containers/ToastMessage', () => {
  return { displayToast: jest.fn() }
})

const mockToastFn = displayToast
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

const failedQuizHandler = rest.post(
  'https://repo-prod.prod.sagebase.org/repo/v1/certifiedUserTestResponse',
  async (req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ mockPassingRecord }))
  },
)

const passedQuizHandler = rest.post(
  'https://repo-prod.prod.sagebase.org/repo/v1/certifiedUserTestResponse',
  async (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({ ...mockPassingRecord, passed: true }),
    )
  },
)

function renderComponent() {
  render(<CertificationQuiz />, {
    wrapper: createWrapper(),
  })
}

describe('CertificationQuiz tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => server.use(getQuizHandler))
  afterEach(() => {
    server.resetHandlers()
    jest.clearAllMocks()
  })
  afterAll(() => server.close())

  it('Shows loads the certification quiz', async () => {
    renderComponent()
    await screen.findByText('Mock Certification Quiz')
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
      expect(mockToastFn).toBeCalledWith(
        'Please answer all of the questions and try again.',
        'warning',
      ),
    )
  })

  it('Submit quiz that did not pass', async () => {
    server.use(failedQuizHandler)
    renderComponent()
    const radio1 = await screen.findByLabelText(
      mockQuiz.questions[0].answers[0].prompt,
    )
    const radio2 = await screen.findByLabelText(
      mockQuiz.questions[1].answers[0].prompt,
    )
    const submitButton = await screen.findByRole('button', { name: 'Submit' })

    expect(radio1).toBeInTheDocument()
    expect(radio2).toBeInTheDocument()

    expect(radio1).not.toBeChecked()
    expect(radio2).not.toBeChecked()

    await userEvent.click(radio1)
    await userEvent.click(radio2)

    expect(radio1).toBeChecked()
    expect(radio2).toBeChecked()

    await userEvent.click(submitButton)

    await screen.findByText('Quiz Failed')

    expect(mockToastFn).not.toBeCalled()

    // Test retaking test
    const retakeLink = await screen.findByRole('link', { name: 'try again' })
    await userEvent.click(retakeLink)

    expect(radio1).not.toBeChecked()
    expect(radio2).not.toBeChecked()
    expect(screen.queryByText('Quiz Failed')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('link', { name: 'try again' }),
    ).not.toBeInTheDocument()
  })

  it('Submit quiz that did pass', async () => {
    server.use(passedQuizHandler)
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

    await waitFor(() =>
      expect(mockToastFn).toBeCalledWith(
        `You passed the Synapse Certification Quiz on ${mockPassingRecord.passedOn}`,
        'success',
      ),
    )
  })
})
