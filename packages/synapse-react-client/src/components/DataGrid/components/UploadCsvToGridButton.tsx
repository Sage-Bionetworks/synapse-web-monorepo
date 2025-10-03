import GridMenuButton from '@/components/DataGrid/components/GridMenuButton/GridMenuButton'
import UploadCsvToGridDialog from '@/components/DataGrid/components/UploadCsvToGridDialog'
import { useGetEntity } from '@/synapse-queries/index'
import { UploadTwoTone } from '@mui/icons-material'
import Skeleton from '@mui/material/Skeleton'
import { instanceOfRecordSet } from '@sage-bionetworks/synapse-client'
import { useState } from 'react'

export type UploadCsvToGridButtonProps = {
  sourceEntityId: string
  gridSessionId: string
}

export default function UploadCsvToGridButton(
  props: UploadCsvToGridButtonProps,
) {
  const { sourceEntityId, gridSessionId } = props

  const [showDialog, setShowDialog] = useState(false)

  const { data: entity, isLoading: isLoadingEntity } =
    useGetEntity(sourceEntityId)

  if (isLoadingEntity) {
    return <Skeleton variant="rectangular" width={100} />
  }
  if (entity && !instanceOfRecordSet(entity)) {
    // Currently, grid upload is only supported for record sets
    return null
  }

  return (
    <>
      {showDialog && (
        // Explicitly unmount the dialog when it is closed so that its state is reset
        // This prevents a user from getting stuck in an error state/uploading the wrong CSV
        <UploadCsvToGridDialog
          gridSessionId={gridSessionId}
          open={showDialog}
          onClose={() => setShowDialog(false)}
          onComplete={() => setShowDialog(false)}
        />
      )}
      <GridMenuButton
        onClick={() => {
          setShowDialog(true)
        }}
        variant="outlined"
        startIcon={<UploadTwoTone />}
      >
        Upload
      </GridMenuButton>
    </>
  )
}
