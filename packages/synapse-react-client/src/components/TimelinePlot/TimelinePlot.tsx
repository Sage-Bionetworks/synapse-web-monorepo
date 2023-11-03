import React, { createRef, useState } from 'react'
import { useGetFullTableQueryResults } from '../../synapse-queries'
import { BUNDLE_MASK_QUERY_RESULTS } from '../../utils/SynapseConstants'
import hardcodedPhasesQueryResponseData, {
  phaseObservationIndex,
  phaseSpeciesIndex,
} from './phasesQueryResponseData'
import TimelinePhase from './TimelinePhase'
import getColorPalette from '../ColorGradient/ColorGradient'
import { Box } from '@mui/system'
import {
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
  Row,
} from '@sage-bionetworks/synapse-types'
import { ObservationCardSchema } from '../row_renderers/ObservationCard'
import {
  SQLOperator,
  getAdditionalFilters,
  parseEntityIdFromSqlStatement,
} from '../../utils/functions'
import TimelineLegendItem from './TimelineLegendItem'
import { Skeleton } from '@mui/material'
import TimelinePlotSpeciesSelector from './TimelinePlotSpeciesSelector'
import NoContentAvailable from '../SynapseTable/NoContentAvailable'
import { getHeaderIndex } from '../../utils/functions/queryUtils'
import useRefDimensions from '../../utils/hooks/useRefDimensions'

const OBSERVATION_PHASE_COLUMN_NAME = 'phase'
const OBSERVATION_TIME_COLUMN_NAME = 'time'
const OBSERVATION_TIME_UNITS_COLUMN_NAME = 'timeunits'
const OBSERVATION_SUBMITTER_NAME_COLUMN_NAME = 'submittername'
const OBSERVATION_TEXT_COLUMN_NAME = 'text'
const OBSERVATION_TYPE_COLUMN_NAME = 'tag'
const OBSERVATION_SUBMITTER_USER_ID_COLUMN_NAME = 'submitteruserid'
const OBSERVATION_DOI_COLUMN_NAME = 'doi'

export type TimelinePlotProps = {
  sql: string
  searchParams?: Record<string, string>
  sqlOperator?: SQLOperator
  defaultSpecies?: string //for test
}
export const TimelinePlot = ({
  sql,
  searchParams,
  sqlOperator,
  defaultSpecies,
}: TimelinePlotProps) => {
  // Fetch the table data
  const eventsTableId = parseEntityIdFromSqlStatement(sql)
  const [species, setSpecies] = useState<string | undefined | null>(
    defaultSpecies,
  )
  const plotContainerRef = createRef<HTMLDivElement>()
  const dimensions = useRefDimensions(plotContainerRef)
  const queryFilters =
    getAdditionalFilters(eventsTableId, searchParams, sqlOperator) ?? []
  const speciesFilter: ColumnSingleValueQueryFilter | undefined = species
    ? {
        columnName: 'species',
        concreteType:
          'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
        values: [species],
        operator: ColumnSingleValueFilterOperator.EQUAL,
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
    submitterName: observationSubmitterNameIndex,
    submitterUserId: submitterUserIdIndex,
    tag: observationTypeIndex,
    text: observationTextIndex,
    time: observationTimeIndex,
    timeUnits: observationTimeUnitIndex,
    doi: observationDoiIndex,
  }

  // filter the phases query response data to the specific species
  let phaseData: Row[] = []
  if (species) {
    const phasesForTargetSpecies =
      hardcodedPhasesQueryResponseData.queryResult?.queryResults.rows.filter(
        row => {
          return row.values[phaseSpeciesIndex] == species
        },
      )
    // then walk through the phases and create a plot for each (iff event data exists for that phase!)

    if (!phasesForTargetSpecies || phasesForTargetSpecies.length == 0) {
      return <></>
    }
    phaseData = phasesForTargetSpecies
  }
  if (species === null) {
    return <NoContentAvailable />
  }

  const widthPx = dimensions.width ? dimensions.width / phaseData.length : 0
  const gridTemplateColumns = phaseData.map(() => 'auto').join(' ')

  return (
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
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '25px' }}>
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
      </Box>
      {/* Phase plots */}
      {species && (
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
              return (
                <TimelinePhase
                  key={phaseRow.rowId}
                  name={phaseRow.values[phaseObservationIndex]!}
                  color={colorPalette[0]}
                  rowData={phaseEventRows!}
                  schema={schema}
                  widthPx={widthPx}
                />
              )
            })}
          </Box>
        </div>
      )}
    </Box>
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
