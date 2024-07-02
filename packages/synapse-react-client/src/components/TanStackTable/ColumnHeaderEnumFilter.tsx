import React from 'react'
import { Column, RowData } from '@tanstack/react-table'
import { isEmpty, isEqual, noop } from 'lodash-es'
import EnumFacetFilterUI, {
  EnumFacetFilterUIProps,
  RenderedFacetValue,
} from '../widgets/query-filter/EnumFacetFilter/EnumFacetFilterUI'
import { useMemo } from 'react'
import { ColumnFilterEnumValue } from '../../types/tanstack-table-augmentation'

function setEnumFilterValue<TData extends RowData, TValue = unknown>(
  column: Column<TData, TValue>,
  newValue: TValue,
) {
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
  type EnumFilterValue = TValue[]
  const { column, title } = props

  const canMultiSelect = column.columnDef.meta?.enableMultipleSelect || false
  const enumValues: ColumnFilterEnumValue<TValue>[] = useMemo(
    () => column.columnDef.meta?.enumValues || [],
    [column.columnDef.meta?.enumValues],
  )

  const _uncheckedFilterValues = column.getFilterValue() as EnumFilterValue
  const filterValues = useMemo(
    () => _uncheckedFilterValues || [],
    [_uncheckedFilterValues],
  )

  // Use the column's enumValues and filterValues to create the facet value objects used by EnumFacetFilterUI
  const transformedFilterValues: RenderedFacetValue<TValue>[] = useMemo(
    () =>
      enumValues.map(
        (v: ColumnFilterEnumValue<TValue>): RenderedFacetValue<TValue> => {
          const currentFilterValue = filterValues || []
          const isSelected = Boolean(
            currentFilterValue.find(filterValue => filterValue === v.value),
          )
          return { ...v, isSelected }
        },
      ),
    [enumValues, filterValues],
  )
  return (
    <EnumFacetFilterUI
      facetTitle={title}
      facetValues={transformedFilterValues}
      filterIsActive={column.getIsFiltered()}
      containerAs={'Dropdown'}
      dropdownType={'Icon'}
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
