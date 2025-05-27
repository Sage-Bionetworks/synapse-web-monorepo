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
import { Alert, Box, Divider, Link } from '@mui/material'
import RJSF from '@rjsf/core'
import { englishStringTranslator, RJSFValidationError } from '@rjsf/utils'
import validator from '@rjsf/validator-ajv8'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { EntityJson } from '@sage-bionetworks/synapse-types'
import { JSONSchema7 } from 'json-schema'
import { add, isEqual, omitBy } from 'lodash-es'
import isEmpty from 'lodash-es/isEmpty'
import noop from 'lodash-es/noop'
import {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  ConfirmationButtons,
  ConfirmationDialog,
} from '../ConfirmationDialog/ConfirmationDialog'
import { JsonSchemaForm } from '../JsonSchemaForm/JsonSchemaForm'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import {
  dropNullishArrayValues,
  dropNullValues,
  getAllPropertiesInFlatObjectSchema,
  getFriendlyPropertyName,
  getJsonSchemaForForm,
  getSchemaIdForConcreteType,
  getTransformErrors,
  getUiSchemaForForm,
  shouldLiveValidate,
} from './AnnotationEditorUtils'
import SynapseAnnotationsRJSFObjectField from './field/SynapseAnnotationsRJSFObjectField'
import { ObjectFieldTemplate } from './template/ObjectFieldTemplate'
import SynapseAnnotationsWrapIfAdditionalTemplate from './template/SynapseAnnotationsWrapIfAdditionalTemplate'
import TextWidget from './widget/TextWidget'
import { TranslatableString } from '@rjsf/utils'

export type SchemaDrivenAnnotationEditorProps = {
  /** The entity whose annotations should be edited with the form */
  entityId?: string
  /** If no entity ID is supplied, the schema to use for the form */
  schemaId?: string
  /** May be used to directly provide a JSON Schema to use for the form */
  validationSchema?: JSONSchema7
  /** Optionally supply a ref to the form to handle submission externally with `formRef.current.submit()`. */
  formRef?: RefObject<RJSF>
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
    hideActions = true,
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
  const [initialFormData, setInitialFormData] = useState<
    Record<string, unknown> | undefined
  >(undefined)

  const transformErrors = useCallback(
    getTransformErrors(entityJson?.concreteType),
    [entityJson?.concreteType],
  )

  const formDataHasNoAnnotations =
    entityJson &&
    isEmpty(
      omitBy(formData, (_value, key) =>
        Object.keys(entityJson).find(k => k === key),
      ),
    )

  // useEffect(() => {
  //   if (data?.entity) {
  //     // Put the annotations into a state variable so it can be modified by the form.
  //     setFormData(data?.entity)
  //   }
  // }, [data?.entity])

  const normalizeAnnotationValues = (annotations: Record<string, unknown>) => {
    const normalized: Record<string, string[]> = {}
    for (const [key, value] of Object.entries(annotations)) {
      normalized[key] = Array.isArray(value)
        ? value.map(String)
        : [String(value)]
    }
    return normalized
  }

  useEffect(() => {
    if (data?.entity) {
      // Initialize the form data with the entity's data
      const initialData = {
        ...data.entity,
        ...normalizeAnnotationValues(data.annotations),
      }

      const hasUserAnnotations = Object.keys(data.annotations || {}).some(
        key => !(key in data.entity),
      )

      // If there are no annotations, add an empty row for the user to edit
      if (Object.keys(data.annotations).length === 0) {
        console.log('Adding empty annotation field')
        initialData['newKey'] = ['']
      }
      setFormData(initialData)
      setInitialFormData(initialData)
    }
  }, [data?.entity, data?.annotations])

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
    () => getAllPropertiesInFlatObjectSchema(schemaForEntityType ?? {}),
    [schemaForEntityType],
  )

  const formSchema = useMemo(
    () => getJsonSchemaForForm(validationSchema, entitySchemaBaseProperties),
    [entitySchemaBaseProperties, validationSchema],
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

  function customTranslateString(
    stringToTranslate: TranslatableString,
    params?: string[],
  ): string {
    // console.log('Translating:', stringToTranslate, params)
    switch (stringToTranslate) {
      case TranslatableString.NewStringDefault:
        return '' // Return empty string to avoid showing a default value
      case TranslatableString.KeyLabel:
        // return replaceStringParameters('%1 Key Name', params) // You can customize this too
        return 'Key'
      default:
        return englishStringTranslator(stringToTranslate, params)
    }
  }

  function addEmptyAnnotationField(
    formData: Record<string, unknown> | undefined,
    setFormData: React.Dispatch<
      React.SetStateAction<Record<string, unknown> | undefined>
    >,
  ) {
    if (!formData || typeof formData !== 'object') return

    // Generate a unique key like newKey, newKey1, etc.
    let newKey = 'newKey'
    let i = 1
    while (Object.prototype.hasOwnProperty.call(formData, newKey)) {
      newKey = `newKey${i++}`
    }

    // Add the new key with an empty value (adjust [''] to '' if you're not using arrays)
    const updatedFormData = {
      ...formData,
      [newKey]: [''],
    }

    setFormData(updatedFormData)
  }

  const isUnchanged = useMemo(
    () =>
      isEqual(
        cleanFormData(formData, true),
        cleanFormData(initialFormData, true),
      ),
    [formData, initialFormData],
  )

  console.log('Initial:', cleanFormData(initialFormData, true))
  console.log('Current:', cleanFormData(formData, true))
  console.log('Equal?', isUnchanged)

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
          <JsonSchemaForm
            validator={validator}
            liveValidate={liveValidate}
            noHtml5Validate={true}
            formRef={ref}
            disabled={updateIsPending}
            formContext={{
              customHandleAddClick: (_schema: JSONSchema7) => {
                return (event: React.MouseEvent) => {
                  event.preventDefault()
                  addEmptyAnnotationField(formData, setFormData)
                }
              },
              showDerivedAnnotationPlaceholder: true,
              translateString: customTranslateString,
              descriptionVariant: 'expand',
              descriptionFormat: 'table',
              allowFreeSoloEnum: true,
              isUnchanged: isUnchanged,
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
              // enable button to submit form
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
            {hideActions && (
              <>
                <Divider sx={{ my: 2 }} />
                <Box
                  display="flex"
                  justifyContent="space-between"
                  sx={{ gridRowStart: 5 }}
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
                      children: entityId ? 'Save Annotations' : 'Validate',
                      disabled: isUnchanged, // Disable the button until the form is valid
                    }}
                    // confirmationButtonDisabled={true}
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
