import React from 'react'
import { Action } from '../../utils/synapseTypes/DownloadListV2/ActionRequired'
import { useGetEntityActionsRequired } from '../../utils/hooks/SynapseAPI/entity/useGetEntityActionsRequired'
import { renderActionRequired } from '../download_list_v2/DownloadListActionsRequired'

export type EntityActionsRequiredProps = {
  entityId: string
  onViewSharingSettingsClicked?: (benefactorId: string) => void
}

export const EntityActionsRequired: React.FunctionComponent<
  EntityActionsRequiredProps
> = props => {
  const { entityId, onViewSharingSettingsClicked } = props
  const { data: actionRequiredList } = useGetEntityActionsRequired(entityId)
  const actions = actionRequiredList?.actions

  return (
    <>
      {actions && actions.length > 0 && (
        <div className="EntityActionsRequired">
          {actions.map((action: Action) => {
            if (action) {
              return renderActionRequired({
                action: action,
                onViewSharingSettingsClicked,
              })
            } else return false
          })}
        </div>
      )}
    </>
  )
}
