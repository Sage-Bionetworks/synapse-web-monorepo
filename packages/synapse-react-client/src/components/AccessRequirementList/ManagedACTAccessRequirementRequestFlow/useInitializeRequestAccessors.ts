import { deepEquals } from '@rjsf/utils'
import {
  AccessorChange,
  AccessType,
  Renewal,
  Request,
  UserProfile,
} from '@sage-bionetworks/synapse-types'
import { useEffect, useRef } from 'react'

/**
 * The accessors of a request after listing the current user as an accessor and removing duplicate accessors.
 */
export function ensureCurrentUserIsAccessor(
  accessorChanges: AccessorChange[] | undefined,
  currentUserId: string,
  isRenewal: boolean,
): AccessorChange[] {
  const currentUserWithGainAccess: AccessorChange = {
    userId: currentUserId,
    type: isRenewal ? AccessType.RENEW_ACCESS : AccessType.GAIN_ACCESS,
  }
  const withCurrentUser = accessorChanges?.some(item =>
    deepEquals(item, currentUserWithGainAccess),
  )
    ? accessorChanges
    : [currentUserWithGainAccess, ...(accessorChanges ?? [])]

  // SWC-5765: Filter out duplicate accessors
  const seen = new Set<string>()
  return withCurrentUser.filter(accessorChange => {
    if (seen.has(accessorChange.userId)) {
      return false
    }
    seen.add(accessorChange.userId)
    return true
  })
}

type UseInitializeRequestAccessorsArgs = {
  dataAccessRequest: Request | Renewal | undefined
  user: UserProfile | undefined
  isRenewal: boolean
  /** Saves the request. Must handle its own errors, e.g. a react-query `mutate` function with an `onError` handler. */
  updateRequest: (request: Request | Renewal) => void
  /** When provided, is attached to a request that does not yet reference a research project. */
  researchProjectId?: string
}

/**
 * Applies the updates that every request needs once it and the current user are loaded: the current user is listed as
 * an accessor, duplicate accessors are removed, and (if provided) the research project is attached. The updates are
 * saved at most once.
 */
export function useInitializeRequestAccessors(
  args: UseInitializeRequestAccessorsArgs,
) {
  const {
    dataAccessRequest,
    user,
    isRenewal,
    updateRequest,
    researchProjectId,
  } = args
  const hasAppliedImmediateUpdates = useRef(false)

  useEffect(() => {
    if (dataAccessRequest && user && !hasAppliedImmediateUpdates.current) {
      let shouldUpdate = false

      if (researchProjectId && !dataAccessRequest.researchProjectId) {
        dataAccessRequest.researchProjectId = researchProjectId
        shouldUpdate = true
      }

      const accessorChanges = ensureCurrentUserIsAccessor(
        dataAccessRequest.accessorChanges,
        user.ownerId,
        isRenewal,
      )
      if (!deepEquals(accessorChanges, dataAccessRequest.accessorChanges)) {
        dataAccessRequest.accessorChanges = accessorChanges
        shouldUpdate = true
      }

      if (shouldUpdate) {
        // Only attempt these updates once. If the server does not echo back a value we applied here, retrying would
        // loop indefinitely, leaving the form perpetually in a pending state.
        hasAppliedImmediateUpdates.current = true
        updateRequest(dataAccessRequest)
      }
    }
  }, [dataAccessRequest, isRenewal, researchProjectId, updateRequest, user])
}
