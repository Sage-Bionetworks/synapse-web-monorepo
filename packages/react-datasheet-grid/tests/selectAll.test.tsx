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

test('Select all with Cmd+A', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(<DataSheetGrid value={data} columns={columns} ref={ref} />)

  act(() => ref.current.setActiveCell({ col: 0, row: 0 }))

  await userEvent.keyboard('[MetaLeft>]a[/MetaLeft]')
  expect(ref.current.selection).toEqual({
    min: {
      col: 0,
      colId: 'firstName',
      row: 0,
    },
    max: {
      col: 1,
      colId: 'lastName',
      row: 1,
    },
  })
})

test('Select all with Ctrl+A', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(<DataSheetGrid value={data} columns={columns} ref={ref} />)

  act(() => ref.current.setActiveCell({ col: 0, row: 0 }))

  await userEvent.keyboard('[ControlLeft>]a[/ControlLeft]')
  expect(ref.current.selection).toEqual({
    min: {
      col: 0,
      colId: 'firstName',
      row: 0,
    },
    max: {
      col: 1,
      colId: 'lastName',
      row: 1,
    },
  })
})
