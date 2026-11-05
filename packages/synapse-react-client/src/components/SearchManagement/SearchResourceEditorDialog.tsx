import { ConfirmationDialog } from '@/components/ConfirmationDialog/ConfirmationDialog'
import { displayToast } from '@/components/ToastMessage/ToastMessage'
import {
  SearchManagementResource,
  SearchManagementResourceType,
} from '@/synapse-queries/searchmanagement/SearchManagementResourceType'
import {
  useCreateSearchManagementResource,
  useUpdateSearchManagementResource,
} from '@/synapse-queries/searchmanagement/useSearchManagement'
import { Alert, Stack, TextField } from '@mui/material'
import { useCallback, useState } from 'react'
import { OrganizationAutocomplete } from './OrganizationAutocomplete'
import {
  getQualifiedName,
  SEARCH_MANAGEMENT_RESOURCE_LABELS,
  SEARCH_RESOURCE_NAME_PATTERN,
} from './SearchManagementUtils'
import {
  buildResource,
  getNewResourcePayload,
  getPayload,
  isPayloadComplete,
  SearchResourcePayload,
} from './SearchResourcePayload'
import { SearchResourcePayloadEditor } from './SearchResourcePayloadEditor'

export const SEARCH_RESOURCE_NAME_HELPER_TEXT =
  'Must start with a letter and contain only letters, digits, and underscores. Cannot be changed later.'
export const SEARCH_RESOURCE_NAME_ERROR_TEXT =
  'Name must start with a letter and contain only letters, digits, and underscores.'

export type SearchResourceEditorDialogProps = {
  resourceType: SearchManagementResourceType
  open: boolean
  /** The resource to edit. Omit to create a new resource. */
  resource?: SearchManagementResource
  onClose: () => void
}

/**
 * Creates or edits any type of Search Management resource. The form resets each time the dialog opens.
 */
export function SearchResourceEditorDialog(
  props: SearchResourceEditorDialogProps,
) {
  const [openCount, setOpenCount] = useState(0)
  const [wasOpen, setWasOpen] = useState(props.open)
  if (props.open !== wasOpen) {
    setWasOpen(props.open)
    if (props.open) {
      setOpenCount(count => count + 1)
    }
  }
  return (
    <SearchResourceEditorDialogForm
      key={`${openCount}-${props.resource?.id ?? 'new'}`}
      {...props}
    />
  )
}

function SearchResourceEditorDialogForm({
  resourceType,
  open,
  resource,
  onClose,
}: SearchResourceEditorDialogProps) {
  const isEditing = resource !== undefined
  const { singular } = SEARCH_MANAGEMENT_RESOURCE_LABELS[resourceType]

  const [organizationName, setOrganizationName] = useState<string | null>(
    resource?.organizationName ?? null,
  )
  const [name, setName] = useState(resource?.name ?? '')
  const [description, setDescription] = useState(resource?.description ?? '')
  const [payload, setPayload] = useState<SearchResourcePayload>(() =>
    resource ? getPayload(resource) : getNewResourcePayload(resourceType),
  )
  const [invalidInputs, setInvalidInputs] = useState<ReadonlySet<string>>(
    () => new Set(),
  )

  const handleInputValidityChange = useCallback(
    (inputKey: string, isValid: boolean) => {
      setInvalidInputs(previous => {
        if (previous.has(inputKey) !== isValid) {
          return previous
        }
        const next = new Set(previous)
        if (isValid) {
          next.delete(inputKey)
        } else {
          next.add(inputKey)
        }
        return next
      })
    },
    [],
  )

  const onSuccess = () => {
    displayToast(`${singular} ${isEditing ? 'updated' : 'created'}`, 'success')
    onClose()
  }
  const createMutation = useCreateSearchManagementResource(resourceType, {
    onSuccess,
  })
  const updateMutation = useUpdateSearchManagementResource(resourceType, {
    onSuccess,
  })
  const { mutate, isPending, error } = isEditing
    ? updateMutation
    : createMutation

  const isNameInvalid = name !== '' && !SEARCH_RESOURCE_NAME_PATTERN.test(name)
  const canSave =
    !isPending &&
    organizationName !== null &&
    SEARCH_RESOURCE_NAME_PATTERN.test(name) &&
    isPayloadComplete(resourceType, payload) &&
    invalidInputs.size === 0

  const handleSave = () => {
    mutate(
      buildResource(
        resource,
        { organizationName: organizationName!, name, description },
        payload,
      ),
    )
  }

  return (
    <ConfirmationDialog
      onConfirm={handleSave}
      open={open}
      onCancel={onClose}
      title={
        isEditing ? `Edit ${getQualifiedName(resource)}` : `Create ${singular}`
      }
      maxWidth="md"
      fullWidth
      content={
        <Stack sx={{ gap: 3, pt: 1 }}>
          <OrganizationAutocomplete
            label="Organization"
            required
            disabled={isEditing}
            value={organizationName}
            onChange={setOrganizationName}
            helperText="The Organization that owns this resource. Cannot be changed later."
          />
          <TextField
            label="Name"
            required
            disabled={isEditing}
            value={name}
            onChange={e => setName(e.target.value)}
            error={isNameInvalid}
            helperText={
              isNameInvalid
                ? SEARCH_RESOURCE_NAME_ERROR_TEXT
                : SEARCH_RESOURCE_NAME_HELPER_TEXT
            }
          />
          <TextField
            label="Description"
            multiline
            minRows={2}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <SearchResourcePayloadEditor
            resourceType={resourceType}
            initialPayload={payload}
            onChange={setPayload}
            onInputValidityChange={handleInputValidityChange}
          />
          {error && <Alert severity="error">{error.reason}</Alert>}
        </Stack>
      }
      confirmButtonProps={{
        children: 'Save',
        disabled: !canSave,
        loading: isPending,
      }}
    />
  )
}
