import { test, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, act } from '@testing-library/react'
import {
  DataSheetGrid,
  Column,
  textColumn,
  keyColumn,
  DataSheetGridRef,
} from '../src'

vi.mock('react-resize-detector', () => ({
  useResizeDetector: () => ({ width: 100, height: 100 }),
}))

const data = [
  { firstName: 'Elon', lastName: 'Musk' },
  { firstName: 'Jeff', lastName: 'Bezos' },
]
const columns: Column[] = [
  keyColumn('firstName', textColumn),
  keyColumn('lastName', textColumn),
]

test('Escape from editing', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(<DataSheetGrid value={data} columns={columns} ref={ref} />)

  act(() => ref.current.setActiveCell({ col: 0, row: 0 }))

  await userEvent.keyboard('[Enter]')
  await userEvent.keyboard('[Escape]')
  expect(ref.current.activeCell).toEqual({
    col: 0,
    colId: 'firstName',
    row: 0,
  })
})

test('Escape from selection', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(<DataSheetGrid value={data} columns={columns} ref={ref} />)

  act(() =>
    ref.current.setSelection({
      min: { col: 0, row: 0 },
      max: { col: 1, row: 1 },
    }),
  )

  await userEvent.keyboard('[Escape]')
  expect(ref.current.selection).toEqual({
    min: {
      col: 0,
      colId: 'firstName',
      row: 0,
    },
    max: {
      col: 0,
      colId: 'firstName',
      row: 0,
    },
  })
})

test('Escape from active', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(<DataSheetGrid value={data} columns={columns} ref={ref} />)

  act(() => ref.current.setActiveCell({ col: 0, row: 0 }))

  await userEvent.keyboard('[Escape]')
  expect(ref.current.activeCell).toEqual(null)
})
