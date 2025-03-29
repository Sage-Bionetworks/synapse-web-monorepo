import { useGetEntityActionsRequired } from '@/synapse-queries'
import useTrackTransientListItems from '@/utils/hooks/useTrackTransientListItems'
import { Action } from '@sage-bionetworks/synapse-types'
import { ActionRequiredListItem } from '../DownloadCart/ActionRequiredListItem'

export type EntityActionsRequiredProps = {
  entityId: string
  onViewSharingSettingsClicked?: (benefactorId: string) => void
}

export function EntityActionsRequired(props: EntityActionsRequiredProps) {
  const { entityId, onViewSharingSettingsClicked } = props
  const { data: actionRequiredList } = useGetEntityActionsRequired(entityId)
  const actions = actionRequiredList?.actions

  const allCompleteAndIncompleteActions = useTrackTransientListItems(
    actionRequiredList?.actions,
  )

  return (
    <>
      {actions && actions.length > 0 && (
        <div className="EntityActionsRequired">
          {allCompleteAndIncompleteActions.map((action: Action, index) => {
            if (action) {
              return (
                <ActionRequiredListItem
                  key={index}
                  action={action}
                  onViewSharingSettingsClicked={onViewSharingSettingsClicked}
                />
              )
            } else return false
          })}
        </div>
      )}
    </>
  )
}
