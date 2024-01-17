import React from 'react'
import { Box, Link, TextField, Typography } from '@mui/material'
import { TextFieldProps } from '@mui/material/TextField'
import { EntityType } from '@sage-bionetworks/synapse-types'

const MATERIALIZED_VIEW_HELP = (
  <Box mb={2.5}>
    <Typography variant={'body1'} color={'grey.700'} mb={1.25}>
      If you store normalized data in Synapse tables, views, or datasets, you
      can combine separate data sources using Materialized Views. A materialized
      view is a type of Synapse table that is defined using a Synapse SQL
      statement, which can contain SQL keywords such as JOIN and UNION to
      combine existing Synapse tables.
    </Typography>
    <Link
      href={
        'https://help.synapse.org/docs/Combining-Data-from-Multiple-Table-Sources.2973270158.html'
      }
      target="_blank"
      onClick={e => {
        e.stopPropagation()
      }}
    >
      More about Materialized Views
    </Link>
  </Box>
)

const VIRTUAL_TABLE_HELP = (
  <Box mb={2.5}>
    <Typography variant={'body1'} color={'grey.700'} mb={1.25}>
      A Synapse Virtual Table is a type of table that is defined by a Synapse
      SQL query. Any query on a Virtual Table will execute the defining SQL
      statement on the referenced table. The defining SQL of a Virtual Table
      cannot include JOIN clauses on multiple tables.
    </Typography>
  </Box>
)

export type SqlDefinedTableEditorProps = TextFieldProps & {
  /* Optional entity type for showing help documentation */
  entityType?: EntityType
}

/**
 * Component used to edit the SQL of a Synapse entity defined by SQL, such as a MaterializedView or VirtualTable
 * @param props
 * @constructor
 */
export default function SqlDefinedTableEditor(
  props: SqlDefinedTableEditorProps,
) {
  const { entityType, ...textFieldProps } = props
  return (
    <>
      {entityType === EntityType.MATERIALIZED_VIEW && MATERIALIZED_VIEW_HELP}
      {entityType === EntityType.VIRTUAL_TABLE && VIRTUAL_TABLE_HELP}
      <TextField
        label={'Defining SQL'}
        placeholder={'SELECT * FROM syn123'}
        fullWidth
        multiline
        required
        minRows={6}
        {...textFieldProps}
      />
    </>
  )
}
