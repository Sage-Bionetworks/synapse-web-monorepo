import { getFullQueryTableResults } from '@/synapse-client'
import { SynapseConstants, useSynapseContext } from '@/utils'
import { resultToJson } from '@/utils/functions'
import { unCamelCase } from '@/utils/functions/unCamelCase'
import { Tooltip } from '@mui/material'
import {
  QueryBundleRequest,
  QueryResultBundle,
  RowSet,
} from '@sage-bionetworks/synapse-types'
import Plotly from 'plotly.js-basic-dist'
import { useEffect, useState } from 'react'
import { RequiredKeysOf } from 'type-fest'
import loadingScreen from '../LoadingScreen/LoadingScreen'
import BarPlot from './BarPlot'
import DotPlot from './DotPlot'
import {
  BarPlotColors,
  ClickCallbackParams,
  GraphItem,
  PlotProps,
} from './types'
import first from 'lodash-es/first'
import orderBy from 'lodash-es/orderBy'
import cloneDeep from 'lodash-es/cloneDeep'

export type ThemesPlotProps = {
  onPointClick: ({ facetValue, type, event }: ClickCallbackParams) => void
  onIndividualThemeBarPlotPointClick?: ({
    facetValue,
    type,
    event,
  }: ClickCallbackParams) => void
  dotPlot: PlotProps
  topBarPlot: PlotProps
  sideBarPlot: PlotProps
  dotPlotYAxisLabel?: string
}

type TotalsGroupByY = { y: string; count: number }
type TotalsGroupByGroup = { group: string; count: number }

const optionsConfig: Partial<Plotly.Config> = {
  displayModeBar: false,
  responsive: true,
  scrollZoom: false,
  editable: false,
  autosizable: true,
}

const dotPlotLayoutConfig: Partial<Plotly.Layout> = {
  showlegend: true,
  dragmode: false,
  legend: {
    font: {
      size: 11,
    },

    y: 1.1,
    xanchor: 'right',
    x: 1,

    orientation: 'h',
  },
  xaxis: {
    visible: true,
    fixedrange: true,
    zeroline: false,
    showgrid: false,
    showline: true,
    linecolor: '#ddd', //bottom line
    autotick: true,
    ticks: 'outside',
    tickcolor: '#ddd',
    type: 'log',
  },

  yaxis: {
    fixedrange: true,
    zeroline: false,
    gridcolor: '#ddd', //horizontal lines
    automargin: true,
  },

  margin: {
    pad: 20,
  },
  hovermode: 'closest',
}

const barLayoutConfig: Partial<Plotly.Layout> = {
  barmode: 'stack',
  showlegend: false,
  dragmode: false,
  hovermode: 'closest',
  yaxis: { visible: false, fixedrange: true },
  margin: {
    l: 0,
    r: 0,
    b: 0,
    t: 0,
    pad: 0,
  },
}

function fetchData(
  token: string,
  { xField, yField, groupField, entityId, whereClause, infoField }: PlotProps,
): Promise<RowSet> {
  const sql = `SELECT ${xField} as "x", ${yField} as "y", ${
    infoField ? infoField + ' as "info", ' : ''
  } ${groupField} as "group"
                 FROM ${entityId} ${whereClause ? ' WHERE ' + whereClause : ''}`

  const queryRequest: QueryBundleRequest = {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask: SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    entityId: entityId,
    query: {
      sql: sql,
    },
  }

  return getFullQueryTableResults(queryRequest, token).then(
    (data: QueryResultBundle) => {
      return data.queryResult!.queryResults
    },
  )
}

function getTotalsByProp<T>(
  data: GraphItem[],
  prop: RequiredKeysOf<GraphItem>,
): T[] {
  const resultObject = data.reduce((res: Record<string, number>, obj) => {
    res[obj[prop]] =
      (obj[prop] in res ? Number(res[obj[prop]]) : 0) + Number(obj.x)
    return res
  }, {})
  const result: T[] = []
  for (const property in resultObject) {
    result.push({
      [prop]: property,
      count: resultObject[property],
    } as unknown as T)
  }
  return result
}

const getClickTargetData = (
  e: Plotly.PlotMouseEvent,
  swap: boolean,
): ClickCallbackParams => {
  const pointData = e.points[0].data

  let facetValue = pointData.y[0] as string
  let type = pointData.name

  if (swap) {
    ;[facetValue, type] = [type, facetValue]
  }
  return { facetValue, type, event: e.event }
}

