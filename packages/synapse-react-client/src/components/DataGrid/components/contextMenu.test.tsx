import { render, screen } from '@testing-library/react'
import { ContextMenuItem } from 'react-datasheet-grid'
import { renderFileContextMenu, renderTableContextMenu } from './contextMenu'

describe('FileContextMenuComponent', () => {
  it('renders with Copy menu item', () => {
    const mockItems: ContextMenuItem[] = [
      { type: 'COPY', action: vi.fn() },
      { type: 'PASTE', action: vi.fn() },
      { type: 'INSERT_ROW_BELLOW', action: vi.fn() },
    ]

    const mockClose = vi.fn()

    const FileContextMenu = renderFileContextMenu?.({
      items: mockItems,
      clientX: 0,
      clientY: 0,
      cursorIndex: { col: 0, row: 0 },
      close: mockClose,
    })

    render(<>{FileContextMenu}</>)

    expect(screen.getByText('Copy')).toBeInTheDocument()
    expect(screen.getByText('Insert row below')).toBeInTheDocument()
    expect(screen.queryByText('NotInDocument')).not.toBeInTheDocument()
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

    const TableContextMenu = renderTableContextMenu?.({
      items: mockItems,
      clientX: 0,
      clientY: 0,
      cursorIndex: { col: 0, row: 0 },
      close: mockClose,
    })

    render(<>{TableContextMenu}</>)

    expect(screen.getByText('Copy')).toBeInTheDocument()
    expect(screen.queryByText('Insert row below')).not.toBeInTheDocument()
  })
})
