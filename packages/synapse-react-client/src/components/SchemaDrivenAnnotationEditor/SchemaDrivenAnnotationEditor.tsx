import AddToList from '@/assets/icons/AddToList'
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
import RJSF from '@rjsf/core'
import { RJSFValidationError } from '@rjsf/utils'
import validator from '@rjsf/validator-ajv8'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { EntityJson } from '@sage-bionetworks/synapse-types'
import { JSONSchema7 } from 'json-schema'
import { omitBy } from 'lodash-es'
import isEmpty from 'lodash-es/isEmpty'
import noop from 'lodash-es/noop'
import { RefObject, useEffect, useMemo, useRef, useState } from 'react'
import {
  ConfirmationButtons,
  ConfirmationDialog,
} from '../ConfirmationDialog/ConfirmationDialog'
import { JsonSchemaForm } from '../JsonSchemaForm/JsonSchemaForm'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import {
  dropNullishArrayValues,
  dropNullValues,
  getPossibleTopLevelPropertiesInObjectSchema,
  getFriendlyPropertyName,
  getJsonSchemaForForm,
  getSchemaIdForConcreteType,
  transformErrors,
  getUiSchemaForForm,
  shouldLiveValidate,
  customTranslateString,
} from './AnnotationEditorUtils'
import SynapseAnnotationsRJSFObjectField from './field/SynapseAnnotationsRJSFObjectField'
import { ObjectFieldTemplate } from './template/ObjectFieldTemplate'
import SynapseAnnotationsWrapIfAdditionalTemplate from './template/SynapseAnnotationsWrapIfAdditionalTemplate'
import TextWidget from './widget/TextWidget'

export type SchemaDrivenAnnotationEditorProps = {
  /** The entity whose annotations should be edited with the form */
  entityId?: string
  /** If no entity ID is supplied, the schema to use for the form */
  schemaId?: string
  /** May be used to directly provide a JSON Schema to use for the form */
  validationSchema?: JSONSchema7
  /** Optionally supply a ref to the form to handle submission externally with `formRef.current.submit()`. */
  formRef?: RefObject<RJSF | null>
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
  const localRef = useRef<RJSF>(null)
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

  // Annotation fields fetched and modified via the form
  const [formData, setFormData] = useState<Record<string, unknown> | undefined>(
    undefined,
  )

  // Set initial form data when the entity or its annotations change
  useEffect(() => {
    if (data?.entity) {
      const formData = data.entity
      const hasAnnotations = annotations && Object.keys(annotations).length > 0

      const newFormData = !hasAnnotations
        ? { ...formData, newKey: [''] }
        : formData

      setFormData(newFormData)
    }
  }, [data?.entity, annotations])

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
    () =>
      getPossibleTopLevelPropertiesInObjectSchema(schemaForEntityType ?? {}),
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

  const isLoading =
    isLoadingBinding || isLoadingSchema || isLoadingEntityTypeSchema

  const { mutate, isPending: updateIsPending } = useUpdateViaJson({
    onSuccess: () => {
      onSuccess()
    },
    onError: error => {
      setSubmissionError(error)
      setShowSubmissionError(true)
    },
  })

  function submitChangedEntity() {
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
    <div className="JsonSchemaFormContainer">
      {isLoading ? (
        <div className="LoadingPlaceholder">
          <SynapseSpinner size={30} />
        </div>
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
          <JsonSchemaForm
            validator={validator}
            liveValidate={liveValidate}
            noHtml5Validate={true}
            formRef={ref}
            disabled={updateIsPending}
            translateString={customTranslateString}
            formContext={{
              showDerivedAnnotationPlaceholder: true,
              descriptionVariant: 'expand',
              descriptionFormat: 'table',
              allowFreeSoloEnum: true,
            }}
            experimental_defaultFormStateBehavior={{
              emptyObjectFields: 'skipDefaults',
            }}
            fields={{
              ObjectField: SynapseAnnotationsRJSFObjectField,
            }}
            templates={{
              ObjectFieldTemplate: ObjectFieldTemplate,
              WrapIfAdditionalTemplate:
                SynapseAnnotationsWrapIfAdditionalTemplate,
            }}
            widgets={{
              TextWidget: TextWidget,
            }}
            schema={formSchema}
            uiSchema={uiSchema}
            transformErrors={transformErrors}
            formData={formData}
            onChange={({ formData }) => {
              onChange(formData)
              setFormData(formData)
              setValidationError(undefined)
            }}
            onBlur={() => {
              setFormData(
                // Clean the formData onBlur to remove null values that we will need to strip before submission
                // This will ensure that the user gets accurate validation information since the data will match what the backend will receive
                cleanFormData(
                  formData,
                  // Don't remove null values in arrays--the fields will disappear, which the user probably does not want
                  false,
                ),
              )
            }}
            onSubmit={({ formData, errors }, event) => {
              event.preventDefault()
              if (errors && errors.length > 0) {
                setValidationError(errors)
              }
              setShowSubmissionError(false)
              setFormData(formData)
              submitChangedEntity()
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
                      ref.current!.formElement.current.requestSubmit()
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
                submitChangedEntity()
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
    </div>
  )
}
