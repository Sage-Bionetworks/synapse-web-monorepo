import React, { useState } from 'react'
import MarkdownSynapse from '../../markdown/MarkdownSynapse'
import { ACTAccessRequirement } from '../../../utils/synapseTypes'
import { useSynapseContext } from '../../../utils/SynapseContext'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../../utils/functions/getEndpoint'
import { Box, ButtonProps, Link, Typography } from '@mui/material'
import { useGetAccessRequirementStatus } from '../../../utils/hooks/SynapseAPI'
import RequirementItem from './RequirementItem'
import { RequirementItemStatus } from '../AccessApprovalCheckMark'

export type UnmanagedACTAccessRequirementItemProps = {
  entityId: string
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
  const { accessRequirement, entityId, onHide } = props
  const { accessToken } = useSynapseContext()

  const { data: accessRequirementStatus, isLoading: isLoadingStatus } =
    useGetAccessRequirementStatus(String(accessRequirement.id))

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
    window.open(
      `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!AccessRequirement:AR_ID=${accessRequirement.id}&TYPE=ENTITY&ID=${entityId}`,
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

  if (!!accessToken && !isApproved) {
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
            <Box sx={{ my: 1 }}>
              <MarkdownSynapse markdown={actContactInfo} />
            </Box>
          )}
        </>
      ) : (
        <MarkdownSynapse markdown={actContactInfo} />
      )}
    </RequirementItem>
  )
}
