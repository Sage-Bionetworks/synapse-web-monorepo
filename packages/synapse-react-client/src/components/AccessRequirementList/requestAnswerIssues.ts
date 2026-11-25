import { useGetCurrentJsonSchemaAccessRequirement } from '@/synapse-queries'
import {
  GeneratedRequestForm,
  useGeneratedRequestForm,
} from '@/synapse-queries/dataaccess/useGeneratedRequestForm'
import { AnswerIssues, findAnswerIssues } from '@/utils/jsonschema/answerIssues'
import {
  getSchemaDataFileHandleIds,
  SchemaData,
  withoutUnaskedAnswers,
  withSubmissionContext,
} from '@/utils/jsonschema/schemaData'
import { DataAccessRequestType } from '@sage-bionetworks/synapse-client'
import {
  JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  Renewal,
  Request,
} from '@sage-bionetworks/synapse-types'
import isEmpty from 'lodash-es/isEmpty'
import { useMemo } from 'react'
import { getRequestType } from './JsonSchemaAccessRequirementRequestFlow/requesterInformation'
import { RequestFlowAccessRequirement } from './ManagedACTAccessRequirementRequestFlow/requestFlowTypes'

/**
 * The answers as they are submitted with the given form: with the submission context, and without answers to questions
 * the form does not ask.
 */
function toSubmittedSchemaData(
  schemaData: SchemaData,
  requestType: DataAccessRequestType,
  form: GeneratedRequestForm,
): SchemaData {
  return withoutUnaskedAnswers(
    withSubmissionContext(form.schema, schemaData, requestType),
    form.steps,
  )
}

/**
 * The issues the server would find with a request's answers if it were submitted with the given form.
 *
 * @param includeUnanswered whether a required question without an answer is an issue
 */
export function findRequestAnswerIssues(
  schemaData: SchemaData,
  requestType: DataAccessRequestType,
  form: GeneratedRequestForm,
  includeUnanswered: boolean,
): AnswerIssues {
  return findAnswerIssues(
    toSubmittedSchemaData(schemaData, requestType, form),
    form.validationSchema,
    includeUnanswered,
  )
}

/** The request as it is submitted with the given form, whose attachments are the files its answers still give. */
export function toSubmittedRequest<T extends Request | Renewal>(
  request: T,
  form: GeneratedRequestForm,
): T {
  const schemaData = toSubmittedSchemaData(
    request.schemaData ?? {},
    getRequestType(request),
    form,
  )
  return {
    ...request,
    schemaData,
    attachments: getSchemaDataFileHandleIds(form.schema, schemaData),
  }
}

export type RequestAnswersReview =
  /** The answers are being checked against the current form */
  | { status: 'checking' }
  /** The current form rejects the answers, or leaves a required question unanswered */
  | { status: 'needsReview' }
  /**
   * The request can be submitted. `form` is the form to submit it with (see {@link toSubmittedRequest}), or undefined
   * when the request has no form: its access requirement is not a JsonSchemaAccessRequirement, or the form cannot be
   * loaded, in which case the server still checks the answers on submit.
   */
  | { status: 'ready'; form: GeneratedRequestForm | undefined }

/**
 * Checks a request's answers against the current form of its JsonSchemaAccessRequirement, for a step that submits the
 * request after the request wizard.
 */
export function useRequestAnswersReview(
  accessRequirement: RequestFlowAccessRequirement,
  request: Request | Renewal | undefined,
): RequestAnswersReview {
  const isJsonSchemaAccessRequirement =
    accessRequirement.concreteType ===
    JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE
  const { accessRequirement: currentAccessRequirement, error } =
    useGetCurrentJsonSchemaAccessRequirement(accessRequirement.id, {
      enabled: isJsonSchemaAccessRequirement,
    })
  const requestType = request ? getRequestType(request) : undefined
  const { form, error: formError } = useGeneratedRequestForm(
    currentAccessRequirement?.formTemplateRef,
    requestType,
  )

  return useMemo(() => {
    if (!isJsonSchemaAccessRequirement || error || formError) {
      return { status: 'ready', form: undefined }
    }
    if (!form || !request || !requestType) {
      return { status: 'checking' }
    }
    return isEmpty(
      findRequestAnswerIssues(
        request.schemaData ?? {},
        requestType,
        form,
        true,
      ),
    )
      ? { status: 'ready', form }
      : { status: 'needsReview' }
  }, [
    isJsonSchemaAccessRequirement,
    error,
    formError,
    form,
    request,
    requestType,
  ])
}
