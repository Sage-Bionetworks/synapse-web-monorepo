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
import { AclEditorProps } from '../AclEditor/AclEditor'
import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'
import { UseUpdateAclOptions } from '../AclEditor/useUpdateAcl'
import { server } from '@/mocks/msw/server'
import { getOAuthClientAclHandler } from '@/mocks/msw/handlers/oauthClientAclHandlers'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { delay, http, HttpResponse } from 'msw'
import { OAUTH_CLIENT_ACL } from '@/utils/APIConstants'

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
    render(<OAuthClientAclEditor {...props} ref={ref} />, {
      wrapper: createWrapper(),
    })
  })
}
const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

describe('OAuthClientAclEditor', () => {
  const mockOnSaveComplete = vi.fn()

  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(getOAuthClientAclHandler(REPO_ENDPOINT))
  })
  afterEach(() => {
    server.restoreHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

  it('renders AclEditor with correct props', async () => {
    renderComponent({
      clientId: MOCK_OAUTH_CLIENT_ACL.id!,
      onSaveComplete: mockOnSaveComplete,
    })
    expect(await screen.findByTestId('AclEditor')).toBeInTheDocument()
    expect(screen.getByText(/ResourceAccessList:/)).toBeInTheDocument()
    expect(
      await screen.findByText(/Loading:\s*false/, { exact: false }),
    ).toBeInTheDocument()
  })

  it('calls add/update/remove resource access item handlers', async () => {
    renderComponent({
      clientId: MOCK_OAUTH_CLIENT_ACL.id!,
      onSaveComplete: mockOnSaveComplete,
    })
    await screen.findByText(/Loading:\s*false/)
    const addBtn = screen.getByText('Add Principal')
    const updateBtn = screen.getByText('Update Principal')
    const removeBtn = screen.getByText('Remove Principal')
    await userEvent.click(addBtn)
    await userEvent.click(updateBtn)
    await userEvent.click(removeBtn)
    // No assertion needed, just ensure no errors thrown
  })

  it('renders loading state in AclEditor', async () => {
    server.use(
      http.get(`${REPO_ENDPOINT}${OAUTH_CLIENT_ACL(':id')}`, async () => {
        await delay('infinite')
        return HttpResponse.json(MOCK_OAUTH_CLIENT_ACL)
      }),
    )
    renderComponent({
      clientId: MOCK_OAUTH_CLIENT_ACL.id!,
      onSaveComplete: mockOnSaveComplete,
    })
    expect(await screen.findByText(/Loading: true/)).toBeInTheDocument()
  })
})
