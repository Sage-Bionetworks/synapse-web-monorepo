import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { SynapseConstants } from '../../utils'
import CardContainerLogic, { CardContainerLogicProps } from './index'
import * as QueryVisualizationWrapperModule from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { NoContentPlaceholderType } from '../SynapseTable/NoContentPlaceholderType'
import * as CardContainerModule from '../CardContainer/CardContainer'
import * as QueryWrapperModule from '../QueryWrapper/QueryWrapper'
import { QueryWrapperProps } from '../QueryWrapper/QueryWrapper'
import { server } from '../../mocks/msw/server'
import syn16787123 from '../../mocks/query/syn16787123'
import { cloneDeep } from 'lodash-es'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { registerTableQueryResult } from '../../mocks/msw/handlers/tableQueryService'

const queryWrapperSpy = jest.spyOn(QueryWrapperModule, 'QueryWrapper')
const queryVisualizationWrapperSpy = jest.spyOn(
  QueryVisualizationWrapperModule,
  'QueryVisualizationWrapper',
)

const renderComponent = (props: CardContainerLogicProps) => {
  return render(<CardContainerLogic {...props} />, { wrapper: createWrapper() })
}

const mockCardContainer = jest
  .spyOn(CardContainerModule, 'CardContainer')
  .mockImplementation(() => {
    return <div data-testid="CardContainer"></div>
  })

describe('it performs basic functionality', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    registerTableQueryResult({ sql }, syn16787123)
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

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
  })

  it('passes down props correctly', async () => {
    renderComponent(props)

    await waitFor(() =>
      expect(queryWrapperSpy).toHaveBeenCalledWith(
        expect.objectContaining<QueryWrapperProps>({
          isInfinite: true,
          initQueryRequest: expect.objectContaining<QueryBundleRequest>({
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
      expect(queryVisualizationWrapperSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          rgbIndex: props.rgbIndex,
          unitDescription: props.unitDescription,
          columnAliases: props.columnAliases,
          noContentPlaceholderType: NoContentPlaceholderType.STATIC,
        }),
        expect.anything(),
      ),
    )

    const truncatedQueryResults = cloneDeep(
      syn16787123.queryResult.queryResults,
    )
    truncatedQueryResults.rows = truncatedQueryResults.rows.slice(
      0,
      props.limit,
    )

    await waitFor(() =>
      expect(mockCardContainer).toHaveBeenCalledWith(
        { ...props, rowSet: truncatedQueryResults },
        expect.anything(),
      ),
    )
  })
})
