import { useGetFormTemplateVersion } from '@/synapse-queries/dataaccess/useFormTemplate'
import { useGetRegisteredSchema } from '@/synapse-queries/jsonschema/useSchema'
import {
  GeneratedFormSchemaForRjsf,
  generateDataAccessSchema,
} from '@/utils/jsonschema/generateDataAccessSchema'
import { RJSFSchema } from '@rjsf/utils'
import { DataAccessRequestType } from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { Submission } from '@sage-bionetworks/synapse-types'
import { useMemo } from 'react'

export class MissingFormTemplateRefError extends Error {
  constructor() {
    super('The form template used for this submission could not be determined.')
  }
}

export type GeneratedSubmissionForm = GeneratedFormSchemaForRjsf & {
  /** The template's registered JSON Schema, used to label answers outside the generated steps. */
  schema: RJSFSchema
}

export type GeneratedSubmissionFormResult = {
  form: GeneratedSubmissionForm | undefined
  isLoading: boolean
  error: SynapseClientError | MissingFormTemplateRefError | undefined
}

/**
 * Generate the read-only form for a submission's `schemaData` from the FormTemplate version the
 * submission was made against. Idle when the submission has no `schemaData`.
 */
export function useGeneratedSubmissionForm(
  submission: Submission | undefined,
): GeneratedSubmissionFormResult {
  const hasSchemaData = submission?.schemaData != null
  // The template version in effect when the submission was created, not the one its Access
  // Requirement references now
  const templateRef = submission?.formTemplateRef

  const templateQuery = useGetFormTemplateVersion(
    hasSchemaData ? templateRef?.templateId : undefined,
    templateRef?.templateVersionNumber,
  )
  const schemaId = templateQuery.data?.schema$id
  const schemaQuery = useGetRegisteredSchema(schemaId ?? '', {
    enabled: !!schemaId,
  })

  const template = templateQuery.data
  const schema = schemaQuery.data as RJSFSchema | undefined
  const isRenewalSubmission = submission?.isRenewalSubmission ?? false

  const form = useMemo<GeneratedSubmissionForm | undefined>(() => {
    if (!template || !schema) return undefined
    const requestType = isRenewalSubmission
      ? DataAccessRequestType.RENEWAL
      : DataAccessRequestType.REQUEST
    return {
      ...generateDataAccessSchema(template, schema, requestType),
      schema,
    }
  }, [template, schema, isRenewalSubmission])

  const missingTemplateRef = hasSchemaData && !templateRef
  return {
    form,
    isLoading:
      hasSchemaData &&
      !missingTemplateRef &&
      (templateQuery.isLoading || schemaQuery.isLoading),
    error: missingTemplateRef
      ? new MissingFormTemplateRefError()
      : (templateQuery.error ?? schemaQuery.error ?? undefined),
  }
}
