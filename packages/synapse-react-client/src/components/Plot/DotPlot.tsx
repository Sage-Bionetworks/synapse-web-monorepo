import React, { FunctionComponent /*, useState , useEffect */ } from 'react' // importing FunctionComponent
import Plotly from 'plotly.js-basic-dist'
import createPlotlyComponent from 'react-plotly.js/factory'
import { GraphItem, PlotStyle, Dictionary } from './types'
import _ from 'lodash-es'
const Plot = createPlotlyComponent(Plotly)

export type DotPlotProps = {
  plotData: GraphItem[]
  layoutConfig: Partial<Plotly.Layout>
  optionsConfig: Partial<Plotly.Config>
  label?: string
  style?: React.CSSProperties
  id: string
  isLegend?: boolean
  isXAxis?: boolean
  xMax?: number
  plotStyle?: PlotStyle
  markerSymbols?: Dictionary
  onClick?: (e: Readonly<Plotly.PlotMouseEvent>) => void
}

type LayoutOptions = {
  isLegend: boolean
  isXAxis: boolean
  maxValue?: number
  backgroundColor?: string
}

function getLayout(
  dotPlotLayoutConfig: Partial<Plotly.Layout>,
  layoutOptions?: LayoutOptions,
): Partial<Plotly.Layout> {
  const result = _.cloneDeep(dotPlotLayoutConfig)
  if (!layoutOptions) {
    return result
  }
  if (layoutOptions.backgroundColor) {
    result.plot_bgcolor = layoutOptions.backgroundColor
  }
  result.yaxis!.showticklabels = false
  result.xaxis!.range = [-5, layoutOptions.maxValue! + 30]
  result.xaxis!.visible = layoutOptions.isXAxis
  result.showlegend = layoutOptions.isLegend
  result.margin = {
    t: 0,
    b: layoutOptions.isXAxis ? 50 : 0,
    l: 0,
    r: 0,
    pad: 15,
  }
  let height = 30
  if (layoutOptions.isLegend) {
    height = 35
    result.margin.pad = 0
    result.xaxis = {
      visible: false,
      zeroline: false,
      showgrid: false,
      showline: false,
      range: [0, 1],
    }

    result.yaxis = {
      visible: false,
      showline: false,
    }
  }
  if (layoutOptions.isXAxis) {
    result.yaxis = {
      visible: false,
      showgrid: false,
      showline: false,
    }
    height = 50
  }

  result.height = height

  return result
}

function createArrayOfGroupValues(
  headers: string[],
  items: GraphItem[],
): any[] {
  const result = new Array(headers.length)
  items.forEach(item => {
    const index = headers.indexOf(item.y)
    result[index] = item.x
  })
  return result
}

function getPlotDataPoints(
  graphItems: GraphItem[],
  plotStyle: PlotStyle,
  ySorted?: string[],
  markerSymbols?: Dictionary,
): any[] {
  const isFakeData = ySorted === undefined
  const groups = _.uniq(graphItems.map(item => item.group))
  const data: any = []
  const defaultSymbols = [
    'y-down',
    'triangle-up',
    'cross-thin-open',
    'triangle-up-open-dot',
    'star-square-open',
    'diamond-x',
  ]

  groups.forEach((group, i) => {
    data.push({
      type: 'scatter',

      x: isFakeData
        ? [-10] // fake datavalue outside of the bounds
        : createArrayOfGroupValues(
            ySorted,
            graphItems.filter(row => row.group === group),
          ),
      y: ySorted,
      text: [group],
      hovertemplate: `%{x} %{text}<extra></extra>`,
      mode: 'markers',
      name: group,
      marker: {
        color: plotStyle.markerFill,
        line: {
          color: plotStyle.markerLine,
          width: 1,
        },

        symbol: markerSymbols ? markerSymbols[group] : defaultSymbols[i],
        size: plotStyle.markerSize,
      },
    })
  })
  return data
}

const DEFAULT_DOTPLOT_PLOTSTYLE: PlotStyle = {
  markerFill: '#515359',
  markerLine: '#515359',
  markerSize: 9,
  backgroundColor: 'transparent',
}
const DEFAULT_DOTPLOT_STYLE: React.CSSProperties = {
  width: '100%',
  height: '100%',
}

const DotPlot: FunctionComponent<DotPlotProps> = ({
  plotData,
  optionsConfig,
  layoutConfig,
  label,
  id,
  xMax,
  style = DEFAULT_DOTPLOT_STYLE,
  markerSymbols,
  plotStyle = DEFAULT_DOTPLOT_PLOTSTYLE,
  onClick,
  isLegend = false,
  isXAxis = false,
}: DotPlotProps) => {
  const pointsTypes = label ? [label] : undefined

  return (
    <Plot
      key={`dotPlot_${id}`}
      layout={getLayout(layoutConfig, {
        isLegend: isLegend,
        isXAxis: isXAxis,
        maxValue: xMax,
        backgroundColor: plotStyle.backgroundColor,
      })}
      style={style}
      data={getPlotDataPoints(plotData, plotStyle, pointsTypes, markerSymbols)}
      config={optionsConfig}
      onClick={e => (onClick ? onClick(e) : _.noop)}
    />
  )
}

export default DotPlot
