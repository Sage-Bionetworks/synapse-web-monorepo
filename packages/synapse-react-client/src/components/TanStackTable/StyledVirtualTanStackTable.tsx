import { VirtualItem, Virtualizer } from '@tanstack/react-virtual'
import { noop } from 'lodash-es'
import React, { useContext } from 'react'
import { mergeSlotProps } from '../../utils/slots/SlotUtils'
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
}

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
          sx: {
            'thead > tr': {
              display: 'flex',
              width: '100%',
            },
          },
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
