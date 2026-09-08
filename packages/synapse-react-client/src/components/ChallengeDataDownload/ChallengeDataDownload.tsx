import {
  useAddFileBatchToDownloadList,
  useAddToDownloadList,
} from '@/synapse-queries'
import { useSynapseContext } from '@/utils'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone'
import { Box, Button } from '@mui/material'
import {
  AddToDownloadListRequest,
  EntityType,
} from '@sage-bionetworks/synapse-client'
import { useCallback, useRef, useState } from 'react'
import EntityTreeTable from '../EntityTreeTable/EntityTreeTable'
import { displayToast } from '../ToastMessage'

export type ChallengeDataDownloadProps = {
  parentContainerId: string
}

export function ChallengeDataDownload({
  parentContainerId,
}: ChallengeDataDownloadProps) {
  const { downloadCartPageUrl } = useSynapseContext()

  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const selectionMetaRef = useRef<
    Map<string, { entityType: EntityType; versionNumber: number | undefined }>
  >(new Map())

  const { mutateAsync: addBatchToDownloadListAsync } =
    useAddFileBatchToDownloadList()
  const { mutateAsync: addFolderToDownloadListAsync } = useAddToDownloadList()

  const onToggleSelection = useCallback(
    (
      entityId: string,
      entityType: EntityType,
      versionNumber: number | undefined,
    ) => {
      selectionMetaRef.current.set(entityId, { entityType, versionNumber })
      setSelectedIds(prev => {
        const next = new Set(prev)
        if (next.has(entityId)) {
          next.delete(entityId)
        } else {
          next.add(entityId)
        }
        return next
      })
    },
    [],
  )

  const onAddClick = useCallback(async () => {
    const fileEntities: { fileEntityId: string; versionNumber?: number }[] = []
    const folderRequests: AddToDownloadListRequest[] = []

    for (const entityId of selectedIds) {
      const meta = selectionMetaRef.current.get(entityId)
      if (meta?.entityType === EntityType.folder) {
        folderRequests.push({
          concreteType:
            'org.sagebionetworks.repo.model.download.AddToDownloadListRequest',
          parentId: entityId,
          recursive: true,
        })
      } else {
        fileEntities.push({
          fileEntityId: entityId,
          versionNumber: meta?.versionNumber,
        })
      }
    }

    try {
      const promises: Promise<unknown>[] = []
      if (fileEntities.length > 0) {
        promises.push(addBatchToDownloadListAsync(fileEntities))
      }
      for (const request of folderRequests) {
        promises.push(addFolderToDownloadListAsync(request))
      }
      await Promise.all(promises)
      displayToast(
        'File(s) were successfully added to your Download List.',
        'success',
        {
          primaryButtonConfig: {
            text: 'View Download List',
            onClick: () => (window.location.href = downloadCartPageUrl),
          },
        },
      )
    } catch (e) {
      const err = e as { reason?: string }
      displayToast(
        `Unable to add the file(s) to your Download List.${err.reason ? ` ${err.reason}` : ''}`,
        'danger',
      )
    }
  }, [
    selectedIds,
    addBatchToDownloadListAsync,
    addFolderToDownloadListAsync,
    downloadCartPageUrl,
  ])

  return (
    <>
      <Box>
        <EntityTreeTable
          rootId={parentContainerId}
          showRootNode={false}
          expandRootByDefault={true}
          disableEntityLinks={true}
          selectedIds={selectedIds}
          onToggleSelection={onToggleSelection}
        />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Button
          endIcon={<AddCircleTwoToneIcon />}
          variant={'outlined'}
          sx={{ alignSelf: 'flex-end', height: '47px' }}
          onClick={() => {
            void onAddClick()
          }}
          disabled={selectedIds.size === 0}
        >
          Add to Download List
        </Button>
      </Box>
    </>
  )
}
