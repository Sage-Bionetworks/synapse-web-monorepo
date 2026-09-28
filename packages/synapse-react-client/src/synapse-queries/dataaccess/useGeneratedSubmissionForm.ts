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
import { Submission } from '@sage-bionetworks/synapse-types'
import { useMemo } from 'react'

/**
 * A Submission that carries the FormTemplate it was made against.
 *
 * PLFM-10009 will expose this reference; until then it is read from this field, which only mock
 * data populates.
 */
export type SubmissionWithFormTemplateRef = Submission & {
  formTemplateRef?: FormTemplateReference
}

export class MissingFormTemplateRefError extends Error {
  constructor() {
    super('The form template used for this submission could not be determined.')
  }
}

/**
 * The FormTemplate version in effect when the submission was created, as opposed to the one its
 * Access Requirement currently references.
 */
export function useSubmissionFormTemplateRef(
  submission: Submission | undefined,
): FormTemplateReference | undefined {
  return (submission as SubmissionWithFormTemplateRef | undefined)
    ?.formTemplateRef
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
  const templateRef = useSubmissionFormTemplateRef(submission)

  const templateQuery = useGetFormTemplateVersion(
    hasSchemaData ? templateRef?.templateId : undefined,
    templateRef?.templateVersionNumber,
  )
  const schema$id = templateQuery.data?.schema$id
  const schemaQuery = useGetRegisteredSchema(schema$id ?? '', {
    enabled: !!schema$id,
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
