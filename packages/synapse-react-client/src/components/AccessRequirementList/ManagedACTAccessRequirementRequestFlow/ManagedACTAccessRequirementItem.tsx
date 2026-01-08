import {
  useCancelDataAccessRequest,
  useGetAccessRequirementStatus,
  useGetAccessRequirementWikiPageKey,
  useGetRestrictionInformation,
} from '@/synapse-queries'
import { Alert } from '@mui/material'
import {
  ManagedACTAccessRequirement,
  ManagedACTAccessRequirementStatus,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'
import { ReactNode, useCallback } from 'react'
import MarkdownSynapse from '../../Markdown/MarkdownSynapse/MarkdownSynapse'
import RequirementItem from '../RequirementItem/RequirementItem'
import ManagedACTAccessRequirementItemView from './ManagedACTAccessRequirementItemView'

export type ManagedACTAccessRequirementItemProps = {
  /**
   * The ManagedACTAccessRequirement to be displayed.
   */
  accessRequirement: ManagedACTAccessRequirement
  /**
   * If available, the ID of the object that this access requirement is being displayed for.
   */
  subjectId?: string
  /**
   * If available, the type of the object that this access requirement is being displayed for.
   */
  subjectType?: RestrictableObjectType
  /**
   * Invoked when the user clicks the "I do not accept" button.
   */
  onRejectTerms: () => void
  /**
   * Invoked when the user clicks the "Request access" button.
   */
  onRequestAccess: () => void
}

/**
 * Renders a {@link RequirementItem} for a ManagedACTAccessRequirement, which allows a user to see if they have met the
 * requirement, and if not, complete a data access request to apply for access.
 */
export function ManagedACTAccessRequirementItem(
  props: ManagedACTAccessRequirementItemProps,
) {
  const {
    accessRequirement,
    subjectId,
    subjectType,
    onRejectTerms,
    onRequestAccess,
  } = props
  const {
    data: wikiPageKey,
    isLoading: isLoadingWikiPageKey,
    error: getWikiPageError,
  } = useGetAccessRequirementWikiPageKey(accessRequirement.id.toString())

  const {
    data: accessRequirementStatus,
    isLoading: isLoadingArStatus,
    error: getArStatusError,
  } = useGetAccessRequirementStatus<ManagedACTAccessRequirementStatus>(
    String(accessRequirement.id),
  )

  const {
    data: restrictionInformation,
    isLoading: isLoadingRestrictionInfo,
    error: getRestrictionInfoError,
  } = useGetRestrictionInformation(
    {
      objectId: subjectId!,
      restrictableObjectType: subjectType!,
    },
    { enabled: !!subjectId && !!subjectType },
  )

  const {
    mutate: cancelDataAccessRequest,
    error: cancelRequestError,
    isPending: cancelRequestIsPending,
  } = useCancelDataAccessRequest()

  const onCancelDataAccessRequest = useCallback(() => {
    if (!accessRequirementStatus) {
      // no-op; the component is still loading, so this will never happen
      return
    }
    cancelDataAccessRequest({
      submissionId:
        accessRequirementStatus.currentSubmissionStatus!.submissionId,
      accessRequirementId: String(accessRequirement.id),
    })
  }, [accessRequirement.id, accessRequirementStatus, cancelDataAccessRequest])

  const isLoading =
    isLoadingWikiPageKey || isLoadingArStatus || isLoadingRestrictionInfo

  let error: ReactNode = null
  if (
    getWikiPageError ||
    getArStatusError ||
    getRestrictionInfoError ||
    cancelRequestError
  ) {
    error = (
      <Alert className={'access-requirement-list-alert'} severity={'error'}>
        {getWikiPageError && getWikiPageError.reason}
        {getArStatusError && getArStatusError.reason}
        {getRestrictionInfoError && getRestrictionInfoError.reason}
        {cancelRequestError && (
          <>
            <strong>Error canceling your data access request:</strong>
            <br />
            {cancelRequestError.reason}
          </>
        )}
      </Alert>
    )
  }

  return (
    <ManagedACTAccessRequirementItemView
      isLoading={isLoading}
      accessRequirement={accessRequirement}
      accessRequirementStatus={accessRequirementStatus}
      restrictionInformation={restrictionInformation}
      wikiPage={
        wikiPageKey && (
          <MarkdownSynapse
            wikiId={wikiPageKey.wikiPageId}
            ownerId={wikiPageKey.ownerObjectId}
            objectType={wikiPageKey.ownerObjectType}
          />
        )
      }
      error={error}
      onCancelDataAccessRequest={onCancelDataAccessRequest}
      onRejectTerms={onRejectTerms}
      onRequestAccess={onRequestAccess}
      cancelRequestIsPending={cancelRequestIsPending}
    />
  )
}

export default ManagedACTAccessRequirementItem
