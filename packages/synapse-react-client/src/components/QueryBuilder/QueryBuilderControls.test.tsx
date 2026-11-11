import { ELITE_MOCK_PROFILE } from '@/mocks/cohortBuilder/cohortBuilderMockProfiles'
import { getCohortBuilderHandlers } from '@/mocks/msw/handlers/cohortBuilderHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_FACETS,
} from '@/utils/SynapseConstants'
import {
  ColumnSingleValueFilterOperator,
  FILTER_GROUP_CONCRETE_TYPE_VALUE,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { cloneDeep } from 'lodash-es'
import { Suspense } from 'react'
import { useQueryContext } from '../QueryContext/QueryContext'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
import { QueryWrapper } from '../QueryWrapper/QueryWrapper'
import {
  QB_INEXPRESSIBLE_APPLIED_CONDITIONS_TEXT,
  QueryBuilderControls,
} from './QueryBuilderControls'
import {
  FILTER_LIMIT_VIOLATION_MESSAGES,
  MAX_FILTER_GROUP_DEPTH,
} from './queryBuilderLimits'
import { newBlankCondition, newEmptyGroup } from './queryBuilderOperations'
import { QBGroup, QBNode } from './QueryBuilderTypes'

const participantsTableId = ELITE_MOCK_PROFILE.participantsVirtualTableId
const queryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  partMask:
    BUNDLE_MASK_QUERY_COUNT |
    BUNDLE_MASK_QUERY_COLUMN_MODELS |
    BUNDLE_MASK_QUERY_FACETS,
  entityId: participantsTableId,
  query: { sql: `SELECT * FROM ${participantsTableId}` },
}

/** `depth` nested groups (the root is the first) with `innermost` inside the deepest one. */
function nestedTree(depth: number, innermost: QBNode): QBGroup {
  let node: QBNode = innermost
  for (let level = 0; level < depth; level++) {
    node = { ...newEmptyGroup(), children: [node] }
  }
  return node as QBGroup
}

function renderQueryBuilder(
  tree: QBGroup | null,
  initQueryRequest: QueryBundleRequest = queryRequest,
) {
  render(
    <QueryWrapper initQueryRequest={initQueryRequest}>
      <QueryVisualizationWrapper>
        <Suspense fallback={null}>
          <QueryBuilderControls tree={tree} onTreeChange={vi.fn()} />
        </Suspense>
      </QueryVisualizationWrapper>
    </QueryWrapper>,
    { wrapper: createWrapper() },
  )
}

