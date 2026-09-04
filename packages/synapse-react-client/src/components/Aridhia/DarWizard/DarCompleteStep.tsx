import {
  Alert,
  Checkbox,
  FormControlLabel,
  Link as MuiLink,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material'
import { useGetAridhiaDatasetCatalogue } from '@/aridhia-queries/useGetAridhiaDatasetCatalogue'
import { AnsweredField } from '@/components/Aridhia/fairFormToRjsf'
import { TransferType } from './AridhiaDarWizard'

const RDCA_DAP_DUA_URL = 'https://portal.rdca.c-path.org/data-use-agreement'
const TABLE_CELL_SX = { typography: 'body1' } as const

export type DarCompleteStepProps = {
  datasetCode: string
  datasetName?: string
  selectedDictionaryNames: string[]
  /** RDCA-DAP's own UI treats an empty table selection as "every table" (see `DarDestinationStep`). */
  allTablesSelected: boolean
  workspaceRequested: boolean
  workspaceName?: string
  workspaceReference?: string
  /** The Destination step only prompts for transfer type when more than one is allowed;
   * showing it here otherwise would present an answer to a question the user was never asked. */
  showTransferType: boolean
  transferType: TransferType
  aboutAnswers: AnsweredField[]
  projectAnswers: AnsweredField[]
  termsAccepted: boolean
  onTermsAcceptedChange: (accepted: boolean) => void
}

/**
 * Summary of the assembled request plus the terms-of-use gate (D-Complete step). The upstream
 * FAIR `DatasetCatalogue` schema has no `rights` property despite the plan of record describing
 * one, so this always links the RDCA-DAP data use agreement rather than a per-dataset URL.
 */
export function DarCompleteStep(props: DarCompleteStepProps) {
  const {
    datasetCode,
    datasetName,
    selectedDictionaryNames,
    allTablesSelected,
    workspaceRequested,
    workspaceName,
    workspaceReference,
    showTransferType,
    transferType,
    aboutAnswers,
    projectAnswers,
    termsAccepted,
    onTermsAcceptedChange,
  } = props

  const catalogueQuery = useGetAridhiaDatasetCatalogue(datasetCode)
  const displayName = datasetName ?? catalogueQuery.data?.title ?? datasetCode

  return (
    <Stack spacing={2}>
      <Typography variant="h6">Review &amp; submit</Typography>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={TABLE_CELL_SX}>Dataset</TableCell>
            <TableCell sx={TABLE_CELL_SX}>{displayName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={TABLE_CELL_SX}>Tables</TableCell>
            <TableCell sx={TABLE_CELL_SX}>
              {allTablesSelected
                ? 'All tables'
                : selectedDictionaryNames.join(', ')}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={TABLE_CELL_SX}>Workspace</TableCell>
            <TableCell sx={TABLE_CELL_SX}>
              {workspaceRequested
                ? 'A new workspace will be provisioned'
                : (workspaceName ?? 'Existing workspace')}
            </TableCell>
          </TableRow>
          {workspaceRequested && (
            <TableRow>
              <TableCell sx={TABLE_CELL_SX}>Reference</TableCell>
              <TableCell sx={TABLE_CELL_SX}>{workspaceReference}</TableCell>
            </TableRow>
          )}
          {showTransferType && (
            <TableRow>
              <TableCell sx={TABLE_CELL_SX}>Transfer type</TableCell>
              <TableCell sx={TABLE_CELL_SX}>{transferType}</TableCell>
            </TableRow>
          )}
          {projectAnswers.map(answer => (
            <TableRow key={`project-${answer.label}`}>
              <TableCell sx={TABLE_CELL_SX}>{answer.label}</TableCell>
              <TableCell sx={TABLE_CELL_SX}>{answer.value}</TableCell>
            </TableRow>
          ))}
          {aboutAnswers.map(answer => (
            <TableRow key={`about-${answer.label}`}>
              <TableCell sx={TABLE_CELL_SX}>{answer.label}</TableCell>
              <TableCell sx={TABLE_CELL_SX}>{answer.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <FormControlLabel
        control={
          <Checkbox
            checked={termsAccepted}
            onChange={(_, checked) => onTermsAcceptedChange(checked)}
          />
        }
        label={
          <Typography variant="body1">
            I accept{' '}
            <MuiLink
              href={RDCA_DAP_DUA_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              the RDCA-DAP data use agreement
            </MuiLink>
            .
          </Typography>
        }
      />
      {!termsAccepted && (
        <Alert severity="info">
          Accept the data use agreement to submit this request.
        </Alert>
      )}
    </Stack>
  )
}
