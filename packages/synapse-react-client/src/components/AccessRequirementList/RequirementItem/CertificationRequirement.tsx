import React from 'react'
import { useGetCurrentUserBundle } from '../../../synapse-queries'
import { Link, Typography } from '@mui/material'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../../utils/functions/getEndpoint'
import RequirementItem from './RequirementItem'
import { RequirementItemStatus } from '../AccessApprovalCheckMark'

/**
 * When creating requests for access requirements on a particular file, one or more access requirements may require that the
 * user is certified.
 *
 * This component checks if the user is certified, and if not, provides a link on how to begin certification.
 */
export default function CertificationRequirement() {
  const { data: userBundle, isLoading } = useGetCurrentUserBundle()

  const requirementItemState: RequirementItemStatus = isLoading
    ? RequirementItemStatus.LOADING
    : userBundle?.isCertified
    ? RequirementItemStatus.COMPLETE
    : RequirementItemStatus.LOCKED

  return (
    <RequirementItem status={requirementItemState}>
      <Typography variant="body1">
        You must first become a{' '}
        <Link href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Quiz:`}>
          certified user
        </Link>
      </Typography>
      {isLoading && <span className="spinner" />}
      {userBundle?.isCertified && (
        <Typography variant={'body1'}>You are a certified user</Typography>
      )}
    </RequirementItem>
  )
}
