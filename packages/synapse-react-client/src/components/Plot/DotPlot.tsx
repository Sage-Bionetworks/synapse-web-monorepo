import _, { countBy } from 'lodash-es'
import Plotly from 'plotly.js-basic-dist'
import { CSSProperties } from 'react'
import createPlotlyComponent from 'react-plotly.js/factory'
import { Dictionary, GraphItem, PlotStyle } from './types'

const Plot = createPlotlyComponent(Plotly)

export type DotPlotProps = {
  plotData: GraphItem[]
  layoutConfig: Partial<Plotly.Layout>
  optionsConfig: Partial<Plotly.Config>
  label?: string
  style?: CSSProperties
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
  result.yaxis!.showgrid = false
  result.yaxis!.zeroline = true
  result.yaxis!.zerolinecolor = '#aeb5bc'
  result.yaxis!.showticklabels = false
  if (result.xaxis!.type === 'log') {
    result.xaxis!.tickformat = 'f'
    result.xaxis!.range = [-0.1, Math.log10(layoutOptions.maxValue!) + 0.1]
  } else {
    result.xaxis!.range = [
      (layoutOptions.maxValue! / 50) * -1,
      layoutOptions.maxValue! + 30,
    ]
  }
  result.xaxis!.visible = layoutOptions.isXAxis
  result.showlegend = layoutOptions.isLegend
  result.margin = {
    t: 0,
    b: layoutOptions.isXAxis ? 50 : 0,
    l: 0,
    r: 0,
    pad: 15,
  }
  let height = 40
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
): number[] {
  const result: number[] = new Array(headers.length)
  items.forEach(item => {
    const index = headers.indexOf(item.y)
    if (index !== -1) {
      result[index] = item.x
    }
  })
  return result
}

/**
 * Generates a sequence of n numbers centered around 0
 *
 * Examples:
 * if n is 4, the result would be [-1.5, -0.5, 0.5, 1.5]
 * if n is 5 the result would be [-2, -1, 0, 1, 2]
 * @param n
 */
export function generateCenteredSequence(n: number): number[] {
  const sequence: number[] = []
  const half = (n - 1) / 2
  for (let i = 0; i < n; i++) {
    sequence.push(i - half)
  }
  return sequence
}

/**
 * Returns a set of y values where
 *  - if an x value is unique, the y value is 0
 *  - if an x value is repeated, the y value is an offset from 0
 *
 * This has the effect of preventing overlapping points in a dot plot
 * @param xDataByGroup
 */
export function getYDataForDotPlotOffset(
  xDataByGroup: Record<string, number[]>,
): Record<string, number[]> {
  const counts = countBy(xDataByGroup, val => val[0])

  const yDataByGroup: Record<string, number[]> = {}
  // keep track of how many times we have seen each duplicate value
  const seen: Record<number, number> = {}
  Object.keys(xDataByGroup).forEach(group => {
    const value = xDataByGroup[group][0]
    if (counts[value] === 1) {
      // The value is not duplicated by another group, so the y-value (vertical offset) is 0
      yDataByGroup[group] = [0]
    } else {
      // The value is duplicated by another group, so get an offset value that will be
      //   - centered around 0
      //   - unique for this item among all items with the same value
      if (seen[value] == undefined) {
        seen[value] = 0
      }
      const offsets = generateCenteredSequence(counts[value])
      const offset = offsets[seen[value]]

      yDataByGroup[group] = [offset]
      seen[value] = seen[value] + 1
    }
  })
  return yDataByGroup
}

function getPlotDataPoints(
  graphItems: GraphItem[],
  plotStyle: PlotStyle,
  ySorted?: string[],
  markerSymbols?: Dictionary,
): Plotly.Data[] {
  const isFakeData = ySorted === undefined
  const groups = _.uniq(graphItems.map(item => item.group))
  const defaultSymbols = [
    'y-down',
    'triangle-up',
    'cross-thin-open',
    'triangle-up-open-dot',
    'star-square-open',
    'diamond-x',
  ]

  const xDataByGroup: Record<string, number[]> = groups.reduce(
    (prev, group) => {
      const xDataForGroup = isFakeData
        ? [-100] // fake datavalue outside of the bounds
        : createArrayOfGroupValues(
            ySorted,
            graphItems.filter(row => row.group === group),
          )
      return { ...prev, [group]: xDataForGroup }
    },
    {},
  )
  const yDataByGroup: Record<string, number[]> =
    getYDataForDotPlotOffset(xDataByGroup)

  const data: Plotly.Data[] = groups.map((group, i) => {
    const xData: number[] = xDataByGroup[group]
    const yData: number[] = yDataByGroup[group]
    return {
      type: 'scatter',
      x: xData,
      y: yData,
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
    }
  })

  return data
}

const DEFAULT_DOTPLOT_PLOTSTYLE: PlotStyle = {
  markerFill: '#515359',
  markerLine: '#515359',
  markerSize: 9,
  backgroundColor: 'transparent',
}
const DEFAULT_DOTPLOT_STYLE: CSSProperties = {
  width: '100%',
  height: '100%',
}

function DotPlot({
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
}: DotPlotProps) {
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
