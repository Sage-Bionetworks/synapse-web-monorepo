import {
  ColumnModel,
  ColumnTypeEnum,
  FacetType,
  JsonSubColumnModel,
} from '@sage-bionetworks/synapse-types'
import { atomWithReducer } from 'jotai/utils'
import { SetOptional } from 'type-fest'
import { cloneDeep } from 'lodash-es'
import {
  canHaveMaxListLength,
  canHaveRestrictedValues,
  canHaveSize,
  configureFacetsForType,
} from './TableColumnSchemaEditorUtils'

export function getIsAllSelected(formData: ColumnModelFormData[]) {
  return (
    formData.length > 0 &&
    formData.every(
      cm =>
        // Is selected
        cm.isSelected &&
        // And all subcolumns are selected (true if there are no subcolumns)
        (cm.jsonSubColumns ?? []).every(
          (jsc: JsonSubColumnModelFormData) => jsc.isSelected,
        ),
    )
  )
}

export function getNumberOfSelectedItems(formData: ColumnModelFormData[]) {
  return formData.reduce((acc, curr) => {
    if (curr.isSelected) {
      acc += 1
    }
    if (curr.jsonSubColumns) {
      curr.jsonSubColumns.forEach((jsc: JsonSubColumnModelFormData) => {
        if (jsc.isSelected) {
          acc += 1
        }
      })
    }
    return acc
  }, 0)
}

export function getDefaultColumnModelFormData(): ColumnModelFormData {}

export function getDefaultJsonSubColumnFormData(): JsonSubColumnModelFormData {
  return {
    name: '',
    columnType: ColumnTypeEnum.STRING,
    facetType: 'enumeration',
    jsonPath: '',
  }
}

/**
 * In the provided array, move items up where the predicate evaluates to true
 * @param arr the array to reorder
 * @param predicate a function that returns true if the item should be moved up
 * @returns - a new array with the reordered items
 */
function moveSelectedItemsUp<T = unknown>(
  arr: T[],
  predicate: (item: T) => boolean,
) {
  const newArr = [...arr]
  newArr.forEach((item, index) => {
    // For each item that should move up, swap it with the previous item
    if (
      // Cannot move index 0 up
      index > 0 &&
      // Only move if the predicate matches
      predicate(item) &&
      // If the previous item should also move, skip the swap
      !predicate(newArr[index - 1])
    ) {
      // swap the items
      const temp = newArr[index - 1]
      newArr[index - 1] = newArr[index]
      newArr[index] = temp
    }
  })
  return newArr
}

/**
 * In the provided array, move items down where the predicate evaluates to true
 * @param arr the array to reorder
 * @param predicate a function that returns true if the item should be moved down
 * @returns - a new array with the reordered items
 */
function moveSelectedItemsDown<T = unknown>(
  arr: T[],
  predicate: (item: T) => boolean,
) {
  const newArr = [...arr]
  // Start from the end and work backwards, otherwise items could be moved more than once
  for (let i = newArr.length - 1; i >= 0; i--) {
    const item = newArr[i]
    if (
      // Cannot move the last item down
      i < newArr.length - 1 &&
      // Only move if the predicate matches
      predicate(item) &&
      // If the next item should also be moved, don't swap
      !predicate(newArr[i + 1])
    ) {
      // swap the items
      const temp = newArr[i]
      newArr[i] = newArr[i + 1]
      newArr[i + 1] = temp
    }
  }
  return newArr
}

export type JsonSubColumnModelFormData = JsonSubColumnModel & {
  // add `isSelected` to the data object
  isSelected: boolean
}

export type ColumnModelFormData = SetOptional<ColumnModel, 'id'> & {
  // add `isSelected` to the data object
  isSelected: boolean
  jsonSubColumns?: JsonSubColumnModelFormData[]
}

type TableColumnSchemaFormReducerAction =
  | {
      type: 'toggleSelect'
      columnModelIndex: number
      jsonSubColumnModelIndex?: number
    }
  | { type: 'toggleSelectAll' }
  | {
      type: 'appendColumn'
    }
  | {
      type: 'appendJsonSubColumn'
      columnModelIndex: number
    }
  | {
      type: 'setValue'
      value: ColumnModelFormData[]
    }
  | {
      type: 'setColumnModelValue'
      columnModelIndex: number
      jsonSubColumnModelIndex?: number
      value: ColumnModelFormData | JsonSubColumnModelFormData
    }
  | {
      type: 'changeColumnModelType'
      newColumnType: ColumnTypeEnum
      columnModelIndex: number
      jsonSubColumnModelIndex?: number
    }
  | {
      type: 'moveUp'
    }
  | {
      type: 'moveDown'
    }
  | {
      type: 'delete'
    }
