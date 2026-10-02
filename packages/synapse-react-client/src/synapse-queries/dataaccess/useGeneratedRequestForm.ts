import { useGetFormTemplateVersion } from '@/synapse-queries/dataaccess/useFormTemplate'
import { useGetRegisteredSchema } from '@/synapse-queries/jsonschema/useSchema'
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

export type GeneratedRequestFormResult = {
  form: (GeneratedFormSchemaForRjsf & { schema: RJSFSchema }) | undefined
  isLoading: boolean
  error: SynapseClientError | null
}

/**
 * Generate the form a requester fills out for a JsonSchemaAccessRequirement: the FormTemplate version referenced by
 * the access requirement, rendered against that template's registered schema for the given request type.
 * Idle while `requestType` is undefined, so the form is not generated before it is known whether the request is a
 * renewal.
 */
export function useGeneratedRequestForm(
  formTemplateRef: FormTemplateReference,
  requestType: DataAccessRequestType | undefined,
): GeneratedRequestFormResult {
  const templateQuery = useGetFormTemplateVersion(
    formTemplateRef.templateId,
    formTemplateRef.templateVersionNumber,
  )
  const schema$id = templateQuery.data?.schema$id
  const schemaQuery = useGetRegisteredSchema(schema$id ?? '', {
    enabled: !!schema$id,
  })

  const template = templateQuery.data
  const schema = schemaQuery.data as RJSFSchema | undefined

  const form = useMemo(() => {
    if (!template || !schema || !requestType) return undefined
    return {
      ...generateDataAccessSchema(template, schema, requestType),
      schema,
    }
  }, [template, schema, requestType])

  return {
    form,
    isLoading: templateQuery.isLoading || schemaQuery.isLoading,
    error: templateQuery.error ?? schemaQuery.error ?? null,
  }
}
