import { Query } from '@sage-bionetworks/synapse-types'
import { cohortBuilderFilesSql } from '../resources'

export const handleUpsetPlotClick = (selection: any) => {
  const { name } = selection
  const query: Query = {
    sql: cohortBuilderFilesSql,
    selectedFacets: [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        columnName: 'Assays',
        facetValues: [name],
      },
    ],
    // additionalFilters: [filter], //technically,
  }
  window.location.assign(
    `/Explore/Data%20by%20Files?QueryWrapper0=${JSON.stringify(query)}`,
  )
}
