import React from 'react'
import { useGetFullTableQueryResults } from '../../synapse-queries'
import { BUNDLE_MASK_QUERY_RESULTS } from '../../utils/SynapseConstants'
import hardcodedPhasesQueryResponseData, {
  phaseObservationIndex,
  phaseObservationTimeMaxIndex,
  phaseObservationTimeMaxUnitsIndex,
  phaseSpeciesIndex,
} from './phasesQueryResponseData'
import TimelinePhase from './TimelinePhase'
import getColorPalette from '../ColorGradient/ColorGradient'

const OBSERVATION_PHASE_COLUMN_NAME = 'observationphase'
const OBSERVATION_ID_COLUMN_NAME = 'observationid'
const OBSERVATION_TIME_COLUMN_NAME = 'observationtime'
const OBSERVATION_TIME_UNITS_COLUMN_NAME = 'observationtimeunits'

type TimelinePlotProps = {
  species: string
  resourceId: string
  eventsTableId: string
}
export type ObservationEvent = {
  id: string | null
  time: number | null
  timeUnit: string | null
}
const TimelinePlot = ({
  species,
  resourceId,
  eventsTableId,
}: TimelinePlotProps) => {
  // Fetch the table data
  const eventTableQuery = useGetFullTableQueryResults({
    entityId: eventsTableId,
    query: {
      sql: `SELECT * FROM ${eventsTableId} WHERE resourceId = '${resourceId}' and species = '${species}'`,
    },
    partMask: BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  })

  const { data: eventsData, isLoading } = eventTableQuery

  if (isLoading) {
    return <></>
  }
  const observationIdIndex =
    eventsData?.queryResult?.queryResults.headers.findIndex(
      header => header.name.toLowerCase() === OBSERVATION_ID_COLUMN_NAME,
    )!
  const observationPhaseIndex =
    eventsData?.queryResult?.queryResults.headers.findIndex(
      header => header.name.toLowerCase() === OBSERVATION_PHASE_COLUMN_NAME,
    )!
  const observationTimeIndex =
    eventsData?.queryResult?.queryResults.headers.findIndex(
      header => header.name.toLowerCase() === OBSERVATION_TIME_COLUMN_NAME,
    )!
  const observationTimeUnitIndex =
    eventsData?.queryResult?.queryResults.headers.findIndex(
      header =>
        header.name.toLowerCase() === OBSERVATION_TIME_UNITS_COLUMN_NAME,
    )!

  // filter the phases query response data to the specific species
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
  return (
    <>
      {phasesForTargetSpecies.map((phaseRow, index) => {
        const { colorPalette } = getColorPalette(index, 1)
        const phaseEventRows =
          eventsData?.queryResult?.queryResults.rows.filter(row => {
            return (
              row.values[observationPhaseIndex] ==
              phaseRow.values[phaseObservationIndex]
            )
          })
        // transform into ObservationEvents and create a new TimelinePhase
        const observationEvents = phaseEventRows?.map(row => {
          const observationEvent: ObservationEvent = {
            id: row.values[observationIdIndex],
            time: parseInt(row.values[observationTimeIndex]!),
            timeUnit: row.values[observationTimeUnitIndex],
          }
          return observationEvent
        })
        return (
          observationEvents?.length &&
          observationEvents?.length > 0 && (
            <TimelinePhase
              key={phaseRow.rowId}
              name={phaseRow.values[phaseObservationIndex]!}
              color={colorPalette[0]}
              timeMax={parseInt(phaseRow.values[phaseObservationTimeMaxIndex]!)}
              timeUnits={phaseRow.values[phaseObservationTimeMaxUnitsIndex]!}
              observationEvents={observationEvents}
            />
          )
        )
      })}
    </>
  )
}

export default TimelinePlot
