import { useGetCurrentJsonSchemaAccessRequirement } from '@/synapse-queries'
import {
  GeneratedRequestForm,
  useGeneratedRequestForm,
} from '@/synapse-queries/dataaccess/useGeneratedRequestForm'
import { AnswerIssues, findAnswerIssues } from '@/utils/jsonschema/answerIssues'
import {
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
import { RequestFlowAccessRequirement } from '../ManagedACTAccessRequirementRequestFlow/requestFlowTypes'
import { getRequestType } from './requesterInformation'

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
    withoutUnaskedAnswers(
      withSubmissionContext(form.schema, schemaData, requestType),
      form.steps,
    ),
    form.validationSchema,
    includeUnanswered,
  )
}

/**
 * Whether a request's answers must be reviewed before it can be submitted: whether the current form of its
 * JsonSchemaAccessRequirement rejects them or leaves a required question unanswered. Always false for any other
 * access requirement, and false if the form cannot be loaded, since the server checks the answers on submit anyway.
 * Undefined while it is being checked.
 */
export function useRequestAnswersNeedReview(
  accessRequirement: RequestFlowAccessRequirement,
  request: Request | Renewal | undefined,
): boolean | undefined {
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
      return false
    }
    if (!form || !request || !requestType) {
      return undefined
    }
    return !isEmpty(
      findRequestAnswerIssues(
        request.schemaData ?? {},
        requestType,
        form,
        true,
      ),
    )
  }, [
    isJsonSchemaAccessRequirement,
    error,
    formError,
    form,
    request,
    requestType,
  ])
}
