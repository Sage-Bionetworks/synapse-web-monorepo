import { server } from '@/mocks/msw/server'
import {
  MOCK_USER_ID,
  MOCK_USER_NAME,
  mockUserGroupHeader,
} from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import selectEvent from 'react-select-event'
import UserSearchBox from './UserSearchBoxV2'

describe('UserSearchBoxV2 tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  const onChange = vi.fn()

  function renderComponent() {
    return render(<UserSearchBox onChange={onChange} />, {
      wrapper: createWrapper(),
    })
  }

  it('test onChange by making a selection and clearing it', async () => {
    renderComponent()
    const input = screen.getByRole('combobox')
    // User typically enters the beginning of a name to populate the selections
    await userEvent.type(input, MOCK_USER_NAME.substring(0, 3))
    await screen.findByText(new RegExp('@' + MOCK_USER_NAME), undefined, {
      timeout: 15000,
    })
    // Make a selection
    await act(async () => {
      await selectEvent.select(input, new RegExp('@' + MOCK_USER_NAME))
    })

    await waitFor(
      () =>
        expect(onChange).toHaveBeenLastCalledWith(
          MOCK_USER_ID.toString(),
          mockUserGroupHeader,
        ),
      { timeout: 15000 },
    )

    // Clear the selection
    await selectEvent.clearFirst(input)
    await waitFor(() => expect(onChange).toHaveBeenLastCalledWith(null, null))
  })
})
