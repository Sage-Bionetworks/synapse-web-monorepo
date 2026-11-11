import { SynapseSpinner } from '@/components/LoadingScreen/LoadingScreen'
import { SYNAPSE_STORAGE_LOCATION_ID } from '@/synapse-client/SynapseClient'
import {
  useCreateEntity,
  useGetEntityLookupQueryOptions,
  useUpdateEntity,
} from '@/synapse-queries/entity/useEntity'
import { useGetJsonFileEntityContent } from '@/synapse-queries/file/useFiles'
import { useSynapseMultipartUpload } from '@/synapse-queries/file/useSynapseMultipartUpload'
import { useGetCurrentUserProfile } from '@/synapse-queries/user/useUserBundle'
import { ErrorBanner } from '@/components/error/ErrorBanner'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { isFileEntity } from '@/utils/types/IsType'
import { Alert, Stack, Typography } from '@mui/material'
import Form from '@rjsf/core'
import { RJSFSchema, UiSchema } from '@rjsf/utils'
import validator from '@rjsf/validator-ajv8'
import {
  FILE_ENTITY_CONCRETE_TYPE_VALUE,
  FileEntity,
  FileHandleAssociateType,
} from '@sage-bionetworks/synapse-types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Ref, useImperativeHandle, useRef } from 'react'

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

export default function EntityForm(props: EntityFormProps) {
  const {
    ref,
    parentContainerId,
    formSchemaEntityId,
    formUiSchemaEntityId,
    initFormData,
    synIdCallback,
  } = props
  const { isAuthenticated, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  const formRef = useRef<Form>(null)

  useImperativeHandle(ref, () => ({
    submitForm: () => {
      if (!isSavingRef.current) {
        formRef.current?.submit()
      }
    },
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
  // The entity is needed even when not pre-filling, to update the existing file rather than create a duplicate
  const existingFile = useGetJsonFileEntityContent(
    existingFileQuery.data ?? undefined,
    { fetchContent: initFormData },
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
      if (existingFile.entity) {
        return updateEntity({
          ...existingFile.entity,
          dataFileHandleId: fileHandleId,
        })
      }
      const newFileEntity: FileEntity = {
        parentId: userFolderId!,
        name: fileName!,
        concreteType: FILE_ENTITY_CONCRETE_TYPE_VALUE,
        dataFileHandleId: fileHandleId,
      }
      return (await createEntity(newFileEntity)) as FileEntity
    },
    onSuccess: (savedEntity: FileEntity, formData) => {
      // Seed the content cache so pre-filling doesn't re-download the answers that were just saved
      queryClient.setQueryData(
        keyFactory.getPresignedUrlFromFHAJsonContentQueryKey(
          {
            associateObjectId: savedEntity.id!,
            associateObjectType: FileHandleAssociateType.FileEntity,
            fileHandleId: savedEntity.dataFileHandleId,
          },
          false,
        ),
        formData,
      )
      synIdCallback(savedEntity.id!)
    },
  })
  const isSavingRef = useRef(isSaving)
  isSavingRef.current = isSaving

  if (!isAuthenticated) {
    return (
      <Alert severity="info">
        You must be signed in to fill out this form.
      </Alert>
    )
  }

  let setupError: Error | null | undefined =
    userProfileError ??
    formSchema.error ??
    uiSchema.error ??
    userFolderQuery.error ??
    existingFileQuery.error ??
    existingFile.error
  for (const [schemaEntityId, schema] of [
    [formSchemaEntityId, formSchema.data],
    [formUiSchemaEntityId, uiSchema.data],
  ] as const) {
    const isNonObject =
      schema !== undefined && (schema === null || typeof schema !== 'object')
    if (!setupError && isNonObject) {
      setupError = new Error(`${schemaEntityId} does not contain a JSON object`)
    }
  }
  if (!setupError && userProfile && userFolderId === null) {
    setupError = new Error(
      `Your submission folder has not been set up yet. The challenge organizers must create a folder named "${userProfile.ownerId}" in ${parentContainerId} that you can edit.`,
    )
  }
  if (!setupError && formSchema.data && !fileName) {
    setupError = new Error(
      `The form JSON schema (${formSchemaEntityId}) must define a "title". It is used to name the file that stores the form data.`,
    )
  }
  if (
    !setupError &&
    existingFile.entity &&
    !isFileEntity(existingFile.entity)
  ) {
    setupError = new Error(
      `${fileName} in your submission folder (${userFolderId}) is not a file. Ask the challenge organizers to remove it.`,
    )
  }
  if (setupError) {
    return <ErrorBanner error={setupError} />
  }

  const hasExistingFile = existingFileQuery.data != null
  const isExistingFileLoaded =
    !hasExistingFile ||
    (existingFile.entity != null &&
      (!initFormData || existingFile.data !== undefined))
  const isLoaded =
    formSchema.data != null &&
    uiSchema.data != null &&
    userFolderId != null &&
    existingFileQuery.isSuccess &&
    isExistingFileLoaded

  if (!isLoaded) {
    return <LoadingIndicator text="Loading form" />
  }

  return (
    <>
      <ErrorBanner error={saveError} />
      {isSaving && <LoadingIndicator text="Saving" />}
      {/* Stay mounted while saving so the answers survive a failed save and can be resubmitted */}
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
        disabled={isSaving}
        onSubmit={({ formData }) => saveFormData(formData)}
      />
    </>
  )
}

function LoadingIndicator(props: { text: string }) {
  return (
    <Stack direction="row" alignItems="center" gap={1} sx={{ my: 2 }}>
      <SynapseSpinner margin="0" />
      <Typography variant="body1">{props.text}&hellip;</Typography>
    </Stack>
  )
}
