import { GridModel } from '@/components/DataGrid/DataGridTypes'

/**
 * Determines if the validation results for a given row are up to date by comparing the CRDT timestamps of the row validation
 * information and the row's data.
 */
export function isValidationUpToDateForRow(model: GridModel, rowIndex: number) {
  // We can see if validation is up to date by comparing the timestamp of the validation results constant to the data constants.
  // If the validation constant is newer than all data constants, then the validation is up to date.
  let validationStatusNode
  try {
    validationStatusNode = model.api.con([
      'rows',
      String(rowIndex),
      'metadata',
      'rowValidation',
    ])
  } catch (e) {
    // There is no validation status node. It may be added after the first validation run, or there may not be a bound schema.
    return false
  }
  const validationStatusTimestamp = validationStatusNode?.node?.id

  try {
    const dataVec = model.api.vec(['rows', String(rowIndex), 'data'])
    for (let i = 0; i < dataVec?.length(); i++) {
      if (
        dataVec.get(i).asCon().node.id.time > validationStatusTimestamp?.time
      ) {
        // Data has been modified since last validation
        return false
      }
    }
  } catch (e) {
    // Retrieving the vector or constants could fail if the model is not what we expect, but this is not something we can handle here.
  }
  return true
}
