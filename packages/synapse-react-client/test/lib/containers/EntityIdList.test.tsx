import * as React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import EntityIdList, {
  EntityIdListProps,
} from '../../../src/lib/containers/EntityIdList'
import { act } from '@testing-library/react'
import {
  MOCK_CONTEXT_VALUE,
  SynapseTestContext,
} from '../../../mocks/MockSynapseContext'
import { render, screen, waitFor } from '@testing-library/react'
import mockFileEntity from '../../../mocks/entity/mockFileEntity'
import { getEntityHeadersByIds } from '../../../src/lib/utils/SynapseClient'
import { SynapseClient } from '../../../src/lib/utils'

jest
  .spyOn(SynapseClient, 'getEntityHeadersByIds')
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
      expect(getEntityHeadersByIds).toBeCalledWith(
        props.entityIdList,
        MOCK_CONTEXT_VALUE.accessToken,
      ),
    )
    await screen.findByText(mockFileEntity.entityHeader.name)
  })
})
