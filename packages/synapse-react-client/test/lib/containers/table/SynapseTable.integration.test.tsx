import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { cloneDeep } from 'lodash-es'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { SynapseConstants } from '../../../../src/lib/utils'
import { QueryVisualizationContextType } from '../../../../src/lib/containers/QueryVisualizationWrapper'
import {
  PaginatedQueryContextType,
  QueryContextProvider,
  QueryContextType,
} from '../../../../src/lib/containers/QueryContext'
import {
  SynapseTableCell,
  SynapseTableCellProps,
} from '../../../../src/lib/containers/synapse_table_functions/SynapseTableCell'
import SynapseTable, {
  SORT_STATE,
  SynapseTableProps,
} from '../../../../src/lib/containers/table/SynapseTable'
import { NOT_SET_DISPLAY_VALUE } from '../../../../src/lib/containers/table/SynapseTableConstants'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import {
  ENTITY_HEADERS,
  ENTITY_ID_VERSION,
} from '../../../../src/lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../src/lib/utils/functions/getEndpoint'
import {
  AUTHENTICATED_USERS,
  DEFAULT_PAGE_SIZE,
} from '../../../../src/lib/utils/SynapseConstants'
import {
  ColumnTypeEnum,
  EntityHeader,
  EntityView,
  ENTITY_VIEW_TYPE_MASK_FILE,
  PaginatedResults,
  QueryBundleRequest,
  QueryResultBundle,
  Reference,
  ReferenceList,
  UserGroupHeader,
  UserProfile,
  Entity,
} from '../../../../src/lib/utils/synapseTypes'
import { MOCK_CONTEXT_VALUE } from '../../../../mocks/MockSynapseContext'
import { rest, server } from '../../../../mocks/msw/server'
import queryResultBundleJson from '../../../../mocks/query/syn16787123.json'
import dayjs from 'dayjs'
import { formatDate } from '../../../../src/lib/utils/functions/DateFormatter'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
} from '../../../../mocks/user/mock_user_profile'
import * as HasAccessModule from '../../../../src/lib/containers/access_requirements/HasAccessV2'
import * as EntityLinkModule from '../../../../src/lib/containers/EntityLink'
import * as UserCardModule from '../../../../src/lib/containers/UserCard'
import * as AddToDownloadListV2Module from '../../../../src/lib/containers/AddToDownloadListV2'

import failOnConsole from 'jest-fail-on-console'

const queryResultBundle: QueryResultBundle =
  queryResultBundleJson as QueryResultBundle

