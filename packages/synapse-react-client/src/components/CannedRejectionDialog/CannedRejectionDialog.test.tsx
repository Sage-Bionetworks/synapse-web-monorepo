import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import mockRejectionReasonsTableQueryResultBundle from '@/mocks/query/mockRejectionReasonsTableQueryResultBundle'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import failOnConsoleError from 'jest-fail-on-console'
import {
  CannedRejectionDialog,
  CannedRejectionDialogProps,
} from './CannedRejectionDialog'

const MESSAGE_PREFIX = 'Thank you for submitting your request.\n'
const MESSAGE_APPEND =
  '\nIf you have questions, do not respond to this email address. Instead, reply to:\nact@sagebionetworks.org'

const props: CannedRejectionDialogProps = {
  tableId: 'syn50683097',
  open: true,
  error: null,
  defaultMessagePrefix: MESSAGE_PREFIX,
  defaultMessageAppend: MESSAGE_APPEND,
  onConfirm: vi.fn(),
  onClose: vi.fn(),
}

function renderComponent(
  propOverrides: Partial<CannedRejectionDialogProps> = {},
) {
  return render(<CannedRejectionDialog {...props} {...propOverrides} />, {
    wrapper: createWrapper(),
  })
}

describe('CannedRejectionDialog', () => {
  failOnConsoleError()
  beforeAll(() => {
    server.listen()
    registerTableQueryResult(
      { sql: `SELECT * FROM ${props.tableId}` },
      mockRejectionReasonsTableQueryResultBundle,
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
      `${MESSAGE_PREFIX}\n` +
      'The information you provided on the electronic data access request tool is incomplete or requires more information. Please address the following:\n\n' +
      '* Provide the first and last name of your Project Lead.\n\n' +
      'To access this data, please provide complete and/or current documentation. The following items are incomplete or need to be updated:\n\n' +
      '* Please provide the correct Synapse usernames of the members of your research team (these must match exactly between the DUC and the electronic data access request tool).\n' +
      `${MESSAGE_APPEND}`

    const textField = await screen.findByRole('textbox')
    expect(textField).toHaveValue(email)

    // Manually modify the email
    const customAddition = '\nHere is some custom text entered by the user'
    await userEvent.type(textField, customAddition)

    // Click the send button
    await userEvent.click(
      screen.getByRole('button', { name: 'Reject and Notify Requester' }),
    )

    // Verify that we call the onConfirm callback with the expected message
    const fullRejectionMessage = email + customAddition
    await waitFor(() => expect(props.onConfirm).toHaveBeenCalledTimes(1))
    expect(props.onConfirm).toHaveBeenCalledWith(fullRejectionMessage)
  })

  it('Renders some additional UI on the second page', async () => {
    const CHILD_DIV_TESTID = 'child-div'
    renderComponent({ children: <div data-testid={CHILD_DIV_TESTID} /> })
    const dialog = await screen.findByRole('dialog')
    within(dialog).getByText('Reject Request?')

    expect(screen.queryByTestId(CHILD_DIV_TESTID)).not.toBeInTheDocument()

    // Go to the next page to see the email
    await userEvent.click(
      screen.getByRole('button', { name: 'Generate Email' }),
    )

    // Verify the child div is now rendered
    await screen.findByTestId(CHILD_DIV_TESTID)
  })
})
