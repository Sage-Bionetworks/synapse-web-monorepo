import { Typography } from '@mui/material'
import { RequirementItemStatus } from '../AccessApprovalCheckMark'
import RequirementItem from './RequirementItem'

/**
 * Renders a {@link RequirementItem} for a {@link LockAccessRequirement}.
 * Lock Access Requirements are used to lock down an entity while waiting for ACT to review.
 * These requirements cannot be fulfilled by the user.
 */
export default function LockAccessRequirementItem() {
  return (
    <RequirementItem
      data-testid="LockAccessRequirementItem"
      status={RequirementItemStatus.LOCKED}
    >
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
        This asset is not accessible to the public.
      </Typography>
      <Typography variant="body1">
        Contributor has not completed access conditions for this asset.
      </Typography>
      <Typography variant="body1">
        Sage Bionetworks cannot grant access without contributor approval.
      </Typography>
    </RequirementItem>
  )
}
