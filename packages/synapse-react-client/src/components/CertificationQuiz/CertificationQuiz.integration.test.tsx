import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import CertificationQuiz from './CertificationQuiz'
import * as ToastMessage from '../ToastMessage/ToastMessage'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { mockQuiz, mockPassingRecord } from '../../mocks/mockCertificationQuiz'
import {
  useGetPassingRecord,
  usePostCertifiedUserTestResponse,
} from '../../synapse-queries/user/useCertificationQuiz'
import { getUseMutationMock } from '../../testutils/ReactQueryMockUtils'
import { PassingRecord, QuizResponse } from '@sage-bionetworks/synapse-types'
import { SynapseClientError } from '../../utils'

window.open = jest.fn()
jest.mock('../../synapse-queries/user/useCertificationQuiz', () => {
  return {
    usePostCertifiedUserTestResponse: jest.fn(),
    useGetPassingRecord: jest.fn(),
  }
})
const mockUsePostCertifiedUserTestResponse =
  usePostCertifiedUserTestResponse as jest.Mock
const mockUseGetPassingRecord = useGetPassingRecord as jest.Mock

const mockToastFn = jest
  .spyOn(ToastMessage, 'displayToast')
  .mockImplementation(() => {})
const gettingStartedUrl =
  'https://help.synapse.org/docs/Getting-Started.2055471150.html'

function renderComponent() {
  render(<CertificationQuiz />, {
    wrapper: createWrapper(),
  })
}

describe('CertificationQuiz tests', () => {
  beforeEach(() => {
    const mutationMockReturnValue = getUseMutationMock<
      PassingRecord,
      SynapseClientError,
      QuizResponse
    >(mockPassingRecord)
    mockUsePostCertifiedUserTestResponse.mockReturnValue({
      mutate: mutationMockReturnValue,
      isLoading: false,
    })
    mockUseGetPassingRecord.mockReturnValue({ data: mockPassingRecord })
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

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
      expect(mockToastFn).toHaveBeenCalledWith(
        'Please answer all of the questions and try again.',
        'warning',
      ),
    )
  })

  it('Submit quiz that did not pass', async () => {
    // TODO: mock respond with a failed passing record
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

    expect(mockToastFn).not.toHaveBeenCalled()

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
    // TODO: mock respond with passing record of a passed quiz
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

    //TODO: look for Alert, rather than a toast message
    await waitFor(() =>
      expect(mockToastFn).toHaveBeenCalledWith(
        `You passed the Synapse Certification Quiz on ${mockPassingRecord.passedOn}`,
        'success',
      ),
    )
  })
})
