import {
  Query,
  ColumnMultiValueFunctionQueryFilter,
  ColumnMultiValueFunction,
  COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import { cohortBuilderSql } from '../resources'
import { ISetCombination, ISetLike, ISet } from '@upsetjs/react'

export const handleUpsetPlotClick = (selection: ISetLike<string> | null) => {
  //  Gather all values (intersection from UpsetPlot), and create an additional filter for each value
  const clickedSets = (selection as ISetCombination)?.sets.values()
  const columnValues = clickedSets.map((v: ISet<any>) => v.name).toArray()
  const query: Query = {
    sql: cohortBuilderSql,
    additionalFilters: columnValues.map(value => {
      const filter: ColumnMultiValueFunctionQueryFilter = {
        concreteType:
          COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE_VALUE,
        columnName: 'Assays',
        function: ColumnMultiValueFunction.HAS,
        values: [value],
      }
      return filter
    }),
  }
  const url = `/Explore/Cohort%20Builder?QueryWrapper0=${JSON.stringify(query)}`
  window.location.assign(url)
}
