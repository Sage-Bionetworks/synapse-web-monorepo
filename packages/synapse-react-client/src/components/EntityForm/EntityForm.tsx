import { SynapseSpinner } from '@/components/LoadingScreen/LoadingScreen'
import { SYNAPSE_STORAGE_LOCATION_ID } from '@/synapse-client/SynapseClient'
import {
  useCreateEntity,
  useGetEntity,
  useGetEntityLookupQueryOptions,
  useUpdateEntity,
} from '@/synapse-queries/entity/useEntity'
import { useGetPresignedUrlContentFromFHA } from '@/synapse-queries/file/useFiles'
import { useSynapseMultipartUpload } from '@/synapse-queries/file/useSynapseMultipartUpload'
import { useGetCurrentUserProfile } from '@/synapse-queries/user/useUserBundle'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { Alert, Stack, Typography } from '@mui/material'
import Form from '@rjsf/core'
import { RJSFSchema, UiSchema } from '@rjsf/utils'
import validator from '@rjsf/validator-ajv8'
import {
  FileEntity,
  FileHandleAssociateType,
} from '@sage-bionetworks/synapse-types'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Ref, useImperativeHandle, useMemo, useRef } from 'react'

const FILE_ENTITY_CONCRETE_TYPE = 'org.sagebionetworks.repo.model.FileEntity'

export type EntityFormHandle = {
  /** Validates the form and, if valid, saves the user's answers. No-op until the form has loaded. */
  submitForm: () => void
}

/**
 * Renders a form from a JSON schema and UI schema stored in Synapse, and saves the user's answers as a JSON file named
 * `<schema title>.json` in the folder named `<user ID>` inside `parentContainerId`.
 */
export type EntityFormProps = {
  ref?: Ref<EntityFormHandle>
  /** The container (folder/project) that holds a folder named `<user ID>` that the user can write to. */
  parentContainerId: string
  /** Synapse file that contains the form JSON schema. Its `title` names the saved file. */
  formSchemaEntityId: string
  /** Synapse file that contains the form UI schema. */
  formUiSchemaEntityId: string
  /** If true, pre-fill the form with the user's previously saved answers. */
  initFormData: boolean
  /** Invoked with the ID of the FileEntity that contains the saved answers. */
  synIdCallback: (synId: string) => void
}

/** Fetches a FileEntity and parses its content as JSON. */
function useGetJsonFileEntityContent<T>(entityId: string | undefined) {
  const entityQuery = useGetEntity<FileEntity>(entityId)
  const entity = entityQuery.data
  const contentQuery = useGetPresignedUrlContentFromFHA(
    {
      associateObjectId: entity?.id ?? '',
      associateObjectType: FileHandleAssociateType.FileEntity,
      fileHandleId: entity?.dataFileHandleId ?? '',
    },
    false,
    { enabled: entity != null },
  )
  const content = contentQuery.data
  const parsed = useMemo((): { data?: T; error?: Error } => {
    if (content == null) {
      return {}
    }
    try {
      return { data: JSON.parse(content) as T }
    } catch (e) {
      return {
        error: new Error(
          `${entityId} does not contain valid JSON: ${String(e)}`,
        ),
      }
    }
  }, [content, entityId])
  return {
    entity,
    data: parsed.data,
    error: entityQuery.error ?? contentQuery.error ?? parsed.error,
  }
}

