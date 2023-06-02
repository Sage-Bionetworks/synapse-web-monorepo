import Form from '@rjsf/mui'
import { JSONSchema7 } from 'json-schema'
import isEmpty from 'lodash-es/isEmpty'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { Alert, Box, Divider, Link } from '@mui/material'
import AddToList from '../../assets/icons/AddToList'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import {
  useGetJson,
  useGetSchema,
  useGetSchemaBinding,
  useUpdateViaJson,
} from '../../synapse-queries'
import { SynapseClientError } from '../../utils/SynapseClientError'
import {
  ENTITY_CONCRETE_TYPE,
  EntityJson,
} from '@sage-bionetworks/synapse-types'
import { SynapseSpinner } from '../LoadingScreen'
import { AdditionalPropertiesSchemaField } from './field/AdditionalPropertiesSchemaField'
import {
  dropNullishArrayValues,
  getFriendlyPropertyName,
  getTransformErrors,
} from './AnnotationEditorUtils'
import { BooleanWidget } from './widget/BooleanWidget'
import { DateTimeWidget } from './widget/DateTimeWidget'
import { ObjectFieldTemplate } from './template/ObjectFieldTemplate'
import { SelectWidget } from './widget/SelectWidget'
import TextWidget from './widget/TextWidget'
import { entityJsonKeys } from '../../utils/functions/EntityTypeUtils'
import {
  ConfirmationButtons,
  ConfirmationDialog,
} from '../ConfirmationDialog/ConfirmationDialog'
import { RJSFValidationError } from '@rjsf/utils'
import validator from '@rjsf/validator-ajv8'
import CustomObjectField from './field/CustomObjectField'
import ArrayFieldItemTemplate from './template/ArrayFieldItemTemplate'
import ArrayFieldTemplate from './template/ArrayFieldTemplate'
import WrapIfAdditionalTemplate from './template/WrapIfAdditionalTemplate'
import { FieldTemplate } from './template/FieldTemplate'
import ArrayFieldTitleTemplate from './template/ArrayFieldTitleTemplate'
import ButtonTemplate from './template/ButtonTemplate'
import DescriptionFieldTemplate from './template/DescriptionFieldTemplate'
import ArrayFieldDescriptionTemplate from './template/ArrayFieldDescriptionTemplate'
import BaseInputTemplate from './template/BaseInputTemplate'
import RJSF from '@rjsf/core'
import FieldErrorTemplate from './template/FieldErrorTemplate'

export type SchemaDrivenAnnotationEditorProps = {
  /** The entity whose annotations should be edited with the form */
  entityId?: string
  /** If no entity ID is supplied, the schema to use for the form */
  schemaId?: string
  /** May be used to directly provide a JSON Schema to use for the form */
  validationSchema?: JSONSchema7
  /** Optionally supply a ref to the form to handle submission externally with `formRef.current.submit()`. If provided, the editor will not render its own submit UI. */
  formRef?: React.RefObject<RJSF>
  /** Provide live input validation. This can cause major performance degradation. */
  liveValidate?: boolean
  /** Invoked after a successful form submission */
  onSuccess?: () => void
  /** If defined and formRef is not supplied, shows a 'Cancel' button and runs this effect on click */
  onCancel?: () => void
  /** Passes new form data upon each change to the form */
  onChange?: (annotations: Record<string, any>) => void
}

/**
 * patternProperties lets us define how to treat additionalProperties in a JSON schema by property name.
 * In all cases, let's ban properties that collide with entity properties by making their schema "not: {}"
 */
