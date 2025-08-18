import { mockFileViewEntity } from '@/mocks/entity/mockFileView'
import { mockTableEntity } from '@/mocks/entity/mockTableEntity'
import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import queryResultBundleJson from '@/mocks/query/syn16787123'
import { MOCK_TEAM_ID, mockTeamData } from '@/mocks/team/mockTeam'
import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseConstants } from '@/utils'
import { ENTITY_HEADERS, ENTITY_ID_VERSION } from '@/utils/APIConstants'
import { formatDate } from '@/utils/functions/DateFormatter'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  AUTHENTICATED_PRINCIPAL_ID,
  DEFAULT_PAGE_SIZE,
} from '@/utils/SynapseConstants'
import {
  ColumnTypeEnum,
  EntityHeader,
  PaginatedResults,
  QueryBundleRequest,
  QueryResultBundle,
  Reference,
  VersionableEntity,
} from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import dayjs from 'dayjs'
import { uniqueId } from 'lodash-es'
import { http, HttpResponse } from 'msw'
import { QueryWrapper } from '../../../index'
import * as AddToDownloadListV2Module from '../../AddToDownloadListV2'
import * as EntityLinkModule from '../../EntityLink'
import * as HasAccessModule from '../../HasAccess/HasAccessV2'
import { AUTHENTICATED_GROUP_DISPLAY_TEXT } from '../../TeamBadge'
import * as UserBadgeModule from '../../UserCard/UserBadge'
import { NOT_SET_DISPLAY_VALUE } from '../SynapseTableConstants'
import * as EntityIdListModule from './EntityIdList'
import SynapseTableCell, { SynapseTableCellProps } from './SynapseTableCell'

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

vi.spyOn(HasAccessModule, 'HasAccessV2').mockImplementation(() => {
  return <div data-testid="HasAccess"></div>
})

const mockEntityLink = vi
  .spyOn(EntityLinkModule, 'EntityLink')
  .mockImplementation(() => {
    return <span data-testid="EntityLink"></span>
  })

vi.spyOn(UserBadgeModule, 'UserBadge').mockImplementation(() => {
  return <div data-testid="UserBadge"></div>
})

vi.spyOn(AddToDownloadListV2Module, 'default').mockImplementation(() => {
  return <div data-testid="AddToDownloadListV2" />
})

const mockEntityIdListComponent = vi
  .spyOn(EntityIdListModule, 'default')
  .mockImplementation(() => {
    return <div data-testid="EntityIdList" />
  })

