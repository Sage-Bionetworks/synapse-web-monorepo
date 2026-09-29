import { deepEquals } from '@rjsf/utils'
import {
  AccessorChange,
  AccessType,
  Renewal,
  Request,
  UserProfile,
} from '@sage-bionetworks/synapse-types'
import { useEffect, useRef } from 'react'

type UseInitializeRequestAccessorsArgs = {
  dataAccessRequest: Request | Renewal | undefined
  user: UserProfile | undefined
  isRenewal: boolean
  updateRequest: (request: Request | Renewal) => Promise<unknown>
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

      const currentUserWithGainAccess: AccessorChange = {
        userId: user.ownerId,
        type: isRenewal ? AccessType.RENEW_ACCESS : AccessType.GAIN_ACCESS,
      }
      if (
        !dataAccessRequest.accessorChanges?.find(item =>
          deepEquals(item, currentUserWithGainAccess),
        )
      ) {
        dataAccessRequest.accessorChanges = [
          currentUserWithGainAccess,
          ...(dataAccessRequest.accessorChanges || []),
        ]
        shouldUpdate = true
      }

      // SWC-5765: Filter out duplicate accessors
      const seen = new Set()
      const uniqueAccessorChanges = dataAccessRequest.accessorChanges.filter(
        accessorChange => {
          return seen.has(accessorChange.userId)
            ? false
            : seen.add(accessorChange.userId)
        },
      )
      if (
        uniqueAccessorChanges.length !==
        dataAccessRequest.accessorChanges.length
      ) {
        dataAccessRequest.accessorChanges = uniqueAccessorChanges
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