describe('QueryBuilderControls', () => {
  beforeEach(() => {
    server.use(...getCohortBuilderHandlers({ profile: ELITE_MOCK_PROFILE }))
  })

  const allOfCondition = {
    ...newBlankCondition('fileFormat', 'STRING_LIST'),
    op: 'is_all_of' as const,
    values: ['CSV', 'VCF'],
  }

  it('blocks Update Results when an is_all_of condition would expand past the maximum nesting depth', async () => {
    // At the deepest allowed group, a two-value is_all_of becomes one more nested group.
    renderQueryBuilder(nestedTree(MAX_FILTER_GROUP_DEPTH, allOfCondition))

    const updateResults = await screen.findByRole('button', {
      name: 'Update Results',
    })
    expect(updateResults).toBeDisabled()
    expect(updateResults).toHaveAccessibleDescription(
      FILTER_LIMIT_VIOLATION_MESSAGES.depth,
    )
  })

  it('allows Update Results when the filters are within the limits', async () => {
    renderQueryBuilder(nestedTree(MAX_FILTER_GROUP_DEPTH - 1, allOfCondition))

    expect(
      await screen.findByRole('button', { name: 'Update Results' }),
    ).toBeEnabled()
    expect(
      screen.queryByText(FILTER_LIMIT_VIOLATION_MESSAGES.depth),
    ).not.toBeInTheDocument()
  })

  it('keeps the default tree, and so each condition row, across re-renders when no tree is passed', async () => {
    const user = userEvent.setup()
    renderQueryBuilder(null)
    const propertyInput = await screen.findByRole('combobox', {
      name: 'Property',
    })

    // Any state change re-renders the Query Builder.
    await user.click(screen.getByRole('button', { name: 'Show SQL' }))

    expect(propertyInput).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: 'Property' })).toBe(
      propertyInput,
    )
  })

  it('shows the SQL for the conditions with one clause and condition per line', async () => {
    const user = userEvent.setup()
    renderQueryBuilder(null, {
      ...queryRequest,
      query: {
        ...queryRequest.query,
        additionalFilters: [
          {
            concreteType: FILTER_GROUP_CONCRETE_TYPE_VALUE,
            operator: 'AND',
            children: [
              {
                concreteType:
                  'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
                columnName: 'sex',
                operator: ColumnSingleValueFilterOperator.IN,
                values: ['Female'],
              },
              {
                concreteType:
                  'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
                columnName: 'sex',
                operator: ColumnSingleValueFilterOperator.IS_NOT_NULL,
                values: [],
              },
            ],
          },
        ],
      },
    })
    await screen.findAllByRole('group', { name: 'Filter condition on sex' })

    await user.click(screen.getByRole('button', { name: 'Show SQL' }))

    const sql = await screen.findByRole('code')
    expect(sql.textContent).toBe(
      [
        'SELECT',
        '  *',
        'FROM',
        `  ${participantsTableId}`,
        'WHERE',
        '  (',
        `    "sex" IN ('Female')`,
        '    AND "sex" IS NOT NULL',
        '  )',
      ].join('\n'),
    )
  })

  it('warns, and starts from an empty tree, when it cannot show the applied conditions exactly', async () => {
    // A LIKE pattern with an inner wildcard has no Query Builder operator.
    renderQueryBuilder(null, {
      ...queryRequest,
      query: {
        ...queryRequest.query,
        additionalFilters: [
          {
            concreteType: FILTER_GROUP_CONCRETE_TYPE_VALUE,
            operator: 'AND',
            children: [
              {
                concreteType:
                  'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
                columnName: 'sex',
                operator: ColumnSingleValueFilterOperator.LIKE,
                values: ['F%e'],
              },
            ],
          },
        ],
      },
    })

    expect(
      await screen.findByText(QB_INEXPRESSIBLE_APPLIED_CONDITIONS_TEXT),
    ).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: 'Property' })).toHaveValue('')
  })

  it('keeps the rows of the applied conditions when the query changes in other ways', async () => {
    const user = userEvent.setup()
    // Rebuilds the request from scratch, so the applied conditions are equal but no longer the same objects.
    function ChangeOffsetButton() {
      const { executeQueryRequest } = useQueryContext()
      return (
        <button
          onClick={() =>
            executeQueryRequest(prev => ({
              ...cloneDeep(prev),
              query: { ...cloneDeep(prev.query), offset: 25 },
            }))
          }
        >
          Change offset
        </button>
      )
    }
    render(
      <QueryWrapper
        initQueryRequest={{
          ...queryRequest,
          query: {
            ...queryRequest.query,
            additionalFilters: [
              {
                concreteType: FILTER_GROUP_CONCRETE_TYPE_VALUE,
                operator: 'AND',
                children: [
                  {
                    concreteType:
                      'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
                    columnName: 'sex',
                    operator: ColumnSingleValueFilterOperator.IN,
                    values: ['Female'],
                  },
                ],
              },
            ],
          },
        }}
      >
        <QueryVisualizationWrapper>
          <ChangeOffsetButton />
          <Suspense fallback={null}>
            <QueryBuilderControls tree={null} onTreeChange={vi.fn()} />
          </Suspense>
        </QueryVisualizationWrapper>
      </QueryWrapper>,
      { wrapper: createWrapper() },
    )
    const row = await screen.findByRole('group', {
      name: 'Filter condition on sex',
    })

    await user.click(screen.getByRole('button', { name: 'Change offset' }))

    expect(
      await screen.findByRole('group', { name: 'Filter condition on sex' }),
    ).toBe(row)
  })
})
