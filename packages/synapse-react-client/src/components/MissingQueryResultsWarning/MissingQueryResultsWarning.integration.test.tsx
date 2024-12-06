import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MissingQueryResultsWarning from './MissingQueryResultsWarning'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { EntityRef, Table } from '@sage-bionetworks/synapse-types'
import mockDatasetEntityData from '../../mocks/entity/mockDataset'
import { server } from '../../mocks/msw/server'
import { registerTableQueryResult } from '../../mocks/msw/handlers/tableQueryService'

const mockDatasetEntity = mockDatasetEntityData.entity

function renderComponent<T extends Table>(entity: T) {
  render(<MissingQueryResultsWarning entity={entity} />, {
    wrapper: createWrapper(),
  })
}

const allDatasetItems: EntityRef[] = [
  { entityId: 'syn123', versionNumber: 5 },
  { entityId: 'syn456', versionNumber: 1 },
  { entityId: 'syn789', versionNumber: 2 },
]

describe('MissingQueryResultsWarning tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('shows no warning when total results is equal to total visible results', () => {
    const numberOfVisibleResults = allDatasetItems.length

    registerTableQueryResult(
      { sql: `SELECT * FROM ${mockDatasetEntity.id}` },
      {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        queryCount: numberOfVisibleResults,
      },
    )

    renderComponent({ ...mockDatasetEntity, items: allDatasetItems })

    expect(screen.queryByText('Unavailable')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
  it('shows warning when total results is greater than total visible results on the current version', async () => {
    const numberOfVisibleResults = allDatasetItems.length - 1

    registerTableQueryResult(
      { sql: `SELECT * FROM ${mockDatasetEntity.id}` },
      {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        queryCount: numberOfVisibleResults,
      },
    )

    renderComponent({
      ...mockDatasetEntity,
      isLatestVersion: true,
      items: allDatasetItems,
    })

    await screen.findByText('1 Unavailable')
    const helpButton = await screen.findByRole('button')

    await userEvent.click(helpButton)
    await screen.findByText(
      'Files may be unavailable because you do not have permission to see them, they have been deleted, or the Dataset has been misconfigured.',
    )
  })
  it('shows warning when total results is greater than total visible results on a snapshot', async () => {
    const numberOfVisibleResults = allDatasetItems.length - 2

    registerTableQueryResult(
      {
        sql: `SELECT * FROM ${mockDatasetEntity.id}.${mockDatasetEntity.versionNumber}`,
      },
      {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        queryCount: numberOfVisibleResults,
      },
    )

    renderComponent({
      ...mockDatasetEntity,
      isLatestVersion: false,
      items: allDatasetItems,
    })

    await screen.findByText('2 Unavailable')
    const helpButton = await screen.findByRole('button')

    await userEvent.click(helpButton)
    // Help text does not indicate that files were deleted, because the deleted file would have been captured in the snapshot
    await screen.findByText(
      'Files may be unavailable because you do not have permission to see them or the Dataset was misconfigured.',
    )
  })

  it('shows no warning when total results is less than total visible results', () => {
    // Unlikely edge case -- see PLFM-8326
    const numberOfVisibleResults = allDatasetItems.length + 1

    registerTableQueryResult(
      {
        sql: `SELECT * FROM ${mockDatasetEntity.id}`,
      },
      {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
        queryCount: numberOfVisibleResults,
      },
    )

    renderComponent({ ...mockDatasetEntity, items: allDatasetItems })

    expect(screen.queryByText('Unavailable')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
