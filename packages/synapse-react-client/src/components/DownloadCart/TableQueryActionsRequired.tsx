import { Box, Typography } from '@mui/material'
import {
  ColumnModel,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { noop, times } from 'lodash-es'
import { useEffect } from 'react'
import { useGetActionsRequiredForTableQuery } from '../../synapse-queries/entity/useActionsRequiredForTableQuery'
import useTrackTransientListItems from '../../utils/hooks/useTrackTransientListItems'
import { LoadingActionRequiredCard } from './ActionRequiredCard/ActionRequiredCard'
import { ActionRequiredListItem } from './ActionRequiredListItem'

export type TableQueryActionsRequiredProps = {
  /** The query request to use to select rows to check if actions are required. */
  queryBundleRequest: QueryBundleRequest
  /** The column models of the table */
  columnModels: ColumnModel[]
  /** Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission*/
  onViewSharingSettingsClicked?: (benefactorId: string) => void
  /** Invoked when the number of required actions changes. Can be used to set UI state based on if all actions have been fulfilled */
  onNumberOfRequiredActionsChanged?: (actionsRequired: number) => void
}

/**
 * Displays an interactive list of actions required to take for a user to gain access to Synapse entities referenced in
 * a table query.
 */
export function TableQueryActionsRequired(
  props: TableQueryActionsRequiredProps,
) {
  const {
    queryBundleRequest,
    columnModels,
    onNumberOfRequiredActionsChanged = noop,
    onViewSharingSettingsClicked,
  } = props

  // This component will track all completed actions, based on which actions are omitted from the ActionsRequiredResponse
  // as the user performs required tasks
  const { data: currentActionsRequired, isLoading } =
    useGetActionsRequiredForTableQuery(queryBundleRequest, columnModels, {
      throwOnError: true,
    })

  // PORTALS-2950 - Keep a record of actions that disappear from the server response - i.e. the 'completed' actions
  const allCompleteAndIncompleteActions = useTrackTransientListItems(
    currentActionsRequired,
  )

  useEffect(() => {
    if (currentActionsRequired) {
      onNumberOfRequiredActionsChanged(currentActionsRequired.length)
    }
  }, [currentActionsRequired, onNumberOfRequiredActionsChanged])

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      {/* If no actions were ever required, show a message */}
      {!isLoading && allCompleteAndIncompleteActions.length === 0 && (
        <Typography
          variant={'body1Italic'}
          sx={{ p: 4, textAlign: 'center', color: 'grey.700' }}
        >
          All requirements have been met. No actions are required.
        </Typography>
      )}
      {allCompleteAndIncompleteActions.map((item, index) => (
        <ActionRequiredListItem
          key={index}
          action={item.action}
          count={item.count}
          onViewSharingSettingsClicked={onViewSharingSettingsClicked}
        />
      ))}
      {isLoading && times(3).map(k => <LoadingActionRequiredCard key={k} />)}
    </Box>
  )
}
