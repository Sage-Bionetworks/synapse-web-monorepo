import {
  publicationSql,
  datasetsSql,
  filesSql,
  grantsSql,
  toolsSql,
  projectsSql,
} from '../resources'
import { Query } from 'synapse-react-client/dist/utils/synapseTypes'
import { ClickCallbackParams } from 'synapse-react-client/dist/containers/widgets/themes-plot/types'

const sqlAndEntityMap: {
  [value: string]: string
} = {
  Tools: toolsSql,
  Datasets: datasetsSql,
  Publications: publicationSql,
  Grants: grantsSql,
  Projects: projectsSql,
  Files: filesSql,
}

const generateEncodedQueryForURL = (
  path: string,
  facet: string,
  facetValue: string,
): string => {
  const sql = sqlAndEntityMap[path]
  const query: Query = {
    sql,
    selectedFacets: [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        columnName: facet,
        facetValues: [facetValue],
      },
    ],
  }
  return encodeURIComponent(JSON.stringify(query))
}

export const onPointClick = ({
  facetValue,
  type,
  event,
}: ClickCallbackParams) => {
  const typeUpperCase = type.slice(0, 1).toUpperCase() + type.slice(1)
  let facet = 'theme'
  if (typeUpperCase === 'Grants' || typeUpperCase === 'Projects') {
    facet = 'consortium'
  }
  const encodedQuery = generateEncodedQueryForURL(
    typeUpperCase,
    facet,
    facetValue,
  )
  const url = `/Explore/${typeUpperCase}?QueryWrapper0=${encodedQuery}`
  const target = event.ctrlKey || event.metaKey ? '_blank' : '_self'
  window.open(url, target)
}
