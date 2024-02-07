import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { cloneDeep } from 'lodash-es'
import React from 'react'
import { QueryVisualizationWrapper } from '../../QueryVisualizationWrapper/QueryVisualizationWrapper'
import PlotsContainer, {
  PlotsContainerProps,
} from '../../widgets/facet-nav/PlotsContainer'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { SynapseConstants } from '../../../utils'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import testData from '../../../mocks/mockQueryResponseDataWithManyEnumFacets'
import { server } from '../../../mocks/msw/server'
import failOnConsole from 'jest-fail-on-console'
import { DEFAULT_PAGE_SIZE } from '../../../utils/SynapseConstants'
import { CLOSE_BUTTON_LABEL } from '../../DialogBase'
import { QueryWrapper } from '../../QueryWrapper'
import { getHandlersForTableQuery } from '../../../mocks/msw/handlers/tableQueryHandlers'
import { mockTableEntity } from '../../../mocks/entity/mockTableEntity'

const lastQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  partMask:
    SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
    SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
    SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
    SynapseConstants.BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE |
    SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
    SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
    SynapseConstants.BUNDLE_MASK_SUM_FILES_SIZE_BYTES |
    SynapseConstants.BUNDLE_MASK_LAST_UPDATED_ON |
    SynapseConstants.BUNDLE_MASK_COMBINED_SQL |
    SynapseConstants.BUNDLE_MASK_ACTIONS_REQUIRED,
  entityId: mockTableEntity.id,
  query: {
    sql: `select * from ${mockTableEntity.id}`,
    limit: DEFAULT_PAGE_SIZE,
    offset: 0,
  },
}

function getButtonOnFacet(
  text: string,
  facetIndex: number = 0,
): HTMLElement | undefined {
  const itemList = screen.getAllByLabelText(text, { exact: false })
  if (itemList ? [facetIndex] : undefined) {
    return itemList[facetIndex]
  } else {
    return undefined
  }
}

function init(props?: PlotsContainerProps) {
  render(
    <QueryWrapper initQueryRequest={lastQueryRequest}>
      <QueryVisualizationWrapper>
        <PlotsContainer {...props} />
      </QueryVisualizationWrapper>
    </QueryWrapper>,
    {
      wrapper: createWrapper(),
    },
  )
}

describe('facets display hide/show', () => {
  failOnConsole()
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(...getHandlersForTableQuery(testData))
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it("should display 2 facets with 'show more' button", async () => {
    init()
    await waitFor(() => {
      expect(screen.getAllByRole('figure')).toHaveLength(2)
    })
    await screen.findByRole('button', { name: 'View All Charts' })
  })

  it('shows all facet plots when show more is clicked', async () => {
    init()
    await waitFor(() => {
      expect(screen.getAllByRole('figure')).toHaveLength(2)
    })

    const showMoreButton = await screen.findByRole('button', {
      name: 'View All Charts',
    })

    await userEvent.click(showMoreButton)

    const expectedLength = testData.facets!.filter(
      facet => facet.facetType === 'enumeration',
    ).length

    expect(await screen.findAllByRole('figure')).toHaveLength(expectedLength)

    expect(screen.queryByText('View All Charts')).not.toBeInTheDocument()
  })

  it('if there are only 2 facets, show more button should not exist', async () => {
    const data = cloneDeep(testData)
    data.facets = [data.facets![0], data.facets![2]]
    server.use(...getHandlersForTableQuery(data))
    init()
    expect(await screen.findAllByRole('figure')).toHaveLength(2)

    await waitFor(() =>
      expect(screen.queryByText('View All Charts')).not.toBeInTheDocument(),
    )
  })

  it("should only show specified facets if 'facetsToPlot' are set", async () => {
    init({
      facetsToPlot: ['Make', 'Model'],
    })

    // Only two plots are shown and the button is hidden
    expect(await screen.findAllByRole('figure')).toHaveLength(2)
    await waitFor(() =>
      expect(screen.queryByText('View All Charts')).not.toBeInTheDocument(),
    )
  })

  it('hiding facet should hide it from facet grid', async () => {
    init()
    await waitFor(() => {
      expect(screen.getAllByRole('figure')).toHaveLength(2)
    })
    const closeFacetPlotButton = getButtonOnFacet('Hide graph', 0)!
    await userEvent.click(closeFacetPlotButton)
    expect(await screen.findAllByRole('figure')).toHaveLength(1)
  })

  it('expanding facet should additionally show the facet in a modal', async () => {
    init()
    await waitFor(() => {
      expect(screen.getAllByRole('figure')).toHaveLength(2)
    })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    const expandButton = getButtonOnFacet('expand', 1)!
    await userEvent.click(expandButton)
    const dialog = await screen.findByRole('dialog')
    await within(dialog).findByRole('figure')

    // Close the modal
    await userEvent.click(
      screen.getByRole('button', { name: CLOSE_BUTTON_LABEL }),
    )
    await waitFor(() => expect(screen.getAllByRole('figure')).toHaveLength(2))
  })
})