const renderTopBarLegend = (
  colors: BarPlotColors | undefined,
  xLabels: string[],
) => (
  <div className="ThemesPlot__barPlotLegend">
    {xLabels.map((item, i) => (
      <div style={{ float: 'left' }} key={`topBar_${i}`}>
        <div
          className="ThemesPlot__barPlotLegend__label"
          key="topBar_label"
          style={{
            backgroundColor: `${colors ? colors[item] : 'transparent'}`,
          }}
        ></div>
        <div className="ThemesPlot__barPlotLegend__graph" key="topBar_graph">
          {item}
        </div>{' '}
      </div>
    ))}
  </div>
)

const fadeColors = (colors: { [key: string]: string }, opacity: string) => {
  for (const key in colors) {
    colors[key] = colors[key]
      .replace(',1)', `, ${opacity})`)
      .replace(',1.0)', `, ${opacity})`)
  }
  return colors
}

const getTooltip = (data: GraphItem[], filter: string) => {
  return first(data.filter(item => item.y === filter).map(item => item.info))
}

export function ThemesPlot({
  dotPlot,
  topBarPlot,
  sideBarPlot,
  onPointClick,
  onIndividualThemeBarPlotPointClick,
  dotPlotYAxisLabel = 'Research Themes',
}: ThemesPlotProps) {
  const { accessToken } = useSynapseContext()
  const [isLoaded, setIsLoaded] = useState(false)
  const [dotPlotQueryData, setDotPlotQueryData] = useState<GraphItem[]>([])
  const [topBarPlotData, setTopBarQueryData] = useState<GraphItem[]>([])
  const [sideBarPlotData, setSideBarQueryData] = useState<GraphItem[]>([])

  useEffect(() => {
    const dotPlotData = fetchData(accessToken!, dotPlot)
    const topBarPlotData = fetchData(accessToken!, topBarPlot)
    const sideBarPlotData = fetchData(accessToken!, sideBarPlot)
    Promise.all([dotPlotData, topBarPlotData, sideBarPlotData])
      .then(result => {
        setDotPlotQueryData(
          resultToJson(
            result[0].headers,
            result[0].rows,
          ) as unknown as GraphItem[],
        )
        setTopBarQueryData(
          resultToJson(
            result[1].headers,
            result[1].rows,
          ) as unknown as GraphItem[],
        )
        setSideBarQueryData(
          resultToJson(
            result[2].headers,
            result[2].rows,
          ) as unknown as GraphItem[],
        )
        setIsLoaded(true)
      })
      .catch(err => {
        throw err
      })
    return () => {}
  }, [accessToken, dotPlot, topBarPlot, sideBarPlot])
  let yLabelsForDotPlot: string[] = []
  let xLabelsForTopBarPlot: string[] = []
  let xMaxForDotPlot = 0
  let topBarPlotDataSorted: TotalsGroupByY[] = []
  let totalsByDotPlotY: TotalsGroupByY[] = []
  if (isLoaded) {
    totalsByDotPlotY = getTotalsByProp(sideBarPlotData, 'y')
    yLabelsForDotPlot = totalsByDotPlotY
      .sort((a, b) => b.count - a.count)
      .map(item => item.y)
    xMaxForDotPlot = Math.max(...dotPlotQueryData.map(item => Number(item.x)))
    topBarPlotDataSorted = orderBy(getTotalsByProp(topBarPlotData, 'y'), ['y'])
    xLabelsForTopBarPlot = orderBy(
      getTotalsByProp<TotalsGroupByGroup>(topBarPlotData, 'group'),
      ['group'],
    ).map(item => item.group)
  }

  return (
    <>
      {!isLoaded && loadingScreen}

      {isLoaded && (
        <div className="ThemesPlot">
          <div className="ThemesPlot__dotPlotLegend">
            <DotPlot
              id="head"
              plotData={dotPlotQueryData}
              isLegend={true}
              markerSymbols={dotPlot.markerSymbols}
              style={{ width: '100%', height: '100%' }}
              layoutConfig={dotPlotLayoutConfig}
              optionsConfig={{
                ...optionsConfig,
                responsive: true,
                staticPlot: true,
              }}
              plotStyle={{
                ...dotPlot.plotStyle!,
                backgroundColor: 'transparent',
              }}
            ></DotPlot>
          </div>
          {topBarPlot.colors &&
            renderTopBarLegend(topBarPlot.colors, xLabelsForTopBarPlot)}
          {topBarPlotDataSorted.map((item, i) => (
            <div className="ThemesPlot__topBarPlot" key={`topBarDiv_${i}`}>
              <div className="ThemesPlot__topBarPlot__label">
                {item.count}&nbsp;{unCamelCase(item.y)}
              </div>
              <div className="ThemesPlot__topBarPlot__plot">
                <BarPlot
                  style={{ width: '100%', height: '100%' }}
                  layoutConfig={cloneDeep(barLayoutConfig)}
                  optionsConfig={{ ...optionsConfig }}
                  plotData={topBarPlotData}
                  isTop={true}
                  label={item.y}
                  xMax={item.count}
                  onClick={(e: any) =>
                    onPointClick(getClickTargetData(e, true))
                  }
                  colors={
                    // we are not actually fading colors for now. But keeping implemenation in case it changes
                    i % 2 === 0
                      ? topBarPlot.colors
                      : fadeColors({ ...topBarPlot.colors }, '1')
                  }
                />
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', position: 'relative' }}>
            <div className="ThemesPlot__dotPlotYLabel">{dotPlotYAxisLabel}</div>
            <div className="ThemesPlot__dotPlot">
              {yLabelsForDotPlot.map((label, i) => (
                <div
                  key={`plotDiv_${+i}`}
                  className="ThemesPlot__dotPlot__row"
                  style={{
                    backgroundColor: dotPlot.plotStyle?.backgroundColor,
                  }}
                >
                  <div className="ThemesPlot__dotPlot__barColumn">
                    <Tooltip
                      title={`${getTooltip(dotPlotQueryData, label)} `}
                      placement={'right'}
                    >
                      <div>
                        <span className="ThemesPlot__dotPlot__themeLabel">
                          {label}
                        </span>
                        <br />
                        <span className="ThemesPlot__dotPlot__countLabel">
                          {totalsByDotPlotY[i].count} {sideBarPlot.countLabel}
                        </span>
                        <br />
                        <BarPlot
                          style={{ width: '100%' }}
                          layoutConfig={barLayoutConfig}
                          optionsConfig={optionsConfig}
                          plotData={sideBarPlotData}
                          isTop={false}
                          // PORTALS-3061: No longer use a global x max for the side bar (where the bar size of 1 grant is consistent),
                          //    Instead, each bar chart is independent (the size of 1 grant differs across bar charts).
                          xMax={totalsByDotPlotY[i].count}
                          label={label}
                          colors={fadeColors({ ...topBarPlot.colors }, '1')}
                          onClick={(e: any) => {
                            if (onIndividualThemeBarPlotPointClick) {
                              onIndividualThemeBarPlotPointClick(
                                getClickTargetData(e, false),
                              )
                            }
                          }}
                        />
                      </div>
                    </Tooltip>
                  </div>
                  <div className="ThemesPlot__dotPlot__dotPlotColumn">
                    <div
                      style={{
                        width: '100%',
                        backgroundColor: dotPlot.plotStyle?.backgroundColor,
                      }}
                    >
                      <DotPlot
                        id={`${i}`}
                        onClick={(e: any) => {
                          const { type, event } = getClickTargetData(e, false)
                          onPointClick({ facetValue: label, type, event })
                        }}
                        plotData={dotPlotQueryData}
                        plotStyle={dotPlot.plotStyle}
                        markerSymbols={dotPlot.markerSymbols}
                        xMax={xMaxForDotPlot}
                        label={label}
                        layoutConfig={dotPlotLayoutConfig}
                        optionsConfig={{
                          ...optionsConfig,
                          responsive: false,
                        }}
                      ></DotPlot>
                    </div>
                  </div>
                </div>
              ))}
              <div className="ThemesPlot__dotPlot__row">
                <div
                  className="ThemesPlot__dotPlot__barColumn"
                  style={{ textAlign: 'right' }}
                >
                  VOLUME:
                </div>
                <div
                  className="ThemesPlot__dotPlot__dotPlotColumn"
                  style={{ marginTop: '0px' }}
                >
                  <DotPlot
                    id={'footer'}
                    plotData={dotPlotQueryData}
                    isXAxis={true}
                    xMax={xMaxForDotPlot}
                    layoutConfig={dotPlotLayoutConfig}
                    optionsConfig={{ ...optionsConfig, responsive: false }}
                  ></DotPlot>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      )}
    </>
  )
}

export default ThemesPlot
