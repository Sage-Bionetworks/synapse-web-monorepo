import React, { createRef, useMemo, useState } from 'react'
import { useGetFullTableQueryResults } from '../../synapse-queries'
import { BUNDLE_MASK_QUERY_RESULTS } from '../../utils/SynapseConstants'
import hardcodedPhasesQueryResponseData, {
  phaseObservationIndex,
  phaseSpeciesIndex,
} from './phasesQueryResponseData'
import TimelinePhase from './TimelinePhase'
import { getColorPalette } from '../ColorGradient/ColorGradient'
import { Box } from '@mui/system'
import { ObservationCardSchema } from '../row_renderers/ObservationCard'
import {
  SQLOperator,
  getAdditionalFilters,
  parseEntityIdFromSqlStatement,
} from '../../utils/functions'
import TimelineLegendItem from './TimelineLegendItem'
import { Skeleton, Typography } from '@mui/material'
import TimelinePlotSpeciesSelector from './TimelinePlotSpeciesSelector'
import { getHeaderIndex } from '../../utils/functions/queryUtils'
import useRefDimensions from '../../utils/hooks/useRefDimensions'
import { ColumnMultiValueFunctionQueryFilter } from '@sage-bionetworks/synapse-types'
import { ColumnMultiValueFunction } from '@sage-bionetworks/synapse-types'

const OBSERVATION_PHASE_COLUMN_NAME = 'observationphase'
const OBSERVATION_TIME_COLUMN_NAME = 'observationtime'
const OBSERVATION_TIME_UNITS_COLUMN_NAME = 'observationtimeunits'
const OBSERVATION_SUBMITTER_NAME_COLUMN_NAME = 'observationsubmittername'
const OBSERVATION_TEXT_COLUMN_NAME = 'observationtext'
const OBSERVATION_TYPE_COLUMN_NAME = 'observationtype'
const OBSERVATION_SUBMITTER_USER_ID_COLUMN_NAME = 'synapseid'
const OBSERVATION_DOI_COLUMN_NAME = 'doi'

