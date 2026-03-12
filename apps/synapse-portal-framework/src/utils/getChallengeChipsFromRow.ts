import { QueryResultBundle, Row } from '@sage-bionetworks/synapse-types'
import { getFieldIndex } from 'synapse-react-client/utils/functions/queryUtils'
import { stringListToArray } from 'synapse-react-client/utils/functions/StringUtils'

const getChallengeChipsFromRow = (
  row: Row,
  queryResultBundle: QueryResultBundle | undefined,
): string[] =>
  stringListToArray(
    row.values[getFieldIndex('chips', queryResultBundle)] ?? '',
  ).filter(chip => chip !== '')

export default getChallengeChipsFromRow
