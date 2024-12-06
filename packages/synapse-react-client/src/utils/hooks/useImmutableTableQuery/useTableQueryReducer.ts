import {
  QueryBundleRequest,
  QueryFilter,
} from '@sage-bionetworks/synapse-types'
import { useMemo, useReducer, useState } from 'react'
import * as React from 'react'
import { UniqueFacetIdentifier } from '../../types'
import { cloneDeep, isEqual } from 'lodash-es'
import {
  queryRequestsHaveSameTotalResults,
  removeEmptyQueryParams,
} from '../../functions/queryUtils'
import { useDebouncedEffect } from '@react-hookz/web'
import { DEBOUNCE_DELAY_MS } from './useImmutableTableQuery'
import {
  addValueToSelectedFacet,
  getQueryFromSetStateAction,
  goToPage,
  removeQueryFilter,
  removeSelectedFacet,
  removeValueFromQueryFilter,
  removeValueFromSelectedFacet,
  setPageSize,
  setRangeFacetValue,
} from './TableQueryReducerActions'

export type QueryChangeCommitOptions =
  | {
      // This and future changes including debounce will not be committed until the debounceDelay has elapsed
      debounce: true
    }
  | {
      // The change will not be committed until the commit function is invoked.
      noCommit: true
    }

export type TableQueryReducerState = {
  currentQueryRequest: QueryBundleRequest
  nextQueryRequest: QueryBundleRequest
  isConfirmingChange: boolean
}

export type TableQueryReducerAction = {
  commitOptions?: QueryChangeCommitOptions
} & (
  | {
      type: 'setQuery'
      queryOrUpdater: React.SetStateAction<QueryBundleRequest>
    }
  | {
      type: 'addValueToSelectedFacet'
      facet: UniqueFacetIdentifier
      value: string
    }
  | {
      type: 'removeSelectedFacet'
      facetsToRemove: UniqueFacetIdentifier | UniqueFacetIdentifier[]
    }
  | {
      type: 'setRangeFacetValue'
      facet: UniqueFacetIdentifier
      min?: string
      max?: string
    }
  | {
      type: 'removeValueFromSelectedFacet'
      facet: UniqueFacetIdentifier
      value: string
    }
  | {
      type: 'setPageSize'
      pageSize: number
    }
  | {
      type: 'goToPage'
      pageNumber: number
    }
  | {
      type: 'resetQuery'
    }
  | {
      type: 'removeQueryFilter'
      queryFilter: QueryFilter
    }
  | {
      type: 'removeValueFromQueryFilter'
      queryFilter: QueryFilter
      value: string
    }
  | {
      type: 'resetUncommittedChanges'
    }
  | { type: 'commitChanges' }
  | { type: 'confirmChanges' }
  | { type: 'cancelChanges' }
  | { type: 'resetDebounce' }
)

/**
 * Utility hook that internally uses a reducer to manage the state of a table query.
 * @param initQueryRequest
 * @param requireConfirmationOnChange
 * @param onQueryChange
 */
