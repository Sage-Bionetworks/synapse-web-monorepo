import { useGetFormTemplateVersion } from '@/synapse-queries/dataaccess/useFormTemplate'
import {
  useGetRegisteredSchema,
  useGetSchema,
} from '@/synapse-queries/jsonschema/useSchema'
import {
  GeneratedFormSchemaForRjsf,
  generateDataAccessSchema,
} from '@/utils/jsonschema/generateDataAccessSchema'
import { RJSFSchema } from '@rjsf/utils'
import {
  DataAccessRequestType,
  FormTemplateReference,
} from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { useMemo } from 'react'

export type GeneratedRequestForm = GeneratedFormSchemaForRjsf & {
  /** The schema as registered, which the steps are generated from */
  schema: RJSFSchema
  /**
   * The schema the server validates the answers against, with every reference resolved. Its `$id` is dropped: the
   * shared validator caches compiled schemas by `$id`, and the answers are only ever validated against this copy.
   */
  validationSchema: RJSFSchema
}

export type GeneratedRequestFormResult = {
  form: GeneratedRequestForm | undefined
  isLoading: boolean
  error: SynapseClientError | null
}

/**
 * Generate the form a requester fills out for a JsonSchemaAccessRequirement: the FormTemplate version referenced by
 * the access requirement, rendered against that template's registered schema for the given request type.
 * Idle while `formTemplateRef` or `requestType` is undefined, so the form is not generated before it is known whether
 * the request is a renewal.
 */
export function useGeneratedRequestForm(
  formTemplateRef: FormTemplateReference | undefined,
  requestType: DataAccessRequestType | undefined,
): GeneratedRequestFormResult {
  const templateQuery = useGetFormTemplateVersion(
    formTemplateRef?.templateId,
    formTemplateRef?.templateVersionNumber,
  )
  const schema$id = templateQuery.data?.schema$id
  const schemaQuery = useGetRegisteredSchema(schema$id ?? '', {
    enabled: !!schema$id,
  })
  // The $id names an exact version of the schema, so its validation schema never changes
  const validationSchemaQuery = useGetSchema(schema$id ?? '', {
    enabled: !!schema$id,
    staleTime: Infinity,
  })

  const template = templateQuery.data
  const schema = schemaQuery.data as RJSFSchema | undefined
  const fetchedValidationSchema = validationSchemaQuery.data as
    | RJSFSchema
    | undefined

  const form = useMemo(() => {
    if (!template || !schema || !fetchedValidationSchema || !requestType) {
      return undefined
    }
    const { $id: _$id, ...validationSchema } = fetchedValidationSchema
    return {
      ...generateDataAccessSchema(template, schema, requestType),
      schema,
      validationSchema,
    }
  }, [template, schema, fetchedValidationSchema, requestType])

  return {
    form,
    isLoading:
      templateQuery.isLoading ||
      schemaQuery.isLoading ||
      validationSchemaQuery.isLoading,
    error:
      templateQuery.error ??
      schemaQuery.error ??
      validationSchemaQuery.error ??
      null,
  }
}
