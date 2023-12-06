import { render, screen } from '@testing-library/react'
import React from 'react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { MOCK_REPO_ORIGIN } from '../../utils/functions/getEndpoint'
import { ReferenceList } from '@sage-bionetworks/synapse-types'
import { server } from '../../mocks/msw/server'
import { getEntityHandlers } from '../../mocks/msw/handlers/entityHandlers'
import { EntityHeaderTable, EntityHeaderTableProps } from './EntityHeaderTable'
import mockEntities from '../../mocks/entity'

import * as EntityFinderModule from '../EntityFinder/EntityFinderModal'

function renderTable(props: EntityHeaderTableProps) {
  return render(<EntityHeaderTable {...props} />, {
    wrapper: createWrapper(),
  })
}

jest.spyOn(EntityFinderModule, 'EntityFinderModal').mockImplementation(() => {
  return <div data-testid="EntityFinderModal"></div>
})

describe('EntityHeaderTable tests', () => {
  beforeAll(() => {
    server.listen()
  })
  beforeEach(() => {
    server.use(...getEntityHandlers(MOCK_REPO_ORIGIN))
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('renders table', async () => {
    const refs: ReferenceList = [{ targetId: mockEntities[0].id }]
    renderTable({ references: refs, isEditable: false })
    expect(await screen.findAllByRole('columnheader')).toHaveLength(3)
  })

  // it('handle column sort press works', async () => {
  //   /*
  //             Overview:
  //               Go through clicking a column's sort button, there are
  //               three states that cycle:
  //                 - off
  //                 - descending
  //                 - ascending
  //           */
  //   renderTable()
  //   await waitFor(() => {
  //     expect(queryContext).toBeDefined()
  //   })

  //   // simulate having clicked the sort button on the first column, projectName
  //   const sortedColumn = 'projectName'

  //   const sortButton = (
  //     await screen.findAllByRole('button', { name: 'sort' })
  //   )[0]
  //   await userEvent.click(sortButton)

  //   // below we match only the part of the object that we expect to have changed
  //   await waitFor(() => {
  //     expect(queryContext!.currentQueryRequest).toEqual(
  //       expect.objectContaining({
  //         query: expect.objectContaining({
  //           sort: [
  //             {
  //               column: sortedColumn,
  //               direction: 'ASC',
  //             },
  //           ],
  //         }),
  //       }),
  //     )
  //   })

  //   // simulate second sort click
  //   await userEvent.click(sortButton)
  //   // below we match only the part of the object that we expect to have changed
  //   await waitFor(() => {
  //     expect(queryContext!.currentQueryRequest).toEqual(
  //       expect.objectContaining({
  //         query: expect.objectContaining({
  //           sort: [
  //             {
  //               column: sortedColumn,
  //               direction: 'DESC',
  //             },
  //           ],
  //         }),
  //       }),
  //     )
  //   })

  //   // simulate third sort click -- the sort will be removed
  //   await userEvent.click(sortButton)
  //   // below we match only the part of the object that we expect to have changed
  //   await waitFor(() => {
  //     expect(queryContext!.currentQueryRequest.query.sort).not.toBeDefined()
  //   })
  // })

  // it('Hides download columns when rows of an entity-containing view have no IDs', () => {
  //   // e.g. when the view has a GROUP BY or DISTINCT clause, the rows no longer represent individual entities, so they can't be downloaded
  //   // this is indicated by the rows of the result query not having rowIds, rather than the rowId matching the synID of the corresponding entity
  //   const queryResultBundleWithoutRowIds = cloneDeep(queryResultBundle)
  //   queryResultBundleWithoutRowIds.queryResult!.queryResults.rows =
  //     queryResultBundleWithoutRowIds.queryResult!.queryResults.rows.map(
  //       row => ({
  //         ...row,
  //         rowId: undefined,
  //       }),
  //     )

  //   // Return a file view entity, so the download column would be shown if not for the missing row IDs
  //   server.use(
  //     rest.get(
  //       `${getEndpoint(
  //         BackendDestinationEnum.REPO_ENDPOINT,
  //       )}/repo/v1/entity/${synapseTableEntityId}`,
  //       (req, res, ctx) => {
  //         return res(ctx.status(200), ctx.json(mockFileViewEntity))
  //       },
  //     ),
  //     ...getHandlersForTableQuery(queryResultBundleWithoutRowIds),
  //   )

  //   renderTable({ showDirectDownloadColumn: true })
  //   mockAllIsIntersecting(true)

  //   expect(
  //     screen.queryByTestId('AddToDownloadListCell'),
  //   ).not.toBeInTheDocument()
  // })

  // it('handles case where selectColumns do not match column models (SWC-6540)', async () => {
  //   const queryResultBundleWithRenamedColumn: QueryResultBundle = {
  //     concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  //     queryCount: 1,
  //     selectColumns: [{ name: 'Number of Studies', columnType: 'INTEGER' }],
  //     columnModels: [
  //       { name: 'studyName', columnType: 'LARGETEXT', id: '82659' },
  //       { name: 'studyId', columnType: 'ENTITYID', id: '82658' },
  //     ],
  //     facets: [],
  //     lastUpdatedOn: '2023-08-28T07:27:00.667Z',
  //     queryResult: {
  //       concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
  //       queryResults: {
  //         concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
  //         tableId: MOCK_TABLE_ENTITY_ID,
  //         etag: '53e1e27a-dbf3-4db3-acd1-dafca30b894c',
  //         headers: [{ name: 'Number of Studies', columnType: 'INTEGER' }],
  //         rows: [{ values: ['123'] }],
  //       },
  //     },
  //   }

  //   server.use(
  //     rest.get(
  //       `${getEndpoint(
  //         BackendDestinationEnum.REPO_ENDPOINT,
  //       )}/repo/v1/entity/${synapseTableEntityId}`,
  //       (req, res, ctx) => {
  //         return res(ctx.status(200), ctx.json(mockFileViewEntity))
  //       },
  //     ),
  //     ...getHandlersForTableQuery(queryResultBundleWithRenamedColumn),
  //   )

  //   renderTable({ showDirectDownloadColumn: true })
  //   mockAllIsIntersecting(true)

  //   const column = await screen.findByRole('columnheader')
  //   within(column).getByText('Number of Studies')
  //   screen.getByText('123')
  // })

  // it('does not contain facet controls for JSON subcolumn facets', async () => {
  //   const queryResultBundleWithFacetedJsonSubcolumn: QueryResultBundle = {
  //     concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  //     queryCount: 1,
  //     selectColumns: [{ name: 'study', columnType: 'JSON' }],
  //     columnModels: [
  //       {
  //         id: '1',
  //         name: 'study',
  //         columnType: 'JSON',
  //         jsonSubColumns: [
  //           {
  //             name: 'studyName',
  //             jsonPath: '$.name',
  //             columnType: 'STRING',
  //             facetType: 'enumeration',
  //           },
  //         ],
  //       },
  //     ],
  //     facets: [
  //       {
  //         columnName: 'study',
  //         facetType: 'enumeration',
  //         jsonPath: '$.name',
  //         concreteType:
  //           'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
  //         facetValues: [{ value: 'foo', count: 1, isSelected: false }],
  //       },
  //     ],
  //     lastUpdatedOn: '2023-08-28T07:27:00.667Z',
  //     queryResult: {
  //       concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
  //       queryResults: {
  //         concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
  //         tableId: MOCK_TABLE_ENTITY_ID,
  //         etag: '53e1e27a-dbf3-4db3-acd1-dafca30b894c',
  //         headers: [{ name: 'study', columnType: 'JSON' }],
  //         rows: [{ values: ['{"name": "foo"}'] }],
  //       },
  //     },
  //   }

  //   server.use(
  //     ...getHandlersForTableQuery(queryResultBundleWithFacetedJsonSubcolumn),
  //   )

  //   renderTable({ showDirectDownloadColumn: true })
  //   mockAllIsIntersecting(true)

  //   // The study column should be visible
  //   const column = await screen.findByRole('columnheader')
  //   within(column).getByText('Study')

  //   // No facet filter controls should be visible, since the only facet on the study column is a JSON subcolumn facet
  //   expect(
  //     screen.queryByRole('button', {
  //       name: 'Filter by specific facet',
  //     }),
  //   ).not.toBeInTheDocument()
  // })
})
