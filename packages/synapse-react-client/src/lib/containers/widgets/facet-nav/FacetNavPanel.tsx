import { InfoOutlined } from '@mui/icons-material'
import * as PlotlyTyped from 'plotly.js'
import Plotly from 'plotly.js-basic-dist'
import React, { useCallback, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import createPlotlyComponent from 'react-plotly.js/factory'
import { SizeMe } from 'react-sizeme'
import { SkeletonInlineBlock } from '../../../assets/skeletons/SkeletonInlineBlock'
import getColorPalette from '../../../containers/ColorGradient'
import { ElementWithTooltip } from '../../../containers/widgets/ElementWithTooltip'
import { SynapseClient, SynapseConstants } from '../../../utils'

import { useSynapseContext } from '../../../utils/SynapseContext'
import {
  ColumnTypeEnum,
  FacetColumnRequest,
  FacetColumnResultValueCount,
  FacetColumnResultValues,
} from '../../../utils/synapseTypes'
import loadingScreen from '../../LoadingScreen'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import { useQueryContext } from '../../QueryContext'
import { EnumFacetFilter } from '../query-filter/EnumFacetFilter'
import {
  applyChangesToValuesColumn,
  applyMultipleChangesToValuesColumn,
} from '../query-filter/FacetFilterControls'
import { Box, Tooltip, Typography } from '@mui/material'
import { useQuery } from 'react-query'
import { ConfirmationDialog } from '../../ConfirmationDialog'

const Plot = createPlotlyComponent(Plotly)

export type FacetNavPanelProps = {
  applyChangesToGraphSlice: (
    facet: FacetColumnResultValues,
    value: FacetColumnResultValueCount | undefined,
    isSelected: boolean,
  ) => void
  applyChangesToFacetFilter: (facets: FacetColumnRequest[]) => void
  index: number
  facetToPlot: FacetColumnResultValues
  plotType: PlotType
  onSetPlotType: (plotType: PlotType) => void
  onHide: () => void
  isModalView: boolean
  onCloseModal?: () => void
}

const maxLabelLength: number = 19
const maxLegendLength: number = 30

export type PlotType = 'PIE' | 'BAR'

const layout: Partial<PlotlyTyped.Layout> = {
  showlegend: false,
  annotations: [],
  margin: { l: 0, r: 0, b: 0, t: 0, pad: 0 },
  yaxis: {
    visible: false,
    showgrid: false,
  },
  xaxis: {
    visible: false,
    showgrid: false,
  },
}

export type GraphData = {
  data: PlotlyTyped.Data[]
  labels: FacetWithLabel[]
  colors: string[]
}

export function truncate(str: string | undefined, n: number) {
  if (!str) {
    return str
  }
  const trimmedStr: string = str.trim()
  return trimmedStr.length > n ? trimmedStr.substr(0, n - 1) + '…' : str
}

export async function extractPlotDataArray(
  facetToPlot: FacetColumnResultValues,
  columnType: ColumnTypeEnum | undefined,
  index: number,
  plotType: PlotType,
  accessToken?: string,
) {
  const { colorPalette } = getColorPalette(
    index,
    facetToPlot.facetValues.length,
  )

  const getLabels = async (
    facetValues: FacetColumnResultValueCount[],
    columnType?: ColumnTypeEnum,
    accessToken?: string,
  ) => {
    const map = new Map<string, string>()
    map.set(
      SynapseConstants.VALUE_NOT_SET,
      SynapseConstants.FRIENDLY_VALUE_NOT_SET,
    )
    // Filter out empties
    const filteredValues = facetValues
      .map(value => value.value)
      .filter(val => val !== SynapseConstants.VALUE_NOT_SET)
    if (
      columnType === ColumnTypeEnum.ENTITYID ||
      columnType === ColumnTypeEnum.ENTITYID_LIST
    ) {
      // TODO: Pagination
      const response = await SynapseClient.getEntityHeadersByIds(
        filteredValues,
        accessToken,
      )
      for (const header of response.results) {
        map.set(header.id, header.name)
      }
    } else if (
      columnType === ColumnTypeEnum.USERID ||
      columnType === ColumnTypeEnum.USERID_LIST
    ) {
      const response = await SynapseClient.getGroupHeadersBatch(
        filteredValues,
        accessToken,
      )
      for (const header of response.children) {
        map.set(header.ownerId, header.userName)
      }
    }

    return facetValues.map(facetValue => ({
      facet: facetValue,
      label: getLabel(facetValue, false, map),
      truncatedLabel: getLabel(facetValue, true, map),
      count: facetValue.count,
    }))
  }

  const getLabel = (
    facetValue: FacetColumnResultValueCount,
    truncateFlag: boolean,
    labelMap: Map<string, string>,
  ): string => {
    let label = labelMap.get(facetValue.value) ?? facetValue.value
    if (truncateFlag) {
      label = truncate(label, maxLabelLength)!
    }
    return label
  }

  const labels = await getLabels(
    facetToPlot.facetValues,
    columnType,
    accessToken,
  )
  const text = labels.map(el => el.truncatedLabel)

  const anyFacetsSelected = facetToPlot.facetValues.some(
    value => value.isSelected,
  )

  const selectionAwareColorPalette = anyFacetsSelected
    ? facetToPlot.facetValues.map((facetValue, index) =>
        facetValue.isSelected
          ? colorPalette[index]
          : colorPalette[index]
              .replace('rgb(', 'rgba(')
              .replace(')', ', 0.25)'),
      )
    : colorPalette
  const singleChartData: PlotlyTyped.Data = {
    values:
      plotType === 'PIE'
        ? facetToPlot.facetValues.map(facet => facet.count)
        : undefined,
    labels: labels.map(el => el.label),
    text,
    x:
      plotType === 'BAR'
        ? facetToPlot.facetValues.map(
            facet =>
              labels.find(label => label.facet === facet)?.label ?? facet.value,
          )
        : undefined,
    y:
      plotType === 'BAR'
        ? facetToPlot.facetValues.map(facet => facet.count)
        : undefined,
    // @ts-ignore
    facetEnumerationValues: facetToPlot.facetValues.map(
      facetValue => facetValue.value,
    ),
    name: facetToPlot.columnName,
    hovertemplate:
      plotType === 'PIE'
        ? '<b>%{text}</b><br>%{value} (%{percent})<br><extra></extra>'
        : '<b>%{text}: </b><br>%{value} <br><extra></extra>',
    textinfo: 'none',
    type: plotType === 'PIE' ? 'pie' : 'bar',
    pull:
      plotType === 'PIE'
        ? facetToPlot.facetValues.map(facetValue =>
            facetValue.isSelected ? 0.1 : 0,
          )
        : undefined,
    marker: {
      colors: plotType === 'PIE' ? selectionAwareColorPalette : undefined,
      color: plotType === 'BAR' ? selectionAwareColorPalette : undefined,
    },
  }

  const result = {
    data: [singleChartData],
    labels,
    colors:
      plotType === 'PIE'
        ? ((singleChartData as any).marker?.colors as string[])
        : ((singleChartData as any).marker?.color as string[]),
  }
  return result
}

const applyFacetFilter = (
  event: PlotlyTyped.PlotMouseEvent,
  allFacetValues: FacetColumnResultValues,
  callbackApplyFn: FacetNavPanelProps['applyChangesToGraphSlice'],
) => {
  if (event.points && event.points[0]) {
    const plotPointData: any = event.points[0]
    const facetValueClickedValue =
      plotPointData.data.facetEnumerationValues[plotPointData.pointNumber]
    const facetValueClicked = allFacetValues.facetValues.find(
      facet => facet.value === facetValueClickedValue,
    )
    callbackApplyFn(
      allFacetValues,
      facetValueClicked,
      !facetValueClicked!.isSelected,
    )
  }
}

export function getPlotStyle(
  parentWidth: number | null,
  plotType: PlotType,
  maxHeight: number,
): { width: string; height: string } {
  const quotient = plotType === 'BAR' ? 0.8 : 0.6
  const width = parentWidth ? parentWidth * quotient : 200
  let height = plotType === 'PIE' ? width : width / 3
  // max height of .FacetNav row col* is 200px, so the effective plot height max is around 150 unless it's expanded
  if (height > maxHeight) {
    height = maxHeight
  }

  return {
    width: `${width}px`,
    height: `${height}px`,
  }
}

export type FacetWithLabel = {
  label: string
  count: number
}

type FacetPlotLegendProps = {
  labels?: FacetWithLabel[]
  colors?: string[]
  isExpanded: boolean
}

export function FacetPlotLegend(props: FacetPlotLegendProps) {
  const { labels, colors = [], isExpanded } = props
  if (!labels) {
    return <></>
  }
  const numLegendItems = isExpanded
    ? Math.min(labels.length, 9)
    : Math.min(labels.length, 4)
  if (numLegendItems === 0) {
    return <></>
  }
  return (
    <div
      className={`FacetNavPanel__body__legend${isExpanded ? '--expanded' : ''}`}
    >
      {labels.slice(0, numLegendItems).map((facetValue, index) => {
        const labelDisplay = truncate(facetValue.label, maxLegendLength)
        return (
          <ElementWithTooltip
            tooltipText={facetValue.label}
            key={facetValue.label}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Box
                sx={{
                  width: '14px',
                  height: '14px',
                  cursor: 'default',
                  backgroundColor: colors[index],
                }}
                key={`legendLabel_${index}`}
                style={{ cursor: 'default' }}
              />
              <Typography variant="body2">{labelDisplay}</Typography>
              <Typography variant="body2" sx={{ color: 'grey.600' }}>
                {facetValue.count}
              </Typography>
            </Box>
          </ElementWithTooltip>
        )
      })}
    </div>
  )
}

const getClassNameForPlotDiv = (isExpanded: boolean, plotType: PlotType) => {
  if (!isExpanded) {
    return 'FacetNavPanel__body__plot'
  }
  return `FacetNavPanel__body__plot--expanded${
    plotType === 'BAR' ? 'Bar' : 'Pie'
  }`
}

const FacetNavPanel: React.FunctionComponent<FacetNavPanelProps> = (
  props: FacetNavPanelProps,
): JSX.Element => {
  const {
    onHide,
    isModalView,
    applyChangesToFacetFilter,
    applyChangesToGraphSlice,
    index,
    facetToPlot,
    plotType,
    onSetPlotType,
  } = props
  const { accessToken } = useSynapseContext()
  const { data, isLoadingNewBundle, getLastQueryRequest } = useQueryContext()

  const { getColumnDisplayName } = useQueryVisualizationContext()

  const [showModal, setShowModal] = useState(false)

  const plotTitle = getColumnDisplayName(facetToPlot.columnName)

  const getColumnType = useCallback(
    (): ColumnTypeEnum | undefined =>
      data?.columnModels?.find(
        columnModel => columnModel.name === facetToPlot.columnName,
      )?.columnType as ColumnTypeEnum,
    [data, facetToPlot.columnName],
  )

  const { data: plotData } = useQuery(
    [
      'extractPlotDataArray',
      facetToPlot,
      getColumnType(),
      index,
      plotType,
      accessToken,
    ],
    () =>
      extractPlotDataArray(
        facetToPlot,
        getColumnType(),
        index,
        plotType,
        accessToken,
      ),
    {
      enabled: !!facetToPlot,
    },
  )

  /* rendering functions */
  const ChartSelectionToggle = (): JSX.Element => (
    <div
      onClick={event => {
        event.stopPropagation()
      }}
      className="bootstrap-4-backport SRC-labeled-dropdown"
    >
      <span className="SRC-labeled-dropdown__label">Chart Type</span>
      <Dropdown>
        <Dropdown.Toggle className="secondary-caret" variant="gray-select">
          {plotType === 'PIE' ? 'Pie Chart' : 'Bar Chart'}
        </Dropdown.Toggle>
        <Dropdown.Menu className="chart-tools">
          <Dropdown.Item as="button" onClick={() => onSetPlotType('BAR')}>
            Bar Chart
          </Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => onSetPlotType('PIE')}>
            Pie Chart
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )

  if ((!data && isLoadingNewBundle) || !facetToPlot) {
    return (
      <div className="SRC-loadingContainer SRC-centerContentColumn">
        {loadingScreen}
      </div>
    )
  } else {
    return (
      <>
        <ConfirmationDialog
          open={showModal}
          onCancel={() => setShowModal(false)}
          title={plotTitle ?? ''}
          content={<FacetNavPanel {...props} isModalView={true} />}
          hasCancelButton={false}
          confirmButtonText="Apply Filters"
          onConfirm={() => setShowModal(false)}
        />
        <div
          role="graphics-document"
          className={`FacetNavPanel${isModalView ? '--expanded' : ''}`}
        >
          {!isModalView && (
            <div className="FacetNavPanel__title">
              {!data && isLoadingNewBundle ? (
                <SkeletonInlineBlock width={100} />
              ) : (
                <span className="FacetNavPanel__title__name">{plotTitle}</span>
              )}
              <div className="FacetNavPanel__title__tools">
                <EnumFacetFilter
                  facetValues={facetToPlot.facetValues}
                  columnModel={
                    data?.columnModels!.find(
                      el => el.name === facetToPlot.columnName,
                    )!
                  }
                  onChange={(facetNamesMap: Record<string, string>) => {
                    applyMultipleChangesToValuesColumn(
                      getLastQueryRequest(),
                      facetToPlot,
                      applyChangesToFacetFilter,
                      facetNamesMap,
                    )
                  }}
                  onClear={() => {
                    applyChangesToValuesColumn(
                      getLastQueryRequest(),
                      facetToPlot,
                      applyChangesToFacetFilter,
                    )
                  }}
                  containerAs="Dropdown"
                />
                <ElementWithTooltip
                  tooltipText="Expand to large graph"
                  key="expandGraph"
                  callbackFn={() => setShowModal(true)}
                  className="SRC-primary-color"
                  darkTheme={false}
                  icon={'expand'}
                />
                <ElementWithTooltip
                  tooltipText="Hide graph under Show More"
                  key="hideGraph"
                  callbackFn={() => onHide()}
                  className="SRC-primary-color"
                  darkTheme={false}
                  icon={'close'}
                />
              </div>
            </div>
          )}
          {isModalView && (
            <>
              <div className={'bootstrap-4-backport SRC-labeled-dropdown'}>
                <span className="SRC-labeled-dropdown__label">
                  Filter All Data By
                </span>
                <EnumFacetFilter
                  facetValues={facetToPlot.facetValues}
                  columnModel={
                    data?.columnModels!.find(
                      el => el.name === facetToPlot.columnName,
                    )!
                  }
                  onChange={(facetNamesMap: Record<string, string>) => {
                    applyMultipleChangesToValuesColumn(
                      getLastQueryRequest(),
                      facetToPlot,
                      applyChangesToFacetFilter,
                      facetNamesMap,
                    )
                  }}
                  onClear={() => {
                    applyChangesToValuesColumn(
                      getLastQueryRequest(),
                      facetToPlot,
                      applyChangesToFacetFilter,
                    )
                  }}
                  containerAs="Dropdown"
                  dropdownType="SelectBox"
                />
                <Tooltip title="Selecting items in this dropdown will affect all facets on the Explore page.">
                  <InfoOutlined className="SRC-hand-cursor SRC-secondary-text-color" />
                </Tooltip>
              </div>
              <ChartSelectionToggle />
            </>
          )}
          <div
            className={`FacetNavPanel__body${isModalView ? '--expanded' : ''}`}
            role="graphics-object"
          >
            <SizeMe monitorHeight>
              {({ size }) => (
                <div className={getClassNameForPlotDiv(isModalView, plotType)}>
                  <Plot
                    key={`${facetToPlot.columnName}-${plotType}-${size.width}`}
                    layout={layout}
                    data={plotData?.data ?? []}
                    style={getPlotStyle(
                      size.width,
                      plotType,
                      isModalView ? 300 : 150,
                    )}
                    config={{ displayModeBar: false }}
                    onClick={evt =>
                      applyFacetFilter(
                        evt,
                        facetToPlot,
                        applyChangesToGraphSlice,
                      )
                    }
                  ></Plot>
                </div>
              )}
            </SizeMe>
            <FacetPlotLegend
              labels={plotData?.labels}
              colors={plotData?.colors}
              isExpanded={isModalView}
            />
          </div>
        </div>
      </>
    )
  }
}

export default FacetNavPanel
