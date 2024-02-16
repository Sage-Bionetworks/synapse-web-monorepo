import { InfoOutlined } from '@mui/icons-material'
import Plotly from 'plotly.js-basic-dist'
import React, { useMemo, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import createPlotlyComponent from 'react-plotly.js/factory'
import { SizeMe } from 'react-sizeme'
import { getContrastColorPalette } from '../../ColorGradient/ColorGradient'
import { SynapseConstants } from '../../../utils'
import SynapseClient from '../../../synapse-client'
import { useSynapseContext } from '../../../utils/context/SynapseContext'
import {
  ColumnTypeEnum,
  FacetColumnRequest,
  FacetColumnResultValueCount,
  FacetColumnResultValues,
} from '@sage-bionetworks/synapse-types'
import loadingScreen from '../../LoadingScreen/LoadingScreen'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import { EnumFacetFilter } from '../query-filter/EnumFacetFilter/EnumFacetFilter'
import { Box, Tooltip } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { ConfirmationDialog } from '../../ConfirmationDialog/ConfirmationDialog'
import { FacetPlotLegendList } from './FacetPlotLegendList'
import { FacetWithLabel, truncate } from './FacetPlotLegendUtils'
import { useAtomValue } from 'jotai'
import {
  isLoadingNewBundleAtom,
  tableQueryDataAtom,
} from '../../QueryWrapper/QueryWrapper'
import { getCorrespondingColumnForFacet } from '../../../utils/functions/queryUtils'
import PlotPanelHeader from '../../Plot/PlotPanelHeader'

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

export type PlotType = 'PIE' | 'BAR'

const layout: Partial<Plotly.Layout> = {
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
  data: Plotly.Data[]
  labels: FacetWithLabel[]
  colors: string[]
}

export async function extractPlotDataArray(
  facetToPlot: FacetColumnResultValues,
  columnType: ColumnTypeEnum | undefined,
  index: number,
  plotType: PlotType,
  accessToken?: string,
) {
  const colorPalette = getContrastColorPalette(
    // Use only the odd palette, using the same offset for all plots until palettes are improved.
    // See PORTALS-2916
    'odd', // index % 2 === 0 ? 'even' : 'odd',
    0, // Math.floor(index / 2),
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
      const response = await SynapseClient.getGroupHeadersBatch(filteredValues)
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
  const singleChartData: Plotly.Data = {
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
    // @ts-expect-error
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
  event: Plotly.PlotMouseEvent,
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
  // max height of .PlotsContainer row col* is 200px, so the effective plot height max is around 150 unless it's expanded
  if (height > maxHeight) {
    height = maxHeight
  }

  return {
    width: `${width}px`,
    height: `${height}px`,
  }
}

const FacetNavPanel: React.FunctionComponent<FacetNavPanelProps> = (
  props: FacetNavPanelProps,
): JSX.Element => {
  const {
    onHide,
    isModalView,
    applyChangesToGraphSlice,
    index,
    facetToPlot,
    plotType,
    onSetPlotType,
  } = props
  const { accessToken } = useSynapseContext()
  const isLoadingNewBundle = useAtomValue(isLoadingNewBundleAtom)
  const data = useAtomValue(tableQueryDataAtom)

  const { getColumnDisplayName } = useQueryVisualizationContext()

  const [showModal, setShowModal] = useState(false)

  const plotTitle = getColumnDisplayName(
    facetToPlot.columnName,
    facetToPlot.jsonPath,
  )

  const columnModel = useMemo(
    () => getCorrespondingColumnForFacet(facetToPlot, data?.columnModels ?? []),
    [data?.columnModels, facetToPlot],
  )
  const columnType = columnModel?.columnType as ColumnTypeEnum

  const { data: plotData } = useQuery({
    queryKey: [
      'extractPlotDataArray',
      facetToPlot,
      columnType,
      index,
      plotType,
      accessToken,
    ],

    queryFn: () =>
      extractPlotDataArray(
        facetToPlot,
        columnType,
        index,
        plotType,
        accessToken,
      ),

    enabled: !!facetToPlot,
  })

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

  if ((!data && isLoadingNewBundle) || !facetToPlot || !columnModel) {
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
          confirmButtonProps={{ children: 'Apply Filters' }}
          onConfirm={() => setShowModal(false)}
        />
        <div
          role="figure"
          className={`FacetNavPanel${isModalView ? '--expanded' : ''}`}
        >
          {!isModalView && (
            <PlotPanelHeader
              data={data}
              isLoadingNewBundle={isLoadingNewBundle}
              title={plotTitle}
              facetToPlot={facetToPlot}
              onHide={onHide}
              setShowModal={setShowModal}
            />
          )}
          {isModalView && (
            <>
              <div className={'bootstrap-4-backport SRC-labeled-dropdown'}>
                <span className="SRC-labeled-dropdown__label">
                  Filter All Data By
                </span>
                <EnumFacetFilter
                  facet={facetToPlot}
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
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '50% 50%',
            }}
            role="graphics-object"
            className="FacetNavPanel__body"
          >
            <SizeMe monitorHeight noPlaceholder>
              {({ size }) => (
                <div>
                  <Plot
                    key={`${facetToPlot.columnName}-${facetToPlot.jsonPath}-${plotType}-${size.width}`}
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
            <FacetPlotLegendList
              labels={plotData?.labels}
              colors={plotData?.colors}
              isExpanded={isModalView}
            />
          </Box>
        </div>
      </>
    )
  }
}

export default FacetNavPanel
