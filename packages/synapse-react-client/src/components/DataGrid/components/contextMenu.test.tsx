import { render, screen } from '@testing-library/react'
import { ContextMenuItem } from '@sage-bionetworks/react-datasheet-grid'
import {
  renderRecordSetContextMenu,
  renderViewContextMenu,
} from './contextMenu'

describe('FileContextMenuComponent', () => {
  it('renders with Copy menu item', () => {
    const mockItems: ContextMenuItem[] = [
      { type: 'COPY', action: vi.fn() },
      { type: 'PASTE', action: vi.fn() },
      { type: 'INSERT_ROW_BELLOW', action: vi.fn() },
    ]

    const mockClose = vi.fn()

    const RecordSetContextMenu = renderRecordSetContextMenu?.({
      items: mockItems,
      clientX: 0,
      clientY: 0,
      cursorIndex: { col: 0, row: 0 },
      close: mockClose,
    })

    render(<>{RecordSetContextMenu}</>)

    expect(screen.getByText('Copy')).toBeInTheDocument()
    expect(screen.getByText('Insert row below')).toBeInTheDocument()
  })
})

describe('TableContextMenuComponent', () => {
  it('renders with Copy menu item', () => {
    const mockItems: ContextMenuItem[] = [
      { type: 'COPY', action: vi.fn() },
      { type: 'PASTE', action: vi.fn() },
      { type: 'INSERT_ROW_BELLOW', action: vi.fn() }, // This should be filtered out for tables
    ]

    const mockClose = vi.fn()

    const ViewContextMenu = renderViewContextMenu?.({
      items: mockItems,
      clientX: 0,
      clientY: 0,
      cursorIndex: { col: 0, row: 0 },
      close: mockClose,
    })

    render(<>{ViewContextMenu}</>)

    expect(screen.getByText('Copy')).toBeInTheDocument()
    expect(screen.queryByText('Insert row below')).not.toBeInTheDocument()
  })
})
