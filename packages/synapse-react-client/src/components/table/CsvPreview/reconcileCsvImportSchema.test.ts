import { SchemaPropertiesMap } from '@/utils/jsonschema/getSchemaPropertyInfo'
import { ColumnModel, ColumnType } from '@sage-bionetworks/synapse-client'
import { reconcileCsvImportSchema } from './reconcileCsvImportSchema'

describe('reconcileCsvImportSchema', () => {
  it('restores STRING for a column the grid schema already types as a string, even when the CSV preview suggests ENTITYID', () => {
    const schemaPropertiesInfo: SchemaPropertiesMap = {
      requiredStringColumn: {
        type: { type: 'string', isArray: false },
        isRequired: false,
        enumeratedValues: null,
      },
    }
    const suggestedColumns: ColumnModel[] = [
      { name: 'requiredStringColumn', columnType: ColumnType.ENTITYID },
    ]

    expect(
      reconcileCsvImportSchema(suggestedColumns, schemaPropertiesInfo, []),
    ).toEqual([{ name: 'requiredStringColumn', columnType: ColumnType.STRING }])
  })

  it('restores STRING for a column already in the grid but absent from the custom schema (e.g. a RecordSet system column like entityId)', () => {
    const suggestedColumns: ColumnModel[] = [
      { name: 'entityId', columnType: ColumnType.ENTITYID },
    ]

    expect(
      reconcileCsvImportSchema(suggestedColumns, {}, [
        'id',
        'entityId',
        'path',
      ]),
    ).toEqual([{ name: 'entityId', columnType: ColumnType.STRING }])
  })

  it('leaves the suggested type alone for a brand-new column not in the schema or the existing grid', () => {
    const suggestedColumns: ColumnModel[] = [
      { name: 'newColumn', columnType: ColumnType.ENTITYID },
    ]

    expect(reconcileCsvImportSchema(suggestedColumns, {}, [])).toEqual(
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
      reconcileCsvImportSchema(suggestedColumns, schemaPropertiesInfo, [
        'count',
      ]),
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
      reconcileCsvImportSchema(suggestedColumns, schemaPropertiesInfo, [
        'recordedOn',
      ]),
    ).toEqual(suggestedColumns)
  })

  it('does not change a column that is already suggested as STRING', () => {
    const suggestedColumns: ColumnModel[] = [
      { name: 'entityId', columnType: ColumnType.STRING },
    ]

    expect(
      reconcileCsvImportSchema(suggestedColumns, {}, ['entityId']),
    ).toEqual(suggestedColumns)
  })

  it('prefers the schema-declared type over grid-existence when both are known', () => {
    const schemaPropertiesInfo: SchemaPropertiesMap = {
      requiredBooleanColumn: {
        type: { type: 'boolean', isArray: false },
        isRequired: true,
        enumeratedValues: [true, false],
      },
    }
    const suggestedColumns: ColumnModel[] = [
      { name: 'requiredBooleanColumn', columnType: ColumnType.STRING },
    ]

    expect(
      reconcileCsvImportSchema(suggestedColumns, schemaPropertiesInfo, [
        'requiredBooleanColumn',
      ]),
    ).toEqual(suggestedColumns)
  })

  it('restores the exact existing ColumnType for a column of an existing table, even for non-string types', () => {
    const suggestedColumns: ColumnModel[] = [
      { name: 'amount', columnType: ColumnType.STRING },
    ]

    expect(
      reconcileCsvImportSchema(suggestedColumns, {}, [], {
        amount: ColumnType.INTEGER,
      }),
    ).toEqual([{ name: 'amount', columnType: ColumnType.INTEGER }])
  })

  it('prefers an exact existing ColumnType over the schema/grid-existence heuristics', () => {
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
      reconcileCsvImportSchema(suggestedColumns, schemaPropertiesInfo, [], {
        entityId: ColumnType.ENTITYID,
      }),
    ).toEqual([{ name: 'entityId', columnType: ColumnType.ENTITYID }])
  })

  it('does not change a column whose suggested type already matches the exact existing ColumnType', () => {
    const suggestedColumns: ColumnModel[] = [
      { name: 'entityId', columnType: ColumnType.ENTITYID },
    ]

    expect(
      reconcileCsvImportSchema(suggestedColumns, {}, [], {
        entityId: ColumnType.ENTITYID,
      }),
    ).toEqual(suggestedColumns)
  })
})
