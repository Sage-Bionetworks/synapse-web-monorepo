import React from 'react'
import useGetInfoFromIds, {
  UseGetInfoFromIdsProps,
} from '../../../../src/lib/utils/hooks/useGetInfoFromIds'
import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import { UserProfile } from '../../../../src/lib/utils/synapseTypes'
import { SynapseTestContext } from '../../../../mocks/MockSynapseContext'

const HookWrapper = (props: UseGetInfoFromIdsProps) => {
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

  const SynapseClient = require('../../../../src/lib/utils/SynapseClient')
  const mockFn = jest
    .fn()
    .mockResolvedValueOnce({ children: [{ ownerId: 'aaa' }] })
  SynapseClient.getGroupHeadersBatch = mockFn

  it('gets initial data', async () => {
    const props: UseGetInfoFromIdsProps = {
      ids: ['aaa'],
      type: 'USER_PROFILE',
    }
    await act(async () => {
      ReactDOM.render(
        <SynapseTestContext>
          <HookWrapper {...props} />
        </SynapseTestContext>,
        container,
      )
    })
    const component = container.querySelector<HTMLDivElement>('ul')!
    expect(component).toBeDefined()
    expect(component.querySelectorAll('li')).toHaveLength(1)
  })
})
