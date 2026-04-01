import { server } from '@/mocks/msw/server'
import {
  MOCK_USER_ID,
  MOCK_USER_NAME,
  mockUserGroupHeader,
} from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { TYPE_FILTER } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UserSearchBox from './UserSearchBox'

describe('UserSearchBox tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  const onChange = vi.fn()
  beforeEach(() => onChange.mockClear())

  function renderComponent(
    props?: Partial<React.ComponentProps<typeof UserSearchBox>>,
  ) {
    return render(<UserSearchBox onChange={onChange} {...props} />, {
      wrapper: createWrapper(),
    })
  }

  it('selects an option and clears it', async () => {
    const user = userEvent.setup()
    renderComponent()
    const input = screen.getByRole('combobox')

    await user.type(input, MOCK_USER_NAME.substring(0, 3))
    const option = await screen.findByRole(
      'option',
      { name: new RegExp('@' + MOCK_USER_NAME) },
      { timeout: 15000 },
    )
    await user.click(option)

    await waitFor(
      () =>
        expect(onChange).toHaveBeenLastCalledWith(
          MOCK_USER_ID.toString(),
          mockUserGroupHeader,
        ),
      { timeout: 15000 },
    )

    const clearButton = screen.getByTitle('Clear')
    await user.click(clearButton)

    await waitFor(() => expect(onChange).toHaveBeenLastCalledWith(null, null))
  })

  it('shows the selected user badge in the input after a selection', async () => {
    const user = userEvent.setup()
    renderComponent()
    const input = screen.getByRole('combobox')

    await user.type(input, MOCK_USER_NAME.substring(0, 3))
    const option = await screen.findByRole(
      'option',
      { name: new RegExp('@' + MOCK_USER_NAME) },
      { timeout: 15000 },
    )
    await user.click(option)

    await waitFor(() => expect(onChange).toHaveBeenCalled(), { timeout: 15000 })

    // After selection the dropdown closes. The badge renders in the startAdornment
    // and is visible; there should be at least one element showing the username.
    await waitFor(
      () =>
        expect(
          screen.getAllByText(new RegExp('@' + MOCK_USER_NAME)).length,
        ).toBeGreaterThan(0),
      { timeout: 15000 },
    )
  })

  it('loads an initial value from defaultValue without calling onChange', async () => {
    renderComponent({ defaultValue: MOCK_USER_ID.toString() })

    // Initially shows a skeleton while the user header is loading — no combobox yet.
    expect(screen.queryByRole('combobox')).not.toBeInTheDocument()

    // Once the header resolves, the combobox appears and the badge is visible.
    // UserOrTeamBadge may also render an inner skeleton while it loads the profile,
    // so use findByText with a generous timeout to wait for the full render.
    await screen.findByText(new RegExp('@' + MOCK_USER_NAME), undefined, {
      timeout: 15000,
    })

    // onChange must not fire just from loading the defaultValue.
    expect(onChange).not.toHaveBeenCalled()
  })

  it('does not retain a selection when value={null} is provided (controlled)', async () => {
    const user = userEvent.setup()
    renderComponent({ value: null })

    const input = screen.getByRole('combobox')
    await user.type(input, MOCK_USER_NAME.substring(0, 3))

    const option = await screen.findByRole(
      'option',
      { name: new RegExp('@' + MOCK_USER_NAME) },
      { timeout: 15000 },
    )
    await user.click(option)

    await waitFor(
      () =>
        expect(onChange).toHaveBeenLastCalledWith(
          MOCK_USER_ID.toString(),
          mockUserGroupHeader,
        ),
      { timeout: 15000 },
    )

    // With value={null} the component never retains a selection — no badge shown.
    await waitFor(() =>
      expect(
        screen.queryByText(new RegExp('@' + MOCK_USER_NAME)),
      ).not.toBeInTheDocument(),
    )
  })

  it('shows the correct placeholder based on typeFilter', () => {
    const { rerender } = renderComponent({
      typeFilter: TYPE_FILTER.USERS_ONLY,
    })
    expect(
      screen.getByPlaceholderText('Name (first and last)'),
    ).toBeInTheDocument()

    rerender(<UserSearchBox typeFilter={TYPE_FILTER.TEAMS_ONLY} />)
    expect(screen.getByPlaceholderText('Team name')).toBeInTheDocument()

    rerender(<UserSearchBox />)
    expect(
      screen.getByPlaceholderText('Name (first and last) or team name'),
    ).toBeInTheDocument()

    rerender(<UserSearchBox placeholder="Custom placeholder" />)
    expect(
      screen.getByPlaceholderText('Custom placeholder'),
    ).toBeInTheDocument()
  })
})
