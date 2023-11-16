import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { TrashCanList } from './TrashCanList'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  TRASHCAN_PURGE,
  TRASHCAN_RESTORE,
  TRASHCAN_VIEW,
} from '../../utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import {
  PaginatedResults,
  TrashedEntity,
  EntityType,
} from '@sage-bionetworks/synapse-types'
import mockDatasetData from '../../mocks/entity/mockDataset'
import mockFileEntityData from '../../mocks/entity/mockFileEntity'
import { rest, server } from '../../mocks/msw/server'
import { MOCK_USER_ID } from '../../mocks/user/mock_user_profile'

function renderComponent() {
  return render(<TrashCanList />, { wrapper: createWrapper() })
}

const trashCanPages: PaginatedResults<TrashedEntity>[] = [
  {
    totalNumberOfResults: 2,
    results: [
      {
        entityId: mockFileEntityData.id,
        entityName: mockFileEntityData.name,
        entityType: EntityType.FILE,
        deletedByPrincipalId: MOCK_USER_ID.toString(),
        deletedOn: '2020-01-01T00:00:00.000Z',
        originalParentId: mockFileEntityData.entity.parentId!,
      },
    ],
  },
  {
    totalNumberOfResults: 2,
    results: [
      {
        entityId: mockDatasetData.id,
        entityName: mockDatasetData.name,
        entityType: EntityType.FILE,
        deletedByPrincipalId: MOCK_USER_ID.toString(),
        deletedOn: '2020-01-01T00:00:00.000Z',
        originalParentId: mockDatasetData.entity.parentId!,
      },
    ],
  },
]

const onServerReceivedRestore = jest.fn()
const onServerReceivedPurge = jest.fn()

