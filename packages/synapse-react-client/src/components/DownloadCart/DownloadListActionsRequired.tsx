import { useGetAllDownloadListActionsRequired } from '@/synapse-queries'
import useTrackTransientListItems from '@/utils/hooks/useTrackTransientListItems'
import { Box } from '@mui/material'
import { times } from 'lodash-es'
import { LoadingActionRequiredCard } from './ActionRequiredCard/ActionRequiredCard'
import { ActionRequiredListItem } from './ActionRequiredListItem'

export type DownloadListActionsRequiredProps = {
  /** Invoked when a user clicks "View Sharing Settings" for a set of files that require the Download permission*/
  onViewSharingSettingsClicked?: (benefactorId: string) => void
}

export function DownloadListActionsRequired(
  props: DownloadListActionsRequiredProps,
) {
  const { onViewSharingSettingsClicked } = props

  // This component will track all completed actions, based on which actions are omitted from the ActionsRequiredResponse as the user performs required tasks
  // For accurate tracking, we must make sure we have all data. So we will fetch all pages instead of one page at a time.
  const { data: currentActionsRequired, isLoading } =
    useGetAllDownloadListActionsRequired({
      throwOnError: true,
    })

  // PORTALS-2950 - Keep a record of actions that disappear from the server response - i.e. the 'completed' actions
  const allCompleteAndIncompleteActions = useTrackTransientListItems(
    currentActionsRequired,
  )

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          pt: 5,
        }}
      >
        {allCompleteAndIncompleteActions.map((item, index) => {
          if (item) {
            return (
              <ActionRequiredListItem
                key={index}
                action={item.action}
                count={item.count}
                onViewSharingSettingsClicked={onViewSharingSettingsClicked}
              />
            )
          } else return false
        })}
        {isLoading && times(3).map(k => <LoadingActionRequiredCard key={k} />)}
      </Box>
    </>
  )
}
