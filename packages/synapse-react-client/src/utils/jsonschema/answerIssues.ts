import { jsonSchemaFormValidator } from '@/components/JsonSchemaForm/JsonSchemaFormValidator'
import { SchemaData } from '@/utils/jsonschema/schemaData'
import { SUBMISSION_CONTEXT_PROPERTY } from '@/utils/jsonschema/submissionContext'
import { RJSFSchema, RJSFValidationError } from '@rjsf/utils'

/** The answers a form rejects: a message for each, keyed by the top-level property the answer is given for. */
export type AnswerIssues = Record<string, string>

/** The top-level property an RJSF error's `property` path (e.g. `.a.b`, `.a[0]`, `['a b']`) starts with. */
export function getTopLevelPropertyKey(
  error: RJSFValidationError,
): string | undefined {
  const match = error.property?.match(
    /^\.?(?:\['((?:[^'\\]|\\.)*)'\]|([^.[\]]+))/,
  )
  return match?.[1] ?? match?.[2]
}

function getMessage(error: RJSFValidationError, answer: unknown): string {
  if (
    error.name === 'enum' &&
    error.property?.match(/^\.?[^.[\]]+$/) &&
    ['string', 'number', 'boolean'].includes(typeof answer)
  ) {
    return `Your previous answer, “${String(answer)}”, is no longer an option. Choose another answer.`
  }
  return error.message ?? 'This answer is not valid'
}

/**
 * Validates answers against the schema the server validates them against, and returns the issues with them.
 *
 * @param schemaData the answers, including the submission context
 * @param validationSchema the schema the answers are submitted against, with every reference resolved
 * @param includeUnanswered whether a required question without an answer is an issue. A draft is expected to leave
 *   questions unanswered; a request about to be submitted is not.
 */
export function findAnswerIssues(
  schemaData: SchemaData,
  validationSchema: RJSFSchema,
  includeUnanswered: boolean,
): AnswerIssues {
  const { errors } = jsonSchemaFormValidator.validateFormData(
    schemaData,
    validationSchema,
  )
  const issues: AnswerIssues = {}
  for (const error of errors) {
    // Errors about the answers as a whole, such as an unmet `if`, are reported again on the answer they concern
    const key = getTopLevelPropertyKey(error)
    if (
      !key ||
      key === SUBMISSION_CONTEXT_PROPERTY ||
      Object.hasOwn(issues, key)
    ) {
      continue
    }
    const answer = schemaData[key]
    if (answer === undefined && !includeUnanswered) {
      continue
    }
    issues[key] = getMessage(error, answer)
  }
  return issues
}
