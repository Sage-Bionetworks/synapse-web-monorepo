import { useEffect, useState } from 'react'
import { ActionRequiredCount } from '@sage-bionetworks/synapse-types'
import { difference } from 'lodash-es'

/**
 * This hook tracks all the ActionsRequiredCounts encountered in the lifetime of the component that uses this hook and
 * joins it with an `isComplete` boolean.
 *
 * @param currentActionsRequired
 */
export default function useTrackCompletedActions(
  currentActionsRequired: ActionRequiredCount[],
): ActionRequiredCount[] {
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
    ActionRequiredCount[]
  >([])

  // Synchronize state with the most recent actions required fetched from the server
  useEffect(() => {
    setAllFetchedActions(prevState => {
      const actionsNotYetAddedToState = difference(
        currentActionsRequired,
        prevState,
      )
      return [...prevState, ...actionsNotYetAddedToState]
    })
  }, [currentActionsRequired])

  return allFetchedActions
}
