import { ClickCallbackParams } from 'synapse-react-client/components/Plot/types'
import { generateEncodedPathAndQueryForSelectedFacetURL } from 'synapse-react-client/components/QueryWrapper/index'
import {
  datasetsSql,
  filesSql,
  grantsSql,
  projectsSql,
  publicationSql,
  toolsSql,
} from '../resources'

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

export const onIndividualThemeBarPlotPointClick = ({
  facetValue,
  type,
  event,
}: ClickCallbackParams) => {
  //facetValue in this case is the Theme facet value (ie "Microenvironment"), and the type is Consortium facet value (ie "CSBC")
  const targetType = 'Grants'
  const url = generateEncodedPathAndQueryForSelectedFacetURL(
    `/Explore/${targetType}`,
    sqlAndEntityMap[targetType],
    [
      { facet: 'theme', facetValue },
      { facet: 'consortium', facetValue: type },
    ],
  )
  const target = event.ctrlKey || event.metaKey ? '_blank' : '_self'
  window.open(url, target)
}
