import { Column, RowData } from '@tanstack/react-table'
import { isEmpty, isEqual, noop } from 'lodash-es'
import { useMemo } from 'react'
import EnumFacetFilterUI, {
  EnumFacetFilterUIProps,
  RenderedFacetValue,
} from '../widgets/query-filter/EnumFacetFilter/EnumFacetFilterUI'

function setEnumFilterValue<TData extends RowData, TValue = unknown>(
  column: Column<TData, TValue>,
  newValue: TValue,
) {
  'use no memo' // skip react compiler for this component
  if (column.columnDef.meta?.enableMultipleSelect) {
    // Append the value to the list, or create the list if it does not exist
    column.setFilterValue((curr: TValue[] | null): TValue[] | null => {
      if (curr) {
        return [...curr, newValue]
      }
      return [newValue]
    })
  } else {
    // Replace the list
    column.setFilterValue([newValue])
  }
}

function removeEnumFilterValue<TData extends RowData, TValue = unknown>(
  column: Column<TData, TValue>,
  valueToRemove: TValue,
) {
  'use no memo' // skip react compiler for this component
  column.setFilterValue((curr: TValue[] | null): TValue[] | null => {
    if (curr) {
      const newValue = [
        ...curr.filter(currValue => !isEqual(currValue, valueToRemove)),
      ]
      if (!isEmpty(newValue)) {
        return newValue
      }
    }
    return null
  })
}

type ColumnHeaderEnumFilterProps<TData = unknown, TValue = unknown> = {
  column: Column<TData, TValue>
  title: string
}

function getMaybeFacetedUniqueValues<TData = unknown, TValue = unknown>(
  column: Column<TData, TValue>,
): {
  value: TValue
  count?: number
}[] {
  'use no memo' // skip react compiler for this component
  if (column.getFacetedUniqueValues()) {
    // @tanstack/table currently has no API to define a unique set of values for a column without count statistics
    // In each instance, we manually defined a set of unique values and set the count to 0
    const hasFacetCounts = Array.from(
      column.getFacetedUniqueValues().values(),
    ).some(v => v != 0)
    return Array.from(column.getFacetedUniqueValues().entries()).map(
      (entry: [TValue, number]) => ({
        value: entry[0],
        count: hasFacetCounts ? entry[1] : undefined,
      }),
    )
  }
  return []
}

/**
 * Used to create {@link EnumFacetFilterUIProps} that can be used to create a control to filter column values based on
 * the provided @tanstack/react-table {@link Column}. The custom properties used to configure the filter should be set
 * in the column's `meta` field.
 * @param props
 * @constructor
 */
export function ColumnHeaderEnumFilter<TData = unknown, TValue = unknown>(
  props: ColumnHeaderEnumFilterProps<TData, TValue>,
) {
  'use no memo' // skip react compiler for this component
  type EnumFilterValue = TValue[]
  const { column, title } = props

  const canMultiSelect = column.columnDef.meta?.enableMultipleSelect || false

  const _uncheckedFilterValues = column.getFilterValue() as EnumFilterValue
  const filterValues = useMemo(
    () => _uncheckedFilterValues || [],
    [_uncheckedFilterValues],
  )

  // Use the column's enumValues and filterValues to create the facet value objects used by EnumFacetFilterUI
  const transformedFilterValues: RenderedFacetValue<TValue>[] = useMemo(
    () =>
      getMaybeFacetedUniqueValues(column).map(
        (facetValue): RenderedFacetValue<TValue> => {
          let displayText: string = facetValue.value as unknown as string
          if (column.columnDef?.meta?.getDisplayText) {
            displayText = column.columnDef.meta.getDisplayText(facetValue.value)
          }
          const currentFilterValue = filterValues || []
          const isSelected = Boolean(
            currentFilterValue.find(
              filterValue => filterValue === facetValue.value,
            ),
          )
          return { ...facetValue, displayText, isSelected }
        },
      ),
    [column, filterValues],
  )
  return (
    <EnumFacetFilterUI
      facetTitle={title}
      facetValues={transformedFilterValues}
      filterIsActive={column.getIsFiltered()}
      containerAs={'Dropdown'}
      dropdownType={'Icon'}
      defaultShowAllValues={true}
      onAddValueToSelection={newFilterValue => {
        setEnumFilterValue(column, newFilterValue)
      }}
      onRemoveValueFromSelection={valueToRemove => {
        removeEnumFilterValue(column, valueToRemove)
      }}
      onRemoveAllFacetSelections={() => {
        column.setFilterValue(null)
      }}
      onHoverOverValue={noop}
      canMultiSelect={canMultiSelect}
    />
  )
}
