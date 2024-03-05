import { useEffect, useState } from 'react'
import { difference } from 'lodash-es'

const EMPTY_ARRAY: never[] = []

/**
 * This hook tracks all items encountered in the `currentList` argument in the lifetime of the component that uses this hook.
 * @param currentList
 */
export default function useTrackTransientListItems<T = unknown>(
  currentList: T[] = EMPTY_ARRAY,
): T[] {
  /*
   Store in state the set of all items ever encountered in currentList in the lifetime of this hook.

   For PORTALS-2950, we will use component state (vs a different store like sessionStorage). When the user completes an action,
   we keep the record of the action on the screen. The individual action component informs the user that the action is complete.

   However, we cannot easily discern between the two reasons that an action is no longer required. Those reasons are:
     - the requirements of the action were fulfilled OR
     - the requirements no longer apply to the resource (e.g. file(s) requiring that action were removed from the download cart)

   In the second case, the action was not completed. To reduce the likelihood of us erroneously showing those actions,
   we will store the actions in component state, where this list will reset if the component is unmounted.

   This hook could be extended to support other data stores, such as localStorage or sessionStorage, should such a use case arise.
   */
  const [allSeenItems, setAllSeenItems] = useState<T[]>([])

  // Synchronize state by adding any new items in the list
  useEffect(() => {
    setAllSeenItems(prevState => {
      const itemsNotYetAddedToState = difference(currentList, prevState)
      return [...prevState, ...itemsNotYetAddedToState]
    })
  }, [currentList])

  return allSeenItems
}
