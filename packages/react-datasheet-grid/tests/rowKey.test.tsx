import { createRef } from 'react'
import { test, expect, vi } from 'vitest'
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
