import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { cloneDeep } from 'lodash-es'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { SynapseConstants } from '../../utils'
import { QueryVisualizationWrapper } from '../QueryVisualizationWrapper/QueryVisualizationWrapper'
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
  Reference,
  ReferenceList,
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
import { mockTableEntity } from '../../mocks/entity/mockTableEntity'
import { mockProjectIds } from '../../mocks/entity/mockProject'
import { mockFileHandle } from '../../mocks/mock_file_handle'
import { mockFileViewEntity } from '../../mocks/entity/mockFileView'
import { mockProjectViewEntity } from '../../mocks/entity/mockProjectView'

const synapseTableEntityId = 'syn16787123'

const mixedEntityView = cloneDeep(mockFileViewEntity)
mixedEntityView.viewTypeMask = 0x1 | 0x2 | 0x4 | 0x8 | 0x10 | 0x20

const totalColumns = 13

let queryContext: QueryContextType | undefined

function renderTable(
  props?: SynapseTableProps,
  queryWrapperPropOverrides?: Partial<QueryWrapperProps>,
  mockEntity: Table = mockTableEntity,
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
      <QueryVisualizationWrapper>
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
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  describe('Properly renders supplemental UI columns', () => {
    // TODO
    // - SubmissionView
    // - Dataset
    // - Dataset Collection
    // - MaterializedView
    // - VirtualTable
    describe('EntityView (mixed types)', () => {
      it('Renders the supplemental columns correctly', async () => {
        renderTable(
          {
            showAccessColumn: true,
            showDirectDownloadColumn: true,
            hideAddToDownloadListColumn: false,
          },
          {
            isRowSelectionVisible: false,
          },
          mixedEntityView,
        )

        await waitFor(() => {
          // Row selection feature is not shown (per props)
          expect(screen.queryByRole('checkbox')).not.toBeInTheDocument()
          // Access column
          expect(screen.queryAllByTestId('AccessCell').length).toBeGreaterThan(
            0,
          )
          // Add to download list column
          expect(
            screen.queryAllByTestId('AddToDownloadListCell').length,
          ).toBeGreaterThan(0)

          // Direct download column
          expect(
            screen.queryAllByTestId('DirectDownloadCell').length,
          ).toBeGreaterThan(0)
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
    })
    describe('File View (EntityView with only files)', () => {
      it('Renders the supplemental columns correctly', async () => {
        renderTable(
          {
            showAccessColumn: true,
            showDirectDownloadColumn: true,
            hideAddToDownloadListColumn: false,
          },
          {
            isRowSelectionVisible: false,
          },
          mockFileViewEntity,
        )

        await waitFor(() => {
          // Row selection feature is not shown (per props)
          expect(screen.queryByRole('checkbox')).not.toBeInTheDocument()
          // Access column
          expect(screen.queryAllByTestId('AccessCell').length).toBeGreaterThan(
            0,
          )
          // Add to download list column
          expect(
            screen.queryAllByTestId('AddToDownloadListCell').length,
          ).toBeGreaterThan(0)

          // Direct download column
          expect(
            screen.queryAllByTestId('DirectDownloadCell').length,
          ).toBeGreaterThan(0)
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
    })
    describe('Project View (EntityView with only projects)', () => {
      it('Renders the supplemental columns correctly', async () => {
        renderTable(
          {
            showAccessColumn: true,
            showDirectDownloadColumn: true,
            hideAddToDownloadListColumn: false,
          },
          {
            isRowSelectionVisible: false,
          },
          mockProjectViewEntity,
        )

        await waitFor(() => {
          // Row selection feature is not shown (per props)
          expect(screen.queryByRole('checkbox')).not.toBeInTheDocument()
          // Access column
          expect(screen.queryAllByTestId('AccessCell').length).toBeGreaterThan(
            0,
          )
          // Add to download list column
          expect(
            screen.queryByTestId('AddToDownloadListCell'),
          ).not.toBeInTheDocument()

          // Direct download column
          expect(
            screen.queryByTestId('DirectDownloadCell'),
          ).not.toBeInTheDocument()
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
    })
    describe('TableEntity', () => {
      it('Renders the supplemental columns correctly', async () => {
        renderTable(
          {
            showAccessColumn: true,
            showDirectDownloadColumn: true,
            hideAddToDownloadListColumn: false,
          },
          {
            isRowSelectionVisible: false,
          },
          mockTableEntity,
        )

        await waitFor(() => {
          // Row selection feature is not shown (per props)
          expect(screen.queryByRole('checkbox')).not.toBeInTheDocument()
          // Access column
          expect(screen.queryByTestId('AccessCell')).not.toBeInTheDocument()
          // Add to download list column
          expect(
            screen.queryByTestId('AddToDownloadListCell'),
          ).not.toBeInTheDocument()

          // Direct download column
          expect(
            screen.queryByTestId('DirectDownloadCell'),
          ).not.toBeInTheDocument()
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
    })
  })

  it('renders facet controls in the column headers', async () => {
    renderTable()
    // there are a total of 13 columns in view, so we expect
    // 13 headers
    expect(await screen.findAllByRole('columnheader')).toHaveLength(
      totalColumns,
    )
    // there are five facets for the dataset so there should be 5
    // faceted columns
    expect(
      await screen.findAllByRole('button', {
        name: 'Filter by specific facet',
      }),
    ).toHaveLength(5)
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
})
