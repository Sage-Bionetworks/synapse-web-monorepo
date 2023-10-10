import React from 'react'
import SynapsePlot, { SynapsePlotProps } from '../../Plot/SynapsePlot'

export type PlotWidgetParams = SynapsePlotProps['widgetparamsMapped']

export default function MarkdownSynapsePlot(props: PlotWidgetParams) {
  return <SynapsePlot widgetparamsMapped={props} />
}
