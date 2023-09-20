import React, { useState, useEffect } from 'react'
import { useGetFullTableQueryResults } from '../../synapse-queries'
import { BUNDLE_MASK_QUERY_RESULTS } from '../../utils/SynapseConstants'
import { Box } from '@mui/system'
import {
  SQLOperator,
  getAdditionalFilters,
  parseEntityIdFromSqlStatement,
} from '../../utils/functions'
import { InputLabel, Select, MenuItem } from '@mui/material'
import { StyledFormControl } from '../styled'
import TimelinePlotWithSpecies from './TimelinePlotWithSpecies'

export type TimelinePlotProps = {
  sql: string
  searchParams?: Record<string, string>
  sqlOperator?: SQLOperator
}
export const TimelinePlot = ({
  sql,
  searchParams,
  sqlOperator,
}: TimelinePlotProps) => {
  const eventsTableId = parseEntityIdFromSqlStatement(sql)
  const [species, setSpecies] = useState<string | undefined | null>()
  const queryFilters = getAdditionalFilters(
    eventsTableId,
    searchParams,
    sqlOperator,
  )
  // Fetch the species
  const eventTableQuery = useGetFullTableQueryResults({
    entityId: eventsTableId,
    query: {
      sql: `SELECT species FROM ${eventsTableId} WHERE species IS NOT null GROUP BY species`,
      additionalFilters: queryFilters,
    },
    partMask: BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  })

  const { data: speciesData, isLoading } = eventTableQuery
  const rows = speciesData?.queryResult?.queryResults?.rows

  useEffect(() => {
    if (rows) {
      setSpecies(rows[0].values[0])
    }
  }, [rows])

  if (isLoading || !rows || rows.length == 0) {
    return <></>
  }

  return (
    <Box>
      <StyledFormControl>
        <InputLabel>Species</InputLabel>
        <Select
          value={species}
          defaultValue={rows[0].values[0]}
          label="Species"
          onChange={event => setSpecies(event.target.value)}
        >
          {rows?.map(row => {
            const species = row.values[0]!
            return (
              <MenuItem key={species} value={species}>
                {species}
              </MenuItem>
            )
          })}
        </Select>
      </StyledFormControl>
      {species && (
        <TimelinePlotWithSpecies
          observationsSql={sql}
          species={species}
          additionalFilters={queryFilters}
        />
      )}
    </Box>
  )
}
export default TimelinePlot
