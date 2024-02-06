import React, { FunctionComponent, useEffect, useState } from 'react'
import Plotly from 'plotly.js-basic-dist'
import createPlotlyComponent from 'react-plotly.js/factory'
import _ from 'lodash-es'
import {
  GraphItem,
  SynapseClient,
  SynapseConstants,
  SynapseUtilityFunctions,
} from 'synapse-react-client'
import {
  QueryBundleRequest,
  QueryResultBundle,
  RowSet,
} from '@sage-bionetworks/synapse-types'
import { PlotParams } from 'react-plotly.js'

const Plot = createPlotlyComponent(Plotly)

export type ParticipantsBarPlotProps = {
  token?: string
  style?: React.CSSProperties
}

const barLayoutConfig: Partial<Plotly.Layout> = {
  barmode: 'stack',
  showlegend: false,
  dragmode: false,
  hovermode: 'closest',
  margin: {
    l: 200,
    r: 50,
    b: 50,
    t: 50,
    pad: 15,
  },
}

const optionsConfig: PlotParams['config'] = {
  responsive: true,
  scrollZoom: false,
  editable: false,
  autosizable: true,
  displayModeBar: false,
}

function getTraceItem(
  x: string[],
  y: number[],
  name: string,
  tooltips: string[],
  color: string,
): any {
  return {
    // flip x and y since we are showing a horizontal bar chart
    x: y,
    y: x,
    name: name,
    orientation: 'h',
    marker: {
      color: color,
      width: 1,
    },
    text: tooltips,
    type: 'bar',
    hovertemplate: `%{y} %{text}<extra></extra>`,
  }
}

function getTotalSurveysReceived(data: any[]): number {
  let totalCount: number = 0
  data.forEach((row, i) => {
    totalCount += parseInt(row['count'])
  })
  return totalCount
}
function getBarPlotDataPoints(data: any[]): any[] {
  const totalCount: number = getTotalSurveysReceived(data)

  const invitedRows = data.filter((item) => item['x'] === 'Invited')
  const scheduledRows = data.filter((item) => item['x'] === 'Scheduled')
  const testedRows = data.filter((item) => item['x'] === 'Tested')

  const result: any[] = []
  const defaultColors = [`black`, `#C4C4C4`]

  let invitedCount = 0
  let scheduledCount = 0
  let testedCount = 0

  if (testedRows.length > 0) {
    testedCount = parseInt(testedRows[0].count)
  }

  // note that if a participant was tested, then they were scheduled, and invited before
  if (scheduledRows.length > 0) {
    scheduledCount = parseInt(scheduledRows[0].count) + testedCount
  }
  // note that if a participant was scheduled, then they were invited before
  if (invitedRows.length > 0) {
    invitedCount = parseInt(invitedRows[0].count) + scheduledCount + testedCount
  }

  const x: string[] = [
    'Samples collected',
    'Labs scheduled',
    'Invitations sent',
  ]
  const y1: number[] = [testedCount, scheduledCount, invitedCount]
  const y2: number[] = [
    scheduledCount - testedCount,
    invitedCount - scheduledCount,
    totalCount - invitedCount,
  ]
  const tooltips: string[] = [
    `${testedCount}/${scheduledCount}`,
    `${scheduledCount}/${invitedCount}`,
    `${invitedCount}/${totalCount}`,
  ]
  result.push(getTraceItem(x, y1, 'Current', tooltips, defaultColors[0]))
  result.push(getTraceItem(x, y2, 'Out of', tooltips, defaultColors[1]))
  return result
}

function getLayout(
  layoutConfig: Partial<Plotly.LayoutAxis>,
  totalNumberOfResults: number,
): Partial<Plotly.LayoutAxis> {
  const layout = _.cloneDeep(layoutConfig)
  ;(layout as any).xaxis = {
    visible: false,
  }
  layout.title = {
    text: `Total surveys received: ${totalNumberOfResults}`,
  }
  ;(layout as any).showlegend = false
  ;(layout as any).height = 240
  return layout
}

export function fetchData(token: string): Promise<RowSet> {
  const sql =
    "SELECT WorkflowState as \"x\", count(healthCode) as \"count\" FROM syn22154087 WHERE dataGroups NOT HAS ('test_user') AND testLocation IN ('lab', 'home', 'noTest') GROUP BY WorkflowState"

  const queryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    entityId: 'syn22154087',
    query: {
      sql: sql,
    },
  }

  return SynapseClient.getFullQueryTableResults(queryRequest, token).then(
    (data: QueryResultBundle) => {
      return data.queryResult!.queryResults
    },
  )
}

const DEFAULT_PARTICIPANTS_BAR_PLOT_STYLE: React.CSSProperties = {
  width: '100%',
  height: '100%',
  margin: '30px 10px',
}

const ParticipantsBarPlot: FunctionComponent<ParticipantsBarPlotProps> = ({
  token,
  style = DEFAULT_PARTICIPANTS_BAR_PLOT_STYLE,
}: ParticipantsBarPlotProps) => {
  // get plot data!
  const [isLoaded, setIsLoaded] = useState(false)
  const [barPlotQueryData, setBarPlotQueryData] = useState<GraphItem[]>([])
  useEffect(() => {
    const barPlotData = fetchData(token!)
    Promise.all([barPlotData])
      .then((result) => {
        setBarPlotQueryData(
          SynapseUtilityFunctions.resultToJson(
            result[0].headers,
            result[0].rows,
          ),
        )
        setIsLoaded(true)
      })
      .catch((err) => {
        throw err
      })
    return () => {}
  }, [token])

  return (
    <>
      {!isLoaded && token && (
        <div className="text-center">
          <span className="spinner" />
        </div>
      )}
      {isLoaded && barPlotQueryData && token && (
        <Plot
          style={style}
          layout={getLayout(
            barLayoutConfig,
            getTotalSurveysReceived(barPlotQueryData),
          )}
          config={optionsConfig}
          data={getBarPlotDataPoints(barPlotQueryData)}
        />
      )}
    </>
  )
}

export default ParticipantsBarPlot
