import React from 'react'
import QueryWrapperPlotNav from '../../QueryWrapperPlotNav/QueryWrapperPlotNav'
import StandaloneQueryWrapper from '../../StandaloneQueryWrapper/StandaloneQueryWrapper'

export type MarkdownSynapseTableProps = {
  query: string
  showquery: string
  tableonly: string
}

export default function MarkdownSynapseTable(props: MarkdownSynapseTableProps) {
  const { query, showquery, tableonly } = props
  const showQuery = showquery === 'true'
  const tableOnly = tableonly === 'true'
  const name = 'Items'
  if (tableOnly) {
    return <StandaloneQueryWrapper sql={query} name={name} />
  }

  return (
    <QueryWrapperPlotNav
      sql={query}
      hideSqlEditorControl={!showQuery}
      name={name}
      defaultShowPlots={false}
      tableConfiguration={{}}
    />
  )
}
