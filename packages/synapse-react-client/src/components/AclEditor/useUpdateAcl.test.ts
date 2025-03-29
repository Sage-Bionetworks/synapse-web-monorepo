import { server } from '@/mocks/msw/server'
import { MOCK_USER_ID, MOCK_USER_ID_2 } from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import { act, renderHook as _renderHook, waitFor } from '@testing-library/react'
import useUpdateAcl from './useUpdateAcl'

describe('useUpdateAcl', () => {
  function renderHook() {
    const mockOnChange = jest.fn()
    const mockOnError = jest.fn()
    const renderHookResult = _renderHook(
      () =>
        useUpdateAcl({
          onChange: mockOnChange,
          onError: mockOnError,
        }),
      { wrapper: createWrapper() },
    )

    return {
      ...renderHookResult,
      mockOnChange,
      mockOnError,
    }
  }

  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('handles adding a new resource access item', async () => {
    const { result } = renderHook()
    expect(result.current.resourceAccessList).toHaveLength(0)

    act(() => {
      result.current.addResourceAccessItem(MOCK_USER_ID, [ACCESS_TYPE.READ])
    })

    await waitFor(() =>
      expect(result.current.resourceAccessList).toEqual([
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
      ]),
    )
  })

  it('handles updating a resource access item', async () => {
    const { result } = renderHook()
    expect(result.current.resourceAccessList).toHaveLength(0)

    // Set up the ACL
    act(() => {
      result.current.setResourceAccessList([
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
      ])
    })
    await waitFor(() =>
      expect(result.current.resourceAccessList).toEqual([
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
      ]),
    )

    // Method under test
    act(() => {
      result.current.updateResourceAccessItem(MOCK_USER_ID, [
        ACCESS_TYPE.READ,
        ACCESS_TYPE.UPDATE,
      ])
    })

    await waitFor(() =>
      expect(result.current.resourceAccessList).toEqual([
        {
          principalId: MOCK_USER_ID,
          accessType: [ACCESS_TYPE.READ, ACCESS_TYPE.UPDATE],
        },
      ]),
    )
  })

  it('handles deleting a resource access item', async () => {
    const { result } = renderHook()
    expect(result.current.resourceAccessList).toHaveLength(0)

    // Set up the ACL
    act(() => {
      result.current.setResourceAccessList([
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
      ])
    })
    await waitFor(() =>
      expect(result.current.resourceAccessList).toEqual([
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
      ]),
    )

    // Method under test
    act(() => {
      result.current.removeResourceAccessItem(MOCK_USER_ID)
    })

    await waitFor(() => expect(result.current.resourceAccessList).toEqual([]))
  })

  it('sorts the resourceAccessList when the form has not been edited', async () => {
    const { result } = renderHook()
    expect(result.current.resourceAccessList).toHaveLength(0)

    // Set up the ACL - users with equal permissions should be sorted alphabetically by username
    act(() => {
      result.current.setResourceAccessList([
        // @myUserName
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
        // @AnotherUser
        { principalId: MOCK_USER_ID_2, accessType: [ACCESS_TYPE.READ] },
      ])
    })

    // Verify that the entries were sorted
    await waitFor(() =>
      expect(result.current.resourceAccessList).toEqual([
        // @AnotherUser
        { principalId: MOCK_USER_ID_2, accessType: [ACCESS_TYPE.READ] },
        // @myUserName
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
      ]),
    )
  })

  it('does not sort after making edits', async () => {
    const { result } = renderHook()
    expect(result.current.resourceAccessList).toHaveLength(0)

    // Set up the ACL
    act(() => {
      result.current.setResourceAccessList([
        // @myUserName
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
      ])
    })
    await waitFor(() =>
      expect(result.current.resourceAccessList).toEqual([
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
      ]),
    )

    // Individually adding @AnotherUser should NOT trigger a sort, since the editor is 'dirty'.
    act(() => {
      result.current.addResourceAccessItem(MOCK_USER_ID_2, [ACCESS_TYPE.READ])
    })

    // Verify that the entries are not sorted
    await waitFor(() =>
      expect(result.current.resourceAccessList).toEqual([
        // @myUserName
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
        // @AnotherUser
        { principalId: MOCK_USER_ID_2, accessType: [ACCESS_TYPE.READ] },
      ]),
    )

    // Verify that if we reset the dirty state, the list is re-sorted
    act(() => {
      result.current.resetDirtyState()
    })

    // Verify that the entries are sorted
    await waitFor(() =>
      expect(result.current.resourceAccessList).toEqual([
        // @AnotherUser
        { principalId: MOCK_USER_ID_2, accessType: [ACCESS_TYPE.READ] },
        // @myUserName
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
      ]),
    )
  })
})
