import { JsonSchemaVersionInfo } from '@sage-bionetworks/synapse-client'
import {
  FORM_TEMPLATE_SCHEMA_ORGANIZATION,
  getFormTemplateSchemaLineage,
  getNextSchemaVersion,
} from './formTemplateSchema'

describe('getFormTemplateSchemaLineage', () => {
  it.each([
    ['Data Use Request', 'DataUseRequest'],
    ['data-use request (v2)', 'DataUseRequestV2'],
    ['2024 renewal', 'FormTemplate2024Renewal'],
    ['', 'FormTemplate'],
    ['!!!', 'FormTemplate'],
  ])(
    'derives a valid schema name for a new template named %j',
    (name, schemaName) => {
      expect(getFormTemplateSchemaLineage(name)).toEqual({
        organizationName: FORM_TEMPLATE_SCHEMA_ORGANIZATION,
        schemaName,
      })
    },
  )

  it('keeps the lineage of the schema an existing template references, regardless of its name', () => {
    expect(
      getFormTemplateSchemaLineage(
        'Renamed Template',
        'org.sagebionetworks.act-OriginalName-3.0.0',
      ),
    ).toEqual({
      organizationName: 'org.sagebionetworks.act',
      schemaName: 'OriginalName',
    })
  })
})

describe('getNextSchemaVersion', () => {
  function version(semanticVersion?: string): JsonSchemaVersionInfo {
    return { semanticVersion }
  }

  it('starts a lineage with no versions at 1.0.0', () => {
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
