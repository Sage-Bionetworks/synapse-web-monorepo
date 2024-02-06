import React, { FunctionComponent } from 'react'
import Plotly from 'plotly.js-basic-dist'
import createPlotlyComponent from 'react-plotly.js/factory'
import { GraphItem, BarPlotColors, PlotStyle } from './types'
import _ from 'lodash-es'

const Plot = createPlotlyComponent(Plotly)

export type BarPlotProps = {
  isTop: boolean
  style?: React.CSSProperties
  plotData: GraphItem[]
  layoutConfig: Partial<Plotly.Layout>
  optionsConfig: Partial<Plotly.Config>
  label: string
  xMax: number
  colors?: BarPlotColors
  plotStyle?: PlotStyle
  onClick?: (event: Readonly<Plotly.PlotMouseEvent>) => void
}

type LayoutOptions = {
  isTop: boolean
  maxValue: number
  isLegend?: boolean
  backgroundColor?: string
}

function getBarPlotDataPoints(
  data: any[],
  filter?: string,
  colors?: BarPlotColors,
): any[] {
  if (filter) {
    data = data.filter(item => item.y === filter)
  }
  const groups = _.uniq(data.map(item => item['group'])).sort()
  const result: any[] = []
  const defaultColors = [`(28,118,175,1)`, `rgba(91,176,181,1)`]

  groups.forEach((group, i) => {
    const items = data.filter(item => item.group === group)
    result.push({
      x: items.map(item => item.x),
      y: items.map(item => item.y),
      name: group,
      orientation: 'h',
      marker: {
        color: colors ? colors[group] : defaultColors[i],
        width: 1,
      },
      text: [group],
      hovertemplate: `%{x} %{text}<extra></extra>`,
      textposition: 'none',
      type: 'bar',
    })
  })

  return result
}

function getLayout(
  layoutConfig: Partial<Plotly.Layout>,
  { isTop, maxValue, backgroundColor }: LayoutOptions,
): Partial<Plotly.Layout> {
  const layout = _.cloneDeep(layoutConfig)
  layout.xaxis = {
    visible: false,
    range: [0, maxValue],
  }
  if (backgroundColor) {
    layout.plot_bgcolor = backgroundColor
    layout.paper_bgcolor = backgroundColor
  }
  if (!isTop) {
    layout.hoverlabel = {
      font: {
        size: 10,
      },
    }
  }
  layout.showlegend = false
  layout.height = isTop ? 40 : 20
  return layout
}

const DEFAULT_BARPLOT_PLOTSTYLE: PlotStyle = { backgroundColor: 'transparent' }
const DEFAULT_BARPLOT_STYLE: React.CSSProperties = {
  width: '100%',
  height: '100%',
}

const BarPlot: FunctionComponent<BarPlotProps> = ({
  plotData,
  optionsConfig,
  isTop,
  layoutConfig,
  label,
  xMax,
  colors,
  plotStyle = DEFAULT_BARPLOT_PLOTSTYLE,
  style = DEFAULT_BARPLOT_STYLE,
  onClick,
}: BarPlotProps) => {
  return (
    <Plot
      style={style}
      layout={getLayout(layoutConfig, {
        isTop,
        maxValue: xMax,
        backgroundColor: plotStyle.backgroundColor,
      })}
      config={optionsConfig}
      data={getBarPlotDataPoints(plotData, label, colors)}
      onClick={e => (onClick ? onClick(e) : _.noop)}
    />
  )
}

export default BarPlot
