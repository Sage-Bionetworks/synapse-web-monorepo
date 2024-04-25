import { Query } from '@sage-bionetworks/synapse-types'
import { cohortBuilderFilesSql } from '../resources'

export const handleUpsetPlotClick = (selection: any) => {
  const { name } = selection
  const url = generateEncodedPathAndQueryForSelectedFacetURL(
    '/Explore/Data%20by%20Files',
    cohortBuilderFilesSql,
    [{facet: 'Assays', facetValue: name}]
  window.location.assign(url)
}
