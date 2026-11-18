import { createRef } from 'react'
import { afterEach, test, expect, vi } from 'vitest'
import { act, render } from '@testing-library/react'
import {
  Column,
  DataSheetGrid,
  DataSheetGridRef,
  keyColumn,
  textColumn,
} from '../src'

vi.mock('react-resize-detector', () => ({
  useResizeDetector: () => ({ width: 800, height: 600 }),
}))

type Row = { id: string; name: string }

afterEach(() => {
  vi.restoreAllMocks()
})

const columns: Column[] = [keyColumn('name', textColumn)]

test('does not compute every row key again when a render leaves the rows unchanged', () => {
  const rows: Row[] = Array.from({ length: 1000 }, (_, index) => ({
    id: `row-${index}`,
    name: `Name ${index}`,
  }))
  const rowKey = vi.fn(({ rowData }: { rowData: Row }) => rowData.id)
  const ref = createRef<DataSheetGridRef>()
  render(
    <DataSheetGrid ref={ref} value={rows} columns={columns} rowKey={rowKey} />,
  )
  rowKey.mockClear()

  // Moving the active cell re-renders the grid without changing its rows
  act(() => ref.current?.setActiveCell({ col: 0, row: 1 }))

  expect(rowKey.mock.calls.length).toBeLessThan(rows.length)
})

test('moves the rows when their height changes', () => {
  // jsdom has no layout, so give the grid's scroll container a size for the
  // virtualizer to fill with rows
  vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(600)
  vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(800)
  const rows: Row[] = Array.from({ length: 20 }, (_, index) => ({
    id: `row-${index}`,
    name: `Name ${index}`,
  }))
  const renderGrid = (rowHeight: number) => (
    <DataSheetGrid
      value={rows}
      columns={columns}
      rowHeight={rowHeight}
      headerRowHeight={40}
    />
  )
  const { container, rerender } = render(renderGrid(40))
  const secondRow = () =>
    container.querySelectorAll<HTMLElement>('.dsg-row:not(.dsg-row-header)')[1]
  expect(secondRow().style.top).toBe('80px')

  rerender(renderGrid(60))

  expect(secondRow().style.top).toBe('100px')
  expect(secondRow().style.height).toBe('60px')
})
