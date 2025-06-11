import { server } from '@/mocks/msw/server'
import { MOCK_USER_ID, MOCK_USER_ID_2 } from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { useGlobalIsEditingContext } from '@/utils/context/GlobalIsEditingContext'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import { act, renderHook as _renderHook, waitFor } from '@testing-library/react'
import useUpdateAcl from './useUpdateAcl'

vi.mock('@/utils/context/GlobalIsEditingContext', async importOriginal => ({
  ...(await importOriginal()),
  useGlobalIsEditingContext: vi.fn(),
}))

describe('useUpdateAcl', () => {
  function renderHook() {
    const mockOnChange = vi.fn()
    const mockOnError = vi.fn()

    const mockSetIsEditing = vi.fn()
    vi.mocked(useGlobalIsEditingContext).mockReturnValue({
      setIsEditing: mockSetIsEditing,
      isEditing: false,
    })

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
      mockSetIsEditing,
    }
  }

  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('handles adding a new resource access item', async () => {
    const { result, mockSetIsEditing } = renderHook()
    expect(result.current.resourceAccessList).toHaveLength(0)
    expect(mockSetIsEditing).not.toHaveBeenCalledWith(true)

    act(() => {
      result.current.addResourceAccessItem(MOCK_USER_ID, [ACCESS_TYPE.READ])
    })

    await waitFor(() => {
      expect(result.current.resourceAccessList).toEqual([
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
      ])
      expect(mockSetIsEditing).toHaveBeenLastCalledWith(true)
    })
  })

  it('handles updating a resource access item', async () => {
    const { result, mockSetIsEditing } = renderHook()
    expect(result.current.resourceAccessList).toHaveLength(0)

    // Set up the ACL
    act(() => {
      result.current.setResourceAccessList([
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
      ])
    })
    await waitFor(() => {
      expect(result.current.resourceAccessList).toEqual([
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
      ])
      expect(mockSetIsEditing).not.toHaveBeenCalledWith(true)
    })

    // Method under test
    act(() => {
      result.current.updateResourceAccessItem(MOCK_USER_ID, [
        ACCESS_TYPE.READ,
        ACCESS_TYPE.UPDATE,
      ])
    })

    await waitFor(() => {
      expect(result.current.resourceAccessList).toEqual([
        {
          principalId: MOCK_USER_ID,
          accessType: [ACCESS_TYPE.READ, ACCESS_TYPE.UPDATE],
        },
      ])
      expect(mockSetIsEditing).toHaveBeenLastCalledWith(true)
    })
  })

  it('handles deleting a resource access item', async () => {
    const { result, mockSetIsEditing } = renderHook()
    expect(result.current.resourceAccessList).toHaveLength(0)

    // Set up the ACL
    act(() => {
      result.current.setResourceAccessList([
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
      ])
    })
    await waitFor(() => {
      expect(result.current.resourceAccessList).toEqual([
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
      ])
      expect(mockSetIsEditing).not.toHaveBeenCalledWith(true)
    })

    // Method under test
    act(() => {
      result.current.removeResourceAccessItem(MOCK_USER_ID)
    })

    await waitFor(() => {
      expect(result.current.resourceAccessList).toEqual([])
      expect(mockSetIsEditing).toHaveBeenLastCalledWith(true)
    })
  })

  it('sorts the resourceAccessList when the form has not been edited', async () => {
    const { result, mockSetIsEditing } = renderHook()
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
    await waitFor(() => {
      expect(result.current.resourceAccessList).toEqual([
        // @AnotherUser
        { principalId: MOCK_USER_ID_2, accessType: [ACCESS_TYPE.READ] },
        // @myUserName
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
      ])
      expect(mockSetIsEditing).not.toHaveBeenCalledWith(true)
    })
  })

  it('does not sort after making edits', async () => {
    const { result, mockSetIsEditing } = renderHook()
    expect(result.current.resourceAccessList).toHaveLength(0)

    // Set up the ACL
    act(() => {
      result.current.setResourceAccessList([
        // @myUserName
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
      ])
    })
    await waitFor(() => {
      expect(result.current.resourceAccessList).toEqual([
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
      ])
      expect(mockSetIsEditing).not.toHaveBeenCalledWith(true)
    })

    // Individually adding @AnotherUser should NOT trigger a sort, since the editor is 'dirty'.
    act(() => {
      result.current.addResourceAccessItem(MOCK_USER_ID_2, [ACCESS_TYPE.READ])
    })

    // Verify that the entries are not sorted
    await waitFor(() => {
      expect(result.current.resourceAccessList).toEqual([
        // @myUserName
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
        // @AnotherUser
        { principalId: MOCK_USER_ID_2, accessType: [ACCESS_TYPE.READ] },
      ])
      expect(mockSetIsEditing).toHaveBeenLastCalledWith(true)
    })

    // Verify that if we reset the dirty state, the list is re-sorted
    act(() => {
      result.current.resetDirtyState()
    })

    // Verify that the entries are sorted
    await waitFor(() => {
      expect(result.current.resourceAccessList).toEqual([
        // @AnotherUser
        { principalId: MOCK_USER_ID_2, accessType: [ACCESS_TYPE.READ] },
        // @myUserName
        { principalId: MOCK_USER_ID, accessType: [ACCESS_TYPE.READ] },
      ])
      expect(mockSetIsEditing).toHaveBeenLastCalledWith(false)
    })
  })
})
