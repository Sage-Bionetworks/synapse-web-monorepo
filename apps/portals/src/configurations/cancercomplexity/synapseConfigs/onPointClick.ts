import {
  publicationSql,
  datasetsSql,
  filesSql,
  grantsSql,
  toolsSql,
  projectsSql,
} from '../resources'
import type { ClickCallbackParams } from 'synapse-react-client'
import { generateEncodedPathAndQueryForSelectedFacetURL } from 'synapse-react-client'

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

export const onPointClick = ({
  facetValue,
  type,
  event,
}: ClickCallbackParams) => {
  debugger
  const typeUpperCase = type.slice(0, 1).toUpperCase() + type.slice(1)
  let facet = 'theme'
  if (typeUpperCase === 'Grants' || typeUpperCase === 'Projects') {
    facet = 'consortium'
  }

  const url = generateEncodedPathAndQueryForSelectedFacetURL(
    `/Explore/${typeUpperCase}`,
    sqlAndEntityMap[typeUpperCase],
    [{ facet, facetValue }],
  )

  const target = event.ctrlKey || event.metaKey ? '_blank' : '_self'
  window.open(url, target)
}
