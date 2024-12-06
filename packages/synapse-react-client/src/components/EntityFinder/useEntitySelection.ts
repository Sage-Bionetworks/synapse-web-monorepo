import { Reference } from '@sage-bionetworks/synapse-types'
import { Map } from 'immutable'
import { isEqual } from 'lodash-es'
import { useCallback, useReducer } from 'react'

// Represents the selection type. The key is the entity ID. Only one version of an entity can be chosen at a time.
export type EntitySelectionMapType = Map<string, Reference>

export function useEntitySelection(selectMultiple: boolean) {
  /**
   *
   * @param entity The entity to check selected status
   * @param selected the list of selected entities
   * @returns a boolean array of length equal to entities.length denoting selection status
   */
  const isSelected = useCallback(
    (entity: Reference, selected: EntitySelectionMapType): boolean => {
      const match = selected.get(entity.targetId)
      if (match == null) {
        return false
      }
      return isEqual(entity, match)
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
      selected: EntitySelectionMapType,
      toggledReferences: Reference | Reference[],
    ): EntitySelectionMapType => {
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
            map.set(toggledReference.targetId, toggledReference)
          }
        })
      })

      return newSelected
    },
    [isSelected, selectMultiple],
  )

  return useReducer(entitySelectionReducer, Map<string, Reference>())
}
