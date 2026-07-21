import { mergeSlotProps } from '@/utils/slots/SlotUtils'
import { SxProps, Theme } from '@mui/material'
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual'
import { noop } from 'lodash-es'
import React, { useContext } from 'react'
import StyledTanStackTable, {
  StyledTanStackTableProps,
} from './StyledTanStackTable'

import { TrProps } from './types'

type StyledVirtualTanStackTableProps<T = unknown> = Omit<
  StyledTanStackTableProps<T, VirtualItem>,
  'slots' | 'rows' | 'rowTransform'
> & {
  rowVirtualizer: Virtualizer<any, any>
  onTableContainerScroll?: (target: EventTarget) => void
  /**
   * When true, alternating rows are given a striped background. Unlike {@link StyledTableContainerProps.noStripedRows},
   * this does not rely on CSS `:nth-of-type`, since a virtualized row's position in the DOM is not
   * guaranteed to match its data index as rows are mounted/unmounted while scrolling. Instead, this
   * stripes rows based on the `data-index` attribute that {@link VirtualizedTr} sets on each `<tr>`.
   * @default false
   */
  striped?: boolean
}

// The last digit of a `data-index` that identifies an odd row, e.g. matches indices 1, 3, 11, 23.
const ODD_ROW_LAST_DIGITS = [1, 3, 5, 7, 9]

const stripedRowsSx = (theme: Theme) => ({
  [ODD_ROW_LAST_DIGITS.map(digit => `&[data-index$="${digit}"]`).join(', ')]: {
    backgroundColor: theme.palette.grey[100],
  },
})

// Context to pass the row virtualizer to the Tr component
const RowVirtualizerContext = React.createContext<
  Virtualizer<any, any> | undefined
>(undefined)

/**
 * A table row component modified to be used with @tanstack/react-virtual.
 */
export function VirtualizedTr<TData = unknown>(
  props: TrProps<TData, VirtualItem>,
) {
  const { row: virtualItem, tableRow: _tableRow, ...rest } = props
  const rowVirtualizer = useContext(RowVirtualizerContext)
  return (
    <tr
      data-index={virtualItem.index} // needed for dynamic row height measurement
      ref={node => rowVirtualizer?.measureElement(node)} //measure dynamic row height
      {...rest}
      style={{
        ...rest.style,
        display: 'flex',
        position: 'absolute',
        transform: `translateY(${virtualItem.start}px)`, //this should always be a `style` as it changes on scroll
        width: '100%',
        alignItems: 'center',
      }}
    />
  )
}

/**
 * Stylized table component that is compatible with @tanstack/react-table and @tanstack/react-virtual to display a
 * virtualized table, i.e. a table that uses a virtualizer to only render the DOM nodes that contain data that is visible
 * within the viewport. For cases where the table rows do not need to be virtualized, use {@link StyledTanStackTable}.
 */
export default function StyledVirtualTanStackTable<T = unknown>(
  props: StyledVirtualTanStackTableProps<T>,
) {
  const {
    table,
    styledTableContainerProps,
    fullWidth = true,
    rowVirtualizer,
    slotProps = {},
    onTableContainerScroll = noop,
    striped = false,
  } = props

  const virtualRows = rowVirtualizer.getVirtualItems()

  return (
    <RowVirtualizerContext.Provider value={rowVirtualizer}>
      <StyledTanStackTable<T, VirtualItem>
        table={table}
        rows={virtualRows}
        rowTransform={row => table.getRowModel().rows[row.index]}
        fullWidth={fullWidth}
        styledTableContainerProps={{
          noStripedRows: true,
          ...styledTableContainerProps,
          style: {
            overflow: 'auto', //our scrollable table container
            position: 'relative', //needed for sticky header
            ...styledTableContainerProps?.style,
          },
          sx: [
            {
              'thead > tr': {
                display: 'flex',
                width: '100%',
              },
            },
            striped &&
              ((theme: Theme) => ({ 'tbody > tr': stripedRowsSx(theme) })),
            styledTableContainerProps?.sx,
          ]
            .flat()
            .filter(Boolean) as SxProps<Theme>,
          onScroll: e => onTableContainerScroll(e.target),
        }}
        {...styledTableContainerProps}
        slots={{
          Tr: VirtualizedTr,
        }}
        slotProps={mergeSlotProps(slotProps, {
          Table: {
            style: {
              display: 'grid',
            },
          },
          Thead: {
            style: {
              display: 'grid',
              position: 'sticky',
              top: 0,
              zIndex: 1,
            },
          },
          Th: {
            style: {
              display: 'flex',
            },
          },
          Tbody: {
            style: {
              display: 'grid',
              height: `${rowVirtualizer.getTotalSize()}px`, //tells scrollbar how big the table is
              position: 'relative', //needed for absolute positioning of rows
            },
          },
        })}
      />
    </RowVirtualizerContext.Provider>
  )
}
