import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone'
import { Box, Button } from '@mui/material'
import { EntityType } from '@sage-bionetworks/synapse-types'
import { useCallback } from 'react'
import { useAddFileBatchToDownloadList } from '../../synapse-queries'
import { useSynapseContext } from '../../utils'
import { EntityChildrenDetails } from '../EntityFinder/details/configurations/EntityChildrenDetails'
import { EntityDetailsListSharedProps } from '../EntityFinder/details/EntityDetailsList'
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
  const [selectedEntities, toggleSelection] = useEntitySelection(selectMultiple)

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
    visibleTypes: [EntityType.FILE],
    selected: selectedEntities,
    selectableTypes: [EntityType.FILE],
    isIdSelected,
    isSelectable: () => true,
    toggleSelection,
    showDirectDownloadColumn: true,
    hideAddToDownloadListColumn: true,
  }
  return (
    <>
      <Box>
        <EntityChildrenDetails
          parentContainerId={parentContainerId}
          {...sharedProps}
          // TODO: replace the AddToDownloadList column with direct download column
        />
      </Box>
      <Box mt={4}>
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