function getPatternPropertiesBannedKeys(
  concreteType?: ENTITY_CONCRETE_TYPE,
): JSONSchema7 {
  if (!concreteType) {
    return {}
  }
  // for each property (e.g. id, name, etag, etc.)
  //  Add to the JSON Schema `"^id$": { "not": {} }` to ban the property from being added as an additional property.
  return entityJsonKeys[concreteType].reduce((current, item) => {
    current[`^${item}$`] = { not: {} }
    return current
  }, {})
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
    liveValidate = false,
    onSuccess = () => {
      /* no-op */
    },
    onCancel,
    formRef: formRefFromParent,
    onChange,
  } = props
  const localRef = useRef<RJSF>(null)
  const ref = formRefFromParent ?? localRef

  // Annotation fields fetched and modified via the form
  const [formData, setFormData] = React.useState<
    Record<string, unknown> | undefined
  >(undefined)

  // Client-side validation errors
  const [validationError, setValidationError] = React.useState<
    RJSFValidationError[] | undefined
  >(undefined)

  // Errors from the backend response
  const [submissionError, setSubmissionError] = React.useState<
    SynapseClientError | undefined
  >(undefined)
  const [showSubmissionError, setShowSubmissionError] = React.useState(false)

  const [showConfirmation, setShowConfirmation] = React.useState(false)

  const { entityMetadata: entityJson, annotations } = useGetJson(entityId!, {
    // Metadata is being edited, so don't refetch
    staleTime: Infinity,
    enabled: !!entityId,
    useErrorBoundary: true,
  })

  /**
   * patternProperties lets us define how to treat additionalProperties in a JSON schema by property name.
   * In all cases, let's ban properties that collide with entity properties by making their schema "not: {}"
   */
  const patternPropertiesBannedKeys = useMemo(
    () => getPatternPropertiesBannedKeys(entityJson?.concreteType),
    [entityJson?.concreteType],
  )

  const transformErrors = useCallback(
    getTransformErrors(entityJson?.concreteType),
    [entityJson?.concreteType],
  )

  useEffect(() => {
    if (annotations) {
      // Put the annotations into a state variable so it can be modified by the form.
      setFormData(annotations)
    }
  }, [annotations])

  const { data: schema, isLoading: isLoadingBinding } = useGetSchemaBinding(
    entityId!,
    {
      enabled: !!entityId,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
    },
  )

  const { data: fetchedValidationSchema, isLoading: isLoadingSchema } =
    useGetSchema(schemaId ?? schema?.jsonSchemaVersionInfo.$id ?? '', {
      enabled: !!schemaId || !!schema,
      useErrorBoundary: true,
    })

  const validationSchema = validationSchemaFromProps || fetchedValidationSchema

  const isLoading = isLoadingBinding || isLoadingSchema

  const mutation = useUpdateViaJson({
    onSuccess: () => {
      onSuccess()
    },
    onError: error => {
      setSubmissionError(error)
      setShowSubmissionError(true)
    },
  })

  function submitChangedEntity() {
    mutation.mutate({
      ...dropNullishArrayValues(formData ?? {}),
      ...entityJson,
    } as EntityJson)
  }

  return (
    <div className="AnnotationEditor">
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
          {entityJson &&
            (!formData || isEmpty(formData)) &&
            schema === null && (
              <Alert severity="info">
                <b>{entityJson.name}</b> has no annotations. Click the{' '}
                <AddToList /> button to annotate.
              </Alert>
            )}
          <Form
            validator={validator}
            className="AnnotationEditorForm"
            liveValidate={liveValidate}
            noHtml5Validate={true}
            experimental_defaultFormStateBehavior={{
              emptyObjectFields: 'skipDefaults',
            }}
            fields={{
              ObjectField: CustomObjectField,
            }}
            templates={{
              ArrayFieldDescriptionTemplate: ArrayFieldDescriptionTemplate,
              ArrayFieldItemTemplate: ArrayFieldItemTemplate,
              ArrayFieldTemplate: ArrayFieldTemplate,
              ArrayFieldTitleTemplate: ArrayFieldTitleTemplate,
              BaseInputTemplate: BaseInputTemplate,
              FieldErrorTemplate: FieldErrorTemplate,
              FieldTemplate: FieldTemplate,
              ObjectFieldTemplate: ObjectFieldTemplate,
              WrapIfAdditionalTemplate: WrapIfAdditionalTemplate,
              ButtonTemplates: ButtonTemplate,
              DescriptionFieldTemplate: DescriptionFieldTemplate,
              /* Errors are displayed by an Alert component below, so we don't show the builtin ErrorList */
              ErrorListTemplate: () => null,
            }}
            ref={ref}
            disabled={mutation.isLoading}
            schema={
              {
                ...(validationSchema ?? {}),
                patternProperties: {
                  ...(validationSchema?.patternProperties ?? {}),
                  ...patternPropertiesBannedKeys,
                },
                additionalProperties:
                  validationSchema?.additionalProperties ?? true,
              } as JSONSchema7
            }
            uiSchema={{
              'ui:options': {
                copyable: true,
                duplicateKeySuffixSeparator: '_',
              },
              additionalProperties: {
                'ui:field': AdditionalPropertiesSchemaField,
              },
            }}
            transformErrors={transformErrors}
            formData={formData}
            onChange={({ formData }) => {
              if (onChange) {
                onChange(formData)
              }
              setFormData(formData)
              setValidationError(undefined)
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
              if (validationError && entityId) {
                setShowConfirmation(true)
              }
            }}
            widgets={{
              TextWidget: TextWidget,
              DateTimeWidget: DateTimeWidget,
              SelectWidget: SelectWidget,
              CheckboxWidget: BooleanWidget,
            }}
          >
            {validationError && (
              <Alert severity="error" sx={{ my: 2 }}>
                <b>Validation errors found:</b>
                <ul>
                  {validationError.map(
                    (e: RJSFValidationError, index: number) => {
                      return (
                        <li key={index}>
                          <b>{`${getFriendlyPropertyName(e)}: `}</b>{' '}
                          {`${e.message}`}
                        </li>
                      )
                    },
                  )}
                </ul>
              </Alert>
            )}

            {submissionError && showSubmissionError && (
              <Alert severity="error" sx={{ my: 2 }}>
                Annotations could not be updated: {submissionError.reason}
              </Alert>
            )}
            {!formRefFromParent && (
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
                      onCancel && onCancel()
                    }}
                    onConfirm={() => {
                      ref.current!.formElement.current!.requestSubmit()
                    }}
                    confirmButtonText={entityId ? 'Save' : 'Validate'}
                  />
                </Box>
              </>
            )}
          </Form>
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
              confirmButtonText="Save"
            />
          )}
        </>
      )}
    </div>
  )
}
