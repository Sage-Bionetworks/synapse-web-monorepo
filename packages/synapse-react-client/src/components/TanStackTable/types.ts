import { Cell, Row } from '@tanstack/react-table'
import { RequireAllOrNone } from 'type-fest'
import { TableBodyProps } from './TableBody'

/**
 * The slots in the StyledTanStackTable component
 */
export type StyledTanStackTableSlots<
  TData = unknown,
  TRowData = Row<TData>,
> = TableBodyProps<TData, TRowData>['slots'] & {
  Table?: React.ElementType<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLTableElement>,
      HTMLTableElement
    >
  >
  Thead?: React.ElementType<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLTableSectionElement>,
      HTMLTableSectionElement
    >
  >
  Th?: React.ElementType<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLTableCellElement>,
      HTMLTableCellElement
    >
  >
}

/**
 * The slot props in the StyledTanStackTable component
 */
export type StyledTanStackTableSlotProps<
  TData = unknown,
  TRowData = Row<TData>,
> = TableBodyProps<TData, TRowData>['slotProps'] & {
  Table?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  >
  Thead?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >
  Th?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  >
}

/**
 * Standard props for a 'tr' component
 */
type TrHtmlProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>

/**
 * The owner state for the table row component in our StyledTanStackTable. We provide arbitrary row data and the corresponding table row, if present.
 */
export type TrOwnerState<TData = unknown, TRowType = Row<TData>> = {
  // The row data
  row: TRowType

  /**
   * Data corresponding to the table row. This may be different from row. E.g., the row may be a pointer to virtualized data.
   * If TRowType is not a Tanstack Table Row, then the rowTransform prop passed to TableBody must convert a row to a tableRow.
   *
   * Note: this may be undefined if the virtualized list has not been populated
   */
  tableRow?: Row<TData>
}

/**
 * Props for the table row component in our StyledTanStackTable. In addition to standard HTML props, we provide additional props for the row data.
 */
export type TrProps<TData = unknown, TRowType = Row<TData>> = TrHtmlProps &
  TrOwnerState<TData, TRowType>

/**
 * Slots for our TableBody component
 */
export type TableBodySlots<TData = unknown, TRowType = Row<TData>> = {
  Tbody?: React.ElementType<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLTableSectionElement>,
      HTMLTableSectionElement
    >
  >
  Tr?: React.ElementType<TrProps<TData, TRowType>>
  TableCellRenderer?: React.ElementType<Cell<TData, unknown>>
}

/**
 * Slot props for our TableBody component
 */
export type TableBodySlotProps<TData = unknown, TRowType = Row<TData>> = {
  Tbody?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >
  Tr?:
    | Partial<TrProps<TData, TRowType>>
    | ((
        ownerState: TrOwnerState<TData, TRowType>,
      ) => Partial<TrProps<TData, TRowType>>)
}

/**
 * A type that allows the rows and rowTransform props to be overridden. If a standard (non-virtualized) table is provided to the StyledTanStackTable, these props do not need to be provided.
 */
export type TableBodyPropsRowOverride<
  TData = unknown,
  TRowType = Row<TData>,
> = RequireAllOrNone<
  {
    /**
     * The rows that should be rendered. By default,this is the TanStack table rows, but this can be an array of any type.
     * One scenario where this is useful is that this can be a virtualized list of row objects.
     *
     * If TRowType is not a Tanstack Table Row, then the rowTransform prop passed to TableBody must convert a row to a tableRow.
     * */
    rows: TRowType[]

    /**
     * A function that transforms an arbitrary row object to a table row. Required when row data is not the set of TanStack Table Rows.
     * @param row the row object to transform
     * @returns a TanStack Table Row, or undefined if the table row is not yet available (e.g. in a virtualized list where the data has not yet been fetched)
     */
    rowTransform: (row: TRowType) => Row<TData> | undefined
  },
  'rows' | 'rowTransform'
>
