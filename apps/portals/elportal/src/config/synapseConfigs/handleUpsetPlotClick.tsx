import {
  Query,
  ColumnMultiValueFunctionQueryFilter,
  ColumnMultiValueFunction,
  COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import { cohortBuilderFilesSql } from '../resources'

export const handleUpsetPlotClick = (selection: any) => {
  //  We should use generateEncodedQueryForSelectedFacetURL, but this single facet may have multiple values (union from UpsetPlot)
  const sets = selection.sets
  const columnValues = [...sets.values()].map((v: any) => v.name) as string[]

  const query: Query = {
    sql: cohortBuilderFilesSql,
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
  const url = `/Explore/Data?QueryWrapper0=${JSON.stringify(query)}`
  window.location.assign(url)
}
