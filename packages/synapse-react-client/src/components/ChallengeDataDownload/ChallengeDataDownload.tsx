import { useAddFileBatchToDownloadList } from '@/synapse-queries'
import { useSynapseContext } from '@/utils'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone'
import { Box, Button } from '@mui/material'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { useCallback } from 'react'
import { EntityChildrenDetails } from '../EntityFinder/details/configurations/EntityChildrenDetails'
import { EntityDetailsListSharedProps } from '../EntityFinder/details/EntityDetailsList'
import { DetailsViewColumn } from '../EntityFinder/details/view/DetailsView'
import { EntityFinderHeader } from '../EntityFinder/EntityFinderHeader'
import { useEntitySelection } from '../EntityFinder/useEntitySelection'
import { VersionSelectionType } from '../EntityFinder/VersionSelectionType'
import { displayToast } from '../ToastMessage'

export type ChallengeDataDownloadProps = {
  parentContainerId: string
}

export function ChallengeDataDownload({
  parentContainerId,
}: ChallengeDataDownloadProps) {
  const { downloadCartPageUrl } = useSynapseContext()
  const selectMultiple = true
  const { selectedEntities, toggleSelection } =
    useEntitySelection(selectMultiple)

  const { mutate: addBatchToDownloadList } = useAddFileBatchToDownloadList({
    onSuccess: () => {
      displayToast(
        'File(s) were successfully added to your Download Cart.',
        'success',
        {
          primaryButtonConfig: {
            text: 'View Download Cart',
            onClick: () => (window.location.href = downloadCartPageUrl),
          },
        },
      )
    },
    onError: e => {
      displayToast(
        `Unable to add the file to your Download Cart. ${e.reason}`,
        'danger',
      )
    },
  })

  const isIdSelected = useCallback(
    (entity: EntityFinderHeader) => {
      return selectedEntities.has(entity.id)
    },
    [selectedEntities],
  )

  const onAddClick = useCallback(() => {
    const entities = Array.from(selectedEntities.values()).map(reference => {
      return {
        fileEntityId: reference.targetId,
        versionNumber: reference.targetVersionNumber,
      }
    })
    addBatchToDownloadList(entities)
  }, [selectedEntities, addBatchToDownloadList])

  const sharedProps: EntityDetailsListSharedProps = {
    versionSelection: VersionSelectionType.REQUIRED,
    selectColumnType: 'checkbox',
    enableSelectAll: true,
    visibleTypes: [EntityType.file],
    selected: selectedEntities,
    selectableTypes: [EntityType.file],
    isIdSelected,
    isSelectable: () => true,
    toggleSelection,
    hiddenColumns: [
      DetailsViewColumn.BADGES,
      DetailsViewColumn.ADD_TO_DOWNLOAD_CART,
      DetailsViewColumn.CREATED_ON,
      DetailsViewColumn.VERSION,
      DetailsViewColumn.MODIFIED_BY,
    ],
  }
  return (
    <>
      <Box>
        <EntityChildrenDetails
          parentContainerId={parentContainerId}
          {...sharedProps}
        />
      </Box>
      <Box
        sx={{
          mt: 4,
        }}
      >
        <Button
          endIcon={<AddCircleTwoToneIcon />}
          variant={'outlined'}
          sx={{ alignSelf: 'flex-end', height: '47px' }}
          onClick={onAddClick}
          disabled={!selectedEntities.toArray().length}
        >
          Add to Download Cart
        </Button>
      </Box>
    </>
  )
}
