/* eslint jest/no-conditional-expect: 0 */
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { cloneDeep } from 'lodash-es'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { SynapseConstants } from '../../utils'
import {
  QueryVisualizationWrapper,
  QueryVisualizationWrapperProps,
} from '../QueryVisualizationWrapper'
import SynapseTable, { SynapseTableProps } from './SynapseTable'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { ENTITY_HEADERS, ENTITY_ID_VERSION } from '../../utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import { DEFAULT_PAGE_SIZE } from '../../utils/SynapseConstants'
import {
  EntityHeader,
  FileEntity,
  PaginatedResults,
  QueryBundleRequest,
  QueryResultBundle,
  Reference,
  ReferenceList,
  RestrictionInformationResponse,
  RestrictionLevel,
  Table,
} from '@sage-bionetworks/synapse-types'
import { rest, server } from '../../mocks/msw/server'
import queryResultBundle from '../../mocks/query/syn16787123'
import { MOCK_USER_ID } from '../../mocks/user/mock_user_profile'
import * as HasAccessModule from '../HasAccess/HasAccessV2'
import * as UserCardModule from '../UserCard/UserCard'
import * as AddToDownloadListV2Module from '../AddToDownloadListV2'
import {
  QueryContextConsumer,
  QueryContextType,
  QueryWrapper,
  QueryWrapperProps,
} from '../../index'
import { getHandlersForTableQuery } from '../../mocks/msw/handlers/tableQueryHandlers'
import {
  MOCK_TABLE_ENTITY_ID,
  mockTableEntity,
} from '../../mocks/entity/mockTableEntity'
import { mockProjectIds } from '../../mocks/entity/mockProject'
import { mockFileHandle } from '../../mocks/mock_file_handle'
import { mockFileViewEntity } from '../../mocks/entity/mockFileView'
import { mockProjectViewEntity } from '../../mocks/entity/mockProjectView'
import { mockDatasetEntity } from '../../mocks/entity/mockDataset'
import { mockQueryResult } from '../../mocks/query/mockProjectViewQueryResults'

const synapseTableEntityId = 'syn16787123'

const mixedEntityView = cloneDeep(mockFileViewEntity)
mixedEntityView.viewTypeMask = 0x1 | 0x2 | 0x4 | 0x8 | 0x10 | 0x20

const totalColumns = 13

let queryContext: QueryContextType | undefined

function renderTable(
  props?: SynapseTableProps,
  queryWrapperPropOverrides?: Partial<QueryWrapperProps>,
  mockEntity: Table = mockTableEntity,
  queryVisualizationWrapperProps?: Partial<QueryVisualizationWrapperProps>,
) {
  const initQueryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    entityId: mockEntity.id!,
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS |
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_COUNT,
    query: {
      sql: `SELECT * FROM ${mockEntity.id!}`,
      limit: DEFAULT_PAGE_SIZE,
      offset: 0,
      selectedFacets: [
        {
          columnName: 'projectStatus',
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          facetValues: ['Active', 'Completed'],
        },
        {
          columnName: 'tumorType',
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
          facetValues: [
            SynapseConstants.VALUE_NOT_SET,
            'Cutaneous Neurofibroma',
            'JMML',
            'Low Grade Glioma',
            'MPNST',
            'Plexiform Neurofibroma',
            'Plexiform Neurofibroma | MPNST',
            'Plexiform Neurofibroma | MPNST | Cutaneous Neurofibroma',
            'Schwannoma',
            'Schwannoma | Meningioma',
            'SMN',
          ],
        },
      ],
    },
  }

  return render(
    <QueryWrapper
      initQueryRequest={initQueryRequest}
      {...queryWrapperPropOverrides}
    >
      <QueryVisualizationWrapper {...queryVisualizationWrapperProps}>
        <QueryContextConsumer>
          {context => {
            // Capture the query context so we can use it in our tests
            queryContext = context
            return <></>
          }}
        </QueryContextConsumer>
        <SynapseTable {...props} />
      </QueryVisualizationWrapper>
    </QueryWrapper>,
    {
      wrapper: createWrapper(),
    },
  )
}

jest.spyOn(HasAccessModule, 'HasAccessV2').mockImplementation(() => {
  return <div data-testid="HasAccess"></div>
})

jest.spyOn(UserCardModule, 'default').mockImplementation(() => {
  return <div data-testid="UserCard"></div>
})

