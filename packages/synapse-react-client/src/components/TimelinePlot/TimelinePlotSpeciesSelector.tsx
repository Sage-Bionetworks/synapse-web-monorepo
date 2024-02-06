import React from 'react'
import { useGetFullTableQueryResults } from '../../synapse-queries'
import { BUNDLE_MASK_QUERY_RESULTS } from '../../utils/SynapseConstants'
import { Box } from '@mui/system'
import { parseEntityIdFromSqlStatement } from '../../utils/functions'
import { InputLabel, Select, MenuItem } from '@mui/material'
import { StyledFormControl } from '../styled'
import { QueryFilter } from '@sage-bionetworks/synapse-types'

export type TimelinePlotSpeciesSelectorProps = {
  sql: string
  additionalFilters?: QueryFilter[]
  species?: string | null
  setSpecies: React.Dispatch<React.SetStateAction<string | null | undefined>>
}
export const TimelinePlotSpeciesSelector = ({
  sql,
  additionalFilters,
  species,
  setSpecies,
}: TimelinePlotSpeciesSelectorProps) => {
  const eventsTableId = parseEntityIdFromSqlStatement(sql)
  // Fetch the species
  const eventTableQuery = useGetFullTableQueryResults({
    entityId: eventsTableId,
    query: {
      sql: `SELECT distinct unnest(species) FROM ${eventsTableId} WHERE species IS NOT NULL AND observationTime IS NOT NULL GROUP BY species`,
      additionalFilters: additionalFilters,
    },
    partMask: BUNDLE_MASK_QUERY_RESULTS,
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  })

  const { data: speciesData, isLoading } = eventTableQuery
  const rows = speciesData?.queryResult?.queryResults?.rows
  const defaultSpecies = rows && rows.length > 0 ? rows[0].values[0] : undefined
  if (species == undefined && defaultSpecies != undefined) {
    setSpecies(defaultSpecies)
  }
  // Hide if loading, there are no rows, or there's only 1 species option
  if (isLoading || !rows || rows.length < 2) {
    return <></>
  }

  return (
    <Box>
      <StyledFormControl>
        <InputLabel>Species</InputLabel>
        <Select
          sx={{ marginLeft: '2px', marginBottom: '2px' }}
          value={species}
          label="Species"
          onChange={event => {
            setSpecies(event.target.value)
          }}
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
    </Box>
  )
}
export default TimelinePlotSpeciesSelector
