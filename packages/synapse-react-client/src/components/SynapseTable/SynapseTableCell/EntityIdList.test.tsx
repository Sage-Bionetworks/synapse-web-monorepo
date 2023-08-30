import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { act, render, screen, waitFor } from '@testing-library/react'
import {
  MOCK_CONTEXT_VALUE,
  SynapseTestContext,
} from '../../../mocks/MockSynapseContext'
import mockFileEntity from '../../../mocks/entity/mockFileEntity'
import { getEntityHeaders } from '../../../synapse-client/SynapseClient'
import SynapseClient from '../../../synapse-client'
import EntityIdList, { EntityIdListProps } from './EntityIdList'

jest
  .spyOn(SynapseClient, 'getEntityHeaders')
  .mockResolvedValue({ results: [mockFileEntity.entityHeader] })

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
