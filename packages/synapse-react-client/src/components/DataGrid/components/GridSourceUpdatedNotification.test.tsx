import { CANCEL_BUTTON_TEXT } from '@/components/ConfirmationDialog/ConfirmationDialog'
import { GridSourceSync } from '@/components/DataGrid/hooks/useGridSourceSync'
import { IMPORT_LATEST_CHANGES_TEXT } from '@/components/DataGrid/utils/gridSyncMessages'
import { CLOSE_BUTTON_LABEL } from '@/components/DialogBase'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GridSourceUpdatedNotification, {
  SOURCE_UPDATED_BANNER_TEXT,
  SOURCE_UPDATED_TITLE,
} from './GridSourceUpdatedNotification'

function mockGridSourceSync(
  overrides: Partial<GridSourceSync> = {},
): GridSourceSync {
  return {
    isSourceOutdated: true,
    sourceEntityName: 'my record set',
    sourceEntityType: EntityType.recordset,
    prompt: 'dialog',
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
  render(<GridSourceUpdatedNotification gridSourceSync={gridSourceSync} />)
  return gridSourceSync
}

describe('GridSourceUpdatedNotification', () => {
  it('renders nothing when there is nothing to prompt about', () => {
    renderComponent({ prompt: 'hidden' })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('shows the dialog for the "dialog" prompt', () => {
    renderComponent()

    expect(screen.getByText(SOURCE_UPDATED_TITLE)).toBeInTheDocument()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('imports the latest changes when the dialog is confirmed', async () => {
    const gridSourceSync = renderComponent()

    await userEvent.click(
      screen.getByRole('button', { name: IMPORT_LATEST_CHANGES_TEXT }),
    )

    expect(gridSourceSync.importChanges).toHaveBeenCalled()
  })

  it('declines the dialog when it is cancelled', async () => {
    const gridSourceSync = renderComponent()

    await userEvent.click(
      screen.getByRole('button', { name: CANCEL_BUTTON_TEXT }),
    )

    expect(gridSourceSync.dismissDialog).toHaveBeenCalled()
  })

  it('declines the dialog when it is dismissed with the close button', async () => {
    const gridSourceSync = renderComponent()

    await userEvent.click(
      screen.getByRole('button', { name: CLOSE_BUTTON_LABEL }),
    )

    expect(gridSourceSync.dismissDialog).toHaveBeenCalled()
  })

  it('shows the persistent banner for the "banner" prompt', () => {
    renderComponent({ prompt: 'banner' })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.getByRole('alert')).toHaveTextContent(
      SOURCE_UPDATED_BANNER_TEXT,
    )
  })

  it('imports the latest changes from the banner', async () => {
    const gridSourceSync = renderComponent({ prompt: 'banner' })

    await userEvent.click(
      screen.getByRole('button', { name: IMPORT_LATEST_CHANGES_TEXT }),
    )

    expect(gridSourceSync.importChanges).toHaveBeenCalled()
  })

  it('disables the import action while a merge is pending', () => {
    renderComponent({ prompt: 'banner', isPending: true })

    expect(
      screen.getByRole('button', { name: IMPORT_LATEST_CHANGES_TEXT }),
    ).toBeDisabled()
  })
})
