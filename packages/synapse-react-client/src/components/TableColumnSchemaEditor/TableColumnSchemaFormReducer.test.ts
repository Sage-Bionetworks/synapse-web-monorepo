import { ColumnTypeEnum } from '@sage-bionetworks/synapse-types'
import { ColumnModelFormData } from './Validators/ColumnModelValidator'
import {
  getDefaultColumnModelFormData,
  getDefaultJsonSubColumnFormData,
  getNumberOfSelectedItems,
  reducer,
} from './TableColumnSchemaFormReducer'

describe('TableColumnSchemaFormReducer', () => {
  let prevState: ColumnModelFormData[] = []
  beforeEach(() => {
    prevState = [
      {
        id: '123',
        name: 'col1',
        columnType: ColumnTypeEnum.STRING,
        isSelected: false,
        isOriginallyDefaultColumn: false,
      },
      {
        id: '123',
        name: 'col2',
        columnType: ColumnTypeEnum.JSON,
        jsonSubColumns: [
          {
            name: 'subcol1',
            columnType: ColumnTypeEnum.STRING,
            isSelected: false,
            facetType: 'enumeration',
            jsonPath: '$.x',
          },
          {
            name: 'subcol2',
            columnType: ColumnTypeEnum.INTEGER,
            isSelected: false,
            facetType: 'range',
            jsonPath: '$.y',
          },
        ],
        isSelected: false,
        isOriginallyDefaultColumn: false,
      },
    ]
  })

  test('setValue', () => {
    const newValueToPass: ColumnModelFormData[] = [
      {
        id: '124',
        name: 'col2',
        columnType: ColumnTypeEnum.INTEGER,
        isSelected: false,
        isOriginallyDefaultColumn: false,
      },
    ]
    const newState = reducer(prevState, {
      type: 'setValue',
      value: newValueToPass,
    })
    expect(newState).not.toBe(prevState)
    expect(newState).toEqual(newValueToPass)
  })
  test('toggleSelect - top level column', () => {
    const initialIsSelected = prevState[1].isSelected
    const newState = reducer(prevState, {
      type: 'toggleSelect',
      columnModelIndex: 1,
    })

    expect(newState).not.toBe(prevState)
    expect(newState[1].isSelected).toBe(!initialIsSelected)
  })
  test('toggleSelect - jsonSubColumn', () => {
    const initialIsSelected = prevState[1].jsonSubColumns![0].isSelected
    const newState = reducer(prevState, {
      type: 'toggleSelect',
      columnModelIndex: 1,
      jsonSubColumnModelIndex: 0,
    })

    expect(newState).not.toBe(prevState)
    expect(newState[1].jsonSubColumns![0].isSelected).toBe(!initialIsSelected)
  })
  test('toggleSelectAll', () => {
    // First, select one just to test calling toggleSelectAll when there is a partial selection
    prevState = reducer(prevState, {
      type: 'toggleSelect',
      columnModelIndex: 1,
    })

    let isSelectedExpectedValue = true
    let newState = reducer(prevState, { type: 'toggleSelectAll' })
    expect(newState).not.toBe(prevState)
    expect(newState[0].isSelected).toBe(isSelectedExpectedValue)
    expect(newState[1].isSelected).toBe(isSelectedExpectedValue)
    expect(newState[1].jsonSubColumns![0].isSelected).toBe(
      isSelectedExpectedValue,
    )
    expect(newState[1].jsonSubColumns![1].isSelected).toBe(
      isSelectedExpectedValue,
    )

    // Now, toggleSelectAll again -- none should be selected
    isSelectedExpectedValue = false
    prevState = newState
    newState = reducer(prevState, { type: 'toggleSelectAll' })
    expect(newState).not.toBe(prevState)
    expect(newState[0].isSelected).toBe(isSelectedExpectedValue)
    expect(newState[1].isSelected).toBe(isSelectedExpectedValue)
    expect(newState[1].jsonSubColumns![0].isSelected).toBe(
      isSelectedExpectedValue,
    )
    expect(newState[1].jsonSubColumns![1].isSelected).toBe(
      isSelectedExpectedValue,
    )

    // Now, toggleSelectAll again -- once again, all should be selected
    isSelectedExpectedValue = true
    prevState = newState
    newState = reducer(prevState, { type: 'toggleSelectAll' })
    expect(newState).not.toBe(prevState)
    expect(newState[0].isSelected).toBe(isSelectedExpectedValue)
    expect(newState[1].isSelected).toBe(isSelectedExpectedValue)
    expect(newState[1].jsonSubColumns![0].isSelected).toBe(
      isSelectedExpectedValue,
    )
    expect(newState[1].jsonSubColumns![1].isSelected).toBe(
      isSelectedExpectedValue,
    )
  })
  test('appendColumn', () => {
    const initialLength = prevState.length
    const newState = reducer(prevState, {
      type: 'appendColumn',
    })
    expect(newState[newState.length - 1]).toEqual({
      name: '',
      isOriginallyDefaultColumn: false,
      columnType: ColumnTypeEnum.STRING,
      maximumSize: 50,
      isSelected: false,
    })

    expect(newState).not.toBe(prevState)
    expect(newState.length).toBe(initialLength + 1)
  })
  test('appendJsonSubColumn', () => {
    const initialLength = prevState[1].jsonSubColumns!.length
    const newState = reducer(prevState, {
      type: 'appendJsonSubColumn',
      columnModelIndex: 1,
    })
    expect(
      newState[1].jsonSubColumns![newState[1].jsonSubColumns!.length - 1],
    ).toEqual({
      name: '',
      facetType: 'enumeration',
      columnType: ColumnTypeEnum.STRING,
      isSelected: false,
      jsonPath: '',
    })

    expect(newState).not.toBe(prevState)
    expect(newState[1].jsonSubColumns!.length).toBe(initialLength + 1)
  })
  test('setColumnModelValue - top level column model', () => {
    const initialValue = prevState[0]
    const newState = reducer(prevState, {
      type: 'setColumnModelValue',
      columnModelIndex: 0,
      value: {
        ...initialValue,
        name: 'newName',
      },
    })

    expect(newState).not.toBe(prevState)
    // The changed column model should be a different object
    expect(newState[0]).not.toBe(initialValue)
    // Column models that did not change should be the same object, so React does not need to re-render the component
    expect(newState[1]).toBe(prevState[1])
    expect(newState[0].name).toBe('newName')
  })
  test('setColumnModelValue - jsonSubColumn', () => {
    const initalJsonSubColumnToChange = prevState[1].jsonSubColumns![0]
    const unmodifiedSiblingJsonSubColumn = prevState[1].jsonSubColumns![1]
    const unmodifiedParentColumnModel = prevState[1]
    const newState = reducer(prevState, {
      type: 'setColumnModelValue',
      columnModelIndex: 1,
      jsonSubColumnModelIndex: 0,
      value: {
        ...initalJsonSubColumnToChange,
        name: 'newName',
      },
    })

    expect(newState).not.toBe(prevState)
    // The changed jsonSubColumn should be a different object
    expect(newState[1].jsonSubColumns![0]).not.toBe(initalJsonSubColumnToChange)
    // The parent JSON column model and siblings should be the same objects, so React does not need to re-render the entire tree
    expect(newState[1]).toBe(unmodifiedParentColumnModel)
    expect(newState[1].jsonSubColumns![1]).toBe(unmodifiedSiblingJsonSubColumn)
    expect(newState[1].jsonSubColumns![0].name).toBe('newName')
  })
  test('changeColumnModelType - both canHaveSize', () => {
    // STRING -> LINK
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'stringToLinkColumn',
        columnType: ColumnTypeEnum.STRING,
        maximumSize: 25,
      },
    ]
    const initialValue = prevState[0]
    const newState = reducer(prevState, {
      type: 'changeColumnModelType',
      columnModelIndex: 0,
      newColumnType: ColumnTypeEnum.LINK,
    })

    expect(newState).not.toBe(prevState)
    // The changed column model should be a different object
    expect(newState[0]).not.toBe(initialValue)
    expect(newState[0].name).toEqual(initialValue.name)
    expect(newState[0].columnType).toEqual(ColumnTypeEnum.LINK)
    // maximumSize should not have changed
    expect(newState[0].maximumSize).toEqual(initialValue.maximumSize)
  })
  test('changeColumnModelType - canHaveSize becomes false', () => {
    // STRING -> INTEGER
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'stringToLinkColumn',
        columnType: ColumnTypeEnum.STRING,
        maximumSize: 25,
      },
    ]
    const initialValue = prevState[0]
    const newState = reducer(prevState, {
      type: 'changeColumnModelType',
      columnModelIndex: 0,
      newColumnType: ColumnTypeEnum.INTEGER,
    })

    expect(newState).not.toBe(prevState)
    // The changed column model should be a different object
    expect(newState[0]).not.toBe(initialValue)
    expect(newState[0].name).toEqual(initialValue.name)
    expect(newState[0].columnType).toEqual(ColumnTypeEnum.INTEGER)
    // maximumSize should not exist on new column model
    expect(Object.hasOwn(newState[0], 'maximumSize')).toBe(false)
  })

  test('changeColumnModelType - both canHaveMaxListLength', () => {
    // STRING_LIST -> INTEGER_LIST
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'stringToLinkColumn',
        columnType: ColumnTypeEnum.STRING_LIST,
        maximumListLength: 5,
      },
    ]
    const initialValue = prevState[0]
    const newState = reducer(prevState, {
      type: 'changeColumnModelType',
      columnModelIndex: 0,
      newColumnType: ColumnTypeEnum.INTEGER_LIST,
    })

    expect(newState).not.toBe(prevState)
    // The changed column model should be a different object
    expect(newState[0]).not.toBe(initialValue)
    expect(newState[0].name).toEqual(initialValue.name)
    expect(newState[0].columnType).toEqual(ColumnTypeEnum.INTEGER_LIST)
    // maximumListLength should not have changed
    expect(newState[0].maximumListLength).toEqual(5)
  })
  test('changeColumnModelType - canHaveMaxListLength becomes false', () => {
    // STRING_LIST -> STRING
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'stringToLinkColumn',
        columnType: ColumnTypeEnum.STRING_LIST,
        maximumListLength: 5,
      },
    ]
    const initialValue = prevState[0]
    const newState = reducer(prevState, {
      type: 'changeColumnModelType',
      columnModelIndex: 0,
      newColumnType: ColumnTypeEnum.STRING,
    })

    expect(newState).not.toBe(prevState)
    // The changed column model should be a different object
    expect(newState[0]).not.toBe(initialValue)
    expect(newState[0].name).toEqual(initialValue.name)
    expect(newState[0].columnType).toEqual(ColumnTypeEnum.STRING)
    // maximumListLength should not exist on new column model
    expect(Object.hasOwn(newState[0], 'maximumListLength')).toBe(false)
  })

  test('changeColumnModelType - both canHaveRestrictedValues', () => {
    // STRING -> INTEGER
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'stringToLinkColumn',
        columnType: ColumnTypeEnum.STRING,
        enumValues: ['1', '2', '3'],
      },
    ]
    const initialValue = prevState[0]
    const newState = reducer(prevState, {
      type: 'changeColumnModelType',
      columnModelIndex: 0,
      newColumnType: ColumnTypeEnum.INTEGER,
    })

    expect(newState).not.toBe(prevState)
    // The changed column model should be a different object
    expect(newState[0]).not.toBe(initialValue)
    expect(newState[0].name).toEqual(initialValue.name)
    expect(newState[0].columnType).toEqual(ColumnTypeEnum.INTEGER)
    // enumValues should have been removed
    expect(newState[0].enumValues).toBeUndefined()
  })
  test('changeColumnModelType - canHaveRestrictedValues becomes false', () => {
    // STRING -> BOOLEAN
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'stringToLinkColumn',
        columnType: ColumnTypeEnum.STRING,
        enumValues: ['1', '2', '3'],
      },
    ]
    const initialValue = prevState[0]
    const newState = reducer(prevState, {
      type: 'changeColumnModelType',
      columnModelIndex: 0,
      newColumnType: ColumnTypeEnum.BOOLEAN,
    })

    expect(newState).not.toBe(prevState)
    // The changed column model should be a different object
    expect(newState[0]).not.toBe(initialValue)
    expect(newState[0].name).toEqual(initialValue.name)
    expect(newState[0].columnType).toEqual(ColumnTypeEnum.BOOLEAN)
    // enumValues should not exist on new column model
    expect(Object.hasOwn(newState[0], 'enumValues')).toBe(false)
  })

  test('changeColumnModelType - both allow same facet type', () => {
    // STRING -> BOOLEAN with 'enumeration'
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'stringToLinkColumn',
        columnType: ColumnTypeEnum.STRING,
        facetType: 'enumeration',
      },
    ]
    const initialValue = prevState[0]
    const newState = reducer(prevState, {
      type: 'changeColumnModelType',
      columnModelIndex: 0,
      newColumnType: ColumnTypeEnum.BOOLEAN,
    })

    expect(newState).not.toBe(prevState)
    // The changed column model should be a different object
    expect(newState[0]).not.toBe(initialValue)
    expect(newState[0].name).toEqual(initialValue.name)
    expect(newState[0].columnType).toEqual(ColumnTypeEnum.BOOLEAN)
    // facetType should not have changed
    expect(newState[0].facetType).toEqual('enumeration')
  })
  test('changeColumnModelType - new type does not allow same facet type', () => {
    // STRING -> DOUBLE with 'enumeration'
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'stringToLinkColumn',
        columnType: ColumnTypeEnum.STRING,
        facetType: 'enumeration',
      },
    ]
    const initialValue = prevState[0]
    const newState = reducer(prevState, {
      type: 'changeColumnModelType',
      columnModelIndex: 0,
      newColumnType: ColumnTypeEnum.DOUBLE,
    })

    expect(newState).not.toBe(prevState)
    // The changed column model should be a different object
    expect(newState[0]).not.toBe(initialValue)
    expect(newState[0].name).toEqual(initialValue.name)
    expect(newState[0].columnType).toEqual(ColumnTypeEnum.DOUBLE)
    // facetType should not exist on new column model
    expect(Object.hasOwn(newState[0], 'facetType')).toBe(false)
  })
  test('changeColumnModelType - new type does not allow any facets', () => {
    // STRING -> FILEHANDLEID with 'enumeration'
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'stringToLinkColumn',
        columnType: ColumnTypeEnum.STRING,
        facetType: 'enumeration',
      },
    ]
    const initialValue = prevState[0]
    const newState = reducer(prevState, {
      type: 'changeColumnModelType',
      columnModelIndex: 0,
      newColumnType: ColumnTypeEnum.FILEHANDLEID,
    })

    expect(newState).not.toBe(prevState)
    // The changed column model should be a different object
    expect(newState[0]).not.toBe(initialValue)
    expect(newState[0].name).toEqual(initialValue.name)
    expect(newState[0].columnType).toEqual(ColumnTypeEnum.FILEHANDLEID)
    // facetType should not exist on new column model
    expect(Object.hasOwn(newState[0], 'facetType')).toBe(false)
  })

  test('changeColumnModelType - both have jsonSubColumns', () => {
    // JSON -> JSON (technically a no-op, no other column types support jsonSubColumns)
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'stringToLinkColumn',
        columnType: ColumnTypeEnum.JSON,
        jsonSubColumns: [
          {
            ...getDefaultJsonSubColumnFormData(),
            jsonPath: '$.x',
          },
        ],
      },
    ]
    const initialValue = prevState[0]
    const newState = reducer(prevState, {
      type: 'changeColumnModelType',
      columnModelIndex: 0,
      newColumnType: ColumnTypeEnum.JSON,
    })

    expect(newState).not.toBe(prevState)
    // The changed column model should be a different object
    expect(newState[0]).not.toBe(initialValue)
    expect(newState[0].name).toEqual(initialValue.name)
    expect(newState[0].columnType).toEqual(ColumnTypeEnum.JSON)
    // jsonSubColumns should not have changed
    expect(newState[0].jsonSubColumns).toEqual(initialValue.jsonSubColumns)
  })
  test('changeColumnModelType - new type does not allow jsonSubColumns', () => {
    // JSON -> STRING
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'stringToLinkColumn',
        columnType: ColumnTypeEnum.JSON,
        jsonSubColumns: [
          {
            ...getDefaultJsonSubColumnFormData(),
            jsonPath: '$.x',
          },
        ],
      },
    ]
    const initialValue = prevState[0]
    const newState = reducer(prevState, {
      type: 'changeColumnModelType',
      columnModelIndex: 0,
      newColumnType: ColumnTypeEnum.STRING,
    })

    expect(newState).not.toBe(prevState)
    // The changed column model should be a different object
    expect(newState[0]).not.toBe(initialValue)
    expect(newState[0].name).toEqual(initialValue.name)
    expect(newState[0].columnType).toEqual(ColumnTypeEnum.STRING)
    // jsonSubColumns should not exist on new column model
    expect(Object.hasOwn(newState[0], 'jsonSubColumns')).toBe(false)
  })

  test('changeColumnModelType - update type for a jsonSubColumn', () => {
    // STRING -> INTEGER
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'stringToLinkColumn',
        columnType: ColumnTypeEnum.JSON,
        jsonSubColumns: [
          {
            ...getDefaultJsonSubColumnFormData(),
            columnType: ColumnTypeEnum.STRING,
            jsonPath: '$.x',
          },
        ],
      },
    ]
    const initialColumnModelObject = prevState[0]
    const initialJsonSubColumnObject = prevState[0].jsonSubColumns![0]
    const newState = reducer(prevState, {
      type: 'changeColumnModelType',
      columnModelIndex: 0,
      jsonSubColumnModelIndex: 0,
      newColumnType: ColumnTypeEnum.INTEGER,
    })

    expect(newState).not.toBe(prevState)
    // The column model and array of jsonSubColumns should not have changed
    expect(newState[0]).toBe(initialColumnModelObject)
    expect(newState[0].jsonSubColumns).toBe(
      initialColumnModelObject.jsonSubColumns,
    )
    expect(newState[0].jsonSubColumns![0]).not.toBe(initialJsonSubColumnObject)
    expect(newState[0].jsonSubColumns![0].name).toEqual(
      initialColumnModelObject.jsonSubColumns![0].name,
    )
    expect(newState[0].jsonSubColumns![0].columnType).toEqual(
      ColumnTypeEnum.INTEGER,
    )
    expect(newState[0].jsonSubColumns![0].jsonPath).toEqual(
      initialColumnModelObject.jsonSubColumns![0].jsonPath,
    )
  })

  test('move - ColumnModel', () => {
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'col1',
        isSelected: false,
      },
      {
        ...getDefaultColumnModelFormData(),
        name: 'col2',
        isSelected: false,
      },
      {
        ...getDefaultColumnModelFormData(),
        name: 'col3',
        isSelected: false,
      },
    ]

    const column1 = prevState[0]
    const column2 = prevState[1]
    const column3 = prevState[2]

    const newState = reducer(prevState, {
      type: 'move',
      from: {
        columnModelIndex: 2,
      },
      to: {
        columnModelIndex: 0,
      },
    })

    expect(newState).not.toBe(prevState)
    // Verify the order changed
    expect(newState[0].name).toBe('col3')
    expect(newState[1].name).toBe('col1')
    expect(newState[2].name).toBe('col2')
    // Verify that the objects did not change
    expect(newState[0]).toBe(column3)
    expect(newState[1]).toBe(column1)
    expect(newState[2]).toBe(column2)
  })

  test('move - jsonSubColumn', () => {
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'col1',
        jsonSubColumns: [
          {
            ...getDefaultJsonSubColumnFormData(),
            name: 'subColumn1',
            isSelected: false,
            jsonPath: '$.x',
          },
          {
            ...getDefaultJsonSubColumnFormData(),
            name: 'subColumn2',
            isSelected: false,
            jsonPath: '$.y',
          },
          {
            ...getDefaultJsonSubColumnFormData(),
            name: 'subColumn3',
            isSelected: false,
            jsonPath: '$.z',
          },
        ],
        isSelected: false,
      },
    ]

    const originalSubColumnArray = prevState[0].jsonSubColumns!
    const subColumn1 = prevState[0].jsonSubColumns![0]
    const subColumn2 = prevState[0].jsonSubColumns![1]
    const subColumn3 = prevState[0].jsonSubColumns![2]

    const newState = reducer(prevState, {
      type: 'move',
      from: {
        columnModelIndex: 0,
        jsonSubColumnModelIndex: 2,
      },
      to: {
        columnModelIndex: 0,
        jsonSubColumnModelIndex: 0,
      },
    })

    // The top level array should be a new array
    expect(newState).not.toBe(prevState)
    // The jsonSubColumns array should be a new array to trigger a re-render
    expect(newState[0].jsonSubColumns).not.toBe(originalSubColumnArray)
    // Verify the order changed
    expect(newState[0].jsonSubColumns![0].name).toBe('subColumn3')
    expect(newState[0].jsonSubColumns![1].name).toBe('subColumn1')
    expect(newState[0].jsonSubColumns![2].name).toBe('subColumn2')
    // Verify that the reordered objects did not change
    expect(newState[0].jsonSubColumns![0]).toBe(subColumn3)
    expect(newState[0].jsonSubColumns![1]).toBe(subColumn1)
    expect(newState[0].jsonSubColumns![2]).toBe(subColumn2)
  })

  test('moveUp - one item', () => {
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'col1',
        isSelected: false,
      },
      {
        ...getDefaultColumnModelFormData(),
        name: 'col2',
        isSelected: true,
      },
    ]
    let newState = reducer(prevState, {
      type: 'moveUp',
    })

    expect(newState).not.toBe(prevState)
    // Verify the order changed
    expect(newState[0].name).toBe('col2')
    expect(newState[1].name).toBe('col1')
    // Verify that the objects did not change
    expect(newState[0]).toBe(prevState[1])
    expect(newState[1]).toBe(prevState[0])

    // Move up once more
    newState = reducer(prevState, {
      type: 'moveUp',
    })

    // Verify that it was a no-op since the selected column is already at the top.
    expect(newState[0].name).toBe('col2')
    expect(newState[1].name).toBe('col1')
  })
  test('moveUp - two items', () => {
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'col1',
        isSelected: false,
      },
      {
        ...getDefaultColumnModelFormData(),
        name: 'col2',
        isSelected: true,
      },
      {
        ...getDefaultColumnModelFormData(),
        name: 'col3',
        isSelected: true,
      },
    ]
    const newState = reducer(prevState, {
      type: 'moveUp',
    })

    expect(newState).not.toBe(prevState)
    // Verify the order changed - col1 should be moved to the bottom since both 2 and 3 were moved up
    expect(newState[0].name).toBe('col2')
    expect(newState[1].name).toBe('col3')
    expect(newState[2].name).toBe('col1')
    // Verify that the objects did not change
    expect(newState[0]).toBe(prevState[1])
    expect(newState[1]).toBe(prevState[2])
    expect(newState[2]).toBe(prevState[0])
  })
  test('moveUp - jsonSubColumn', () => {
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'col1',
        columnType: ColumnTypeEnum.JSON,
        isSelected: false,

        jsonSubColumns: [
          {
            ...getDefaultJsonSubColumnFormData(),
            name: 'subColumn1',
            isSelected: false,
          },
          {
            ...getDefaultJsonSubColumnFormData(),
            name: 'subColumn2',
            isSelected: true,
          },
        ],
      },
    ]
    const jsonSubColumn1 = prevState[0].jsonSubColumns![0]
    const jsonSubColumn2 = prevState[0].jsonSubColumns![1]
    const newState = reducer(prevState, {
      type: 'moveUp',
    })

    expect(newState).not.toBe(prevState)
    // Verify the order changed
    expect(newState[0].jsonSubColumns![0].name).toBe('subColumn2')
    expect(newState[0].jsonSubColumns![1].name).toBe('subColumn1')
    // Verify that the objects did not change
    expect(newState[0].jsonSubColumns![0]).toBe(jsonSubColumn2)
    expect(newState[0].jsonSubColumns![1]).toBe(jsonSubColumn1)
  })

  test('moveDown - one item', () => {
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'col1',
        isSelected: true,
      },
      {
        ...getDefaultColumnModelFormData(),
        name: 'col2',
        isSelected: false,
      },
    ]
    let newState = reducer(prevState, {
      type: 'moveDown',
    })

    expect(newState).not.toBe(prevState)
    // Verify the order changed
    expect(newState[0].name).toBe('col2')
    expect(newState[1].name).toBe('col1')
    // Verify that the objects did not change
    expect(newState[0]).toBe(prevState[1])
    expect(newState[1]).toBe(prevState[0])

    // Move down once more
    newState = reducer(prevState, {
      type: 'moveDown',
    })

    // Verify that it was a no-op since the selected column is already at the bottom.
    expect(newState[0].name).toBe('col2')
    expect(newState[1].name).toBe('col1')
  })
  test('moveDown - two items', () => {
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'col1',
        isSelected: true,
      },
      {
        ...getDefaultColumnModelFormData(),
        name: 'col2',
        isSelected: true,
      },
      {
        ...getDefaultColumnModelFormData(),
        name: 'col3',
        isSelected: false,
      },
    ]
    const newState = reducer(prevState, {
      type: 'moveDown',
    })

    expect(newState).not.toBe(prevState)
    // Verify the order changed - col3 should be moved to the top since both 1 and 2 were moved down
    expect(newState[0].name).toBe('col3')
    expect(newState[1].name).toBe('col1')
    expect(newState[2].name).toBe('col2')
    // Verify that the objects did not change
    expect(newState[0]).toBe(prevState[2])
    expect(newState[1]).toBe(prevState[0])
    expect(newState[2]).toBe(prevState[1])
  })
  test('moveDown - jsonSubColumn', () => {
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'col1',
        columnType: ColumnTypeEnum.JSON,
        isSelected: false,

        jsonSubColumns: [
          {
            ...getDefaultJsonSubColumnFormData(),
            name: 'subColumn1',
            isSelected: true,
          },
          {
            ...getDefaultJsonSubColumnFormData(),
            name: 'subColumn2',
            isSelected: false,
          },
        ],
      },
    ]
    const jsonSubColumn1 = prevState[0].jsonSubColumns![0]
    const jsonSubColumn2 = prevState[0].jsonSubColumns![1]
    const newState = reducer(prevState, {
      type: 'moveDown',
    })

    expect(newState).not.toBe(prevState)
    // Verify the order changed
    expect(newState[0].jsonSubColumns![0].name).toBe('subColumn2')
    expect(newState[0].jsonSubColumns![1].name).toBe('subColumn1')
    // Verify that the objects did not change
    expect(newState[0].jsonSubColumns![0]).toBe(jsonSubColumn2)
    expect(newState[0].jsonSubColumns![1]).toBe(jsonSubColumn1)
  })

  test('delete - columnModel', () => {
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'col1',
        isSelected: true,
      },
      {
        ...getDefaultColumnModelFormData(),
        name: 'col2',
        isSelected: false,
      },
    ]
    let newState = reducer(prevState, {
      type: 'delete',
    })

    expect(newState).not.toBe(prevState)
    expect(newState.length).toBe(1)
    expect(newState[0]).toBe(prevState[1])
  })

  test('delete - jsonSubColumn', () => {
    const prevState: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'col1',
        columnType: ColumnTypeEnum.JSON,
        isSelected: false,
        jsonSubColumns: [
          {
            ...getDefaultJsonSubColumnFormData(),
            name: 'subColumn1',
            isSelected: true,
          },
          {
            ...getDefaultJsonSubColumnFormData(),
            name: 'subColumn2',
            isSelected: false,
          },
        ],
      },
    ]
    const jsonSubColumn2 = prevState[0].jsonSubColumns![1]
    const newState = reducer(prevState, {
      type: 'delete',
    })

    expect(newState).not.toBe(prevState)
    expect(newState.length).toBe(1)
    expect(newState[0].jsonSubColumns!.length).toBe(1)
    expect(newState[0].jsonSubColumns![0]).toBe(jsonSubColumn2)
  })

  test('getNumberOfSelectedItems', () => {
    const state: ColumnModelFormData[] = [
      {
        ...getDefaultColumnModelFormData(),
        name: 'col1',
        columnType: ColumnTypeEnum.JSON,
        isSelected: true,
        jsonSubColumns: [
          {
            ...getDefaultJsonSubColumnFormData(),
            name: 'subColumn1',
            isSelected: true,
          },
          {
            ...getDefaultJsonSubColumnFormData(),
            name: 'subColumn2',
            isSelected: false,
          },
        ],
      },
    ]

    expect(getNumberOfSelectedItems(state)).toBe(2)
  })
})
