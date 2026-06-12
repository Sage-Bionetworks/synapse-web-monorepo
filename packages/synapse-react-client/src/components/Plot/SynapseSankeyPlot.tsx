import React, { lazy, Suspense } from 'react'
import { useGetFullTableQueryResults } from '@/synapse-queries'
import { SynapseConstants } from '@/utils'
import { parseEntityIdFromSqlStatement } from '@/utils/functions/SqlFunctions'
import { Skeleton } from '@mui/material'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import type { Data, Layout, SankeyData } from 'plotly.js'
import { PlotParams } from 'react-plotly.js'
import createPlotlyComponent from './safe-react-plotly-factory'

// Lazy-load the full plotly.js bundle (not the basic dist) since Sankey is not
// included in plotly.js-basic-dist.
const safeESModule = <T,>(a: T | { default: T }): T => {
  const b = a as any
  return b.__esModule || b[Symbol.toStringTag] === 'Module' ? b.default : b
}

const LazyLoadedSankeyPlot = lazy(async () => {
  const Plotly = await import('plotly.js')
  const plotly = safeESModule(Plotly)
  return { default: createPlotlyComponent(plotly) }
})

function SankeyPlot(props: PlotParams) {
  return (
    <Suspense>
      <LazyLoadedSankeyPlot {...props} />
    </Suspense>
  )
}

export type SynapseSankeyPlotProps = {
  /** SQL query whose first column provides node labels and second column provides link values */
  sql: string
  /** Label for the root node that links to every row returned by the query */
  rootLabel: string
  /** Optional plot title */
  title?: string
}

export const SynapseSankeyPlot = (
  props: SynapseSankeyPlotProps,
): React.ReactNode => {
  const { sql, rootLabel, title } = props

  const queryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    entityId: parseEntityIdFromSqlStatement(sql),
    query: {
      sql,
    },
  }

  const { data: queryData, isLoading } =
    useGetFullTableQueryResults(queryRequest)

  if (isLoading) {
    return <Skeleton width={'100%'} height={'500px'} />
  }
  if (!queryData) {
    return <></>
  }

  const rows = queryData.queryResult?.queryResults.rows ?? []
  if (rows.length === 0) {
    return <></>
  }

  // Build Sankey nodes and links.
  // Node 0: rootLabel (the shared source node)
  // Nodes 1..N: the label from column 0 of each query row (target nodes)
  const sources: number[] = []
  const targets: number[] = []
  const values: number[] = []

  rows.forEach((row, index) => {
    values.push(Number(row.values[1] ?? 0))
    sources.push(0)
    targets.push(index + 1)
  })

  const total = values.reduce((sum, v) => sum + v, 0)

  // Plotly Sankey processes <br> via convertToTspans(), rendering the count on a second line.
  const nodeLabels: string[] = [`${rootLabel}<br>n=${total}`]
  rows.forEach(row => {
    const label = row.values[0] ?? ''
    const value = Number(row.values[1] ?? 0)
    nodeLabels.push(`${label}<br>n=${value}`)
  })

  const sankeyData: Partial<SankeyData>[] = [
    {
      type: 'sankey',
      node: {
        label: nodeLabels,
      },
      link: {
        source: sources,
        target: targets,
        value: values,
      },
    },
  ]

  const layout: Partial<Layout> = {
    title,
  }

  return (
    <SankeyPlot
      style={{ width: '100%', height: '450px' }}
      layout={layout}
      data={sankeyData as Data[]}
      config={{ displayModeBar: false }}
    />
  )
}

export default SynapseSankeyPlot
