import {
  createAddRowsComponent,
  createContextMenuComponent,
  ContextMenuItem,
  DataSheetGrid,
} from 'react-datasheet-grid'

// Define which context menu items are allowed for tables (a subset)
const TABLE_ALLOWED_MENU_ITEMS: ContextMenuItem['type'][] = [
  'COPY',
  'PASTE',
  'CUT',
]

// Create components outside of render to avoid recreating on every render
const AddRowsComponent = createAddRowsComponent()

// Shared render function for context menu items
const renderContextMenuItem = (item: ContextMenuItem) => {
  if (item.type === 'COPY') {
    return <>Copy</>
  }
  if (item.type === 'PASTE') {
    return <>Paste</>
  }
  if (item.type === 'CUT') {
    return <>Cut</>
  }
  if (item.type === 'INSERT_ROW_BELLOW') {
    return <>Insert row below</>
  }
  if (item.type === 'DELETE_ROW') {
    return <>Delete row</>
  }
  if (item.type === 'DUPLICATE_ROW') {
    return <>Duplicate row</>
  }
  if (item.type === 'DELETE_ROWS') {
    return <>Delete rows</>
  }
  if (item.type === 'DUPLICATE_ROWS') {
    return <>Duplicate rows</>
  }
  return undefined
}

// Create a standard context menu component (for tables - all options)
const BaseTableContextMenuComponent = createContextMenuComponent(
  renderContextMenuItem,
)

// Create the base file context menu component
const FileContextMenuComponent = createContextMenuComponent(
  renderContextMenuItem,
)

// Create a wrapper component that filters items for tables
const TableContextMenuComponent: React.FC<
  React.ComponentProps<typeof BaseTableContextMenuComponent>
> = props => {
  // Filter the items to only include allowed ones for tables
  const filteredItems = props.items.filter(item =>
    TABLE_ALLOWED_MENU_ITEMS.includes(item.type),
  )

  return <BaseTableContextMenuComponent {...props} items={filteredItems} />
}

// Create stable render functions outside the component
export const renderAddRowsComponent: React.ComponentProps<
  typeof DataSheetGrid
>['addRowsComponent'] = props => <AddRowsComponent {...props} />

export const renderTableContextMenu: React.ComponentProps<
  typeof DataSheetGrid
>['contextMenuComponent'] = props => <TableContextMenuComponent {...props} />

export const renderFileContextMenu: React.ComponentProps<
  typeof DataSheetGrid
>['contextMenuComponent'] = props => <FileContextMenuComponent {...props} />
