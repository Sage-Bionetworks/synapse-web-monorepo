import { useGetEntity } from '@/synapse-queries'
import { canTableQueryBeAddedToDownloadList } from '@/utils/functions/queryUtils'
import { GetAppTwoTone } from '@mui/icons-material'
import { Button, Box } from '@mui/material'
import { Table } from '@sage-bionetworks/synapse-types'
import { Provider, useAtom, useStore } from 'jotai'
import { useQueryContext, QueryContext } from '../../QueryContext'
import { useQueryVisualizationContext } from '../../QueryVisualizationWrapper'
import { selectedRowsAtom } from '../../QueryWrapper/TableRowSelectionState'
import { useGetQueryMetadata } from '../../QueryWrapper/useGetQueryMetadata'
import { getFileColumnModelId } from '../SynapseTableUtils'
import CustomControlButton from '../TopLevelControls/CustomControlButton'
import { CustomControl } from '../TopLevelControls/TopLevelControls'
import { RowSelectionUI } from './RowSelectionUI'
import { TableQueryDownloadConfirmation } from '@/components/download_list'
import { toast } from 'react-hot-toast'

const SEND_TO_ANALYSIS_PLATFORM_BUTTON_ID =
  'SendToAnalysisPlatformRowSelectionControlButton'

export type RowSelectionControlsProps = {
  customControls?: CustomControl[]
  remount?: () => void
}

/**
 * This component is responsible for rendering the RowSelectionUI and the custom controls. Must be wrapped in a
 * QueryContext and a QueryVisualizationContext.
 * @param props
 * @constructor
 */
export function RowSelectionControls(props: RowSelectionControlsProps) {
  const { customControls = [], remount } = props
  const queryContext = useQueryContext()
  const { entityId, versionNumber, getCurrentQueryRequest } = useQueryContext()
  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)
  const { data: queryMetadata } = useGetQueryMetadata()
  const [selectedRows, setSelectedRows] = useAtom(selectedRowsAtom)
  const jotaiStore = useStore()

  const {
    setIsShowingExportToAnalysisPlatformModal,
    enabledExternalAnalysisPlatforms,
  } = useQueryVisualizationContext()

  const showExportToAnalysisPlatformButton =
    enabledExternalAnalysisPlatforms.length > 0

  const refresh = () => {
    // clear selection
    setSelectedRows([])
    if (remount) {
      remount()
    }
  }
  const fileColumnId = getFileColumnModelId(queryMetadata?.columnModels)
  const showAddToDownloadCart = canTableQueryBeAddedToDownloadList(
    entity,
    fileColumnId,
  )

  return (
    <RowSelectionUI
      show={selectedRows.length > 0}
      selectedRowCount={selectedRows.length}
      onClearSelection={() => setSelectedRows([])}
      customControls={
        <>
          {customControls.map(customControl => {
            return (
              <CustomControlButton
                key={customControl.buttonText}
                variant="contained"
                callbackData={{
                  tableId: entityId!,
                  queryMetadata: queryMetadata,
                  selectedRows,
                  refresh,
                  request: getCurrentQueryRequest(),
                }}
                control={customControl}
                startIcon={customControl.icon}
              />
            )
          })}
          {/* TODO: Generic button */}
          {showExportToAnalysisPlatformButton && (
            <Button
              variant="outlined"
              onClick={() => {
                setIsShowingExportToAnalysisPlatformModal(true)
              }}
              id={SEND_TO_ANALYSIS_PLATFORM_BUTTON_ID}
            >
              Send to Analysis Platform
            </Button>
          )}
          {showAddToDownloadCart && (
            <Button
              variant="contained"
              onClick={() => {
                const toastId = toast.custom(
                  <Provider store={jotaiStore}>
                    <QueryContext.Provider value={queryContext}>
                      <Box
                        sx={{
                          width: '100%',
                        }}
                      >
                        <TableQueryDownloadConfirmation
                          onClose={() => {
                            toast.dismiss(toastId)
                          }}
                        />
                      </Box>
                    </QueryContext.Provider>
                  </Provider>,
                  {
                    duration: Infinity,
                  },
                )
              }}
              startIcon={<GetAppTwoTone />}
            >
              Add to Download Cart
            </Button>
          )}
        </>
      }
    />
  )
}
