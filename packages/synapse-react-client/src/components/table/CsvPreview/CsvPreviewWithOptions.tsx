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
  ColumnType,
  CsvTableDescriptor,
  UploadToTablePreviewResult,
} from '@sage-bionetworks/synapse-client'
import CsvTableDescriptorForm, {
  CsvTableDescriptorFormHandle,
} from '@/components/table/CsvTableDescriptorForm/CsvTableDescriptorForm'
import { SchemaPropertiesMap } from '@/utils/jsonschema/getSchemaPropertyInfo'
import { useRef } from 'react'
import CsvPreview from '@/components/table/CsvPreview/CsvPreview'

export type CsvPreviewWithOptionsProps = {
  /** File handle ID of the uploaded CSV, or null if not yet uploaded */
  fileHandleId: string | null
  /** Current CSV parsing configuration */
  csvTableDescriptor: CsvTableDescriptor
  /** Known column types that take precedence over the CSV-content-based type suggestion */
  existingColumnSchema?: SchemaPropertiesMap
  /** Names of columns that already exist, even if not declared in existingColumnSchema */
  existingColumnNames?: readonly string[]
  /** Exact known ColumnTypes for columns that already exist, keyed by column name */
  existingColumnTypesByName?: Readonly<Record<string, ColumnType>>
  /** Called when the user clicks "Refresh Preview" with the form's current values */
  onCsvTableDescriptorChange: (descriptor: CsvTableDescriptor) => void
  /** Called when the CSV preview data is fetched */
  onCsvPreviewDataChange?: (data: UploadToTablePreviewResult) => void
  /** Called when the preview load state changes */
  onIsLoadingChange?: (isLoading: boolean) => void
}

/**
 * Displays a CSV preview table with expandable parsing options.
 * For upload/preview flows, prefer useCsvUploadPreview with CsvUploadPreviewContent.
 */
export default function CsvPreviewWithOptions({
  fileHandleId,
  csvTableDescriptor,
  existingColumnSchema,
  existingColumnNames,
  existingColumnTypesByName,
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
          existingColumnSchema={existingColumnSchema}
          existingColumnNames={existingColumnNames}
          existingColumnTypesByName={existingColumnTypesByName}
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
