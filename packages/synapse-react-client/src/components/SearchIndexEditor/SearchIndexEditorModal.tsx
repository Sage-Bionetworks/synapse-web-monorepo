import { useGetEntity, useUpdateEntity } from '@/synapse-queries'
import { Alert, Box, Stack } from '@mui/material'
import { EntityType, SearchIndex } from '@sage-bionetworks/synapse-client'
import { Entity } from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import ConfirmationDialog from '../ConfirmationDialog'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { SearchResourceAutocomplete } from '../SearchManagement/SearchResourceAutocomplete'
import SqlDefinedTableEditor from '../SqlDefinedTableEditor/SqlDefinedTableEditor'

export type SearchIndexEditorModalProps = {
  open: boolean
  /** The SearchIndex to edit. */
  entityId: string
  onComplete: (entityId: string) => void
  onCancel: () => void
}

// The legacy Entity hooks require a `name`, which the generated SearchIndex model marks optional.
type SearchIndexEntity = SearchIndex & Pick<Entity, 'name'>

type SearchIndexFormValues = {
  definingSQL: string
  searchConfigurationId: string | null
}

const SEARCH_CONFIGURATION_HELP =
  'Optional. If omitted, the search index uses the closest search configuration bound to a parent folder or project, or the platform defaults if none is bound.'

function SearchIndexEditorDialog(props: SearchIndexEditorModalProps) {
  const { open, entityId, onComplete, onCancel } = props

  const {
    data: existingSearchIndex,
    isLoading: isEntityLoading,
    error: entityError,
  } = useGetEntity<SearchIndexEntity>(entityId, undefined, {
    // Don't refetch in the middle of an edit
    staleTime: Infinity,
  })

  // Holds only the fields the user has changed, so unedited fields fall back to the loaded entity.
  const [edits, setEdits] = useState<Partial<SearchIndexFormValues>>({})
  const definingSQL =
    edits.definingSQL ?? existingSearchIndex?.definingSQL ?? ''
  const searchConfigurationId =
    edits.searchConfigurationId !== undefined
      ? edits.searchConfigurationId
      : (existingSearchIndex?.searchConfigurationId ?? null)

  const updateMutation = useUpdateEntity<SearchIndexEntity>({
    onSuccess: entity => onComplete(entity.id!),
  })

  const isPending = updateMutation.isPending
  const error = entityError ?? updateMutation.error
  const canSave =
    existingSearchIndex !== undefined && definingSQL.trim() !== '' && !isPending

  return (
    <ConfirmationDialog
      open={open}
      title="Edit Search Index"
      maxWidth="md"
      content={
        isEntityLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <SynapseSpinner />
          </Box>
        ) : (
          <Stack spacing={2} sx={{ pt: 1 }}>
            <Box>
              <SqlDefinedTableEditor
                entityType={EntityType.searchindex}
                value={definingSQL}
                onChange={e =>
                  setEdits(previous => ({
                    ...previous,
                    definingSQL: e.target.value,
                  }))
                }
                disabled={isPending}
              />
            </Box>
            <SearchResourceAutocomplete
              resourceType="SEARCH_CONFIGURATION"
              label="Search Configuration"
              valueType="id"
              value={searchConfigurationId}
              onChange={value =>
                setEdits(previous => ({
                  ...previous,
                  searchConfigurationId: value,
                }))
              }
              disabled={isPending}
              helperText={SEARCH_CONFIGURATION_HELP}
            />
            {error && <Alert severity="error">{error.reason}</Alert>}
          </Stack>
        )
      }
      confirmButtonProps={{
        children: 'Save',
        disabled: !canSave,
        startIcon: isPending ? <SynapseSpinner /> : undefined,
      }}
      onConfirm={() => {
        if (existingSearchIndex) {
          updateMutation.mutate({
            ...existingSearchIndex,
            definingSQL,
            searchConfigurationId: searchConfigurationId ?? undefined,
          })
        }
      }}
      onCancel={onCancel}
    />
  )
}

/**
 * Edits the defining SQL and search configuration of an existing SearchIndex entity.
 */
export default function SearchIndexEditorModal(
  props: SearchIndexEditorModalProps,
) {
  // Remount on open/close so each opening starts from the saved entity
  return <SearchIndexEditorDialog key={String(props.open)} {...props} />
}
