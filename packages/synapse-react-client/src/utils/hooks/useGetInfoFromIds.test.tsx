import React from 'react'
import useGetInfoFromIds, { UseGetInfoFromIdsProps } from './useGetInfoFromIds'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import { UserGroupHeader, UserProfile } from '@sage-bionetworks/synapse-types'
import { SynapseTestContext } from '../../mocks/MockSynapseContext'
import SynapseClient from '../../synapse-client'
import { waitFor } from '@testing-library/react'

jest.mock('../../synapse-client', () => ({
  getGroupHeadersBatch: jest.fn(),
}))

const HookWrapper = (props: UseGetInfoFromIdsProps<any>) => {
  const useHookGetProfilesHook = useGetInfoFromIds(props) as UserProfile[]
  return (
    <ul>
      {useHookGetProfilesHook.map(el => (
        <li key={el.ownerId}> {el.ownerId} </li>
      ))}
    </ul>
  )
}

describe('useGetInfoFromIds hook works', () => {
  let container: HTMLDivElement
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container!)
    // @ts-ignore
    container = null
  })

  const mockGetGroupHeadersBatch = jest.mocked(
    SynapseClient.getGroupHeadersBatch,
  )
  mockGetGroupHeadersBatch.mockResolvedValueOnce({
    children: [{ ownerId: 'aaa', userName: 'aaa', isIndividual: true }],
  })

  it('gets initial data', async () => {
    const props: UseGetInfoFromIdsProps<UserGroupHeader> = {
      ids: ['aaa'],
      type: 'USER_PROFILE',
    }
    act(() => {
      ReactDOM.render(
        <SynapseTestContext>
          <HookWrapper {...props} />
        </SynapseTestContext>,
        container,
      )
    })
    await waitFor(() => {
      const component = container.querySelector<HTMLDivElement>('ul')!
      expect(component).toBeDefined()
      expect(component.querySelectorAll('li')).toHaveLength(1)
    })
  })
})
