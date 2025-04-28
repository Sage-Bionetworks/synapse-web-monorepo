import {
  Query,
  ColumnMultiValueFunction,
  COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import { ISetCombination, ISet, UpSetSelectionProps } from '@upsetjs/react'

type HandleUpsetPlotClickOptions = {
  sql: string
  explorePath: string
  columnName: string
}

export function handleUpsetPlotClick({
  sql,
  explorePath,
  columnName,
}: HandleUpsetPlotClickOptions): UpSetSelectionProps['onClick'] {
  return selection => {
    const clickedSets = Array.from(
      (selection as ISetCombination)?.sets.values(),
    )
    const columnValues = clickedSets.map((v: ISet<any>) => v.name)

    const query: Query = {
      sql,
      additionalFilters: columnValues.map(value => ({
        concreteType:
          COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE_VALUE,
        columnName: columnName,
        function: ColumnMultiValueFunction.HAS,
        values: [value],
      })),
    }

    const encodedExplorePath = encodeURIComponent(explorePath)
    const url = `/Explore/${encodedExplorePath}?QueryWrapper0=${encodeURIComponent(
      JSON.stringify(query),
    )}`

    window.location.assign(url)
  }
}
