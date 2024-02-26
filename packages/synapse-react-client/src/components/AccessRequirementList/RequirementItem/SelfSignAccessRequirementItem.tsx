import React, { useState } from 'react'
import MarkdownSynapse from '../../Markdown/MarkdownSynapse'
import {
  ApprovalState,
  CreateAccessApprovalRequest,
  SelfSignAccessRequirement,
  TermsOfUseAccessRequirement,
} from '@sage-bionetworks/synapse-types'
import { useSynapseContext } from '../../../utils/context/SynapseContext'
import { Alert, Box, ButtonProps, Link, Typography } from '@mui/material'
import {
  useCreateAccessApproval,
  useGetAccessRequirementStatus,
  useGetAccessRequirementWikiPageKey,
  useGetCurrentUserBundle,
  useGetCurrentUserProfile,
} from '../../../synapse-queries'
import RequirementItem from './RequirementItem'
import { RequirementItemStatus } from '../AccessApprovalCheckMark'
import { isTermsOfUseAccessRequirement } from '../../../utils/types/IsType'

export type SelfSignAccessRequirementItemProps = {
  accessRequirement: SelfSignAccessRequirement | TermsOfUseAccessRequirement
  onHide: () => void
}

/**
 * Renders a {@link RequirementItem} for an self-sign Access Requirement, including {@link SelfSignAccessRequirement} or
 * {@link TermsOfUseAccessRequirement}.
 *
 * For {@link ManagedACTAccessRequirement}s, see {@link RequestDataAccess}
 */
export default function SelfSignAccessRequirementItem(
  props: SelfSignAccessRequirementItemProps,
) {
  const { accessRequirement, onHide } = props
  const { accessToken } = useSynapseContext()
  const isSignedIn = !!accessToken
  const isTermsOfUse = isTermsOfUseAccessRequirement(accessRequirement)

  const { data: user } = useGetCurrentUserProfile()
  const { data: userBundle } = useGetCurrentUserBundle()

  const certificationRequirementNotMet =
    isSignedIn &&
    userBundle &&
    !isTermsOfUse &&
    accessRequirement.isCertifiedUserRequired &&
    !userBundle.isCertified
  const verificationRequirementNotMet =
    isSignedIn &&
    userBundle &&
    !isTermsOfUse &&
    accessRequirement.isValidatedProfileRequired &&
    !userBundle.isVerified

  const { data: accessRequirementStatus, isLoading: isLoadingStatus } =
    useGetAccessRequirementStatus(String(accessRequirement.id))

  const isApproved = accessRequirementStatus?.isApproved

  const { data: wikiPage } = useGetAccessRequirementWikiPageKey(
    accessRequirement.id.toString(),
    // TermsOfUse ARs may have the terms embedded in the AR or an associated Wiki.
  )

  const [showTerms, setShowTerms] = useState<boolean>(false)

  const {
    mutate: createAccessApproval,
    isPending: createAccessApprovalIsPending,
    error,
  } = useCreateAccessApproval({
    onError: err => {
      console.error('Error creating access approval: ', err)
    },
  })

  const onAcceptClicked = () => {
    const accessApprovalRequest: CreateAccessApprovalRequest = {
      requirementId: accessRequirement?.id,
      submitterId: user?.ownerId!,
      accessorId: user?.ownerId!,
      state: ApprovalState.APPROVED,
    }

    createAccessApproval(accessApprovalRequest)
  }

  let renderedTerms = <></>
  if (isTermsOfUse && accessRequirement.termsOfUse) {
    renderedTerms = <MarkdownSynapse markdown={accessRequirement.termsOfUse} />
  } else if (wikiPage) {
    renderedTerms = (
      <MarkdownSynapse
        wikiId={wikiPage?.wikiPageId}
        ownerId={wikiPage?.ownerObjectId}
        objectType={wikiPage?.ownerObjectType}
      />
    )
  }
  let actions: ButtonProps[] | undefined = undefined

  if (!!accessToken && !isApproved) {
    let acceptButtonText = 'I Accept Terms of Use'
    let acceptButtonDisabled = false
    if (certificationRequirementNotMet || verificationRequirementNotMet) {
      acceptButtonDisabled = true
      acceptButtonText = `You must ${
        certificationRequirementNotMet ? 'be certified' : ''
      }${
        certificationRequirementNotMet && verificationRequirementNotMet
          ? ' and '
          : ''
      }${
        verificationRequirementNotMet ? 'have a validated user profile' : ''
      } to accept`
    }

    actions = [
      {
        variant: 'outlined',
        onClick: onAcceptClicked,
        children: acceptButtonText,
        disabled: createAccessApprovalIsPending || acceptButtonDisabled,
      },
      {
        variant: 'text',
        onClick: onHide,
        children: 'I do not accept',
      },
    ]
  }

  return (
    <RequirementItem
      data-testid="SelfSignAccessRequirementItem"
      status={
        isLoadingStatus
          ? RequirementItemStatus.LOADING
          : isApproved
          ? RequirementItemStatus.COMPLETE
          : RequirementItemStatus.LOCKED
      }
      actions={actions}
    >
      {isApproved ? (
        <>
          <Typography variant={'body1'}>
            You have accepted the terms of use.{' '}
            <Link role="button" onClick={() => setShowTerms(!showTerms)}>
              {showTerms ? 'Hide Terms' : 'View Terms'}
            </Link>
          </Typography>
          {showTerms && <Box sx={{ my: 1 }}>{renderedTerms}</Box>}
        </>
      ) : (
        renderedTerms
      )}
      {error && <Alert severity="error">{error.reason}</Alert>}
    </RequirementItem>
  )
}
