import { useReducer } from 'react'

type UseConfirmItemsReturn<T = unknown> = {
  /** The set of items that are awaiting confirmation */
  pendingItems: T[]
  /** The set of items that have been confirmed */
  confirmedItems: T[]
  /** Adds one or more items to the pending list */
  addItemsPendingConfirmation: (...items: T[]) => void
  /** Confirms one or more items, adding them to the confirmed list and removing them from the pending list
   * @returns the confirmed items */
  confirmItem: (...items: T[]) => { confirmedItems: T[]; pendingItems: T[] }
  /** Remove one or more items that are pending from the list
   * @returns the resulting state of confirmed items and pending items */
  removePendingItems: (...items: T[]) => {
    confirmedItems: T[]
    pendingItems: T[]
  }
  /** Clear all items from the confirmed and pending lists */
  clear: () => void
}

function reducer<T = unknown>(
  state: { pendingItems: T[]; confirmedItems: T[] },
  action:
    | { type: 'addItemsPendingConfirmation'; newItems: T[] }
    | { type: 'confirmItem'; itemsToConfirm: T[] }
    | { type: 'removePendingItems'; itemsToRemove: T[] }
    | { type: 'clear' },
) {
  switch (action.type) {
    case 'addItemsPendingConfirmation':
      return {
        ...state,
        pendingItems: [...state.pendingItems, ...action.newItems],
      }
    case 'confirmItem': {
      const newConfirmedItems = [
        ...state.confirmedItems,
        ...action.itemsToConfirm,
      ]
      const newPendingItems = state.pendingItems.filter(
        i => !action.itemsToConfirm.includes(i),
      )
      return {
        confirmedItems: newConfirmedItems,
        pendingItems: newPendingItems,
      }
    }
    case 'removePendingItems': {
      const newPendingItems = state.pendingItems.filter(
        i => !action.itemsToRemove.includes(i),
      )
      return {
        confirmedItems: state.confirmedItems,
        pendingItems: newPendingItems,
      }
    }
    case 'clear':
      return { confirmedItems: [], pendingItems: [] }
    default:
      return state
  }
}

/**
 * Stateful hook used to track items that need to be confirmed by the user. Methods are provided to support confirming
 * individual items or all items, as well as skipping confirmation for individual items or all items.
 */
function useConfirmItems<T = unknown>(): UseConfirmItemsReturn<T> {
  const [state, dispatch] = useReducer(reducer<T>, {
    pendingItems: [],
    confirmedItems: [],
  })

  const addItemsPendingConfirmation = (...items: T[]) => {
    dispatch({ type: 'addItemsPendingConfirmation', newItems: items })
  }

  const confirmItem = (...items: T[]) => {
    dispatch({ type: 'confirmItem', itemsToConfirm: items })
    return reducer(state, { type: 'confirmItem', itemsToConfirm: items })
  }

  const removePendingItems = (...items: T[]) => {
    dispatch({ type: 'removePendingItems', itemsToRemove: items })
    return reducer(state, { type: 'removePendingItems', itemsToRemove: items })
  }

  const clear = () => {
    dispatch({ type: 'clear' })
  }

  return {
    pendingItems: state.pendingItems,
    confirmedItems: state.confirmedItems,
    addItemsPendingConfirmation,
    confirmItem,
    removePendingItems,
    clear,
  }
}

export default useConfirmItems
