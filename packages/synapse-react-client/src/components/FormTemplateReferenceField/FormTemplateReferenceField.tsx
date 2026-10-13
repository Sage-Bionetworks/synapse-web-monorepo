import { NAME_SEARCH_DEBOUNCE_DELAY_MS } from '@/components/dataaccess/FormTemplateTable'
import { StyledFormControl } from '@/components/styled/StyledFormControl'
import {
  useGetFormTemplateVersion,
  useGetFormTemplateVersions,
  useSearchFormTemplatesInfinite,
} from '@/synapse-queries/dataaccess/useFormTemplate'
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useDebouncedState } from '@react-hookz/web'
import {
  FormTemplate,
  FormTemplateReference,
} from '@sage-bionetworks/synapse-client'
import { keepPreviousData } from '@tanstack/react-query'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { useId, useMemo, useState } from 'react'
import { FormTemplatePreviewDialog } from './FormTemplatePreviewDialog'

export const SELECT_FORM_TEMPLATE_ERROR =
  'Select a form template and version for this Access Requirement.'

/**
 * Why a reference cannot be saved on an Access Requirement, or undefined if it can. These mirror
 * the checks the server makes when an Access Requirement is created or updated.
 */
export function getFormTemplateReferenceError(
  reference: FormTemplateReference | undefined,
  loadedVersion: { template?: FormTemplate; error?: SynapseClientError },
): string | undefined {
  if (!reference) {
    return SELECT_FORM_TEMPLATE_ERROR
  }
  const description = `Version ${reference.templateVersionNumber} of the form template with the id '${reference.templateId}'`
  if (loadedVersion.error) {
    return `${description} could not be loaded: ${loadedVersion.error.reason}`
  }
  if (loadedVersion.template?.deprecated) {
    return `${description} is deprecated, so it cannot be referenced by an Access Requirement.`
  }
  return undefined
}

export function useFormTemplateReferenceError(
  reference: FormTemplateReference | undefined,
): string | undefined {
  const { data: template, error } = useGetFormTemplateVersion(
    reference?.templateId,
    reference?.templateVersionNumber,
  )
  return getFormTemplateReferenceError(reference, {
    template,
    error: error ?? undefined,
  })
}

function describeVersion(version: FormTemplate, latestVersionNumber: number) {
  const labels = [
    version.versionNumber === latestVersionNumber ? 'latest' : undefined,
    version.deprecated ? 'deprecated' : undefined,
  ].filter(Boolean)
  return labels.length > 0
    ? `Version ${version.versionNumber} (${labels.join(', ')})`
    : `Version ${version.versionNumber}`
}

export type FormTemplateReferenceFieldProps = {
  value: FormTemplateReference | undefined
  /* The template version is never changed except through this callback; a newer version is never adopted automatically. */
  onChange: (value: FormTemplateReference) => void
  /* A reason the current value is not valid, shown below the field */
  error?: string | null
}

/**
 * Select the version of a FormTemplate that an Access Requirement presents to requesters.
 */
export function FormTemplateReferenceField(
  props: FormTemplateReferenceFieldProps,
) {
  const { value, onChange, error } = props
  const versionLabelId = useId()

  const [searchText, setSearchText] = useDebouncedState<string>(
    '',
    NAME_SEARCH_DEBOUNCE_DELAY_MS,
  )
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const searchRequest = useMemo(
    () => ({ name: searchText || undefined, includeDeprecated: false }),
    [searchText],
  )
  const { data: searchData, isLoading: isSearching } =
    useSearchFormTemplatesInfinite(searchRequest, {
      placeholderData: keepPreviousData,
    })

  const { data: selectedVersion } = useGetFormTemplateVersion(
    value?.templateId,
    value?.templateVersionNumber,
  )
  const { versions, latestVersion } = useGetFormTemplateVersions(
    value?.templateId,
  )

  const templateOptions = useMemo(() => {
    const searchResults =
      searchData?.pages.flatMap(page => page.results ?? []) ?? []
    return selectedVersion &&
      !searchResults.some(template => template.id === selectedVersion.id)
      ? [selectedVersion, ...searchResults]
      : searchResults
  }, [searchData, selectedVersion])

  const latestVersionNumber = latestVersion?.versionNumber ?? 0
  const canUpdateToLatest =
    value != null &&
    latestVersion != null &&
    !latestVersion.deprecated &&
    latestVersionNumber > value.templateVersionNumber

  return (
    <Stack sx={{ gap: 2 }}>
      <Autocomplete<FormTemplate>
        id="formTemplate"
        options={templateOptions}
        loading={isSearching}
        value={selectedVersion ?? null}
        // Names are matched by the server
        filterOptions={options => options}
        onInputChange={(_event, text, reason) => {
          if (reason === 'input') {
            setSearchText(text)
          }
        }}
        onChange={(_event, template) => {
          // Choosing the template that is already selected must not move it to the latest version
          if (
            template?.id != null &&
            template.versionNumber != null &&
            template.id !== value?.templateId
          ) {
            onChange({
              templateId: template.id,
              templateVersionNumber: template.versionNumber,
            })
          }
        }}
        getOptionLabel={template => template.name}
        isOptionEqualToValue={(option, selected) => option.id === selected.id}
        renderInput={params => (
          <TextField
            {...params}
            label="Form template"
            error={Boolean(error)}
            helperText="Search for the form template that requesters complete to request access."
          />
        )}
      />
      {value && (
        <StyledFormControl error={Boolean(error)}>
          <InputLabel id={versionLabelId}>Template version</InputLabel>
          <Select
            labelId={versionLabelId}
            value={value.templateVersionNumber}
            onChange={event =>
              onChange({
                templateId: value.templateId,
                templateVersionNumber: Number(event.target.value),
              })
            }
          >
            {versions.map(version => (
              <MenuItem
                key={version.versionNumber}
                value={version.versionNumber}
                disabled={version.deprecated}
              >
                {describeVersion(version, latestVersionNumber)}
              </MenuItem>
            ))}
            {versions.every(
              version => version.versionNumber !== value.templateVersionNumber,
            ) && (
              <MenuItem value={value.templateVersionNumber} disabled>
                Version {value.templateVersionNumber}
              </MenuItem>
            )}
          </Select>
        </StyledFormControl>
      )}
      {selectedVersion?.deprecated && (
        <Alert severity="warning">
          Version {selectedVersion.versionNumber} of this form template is
          deprecated. Select another version before saving.
        </Alert>
      )}
      {canUpdateToLatest && (
        <Alert
          severity="info"
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() =>
                onChange({
                  templateId: value.templateId,
                  templateVersionNumber: latestVersionNumber,
                })
              }
            >
              Update to version {latestVersionNumber}
            </Button>
          }
        >
          A newer version of this form template is available. This Access
          Requirement stays on version {value.templateVersionNumber} until you
          update it.
        </Alert>
      )}
      {selectedVersion && (
        <Box>
          <Typography variant="body1">
            Pinned schema: <code>{selectedVersion.schema$id}</code>
          </Typography>
          <Button
            variant="outlined"
            sx={{ mt: 1 }}
            onClick={() => setIsPreviewOpen(true)}
          >
            Preview form
          </Button>
          <FormTemplatePreviewDialog
            open={isPreviewOpen}
            onClose={() => setIsPreviewOpen(false)}
            template={selectedVersion}
          />
        </Box>
      )}
      {error && <FormHelperText error>{error}</FormHelperText>}
    </Stack>
  )
}
