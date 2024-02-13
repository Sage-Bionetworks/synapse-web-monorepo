import React, { useEffect, useState } from 'react'
import Plotly from 'plotly.js-basic-dist'
import createPlotlyComponent from 'react-plotly.js/factory'
import { SizeMe } from 'react-sizeme'
import {
  ColumnTypeEnum,
  FacetColumnResult,
  FacetColumnResultValueCount,
  FacetColumnResultValues,
} from '@sage-bionetworks/synapse-types'
import {
  extractPlotDataArray,
  getPlotStyle,
  GraphData,
} from '../widgets/facet-nav/FacetNavPanel'
import { getFacets } from '../widgets/facet-nav/useFacetPlots'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import { ShowMore } from '../row_renderers/utils'
import {
  Box,
  Button,
  Divider,
  Paper,
  Skeleton,
  Typography,
} from '@mui/material'
import { FacetPlotLegendTable } from '../widgets/facet-nav/FacetPlotLegendTable'
import {
  FACET_PLOTS_CARD_CLASSNAME,
  FACET_PLOTS_CARD_PLOT_CONTAINER_CLASSNAME,
  FACET_PLOTS_CARD_TITLE_CONTAINER_CLASSNAME,
  FacetPlotsCardPlotContainer,
  FacetPlotsCardTitleContainer,
} from './FacetPlotsCardGrid'
import { SkeletonParagraph, SkeletonTable } from '../Skeleton'
import { times } from 'lodash-es'
import { useAtomValue } from 'jotai'
import {
  isLoadingNewBundleAtom,
  tableQueryDataAtom,
} from '../QueryWrapper/QueryWrapper'

const Plot = createPlotlyComponent(Plotly)

export type FacetPlotsCardProps = {
  title?: string
  description?: string
  facetsToPlot?: string[]
  detailsPagePath?: string
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
const FacetPlotsCard: React.FunctionComponent<FacetPlotsCardProps> = ({
  title,
  description,
  facetsToPlot,
  detailsPagePath,
}: FacetPlotsCardProps): JSX.Element => {
  const { accessToken } = useSynapseContext()
  const isLoadingNewBundle = useAtomValue(isLoadingNewBundleAtom)
  const data = useAtomValue(tableQueryDataAtom)

  const { getColumnDisplayName } = useQueryVisualizationContext()
  const [facetPlotDataArray, setFacetPlotDataArray] = useState<GraphData[]>([])
  const [facetDataArray, setFacetDataArray] = useState<FacetColumnResult[]>([])
  const [selectedFacetValue, setSelectedFacetValue] = useState<string>('')

  useEffect(() => {
    if (!facetsToPlot || !data) {
      return
    } else {
      const getColumnType = (
        facetToPlot: FacetColumnResult,
      ): ColumnTypeEnum | undefined =>
        data?.columnModels!.find(
          columnModel => columnModel.name === facetToPlot.columnName,
        )?.columnType as ColumnTypeEnum

      const facetsDataToPlot = getFacets(data, facetsToPlot)
      setFacetDataArray(facetsDataToPlot)
      Promise.all(
        facetsDataToPlot.map(async (item, index) => {
          const plotData = await extractPlotDataArray(
            item as FacetColumnResultValues,
            getColumnType(item),
            index + 1, //individual plot rgbIndex
            'PIE',
            accessToken,
          )
          return plotData
        }),
      ).then(newPlotData => setFacetPlotDataArray(newPlotData))
      // If we are showing a facet selection based card, then set the selectedFacetValue.  For example, facet column "study" with value "ROSMAP"
      const selectedFacet: FacetColumnResultValueCount | undefined = data
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
        setSelectedFacetValue(selectedFacet?.value)
      }
    }
  }, [facetsToPlot, data, accessToken])

  if (
    isLoadingNewBundle ||
    !facetPlotDataArray ||
    !facetDataArray ||
    facetDataArray.length === 0
  ) {
    return <LoadingCard numPlots={(facetsToPlot ?? []).length} />
  } else {
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
              >
                Explore {selectedFacetValue}
              </Button>
            </Box>
          )}
        </FacetPlotsCardTitleContainer>

        {/* create a plot for every facet to be plotted */}
        {facetPlotDataArray.map((plotData, index) => {
          return (
            <React.Fragment key={index}>
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
                  <SizeMe monitorHeight noPlaceholder>
                    {({ size }) => (
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Plot
                          key={`${facetsToPlot![index]}-${size.width!}`}
                          layout={layout}
                          data={plotData?.data ?? []}
                          style={getPlotStyle(size.width, 'PIE', 150)}
                          config={{ displayModeBar: false }}
                        />
                      </Box>
                    )}
                  </SizeMe>
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
            </React.Fragment>
          )
        })}
      </Paper>
    )
  }
}

export default FacetPlotsCard
