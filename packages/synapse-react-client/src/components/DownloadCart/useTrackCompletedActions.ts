import { useEffect, useState } from 'react'
import { ActionRequiredCount } from '@sage-bionetworks/synapse-types'
import { differenceWith, isEqual } from 'lodash-es'

type ActionWithCompletedStatus = {
  actionRequiredCount: ActionRequiredCount
  isComplete: boolean
}

/**
 * This hook tracks all the ActionsRequiredCounts encountered in the lifetime of the component that uses this hook and
 * joins it with an `isComplete` boolean.
 *
 * @param currentActionsRequired
 */
export default function useTrackCompletedActions(
  currentActionsRequired: ActionRequiredCount[],
): ActionWithCompletedStatus[] {
  /*
   Store set of all actions ever fetched in the lifetime of this hook in state. When the user completes an action, we can
   keep the record of the action on the screen and inform them that the action is complete. This fixes PORTALS-2950
   without immediately removing the action from the screen.

   We cannot easily determine if an action is gone because the requirement was completed vs the file(s) requiring that action were removed from the cart.
   To reduce the likelihood of us showing that an action was completed when it really no longer applies to the cart,
   we will store the actions in component state, where it will be cleared if the component is unmounted. sessionStorage is
   another viable option, but it is more susceptible to encountering this kind of error.
   */
  const [allFetchedActions, setAllFetchedActions] = useState<
    ActionWithCompletedStatus[]
  >([])

  // Synchronize state with the most recent actions required fetched from the server
  useEffect(() => {
    setAllFetchedActions(prevState => {
      const actionsNotYetAddedToState = differenceWith(
        currentActionsRequired,
        prevState.map(a => a.actionRequiredCount),
        isEqual,
      )
      // An action is 'completed' if the action is no longer present in the set of required actions returned by the service
      const actionsThatHaveBeenCompleted = differenceWith(
        prevState.map(a => a.actionRequiredCount),
        currentActionsRequired,
        isEqual,
      )

      // For each previous action, see if it was completed and update `isCompleted` if so
      const prevActionsWithUpdatedIsCompleted = prevState.map(item => {
        const hasBeenCompleted = actionsThatHaveBeenCompleted.find(
          completedAction => isEqual(item.actionRequiredCount, completedAction),
        )
        if (hasBeenCompleted) {
          return {
            actionRequiredCount: item.actionRequiredCount,
            isComplete: true,
          }
        } else {
          return {
            actionRequiredCount: item.actionRequiredCount,
            // Reset the item so that it is considered incomplete (handles cases where the user changes something to re-require an action)
            // e.g. enabling, then disabling 2FA
            isComplete: false,
          }
        }
      })

      return [
        ...prevActionsWithUpdatedIsCompleted,
        ...actionsNotYetAddedToState.map(arc => ({
          actionRequiredCount: arc,
          isComplete: false,
        })),
      ]
    })
  }, [currentActionsRequired])

  return allFetchedActions
}