describe('TrashCanList', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(
      rest.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${TRASHCAN_VIEW}`,
        async (req, res, ctx) => {
          const offset = req.url.searchParams.get('offset') ?? '0'
          const result = trashCanPages[parseInt(offset)]
          return res(ctx.status(200), ctx.json(result))
        },
      ),
      rest.put(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${TRASHCAN_RESTORE(
          ':entityId',
        )}`,
        async (req, res, ctx) => {
          onServerReceivedRestore(req.params.entityId)
          return res(ctx.status(200))
        },
      ),
      rest.put(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${TRASHCAN_PURGE(
          ':entityId',
        )}`,
        async (req, res, ctx) => {
          onServerReceivedPurge(req.params.entityId)
          return res(ctx.status(200))
        },
      ),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  test('Shows list of items in trash', async () => {
    renderComponent()
    const table = await screen.findByRole('table')
    const tbody = table.querySelector('tbody')!
    const rows = await within(tbody).findAllByRole('row')
    expect(rows).toHaveLength(1) // Only one entity on the first page

    const row = rows[0]
    // The row should have an enabled restore button
    const restoreRowButton = within(row).getByRole('button', {
      name: 'Restore',
    })
    expect(restoreRowButton).toBeEnabled()

    const loadMoreButton = screen.getByRole('button', { name: 'Load More' })
    expect(loadMoreButton).toBeEnabled()

    // Restore and delete buttons should be disabled because no items are selected
    const restoreButton = screen.getByRole('button', {
      name: 'Restore Selected',
    })
    expect(restoreButton).toBeDisabled()

    const deleteButton = screen.getByRole('button', { name: 'Delete Selected' })
    expect(deleteButton).toBeDisabled()
  })

  test('Fetch next page', async () => {
    renderComponent()
    const table = await screen.findByRole('table')
    const tbody = table.querySelector('tbody')!
    let rows = await within(tbody).findAllByRole('row')
    expect(rows).toHaveLength(1) // Only one entity on the first page

    // Click the Load More button
    const loadMoreButton = screen.getByRole('button', { name: 'Load More' })
    expect(loadMoreButton).toBeEnabled()
    await userEvent.click(loadMoreButton)

    // The table body should contain all results (two rows, 1 per page)
    await waitFor(() => {
      rows = within(tbody).getAllByRole('row')
      expect(rows).toHaveLength(2)
    })

    // Since we've loaded all pages, the Load More button should no longer appear
    expect(
      screen.queryByRole('button', { name: 'Load More' }),
    ).not.toBeInTheDocument()
  })

  test('Select all works', async () => {
    renderComponent()
    const table = await screen.findByRole('table')
    const tbody = table.querySelector('tbody')!
    let rows = []
    // Click the Load More button
    const loadMoreButton = screen.getByRole('button', { name: 'Load More' })
    await userEvent.click(loadMoreButton)

    // Wait for all results to be loaded
    await waitFor(() => {
      rows = within(tbody).getAllByRole('row')
      expect(rows).toHaveLength(2)
    })

    // Verify that all checkboxes are unchecked
    const checkboxes = screen.getAllByRole('checkbox')
    checkboxes.forEach(checkbox => {
      expect(checkbox).not.toBeChecked()
    })
    // Click the select all checkbox
    const selectAllCheckbox = screen.getByRole('checkbox', {
      name: 'Select All',
    })
    await userEvent.click(selectAllCheckbox)

    // All checkboxes should now be checked
    checkboxes.forEach(checkbox => {
      expect(checkbox).toBeChecked()
    })
  })

  test('Restore an individual item', async () => {
    renderComponent()

    const restoreButton = await screen.findByRole('button', {
      name: 'Restore',
    })

    await userEvent.click(restoreButton)

    await waitFor(() =>
      expect(onServerReceivedRestore).toHaveBeenCalledWith(
        trashCanPages[0].results[0].entityId,
      ),
    )
  })

  test('Bulk restore', async () => {
    renderComponent()
    const table = await screen.findByRole('table')
    const tbody = table.querySelector('tbody')!
    let rows = []
    // Click the Load More button
    const loadMoreButton = screen.getByRole('button', { name: 'Load More' })
    await userEvent.click(loadMoreButton)

    // Wait for all results to be loaded
    await waitFor(() => {
      rows = within(tbody).getAllByRole('row')
      expect(rows).toHaveLength(2)
    })

    // Click the select all checkbox
    const selectAllCheckbox = screen.getByRole('checkbox', {
      name: 'Select All',
    })
    await userEvent.click(selectAllCheckbox)

    // Click "Restore Selected"
    const restoreButton = screen.getByRole('button', {
      name: 'Restore Selected',
    })
    await userEvent.click(restoreButton)

    // Restore should have been called for each item
    await waitFor(() => {
      expect(onServerReceivedRestore).toHaveBeenCalledWith(
        trashCanPages[0].results[0].entityId,
      )
      expect(onServerReceivedRestore).toHaveBeenCalledWith(
        trashCanPages[1].results[0].entityId,
      )
    })

    // No errors should appear
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  test('Bulk restore with an error', async () => {
    // For only one of the items, the restore should fail
    server.use(
      rest.put(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${TRASHCAN_RESTORE(
          ':entityId',
        )}`,
        async (req, res, ctx) => {
          onServerReceivedRestore(req.params.entityId)
          if (req.params.entityId === mockFileEntityData.id) {
            return res(
              ctx.status(400),
              ctx.json({ reason: 'Some error returned by the server' }),
            )
          } else {
            return res(ctx.status(200))
          }
        },
      ),
    )

    renderComponent()
    const table = await screen.findByRole('table')
    const tbody = table.querySelector('tbody')!
    let rows = []
    // Click the Load More button
    const loadMoreButton = screen.getByRole('button', { name: 'Load More' })
    await userEvent.click(loadMoreButton)

    // Wait for all results to be loaded
    await waitFor(() => {
      rows = within(tbody).getAllByRole('row')
      expect(rows).toHaveLength(2)
    })

    // Click the select all checkbox
    const selectAllCheckbox = screen.getByRole('checkbox', {
      name: 'Select All',
    })
    await userEvent.click(selectAllCheckbox)

    // Click "Restore Selected"
    const restoreButton = screen.getByRole('button', {
      name: 'Restore Selected',
    })
    await userEvent.click(restoreButton)

    // Restore should have been called for each item
    await waitFor(() => {
      expect(onServerReceivedRestore).toHaveBeenCalledWith(
        trashCanPages[0].results[0].entityId,
      )
      expect(onServerReceivedRestore).toHaveBeenCalledWith(
        trashCanPages[1].results[0].entityId,
      )
    })

    // An alert containing the error should appear
    const alert = await screen.findByRole('alert')
    within(alert).getByText('Some error returned by the server')
  })

  test('Bulk delete', async () => {
    renderComponent()
    const table = await screen.findByRole('table')
    const tbody = table.querySelector('tbody')!
    let rows = []
    // Click the Load More button
    const loadMoreButton = screen.getByRole('button', { name: 'Load More' })
    await userEvent.click(loadMoreButton)

    // Wait for all results to be loaded
    await waitFor(() => {
      rows = within(tbody).getAllByRole('row')
      expect(rows).toHaveLength(2)
    })

    // Click the select all checkbox
    const selectAllCheckbox = screen.getByRole('checkbox', {
      name: 'Select All',
    })
    await userEvent.click(selectAllCheckbox)

    // Click "Delete Selected"
    const restoreButton = screen.getByRole('button', {
      name: 'Delete Selected',
    })
    await userEvent.click(restoreButton)

    // Confirmation modal appears
    const confirmationModal = screen.getByRole('dialog')
    const confirmDelete = within(confirmationModal).getByRole('button', {
      name: 'Delete',
    })
    await userEvent.click(confirmDelete)

    // Purge should have been called for each item
    await waitFor(() => {
      expect(onServerReceivedPurge).toHaveBeenCalledWith(
        trashCanPages[0].results[0].entityId,
      )
      expect(onServerReceivedPurge).toHaveBeenCalledWith(
        trashCanPages[1].results[0].entityId,
      )
    })

    // No errors should appear
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
