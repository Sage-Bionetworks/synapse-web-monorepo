import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'
import { stringListToArray } from 'synapse-react-client/utils/functions/StringUtils'
import { QueryResultBundle, Row } from '@sage-bionetworks/synapse-types'

const filterRowsByLandingPageSection = (
  filterValue: string,
  dataRows: Row[],
  queryResultBundle: QueryResultBundle,
) => {
  const filteredDataRows =
    dataRows.filter(row => {
      const landingPageSectionValues =
        row.values[getFieldIndex('landingPageSection', queryResultBundle)] ?? ''
      const landingPageSectionArray = stringListToArray(
        landingPageSectionValues,
      )
      return landingPageSectionArray.includes(filterValue)
    }) ?? []
  return filteredDataRows
}

export default filterRowsByLandingPageSection