jest.spyOn(AddToDownloadListV2Module, 'default').mockImplementation(() => {
  return <div data-testid="AddToDownloadListV2" />
})

describe('SynapseTable tests', () => {
  beforeAll(() => {
    server.listen()
  })
  beforeEach(() => {
    server.use(
      ...getHandlersForTableQuery(queryResultBundle),

      rest.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_HEADERS}`,
        async (req, res, ctx) => {
          const requestBody: ReferenceList = (await req.json())
            .references as ReferenceList
          const responseBody: PaginatedResults<EntityHeader> = {
            results: requestBody.map((reference: Reference, index) => {
              return {
                id: reference.targetId,
                name: `mock entity ${index}`,
                type: 'org.sagebionetworks.repo.model.FileEntity',
                benefactorId: mockProjectIds[0],
                createdOn: '2023-03-31T18:30:00.000Z',
                modifiedOn: '2023-03-31T18:30:00.000Z',
                createdBy: MOCK_USER_ID.toString(),
                modifiedBy: MOCK_USER_ID.toString(),
                isLatestVersion: true,
              }
            }),
          }
          return res(ctx.status(200), ctx.json(responseBody))
        },
      ),
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ENTITY_ID_VERSION(':id', ':version')}`,
        async (req, res, ctx) => {
          const responseBody: FileEntity = {
            id: `${req.params.id!}`,
            name: `Mock Entity with Id ${req.params.id}`,
            versionNumber: parseInt(req.params.version as string),
            versionLabel: `v${req.params.version}`,
            versionComment: 'test',
            modifiedOn: '2021-03-31T18:30:00.000Z',
            modifiedBy: MOCK_USER_ID.toString(),
            dataFileHandleId: mockFileHandle.id,
            etag: 'etag',
            concreteType: 'org.sagebionetworks.repo.model.FileEntity',
          }
          return res(ctx.status(200), ctx.json(responseBody))
        },
      ),
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/restrictionInformation`,
        async (req, res, ctx) => {
          const responseBody: RestrictionInformationResponse = {
            restrictionLevel: RestrictionLevel.OPEN,
            hasUnmetAccessRequirement: false,
          }
          return res(ctx.status(200), ctx.json(responseBody))
        },
      ),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  const entityTypeCases: [
    string,
    Table,
    QueryResultBundle,
    {
      expectAccessToBeVisible: boolean
      expectAddToDownloadListToBeVisible: boolean
      expectDirectDownloadToBeVisible: boolean
    },
  ][] = [
    [
      'EntityView (mixed types)',
      mixedEntityView,
      mockQueryResult,
      {
        expectAccessToBeVisible: true,
        expectAddToDownloadListToBeVisible: true,
        expectDirectDownloadToBeVisible: true,
      },
    ],
    [
      'File View',
      mockFileViewEntity,
      mockQueryResult,
      {
        expectAccessToBeVisible: true,
        expectAddToDownloadListToBeVisible: true,
        expectDirectDownloadToBeVisible: true,
      },
    ],
    [
      'Project View',
      mockProjectViewEntity,
      mockQueryResult,
      {
        expectAccessToBeVisible: true,
        expectAddToDownloadListToBeVisible: false,
        expectDirectDownloadToBeVisible: false,
      },
    ],
    [
      'TableEntity',
      mockTableEntity,
      queryResultBundle,
      {
        expectAccessToBeVisible: false,
        expectAddToDownloadListToBeVisible: false,
        expectDirectDownloadToBeVisible: false,
      },
    ],
    [
      'Dataset',
      mockDatasetEntity,
      mockQueryResult,
      {
        expectAccessToBeVisible: true,
        expectAddToDownloadListToBeVisible: true,
        expectDirectDownloadToBeVisible: true,
      },
    ],
  ]
  // TODO
  // - SubmissionView
  // - Dataset Collection
  // - MaterializedView
  // - VirtualTable
  describe.each(entityTypeCases)(
    'Properly renders supplemental UI columns for %p',
    (name, entity, queryResultBundle, expected) => {
      beforeEach(() => {
        server.use(...getHandlersForTableQuery(queryResultBundle))
      })
      it(`Renders the supplemental columns correctly for ${name}`, async () => {
        renderTable(
          {
            showAccessColumn: true,
            showDirectDownloadColumn: true,
            hideAddToDownloadListColumn: false,
          },
          {
            isRowSelectionVisible: false,
          },
          entity,
        )

        await waitFor(() => {
          // Row selection feature is not shown (per props)
          expect(screen.queryByRole('checkbox')).not.toBeInTheDocument()
          const accessCells = screen.queryAllByTestId('AccessCell')
          const downloadListCells = screen.queryAllByTestId(
            'AddToDownloadListCell',
          )
          const directDownloadCells =
            screen.queryAllByTestId('DirectDownloadCell')
          if (expected.expectAccessToBeVisible) {
            expect(accessCells.length).toBeGreaterThan(0)
          } else {
            expect(accessCells.length).toBe(0)
          }
          if (expected.expectAddToDownloadListToBeVisible) {
            expect(downloadListCells.length).toBeGreaterThan(0)
          } else {
            expect(downloadListCells.length).toBe(0)
          }
          if (expected.expectDirectDownloadToBeVisible) {
            expect(directDownloadCells.length).toBeGreaterThan(0)
          } else {
            expect(directDownloadCells.length).toBe(0)
          }
        })
      })

      it('With row selection', async () => {
        renderTable(
          {
            showAccessColumn: true,
            showDirectDownloadColumn: true,
            hideAddToDownloadListColumn: false,
          },
          {
            isRowSelectionVisible: true,
          },
          entity,
        )

        await waitFor(() => {
          expect(screen.queryAllByRole('checkbox').length).toBeGreaterThan(0)
          // Add to download list is never shown because you can add one or more files using the row selection feature
          expect(
            screen.queryByTestId('AddToDownloadListCell'),
          ).not.toBeInTheDocument()
        })
      })

      it('Hides columns correctly', () => {
        renderTable(
          {
            showAccessColumn: false,
            showDirectDownloadColumn: false,
            hideAddToDownloadListColumn: true,
          },
          {
            isRowSelectionVisible: false,
          },
          entity,
        )

        expect(screen.queryByRole('checkbox')).not.toBeInTheDocument()
        expect(screen.queryByTestId('AccessCell')).not.toBeInTheDocument()
        expect(
          screen.queryByTestId('AddToDownloadListCell'),
        ).not.toBeInTheDocument()
        expect(
          screen.queryByTestId('DirectDownloadCell'),
        ).not.toBeInTheDocument()
      })
    },
  )

  it('renders facet controls in the column headers', async () => {
    renderTable()

    // there are a total of 13 columns in view, so we expect
    // 13 headers
    await waitFor(() => {
      expect(screen.getAllByRole('columnheader')).toHaveLength(totalColumns)
    })

    // there are five facets for the dataset so there should be 5
    // faceted columns
    await waitFor(() => {
      expect(
        screen.getAllByRole('button', {
          name: 'Filter by specific facet',
        }),
      ).toHaveLength(5)
    })
  })

  it('handle column sort press works', async () => {
    /*
              Overview:
                Go through clicking a column's sort button, there are
                three states that cycle:
                  - off
                  - descending
                  - ascending
            */
    renderTable()
    await waitFor(() => {
      expect(queryContext).toBeDefined()
    })

    // simulate having clicked the sort button on the first column, projectName
    const sortedColumn = 'projectName'

    const sortButton = (
      await screen.findAllByRole('button', { name: 'sort' })
    )[0]
    await userEvent.click(sortButton)

    // below we match only the part of the object that we expect to have changed
    await waitFor(() => {
      expect(queryContext!.currentQueryRequest).toEqual(
        expect.objectContaining({
          query: expect.objectContaining({
            sort: [
              {
                column: sortedColumn,
                direction: 'ASC',
              },
            ],
          }),
        }),
      )
    })

    // simulate second sort click
    await userEvent.click(sortButton)
    // below we match only the part of the object that we expect to have changed
    await waitFor(() => {
      expect(queryContext!.currentQueryRequest).toEqual(
        expect.objectContaining({
          query: expect.objectContaining({
            sort: [
              {
                column: sortedColumn,
                direction: 'DESC',
              },
            ],
          }),
        }),
      )
    })

    // simulate third sort click -- the sort will be removed
    await userEvent.click(sortButton)
    // below we match only the part of the object that we expect to have changed
    await waitFor(() => {
      expect(queryContext!.currentQueryRequest.query.sort).not.toBeDefined()
    })
  })

  it('Hides download columns when rows of an entity-containing view have no IDs', () => {
    // e.g. when the view has a GROUP BY or DISTINCT clause, the rows no longer represent individual entities, so they can't be downloaded
    // this is indicated by the rows of the result query not having rowIds, rather than the rowId matching the synID of the corresponding entity
    const queryResultBundleWithoutRowIds = cloneDeep(queryResultBundle)
    queryResultBundleWithoutRowIds.queryResult!.queryResults.rows =
      queryResultBundleWithoutRowIds.queryResult!.queryResults.rows.map(
        row => ({
          ...row,
          rowId: undefined,
        }),
      )

    // Return a file view entity, so the download column would be shown if not for the missing row IDs
    server.use(
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/entity/${synapseTableEntityId}`,
        (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(mockFileViewEntity))
        },
      ),
      ...getHandlersForTableQuery(queryResultBundleWithoutRowIds),
    )

    renderTable({ showDirectDownloadColumn: true })
    mockAllIsIntersecting(true)

    expect(
      screen.queryByTestId('AddToDownloadListCell'),
    ).not.toBeInTheDocument()
  })

  it('handles case where selectColumns do not match column models (SWC-6540)', async () => {
    const queryResultBundleWithRenamedColumn: QueryResultBundle = {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
      queryCount: 1,
      selectColumns: [{ name: 'Number of Studies', columnType: 'INTEGER' }],
      columnModels: [
        { name: 'studyName', columnType: 'LARGETEXT', id: '82659' },
        { name: 'studyId', columnType: 'ENTITYID', id: '82658' },
      ],
      facets: [],
      lastUpdatedOn: '2023-08-28T07:27:00.667Z',
      queryResult: {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
        queryResults: {
          concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
          tableId: MOCK_TABLE_ENTITY_ID,
          etag: '53e1e27a-dbf3-4db3-acd1-dafca30b894c',
          headers: [{ name: 'Number of Studies', columnType: 'INTEGER' }],
          rows: [{ values: ['123'] }],
        },
      },
    }

    server.use(
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/entity/${synapseTableEntityId}`,
        (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(mockFileViewEntity))
        },
      ),
      ...getHandlersForTableQuery(queryResultBundleWithRenamedColumn),
    )

    renderTable({ showDirectDownloadColumn: true })
    mockAllIsIntersecting(true)

    const column = await screen.findByRole('columnheader')
    within(column).getByText('Number of Studies')
    screen.getByText('123')
  })

  it('does not contain facet controls for JSON subcolumn facets', async () => {
    const queryResultBundleWithFacetedJsonSubcolumn: QueryResultBundle = {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
      queryCount: 1,
      selectColumns: [{ name: 'study', columnType: 'JSON' }],
      columnModels: [
        {
          id: '1',
          name: 'study',
          columnType: 'JSON',
          jsonSubColumns: [
            {
              name: 'studyName',
              jsonPath: '$.name',
              columnType: 'STRING',
              facetType: 'enumeration',
            },
          ],
        },
      ],
      facets: [
        {
          columnName: 'study',
          facetType: 'enumeration',
          jsonPath: '$.name',
          concreteType:
            'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
          facetValues: [{ value: 'foo', count: 1, isSelected: false }],
        },
      ],
      lastUpdatedOn: '2023-08-28T07:27:00.667Z',
      queryResult: {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
        queryResults: {
          concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
          tableId: MOCK_TABLE_ENTITY_ID,
          etag: '53e1e27a-dbf3-4db3-acd1-dafca30b894c',
          headers: [{ name: 'study', columnType: 'JSON' }],
          rows: [{ values: ['{"name": "foo"}'] }],
        },
      },
    }

    server.use(
      ...getHandlersForTableQuery(queryResultBundleWithFacetedJsonSubcolumn),
    )

    renderTable({ showDirectDownloadColumn: true })
    mockAllIsIntersecting(true)

    // The study column should be visible
    const column = await screen.findByRole('columnheader')
    within(column).getByText('Study')

    // No facet filter controls should be visible, since the only facet on the study column is a JSON subcolumn facet
    expect(
      screen.queryByRole('button', {
        name: 'Filter by specific facet',
      }),
    ).not.toBeInTheDocument()
  })

  it('shows help text when provided by QueryVisualizationWrapper', async () => {
    const helpText = 'Some description for the column'
    renderTable(undefined, undefined, undefined, {
      helpConfiguration: [
        {
          columnName: 'id',
          helpText: helpText,
        },
      ],
    })

    // Verify that the ID column contains the icon button with the help text
    const columnHeader = await screen.findByRole('columnheader', { name: 'Id' })
    within(columnHeader).getByRole('button', { name: helpText })
  })
})
