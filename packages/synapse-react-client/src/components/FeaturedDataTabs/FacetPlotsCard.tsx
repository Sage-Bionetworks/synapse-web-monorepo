import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import {
  Box,
  Button,
  Divider,
  Paper,
  Skeleton,
  Typography,
} from '@mui/material'
import {
  ColumnTypeEnum,
  FacetColumnResult,
  FacetColumnResultValueCount,
  FacetColumnResultValues,
} from '@sage-bionetworks/synapse-types'
import { useSuspenseQuery } from '@tanstack/react-query'
import { times } from 'lodash-es'
import Plotly from 'plotly.js-basic-dist'
import { Fragment, Suspense, useMemo } from 'react'
import Plot from '../Plot/Plot'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import { useSuspenseGetQueryMetadata } from '../QueryWrapper/useGetQueryMetadata'
import { ShowMore } from '../row_renderers/utils'
import { SkeletonParagraph, SkeletonTable } from '../Skeleton'
import {
  extractPlotDataArray,
  getPlotStyle,
  PlotType,
} from '../widgets/facet-nav/FacetNavPanel'
import { FacetPlotLegendTable } from '../widgets/facet-nav/FacetPlotLegendTable'
import { getFacets } from '../widgets/facet-nav/useFacetPlots'
import {
  FACET_PLOTS_CARD_CLASSNAME,
  FACET_PLOTS_CARD_PLOT_CONTAINER_CLASSNAME,
  FACET_PLOTS_CARD_TITLE_CONTAINER_CLASSNAME,
  FacetPlotsCardPlotContainer,
  FacetPlotsCardTitleContainer,
} from './FacetPlotsCardGrid'
import { useMeasure } from '@react-hookz/web'

export type FacetPlotsCardProps = {
  title?: string
  description?: string
  facetsToPlot?: string[]
  detailsPagePath?: string
  plotType?: PlotType
}

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

function LoadingCard(props: { numPlots: number }) {
  const { numPlots } = props
  return (
    <Paper className={FACET_PLOTS_CARD_CLASSNAME}>
      <FacetPlotsCardTitleContainer
        className={FACET_PLOTS_CARD_TITLE_CONTAINER_CLASSNAME}
      >
        <Skeleton width={'60%'} height={'24px'} />

        <SkeletonParagraph numRows={5} />

        <Skeleton width={'40%'}>
          <Button variant={'contained'}>Explore</Button>
        </Skeleton>
      </FacetPlotsCardTitleContainer>
      {times(numPlots).map(index => (
        <FacetPlotsCardPlotContainer
          key={index}
          className={FACET_PLOTS_CARD_PLOT_CONTAINER_CLASSNAME}
          sx={{
            py: 3,
            gridRow: `plot${index}`,
          }}
        >
          <Skeleton width={'100%'} height={'300px'} />
          <SkeletonTable numRows={4} numCols={2} />
        </FacetPlotsCardPlotContainer>
      ))}
    </Paper>
  )
}

