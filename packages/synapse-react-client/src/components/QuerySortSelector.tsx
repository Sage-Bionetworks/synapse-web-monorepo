import Typography from '@mui/material/Typography'
import { SortDirection } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import Select from 'react-select'
import { SortConfiguration } from './CardContainerLogic'
import { useQueryContext } from './QueryContext/QueryContext'
import { useQueryVisualizationContext } from './QueryVisualizationWrapper'
import { findValueOption } from './JsonSchemaForm/widgets/SelectWidget'

export type QuerySortSelectorProps = {
  sortConfig: SortConfiguration
}

export type EnumOption = { value: string; label: string }

function QuerySortSelector({ sortConfig }: QuerySortSelectorProps) {
  const { defaultColumn, defaultDirection, sortableColumns } = sortConfig
  const { executeQueryRequest } = useQueryContext()
  const { getColumnDisplayName } = useQueryVisualizationContext()
  const [sortColumn, setSortColumn] = useState<string | undefined>(
    defaultColumn,
  )
  const [sortDirection, setSortDirection] = useState(defaultDirection)

  const enumOptions: EnumOption[] = sortableColumns.map(sortableColumn => {
    return {
      value: sortableColumn,
      label: getColumnDisplayName(sortableColumn),
    }
  })

  const onChange = (value?: string) => {
    executeQueryRequest(request => {
      let newSortDirection: SortDirection = 'ASC'
      if (value === sortColumn) {
        // flip sort direction
        newSortDirection = sortDirection === 'ASC' ? 'DESC' : 'ASC'
      }

      request.query.sort = value
        ? [
            {
              column: value,
              direction: newSortDirection,
            },
          ]
        : undefined

      setSortColumn(value)
      setSortDirection(newSortDirection)

      return request
    })
  }

  return (
    <div className="QuerySortSelector">
      <Typography variant="label" className="sort-by-label SRC-inlineBlock">
        Sort by
      </Typography>
      <Select
        className="react-select-container SRC-inlineBlock"
        value={findValueOption(sortColumn, enumOptions)}
        options={enumOptions}
        onChange={option => onChange((option as EnumOption | null)?.value)}
        styles={{
          control: provided => ({
            ...provided,
            marginLeft: '15px',
          }),
        }}
      />
    </div>
  )
}

export default QuerySortSelector
