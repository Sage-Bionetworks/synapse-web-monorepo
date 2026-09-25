import { GridSourceSync } from '@/components/DataGrid/hooks/useGridSourceSync'
import {
  IMPORT_LATEST_CHANGES_TEXT,
  SUBMIT_TEXT,
} from '@/components/DataGrid/utils/gridSyncMessages'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SyncGridWithSourceButton from './SyncGridWithSourceButton'

function mockGridSourceSync(
  overrides: Partial<GridSourceSync> = {},
): GridSourceSync {
  return {
    isSourceOutdated: false,
    sourceEntityName: 'my source',
    sourceEntityType: EntityType.recordset,
    prompt: 'hidden',
    isLoading: false,
    isPending: false,
    importChanges: vi.fn(),
    submit: vi.fn(),
    dismissDialog: vi.fn(),
    ...overrides,
  }
}

function renderComponent(overrides: Partial<GridSourceSync> = {}) {
  const gridSourceSync = mockGridSourceSync(overrides)
  render(<SyncGridWithSourceButton gridSourceSync={gridSourceSync} />)
  return gridSourceSync
}

describe('SyncGridWithSourceButton', () => {
  it('shows a loading skeleton instead of a button while the sync state is loading', () => {
    renderComponent({ isLoading: true })

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('shows a loading indicator while a merge is pending', () => {
    renderComponent({ isPending: true })

    expect(screen.getByRole('button', { name: SUBMIT_TEXT })).toBeDisabled()
  })

  it('submits when the source is up to date', async () => {
    const gridSourceSync = renderComponent()

    await userEvent.click(screen.getByRole('button', { name: SUBMIT_TEXT }))

    expect(gridSourceSync.submit).toHaveBeenCalled()
    expect(gridSourceSync.importChanges).not.toHaveBeenCalled()
  })

  it('offers the import instead of submitting when the source has been updated', async () => {
    const gridSourceSync = renderComponent({ isSourceOutdated: true })

    expect(
      screen.queryByRole('button', { name: SUBMIT_TEXT }),
    ).not.toBeInTheDocument()
    await userEvent.click(
      screen.getByRole('button', { name: IMPORT_LATEST_CHANGES_TEXT }),
    )

    expect(gridSourceSync.importChanges).toHaveBeenCalled()
    expect(gridSourceSync.submit).not.toHaveBeenCalled()
  })

  it('labels the button for a table source', () => {
    renderComponent({ sourceEntityType: EntityType.table })

    expect(
      screen.getByRole('button', { name: SUBMIT_TEXT }),
    ).toBeInTheDocument()
  })
})
