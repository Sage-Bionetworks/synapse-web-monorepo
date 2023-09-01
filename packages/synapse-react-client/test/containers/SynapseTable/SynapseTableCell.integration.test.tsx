import { render, screen } from '@testing-library/react'
import React from 'react'
import { SynapseConstants } from '../../../src/utils'
import SynapseTableCell, {
  SynapseTableCellProps,
} from '../../../src/components/SynapseTable/SynapseTableCell/SynapseTableCell'
import { NOT_SET_DISPLAY_VALUE } from '../../../src/components/SynapseTable/SynapseTableConstants'
import { createWrapper } from '../../../src/testutils/TestingLibraryUtils'
import {
  ENTITY_HEADERS,
  ENTITY_ID_VERSION,
} from '../../../src/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../src/utils/functions/getEndpoint'
import {
  AUTHENTICATED_PRINCIPAL_ID,
  DEFAULT_PAGE_SIZE,
} from '../../../src/utils/SynapseConstants'
import {
  ColumnTypeEnum,
  Entity,
  EntityHeader,
  PaginatedResults,
  QueryBundleRequest,
  QueryResultBundle,
  Reference,
  ReferenceList,
} from '@sage-bionetworks/synapse-types'
import { rest, server } from '../../../src/mocks/msw/server'
import queryResultBundleJson from '../../../src/mocks/query/syn16787123'
import dayjs from 'dayjs'
import { formatDate } from '../../../src/utils/functions/DateFormatter'
import {
  MOCK_TEAM_ID,
  MOCK_USER_ID,
  MOCK_USER_ID_2,
  mockTeamData,
} from '../../../src/mocks/user/mock_user_profile'
import * as HasAccessModule from '../../../src/components/HasAccess/HasAccessV2'
import * as EntityLinkModule from '../../../src/components/EntityLink'
import * as UserBadgeModule from '../../../src/components/UserCard/UserBadge'
import * as AddToDownloadListV2Module from '../../../src/components/AddToDownloadListV2'
import { QueryWrapper } from '../../../src'
import { getHandlersForTableQuery } from '../../../src/mocks/msw/handlers/tableQueryHandlers'
import { mockTableEntity } from '../../../src/mocks/entity/mockTableEntity'

import { mockFileViewEntity } from '../../../src/mocks/entity/mockFileView'

const queryResultBundle: QueryResultBundle =
  queryResultBundleJson as QueryResultBundle

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

function renderTableCell(props: SynapseTableCellProps) {
  return render(
    <QueryWrapper initQueryRequest={lastQueryRequest}>
      <SynapseTableCell {...props} />
    </QueryWrapper>,
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

jest.spyOn(UserBadgeModule, 'UserBadge').mockImplementation(() => {
  return <div data-testid="UserBadge"></div>
})

jest.spyOn(AddToDownloadListV2Module, 'default').mockImplementation(() => {
  return <div data-testid="AddToDownloadListV2" />
})

describe('SynapseTableCell tests', () => {
  beforeAll(() => {
    server.listen()
    server.use(
      ...getHandlersForTableQuery(queryResultBundle),
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/entity/syn16787123`,
        (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(mockTableEntity))
        },
      ),

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

  const MOCK_DATE_VALUE = '1581360939000'
  const MOCKED_DATE_LIST = `[${MOCK_DATE_VALUE}]`
  const MOCKED_BOOLEAN_LIST = '[true, false]'
  const MOCKED_INTEGER_LIST = '[10, 11]'

  const mockEntityLinkValue: string = 'syn122'
  const mockColumnValue: string = 'syn126'
  const mockDateValue: string = '1574268563000'
  const mockRowId = 122
  const mockRowVersion = 2

  const tableCellProps: SynapseTableCellProps = {
    isBold: '',
    columnLinkConfig: undefined,
    columnName: '',
    selectColumns: undefined,
    columnModels: undefined,
    rowId: mockRowId,
    rowVersionNumber: mockRowVersion,
  }

  it('renders an entity link with an ID', async () => {
    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.ENTITYID,
      columnValue: mockEntityLinkValue,
    })

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
    server.use(
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/entity/syn16787123`,
        (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(mockFileViewEntity))
        },
      ),
    )
    renderTableCell({
      ...tableCellProps,
      columnName: 'name',
      columnType: ColumnTypeEnum.STRING,
      columnValue: 'My amazing project folder',
    })

    await screen.findByTestId('EntityLink')
  })

  it('renders a link for all authenticated users', async () => {
    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.USERID,
      columnValue: AUTHENTICATED_PRINCIPAL_ID.toString(),
    })

    await screen.findByText('All registered Synapse users', { exact: false })
  })

  it('renders a link for a team', async () => {
    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.USERID,
      columnValue: MOCK_TEAM_ID.toString(),
    })

    await screen.findByText(mockTeamData.userGroupHeader.userName, {
      exact: false,
    })
  })

  it('renders a user card link', async () => {
    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.USERID,
      columnValue: MOCK_USER_ID.toString(),
    })

    await screen.findByTestId('UserBadge')
  })

  it('renders a markdown value', async () => {
    const mockMarkdownColumnValue = '# column markdown'

    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.USERID,
      columnValue: mockMarkdownColumnValue,
      columnLinkConfig: {
        isMarkdown: true,
        matchColumnName: 'a',
      },
      columnName: 'a',
      selectColumns: [{ columnType: ColumnTypeEnum.STRING, name: 'a', id: '' }],
    })

    await screen.findByText(mockMarkdownColumnValue)
  })

  it('renders a standard value', async () => {
    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.STRING,
      columnValue: mockColumnValue,
    })

    await screen.findByText(mockColumnValue)
  })

  it('renders a date value', async () => {
    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.DATE,
      columnValue: mockDateValue,
    })

    await screen.findByText(formatDate(dayjs(Number(mockDateValue))))
  })

  it('renders a date list value', async () => {
    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.DATE_LIST,
      columnValue: MOCKED_DATE_LIST,
    })

    await screen.findByText(formatDate(dayjs(Number(MOCK_DATE_VALUE))))
  })

  it('renders a integer list value', async () => {
    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.INTEGER_LIST,
      columnValue: MOCKED_INTEGER_LIST,
    })

    await screen.findByText('10,', { exact: false })
    await screen.findByText('11', { exact: false })
  })

  it('renders a boolean list value', async () => {
    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.BOOLEAN_LIST,
      columnValue: MOCKED_BOOLEAN_LIST,
    })

    await screen.findByText('true,')
    await screen.findByText('false')
  })

  it('renders an empty cell for null date', async () => {
    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.DATE,
    })

    await screen.findByText(NOT_SET_DISPLAY_VALUE)
  })
})
