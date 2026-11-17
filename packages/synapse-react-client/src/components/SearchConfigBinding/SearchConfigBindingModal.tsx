import {
  useBindSearchConfiguration,
  useDeleteSearchConfigBinding,
  useGetSearchConfigBinding,
  useGetSearchManagementResource,
} from '@/synapse-queries/searchmanagement/useSearchManagement'
import { Alert, Box, Button, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { DialogBase } from '../DialogBase'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { getQualifiedName } from '../SearchManagement/SearchManagementUtils'
import { SearchResourceAutocomplete } from '../SearchManagement/SearchResourceAutocomplete'
import { displayToast } from '../ToastMessage/ToastMessage'

export type SearchConfigBindingModalProps = {
  open: boolean
  /** The Project, Folder, or SearchIndex whose search configuration binding is managed. */
  entityId: string
  onClose: () => void
}

function CurrentSearchConfiguration({
  searchConfigurationId,
}: {
  searchConfigurationId: string
}) {
  const { data: searchConfiguration, error } = useGetSearchManagementResource(
    'SEARCH_CONFIGURATION',
    searchConfigurationId,
  )
  return (
    <Box>
      <Typography variant="body1">
        Currently bound:{' '}
        <strong>
          {searchConfiguration
            ? getQualifiedName(searchConfiguration)
            : searchConfigurationId}
        </strong>
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mt: 1 }}>
          {error.reason}
        </Alert>
      )}
    </Box>
  )
}

function SearchConfigBindingDialog({
  open,
  entityId,
  onClose,
}: SearchConfigBindingModalProps) {
  const [selectedConfigurationId, setSelectedConfigurationId] = useState<
    string | null
  >(null)

  const {
    data: binding,
    isLoading: isBindingLoading,
    error: bindingError,
  } = useGetSearchConfigBinding(entityId)

  const bindMutation = useBindSearchConfiguration({
    onSuccess: () => {
      displayToast('Search configuration bound', 'success')
      onClose()
    },
  })
  const deleteMutation = useDeleteSearchConfigBinding({
    onSuccess: () => {
      displayToast('Search configuration binding removed', 'success')
      onClose()
    },
  })

  const isPending = bindMutation.isPending || deleteMutation.isPending
  const error = bindingError ?? bindMutation.error ?? deleteMutation.error

  return (
    <DialogBase
      open={open}
      title="Search Configuration"
      onCancel={onClose}
      content={
        <Stack spacing={2}>
          <Typography variant="body1" sx={{ color: 'grey.700' }}>
            Search indexes inside this entity that do not specify their own
            search configuration use the closest bound search configuration.
          </Typography>
          {isBindingLoading && (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <SynapseSpinner />
            </Box>
          )}
          {binding && (
            <CurrentSearchConfiguration
              searchConfigurationId={binding.searchConfigurationId!}
            />
          )}
          {binding === null && (
            <Typography variant="body1">
              No search configuration is bound to this entity.
            </Typography>
          )}
          <SearchResourceAutocomplete
            resourceType="SEARCH_CONFIGURATION"
            label="Search Configuration"
            valueType="id"
            value={selectedConfigurationId}
            onChange={setSelectedConfigurationId}
            disabled={isPending}
          />
          {error && <Alert severity="error">{error.reason}</Alert>}
        </Stack>
      }
      actions={
        <>
          {binding && (
            <Button
              color="error"
              variant="outlined"
              disabled={isPending}
              onClick={() => deleteMutation.mutate(entityId)}
            >
              Remove binding
            </Button>
          )}
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={selectedConfigurationId === null || isPending}
            onClick={() => {
              if (selectedConfigurationId !== null) {
                bindMutation.mutate({
                  entityId,
                  searchConfigurationId: selectedConfigurationId,
                })
              }
            }}
          >
            Save
          </Button>
        </>
      }
    />
  )
}

/**
 * Shows and changes the search configuration bound directly to an entity (Project, Folder, or SearchIndex).
 */
export default function SearchConfigBindingModal(
  props: SearchConfigBindingModalProps,
) {
  // Remount on open/close so each opening starts with a fresh selection
  return <SearchConfigBindingDialog key={String(props.open)} {...props} />
}
