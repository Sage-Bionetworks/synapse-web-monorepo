import { Box } from '@mui/material'
import { useQueryContext } from '../../QueryContext'
import {
  useHasSelectedRowsAtomValue,
  useSelectedRowsAtomValue,
} from '../../QueryWrapper/TableRowSelectionState'
import { useGetQueryMetadata } from '../../QueryWrapper/useGetQueryMetadata'
import CustomControlPanel from './CustomControlPanel'
import { CustomControl } from '../TopLevelControls/TopLevelControls'
import { getNumberOfResultsToInvokeAction } from '../TopLevelControls/TopLevelControlsUtils'

export type CustomControlsRendererProps = {
  customControls?: CustomControl[]
  remount: () => void
}

export function CustomControlsRenderer(props: CustomControlsRendererProps) {
  const { customControls, remount } = props
  const queryContext = useQueryContext()
  const { data: queryMetadata } = useGetQueryMetadata()
  const selectedRows = useSelectedRowsAtomValue()
  const hasSelectedRows = useHasSelectedRowsAtomValue()
  const { entityId, getCurrentQueryRequest } = queryContext

  if (!customControls || customControls.length === 0) {
    return null
  }

  const numberOfResultsToInvokeAction = getNumberOfResultsToInvokeAction(
    hasSelectedRows,
    selectedRows,
    queryMetadata?.queryCount,
  )

  const refresh = () => {
    remount()
  }

  return (
    <Box
      className="CustomControlsRenderer"
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, my: 0 }}
    >
      {customControls.map((customControl: CustomControl, index: number) => (
        <CustomControlPanel
          key={customControl.buttonID ?? `${customControl.buttonText}-${index}`}
          disabled={!numberOfResultsToInvokeAction}
          control={customControl}
          callbackData={{
            tableId: entityId!,
            queryMetadata: queryMetadata,
            selectedRows,
            refresh,
            request: getCurrentQueryRequest(),
          }}
        />
      ))}
    </Box>
  )
}
