import useGetInfoFromIds, { UseGetInfoFromIdsProps } from './useGetInfoFromIds'
import {
  UserGroupHeader,
  UserGroupHeaderResponsePage,
} from '@sage-bionetworks/synapse-types'
import SynapseClient from '../../synapse-client'
import { renderHook, waitFor } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'

const mockGroupHeaders: UserGroupHeaderResponsePage = {
  children: [{ ownerId: 'aaa', userName: 'aaa', isIndividual: true }],
}

jest
  .spyOn(SynapseClient, 'getGroupHeadersBatch')
  .mockResolvedValueOnce(mockGroupHeaders)

describe('useGetInfoFromIds hook works', () => {
  it('gets initial data', async () => {
    const props: UseGetInfoFromIdsProps<UserGroupHeader> = {
      ids: ['aaa'],
      type: 'USER_PROFILE',
    }

    const hook = renderHook(() => useGetInfoFromIds(props), {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(hook.result.current).toEqual(mockGroupHeaders.children)
      expect(hook.result.current).toHaveLength(1)
    })
  })
})
