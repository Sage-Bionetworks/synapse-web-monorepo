import {
  formListDataInProgress,
  formListDataSubmitted,
} from '@/mocks/mock_drug_tool_data'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client/index'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { StatusEnum } from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UserFileGrid, {
  SynapseFormSubmissionGridProps,
} from './SynapseFormSubmissionGrid'

const pathpart = 'someTool'
const formGroupId = '5'
const itemNoun = 'submission'
const mockListFormData = vi.spyOn(SynapseClient, 'listFormData')

const renderComponent = async (props: SynapseFormSubmissionGridProps) => {
  // We must await asynchronous events for our assertions to pass
  // eslint-disable-next-line @typescript-eslint/require-await
  return await act(async () => {
    render(<UserFileGrid {...props} />, {
      wrapper: createWrapper(),
    })
  })
}

describe('SynapseFormSubmissionsGrid', () => {
  const props: SynapseFormSubmissionGridProps = {
    pathpart,
    formGroupId,
    itemNoun,
  }
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  beforeEach(() => {
    mockListFormData.mockImplementation(request => {
      if (request.filterByState?.includes(StatusEnum.WAITING_FOR_SUBMISSION)) {
        return Promise.resolve(formListDataInProgress)
      } else {
        return Promise.resolve(formListDataSubmitted)
      }
    })
  })
  afterAll(() => server.close())

  test('displays table with file list when files are present', async () => {
    await renderComponent(props)
    const tables = await screen.findAllByRole('table')
    expect(tables).toHaveLength(2)
  })

  test('not display the table when there are no files', async () => {
    await renderComponent(props)

    await waitFor(() => {
      expect(mockListFormData).toHaveBeenCalledWith(
        expect.objectContaining({ filterByState: ['WAITING_FOR_SUBMISSION'] }),
        expect.anything(),
      )
      expect(mockListFormData).toHaveBeenCalledWith(
        expect.objectContaining({
          filterByState: [
            'SUBMITTED_WAITING_FOR_REVIEW',
            'ACCEPTED',
            'REJECTED',
          ],
        }),
        expect.anything(),
      )
    })
  })

  test('not display an icon instead of the tables when there are no files', async () => {
    mockListFormData.mockReset().mockResolvedValue({ page: [] })
    await renderComponent(props)

    await screen.findByText('You have no submissions')
    expect(screen.queryByRole('table')).not.toBeInTheDocument()
  })

  test('should modify the modal state when clicking "delete"', async () => {
    const spy = vi
      .spyOn(SynapseClient, 'deleteFormData')
      .mockReturnValue(Promise.resolve())
    await renderComponent(props)

    const deleteButton = (
      await screen.findAllByRole('button', { name: 'delete' })
    )[0]

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    await userEvent.click(deleteButton)
    const dialog = await screen.findByRole('dialog')
    expect(spy).not.toHaveBeenCalled()

    const confirmDeleteButton = within(dialog).getByRole('button', {
      name: 'OK',
    })
    await userEvent.click(confirmDeleteButton)
    expect(spy).toHaveBeenCalledWith(
      formListDataInProgress.page[0].formDataId,
      MOCK_CONTEXT_VALUE.accessToken,
    )
  })

  test('should have view more link if there is a token for next page and call the back end fn to get the additional items', async () => {
    await renderComponent(props)
    const viewMoreButton = await screen.findByRole('button', {
      name: /more.../i,
    })
    await userEvent.click(viewMoreButton)

    await waitFor(() =>
      expect(mockListFormData).toHaveBeenCalledWith(
        {
          filterByState: ['WAITING_FOR_SUBMISSION'],
          groupId: formGroupId,
          nextPageToken: formListDataInProgress.nextPageToken,
        },
        MOCK_CONTEXT_VALUE.accessToken,
      ),
    )
  })
})
