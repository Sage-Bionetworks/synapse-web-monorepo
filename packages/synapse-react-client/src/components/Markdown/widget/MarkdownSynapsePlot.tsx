import React from 'react'
import SynapsePlot from '../../Plot/SynapsePlot'
import { AxisType, PlotType } from 'plotly.js-basic-dist'

export type MarkdownSynapsePlotProps = {
  query: string //sql string
  title?: string //plot title
  xtitle?: string // x-axis title
  ytitle?: string // y-axis title
  type: string // Plotly PlotType
  xaxistype?: string // Plotly AxisType
  showlegend?: string // sets the legend visibility ('true' | 'false')
  horizontal?: string // sets the if a bar chart should be horizontal or vertical ('true' | 'false')
  barmode?: string // Plotly barmode ('stack' | 'group' | 'overlay' | 'relative')
  displayModebar?: string // sets the modebar visibility ('true' | 'false')
}

const toBoolean = (v?: string, fallbackValue?: boolean) => {
  return v ? v.toLowerCase() == 'true' : fallbackValue ?? false
}

export const MarkdownSynapsePlot = (
  props: MarkdownSynapsePlotProps,
): React.ReactNode => {
  const {
    query,
    title,
    xtitle,
    ytitle,
    type,
    xaxistype,
    showlegend,
    barmode,
    horizontal,
    displayModebar,
  } = props
  const plotlyShowLegend = toBoolean(showlegend, true)
  const plotlyIsHorizontal = toBoolean(horizontal, false)
  const plotlyDisplayModebar = toBoolean(displayModebar, false)
  const plotlyBarMode = barmode
    ? (barmode.toLowerCase() as 'stack' | 'group' | 'overlay' | 'relative')
    : undefined
  const plotlyType = type.toLowerCase() as PlotType

  let plotlyXAxisType: AxisType | undefined = undefined
  if (xaxistype) {
    plotlyXAxisType = xaxistype.toLowerCase() as AxisType
  }

  return (
    <SynapsePlot
      synapsePlotWidgetParams={{
        query,
        xtitle,
        ytitle,
        type: plotlyType,
        barmode: plotlyBarMode,
        displayModeBar: plotlyDisplayModebar,
        horizontal: plotlyIsHorizontal,
        showlegend: plotlyShowLegend,
        title: title,
        xaxistype: plotlyXAxisType,
      }}
    />
  )
}

export default MarkdownSynapsePlot
