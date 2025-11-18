import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import syn16787123 from '@/mocks/query/syn16787123'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseConstants } from '@/utils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import { cloneDeep } from 'lodash-es'
import * as CardContainerModule from '../CardContainer/CardContainer'
import * as QueryVisualizationWrapperModule from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import * as QueryWrapperModule from '../QueryWrapper/QueryWrapper'
import { QueryWrapperProps } from '../QueryWrapper/QueryWrapper'
import { NoContentPlaceholderType } from '../NoContentPlaceholder/NoContentPlaceholderType'
import CardContainerLogic, { CardContainerLogicProps } from './index'

const queryWrapperSpy = vi.spyOn(QueryWrapperModule, 'QueryWrapper')
const queryVisualizationWrapperSpy = vi.spyOn(
  QueryVisualizationWrapperModule,
  'QueryVisualizationWrapper',
)

const renderComponent = (props: CardContainerLogicProps) => {
  return render(<CardContainerLogic {...props} />, { wrapper: createWrapper() })
}

const mockCardContainer = vi
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
    cardConfiguration: { type: SynapseConstants.DATASET },
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
      expect(queryWrapperSpy).toHaveBeenRenderedWithProps(
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
              sql: props.sql!,
              limit: props.limit,
            },
          }),
        }),
      ),
    )

    await waitFor(() =>
      expect(queryVisualizationWrapperSpy).toHaveBeenRenderedWithProps(
        expect.objectContaining({
          rgbIndex: props.rgbIndex,
          unitDescription: props.unitDescription,
          columnAliases: props.columnAliases,
          noContentPlaceholderType: NoContentPlaceholderType.STATIC,
        }),
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
      expect(mockCardContainer).toHaveBeenRenderedWithProps({
        ...props.cardConfiguration,
        rowSet: truncatedQueryResults,
      }),
    )
  })
})
