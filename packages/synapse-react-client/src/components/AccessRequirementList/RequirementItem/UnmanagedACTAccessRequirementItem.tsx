import {
  useGetAccessRequirementStatus,
  useGetAccessRequirementWikiPageKey,
} from '@/synapse-queries'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import { Box, ButtonProps, Link, Typography } from '@mui/material'
import {
  ACTAccessRequirement,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import MarkdownSynapse from '../../Markdown/MarkdownSynapse'
import { RequirementItemStatus } from '../AccessApprovalCheckMark'
import RequirementItem from './RequirementItem'

export type UnmanagedACTAccessRequirementItemProps = {
  subjectId?: string
  subjectType?: RestrictableObjectType
  accessRequirement: ACTAccessRequirement
  onHide: () => void
}

/**
 * Renders a {@link RequirementItem} for the deprecated {@link ACTAccessRequirement}.
 *
 * For {@link ManagedACTAccessRequirement}s, see {@link ManagedACTAccessRequirementItem}
 *
 * For {@link SelfSignAccessRequirement} and {@link TermsOfUseAccessRequirement}, see {@link SelfSignAccessRequirementItem}
 */
export default function UnmanagedACTAccessRequirementItem(
  props: UnmanagedACTAccessRequirementItemProps,
) {
  const { accessRequirement, subjectId, subjectType, onHide } = props
  const { isAuthenticated } = useSynapseContext()

  const { data: accessRequirementStatus, isLoading: isLoadingStatus } =
    useGetAccessRequirementStatus(String(accessRequirement.id))

  const { data: wikiPage } = useGetAccessRequirementWikiPageKey(
    accessRequirement.id.toString(),
    // ACT ARs may have the contact info embedded in the AR or may have an associated Wiki.
  )

  const isApproved = accessRequirementStatus?.isApproved

  const [showACTContactInfoInstructions, setShowACTContactInfoInstructions] =
    useState<boolean>(false)

  let acceptButtonText = ''
  if (
    window.location.hostname === 'www.synapse.org' ||
    window.location.hostname === 'staging.synapse.org'
  ) {
    acceptButtonText = 'Request access'
  } else {
    acceptButtonText = 'Request access via Synapse.org'
  }

  const gotoSynapseAccessRequirementPage = () => {
    const subjectTypeFilter = subjectType ? `&TYPE=${subjectType}` : ''
    const subjectIdFilter = subjectId ? `&ID=${subjectId}` : ''
    window.open(
      `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}AccessRequirement:AR_ID=${accessRequirement.id}${subjectTypeFilter}${subjectIdFilter}`,
    )
  }
  const onAcceptClicked = () => {
    gotoSynapseAccessRequirementPage()
    // PORTALS-1483: and close the dialog.
    if (onHide) {
      onHide()
    }
  }

  const actContactInfo = accessRequirement.actContactInfo

  let actions: ButtonProps[] | undefined = undefined

  if (isAuthenticated && !isApproved) {
    actions = [
      {
        variant: 'outlined',
        onClick: onAcceptClicked,
        children: acceptButtonText,
      },
      {
        variant: 'text',
        onClick: onHide,
        children: 'I do not accept',
      },
    ]
  }

  let renderedTerms = <></>
  if (actContactInfo) {
    renderedTerms = <MarkdownSynapse markdown={actContactInfo} />
  } else if (wikiPage) {
    renderedTerms = (
      <MarkdownSynapse
        wikiId={wikiPage?.wikiPageId}
        ownerId={wikiPage?.ownerObjectId}
        objectType={wikiPage?.ownerObjectType}
      />
    )
  }
  return (
    <RequirementItem
      data-testid={'UnmanagedACTAccessRequirementItem'}
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
            Your data access request has been approved.{' '}
            <Link
              role={'button'}
              onClick={() =>
                setShowACTContactInfoInstructions(
                  !showACTContactInfoInstructions,
                )
              }
            >
              {showACTContactInfoInstructions
                ? 'Hide Instructions'
                : 'View Instructions'}
            </Link>
          </Typography>
          {showACTContactInfoInstructions && (
            <Box sx={{ my: 1 }}>{renderedTerms}</Box>
          )}
        </>
      ) : (
        renderedTerms
      )}
    </RequirementItem>
  )
}