export function useTableQueryReducer(
  initQueryRequest: QueryBundleRequest,
  requireConfirmationOnChange: boolean,
  onQueryChange?: (queryJsonString: string) => void,
) {
  // Increment to reset the debounce counter.
  const [resetDebounceCounter, setResetDebounceCounter] = useState(0)
  const [commitAfterDebounce, setCommitAfterDebounce] = useState(false)

  // Note: we must use a reducer because we're tracking interrelated state variables. Attempts to separate these will
  // likely result in bugs such as dropped state changes when React performs a batch update.
  const [state, dispatch] = useReducer(
    (
      prevState: TableQueryReducerState,
      action: TableQueryReducerAction,
    ): TableQueryReducerState => {
      let updatedNextQueryRequest = prevState.nextQueryRequest
      switch (action.type) {
        case 'resetDebounce': {
          setResetDebounceCounter(v => v + 1)
          // Do not update state
          return prevState
        }
        case 'setQuery': {
          updatedNextQueryRequest = getQueryFromSetStateAction(
            action,
            prevState.nextQueryRequest,
          )
          break
        }
        case 'addValueToSelectedFacet': {
          updatedNextQueryRequest = addValueToSelectedFacet(
            action,
            prevState.nextQueryRequest,
          )
          break
        }
        case 'removeSelectedFacet': {
          updatedNextQueryRequest = removeSelectedFacet(
            action,
            prevState.nextQueryRequest,
          )
          break
        }
        case 'setRangeFacetValue': {
          updatedNextQueryRequest = setRangeFacetValue(
            action,
            prevState.nextQueryRequest,
          )
          break
        }
        case 'removeValueFromSelectedFacet': {
          updatedNextQueryRequest = removeValueFromSelectedFacet(
            action,
            prevState.nextQueryRequest,
          )
          break
        }
        case 'removeQueryFilter': {
          updatedNextQueryRequest = removeQueryFilter(
            action,
            prevState.nextQueryRequest,
          )
          break
        }
        case 'removeValueFromQueryFilter': {
          updatedNextQueryRequest = removeValueFromQueryFilter(
            action,
            prevState.nextQueryRequest,
          )
          break
        }
        case 'setPageSize': {
          updatedNextQueryRequest = setPageSize(
            action,
            prevState.nextQueryRequest,
          )
          break
        }
        case 'goToPage': {
          updatedNextQueryRequest = goToPage(action, prevState.nextQueryRequest)
          break
        }
        case 'resetQuery': {
          updatedNextQueryRequest = initQueryRequest
          break
        }
        case 'cancelChanges':
        case 'resetUncommittedChanges': {
          updatedNextQueryRequest = prevState.currentQueryRequest
          break
        }
        case 'confirmChanges':
        case 'commitChanges': {
          updatedNextQueryRequest = cloneDeep(prevState.nextQueryRequest)
          // commit the changes
          break
        }
      }

      updatedNextQueryRequest.query = removeEmptyQueryParams(
        updatedNextQueryRequest.query,
      )

      const isConfirmingChange =
        requireConfirmationOnChange &&
        !queryRequestsHaveSameTotalResults(
          prevState.currentQueryRequest.query,
          updatedNextQueryRequest.query,
        )

      if (
        // No commit cases:
        // If `noCommit` is explicitly specified in the commit options
        (action.commitOptions && 'noCommit' in action.commitOptions) ||
        // Or if the user is in the 'confirm' state (modal is shown) AND
        // the action is not the 'confirmChanges' or 'cancelChanges' action.
        (isConfirmingChange &&
          action.type !== 'confirmChanges' &&
          action.type !== 'cancelChanges')
      ) {
        return {
          currentQueryRequest: prevState.currentQueryRequest,
          nextQueryRequest: updatedNextQueryRequest,
          isConfirmingChange: isConfirmingChange,
        }
      } else if (action.commitOptions && 'debounce' in action.commitOptions) {
        // If debouncing, update the state flag. An effect will commit the changes after the debounce delay.
        setCommitAfterDebounce(true)
        return {
          currentQueryRequest: prevState.currentQueryRequest,
          nextQueryRequest: updatedNextQueryRequest,
          isConfirmingChange: isConfirmingChange,
        }
      } else {
        // Commit case: clear the debounce flag and update state
        setCommitAfterDebounce(false)
        if (
          onQueryChange &&
          !isEqual(prevState.currentQueryRequest, updatedNextQueryRequest)
        ) {
          const queryJsonString = JSON.stringify(updatedNextQueryRequest.query)
          onQueryChange(queryJsonString)
        }
        return {
          currentQueryRequest: updatedNextQueryRequest,
          nextQueryRequest: updatedNextQueryRequest,
          isConfirmingChange: false,
        }
      }
    },
    {
      currentQueryRequest: initQueryRequest,
      nextQueryRequest: initQueryRequest,
      isConfirmingChange: false,
    },
  )

  useDebouncedEffect(
    () => {
      if (commitAfterDebounce) {
        dispatch({ type: 'commitChanges' })
        setCommitAfterDebounce(false)
      }
    },
    // nextQueryRequest MUST be included in the dependencies to ensure the debounce resets when it changes
    [
      state.nextQueryRequest,
      commitAfterDebounce,
      setCommitAfterDebounce,
      resetDebounceCounter,
    ],
    DEBOUNCE_DELAY_MS,
  )

  return useMemo(
    () => ({
      currentQueryRequest: state.currentQueryRequest,
      nextQueryRequest: state.nextQueryRequest,
      isConfirmingChange: state.isConfirmingChange,
      dispatch,
    }),
    [
      state.currentQueryRequest,
      state.isConfirmingChange,
      state.nextQueryRequest,
    ],
  )
}