const title = 'studies'
const totalColumns = 13
const lastQueryRequest: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: '12345',
  partMask:
    SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
    SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
    SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
  query: {
    sql: 'SELECT * FROM syn16787123',
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
const getLastQueryRequest = jest.fn(() => cloneDeep(lastQueryRequest))
const executeQueryRequest = jest.fn()

const queryContext: Partial<PaginatedQueryContextType> = {
  data: queryResultBundle,
  entity: {
    concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
  },
  pageSize: 25,
  getLastQueryRequest: getLastQueryRequest,
  executeQueryRequest,
}

const queryVisualizationContext: Partial<QueryVisualizationContextType> = {
  columnsToShowInTable: [
    'projectStatus',
    'dataStatus',
    'fundingAgency',
    'tumorType',
    'diseaseFocus',
  ],
  topLevelControlsState: {
    showColumnFilter: true,
    showFacetFilter: true,
    showFacetVisualization: true,
    showSearchBar: false,
    showDownloadConfirmation: false,
    showColumnSelectDropdown: false,
    showSqlEditor: false,
  },
  getColumnDisplayName: jest.fn((col: string) => col),
}

const props: SynapseTableProps = {
  synapseContext: MOCK_CONTEXT_VALUE,
  queryContext: queryContext,
  queryVisualizationContext: queryVisualizationContext,
  title,
  facet: 'tumorType',
}

function renderTable(
  props: Omit<SynapseTableProps, 'queryContext'>,
  queryContext: QueryContextType,
) {
  return render(
    <QueryContextProvider queryContext={queryContext}>
      <SynapseTable {...props} queryContext={queryContext} />
    </QueryContextProvider>,
    {
      wrapper: createWrapper(),
    },
  )
}

function renderTableCell(
  props: SynapseTableCellProps,
  queryContext: QueryContextType,
) {
  return render(
    <QueryContextProvider queryContext={queryContext}>
      <SynapseTableCell {...props} />
    </QueryContextProvider>,
    {
      wrapper: createWrapper(),
    },
  )
}

jest.spyOn(HasAccessModule, 'HasAccessV2').mockImplementation(() => {
  return <div data-testid="HasAccess"></div>
})

const mockEntityLink = jest
  .spyOn(EntityLinkModule, 'EntityLink')
  .mockImplementation(() => {
    return <span data-testid="EntityLink"></span>
  })

jest.spyOn(UserCardModule, 'default').mockImplementation(() => {
  return <div data-testid="UserCard"></div>
})

jest.spyOn(AddToDownloadListV2Module, 'default').mockImplementation(() => {
  return <div data-testid="AddToDownloadListV2" />
})

describe('SynapseTable tests', () => {
  failOnConsole()

  beforeAll(() => {
    server.listen()
    server.use(
      rest.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_HEADERS}`,
        async (req, res, ctx) => {
          const requestBody: ReferenceList = (await req.json())
            .references as ReferenceList
          const responseBody: PaginatedResults<EntityHeader> = {
            results: requestBody.map((reference: Reference) => {
              return {
                id: reference.targetId,
                name: 3,
                type: 'org.sagebionetworks.repo.model.FileEntity',
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
          const responseBody: Entity = {
            id: req.params.id!,
            name: `Mock Entity with Id ${req.params.id}`,
            versionNumber: req.params.version,
            versionLabel: `v${req.params.version}`,
            versionComment: 'test',
            modifiedOn: '2021-03-31T18:30:00.000Z',
            modifiedBy: MOCK_USER_ID.toString(),
            modifiedByPrincipalId: MOCK_USER_ID_2.toString(),
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

  it('Does not render HasAccess when the entity type is EntityView', async () => {
    renderTable(
      {
        ...props,
        // showAccessColumn should be overriden
        showAccessColumn: true,
      },
      {
        ...queryContext,
        entity: {
          concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
        },
      },
    )
    await waitFor(() =>
      expect(screen.queryAllByTestId('HasAccess')).not.toHaveLength(0),
    )
  })

  it('Renders HasAccess when the entity type is not EntityView', () => {
    renderTable(
      {
        ...props,
        // showAccessColumn should be overriden
        showAccessColumn: true,
      },
      {
        ...queryContext,
        entity: {
          concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
        },
      },
    )
    expect(screen.queryByTestId('HasAccess')).not.toBeInTheDocument()
  })

  describe('create table headers works', () => {
    it('renders correctly', async () => {
      renderTable(props, queryContext)
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
      renderTable(props, queryContext)
      // simulate having clicked the sort button on the first column
      // projectStatus -- this should set it to descend
      const sortedColumn = 'projectStatus'

      await userEvent.click(
        (
          await screen.findAllByRole('button', { name: 'sort' })
        )[0],
      )
      const descendingColumnObject = {
        column: sortedColumn,
        direction: SORT_STATE[1],
      }
      // below we match only the part of the object that we expect to have changed
      await waitFor(() =>
        expect(executeQueryRequest).toHaveBeenCalledWith(
          expect.objectContaining({
            query: expect.objectContaining({
              sort: [descendingColumnObject],
            }),
          }),
        ),
      )

      // simulate second button click
      // simulate having clicked the sort button on the first column
      // projectStatus -- this should set it to descend
      await userEvent.click(
        (
          await screen.findAllByRole('button', { name: 'sort' })
        )[0],
      )
      const ascendingColumnObject = {
        column: sortedColumn,
        direction: SORT_STATE[2],
      }
      // below we match only the part of the object that we expect to have changed
      expect(executeQueryRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.objectContaining({
            sort: [ascendingColumnObject],
          }),
        }),
      )
      // simulate second button click
      // simulate having clicked the sort button on the first column
      // projectStatus -- this should set it to descend
      // it shouldn't be in the api call at all
      await userEvent.click(
        (
          await screen.findAllByRole('button', { name: 'sort' })
        )[0],
      )
      // below we match only the part of the object that we expect to have changed
      expect(executeQueryRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.objectContaining({
            sort: [],
          }),
        }),
      )
    })
  })

  // TODO: Test is flaky, even with --runInBand
  it.skip('Shows add to download cart column for an Entity View that contains files', async () => {
    const testQueryContext = cloneDeep(queryContext)
    testQueryContext.entity = {
      concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
      viewTypeMask: ENTITY_VIEW_TYPE_MASK_FILE,
    } as EntityView
    renderTable({ ...props, showDownloadColumn: true }, testQueryContext)
    mockAllIsIntersecting(true)

    await screen.findByTestId('AddToDownloadListV2ColumnHeader')

    expect(
      (await screen.findAllByTestId('AddToDownloadListV2')).length,
    ).toBeGreaterThan(0)
  })

  // TODO: Test is flaky, even with --runInBand
  it.skip('Shows add to download cart download column for a dataset', async () => {
    const testQueryContext = cloneDeep(queryContext)
    testQueryContext.entity = {
      concreteType: 'org.sagebionetworks.repo.model.table.Dataset',
    }
    renderTable({ ...props, showDownloadColumn: true }, testQueryContext)
    mockAllIsIntersecting(true)

    await screen.findByTestId('AddToDownloadListV2ColumnHeader')

    expect(
      (await screen.findAllByTestId('AddToDownloadListV2')).length,
    ).toBeGreaterThan(0)
  })

  it('Hides download columns when rows of an entity-containing view have no IDs', () => {
    // e.g. when the view has a GROUP BY or DISTINCT clause, the rows no longer represent individual entities, so they can't be downloaded
    // this is indicated by the rows of the result query not having rowIds, rather than the rowId matching the synID of the corresponding entity
    const testQueryContext = cloneDeep(queryContext)
    testQueryContext.entity = {
      concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
      viewTypeMask: ENTITY_VIEW_TYPE_MASK_FILE,
    }
    testQueryContext.data!.queryResult.queryResults.rows =
      testQueryContext.data!.queryResult.queryResults.rows.map(row => ({
        ...row,
        rowId: undefined,
      }))

    renderTable({ ...props, showDownloadColumn: true }, testQueryContext)
    mockAllIsIntersecting(true)

    expect(
      screen.queryByTestId('AddToDownloadListV2ColumnHeader'),
    ).not.toBeInTheDocument()
    expect(screen.queryByTestId('AddToDownloadListV2')).not.toBeInTheDocument()
  })

  describe('table cells render correctly', () => {
    const MOCK_DATE_VALUE = '1581360939000'
    const MOCKED_DATE_LIST = `[${MOCK_DATE_VALUE}]`
    const MOCKED_BOOLEAN_LIST = '[true, false]'
    const MOCKED_INTEGER_LIST = '[10, 11]'

    const mockEntityLinkValue: string = 'syn122'
    const mockUserCardValue: string = 'syn123'
    const mockAllAuthenticatedUsersValue: string = 'syn124'
    const mockTeamValue: string = 'syn125'
    const teamName: string = 'team name'
    const mockColumnValue: string = 'syn126'
    const mockDateValue: string = '1574268563000'
    const mockRowId = 122
    const mockRowVersion = 2

    // We only care about the conditional rendering, not the
    // instantiation of the EntityLink, so we cast the value
    const mapEntityIdToHeader = {
      [mockEntityLinkValue]: {
        id: mockEntityLinkValue,
      } as EntityHeader,
    }
    const mapUserIdToHeader: Record<
      string,
      Partial<UserGroupHeader & UserProfile>
    > = {
      [mockAllAuthenticatedUsersValue]: {
        isIndividual: false,
        userName: AUTHENTICATED_USERS,
      },
      [mockTeamValue]: {
        isIndividual: false,
        userName: teamName,
      },
      [mockUserCardValue]: {},
    }

    const tableCellProps: SynapseTableCellProps = {
      isBold: '',
      mapUserIdToHeader: {},
      columnLinkConfig: undefined,
      rowIndex: undefined,
      columnName: '',
      selectColumns: undefined,
      columnModels: undefined,
      rowId: mockRowId,
      rowVersionNumber: mockRowVersion,
    }

    it('renders an entity link with a fetched header', async () => {
      renderTableCell(
        {
          ...tableCellProps,
          columnType: ColumnTypeEnum.ENTITYID,
          columnValue: mockEntityLinkValue,
          mapEntityIdToHeader: mapEntityIdToHeader,
        },
        {
          entity: {
            concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
          },
        },
      )

      await screen.findByTestId('EntityLink')
      // Verify that the header is passed
      expect(mockEntityLink).toHaveBeenCalledWith(
        expect.objectContaining({
          entity: mapEntityIdToHeader[mockEntityLinkValue],
        }),
        expect.anything(),
      )
    })

    it('renders an entity link with an ID', async () => {
      // We may have no headers in certain cases, like if it's unauthorized or does not exist.
      // The EntityLink component can gracefully handle these cases if we pass an ID.
      const noHeadersFetched = {}
      renderTableCell(
        {
          ...tableCellProps,
          columnType: ColumnTypeEnum.ENTITYID,
          columnValue: mockEntityLinkValue,
          mapEntityIdToHeader: noHeadersFetched,
        },
        {
          entity: {
            concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
          },
        },
      )

      await screen.findByTestId('EntityLink')
      // Verify that the ID is passed
      expect(mockEntityLink).toHaveBeenCalledWith(
        expect.objectContaining({
          entity: mockEntityLinkValue,
        }),
        expect.anything(),
      )
    })

    it('PORTALS-2095: renders an entity link for name column in EntityView', async () => {
      renderTableCell(
        {
          ...tableCellProps,
          columnName: 'name',
          columnType: ColumnTypeEnum.STRING,
          columnValue: 'My amazing project folder',
          mapEntityIdToHeader: mapEntityIdToHeader,
        },
        {
          entity: {
            concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
          },
        },
      )

      await screen.findByTestId('EntityLink')
    })

    it('renders a link for all authenticated users', async () => {
      renderTableCell(
        {
          ...tableCellProps,
          columnType: ColumnTypeEnum.USERID,
          columnValue: mockAllAuthenticatedUsersValue,
          mapUserIdToHeader: mapUserIdToHeader,
        },
        {
          entity: {
            concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
          },
        },
      )

      await screen.findByText('All registered Synapse users', { exact: false })
    })

    it('renders a link for a team', async () => {
      renderTableCell(
        {
          ...tableCellProps,
          columnType: ColumnTypeEnum.USERID,
          columnValue: mockTeamValue,
          mapUserIdToHeader: mapUserIdToHeader,
        },
        {
          entity: {
            concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
          },
        },
      )

      await screen.findByText(teamName, { exact: false })
    })

    it('renders a user card link', async () => {
      renderTableCell(
        {
          ...tableCellProps,
          columnType: ColumnTypeEnum.USERID,
          columnValue: mockUserCardValue,
          mapUserIdToHeader: mapUserIdToHeader,
        },
        {
          entity: {
            concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
          },
        },
      )

      await screen.findByTestId('UserCard')
    })

    it('renders a markdown value', async () => {
      const mockMarkdownColumnValue = '# column markdown'

      renderTableCell(
        {
          ...tableCellProps,
          columnType: ColumnTypeEnum.USERID,
          columnValue: mockMarkdownColumnValue,
          mapUserIdToHeader: mapUserIdToHeader,
          columnLinkConfig: {
            isMarkdown: true,
            matchColumnName: 'a',
          },
          columnName: 'a',
          selectColumns: [
            { columnType: ColumnTypeEnum.STRING, name: 'a', id: '' },
          ],
        },
        {
          entity: {
            concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
          },
        },
      )

      await screen.findByText(mockMarkdownColumnValue)
    })

    it('renders a standard value', async () => {
      renderTableCell(
        {
          ...tableCellProps,
          columnType: ColumnTypeEnum.STRING,
          columnValue: mockColumnValue,
          mapUserIdToHeader: mapUserIdToHeader,
        },
        {
          entity: {
            concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
          },
        },
      )

      await screen.findByText(mockColumnValue)
    })

    it('renders a date value', async () => {
      renderTableCell(
        {
          ...tableCellProps,
          columnType: ColumnTypeEnum.DATE,
          columnValue: mockDateValue,
          mapUserIdToHeader: mapUserIdToHeader,
        },
        {
          entity: {
            concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
          },
        },
      )

      await screen.findByText(formatDate(dayjs(Number(mockDateValue))))
    })

    it('renders a date list value', async () => {
      renderTableCell(
        {
          ...tableCellProps,
          columnType: ColumnTypeEnum.DATE_LIST,
          columnValue: MOCKED_DATE_LIST,
          mapUserIdToHeader: mapUserIdToHeader,
        },
        {
          entity: {
            concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
          },
        },
      )

      await screen.findByText(formatDate(dayjs(Number(MOCK_DATE_VALUE))))
    })

    it('renders a integer list value', async () => {
      renderTableCell(
        {
          ...tableCellProps,
          columnType: ColumnTypeEnum.INTEGER_LIST,
          columnValue: MOCKED_INTEGER_LIST,
          mapUserIdToHeader: mapUserIdToHeader,
        },
        {
          entity: {
            concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
          },
        },
      )

      await screen.findByText('10,', { exact: false })
      await screen.findByText('11', { exact: false })
    })

    it('renders a boolean list value', async () => {
      renderTableCell(
        {
          ...tableCellProps,
          columnType: ColumnTypeEnum.BOOLEAN_LIST,
          columnValue: MOCKED_BOOLEAN_LIST,
          mapUserIdToHeader: mapUserIdToHeader,
        },
        {
          entity: {
            concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
          },
        },
      )

      await screen.findByText('true,')
      await screen.findByText('false')
    })

    it('renders an empty cell for null date', async () => {
      renderTableCell(
        {
          ...tableCellProps,
          columnType: ColumnTypeEnum.DATE,
          isMarkdownColumn: false,
        },
        {
          entity: {
            concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
          },
        },
      )

      await screen.findByText(NOT_SET_DISPLAY_VALUE)
    })
  })
})
