import { formatSynapseSql } from './formatSynapseSql'

describe('formatSynapseSql', () => {
  it('puts each clause and condition of combined SQL on its own indented line', () => {
    // combinedSql returned by Synapse for nested Query Builder groups.
    const combinedSql = `SELECT id, name FROM syn11346063 WHERE ( "resourceType" = 'experimentalData' ) AND ( ( ( "organ" IN ( 'blood', 'brain' ) ) AND ( "species" HAS ( 'Human', 'Mouse' ) ) AND NOT ( ( "cohort" IS NOT NULL ) OR ( "consortium" LIKE '%AMP%' ) ) ) )`

    expect(formatSynapseSql(combinedSql)).toBe(
      [
        'SELECT',
        '  id,',
        '  name',
        'FROM',
        '  syn11346063',
        'WHERE',
        `  ("resourceType" = 'experimentalData')`,
        '  AND (',
        '    (',
        `      ("organ" IN ('blood', 'brain'))`,
        `      AND ("species" HAS ('Human', 'Mouse'))`,
        '      AND NOT (',
        '        ("cohort" IS NOT NULL)',
        `        OR ("consortium" LIKE '%AMP%')`,
        '      )',
        '    )',
        '  )',
      ].join('\n'),
    )
  })

  it('keeps a versioned table ID as one identifier', () => {
    expect(formatSynapseSql('SELECT * FROM syn11346063.89')).toBe(
      ['SELECT', '  *', 'FROM', '  syn11346063.89'].join('\n'),
    )
  })

  it('leaves string literals untouched, including parentheses, keywords and escaped quotes', () => {
    expect(
      formatSynapseSql(`SELECT * FROM syn1 WHERE ( "a" = 'it''s (x) AND y' )`),
    ).toBe(
      [
        'SELECT',
        '  *',
        'FROM',
        '  syn1',
        'WHERE',
        `  ("a" = 'it''s (x) AND y')`,
      ].join('\n'),
    )
  })

  it('returns SQL it cannot parse unchanged', () => {
    const unbalancedSql = `SELECT * FROM syn1 WHERE ( "a" = 'x'`

    expect(formatSynapseSql(unbalancedSql)).toBe(unbalancedSql)
  })
})
