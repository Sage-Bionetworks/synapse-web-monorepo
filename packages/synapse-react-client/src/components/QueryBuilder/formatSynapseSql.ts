import { DialectOptions, formatDialect, sql } from 'sql-formatter'

// ANSI SQL, plus Synapse's versioned table IDs (`syn123.4`), which the ANSI
// tokenizer would split into `syn123 .4`, so they're matched as one identifier.
const synapseSqlDialect: DialectOptions = {
  ...sql,
  name: 'synapse',
  tokenizerOptions: {
    ...sql.tokenizerOptions,
    identTypes: [
      { regex: '[sS][yY][nN]\\d+\\.\\d+' },
      ...sql.tokenizerOptions.identTypes,
    ],
  },
}

/**
 * Formats Synapse SQL with one clause per line and one indented line per condition.
 * Returns the SQL unchanged when it can't be parsed.
 */
export function formatSynapseSql(synapseSql: string): string {
  try {
    return formatDialect(synapseSql, {
      dialect: synapseSqlDialect,
      tabWidth: 2,
    })
  } catch {
    return synapseSql
  }
}
