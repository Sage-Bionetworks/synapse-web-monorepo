import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import { atomWithReducer } from 'jotai/utils'
import { cloneDeep } from 'lodash-es'
import {
  canHaveMaxListLength,
  canHaveSize,
  configureFacetsForType,
  DEFAULT_STRING_SIZE,
} from './TableColumnSchemaEditorUtils'
import {
  ColumnModelFormData,
  JsonSubColumnModelFormData,
} from './Validators/ColumnModelValidator'

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

export function getDefaultColumnModelFormData(): ColumnModelFormData {
  return {
    name: '',
    columnType: ColumnTypeEnum.STRING,
    maximumSize: DEFAULT_STRING_SIZE,
    isOriginallyDefaultColumn: false,
    isSelected: false,
  }
}

export function getDefaultJsonSubColumnFormData(): JsonSubColumnModelFormData {
  return {
    name: '',
    jsonPath: '',
    columnType: ColumnTypeEnum.STRING,
    facetType: 'enumeration',
    isSelected: false,
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

type TableColumnSchemaFormReducerAction =
  | {
      type: 'setValue'
      value: ColumnModelFormData[]
    }
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
      type: 'move'
      from: {
        columnModelIndex: number
        jsonSubColumnModelIndex?: number
      }
      to: { columnModelIndex: number; jsonSubColumnModelIndex?: number }
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

function changeColumnModelType(
  action: {
    type: 'changeColumnModelType'
    newColumnType: ColumnTypeEnum
    columnModelIndex: number
    jsonSubColumnModelIndex?: number
  },
  prevState: ColumnModelFormData[],
) {
  const { columnModelIndex, jsonSubColumnModelIndex, newColumnType } = action
  let newColumnModelValue: ColumnModelFormData | JsonSubColumnModelFormData

  // Create a copy of the selected column model
  if (prevState && prevState[columnModelIndex]) {
    if (
      prevState[columnModelIndex].jsonSubColumns &&
      jsonSubColumnModelIndex !== undefined
    ) {
      newColumnModelValue = cloneDeep(
        prevState[columnModelIndex].jsonSubColumns![jsonSubColumnModelIndex],
      )
    } else {
      newColumnModelValue = cloneDeep(prevState[columnModelIndex])
    }
  } else {
    throw new Error(
      'Cannot change column model type for a column that does not exist',
    )
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

  // Remove default and restricted values unconditionally since they may not adhere to the new column type
  if ('enumValues' in newColumnModelValue) {
    delete newColumnModelValue.enumValues
  }
  if ('defaultValue' in newColumnModelValue) {
    delete newColumnModelValue.defaultValue
  }

  const allowedFacetTypes = configureFacetsForType(
    newColumnType,
    !!jsonSubColumnModelIndex,
  )
  if (
    'facetType' in newColumnModelValue &&
    (allowedFacetTypes === null ||
      !allowedFacetTypes.includes(newColumnModelValue.facetType))
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
  if (prevState && prevState[columnModelIndex]) {
    if (
      prevState[columnModelIndex].jsonSubColumns &&
      jsonSubColumnModelIndex !== undefined
    ) {
      prevState[columnModelIndex].jsonSubColumns![jsonSubColumnModelIndex] =
        newColumnModelValue as JsonSubColumnModelFormData
    } else {
      prevState[columnModelIndex] = newColumnModelValue as ColumnModelFormData
    }
  }
}

function toggleSelectAll(prevState: ColumnModelFormData[]) {
  const allSelected = getIsAllSelected(prevState)
  if (allSelected) {
    return prevState.map(cm => ({
      ...cm,
      jsonSubColumns: cm.jsonSubColumns?.map(jsc => ({
        ...jsc,
        isSelected: false,
      })),
      isSelected: false,
    }))
  } else {
    return prevState.map(cm => ({
      ...cm,
      jsonSubColumns: cm.jsonSubColumns?.map(jsc => ({
        ...jsc,
        isSelected: true,
      })),
      isSelected: true,
    }))
  }
}

function setColumnModelValue(
  action: {
    type: 'setColumnModelValue'
    columnModelIndex: number
    jsonSubColumnModelIndex?: number
    value: ColumnModelFormData | JsonSubColumnModelFormData
  },
  prevState: ColumnModelFormData[],
) {
  const { columnModelIndex, jsonSubColumnModelIndex, value } = action
  if (prevState && prevState[columnModelIndex]) {
    if (
      prevState[columnModelIndex].jsonSubColumns &&
      jsonSubColumnModelIndex !== undefined
    ) {
      prevState[columnModelIndex].jsonSubColumns![jsonSubColumnModelIndex] =
        value as JsonSubColumnModelFormData
    } else {
      prevState[columnModelIndex] = value as ColumnModelFormData
    }
  }
}

function toggleSelect(
  action: {
    type: 'toggleSelect'
    columnModelIndex: number
    jsonSubColumnModelIndex?: number
  },
  prevState: ColumnModelFormData[],
) {
  const { columnModelIndex, jsonSubColumnModelIndex } = action
  if (prevState && prevState[columnModelIndex]) {
    if (
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
  }
}

function deleteColumnModel(prevState: ColumnModelFormData[]) {
  return prevState
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
}

/**
 * Returns a new, shallowly-cloned array that moves the object from the `fromIndex` to the `toIndex`.
 * Derived from https://stackoverflow.com/a/6470794/9723359
 *
 * Returns the same array if the `fromIndex` and `toIndex` are the same.
 * @param arrayToReorder
 * @param fromIndex
 * @param toIndex
 */
function moveElementInArray<T = unknown>(
  arrayToReorder: Array<T>,
  fromIndex: number,
  toIndex: number,
): Array<T> {
  if (fromIndex == toIndex) {
    return arrayToReorder
  }
  const newArray = [...arrayToReorder]
  const elementToMove = newArray[fromIndex]
  newArray.splice(fromIndex, 1)
  newArray.splice(toIndex, 0, elementToMove)
  return newArray
}

/**
 * Moves a column model or jsonSubColumn from the `from` index to the `to` index
 * @param action
 * @param prevState
 */
function moveColumnModel(
  action: {
    type: 'move'
    from: { columnModelIndex: number; jsonSubColumnModelIndex?: number }
    to: { columnModelIndex: number; jsonSubColumnModelIndex?: number }
  },
  prevState: ColumnModelFormData[],
): ColumnModelFormData[] {
  const { from, to } = action
  const arrayToReorder =
    from.jsonSubColumnModelIndex !== undefined
      ? prevState[from.columnModelIndex].jsonSubColumns!
      : prevState

  const fromIndex =
    from.jsonSubColumnModelIndex !== undefined
      ? from.jsonSubColumnModelIndex
      : from.columnModelIndex

  const toIndex =
    to.jsonSubColumnModelIndex !== undefined
      ? to.jsonSubColumnModelIndex
      : to.columnModelIndex

  // Move the element
  const newArray = moveElementInArray<unknown>(
    arrayToReorder,
    fromIndex,
    toIndex,
  ) as ColumnModelFormData[] | JsonSubColumnModelFormData[]

  if (from.jsonSubColumnModelIndex !== undefined) {
    // If we moved a jsonSubColumn, update state to use the new, reordered array
    prevState[from.columnModelIndex].jsonSubColumns =
      newArray as JsonSubColumnModelFormData[]
    return prevState
  } else {
    // Otherwise, return the new, reordered array of column models
    return newArray as ColumnModelFormData[]
  }
}

export function reducer(
  prevState: ColumnModelFormData[],
  action: TableColumnSchemaFormReducerAction,
) {
  switch (action.type) {
    case 'setValue':
      prevState = action.value
      break
    case 'toggleSelectAll': {
      prevState = toggleSelectAll(prevState)
      break
    }
    case 'setColumnModelValue': {
      setColumnModelValue(action, prevState)
      break
    }
    case 'changeColumnModelType': {
      changeColumnModelType(action, prevState)
      break
    }

    case 'appendColumn':
      prevState.push(getDefaultColumnModelFormData())
      break
    case 'appendJsonSubColumn': {
      const { columnModelIndex } = action
      prevState[columnModelIndex] = {
        ...prevState[columnModelIndex],
        jsonSubColumns: [
          ...(prevState[columnModelIndex].jsonSubColumns ?? []),
          getDefaultJsonSubColumnFormData(),
        ],
      }
      break
    }
    case 'toggleSelect': {
      toggleSelect(action, prevState)
      break
    }
    case 'delete':
      prevState = deleteColumnModel(prevState)
      break
    case 'move': {
      prevState = moveColumnModel(action, prevState)
      break
    }
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