describe('SynapseTableCell tests', () => {
  beforeAll(() => {
    server.listen()
    registerTableQueryResult(lastQueryRequest.query, queryResultBundle)
    server.use(
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/entity/syn16787123`,
        () => {
          return HttpResponse.json(mockTableEntity, { status: 200 })
        },
      ),

      http.post<never, { references: Reference[] }>(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_HEADERS}`,
        async ({ request }) => {
          const requestBody = (await request.json()).references
          const responseBody: PaginatedResults<EntityHeader> = {
            results: requestBody.map((reference: Reference) => {
              return {
                id: reference.targetId,
                name: uniqueId('entity-name-'),
                type: 'org.sagebionetworks.repo.model.FileEntity',
                benefactorId: 123,
                createdOn: new Date().toISOString(),
                modifiedOn: new Date().toISOString(),
                createdBy: String(MOCK_USER_ID),
                modifiedBy: String(MOCK_USER_ID),
                isLatestVersion: true,
              }
            }),
          }
          return HttpResponse.json(responseBody, { status: 200 })
        },
      ),
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ENTITY_ID_VERSION(':id', ':version')}`,
        ({ params }) => {
          const responseBody: VersionableEntity = {
            id: params.id as string,
            name: `Mock Entity with Id ${params.id}`,
            versionNumber: parseInt(params.version as string),
            versionLabel: `v${params.version}`,
            versionComment: 'test',
            modifiedOn: '2021-03-31T18:30:00.000Z',
            modifiedBy: MOCK_USER_ID.toString(),
            etag: 'etag',
            concreteType: 'org.sagebionetworks.repo.model.FileEntity',
          }
          return HttpResponse.json(responseBody, { status: 200 })
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
  const MOCK_ENTITYID_LIST = '["syn123", "syn124"]'
  const EXPECTED_PARSED_ENTITYID_LIST = ['syn123', 'syn124']

  const mockEntityIdValue: string = 'syn122'
  const mockColumnValue: string = 'syn126'
  const mockDateValue: string = '1574268563000'
  const mockRowId = 122
  const mockRowVersion = 2

  const tableCellProps = {
    isBold: '',
    columnLinkConfig: undefined,
    columnName: '',
    selectColumns: undefined,
    columnModels: undefined,
    rowId: String(mockRowId),
    rowVersionNumber: mockRowVersion,
  } satisfies Partial<SynapseTableCellProps>

  describe('PORTALS-2095, SWC-7235 - Special cases for ENTITYID columns', () => {
    it('PORTALS-2095: renders an entity link for name column in EntityView', async () => {
      server.use(
        http.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}/repo/v1/entity/syn16787123`,
          () => {
            return HttpResponse.json(mockFileViewEntity, { status: 200 })
          },
        ),
      )
      renderTableCell({
        ...tableCellProps,
        rowData: ['My amazing project folder'],
        columnName: 'name',
        columnType: ColumnTypeEnum.STRING,
        columnValue: 'My amazing project folder',
      })

      await screen.findByTestId('EntityLink')
      expect(mockEntityLink).toHaveBeenRenderedWithProps(
        expect.objectContaining({
          entity: String(mockRowId),
          displayTextField: 'name',
          showIcon: false,
        }),
      )
    })

    it('ENTITYID displays the ID when the columnName is id', async () => {
      renderTableCell({
        ...tableCellProps,
        columnName: 'id',
        rowData: [mockEntityIdValue],
        columnType: ColumnTypeEnum.ENTITYID,
        columnValue: mockEntityIdValue,
      })

      await screen.findByTestId('EntityLink')
      // Verify that the ID is passed
      expect(mockEntityLink).toHaveBeenRenderedWithProps(
        expect.objectContaining({
          entity: mockEntityIdValue,
          displayTextField: 'id',
          showIcon: false,
        }),
      )
    })

    it('ENTITYID displays the entity name when the columnName is NOT id', async () => {
      renderTableCell({
        ...tableCellProps,
        columnName: 'some_entity',
        rowData: [mockEntityIdValue],
        columnType: ColumnTypeEnum.ENTITYID,
        columnValue: mockEntityIdValue,
      })

      await screen.findByTestId('EntityLink')
      // Verify that the ID is passed
      expect(mockEntityLink).toHaveBeenRenderedWithProps(
        expect.objectContaining({
          entity: mockEntityIdValue,
          displayTextField: 'name',
          showIcon: false,
        }),
      )
    })

    it('ENTITYID_LIST displays the ID when the columnName is id', async () => {
      renderTableCell({
        ...tableCellProps,
        columnName: 'id',
        rowData: [MOCK_ENTITYID_LIST],
        columnType: ColumnTypeEnum.ENTITYID_LIST,
        columnValue: MOCK_ENTITYID_LIST,
      })

      await screen.findByTestId('EntityIdList')
      // Verify that the ID is passed
      expect(mockEntityIdListComponent).toHaveBeenRenderedWithProps(
        expect.objectContaining({
          entityIdList: EXPECTED_PARSED_ENTITYID_LIST,
          displayTextField: 'id',
          showIcon: false,
        }),
      )
    })

    it('ENTITYID_LIST displays the entity name when the columnName is NOT id', async () => {
      renderTableCell({
        ...tableCellProps,
        columnName: 'some_entity',
        rowData: [MOCK_ENTITYID_LIST],
        columnType: ColumnTypeEnum.ENTITYID_LIST,
        columnValue: MOCK_ENTITYID_LIST,
      })

      await screen.findByTestId('EntityIdList')
      // Verify that the ID is passed
      expect(mockEntityIdListComponent).toHaveBeenRenderedWithProps(
        expect.objectContaining({
          entityIdList: EXPECTED_PARSED_ENTITYID_LIST,
          displayTextField: 'name',
          showIcon: false,
        }),
      )
    })
  })

  it('renders a link for all authenticated users', async () => {
    renderTableCell({
      ...tableCellProps,
      rowData: [AUTHENTICATED_PRINCIPAL_ID.toString()],
      columnType: ColumnTypeEnum.USERID,
      columnValue: AUTHENTICATED_PRINCIPAL_ID.toString(),
    })

    await screen.findByText(AUTHENTICATED_GROUP_DISPLAY_TEXT, { exact: false })
  })

  it('renders a link for a team', async () => {
    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.USERID,
      columnValue: MOCK_TEAM_ID.toString(),
      rowData: [MOCK_TEAM_ID.toString()],
    })

    await screen.findByText(mockTeamData.name, {
      exact: false,
    })
  })

  it('renders a user card link', async () => {
    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.USERID,
      columnValue: MOCK_USER_ID.toString(),
      rowData: [MOCK_USER_ID.toString()],
    })

    await screen.findByTestId('UserBadge')
  })

  it('renders a markdown value', async () => {
    const mockMarkdownColumnValue = '# column markdown'

    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.USERID,
      columnValue: mockMarkdownColumnValue,
      rowData: [mockMarkdownColumnValue],
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
      rowData: [mockColumnValue],
    })

    await screen.findByText(mockColumnValue)
  })

  it('renders a date value', async () => {
    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.DATE,
      columnValue: mockDateValue,
      rowData: [mockDateValue],
    })

    await screen.findByText(formatDate(dayjs(Number(mockDateValue))))
  })

  it('renders a date list value', async () => {
    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.DATE_LIST,
      columnValue: MOCKED_DATE_LIST,
      rowData: [MOCKED_DATE_LIST],
    })

    await screen.findByText(formatDate(dayjs(Number(MOCK_DATE_VALUE))))
  })

  it('renders a integer list value', async () => {
    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.INTEGER_LIST,
      columnValue: MOCKED_INTEGER_LIST,
      rowData: [MOCKED_INTEGER_LIST],
    })

    await screen.findByText('10,', { exact: false })
    await screen.findByText('11', { exact: false })
  })

  it('renders a boolean list value', async () => {
    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.BOOLEAN_LIST,
      columnValue: MOCKED_BOOLEAN_LIST,
      rowData: [MOCKED_BOOLEAN_LIST],
    })

    await screen.findByText('true,')
    await screen.findByText('false')
  })

  it('renders an empty cell for null date', async () => {
    renderTableCell({
      ...tableCellProps,
      columnType: ColumnTypeEnum.DATE,
      columnValue: null,
      rowData: [null],
    })

    await screen.findByText(NOT_SET_DISPLAY_VALUE)
  })
})
