/* eslint-disable @typescript-eslint/no-explicit-any */
import LargeButton from '@/components/styled/LargeButton'
import SynapseClient from '@/synapse-client'
import { SynapseConstants } from '@/utils'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import { parseEntityIdFromSqlStatement } from '@/utils/functions/SqlFunctions'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { ReactComponent as DiagonalLinePattern } from '@/assets/illustrations/diagonalLinePattern.svg'

import UpSetJS, {
  extractSets,
  generateCombinations,
  ISet,
  ISetCombinations,
  ISetLike,
  ISets,
  UpSetFontSizes,
  UpSetSelectionProps,
} from '@upsetjs/react'
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react'
import { getColorPalette } from '../ColorGradient/ColorGradient'
import { ErrorBanner } from '../error/ErrorBanner'
import loadingScreen from '../LoadingScreen/LoadingScreen'
import { Box, SxProps, useTheme } from '@mui/material'
import { useMeasure } from '@react-hookz/web'

export type UpsetPlotProps = {
  sql: string // first column should contain values, second column should contain a single set value.  ie. SELECT distinct individualID, assay FROM syn20821313
  rgbIndex?: number // color plot based on portal
  customPlotColor?: string
  selectionOpacity?: number
  variant?: 'ampals'
  maxBarCount?: number // will show all if not set
  setName?: string // instead of "Set Size"
  combinationName?: string // instead of "Intersection Size"
  height?: number
  summaryLinkText?: string // text for home page link below chart
  summaryLink?: string // url for home page link below chart
} & Pick<UpSetSelectionProps, 'onClick'>

export type UpsetPlotData = {
  sets: ISets<any>
  combinations: ISetCombinations<any>
}
/**
 * Upset plot.  See https://medium.com/@sgratzl/upset-js-javascript-tutorial-1b84bfd6896d
 * Currently this is driven by a Synapse Table/View, but we may want to alter it to read in the data from a flat file instead.
 */
