export type GraphItem = {
  x: number
  y: string
  info?: string
  group: string
}

export type PlotStyle = {
  markerFill?: string
  markerLine?: string
  markerSize?: number
  backgroundColor?: string
}

export type Dictionary = { [key: string]: string }

export type BarPlotColors = Dictionary

export type PlotProps = {
  entityId: string
  xField: string
  yField: string
  groupField: string
  countLabel?: string
  whereClause?: string
  infoField?: string
  colors?: BarPlotColors
  markerSymbols?: Dictionary
  plotStyle?: PlotStyle
}

export type ClickCallbackParams = {
  event: MouseEvent
  facetValue: string
  type: string
}
