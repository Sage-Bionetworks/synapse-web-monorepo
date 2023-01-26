import { useCallback, useReducer } from 'react'
import { Map } from 'immutable'
import { Reference } from '../../utils/synapseTypes'
import { NO_VERSION_NUMBER } from './EntityFinder'

export function useEntitySelection(selectMultiple: boolean) {
  /**
   *
   * @param entity The entity to check selected status
   * @param selected the list of selected entities
   * @returns a boolean array of length equal to entities.length denoting selection status
   */
  const isSelected = useCallback(
    (entity: Reference, selected: Map<string, number>): boolean => {
      const match = selected.get(entity.targetId)
      if (match == null) {
        return false
      }
      if (match === NO_VERSION_NUMBER) {
        return entity.targetVersionNumber === undefined
      }
      return match === entity.targetVersionNumber
    },
    [],
  )

  /**
   * Given the existing selections and a list of toggled references, return the new list of selections
   * @param selected
   * @param toggledReference
   * @returns
   */
  const entitySelectionReducer = useCallback(
    (
      selected: Map<string, number>,
      toggledReferences: Reference | Reference[],
    ): Map<string, number> => {
      const newSelected = selected.withMutations(map => {
        // Note: we currently don't allow selecting two versions of the same entity, so we replace previous selected version with new selected version
        if (!Array.isArray(toggledReferences)) {
          toggledReferences = [toggledReferences]
        }
        toggledReferences.forEach(toggledReference => {
          if (isSelected(toggledReference, selected)) {
            // remove from selection
            map.delete(toggledReference.targetId)
          } else {
            // add to selection
            if (!selectMultiple) {
              map.clear()
            }
            map.set(
              toggledReference.targetId,
              toggledReference.targetVersionNumber ?? NO_VERSION_NUMBER,
            )
          }
        })
      })

      return newSelected
    },
    [isSelected, selectMultiple],
  )

  return useReducer(entitySelectionReducer, Map<string, number>())
}