function FacetPlotsCard(props: FacetPlotsCardProps) {
  const {
    title,
    description,
    facetsToPlot,
    detailsPagePath,
    plotType = 'PIE',
  } = props
  const { accessToken } = useSynapseContext()
  const { data: queryMetadata } = useSuspenseGetQueryMetadata()
  const { getColumnDisplayName } = useQueryVisualizationContext()
  const [plotContainerMeasurements, plotContainerRef] = useMeasure()

  const facetDataArray = useMemo(() => {
    if (!facetsToPlot) {
      return []
    }

    return getFacets(queryMetadata, facetsToPlot)
  }, [facetsToPlot, queryMetadata])

  const currentLayout: Partial<Plotly.Layout> = useMemo(() => {
    return {
      ...layout,
      barmode: plotType === 'STACKED_HORIZONTAL_BAR' ? 'stack' : undefined,
    }
  }, [plotType])
  const maxPlotHeight = plotType === 'STACKED_HORIZONTAL_BAR' ? 50 : 150
  const { data: facetPlotDataArray } = useSuspenseQuery({
    queryKey: ['facetPlotDataArray', facetsToPlot, facetDataArray],
    queryFn: async () => {
      if (!facetsToPlot) {
        return []
      }

      const getColumnType = (
        facetToPlot: FacetColumnResult,
      ): ColumnTypeEnum | undefined =>
        queryMetadata.columnModels!.find(
          columnModel => columnModel.name === facetToPlot.columnName,
        )?.columnType as ColumnTypeEnum

      return Promise.all(
        facetDataArray.map(async (item, index) => {
          const plotData = await extractPlotDataArray(
            item as FacetColumnResultValues,
            getColumnType(item),
            index + 1, //individual plot rgbIndex
            plotType,
            accessToken,
          )
          return plotData
        }),
      )
    },
  })

  const selectedFacetValue = useMemo(() => {
    if (!facetsToPlot) {
      return ''
    }

    // If we are showing a facet selection based card, then set the selectedFacetValue.  For example, facet column "study" with value "ROSMAP"
    const selectedFacet: FacetColumnResultValueCount | undefined = queryMetadata
      ?.facets!.map(item => {
        const facetValues: FacetColumnResultValueCount[] = (
          item as FacetColumnResultValues
        ).facetValues
        if (facetValues) {
          const filteredFacetValues: FacetColumnResultValueCount[] =
            facetValues.filter(facetValue => {
              return facetValue.isSelected
            })
          return filteredFacetValues.length > 0
            ? filteredFacetValues[0]
            : undefined
        } else {
          return undefined
        }
      })
      .filter(x => x !== undefined)[0]

    if (selectedFacet && selectedFacet.value) {
      return selectedFacet?.value
    }
    return ''
  }, [facetsToPlot, queryMetadata?.facets])

  const isShowingMultiplePlots = facetPlotDataArray.length > 1
  const cardTitle =
    title ??
    (isShowingMultiplePlots
      ? selectedFacetValue
      : getColumnDisplayName(facetDataArray[0].columnName))
  return (
    <Paper className={FACET_PLOTS_CARD_CLASSNAME} sx={{ overflow: 'hidden' }}>
      <FacetPlotsCardTitleContainer
        className={FACET_PLOTS_CARD_TITLE_CONTAINER_CLASSNAME}
      >
        <Typography variant={'headline1'}>{cardTitle}</Typography>
        {description && (
          <Typography variant={'body1'} sx={{ color: 'grey.700', my: 2 }}>
            <ShowMore summary={description} maxCharacterCount={200} />
          </Typography>
        )}

        {detailsPagePath && selectedFacetValue && (
          <Box sx={{ my: 2 }}>
            <Button
              variant={'contained'}
              href={detailsPagePath}
              color={'secondary'}
              sx={theme => ({
                [theme.breakpoints.down('sm')]: { width: '100%' },
              })}
            >
              Explore {selectedFacetValue}
            </Button>
          </Box>
        )}
      </FacetPlotsCardTitleContainer>

      {/* create a plot for every facet to be plotted */}
      {facetPlotDataArray.map((plotData, index) => {
        return (
          <Fragment key={index}>
            <FacetPlotsCardPlotContainer
              className={FACET_PLOTS_CARD_PLOT_CONTAINER_CLASSNAME}
              sx={{
                pt: index === 0 ? 5 : 0,
                gridRow: `plot${index}`,
              }}
              key={index}
            >
              {index != 0 && <Divider sx={{ mt: 2, mb: 4 }} />}
              <Box sx={{ minHeight: '130px' }}>
                <Box
                  ref={plotContainerRef}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Plot
                    key={`${facetsToPlot![index]}-${
                      plotContainerMeasurements?.width
                    }`}
                    layout={currentLayout}
                    data={plotData?.data ?? []}
                    style={getPlotStyle(
                      plotContainerMeasurements?.width,
                      plotType,
                      maxPlotHeight,
                    )}
                    config={{ displayModeBar: false }}
                  />
                </Box>
                <Box sx={{ mt: 4, width: '100%' }}>
                  <FacetPlotLegendTable
                    facetName={getColumnDisplayName(
                      facetDataArray[index].columnName,
                    )}
                    labels={plotData?.labels}
                    colors={plotData?.colors}
                    isExpanded={false}
                    linkToFullQuery={detailsPagePath}
                  />
                </Box>
              </Box>
            </FacetPlotsCardPlotContainer>
          </Fragment>
        )
      })}
    </Paper>
  )
}

export default function FacetPlotsCardWithSuspense(props: FacetPlotsCardProps) {
  return (
    <Suspense
      fallback={<LoadingCard numPlots={(props.facetsToPlot ?? []).length} />}
    >
      <FacetPlotsCard {...props} />
    </Suspense>
  )
}
