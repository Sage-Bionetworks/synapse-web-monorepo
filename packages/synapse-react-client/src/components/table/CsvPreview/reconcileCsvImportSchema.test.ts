import { SchemaPropertiesMap } from '@/utils/jsonschema/getSchemaPropertyInfo'
import { ColumnModel, ColumnType } from '@sage-bionetworks/synapse-client'
import { reconcileCsvImportSchema } from './reconcileCsvImportSchema'

describe('reconcileCsvImportSchema', () => {
  it('restores STRING for a column the grid schema already types as a string, even when the CSV preview suggests ENTITYID', () => {
    const schemaPropertiesInfo: SchemaPropertiesMap = {
      entityId: {
        type: { type: 'string', isArray: false },
        isRequired: false,
        enumeratedValues: null,
      },
    }
    const suggestedColumns: ColumnModel[] = [
      { name: 'entityId', columnType: ColumnType.ENTITYID },
    ]

    expect(
      reconcileCsvImportSchema(suggestedColumns, schemaPropertiesInfo),
    ).toEqual([{ name: 'entityId', columnType: ColumnType.STRING }])
  })

  it('leaves the suggested type alone for columns the grid schema does not already know about', () => {
    const suggestedColumns: ColumnModel[] = [
      { name: 'newColumn', columnType: ColumnType.ENTITYID },
    ]

    expect(reconcileCsvImportSchema(suggestedColumns, {})).toEqual(
      suggestedColumns,
    )
  })

  it('leaves non-string columns (e.g. numbers) unaffected', () => {
    const schemaPropertiesInfo: SchemaPropertiesMap = {
      count: {
        type: { type: 'integer', isArray: false },
        isRequired: false,
        enumeratedValues: null,
      },
    }
    const suggestedColumns: ColumnModel[] = [
      { name: 'count', columnType: ColumnType.DOUBLE },
    ]

    expect(
      reconcileCsvImportSchema(suggestedColumns, schemaPropertiesInfo),
    ).toEqual(suggestedColumns)
  })

  it('leaves a date-time formatted string property unaffected', () => {
    const schemaPropertiesInfo: SchemaPropertiesMap = {
      recordedOn: {
        type: { type: 'string', isArray: false, format: 'date-time' },
        isRequired: false,
        enumeratedValues: null,
      },
    }
    const suggestedColumns: ColumnModel[] = [
      { name: 'recordedOn', columnType: ColumnType.DATE },
    ]

    expect(
      reconcileCsvImportSchema(suggestedColumns, schemaPropertiesInfo),
    ).toEqual(suggestedColumns)
  })

  it('does not change a column that is already suggested as STRING', () => {
    const schemaPropertiesInfo: SchemaPropertiesMap = {
      entityId: {
        type: { type: 'string', isArray: false },
        isRequired: false,
        enumeratedValues: null,
      },
    }
    const suggestedColumns: ColumnModel[] = [
      { name: 'entityId', columnType: ColumnType.STRING },
    ]

    expect(
      reconcileCsvImportSchema(suggestedColumns, schemaPropertiesInfo),
    ).toEqual(suggestedColumns)
  })
})
