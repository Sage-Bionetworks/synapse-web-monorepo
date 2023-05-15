import Form, { AjvError } from '@sage-bionetworks/rjsf-core'
import { JSONSchema7 } from 'json-schema'
import isEmpty from 'lodash-es/isEmpty'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import { Alert, Box, Link } from '@mui/material'
import AddToList from '../../../assets/icons/AddToList'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import {
  useGetJson,
  useGetSchema,
  useGetSchemaBinding,
  useUpdateViaJson,
} from '../../../utils/hooks/SynapseAPI'
import { SynapseClientError } from '../../../utils/SynapseClientError'
import { ENTITY_CONCRETE_TYPE, EntityJson } from '../../../utils/synapseTypes'
import { SynapseSpinner } from '../../LoadingScreen'
import { AdditionalPropertiesSchemaField } from './AdditionalPropertiesSchemaField'
import {
  dropNullishArrayValues,
  getFriendlyPropertyName,
  getTransformErrors,
} from './AnnotationEditorUtils'
import { CustomAdditionalPropertiesFieldTemplate } from './CustomAdditionalPropertiesFieldTemplate'
import { CustomArrayFieldTemplate } from './CustomArrayFieldTemplate'
import { CustomBooleanWidget } from './CustomBooleanWidget'
import { CustomDateTimeWidget } from './CustomDateTimeWidget'
import { CustomDefaultTemplate } from './CustomDefaultTemplate'
import { CustomObjectFieldTemplate } from './CustomObjectFieldTemplate'
import { CustomSelectWidget } from './CustomSelectWidget'
import CustomTextWidget from './CustomTextWidget'
import { entityJsonKeys } from '../../../utils/functions/EntityTypeUtils'
import {
  ConfirmationButtons,
  ConfirmationDialog,
} from '../../ConfirmationDialog'

export type SchemaDrivenAnnotationEditorProps = {
  /** The entity whose annotations should be edited with the form */
  entityId?: string
  /** If no entity ID is supplied, the schema to use for the form */
  schemaId?: string
  /** Optionally supply a ref to the form to handle submission externally with `formRef.current.submit()`. If provided, the editor will not render its own submit UI. */
  formRef?: React.RefObject<Form<Record<string, unknown>>>
  /** Provide live input validation. This can cause major performance degradation. */
  liveValidate?: boolean
  /** Invoked after a successful form submission */
  onSuccess?: () => void
  /** If defined and formRef is not supplied, shows a 'Cancel' button and runs this effect on click */
  onCancel?: () => void
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
export const SchemaDrivenAnnotationEditor = (
  props: SchemaDrivenAnnotationEditorProps,
) => {
  const {
    entityId,
    schemaId,
    liveValidate = false,
    onSuccess = () => {
      /* no-op */
    },
    onCancel,
    formRef: formRefFromParent,
  } = props
  const formRef = useRef<Form<Record<string, unknown>>>(null)

  // Annotation fields fetched and modified via the form
  const [formData, setFormData] = React.useState<
    Record<string, unknown> | undefined
  >(undefined)

  // Client-side validation errors
  const [validationError, setValidationError] = React.useState<
    AjvError[] | undefined
  >(undefined)

  // Errors from the backend response
  const [submissionError, setSubmissionError] = React.useState<
    SynapseClientError | undefined
  >(undefined)
  const [showSubmissionError, setShowSubmissionError] = React.useState(false)

  const [showConfirmation, setShowConfirmation] = React.useState(false)

  const { entityMetadata: entityJson, annotations } = useGetJson(entityId!, {
    enabled: !!entityId && !formData, // once we have data, don't refetch. it would overwrite the user's entries
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

  const { data: validationSchema, isLoading: isLoadingSchema } = useGetSchema(
    schemaId ?? schema?.jsonSchemaVersionInfo.$id ?? '',
    {
      enabled: !!schemaId || !!schema,
      select: schema => {
        // Have to remove the ID because of a bug in RJSF
        // https://github.com/rjsf-team/react-jsonschema-form/issues/2471
        delete schema.$id
        return schema
      },
      useErrorBoundary: true,
    },
  )

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
    <div className="bootstrap-4-backport AnnotationEditor">
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
            className="AnnotationEditorForm"
            liveValidate={liveValidate}
            noHtml5Validate={true}
            ArrayFieldTemplate={CustomArrayFieldTemplate}
            ObjectFieldTemplate={CustomObjectFieldTemplate}
            FieldTemplate={CustomDefaultTemplate}
            ref={formRefFromParent ?? formRef}
            disabled={mutation.isLoading}
            /* Errors are displayed by an Alert component below, so we don't show the builtin ErrorList */
            ErrorList={() => null}
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
              'ui:DuplicateKeySuffixSeparator': '_',
              additionalProperties: {
                'ui:field': AdditionalPropertiesSchemaField,
                'ui:FieldTemplate': CustomAdditionalPropertiesFieldTemplate,
              },
            }}
            transformErrors={transformErrors}
            formData={formData}
            onChange={({ formData }) => {
              setFormData(formData)
              setValidationError(undefined)
            }}
            onSubmit={({ formData, errors }) => {
              if (errors && errors.length > 0) {
                setValidationError(errors)
              }
              setShowSubmissionError(false)
              setFormData(formData)
              submitChangedEntity()
            }}
            onError={(errors: AjvError[]) => {
              // invoked when submit is clicked and there are client-side validation errors
              setValidationError(errors)
              if (validationError && entityId) {
                setShowConfirmation(true)
              }
            }}
            widgets={{
              TextWidget: CustomTextWidget,
              DateTimeWidget: CustomDateTimeWidget,
              SelectWidget: CustomSelectWidget,
              CheckboxWidget: CustomBooleanWidget,
            }}
          >
            {validationError && (
              <Alert severity="error" sx={{ mt: 2 }}>
                <b>Validation errors found:</b>
                <ul>
                  {validationError.map((e: AjvError, index: number) => {
                    return (
                      <li key={index}>
                        <b>{`${getFriendlyPropertyName(e)}: `}</b>{' '}
                        {`${e.message}`}
                      </li>
                    )
                  })}
                </ul>
              </Alert>
            )}

            {submissionError && showSubmissionError && (
              <Alert severity="error">
                Annotations could not be updated: {submissionError.reason}
              </Alert>
            )}
            {!formRefFromParent && (
              <>
                <hr />
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
                      formRef.current!.submit()
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
                        (e: AjvError, index: number) => (
                          <li key={index}>
                            <b>{`${getFriendlyPropertyName(e)}: `}</b>{' '}
                            {`${e.message}`}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                  <div>Are you sure you want to save them?</div>
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
