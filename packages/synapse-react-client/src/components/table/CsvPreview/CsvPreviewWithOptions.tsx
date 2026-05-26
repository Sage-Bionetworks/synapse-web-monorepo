import { RefreshTwoTone } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Stack,
  Typography,
} from '@mui/material'
import {
  CsvTableDescriptor,
  UploadToTablePreviewResult,
} from '@sage-bionetworks/synapse-client'
import CsvTableDescriptorForm, {
  CsvTableDescriptorFormHandle,
} from '@/components/table/CsvTableDescriptorForm/CsvTableDescriptorForm'
import { useRef } from 'react'
import CsvPreview from '@/components/table/CsvPreview/CsvPreview'

export type CsvPreviewWithOptionsProps = {
  /** File handle ID of the uploaded CSV, or null if not yet uploaded */
  fileHandleId: string | null
  /** Current CSV parsing configuration */
  csvTableDescriptor: CsvTableDescriptor
  /** Called when the user clicks "Refresh Preview" with the form's current values */
  onCsvTableDescriptorChange: (descriptor: CsvTableDescriptor) => void
  /** Called when the CSV preview data is fetched */
  onCsvPreviewDataChange?: (data: UploadToTablePreviewResult) => void
  /** Called when the preview load state changes */
  onIsLoadingChange?: (isLoading: boolean) => void
}

export default function CsvPreviewWithOptions({
  fileHandleId,
  csvTableDescriptor,
  onCsvTableDescriptorChange,
  onCsvPreviewDataChange,
  onIsLoadingChange,
}: CsvPreviewWithOptionsProps) {
  const csvDescriptorFormRef = useRef<CsvTableDescriptorFormHandle | null>(null)

  return (
    <Stack spacing={2}>
      {fileHandleId && (
        <CsvPreview
          fileHandleId={fileHandleId}
          csvTableDescriptor={csvTableDescriptor}
          onCsvPreviewDataChange={onCsvPreviewDataChange}
          onIsLoadingChange={onIsLoadingChange}
        />
      )}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant={'headline3'}>Show Options</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CsvTableDescriptorForm
            defaultValue={csvTableDescriptor}
            ref={csvDescriptorFormRef}
          />
          <Button
            variant={'outlined'}
            startIcon={<RefreshTwoTone />}
            sx={{ mt: 2 }}
            onClick={() => {
              if (csvDescriptorFormRef.current) {
                onCsvTableDescriptorChange(
                  csvDescriptorFormRef.current.getFormData(),
                )
              }
            }}
          >
            Refresh Preview
          </Button>
        </AccordionDetails>
      </Accordion>
    </Stack>
  )
}
