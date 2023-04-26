import { render, screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import { SynapseConstants } from '../../../../src/lib/utils'
import CardContainerLogic, {
  CardContainerLogicProps,
} from '../../../../src/lib/containers/CardContainerLogic'
import * as QueryVisualizationWrapperModule from '../../../../src/lib/containers/QueryVisualizationWrapper'
import { QueryVisualizationWrapper } from '../../../../src/lib/containers/QueryVisualizationWrapper'
import * as InfiniteQueryWrapperModule from '../../../../src/lib/containers/InfiniteQueryWrapper'
import { InfiniteQueryWrapper } from '../../../../src/lib/containers/InfiniteQueryWrapper'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { NoContentPlaceholderType } from '../../../../src/lib/containers/table/NoContentPlaceholderType'
import * as CardContainerModule from '../../../../src/lib/containers/CardContainer'

const renderComponent = (props: CardContainerLogicProps) => {
  return render(<CardContainerLogic {...props} />, { wrapper: createWrapper() })
}

const mockCardContainer = jest
  .spyOn(CardContainerModule, 'default')
  .mockImplementation(props => {
    return <div data-testid="CardContainer"></div>
  })

jest
  .spyOn(InfiniteQueryWrapperModule, 'InfiniteQueryWrapper')
  .mockImplementation(props => {
    return <div data-testid="InfiniteQueryWrapper">{props.children}</div>
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
    await screen.findByTestId('InfiniteQueryWrapper')
  })

  it('passes down props correctly', async () => {
    renderComponent(props)

    await waitFor(() =>
      expect(InfiniteQueryWrapper).toHaveBeenCalledWith(
        expect.objectContaining({
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
