import React, { FunctionComponent, useEffect, useState } from 'react'
import Plotly from 'plotly.js-basic-dist'
import createPlotlyComponent from 'react-plotly.js/factory'
import { SynapseConstants, SynapseClient } from 'synapse-react-client'
import {
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { PlotParams } from 'react-plotly.js'

const Plot = createPlotlyComponent(Plotly)

export type SurveysCompletedPlotsProps = {
  token?: string
  style?: React.CSSProperties
}

type PlotData = {
  surveyCounts: number[]
  totalCount: number
}

const colors: string[] = ['#D099CA', '#7292C1', '#7472C1', '#72C1A5']
const baseLayoutConfig: PlotParams['layout'] = {
  showlegend: false,
  margin: {
    l: 25,
    r: 25,
    b: 25,
    t: 25,
    pad: 15,
  },
  height: 200,
  hovermode: false,
}

const optionsConfig: PlotParams['config'] = {
  responsive: true,
  scrollZoom: false,
  editable: false,
  autosizable: true,
  displayModeBar: false,
}
function getLayoutConfig(
  offset: number,
  plotData: PlotData,
): PlotParams['layout'] {
  const newLayoutConfig: PlotParams['layout'] = { ...baseLayoutConfig }

  newLayoutConfig.annotations = [
    {
      text: `${plotData.surveyCounts[offset]}/${
        plotData.totalCount
      } <br />completed <br />surveys ${offset + 1}`,
      showarrow: false,
    },
  ]
  return newLayoutConfig
}
function getChartDataPoints(
  offset: number,
  plotData: PlotData,
): PlotParams['data'] {
  const surveyData: Plotly.Data = {
    values: [
      plotData.surveyCounts[offset],
      plotData.totalCount - plotData.surveyCounts[offset],
    ],
    name: `Survey ${offset + 1} Completed`,
    hole: 0.6,
    type: 'pie',
    marker: {
      colors: [colors[offset], '#E9F1F5'],
    },
    textinfo: 'none',
  }

  const data = [surveyData]
  return data as PlotParams['data']
}

export function fetchData(
  token: string,
  sql: string,
  entityId: string,
): Promise<number> {
  const queryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    entityId: entityId,
    query: {
      sql: sql,
    },
  }
  return SynapseClient.getQueryTableResults(queryRequest, token).then(
    (data: QueryResultBundle) => {
      return parseInt(
        data.queryResult!.queryResults.rows[0].values[0] as string,
      )
    },
  )
}

const DEFAULT_SURVEYS_COMPLETED_PLOTS_STYLE: React.CSSProperties = {
  width: '100%',
  height: '400px',
  padding: '100px 50px',
}

const SurveysCompletedPlots: FunctionComponent<SurveysCompletedPlotsProps> = ({
  token,
  style = DEFAULT_SURVEYS_COMPLETED_PLOTS_STYLE,
}: SurveysCompletedPlotsProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [plotData, setPlotData] = useState<PlotData | null>(null)

  const survey1Sql = 'SELECT SUM(survey_1) FROM syn22314856'
  const survey2Sql = 'SELECT SUM(survey_2) FROM syn22314856'
  const survey3Sql = 'SELECT SUM(survey_3) FROM syn22314856'
  const survey4Sql = 'SELECT SUM(survey_4) FROM syn22314856'
  const totalSql = 'SELECT SUM(CONTACT) FROM syn22314856'

  useEffect(() => {
    const survey1Data = fetchData(token!, survey1Sql, 'syn22314856')
    const survey2Data = fetchData(token!, survey2Sql, 'syn22314856')
    const survey3Data = fetchData(token!, survey3Sql, 'syn22314856')
    const survey4Data = fetchData(token!, survey4Sql, 'syn22314856')
    const totalData = fetchData(token!, totalSql, 'syn22314856')

    Promise.all([survey1Data, survey2Data, survey3Data, survey4Data, totalData])
      .then((result) => {
        setPlotData({
          surveyCounts: [result[0], result[1], result[2], result[3]],
          totalCount: result[4],
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
          <h4 className="SRC-center-text">Survey Completion Tracking</h4>
          <div className="SRC-flex">
            <Plot
              layout={getLayoutConfig(0, plotData)}
              config={optionsConfig}
              data={getChartDataPoints(0, plotData)}
              style={{ flexBasis: '25%' }}
            />
            <Plot
              layout={getLayoutConfig(1, plotData)}
              config={optionsConfig}
              data={getChartDataPoints(1, plotData)}
              style={{ flexBasis: '25%' }}
            />
            <Plot
              layout={getLayoutConfig(2, plotData)}
              config={optionsConfig}
              data={getChartDataPoints(2, plotData)}
              style={{ flexBasis: '25%' }}
            />
            <Plot
              layout={getLayoutConfig(3, plotData)}
              config={optionsConfig}
              data={getChartDataPoints(3, plotData)}
              style={{ flexBasis: '25%' }}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default SurveysCompletedPlots
