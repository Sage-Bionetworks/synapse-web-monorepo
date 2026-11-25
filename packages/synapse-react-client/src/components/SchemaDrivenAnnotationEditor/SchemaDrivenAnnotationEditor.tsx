import AddToList from '@/assets/icons/AddToList'
import { jsonSchemaFormValidator } from '@/components/JsonSchemaForm/JsonSchemaFormValidator'
import {
  useGetJson,
  useGetSchema,
  useGetSchemaBinding,
  useUpdateViaJson,
} from '@/synapse-queries'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { Alert, Box, Divider, Link, Typography } from '@mui/material'
import { FormRef } from '@rjsf/core'
import {
  createSchemaUtils,
  DefaultFormStateBehavior,
  RJSFValidationError,
} from '@rjsf/utils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { EntityJson } from '@sage-bionetworks/synapse-types'
import { JSONSchema7 } from 'json-schema'
import { isEqual, omitBy } from 'lodash-es'
import isEmpty from 'lodash-es/isEmpty'
import noop from 'lodash-es/noop'
import { RefObject, useCallback, useMemo, useRef, useState } from 'react'
import {
  ConfirmationButtons,
  ConfirmationDialog,
} from '../ConfirmationDialog/ConfirmationDialog'
import { CustomFormContext } from '../JsonSchemaForm/CustomFormContext'
import { JsonSchemaForm } from '../JsonSchemaForm/JsonSchemaForm'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { collectTopLevelProperties } from '@/utils/jsonschema/collectTopLevelProperties'
import {
  AnnotationFormData,
  customTranslateString,
  dropNullishArrayValues,
  dropNullValues,
  getFriendlyPropertyName,
  getJsonSchemaForForm,
  getSchemaIdForConcreteType,
  getUiSchemaForForm,
  shapeAnnotationFormData,
  shouldLiveValidate,
  transformErrors,
} from './AnnotationEditorUtils'
import { ObjectFieldTemplate } from './template/ObjectFieldTemplate'
import SynapseAnnotationsWrapIfAdditionalTemplate from './template/SynapseAnnotationsWrapIfAdditionalTemplate'
import TextWidget from './widget/TextWidget'

// RJSF compares its props shallowly, so these keep their identity across renders
const FORM_CONTEXT: CustomFormContext = {
  showDerivedAnnotationPlaceholder: true,
  descriptionVariant: 'expand',
  descriptionFormat: 'table',
  allowFreeSoloEnum: true,
}
const DEFAULT_FORM_STATE_BEHAVIOR: DefaultFormStateBehavior = {
  emptyObjectFields: 'skipDefaults',
}
const TEMPLATES = {
  ObjectFieldTemplate: ObjectFieldTemplate,
  WrapIfAdditionalTemplate: SynapseAnnotationsWrapIfAdditionalTemplate,
}
const WIDGETS = {
  TextWidget: TextWidget,
}
/**
 * The form schema allows any custom annotation through its root `additionalProperties: true`, but RJSF loses it when it
 * merges the schema's `allOf`, so the form takes an object without `additionalProperties` to allow any key.
 */
const ADDITIONAL_PROPERTIES_WHEN_ABSENT = 'allow'

export type SchemaDrivenAnnotationEditorProps = {
  /** The entity whose annotations should be edited with the form */
  entityId?: string
  /** If no entity ID is supplied, the schema to use for the form */
  schemaId?: string
  /** May be used to directly provide a JSON Schema to use for the form */
  validationSchema?: JSONSchema7
  /** Optionally supply a ref to the form to handle submission externally with `formRef.current.submit()`. */
  formRef?: RefObject<FormRef<AnnotationFormData> | null>
  /** Provide live input validation. This can cause performance degradation. By default, liveValidate will be true if an entity with a schema and existing annotations is being edited */
  liveValidate?: boolean
  /** Invoked after a successful form submission */
  onSuccess?: () => void
  /** If defined and formRef is not supplied, shows a 'Cancel' button and runs this effect on click */
  onCancel?: () => void
  /** Passes new form data upon each change to the form */
  onChange?: (annotations: Record<string, unknown>) => void
  /** If true, the editor will not render its own submit UI. */
  hideActions?: boolean
}

/**
 * Cleans the formData to remove values that are invalid for Synapse Annotations
 * @param formData
 * @param dropNullishValuesInArrays
 */
function cleanFormData(
  formData: Record<string, unknown> | undefined,
  dropNullishValuesInArrays: boolean,
) {
  let cleanedFormData = dropNullValues(formData)
  if (dropNullishValuesInArrays) {
    cleanedFormData = dropNullishArrayValues(cleanedFormData)
  }
  return cleanedFormData
}

/**
 * Renders a form for editing an entity's annotations. The component also supports supplying just a schema ID,
 * but work to support annotation flows without an entity (i.e. before creating entities) is not yet complete.
 */
