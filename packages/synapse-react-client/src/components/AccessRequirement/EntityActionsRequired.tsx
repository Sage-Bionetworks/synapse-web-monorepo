import React from 'react'
import { Action } from '@sage-bionetworks/synapse-types'
import { useGetEntityActionsRequired } from '../../synapse-queries'
import { ActionRequiredListItem } from '../DownloadCart/ActionRequiredListItem'

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
          {actions.map((action: Action, index) => {
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
