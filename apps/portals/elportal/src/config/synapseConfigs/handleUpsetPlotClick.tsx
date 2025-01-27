import { Query, FacetColumnRequest } from '@sage-bionetworks/synapse-types'
import { cohortBuilderFilesSql } from '../resources'

export const handleUpsetPlotClick = (selection: any) => {
  //  We should use generateEncodedQueryForSelectedFacetURL, but this single facet may have multiple values (union from UpsetPlot)
  const sets = selection.sets
  const facetColumnRequest: FacetColumnRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
    columnName: 'Assays',
    facetValues: [...sets.values()].map((v: any) => v.name) as string[],
  }
  const query: Query = {
    sql: cohortBuilderFilesSql,
    selectedFacets: [facetColumnRequest],
  }
  const url = `/Explore/Data?QueryWrapper0=${JSON.stringify(query)}`
  window.location.assign(url)
}