export function SchemaDrivenAnnotationEditor(
  props: SchemaDrivenAnnotationEditorProps,
) {
  const {
    entityId,
    schemaId,
    validationSchema: validationSchemaFromProps,
    liveValidate: liveValidateFromProps,
    onSuccess = () => {
      /* no-op */
    },
    onCancel,
    formRef: formRefFromParent,
    onChange = noop,
    hideActions = false,
  } = props
  const localRef = useRef<FormRef<AnnotationFormData>>(null)
  const ref = formRefFromParent ?? localRef

  // Client-side validation errors
  const [validationError, setValidationError] = useState<
    RJSFValidationError[] | undefined
  >(undefined)

  // Errors from the backend response
  const [submissionError, setSubmissionError] = useState<
    SynapseClientError | undefined
  >(undefined)
  const [showSubmissionError, setShowSubmissionError] = useState(false)

  const [showConfirmation, setShowConfirmation] = useState(false)

  const { data } = useGetJson(
    entityId!,
    undefined,
    // Derived annotations will be precomputed and displayed as placeholders in the form
    false,
    {
      // Metadata is being edited, so don't refetch
      staleTime: Infinity,
      enabled: !!entityId,
      throwOnError: true,
    },
  )

  const entityJson = data?.entityMetadata
  const annotations = data?.annotations

  const { data: schema, isLoading: isLoadingBinding } = useGetSchemaBinding(
    entityId!,
    {
      enabled: !!entityId,
      refetchOnWindowFocus: false,
      throwOnError: true,
    },
  )

  // The full schema which is bound to the entity
  const { data: fetchedValidationSchema, isLoading: isLoadingSchema } =
    useGetSchema(schemaId ?? schema?.jsonSchemaVersionInfo.$id ?? '', {
      enabled: !!schemaId || !!schema,
      throwOnError: true,
    })
  const validationSchema = validationSchemaFromProps || fetchedValidationSchema

  const concreteTypeSchemaId = getSchemaIdForConcreteType(
    entityJson?.concreteType ?? '',
  )
  // The schema for the entity type (e.g. FileEntity, TableEntity, etc.)
  const { data: schemaForEntityType, isLoading: isLoadingEntityTypeSchema } =
    useGetSchema(concreteTypeSchemaId ?? '', {
      enabled: !!concreteTypeSchemaId,
      throwOnError: true,
    })

  const entitySchemaBaseProperties: JSONSchema7['properties'] = useMemo(
    () => collectTopLevelProperties(schemaForEntityType),
    [schemaForEntityType],
  )

  const formSchema = useMemo(
    () => getJsonSchemaForForm(validationSchema, schemaForEntityType),
    [validationSchema, schemaForEntityType],
  )

  const uiSchema = useMemo(
    () => getUiSchemaForForm(entitySchemaBaseProperties),
    [entitySchemaBaseProperties],
  )

  const schemaUtils = useMemo(
    () =>
      createSchemaUtils<AnnotationFormData>(
        {
          validator: jsonSchemaFormValidator,
          defaultFormStateBehavior: DEFAULT_FORM_STATE_BEHAVIOR,
          additionalPropertiesWhenAbsent: ADDITIONAL_PROPERTIES_WHEN_ABSENT,
        },
        formSchema,
      ),
    [formSchema],
  )

  // Keeps the data in the shape of Synapse annotations as the user edits it
  const transformChange = useCallback(
    (
      next: AnnotationFormData | undefined,
      previous: AnnotationFormData | undefined,
    ) => shapeAnnotationFormData(schemaUtils, formSchema, next, previous),
    [schemaUtils, formSchema],
  )

  // The entity's annotations, with an empty custom annotation to fill in if it has none
  const initialFormData = useMemo(() => {
    if (!data?.entity) {
      return undefined
    }
    const hasAnnotations = annotations && Object.keys(annotations).length > 0
    return shapeAnnotationFormData(
      schemaUtils,
      formSchema,
      hasAnnotations ? data.entity : { ...data.entity, newKey: [''] },
    )
  }, [data?.entity, annotations, schemaUtils, formSchema])

  // The form's data, as of its last change
  const [changedFormData, setChangedFormData] = useState<
    AnnotationFormData | undefined
  >(undefined)
  const formData = changedFormData ?? initialFormData

  // The form reads its data when it mounts, so it waits for the entity
  const isLoading =
    (!!entityId && !data) ||
    isLoadingBinding ||
    isLoadingSchema ||
    isLoadingEntityTypeSchema

  const { mutate, isPending: updateIsPending } = useUpdateViaJson({
    onSuccess: () => {
      onSuccess()
    },
    onError: error => {
      setSubmissionError(error)
      setShowSubmissionError(true)
    },
  })

  function submitChangedEntity(formData: AnnotationFormData | undefined) {
    mutate({
      ...cleanFormData(formData, true),
      ...entityJson,
    } as EntityJson)
  }

  const liveValidate =
    liveValidateFromProps ?? shouldLiveValidate(annotations, validationSchema)

  const formDataHasNoAnnotations =
    entityJson &&
    isEmpty(
      omitBy(formData, (_value, key) =>
        Object.keys(entityJson).find(k => k === key),
      ),
    )

  const showHasNoAnnotationsAlert = schema === null && formDataHasNoAnnotations

  return (
    <>
      {isLoading ? (
        <Box sx={{ display: 'flex', margin: '60px auto' }}>
          <SynapseSpinner size={30} />
        </Box>
      ) : (
        <>
          {entityJson && schema && (
            <Alert severity="info" sx={{ mb: 2 }}>
              <b>{entityJson.name}</b> requires scientific annotations specified
              by <b>{schema.jsonSchemaVersionInfo.$id}</b>
              {'. '}
              <b>
                <Link
                  href={`${getEndpoint(
                    BackendDestinationEnum.REPO_ENDPOINT,
                  )}/repo/v1/schema/type/registered/${
                    schema.jsonSchemaVersionInfo.$id
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View required schema (JSON)
                </Link>
              </b>
            </Alert>
          )}
          {showHasNoAnnotationsAlert && (
            <Alert severity="info">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                }}
              >
                <Typography variant={'smallText1'}>
                  <b>{entityJson.name}</b> has no annotations. Click the{' '}
                </Typography>
                <AddToList />
                <Typography variant={'smallText1'}>
                  button to annotate.
                </Typography>
              </Box>
            </Alert>
          )}
          <JsonSchemaForm<AnnotationFormData>
            // A form reads its data on mount only, so it remounts for another entity or version
            key={`${entityId}-${entityJson?.etag}`}
            liveValidate={liveValidate ? 'onChange' : undefined}
            formRef={ref}
            disabled={updateIsPending}
            translateString={customTranslateString}
            formContext={FORM_CONTEXT}
            defaultFormStateBehavior={DEFAULT_FORM_STATE_BEHAVIOR}
            additionalPropertiesWhenAbsent={ADDITIONAL_PROPERTIES_WHEN_ABSENT}
            templates={TEMPLATES}
            widgets={WIDGETS}
            schema={formSchema}
            uiSchema={uiSchema}
            transformErrors={transformErrors}
            initialFormData={initialFormData}
            transformChange={transformChange}
            onChange={({ formData }) => {
              onChange(formData ?? {})
              setChangedFormData(formData)
              setValidationError(undefined)
            }}
            onBlur={() => {
              // Clean the formData onBlur to remove null values that we will need to strip before submission
              // This will ensure that the user gets accurate validation information since the data will match what the backend will receive
              const form = ref.current
              const current = form?.getFormData()
              const cleaned = cleanFormData(
                current,
                // Don't remove null values in arrays--the fields will disappear, which the user probably does not want
                false,
              )
              if (form && current && !isEqual(cleaned, current)) {
                form.setFieldValue('', cleaned)
              }
            }}
            onSubmit={({ formData, errors }, event) => {
              event.preventDefault()
              if (errors && errors.length > 0) {
                setValidationError([...errors])
              }
              setShowSubmissionError(false)
              submitChangedEntity(formData)
            }}
            onError={(errors: RJSFValidationError[]) => {
              // invoked when submit is clicked and there are client-side validation errors
              setValidationError(errors)
              if ((validationError || liveValidate) && entityId) {
                setShowConfirmation(true)
              }
            }}
          >
            {submissionError && showSubmissionError && (
              <Alert severity="error" sx={{ my: 2 }}>
                Annotations could not be updated: {submissionError.reason}
              </Alert>
            )}
            {!hideActions && (
              <>
                <Divider sx={{ my: 2 }} />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gridRowStart: 5,
                  }}
                >
                  <ConfirmationButtons
                    hasCancelButton={onCancel !== undefined}
                    onCancel={() => {
                      if (onCancel) {
                        onCancel()
                      }
                    }}
                    onConfirm={() => {
                      ref.current?.submit()
                    }}
                    confirmButtonProps={{
                      children: entityId ? 'Save' : 'Validate',
                    }}
                  />
                </Box>
              </>
            )}
          </JsonSchemaForm>
          {showConfirmation && (
            <ConfirmationDialog
              open={true}
              onConfirm={() => {
                submitChangedEntity(ref.current?.getFormData())
                setShowConfirmation(false)
              }}
              onCancel={() => {
                setShowConfirmation(false)
              }}
              title="Update Annotations"
              content={
                <>
                  <div>
                    The following errors exist with the annotations you entered:
                  </div>
                  <div>
                    <ul>
                      {(validationError ?? []).map(
                        (e: RJSFValidationError, index: number) => (
                          <li key={index}>
                            <b>{`${getFriendlyPropertyName(e)}: `}</b>{' '}
                            {`${e.message}`}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                  <div>
                    Are you sure you want to save the invalid annotations?
                  </div>
                </>
              }
              confirmButtonProps={{
                children: 'Save',
              }}
            />
          )}
        </>
      )}
    </>
  )
}
