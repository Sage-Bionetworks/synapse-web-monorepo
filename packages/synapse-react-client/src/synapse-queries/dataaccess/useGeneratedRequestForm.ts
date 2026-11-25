import {
  getFormTemplateVersionQuery,
  useGetFormTemplateVersion,
} from '@/synapse-queries/dataaccess/useFormTemplate'
import {
  getRegisteredSchemaQuery,
  getValidationSchemaQuery,
  useGetRegisteredSchema,
  useGetSchema,
} from '@/synapse-queries/jsonschema/useSchema'
import { SynapseQueriesContext } from '@/synapse-queries/types'
import {
  GeneratedFormSchemaForRjsf,
  generateDataAccessSchema,
} from '@/utils/jsonschema/generateDataAccessSchema'
import { RJSFSchema } from '@rjsf/utils'
import {
  DataAccessRequestType,
  FormTemplate,
  FormTemplateReference,
} from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { JSONSchema7 } from 'json-schema'
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

function toGeneratedRequestForm(
  template: FormTemplate,
  schema: JSONSchema7,
  validationSchema: JSONSchema7,
  requestType: DataAccessRequestType,
): GeneratedRequestForm {
  const { $id: _$id, ...validationSchemaWithoutId } =
    validationSchema as RJSFSchema
  return {
    ...generateDataAccessSchema(template, schema as RJSFSchema, requestType),
    schema: schema as RJSFSchema,
    validationSchema: validationSchemaWithoutId,
  }
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
  // A template version and a schema `$id` each name content that never changes
  const templateQuery = useGetFormTemplateVersion(
    formTemplateRef?.templateId,
    formTemplateRef?.templateVersionNumber,
    { staleTime: Infinity },
  )
  const schema$id = templateQuery.data?.schema$id
  const schemaQuery = useGetRegisteredSchema(schema$id ?? '', {
    enabled: !!schema$id,
    staleTime: Infinity,
  })
  const validationSchemaQuery = useGetSchema(schema$id ?? '', {
    enabled: !!schema$id,
    staleTime: Infinity,
  })

  const template = templateQuery.data
  const schema = schemaQuery.data
  const validationSchema = validationSchemaQuery.data

  const form = useMemo(
    () =>
      template && schema && validationSchema && requestType
        ? toGeneratedRequestForm(
            template,
            schema,
            validationSchema,
            requestType,
          )
        : undefined,
    [template, schema, validationSchema, requestType],
  )

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

/** Fetches the form {@link useGeneratedRequestForm} generates, through the same cached queries. */
export async function fetchGeneratedRequestForm(
  context: Pick<
    SynapseQueriesContext,
    'queryClient' | 'keyFactory' | 'synapseClient'
  >,
  formTemplateRef: FormTemplateReference,
  requestType: DataAccessRequestType,
): Promise<GeneratedRequestForm> {
  const { queryClient } = context
  const template = await queryClient.fetchQuery({
    ...getFormTemplateVersionQuery(
      formTemplateRef.templateId,
      formTemplateRef.templateVersionNumber,
      context,
    ),
    staleTime: Infinity,
  })
  const [schema, validationSchema] = await Promise.all([
    queryClient.fetchQuery({
      ...getRegisteredSchemaQuery(template.schema$id, context),
      staleTime: Infinity,
    }),
    queryClient.fetchQuery({
      ...getValidationSchemaQuery(template.schema$id, context),
      staleTime: Infinity,
    }),
  ])
  return toGeneratedRequestForm(template, schema, validationSchema, requestType)
}
