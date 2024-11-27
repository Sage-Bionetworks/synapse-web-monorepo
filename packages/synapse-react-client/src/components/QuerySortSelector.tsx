import React, { useState } from 'react'
import { SortConfiguration } from './CardContainerLogic'
import { useQueryContext } from './QueryContext/QueryContext'
import { SortDirection } from '@sage-bionetworks/synapse-types'
import { Typography } from '@mui/material'
import Select, { components, ControlProps, GroupBase } from 'react-select'
import { findValueOption } from './SchemaDrivenAnnotationEditor/widget/SelectWidget'
import { useQueryVisualizationContext } from './QueryVisualizationWrapper'

export type QuerySortSelectorProps = {
  sortConfig: SortConfiguration
}

export type EnumOption = { value: string; label: string }

/**
 * We want to apply the 'form-control' bootstrap class to react-select's Control component, and the easiest way to do that is to make a custom version
 */
export const Control = ({
  children,
  ...rest
}: ControlProps<any, boolean, GroupBase<any>>) => {
  return (
    <components.Control {...rest} className="form-control">
      {children}
    </components.Control>
  )
}

const QuerySortSelector: React.FunctionComponent<QuerySortSelectorProps> = ({
  sortConfig,
}) => {
  const { defaultColumn, defaultDirection, sortableColumns } = sortConfig
  const queryContext = useQueryContext()
  const { executeQueryRequest } = queryContext
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
    <div className="QuerySortSelector bootstrap-4-backport">
      <Typography variant="label" className="sort-by-label SRC-inlineBlock">
        Sort by
      </Typography>
      <Select
        className="react-select-container SRC-inlineBlock"
        value={findValueOption(sortColumn, enumOptions)}
        options={enumOptions}
        onChange={option => onChange((option as EnumOption | null)?.value)}
        components={{ Control }}
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
