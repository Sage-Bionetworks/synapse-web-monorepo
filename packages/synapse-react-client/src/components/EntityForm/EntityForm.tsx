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

/**
 * Replaces RJSF's submit button: only the host submits, via `submitForm`. Per the HTML spec, a disabled default
 * button also stops the browser from submitting the form when Enter is pressed.
 * Module-level so its identity is stable: RJSF recomputes its state from props when they change.
 */
const HOST_SUBMITS_ONLY = <button type="submit" disabled hidden />

export type EntityFormHandle = {
  /** Validates the form and, if valid, saves the user's answers. Does nothing while a save is in progress. */
  submitForm: () => void
}

/**
 * Renders a form from a JSON schema and UI schema stored in Synapse, and saves the user's answers as a JSON file named
 * `<schema title>.json` in the folder named `<user ID>` inside `parentContainerId`.
 */
export type EntityFormProps = {
  /** Set to the form's handle once it has loaded and can be submitted; null while loading or on a setup error. */
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

  const { entityQuery: formSchemaEntityQuery, contentQuery: formSchemaQuery } =
    useGetJsonFileEntityContent<RJSFSchema>(
      isAuthenticated ? formSchemaEntityId : undefined,
    )
  const { entityQuery: uiSchemaEntityQuery, contentQuery: uiSchemaQuery } =
    useGetJsonFileEntityContent<UiSchema>(
      isAuthenticated ? formUiSchemaEntityId : undefined,
    )
  const fileName = formSchemaQuery.data?.title
    ? `${formSchemaQuery.data.title}.json`
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
  const {
    entityQuery: existingFileEntityQuery,
    contentQuery: existingFileContentQuery,
  } = useGetJsonFileEntityContent(existingFileQuery.data ?? undefined, {
    fetchContent: initFormData,
  })

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
      if (existingFileEntityQuery.data) {
        return updateEntity({
          ...existingFileEntityQuery.data,
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
  let setupError: Error | null | undefined =
    userProfileError ??
    formSchemaEntityQuery.error ??
    formSchemaQuery.error ??
    uiSchemaEntityQuery.error ??
    uiSchemaQuery.error ??
    userFolderQuery.error ??
    existingFileQuery.error ??
    existingFileEntityQuery.error
  for (const [schemaEntityId, schema] of [
    [formSchemaEntityId, formSchemaQuery.data],
    [formUiSchemaEntityId, uiSchemaQuery.data],
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
  if (!setupError && formSchemaQuery.data && !fileName) {
    setupError = new Error(
      `The form JSON schema (${formSchemaEntityId}) must define a "title". It is used to name the file that stores the form data.`,
    )
  }
  if (
    !setupError &&
    existingFileEntityQuery.data &&
    !isFileEntity(existingFileEntityQuery.data)
  ) {
    setupError = new Error(
      `${fileName} in your submission folder (${userFolderId}) is not a file. Ask the challenge organizers to remove it.`,
    )
  }

  // Previous answers that can't be loaded don't block the form: the user starts over, and saving replaces them
  const isPreviousAnswersError = existingFileContentQuery.isError
  const hasExistingFile = existingFileQuery.data != null
  const isExistingFileLoaded =
    !hasExistingFile ||
    (existingFileEntityQuery.data != null &&
      (!initFormData ||
        existingFileContentQuery.data !== undefined ||
        isPreviousAnswersError))
  const isLoaded =
    isAuthenticated &&
    !setupError &&
    formSchemaQuery.data != null &&
    uiSchemaQuery.data != null &&
    userFolderId != null &&
    existingFileQuery.isSuccess &&
    isExistingFileLoaded

  // The handle is null until the form can be submitted, so the host can tell the user the form is not ready
  useImperativeHandle<EntityFormHandle | null, EntityFormHandle | null>(
    ref,
    () =>
      isLoaded
        ? {
            submitForm: () => {
              if (!isSaving) {
                formRef.current?.submit()
              }
            },
          }
        : null,
    [isLoaded, isSaving],
  )

  if (!isAuthenticated) {
    return (
      <Alert severity="info">
        You must be signed in to fill out this form.
      </Alert>
    )
  }
  if (setupError) {
    return <ErrorBanner error={setupError} />
  }
  if (!isLoaded) {
    return <LoadingIndicator text="Loading form" />
  }

  return (
    <>
      {isPreviousAnswersError && (
        <Alert severity="warning">
          Your previously saved answers could not be loaded. Saving will replace
          them.
        </Alert>
      )}
      <ErrorBanner error={saveError} />
      {isSaving && <LoadingIndicator text="Saving" />}
      {/* Stay mounted while saving so the answers survive a failed save and can be resubmitted */}
      <Form
        ref={formRef}
        validator={validator}
        schema={formSchemaQuery.data}
        uiSchema={uiSchemaQuery.data}
        formData={existingFileContentQuery.data}
        disabled={isSaving}
        onSubmit={({ formData }) => saveFormData(formData)}
      >
        {HOST_SUBMITS_ONLY}
      </Form>
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
