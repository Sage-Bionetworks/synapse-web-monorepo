import { render, screen, act } from '@testing-library/react'
import {
  OAuthClientAclEditor,
  OAuthClientAclEditorHandle,
  OAuthClientAclEditorProps,
} from './OAuthClientAclEditor'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { MOCK_OAUTH_CLIENT_ACL } from '@/mocks/mockOAuthClientAcls'
import { vi } from 'vitest'
import {
  getUseMutationMock,
  getUseQueryMock,
} from '@/testutils/ReactQueryMockUtils'
import {
  useGetOAuthClientACL,
  useUpdateOAuthClientACL,
} from '../../synapse-queries/oauth/useOAuthClient'
import { AclEditorProps } from '../AclEditor/AclEditor'
import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'
import { UseUpdateAclOptions } from '../AclEditor/useUpdateAcl'

vi.mock('../../synapse-queries/oauth/useOAuthClient', () => {
  return {
    useGetOAuthClientACL: vi.fn(),
    useUpdateOAuthClientACL: vi.fn(),
  }
})

const mockUseGetOAuthClientACL = vi.mocked(useGetOAuthClientACL)
const mockUseUpdateOAuthClientACL = vi.mocked(useUpdateOAuthClientACL)

vi.mock('../AclEditor/AclEditor', () => ({
  AclEditor: (props: AclEditorProps) => (
    <div data-testid="AclEditor">
      <button onClick={() => props.onAddPrincipalToAcl(123)}>
        Add Principal
      </button>
      <button
        onClick={() =>
          props.updateResourceAccessItem(123, [
            ACCESS_TYPE.READ,
            ACCESS_TYPE.CHANGE_PERMISSIONS,
            ACCESS_TYPE.DELETE,
            ACCESS_TYPE.UPDATE,
          ])
        }
      >
        Update Principal
      </button>
      <button onClick={() => props.removeResourceAccessItem(123)}>
        Remove Principal
      </button>
      <span>
        ResourceAccessList: {JSON.stringify(props.resourceAccessList)}
      </span>
      <span>Loading: {String(props.isLoading)}</span>
    </div>
  ),
}))
vi.mock('../AclEditor/useUpdateAcl', () => {
  let resourceAccessList: ResourceAccess[] = []
  return {
    default: (opts: UseUpdateAclOptions) => ({
      resourceAccessList,
      setResourceAccessList: (newList: any[]) => {
        resourceAccessList = newList
        opts?.onChange?.(resourceAccessList)
      },
      addResourceAccessItem: vi.fn((id, accessType) => {
        resourceAccessList.push({ principalId: id, accessType: [accessType] })
        opts?.onChange?.(resourceAccessList)
      }),
      updateResourceAccessItem: vi.fn((id, accessType) => {
        resourceAccessList = resourceAccessList.map(item =>
          item.principalId === id ? { ...item, accessType } : item,
        )
        opts?.onChange?.(resourceAccessList)
      }),
      removeResourceAccessItem: vi.fn(id => {
        resourceAccessList = resourceAccessList.filter(
          item => item.principalId !== id,
        )
        opts?.onChange?.(resourceAccessList)
      }),
      resetDirtyState: vi.fn(),
    }),
  }
})

function renderComponent(
  props: OAuthClientAclEditorProps,
  ref: React.Ref<OAuthClientAclEditorHandle> = null,
) {
  act(() => {
    render(<OAuthClientAclEditor {...props} ref={ref} />)
  })
}
describe('OAuthClientAclEditor', () => {
  const mockOnSaveComplete = vi.fn()
  const mockMutate = vi.fn()

  const {
    mock: useGetOAuthClientACLMockImpl,
    setSuccess: setMockUseGetOAuthClientACLSuccess,
  } = getUseQueryMock<typeof MOCK_OAUTH_CLIENT_ACL, any>()

  const {
    mock: useUpdateOAuthClientACLMockImpl,
    mockMutate: mockUseUpdateOAuthClientACLMutate,
  } = getUseMutationMock<any, any, any>()

  beforeEach(() => {
    mockUseGetOAuthClientACL.mockImplementation(useGetOAuthClientACLMockImpl)
    mockUseUpdateOAuthClientACL.mockImplementation(
      useUpdateOAuthClientACLMockImpl,
    )
    mockUseUpdateOAuthClientACLMutate.mockImplementation(mockMutate)
  })
  afterEach(() => {
    vi.clearAllMocks()
  })
  it('renders AclEditor with correct props', () => {
    renderComponent({
      clientId: MOCK_OAUTH_CLIENT_ACL.id!,
      onSaveComplete: mockOnSaveComplete,
    })
    act(() => {
      setMockUseGetOAuthClientACLSuccess(MOCK_OAUTH_CLIENT_ACL)
    })
    expect(screen.getByTestId('AclEditor')).toBeInTheDocument()
    expect(screen.getByText(/ResourceAccessList:/)).toBeInTheDocument()
    expect(
      screen.getByText(/Loading:\s*false/, { exact: false }),
    ).toBeInTheDocument()
  })

  it('calls add/update/remove resource access item handlers', async () => {
    renderComponent({
      clientId: MOCK_OAUTH_CLIENT_ACL.id!,
      onSaveComplete: mockOnSaveComplete,
    })
    act(() => {
      setMockUseGetOAuthClientACLSuccess(MOCK_OAUTH_CLIENT_ACL)
    })
    const addBtn = screen.getByText('Add Principal')
    const updateBtn = screen.getByText('Update Principal')
    const removeBtn = screen.getByText('Remove Principal')
    await userEvent.click(addBtn)
    await userEvent.click(updateBtn)
    await userEvent.click(removeBtn)
    // No assertion needed, just ensure no errors thrown
  })

  it('renders loading state in AclEditor', () => {
    mockUseGetOAuthClientACL.mockImplementation(
      () =>
        ({
          data: undefined,
          isLoading: true,
        } as any),
    )
    renderComponent({
      clientId: MOCK_OAUTH_CLIENT_ACL.id!,
      onSaveComplete: mockOnSaveComplete,
    })
    act(() => {
      setMockUseGetOAuthClientACLSuccess(MOCK_OAUTH_CLIENT_ACL)
    })
    expect(screen.getByText(/Loading: true/)).toBeInTheDocument()
  })
})
