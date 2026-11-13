import type { JsonNode } from 'json-joy/lib/json-crdt'
import { getRowDataNode, getRowValidationNode } from './gridRowNodes'

/**
 * Determines if the validation results for a given row are up to date by comparing the CRDT timestamps of the row validation
 * information and the row's data.
 */
export function isValidationUpToDateForRow(rowNode: JsonNode | undefined) {
  const validationNode = getRowValidationNode(rowNode)
  if (!validationNode) {
    // There is no validation status node. It may be added after the first validation run, or there may not be a bound schema.
    return false
  }

  const dataNode = getRowDataNode(rowNode)
  if (!dataNode) {
    return true
  }
  // A vector slot's id is the id of the constant last written there. If the validation constant is newer than every slot,
  // no data has been modified since the last validation.
  for (let i = 0; i < dataNode.length(); i++) {
    if ((dataNode.val(i)?.time ?? 0) > validationNode.id.time) {
      return false
    }
  }
  return true
}