export function UpsetPlot({
  sql,
  variant,
  rgbIndex,
  maxBarCount,
  setName,
  combinationName,
  height = 700,
  summaryLinkText,
  summaryLink,
  onClick,
  customPlotColor,
  selectionOpacity,
}: UpsetPlotProps) {
  const { accessToken } = useSynapseContext()
  const [isLoading, setIsLoading] = useState<boolean>()
  const [data, setData] = useState<UpsetPlotData>()
  const [error, setError] = useState<string>()
  const [selection, setSelection] = useState(null as ISetLike<any> | null)
  const theme = useTheme()

  const [plotContainerMeasurements, plotContainerRef] = useMeasure()

  const variantStyles: Record<string, SxProps> = {
    default: {
      'text[class^="sChartTextStyle-upset-"], text[class^= "cChartTextStyle-upset-"]':
        {
          textTransform: 'uppercase',
        },
    },
    ampals: {
      width: '100%',
      '& .selectionHint-upset-': {
        stroke: 'transparent !important',
      },
      '& [class^="selectionHint-upset-"]': {
        stroke: 'transparent !important',
      },
      '& g[class^="interactive-upset-"]:hover line[class^="upsetLine-"]': {
        stroke: theme.palette.primary.main,
        strokeWidth: '4px',
        strokeOpacity: 1,
      },
      '& g[class^="interactive-upset-"]:hover circle[class^="fillNotMember-upset-"]':
        {
          opacity: 0.2,
        },
      '& line[class^="upsetLine-"]': {
        strokeOpacity: 0,
      },
      '& rect[class^="fillPrimary-upset-"]': {
        fill: 'url(#diagonalLinePattern)',
        stroke: theme.palette.grey[700],
        strokeWidth: 2,
      },
      '& circle[class^="fillNotMember-upset-"]': {
        stroke: theme.palette.grey[600],
        strokeWidth: 2,
      },
      '& text[class^="sChartTextStyle-upset-"], & text[class^="cChartTextStyle-upset-"]':
        {
          fontWeight: 700,
          fill: theme.palette.grey[800],
          lineHeight: '150%',
        },
      '& text[class^="cChartTextStyle-upset-"]': {
        transform: 'translate(-60px, 190px) rotate(-90deg)',
      },
      '& text[class^="sChartTextStyle-upset-"]': {
        transform: 'translate(-10px, 100px) rotate(-90deg)',
      },
    },
  }

  let plotColor: string, selectionColor: string
  if (rgbIndex != null) {
    const { colorPalette } = getColorPalette(rgbIndex, 2)
    plotColor = colorPalette[0]
    selectionColor = colorPalette[0]
  } else {
    plotColor = theme.palette.grey[700]
    selectionColor = customPlotColor || theme.palette.primary.main
  }

  const updateFontSizes: UpSetFontSizes = {
    setLabel: '14px',
  }

  useEffect(() => {
    let isCancelled: boolean = false
    const getPlotData = async () => {
      setIsLoading(true)
      try {
        const entityId = parseEntityIdFromSqlStatement(sql)
        const partMask = SynapseConstants.BUNDLE_MASK_QUERY_RESULTS
        const queryRequest: QueryBundleRequest = {
          partMask,
          concreteType:
            'org.sagebionetworks.repo.model.table.QueryBundleRequest',
          entityId,
          query: {
            sql,
          },
        }
        const { queryResult } = await SynapseClient.getFullQueryTableResults(
          queryRequest,
          accessToken,
        )
        // transform query data into plot data, and store.
        // collect all values for each key
        const keyValuesMap: Record<string, { name: string; sets: string[] }> =
          {}
        // keyValuesMap looks like { 'A': {name: 'A', sets: ['S1', 'S2'] }, 'B': { name: 'B', sets: ['S1'] }, ... }
        // It's a little redundant, but makes the next step much easier.

        const caseInsensitiveSetNames: Record<string, string> = {}
        // caseInsensitiveSetNames looks like { 'RNASEQ': 'rnaSeq', 'NOMe-SEQ': 'NOMe-seq'}.

        for (const row of queryResult?.queryResults.rows ?? []) {
          for (let j = 1; j < row.values.length; j += 1) {
            const rowValues: string[] = row.values as string[]
            if (rowValues.some(value => value === null)) {
              console.warn('Row has null value(s) when no nulls expected')
            }

            const key = rowValues[0]
            let newValue = rowValues[j]
            keyValuesMap[key] = keyValuesMap[key] || {}
            keyValuesMap[key].name = key

            keyValuesMap[key].sets = keyValuesMap[key].sets || []
            const found = keyValuesMap[key].sets.find((v: any) => v == newValue)
            if (!found && newValue) {
              if (caseInsensitiveSetNames[newValue.toUpperCase()]) {
                newValue = caseInsensitiveSetNames[newValue.toUpperCase()]
              } else {
                caseInsensitiveSetNames[newValue.toUpperCase()] = newValue
              }
              keyValuesMap[key].sets.push(newValue)
            }
          }
        }
        // now create the expected elems set
        const elems = Object.values(keyValuesMap)
        // elems looks like [{ name: 'A', sets: ['S1', 'S2'] }, { name: 'B', sets: ['S1'] }, ...]
        const sets = extractSets(elems)
        // PORTALS-1673: sort by assay name
        const sortedSets = (sets as ISet[]).sort((a, b) => {
          return ('' + b.name).localeCompare(a.name)
        })

        const combinations = generateCombinations(sortedSets, {
          type: 'intersection',
          min: 1,
          limit: maxBarCount,
          order: 'cardinality:desc',
        })
        if (!isCancelled) {
          setData({ sets, combinations })
          setIsLoading(false)
        }
      } catch (err) {
        if (!isCancelled) {
          setIsLoading(false)
          let errorMessage = err['reason']
          if (!errorMessage) {
            console.error(err)
            errorMessage = 'Error retrieving data'
          }
          setError(errorMessage)
        }
      }
    }
    getPlotData()
    return () => {
      isCancelled = true
    }
  }, [sql, accessToken])

  return (
    <>
      {isLoading && loadingScreen}
      {!isLoading && data && (
        <>
          {variantStyles['ampals'] && (
            // Render DiagonalLinePattern so UpsetPlot can use `fill: url(#diagonalLinePattern)`.
            // The SVG element must be added to the DOM so we can reference its ID (which is set in the SVG file) in the `fill` style
            // Ideally, we would reference the asset URL imported by Vite, but this isn't working.
            <Box
              sx={{
                '& path': {
                  stroke: '#D9D9D9 !important',
                },
                width: 0,
                height: 0,
                position: 'absolute',
              }}
            >
              <DiagonalLinePattern />
            </Box>
          )}
          <Box
            className="UpsetPlot"
            sx={variant ? variantStyles[variant] : variantStyles['default']}
            ref={plotContainerRef}
          >
            <UpSetJS
              sets={data.sets}
              combinations={data.combinations}
              width={plotContainerMeasurements?.width || 800}
              height={height}
              onHover={setSelection}
              onClick={onClick}
              selection={selection}
              color={plotColor}
              selectionColor={selectionColor}
              hoverHintColor={'orange'}
              hasSelectionOpacity={selectionOpacity ? selectionOpacity : 0.3}
              // alternatingBackgroundColor={false}
              setName={setName}
              combinationName={combinationName}
              fontFamily="'DM Sans', sans-serif"
              fontSizes={updateFontSizes}
              exportButtons={false}
              notMemberColor="transparent"
            />
            {summaryLink && summaryLinkText && (
              <div className="UpsetPlot__summary">
                <LargeButton
                  color="secondary"
                  variant="contained"
                  href={summaryLink}
                >
                  {summaryLinkText}
                </LargeButton>
              </div>
            )}
          </Box>
        </>
      )}
      <ErrorBanner error={error} />
    </>
  )
}

export default UpsetPlot
