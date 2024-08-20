import React from 'react'
import { render, screen, waitFor, within } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import RejectDataAccessRequestModal, {
  RejectDataAccessRequestModalProps,
} from './RejectDataAccessRequestModal'
import { rest, server } from '../../mocks/msw/server'
import mockRejectionReasonsTableQueryResultBundle from '../../mocks/query/mockRejectionReasonsTableQueryResultBundle'
import userEvent from '@testing-library/user-event'
import { mockSubmittedSubmission } from '../../mocks/dataaccess/MockSubmission'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import { DATA_ACCESS_SUBMISSION_BY_ID } from '../../utils/APIConstants'
import { SubmissionState } from '@sage-bionetworks/synapse-types'
import failOnConsoleError from 'jest-fail-on-console'
import { registerTableQueryResult } from '../../mocks/msw/handlers/tableQueryService'

const props: RejectDataAccessRequestModalProps = {
  submissionId: mockSubmittedSubmission.id,
  tableId: 'syn50683097',
  open: true,
  onClose: jest.fn(),
}

const onServerReceivedUpdate = jest.fn()

function renderComponent() {
  return render(<RejectDataAccessRequestModal {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('RejectDataAccessRequestModal', () => {
  failOnConsoleError()
  beforeAll(() => {
    server.listen()
    registerTableQueryResult(
      { sql: `SELECT * FROM ${props.tableId}` },
      mockRejectionReasonsTableQueryResultBundle,
    )
    server.use(
      rest.put(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${DATA_ACCESS_SUBMISSION_BY_ID(':id')}`,
        async (req, res, ctx) => {
          onServerReceivedUpdate(await req.json())
          return res(ctx.status(200))
        },
      ),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Shows options, generates an email, then invokes a callback', async () => {
    renderComponent()
    const dialog = await screen.findByRole('dialog')
    within(dialog).getByText('Reject Request?')

    // The mock data has the following categories
    const categoryHeaders = []
    categoryHeaders.push(
      await within(dialog).findByText(
        'Issue with the Intended Data Use Statement',
      ),
      await within(dialog).findByText('Issue with Documentation'),
      await within(dialog).findByText('Other Issue'),
    )

    // The reasons are collapsed, click each header to show them
    for (const header of categoryHeaders) {
      await userEvent.click(header)
    }
    // There is one checkbox to select each reason. There is one reason for each row in the mock data
    const checkboxes = await screen.findAllByRole('checkbox')
    expect(checkboxes).toHaveLength(
      mockRejectionReasonsTableQueryResultBundle.queryResult!.queryResults.rows
        .length,
    )

    // Select a couple of reasons and then generate the email
    await userEvent.click(
      screen.getByText(
        'The user did not provide the first and last name of the Project Lead',
      ),
    )
    await userEvent.click(
      screen.getByText(
        'The user did not provide the correct Synapse IDs for their team',
      ),
    )

    // Go to the next page to see the email
    await userEvent.click(
      screen.getByRole('button', { name: 'Generate Email' }),
    )

    const email =
      'Thank you for submitting your data access request.\n\n' +
      'The information you provided on the electronic data access request tool is incomplete or requires more information. Please address the following:\n\n' +
      '* Provide the first and last name of your Project Lead.\n\n' +
      'To access this data, please provide complete and/or current documentation. The following items are incomplete or need to be updated:\n\n' +
      '* Please provide the correct Synapse usernames of the members of your research team (these must match exactly between the DUC and the electronic data access request tool).\n\n' +
      'If you have questions, do not respond to this email address. Instead, reply to:\nact@sagebionetworks.org'

    const textField = await screen.findByRole('textbox')
    expect(textField).toHaveValue(email)

    // Manually modify the email
    const customAddition = '\nHere is some custom text entered by the user'
    await userEvent.type(textField, customAddition)

    // Click the send button
    await userEvent.click(
      screen.getByRole('button', { name: 'Reject and Notify Requester' }),
    )

    // Verify that we send the rejection request to the server
    const fullRejectionMessage = email + customAddition
    await waitFor(() => expect(onServerReceivedUpdate).toHaveBeenCalledTimes(1))
    expect(onServerReceivedUpdate).toHaveBeenCalledWith({
      submissionId: mockSubmittedSubmission.id,
      newState: SubmissionState.REJECTED,
      rejectedReason: fullRejectionMessage,
    })
    await waitFor(() => expect(props.onClose).toHaveBeenCalled())
  })
})
