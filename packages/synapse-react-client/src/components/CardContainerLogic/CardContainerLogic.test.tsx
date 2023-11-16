import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { SynapseConstants } from '../../utils'
import CardContainerLogic, { CardContainerLogicProps } from './index'
import * as QueryVisualizationWrapperModule from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { NoContentPlaceholderType } from '../SynapseTable/NoContentPlaceholderType'
import * as CardContainerModule from '../CardContainer/CardContainer'
import QueryWrapper from '../QueryWrapper'

jest.mock('../../../src/components/QueryWrapper/QueryWrapper', () => ({
  QueryWrapper: jest.fn(props => {
    return <div data-testid="QueryWrapper">{props.children}</div>
  }),
}))

const mockQueryWrapper = jest.mocked(QueryWrapper)

const renderComponent = (props: CardContainerLogicProps) => {
  return render(<CardContainerLogic {...props} />, { wrapper: createWrapper() })
}

const mockCardContainer = jest
  .spyOn(CardContainerModule, 'default')
  .mockImplementation(props => {
    return <div data-testid="CardContainer"></div>
  })

jest
  .spyOn(QueryVisualizationWrapperModule, 'QueryVisualizationWrapper')
  .mockImplementation(props => {
    return <div data-testid="QueryVisualizationWrapper">{props.children}</div>
  })

describe('it performs basic functionality', () => {
  const sql = 'SELECT * FROM syn16787123'

  const props: CardContainerLogicProps = {
    sql,
    limit: 5,
    unitDescription: 'files',
    type: SynapseConstants.STUDY,
    rgbIndex: 2,
    columnAliases: { facetName: 'alias' },
  }

  it('renders without crashing', async () => {
    const { container } = renderComponent(props)
    expect(container).toBeDefined()
    await screen.findByTestId('CardContainer')
    await screen.findByTestId('QueryVisualizationWrapper')
    await screen.findByTestId('QueryWrapper')
  })

  it('passes down props correctly', async () => {
    renderComponent(props)

    await waitFor(() =>
      expect(mockQueryWrapper).toHaveBeenCalledWith(
        expect.objectContaining({
          isInfinite: true,
          initQueryRequest: expect.objectContaining({
            concreteType:
              'org.sagebionetworks.repo.model.table.QueryBundleRequest',
            entityId: 'syn16787123',
            partMask:
              SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
              SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
              SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
              SynapseConstants.BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE |
              SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
              SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
              SynapseConstants.BUNDLE_MASK_SUM_FILES_SIZE_BYTES |
              SynapseConstants.BUNDLE_MASK_LAST_UPDATED_ON,
            query: {
              sql: props.sql,
              limit: props.limit,
            },
          }),
        }),
        expect.anything(),
      ),
    )

    await waitFor(() =>
      expect(QueryVisualizationWrapper).toHaveBeenCalledWith(
        expect.objectContaining({
          rgbIndex: props.rgbIndex,
          unitDescription: props.unitDescription,
          columnAliases: props.columnAliases,
          noContentPlaceholderType: NoContentPlaceholderType.STATIC,
        }),
        expect.anything(),
      ),
    )

    await waitFor(() =>
      expect(mockCardContainer).toHaveBeenCalledWith(props, expect.anything()),
    )
  })
})
