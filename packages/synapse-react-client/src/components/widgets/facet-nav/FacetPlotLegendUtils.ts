export const MAX_LEGEND_LENGTH: number = 30

export function truncate(str: string | undefined, n: number) {
  if (!str) {
    return str
  }
  const trimmedStr: string = str.trim()
  return trimmedStr.length > n ? trimmedStr.substring(0, n - 1) + '…' : str
}

export type FacetWithLabel = {
  label: string
  count: number
}

export type FacetPlotLegendProps = {
  labels?: FacetWithLabel[]
  colors?: string[]
  isExpanded: boolean
}
