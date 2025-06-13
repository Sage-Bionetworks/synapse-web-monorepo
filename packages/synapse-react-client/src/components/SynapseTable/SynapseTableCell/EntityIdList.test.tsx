import mockFileEntity from '@/mocks/entity/mockFileEntity'
import {
  MOCK_CONTEXT_VALUE,
  SynapseTestContext,
} from '@/mocks/MockSynapseContext'
import SynapseClient from '@/synapse-client'
import { getEntityHeaders } from '@/synapse-client/SynapseClient'
import { act, render, screen, waitFor } from '@testing-library/react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import EntityIdList, { EntityIdListProps } from './EntityIdList'

vi.spyOn(SynapseClient, 'getEntityHeaders').mockResolvedValue({
  results: [mockFileEntity.entityHeader],
})

describe('EntityIdList: basic functionality', () => {
  const props: EntityIdListProps = {
    entityIdList: ['syn123', 'syn345'],
  }

  it('renders and retrieves data without crashing', async () => {
    render(<EntityIdList {...props} />, {
      wrapper: SynapseTestContext,
    })
    act(() => {
      mockAllIsIntersecting(true)
    })
    await waitFor(() =>
      expect(getEntityHeaders).toHaveBeenCalledWith(
        [
          { targetId: props.entityIdList[0] },
          { targetId: props.entityIdList[1] },
        ],
        MOCK_CONTEXT_VALUE.accessToken,
      ),
    )
    await screen.findByText(mockFileEntity.entityHeader.name)
  })
})