export type TimelinePlotProps = {
  sql: string
  searchParams?: Record<string, string>
  sqlOperator?: SQLOperator
  title?: string
  subTitle?: string
  defaultSpecies?: string //for test
}
export const TimelinePlot = ({
  sql,
  searchParams,
  sqlOperator,
  defaultSpecies,
  title,
  subTitle,
}: TimelinePlotProps) => {
  // Fetch the table data
  const eventsTableId = parseEntityIdFromSqlStatement(sql)
  const [species, setSpecies] = useState<string | undefined | null>(
    defaultSpecies,
  )
  const plotContainerRef = createRef<HTMLDivElement>()
  const dimensions = useRefDimensions(plotContainerRef)
  const queryFilters =
    getAdditionalFilters(undefined, searchParams, sqlOperator) ?? []
  const speciesFilter: ColumnMultiValueFunctionQueryFilter | undefined = species
    ? {
        columnName: 'species',
        concreteType:
          'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter',
        values: [species],
        function: ColumnMultiValueFunction.HAS,
      }
    : undefined
  const additionalFilters = [...queryFilters]
  if (speciesFilter) {
    additionalFilters.push(speciesFilter)
  }
  const eventTableQuery = useGetFullTableQueryResults(
    {
      entityId: eventsTableId,
      query: {
        sql: `${sql} WHERE observationTime IS NOT NULL`,
        sort: [
          {
            column: 'observationTime',
            direction: 'ASC',
          },
        ],
        additionalFilters: additionalFilters,
      },

      partMask: BUNDLE_MASK_QUERY_RESULTS,
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    },
    {
      enabled: !!species,
    },
  )

  const { data: eventsData, isLoading } = eventTableQuery

  // filter the phases query response data to the specific species
  const phaseData = useMemo(() => {
    if (species) {
      const phasesForTargetSpecies =
        hardcodedPhasesQueryResponseData.queryResult?.queryResults.rows.filter(
          row => {
            return row.values[phaseSpeciesIndex] == species
          },
        )
      return phasesForTargetSpecies
    } else return undefined
  }, [species])

  if (isLoading) {
    return <LoadingTimelinePlot />
  }
  const observationPhaseIndex = getHeaderIndex(
    OBSERVATION_PHASE_COLUMN_NAME,
    eventsData,
  )
  const observationTimeIndex = getHeaderIndex(
    OBSERVATION_TIME_COLUMN_NAME,
    eventsData,
  )
  const observationTimeUnitIndex = getHeaderIndex(
    OBSERVATION_TIME_UNITS_COLUMN_NAME,
    eventsData,
  )
  const observationSubmitterNameIndex = getHeaderIndex(
    OBSERVATION_SUBMITTER_NAME_COLUMN_NAME,
    eventsData,
  )
  const observationTextIndex = getHeaderIndex(
    OBSERVATION_TEXT_COLUMN_NAME,
    eventsData,
  )
  const observationDoiIndex = getHeaderIndex(
    OBSERVATION_DOI_COLUMN_NAME,
    eventsData,
  )

  const observationTypeIndex = getHeaderIndex(
    OBSERVATION_TYPE_COLUMN_NAME,
    eventsData,
  )
  const submitterUserIdIndex = getHeaderIndex(
    OBSERVATION_SUBMITTER_USER_ID_COLUMN_NAME,
    eventsData,
  )

  const schema: ObservationCardSchema = {
    observationSubmitterName: observationSubmitterNameIndex,
    synapseId: submitterUserIdIndex,
    observationType: observationTypeIndex,
    observationText: observationTextIndex,
    observationTime: observationTimeIndex,
    observationTimeUnits: observationTimeUnitIndex,
    doi: observationDoiIndex,
  }

  const widthPx =
    dimensions.width && phaseData ? dimensions.width / phaseData.length : 0
  const gridTemplateColumns = phaseData?.map(() => 'auto').join(' ')

  return (
    <>
      {species && (
        <>
          {title && <Typography variant="h2">{title}</Typography>}
          {subTitle && (
            <Typography variant="body1Italic" sx={{ margin: '10px 0px' }}>
              {subTitle}
            </Typography>
          )}
        </>
      )}
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Species selector */}
          <Box>
            {!defaultSpecies && (
              <TimelinePlotSpeciesSelector
                setSpecies={setSpecies}
                species={species}
                sql={sql}
                additionalFilters={queryFilters}
              />
            )}
          </Box>
          {/* Legend */}
          {phaseData && (
            <Box
              sx={{ display: 'flex', justifyContent: 'flex-end', gap: '25px' }}
            >
              {phaseData.map((phaseRow, index) => {
                const { colorPalette } = getColorPalette(index, 1)
                return (
                  <TimelineLegendItem
                    key={phaseRow.rowId}
                    color={colorPalette[0]}
                    phaseName={phaseRow.values[phaseObservationIndex]}
                  />
                )
              })}
            </Box>
          )}
        </Box>
        {/* Phase plots */}
        {species && phaseData && (
          <div ref={plotContainerRef}>
            <Box
              sx={{
                display: 'inline-grid',
                gridTemplateColumns,
                minWidth: dimensions.width,
                maxWidth: dimensions.width,
              }}
              className="forcePlotlyDefaultCursor"
            >
              {phaseData.map((phaseRow, index) => {
                const { colorPalette } = getColorPalette(index, 1)
                const phaseEventRows =
                  eventsData?.queryResult?.queryResults.rows.filter(row => {
                    return (
                      row.values[observationPhaseIndex] ==
                      phaseRow.values[phaseObservationIndex]
                    )
                  })

                return phaseEventRows ? (
                  <TimelinePhase
                    key={phaseRow.rowId}
                    name={phaseRow.values[phaseObservationIndex]!}
                    color={colorPalette[0]}
                    rowData={phaseEventRows}
                    schema={schema}
                    widthPx={widthPx}
                  />
                ) : (
                  <></>
                )
              })}
            </Box>
          </div>
        )}
      </Box>
    </>
  )
}

export const LoadingTimelinePlot = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
        <Skeleton height="45px" width="80px" />
        <Skeleton height="45px" width="80px" />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Skeleton height="150px" width="100%" />
      </Box>
    </Box>
  )
}

export default TimelinePlot
