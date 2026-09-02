import { test, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen, act } from '@testing-library/react'
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

test('Tab from outside', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(
    <>
      <input data-testid="input-before" />
      <DataSheetGrid value={data} columns={columns} ref={ref} lockRows />
      <input data-testid="input-after" />
    </>,
  )

  await userEvent.click(screen.getByTestId('input-before'))

  await userEvent.tab()
  expect(ref.current.activeCell).toEqual({
    col: 0,
    colId: 'firstName',
    row: 0,
  })
})

test('Tab from cell', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(<DataSheetGrid value={data} columns={columns} ref={ref} lockRows />)

  act(() => ref.current.setActiveCell({ col: 0, row: 1 }))

  await userEvent.tab()
  expect(ref.current.activeCell).toEqual({
    col: 1,
    colId: 'lastName',
    row: 1,
  })
})

test('Tab from last cell of row', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(<DataSheetGrid value={data} columns={columns} ref={ref} lockRows />)

  act(() => ref.current.setActiveCell({ col: 1, row: 0 }))

  await userEvent.tab()
  expect(ref.current.activeCell).toEqual({
    col: 0,
    colId: 'firstName',
    row: 1,
  })
})

test('Tab from last cell of last row', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(
    <>
      <input data-testid="input-before" />
      <DataSheetGrid value={data} columns={columns} ref={ref} lockRows />
      <input data-testid="input-after" />
    </>,
  )

  act(() => ref.current.setActiveCell({ col: 1, row: 1 }))

  await userEvent.tab()
  expect(ref.current.activeCell).toEqual(null)
  expect(screen.getByTestId('input-after')).toHaveFocus()
})

test('Shift tab from outside', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(
    <>
      <input data-testid="input-before" />
      <DataSheetGrid value={data} columns={columns} ref={ref} lockRows />
      <input data-testid="input-after" />
    </>,
  )

  await userEvent.click(screen.getByTestId('input-after'))

  await userEvent.tab({ shift: true })
  expect(ref.current.activeCell).toEqual({
    col: 1,
    colId: 'lastName',
    row: 1,
  })
})

test('Shift tab from cell', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(
    <>
      <input data-testid="input-before" />
      <DataSheetGrid value={data} columns={columns} ref={ref} lockRows />
      <input data-testid="input-after" />
    </>,
  )

  act(() => ref.current.setActiveCell({ col: 1, row: 1 }))

  await userEvent.tab({ shift: true })
  expect(ref.current.activeCell).toEqual({
    col: 0,
    colId: 'firstName',
    row: 1,
  })
})

test('Shift tab from first cell of row', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(
    <>
      <input data-testid="input-before" />
      <DataSheetGrid value={data} columns={columns} ref={ref} lockRows />
      <input data-testid="input-after" />
    </>,
  )

  act(() => ref.current.setActiveCell({ col: 0, row: 1 }))

  await userEvent.tab({ shift: true })
  expect(ref.current.activeCell).toEqual({
    col: 1,
    colId: 'lastName',
    row: 0,
  })
})

test('Shift tab from first cell of first row', async () => {
  const ref = { current: null as unknown as DataSheetGridRef }
  render(
    <>
      <input data-testid="input-before" />
      <DataSheetGrid value={data} columns={columns} ref={ref} lockRows />
      <input data-testid="input-after" />
    </>,
  )

  act(() => ref.current.setActiveCell({ col: 0, row: 0 }))

  await userEvent.tab({ shift: true })
  expect(ref.current.activeCell).toEqual(null)
  expect(screen.getByTestId('input-before')).toHaveFocus()
})