function reducer(
  prevState: ColumnModelFormData[],
  action: TableColumnSchemaFormReducerAction,
) {
  switch (action.type) {
    case 'toggleSelectAll': {
      const allSelected = getIsAllSelected(prevState)
      if (allSelected) {
        prevState = prevState.map(cm => ({
          ...cm,
          jsonSubColumns: cm.jsonSubColumns?.map(jsc => ({
            ...jsc,
            isSelected: false,
          })),
          isSelected: false,
        }))
      } else {
        prevState = prevState.map(cm => ({
          ...cm,
          jsonSubColumns: cm.jsonSubColumns?.map(jsc => ({
            ...jsc,
            isSelected: true,
          })),
          isSelected: true,
        }))
      }
      break
    }
    case 'setValue':
      prevState = action.value
      break
    case 'setColumnModelValue': {
      const { columnModelIndex, jsonSubColumnModelIndex, value } = action
      if (
        prevState &&
        prevState[columnModelIndex] &&
        prevState[columnModelIndex].jsonSubColumns &&
        jsonSubColumnModelIndex !== undefined
      ) {
        prevState[columnModelIndex].jsonSubColumns![jsonSubColumnModelIndex] =
          value as JsonSubColumnModelFormData
      } else {
        prevState[columnModelIndex] = value as ColumnModelFormData
      }
      break
    }
    case 'changeColumnModelType': {
      const { columnModelIndex, jsonSubColumnModelIndex, newColumnType } =
        action
      let newColumnModelValue: ColumnModelFormData | JsonSubColumnModelFormData

      // Create a copy of the selected column model
      if (
        prevState &&
        prevState[columnModelIndex] &&
        prevState[columnModelIndex].jsonSubColumns &&
        jsonSubColumnModelIndex !== undefined
      ) {
        newColumnModelValue = cloneDeep(
          prevState[columnModelIndex].jsonSubColumns![jsonSubColumnModelIndex],
        )
      } else {
        newColumnModelValue = cloneDeep(prevState[columnModelIndex])
      }

      // Update the column model. Remove fields that no longer make sense for the new column type
      newColumnModelValue.columnType = newColumnType
      if (!canHaveSize(newColumnType) && 'maximumSize' in newColumnModelValue) {
        delete newColumnModelValue.maximumSize
      }
      if (
        !canHaveMaxListLength(newColumnType) &&
        'maximumListLength' in newColumnModelValue
      ) {
        delete newColumnModelValue.maximumListLength
      }
      if (
        !canHaveRestrictedValues(newColumnType, !!jsonSubColumnModelIndex) &&
        'enumValues' in newColumnModelValue
      ) {
        delete newColumnModelValue.enumValues
      }

      const allowedFacetTypes = configureFacetsForType(
        newColumnType,
        !!jsonSubColumnModelIndex,
      )
      if (
        'facetType' in newColumnModelValue &&
        (allowedFacetTypes === null ||
          allowedFacetTypes.includes(newColumnModelValue.facetType))
      ) {
        delete newColumnModelValue.facetType
      }

      if (
        'jsonSubColumns' in newColumnModelValue &&
        newColumnType !== ColumnTypeEnum.JSON
      ) {
        delete newColumnModelValue.jsonSubColumns
      }

      // Replace the value
      if (
        prevState &&
        prevState[columnModelIndex] &&
        prevState[columnModelIndex].jsonSubColumns &&
        jsonSubColumnModelIndex !== undefined
      ) {
        prevState[columnModelIndex].jsonSubColumns![jsonSubColumnModelIndex] =
          newColumnModelValue as JsonSubColumnModelFormData
      } else {
        prevState[columnModelIndex] = newColumnModelValue as ColumnModelFormData
      }
      break
    }

    case 'appendColumn':
      prevState.push({
        id: '',
        name: '',
        columnType: ColumnTypeEnum.STRING,
        isSelected: false,
      })
      break
    case 'appendJsonSubColumn': {
      const { columnModelIndex } = action
      prevState[columnModelIndex] = {
        ...prevState[columnModelIndex],
        jsonSubColumns: [
          ...(prevState[columnModelIndex].jsonSubColumns ?? []),
          {
            name: '',
            jsonPath: '',
            columnType: ColumnTypeEnum.STRING,
            facetType: 'enumeration',
            isSelected: false,
          },
        ],
      }
      break
    }
    case 'toggleSelect': {
      const { columnModelIndex, jsonSubColumnModelIndex } = action
      if (
        prevState &&
        prevState[columnModelIndex] &&
        prevState[columnModelIndex].jsonSubColumns &&
        jsonSubColumnModelIndex !== undefined
      ) {
        const cm =
          prevState[columnModelIndex].jsonSubColumns![jsonSubColumnModelIndex]
        prevState[columnModelIndex].jsonSubColumns![jsonSubColumnModelIndex] = {
          ...cm,
          isSelected: !cm.isSelected,
        }
      } else {
        const cm = prevState[columnModelIndex]
        prevState[columnModelIndex] = { ...cm, isSelected: !cm.isSelected }
      }
      break
    }
    case 'delete':
      prevState = prevState
        .filter(cm => !cm.isSelected)
        .map(cm => {
          if (cm.jsonSubColumns) {
            cm = {
              ...cm,
              jsonSubColumns: cm.jsonSubColumns.filter(
                (jsc: JsonSubColumnModelFormData) => !jsc.isSelected,
              ),
            }
          }
          return cm
        })
      break
    case 'moveUp':
      prevState = moveSelectedItemsUp(prevState, cm => cm.isSelected)
      prevState.forEach(cm => {
        if (cm.jsonSubColumns) {
          cm.jsonSubColumns = moveSelectedItemsUp(
            cm.jsonSubColumns,
            jsc => jsc.isSelected,
          )
        }
      })
      break
    case 'moveDown':
      prevState = moveSelectedItemsDown(prevState, cm => cm.isSelected)
      prevState.forEach(cm => {
        if (cm.jsonSubColumns) {
          cm.jsonSubColumns = moveSelectedItemsDown(
            cm.jsonSubColumns,
            jsc => jsc.isSelected,
          )
        }
      })
      break
    default:
      throw new Error(`Unexpected action`, action)
  }
  return [...prevState]
}

export const tableColumnSchemaFormDataAtom = atomWithReducer<
  ColumnModelFormData[],
  TableColumnSchemaFormReducerAction
>([], reducer)
