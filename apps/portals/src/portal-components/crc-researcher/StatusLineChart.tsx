import React, { FunctionComponent, useEffect, useState } from 'react'
import Plotly from 'plotly.js-basic-dist'
import createPlotlyComponent from 'react-plotly.js/factory'
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

export type StatusLineChartProps = {
  token?: string
  style?: React.CSSProperties
}

type PlotData = {
  collected: GraphItem[]
  invited: GraphItem[]
  apptScheduled: GraphItem[]
  apptMade: GraphItem[]
}

const layoutConfig: PlotParams['layout'] = {
  showlegend: true,
  yaxis: {
    title: {
      text: 'Number of participants ',
    },
  },

  xaxis: {
    title: {
      text: 'Date',
    },
    autorange: true,
    type: 'date',
  },
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

function getChartDataPoints(data: PlotData) {
  const collectedData: Plotly.Data = {
    x: data.collected.map((val) => new Date(Number(val.x))),
    y: data.collected.map((val) => val.y),
    name: 'New uncategorized participants',
    type: 'scatter',
    hovertemplate: `%{x|%x} (%{y})`,
    marker: {
      color: '#000',
      size: 12,
      symbol: 'triangle-up',
    },
    line: {
      dash: 'dash',
      width: 1,
      color: '#000',
    },
  }

  const invitedData: Plotly.Data = {
    x: data.invited.map((val) => new Date(Number(val.x))),
    y: data.invited.map((val) => val.y),
    name: 'Invitations sent',
    type: 'scatter',
    hovertemplate: `%{x|%x} (%{y})`,
    marker: {
      color: '#000',
      size: 12,
      symbol: 'square',
    },
    line: {
      dash: 'solid',
      width: 1,
      color: '#000',
    },
  }

  const aptScheduledData: Plotly.Data = {
    x: data.apptScheduled.map((val) => new Date(Number(val.x))),
    y: data.apptScheduled.map((val) => val.y),
    name: 'Labs scheduled',
    type: 'scatter',
    hovertemplate: `%{x|%x} (%{y})`,
    line: {
      dash: 'dot',
      width: 1,
      color: '#000',
    },
    marker: {
      color: '#000',
      size: 12,
      symbol: 'circle',
    },
  }
  const apptMadeData: Plotly.Data = {
    x: data.apptMade.map((val) => new Date(val.x)),
    y: data.apptMade.map((val) => val.y),
    name: 'Samples Collected/Appointments Made ',
    type: 'scatter',
    hovertemplate: `%{x|%x} (%{y})`,

    line: {
      dash: 'solid',
      width: 1,
      color: '#000',
    },
    marker: {
      color: '#000',
      size: 12,
      symbol: 'star',
    },
  }

  const data2 = [collectedData, invitedData, aptScheduledData, apptMadeData]
  return data2
}

export function fetchData(
  token: string,
  sql: string,
  entityId: string,
): Promise<RowSet> {
  const queryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    entityId: entityId,
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

const DEFAULT_STATUSLINECHART_STYLE: React.CSSProperties = { width: '100%' }

const StatusLineChart: FunctionComponent<StatusLineChartProps> = ({
  token,
  style = DEFAULT_STATUSLINECHART_STYLE,
}: StatusLineChartProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [plotData, setPlotData] = useState<PlotData | null>(null)

  const samplesCollectedSql =
    "SELECT uploadDate as \"x\", count(distinct(recordId)) as \"y\" FROM syn22154087 WHERE uploadDate IS NOT NULL AND dataGroups NOT HAS ('test_user') AND uploadDate > 1595808000000 AND testLocation IN ('lab', 'home', 'noTest') GROUP BY uploadDate ORDER BY uploadDate"
  const inviteSentSql =
    "SELECT inviteSentOn as \"x\", count(distinct(recordId)) as \"y\" FROM syn22154087 WHERE inviteSentOn IS NOT NULL AND dataGroups NOT HAS ('test_user') AND uploadDate > 1595808000000 AND testLocation IN ('lab', 'home', 'noTest') GROUP BY inviteSentOn ORDER BY inviteSentOn"
  const appointmentScheduledSql =
    'SELECT scheduledLabDrawOn as "x", count(distinct(recordId)) as "y" FROM syn22154087 WHERE scheduledLabDrawOn IS NOT NULL AND dataGroups NOT HAS (\'test_user\') AND uploadDate > 1595808000000 GROUP BY scheduledLabDrawOn ORDER BY scheduledLabDrawOn'

  // NOTE: dataGroups is a String column in syn22028237 (rather than a multi-value StringList type column), so we're using a LIKE clause in this one to filter out test users instead of HAS.
  const appointmentMadeSql =
    'SELECT uploadDate as "x", count(distinct(recordId)) as "y" FROM syn22028237 where `metadata.type` =  \'appointment\' AND uploadDate IS NOT NULL AND dataGroups NOT LIKE \'%test_user%\' GROUP BY uploadDate'

  useEffect(() => {
    const collectedData = fetchData(token!, samplesCollectedSql, 'syn22154087')
    const invitedData = fetchData(token!, inviteSentSql, 'syn22154087')
    const apptScheduledData = fetchData(
      token!,
      appointmentScheduledSql,
      'syn22154087',
    )
    const apptMadeData = fetchData(token!, appointmentMadeSql, 'syn22028237')
    Promise.all([collectedData, invitedData, apptScheduledData, apptMadeData])
      .then((result) => {
        setPlotData({
          collected: SynapseUtilityFunctions.resultToJson(
            result[0].headers,
            result[0].rows,
          ),
          invited: SynapseUtilityFunctions.resultToJson(
            result[1].headers,
            result[1].rows,
          ),
          apptScheduled: SynapseUtilityFunctions.resultToJson(
            result[2].headers,
            result[2].rows,
          ),
          apptMade: SynapseUtilityFunctions.resultToJson(
            result[3].headers,
            result[3].rows,
          ),
        })
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

      {isLoaded && plotData && token && (
        <div style={style}>
          <Plot
            layout={layoutConfig}
            style={{ width: '100%' }}
            config={optionsConfig}
            data={getChartDataPoints(plotData) as PlotParams['data']}
          />
        </div>
      )}
    </>
  )
}

export default StatusLineChart
