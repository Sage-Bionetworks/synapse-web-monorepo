import { Reference } from '@sage-bionetworks/synapse-types'
import { Map } from 'immutable'
import { isEqual } from 'lodash-es'
import { useCallback, useReducer } from 'react'

// Represents the selection type. The key is the entity ID. Only one version of an entity can be chosen at a time.
export type EntitySelectionMapType = Map<string, Reference>

export function useEntitySelection(
  selectMultiple: boolean,
  initialSelection: EntitySelectionMapType = Map<string, Reference>(),
) {
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

  type ReducerAction =
    | {
        type: 'toggleSelection'
        toggledReferences: Reference | Reference[]
      }
    | {
        type: 'setSelection'
        selection: EntitySelectionMapType
      }

  /**
   * Given the existing selections and a list of toggled references, return the new list of selections
   * @param currentState
   * @param action
   * @returns
   */
  const entitySelectionReducer = useCallback(
    (
      currentState: EntitySelectionMapType,
      action: ReducerAction,
    ): EntitySelectionMapType => {
      if (action.type === 'setSelection') {
        return action.selection
      }
      if (action.type === 'toggleSelection') {
        let toggledReferences = action.toggledReferences
        return currentState.withMutations(map => {
          // Note: we currently don't allow selecting two versions of the same entity, so we replace previous selected version with new selected version
          if (!Array.isArray(toggledReferences)) {
            toggledReferences = [toggledReferences]
          }
          toggledReferences.forEach(toggledReference => {
            if (isSelected(toggledReference, currentState)) {
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
      }
      return currentState
    },
    [isSelected, selectMultiple],
  )

  const [selectedEntities, dispatch] = useReducer(
    entitySelectionReducer,
    initialSelection,
  )

  const toggleSelection = useCallback(
    (toggledReferences: Reference | Reference[]) =>
      dispatch({ type: 'toggleSelection', toggledReferences }),
    [],
  )

  const setSelection = useCallback(
    (selection: EntitySelectionMapType) =>
      dispatch({ type: 'setSelection', selection }),
    [],
  )

  return { selectedEntities, toggleSelection, setSelection }
}
