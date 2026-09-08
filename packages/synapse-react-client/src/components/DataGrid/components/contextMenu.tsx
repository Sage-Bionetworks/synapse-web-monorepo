import {
  createAddRowsComponent,
  createContextMenuComponent,
  ContextMenuItem,
  DataSheetGrid,
} from '@sage-bionetworks/react-datasheet-grid'

// Define which context menu items are allowed for tables (a subset)
const VIEW_ALLOWED_MENU_ITEMS: ContextMenuItem['type'][] = [
  'COPY',
  'PASTE',
  'CUT',
]

// Create components outside of render to avoid recreating on every render
const AddRowsComponent = createAddRowsComponent()

// Keyed by the full item type union, so adding a new item type upstream is a
// compile error here rather than a menu entry that silently renders nothing.
const CONTEXT_MENU_ITEM_LABELS: Record<ContextMenuItem['type'], string> = {
  COPY: 'Copy',
  PASTE: 'Paste',
  CUT: 'Cut',
  INSERT_ROW_BELLOW: 'Insert row below',
  DELETE_ROW: 'Delete row',
  DUPLICATE_ROW: 'Duplicate row',
  DELETE_ROWS: 'Delete rows',
  DUPLICATE_ROWS: 'Duplicate rows',
}

// Shared render function for context menu items
const renderContextMenuItem = (item: ContextMenuItem) => (
  <>{CONTEXT_MENU_ITEM_LABELS[item.type]}</>
)

// Create base context menus (copy/cut/paste for recordSet, default for views)
const BaseViewContextMenuComponent = createContextMenuComponent(
  renderContextMenuItem,
)

const RecordSetContextMenuComponent = createContextMenuComponent(
  renderContextMenuItem,
)

// Create a wrapper component that filters items for views
const ViewContextMenuComponent: React.FC<
  React.ComponentProps<typeof BaseViewContextMenuComponent>
> = props => {
  // Filter the items to only include allowed ones for views
  const filteredItems = props.items.filter(item =>
    VIEW_ALLOWED_MENU_ITEMS.includes(item.type),
  )

  return <BaseViewContextMenuComponent {...props} items={filteredItems} />
}

// Create stable render functions outside the component
export const renderAddRowsComponent: React.ComponentProps<
  typeof DataSheetGrid
>['addRowsComponent'] = props => <AddRowsComponent {...props} />

export const renderViewContextMenu: React.ComponentProps<
  typeof DataSheetGrid
>['contextMenuComponent'] = props => <ViewContextMenuComponent {...props} />

export const renderRecordSetContextMenu: React.ComponentProps<
  typeof DataSheetGrid
>['contextMenuComponent'] = props => (
  <RecordSetContextMenuComponent {...props} />
)