export default function EntityForm(props: EntityFormProps) {
  const {
    ref,
    parentContainerId,
    formSchemaEntityId,
    formUiSchemaEntityId,
    initFormData,
    synIdCallback,
  } = props
  const { isAuthenticated } = useSynapseContext()
  const formRef = useRef<Form>(null)

  useImperativeHandle(ref, () => ({
    submitForm: () => formRef.current?.submit(),
  }))

  const { data: userProfile, error: userProfileError } =
    useGetCurrentUserProfile({ enabled: isAuthenticated })

  const getEntityLookupQueryOptions = useGetEntityLookupQueryOptions()
  const userFolderQuery = useQuery({
    ...getEntityLookupQueryOptions({
      parentId: parentContainerId,
      entityName: userProfile?.ownerId ?? '',
    }),
    enabled: userProfile != null,
  })
  const userFolderId = userFolderQuery.data

  const formSchema = useGetJsonFileEntityContent<RJSFSchema>(
    isAuthenticated ? formSchemaEntityId : undefined,
  )
  const uiSchema = useGetJsonFileEntityContent<UiSchema>(
    isAuthenticated ? formUiSchemaEntityId : undefined,
  )
  const fileName = formSchema.data?.title
    ? `${formSchema.data.title}.json`
    : undefined

  // The user's previously saved answers, if any
  const existingFileQuery = useQuery({
    ...getEntityLookupQueryOptions({
      parentId: userFolderId ?? '',
      entityName: fileName ?? '',
    }),
    enabled: userFolderId != null && fileName != null,
  })
  const existingFile = useGetJsonFileEntityContent<unknown>(
    initFormData ? (existingFileQuery.data ?? undefined) : undefined,
  )
  // When not pre-filling, we still need the entity to update it rather than create a duplicate
  const { data: existingFileEntity } = useGetEntity<FileEntity>(
    existingFileQuery.data ?? undefined,
  )

  const { mutateAsync: uploadFile } = useSynapseMultipartUpload()
  const { mutateAsync: createEntity } = useCreateEntity()
  const { mutateAsync: updateEntity } = useUpdateEntity<FileEntity>()

  const {
    mutate: saveFormData,
    isPending: isSaving,
    error: saveError,
  } = useMutation({
    mutationFn: async (formData: unknown) => {
      const { fileHandleId } = await uploadFile({
        blob: new Blob([JSON.stringify(formData)], {
          type: 'application/json',
        }),
        fileName: fileName!,
        contentType: 'application/json',
        storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
        abortController: undefined,
      })
      if (existingFileEntity) {
        return updateEntity({
          ...existingFileEntity,
          dataFileHandleId: fileHandleId,
        })
      }
      const newFileEntity: FileEntity = {
        parentId: userFolderId!,
        name: fileName!,
        concreteType: FILE_ENTITY_CONCRETE_TYPE,
        dataFileHandleId: fileHandleId,
      }
      return createEntity(newFileEntity)
    },
    onSuccess: savedEntity => {
      synIdCallback(savedEntity.id!)
    },
  })

  if (!isAuthenticated) {
    return (
      <Alert severity="info">
        You must be signed in to fill out this form.
      </Alert>
    )
  }

  let error: Error | null | undefined =
    userProfileError ??
    formSchema.error ??
    uiSchema.error ??
    userFolderQuery.error ??
    existingFileQuery.error ??
    existingFile.error ??
    saveError
  if (!error && userProfile && userFolderId === null) {
    error = new Error(
      `Your submission folder has not been set up yet. The challenge organizers must create a folder named "${userProfile.ownerId}" in ${parentContainerId} that you can edit.`,
    )
  }
  if (!error && formSchema.data && !fileName) {
    error = new Error(
      `The form JSON schema (${formSchemaEntityId}) must define a "title". It is used to name the file that stores the form data.`,
    )
  }
  if (error) {
    return <Alert severity="error">{error.message}</Alert>
  }

  const isLoaded =
    formSchema.data != null &&
    uiSchema.data != null &&
    userFolderId != null &&
    existingFileQuery.isSuccess &&
    (existingFileQuery.data == null || existingFileEntity != null) &&
    (!initFormData ||
      existingFileQuery.data == null ||
      existingFile.data !== undefined)

  if (!isLoaded || isSaving) {
    return (
      <Stack direction="row" alignItems="center" gap={1} sx={{ my: 2 }}>
        <SynapseSpinner margin="0" />
        <Typography variant="body1">
          {isSaving ? 'Saving' : 'Loading form'}&hellip;
        </Typography>
      </Stack>
    )
  }

  return (
    <Form
      ref={formRef}
      validator={validator}
      schema={formSchema.data!}
      // Submission is triggered by the host via `submitForm`
      uiSchema={{
        ...uiSchema.data,
        'ui:submitButtonOptions': { norender: true },
      }}
      formData={existingFile.data}
      onSubmit={({ formData }) => saveFormData(formData)}
    />
  )
}
