import { QueryResultBundle, Row } from '@sage-bionetworks/synapse-types'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'
import { stringListToArray } from 'synapse-react-client/utils/functions/StringUtils'

const getChallengeKeywordsFromRow = (
  row: Row,
  queryResultBundle: QueryResultBundle | undefined,
): string[] =>
  stringListToArray(
    row.values[getFieldIndex('keywords', queryResultBundle)] ?? '',
  ).filter(chip => chip !== '')

export default getChallengeKeywordsFromRow
