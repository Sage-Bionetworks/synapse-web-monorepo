import {
  useGetEntityBundle,
  useIsCurrentUserACTMember,
} from '@/synapse-queries'
import {
  isEntityRefCollectionView,
  isEntityView,
} from '@/utils/functions/EntityTypeUtils'
import Button from '@/react-ui/components/Button'
import { RestrictionLevel } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import IconSvg from '../../IconSvg/IconSvg'
import ImposeRestrictionDialog from '../ImposeRestrictionDialog/ImposeRestrictionDialog'

export type AddConditionsForUseButtonProps = {
  entityId: string
  /* Handler for when an ACT member clicks the button. */
  onACTMemberClick: () => void
}

export default function AddConditionsForUseButton(
  props: AddConditionsForUseButtonProps,
) {
  const { entityId, onACTMemberClick } = props
  const [openDialog, setOpenDialog] = useState(false)

  const { data: entityBundle, isLoading: isLoadingBundle } =
    useGetEntityBundle(entityId)

  const { data: isActMember, isLoading: isLoadingIsACT } =
    useIsCurrentUserACTMember()
  const isLoading = isLoadingBundle || isLoadingIsACT
  // EntityViews and Dataset/Collections can have ARs, but they aren't meaningful, so hide the button (SWC-5909)
  const isRestrictableEntityType =
    entityBundle?.entity &&
    !isEntityView(entityBundle.entity) &&
    !isEntityRefCollectionView(entityBundle.entity)
  const hasAdministrativeAccess = entityBundle?.permissions.canChangePermissions
  const hasNoExistingRestrictions =
    entityBundle?.restrictionInformation?.restrictionLevel ===
    RestrictionLevel.OPEN

  const showButton =
    !isLoading &&
    hasNoExistingRestrictions &&
    isRestrictableEntityType &&
    (hasAdministrativeAccess || isActMember)

  return (
    <>
      <ImposeRestrictionDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        entityId={entityId}
      />
      {showButton && (
        <Button
          onClick={() => {
            if (isActMember) {
              onACTMemberClick()
            } else {
              setOpenDialog(true)
            }
          }}
          startIcon={<IconSvg icon={'addConditions'} wrap={false} />}
        >
          Add Conditions for Use
        </Button>
      )}
    </>
  )
}
