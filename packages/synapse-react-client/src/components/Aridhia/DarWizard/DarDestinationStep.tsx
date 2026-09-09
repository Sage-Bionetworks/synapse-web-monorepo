import {
  Alert,
  Autocomplete,
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useGetAridhiaDictionaries } from '@/aridhia-queries/useGetAridhiaDictionaries'
import { useGetAridhiaWorkspaceLocations } from '@/aridhia-queries/useGetAridhiaWorkspaceLocations'
import { useGetAridhiaWorkspaces } from '@/aridhia-queries/useGetAridhiaWorkspaces'
import { TransferType } from './AridhiaDarWizard'

const NEW_WORKSPACE_VALUE = '__request_new_workspace__'
const TRANSFER_TYPE_LABELS: Record<TransferType, string> = {
  clear: 'Clear (identifiable) data',
  pseudonymised: 'Pseudonymised data',
  manual: 'Manual review',
}

export type DarDestinationStepProps = {
  datasetCode: string
  allowedTransferTypes: TransferType[]
  selectedDictionaryCodes: string[]
  onSelectedDictionaryCodesChange: (codes: string[]) => void
  workspaceRequested: boolean
  workspaceLocation: string | undefined
  workspaceUuid: string | undefined
  onWorkspaceChange: (change: {
    workspaceRequested: boolean
    workspaceLocation: string | undefined
    workspaceUuid: string | undefined
  }) => void
  transferType: TransferType
  onTransferTypeChange: (transferType: TransferType) => void
}

/**
 * Aridhia DAR step to facilitate
 * - Selection of tables for which the user is requesting access
 * - Selection of workspace destination
 * - If applicable, transfer type
 *
 * RDCA-DAP's UI calls these "Tables"; the API/Aridhia calls them "dictionaries".
 * Copy matches RDCA-DAP.
 */
export function DarDestinationStep(props: DarDestinationStepProps) {
  const {
    datasetCode,
    allowedTransferTypes,
    selectedDictionaryCodes,
    onSelectedDictionaryCodesChange,
    workspaceRequested,
    workspaceLocation,
    workspaceUuid,
    onWorkspaceChange,
    transferType,
    onTransferTypeChange,
  } = props

  const dictionariesQuery = useGetAridhiaDictionaries(datasetCode)
  const locationsQuery = useGetAridhiaWorkspaceLocations(datasetCode)
  const workspacesQuery = useGetAridhiaWorkspaces(
    datasetCode,
    workspaceLocation,
  )

  const dictionaries = dictionariesQuery.data?.items ?? []
  const locations = locationsQuery.data?.items ?? []
  const workspaces = workspacesQuery.data?.items ?? []

  const dictionariesWithCode = dictionaries.filter(
    (dictionary): dictionary is { code: string; name: string } =>
      !!dictionary.code,
  )
  const selectedDictionaries = dictionariesWithCode.filter(dictionary =>
    selectedDictionaryCodes.includes(dictionary.code),
  )

  return (
    <Stack spacing={4}>
      <Stack spacing={1}>
        <Typography variant="h6">Tables</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Choose specific tables to include in your request, or leave this empty
          to request access to every table. Once approved, each included table
          will be transferred to your workspace.
        </Typography>
        {dictionariesQuery.isLoading && <Skeleton height={56} />}
        {dictionariesQuery.isError && (
          <Alert severity="error">Unable to load tables.</Alert>
        )}
        {!dictionariesQuery.isLoading && !dictionariesQuery.isError && (
          <Autocomplete
            multiple
            disableCloseOnSelect
            options={dictionariesWithCode}
            getOptionLabel={dictionary => dictionary.name}
            isOptionEqualToValue={(option, value) => option.code === value.code}
            value={selectedDictionaries}
            onChange={(_, value) =>
              onSelectedDictionaryCodesChange(value.map(v => v.code))
            }
            renderInput={params => (
              <TextField
                {...params}
                label="Tables"
                placeholder={
                  selectedDictionaryCodes.length === 0 ? 'All tables' : ''
                }
              />
            )}
          />
        )}
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h6">Workspace destination</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Choose an existing workspace, or request a new one as part of this
          request.
        </Typography>
        {locationsQuery.isLoading && <Skeleton height={56} />}
        {locationsQuery.isError && (
          <Alert severity="error">Unable to load workspace locations.</Alert>
        )}
        {!locationsQuery.isLoading && (
          <TextField
            select
            label="Location"
            value={workspaceLocation ?? ''}
            onChange={e =>
              onWorkspaceChange({
                workspaceRequested,
                workspaceLocation: e.target.value || undefined,
                workspaceUuid: undefined,
              })
            }
          >
            {locations.map(location => (
              <MenuItem key={location.value} value={location.value}>
                {location.description ?? location.value}
              </MenuItem>
            ))}
          </TextField>
        )}
        {workspaceLocation && (
          <TextField
            select
            label="Workspace"
            value={
              workspaceRequested ? NEW_WORKSPACE_VALUE : (workspaceUuid ?? '')
            }
            onChange={e => {
              const value = e.target.value
              onWorkspaceChange(
                value === NEW_WORKSPACE_VALUE
                  ? {
                      workspaceRequested: true,
                      workspaceLocation,
                      workspaceUuid: undefined,
                    }
                  : {
                      workspaceRequested: false,
                      workspaceLocation,
                      workspaceUuid: value || undefined,
                    },
              )
            }}
          >
            {workspaces.map(workspace => (
              <MenuItem key={workspace.uuid} value={workspace.uuid}>
                {workspace.name ?? workspace.uuid}
              </MenuItem>
            ))}
            <MenuItem value={NEW_WORKSPACE_VALUE}>
              Request a new workspace
            </MenuItem>
          </TextField>
        )}
      </Stack>

      {allowedTransferTypes.length > 1 && (
        <Stack spacing={1}>
          <Typography variant="h6">Transfer type</Typography>
          <RadioGroup
            value={transferType}
            onChange={e => onTransferTypeChange(e.target.value as TransferType)}
          >
            {allowedTransferTypes.map(type => (
              <FormControlLabel
                key={type}
                value={type}
                control={<Radio />}
                label={TRANSFER_TYPE_LABELS[type]}
              />
            ))}
          </RadioGroup>
        </Stack>
      )}
    </Stack>
  )
}
