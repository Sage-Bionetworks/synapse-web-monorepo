import { JsonSchemaVersionInfo } from '@sage-bionetworks/synapse-client'
import {
  FORM_TEMPLATE_SCHEMA_ORGANIZATION,
  getNextSchemaVersion,
  resolveFormTemplateSchemaName,
} from './formTemplateSchema'

describe('resolveFormTemplateSchemaName', () => {
  it.each([
    ['Data Use Request', 'DataUseRequest'],
    ['data-use request (v2)', 'DataUseRequestV2'],
    ['2024 renewal', 'FormTemplate2024Renewal'],
    ['', 'FormTemplate'],
    ['!!!', 'FormTemplate'],
  ])(
    'derives a valid schema name for a new template named %j',
    (name, schemaName) => {
      expect(resolveFormTemplateSchemaName(name)).toEqual({
        organizationName: FORM_TEMPLATE_SCHEMA_ORGANIZATION,
        schemaName,
      })
    },
  )

  it('keeps the organization and name of the schema an existing template references, regardless of its name', () => {
    expect(
      resolveFormTemplateSchemaName(
        'Renamed Template',
        'org.example-OriginalName-3.0.0',
      ),
    ).toEqual({
      organizationName: 'org.example',
      schemaName: 'OriginalName',
    })
  })
})

describe('getNextSchemaVersion', () => {
  function version(semanticVersion?: string): JsonSchemaVersionInfo {
    return { semanticVersion }
  }

  it('starts a schema with no registered versions at 1.0.0', () => {
    expect(getNextSchemaVersion([])).toBe('1.0.0')
  })

  it('bumps the highest major version, regardless of list order or minor/patch versions', () => {
    expect(
      getNextSchemaVersion([
        version('2.3.1'),
        version('10.0.0'),
        version('9.9.9'),
      ]),
    ).toBe('11.0.0')
  })

  it('ignores versions registered without a semantic version', () => {
    expect(getNextSchemaVersion([version(undefined), version('1.0.0')])).toBe(
      '2.0.0',
    )
  })
})
