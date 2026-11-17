import { localToday } from '@/utils/functions/DateTimeUtils'
import { customizeValidator, Localizer } from '@rjsf/validator-ajv8'
import dayjs from 'dayjs'
import pluralize from 'pluralize'

type AjvError = NonNullable<Parameters<Localizer>[0]>[number]

/** Shown when a value isn't one of a field's allowed values. */
export const ALLOWED_VALUES_MESSAGE = 'Must be one of the allowed values'

/** Shown when a required field has no answer. */
export const REQUIRED_MESSAGE = 'This field is required'

const FORMAT_MESSAGES: Record<string, string> = {
  email: 'Enter a valid email address',
  uri: 'Enter a valid URL',
  url: 'Enter a valid URL',
  uuid: 'Enter a valid UUID',
  date: 'Enter a valid date',
  'date-time': 'Enter a valid date and time',
}

/**
 * A `date`/`date-time` limit as a calendar date: `today` when it is the user's local date, else
 * e.g. `Mar 5, 2027`. `undefined` for any other limit.
 */
function calendarDate(limit: unknown): string | undefined {
  if (typeof limit !== 'string' || !/^\d{4}-\d{2}-\d{2}/.test(limit)) {
    return undefined
  }
  const date = limit.slice(0, 10)
  return date === localToday() ? 'today' : dayjs(date).format('MMM D, YYYY')
}

/** The ajv error `params` the messages below use, per ajv's (and ajv-formats') error objects. */
type LimitParams = { limit: number | string; format?: string }

/** A plain-language message for `error`, or `undefined` to keep ajv's own message. */
function getMessage(error: AjvError): string | undefined {
  const { limit, format } = error.params as LimitParams
  switch (error.keyword) {
    case 'required':
      return REQUIRED_MESSAGE
    case 'minLength':
      return `Must be at least ${pluralize('character', Number(limit), true)}`
    case 'maxLength':
      return `Must be at most ${pluralize('character', Number(limit), true)}`
    case 'minimum':
      return `Must be ${limit} or more`
    case 'maximum':
      return `Must be ${limit} or less`
    case 'exclusiveMinimum':
      return `Must be greater than ${limit}`
    case 'exclusiveMaximum':
      return `Must be less than ${limit}`
    case 'format':
      return format === undefined ? undefined : FORMAT_MESSAGES[format]
    case 'formatMinimum': {
      // ajv-formats' date limit, e.g. `formatMinimum` on a `date` or `date-time`
      const date = calendarDate(limit)
      return date && `Must be ${date} or later`
    }
    case 'formatMaximum': {
      const date = calendarDate(limit)
      return date && `Must be ${date} or earlier`
    }
    case 'enum':
      return ALLOWED_VALUES_MESSAGE
    default:
      return undefined
  }
}

/**
 * The RJSF `Localizer` giving common JSON-schema rules a short, plain-language message that
 * includes the rule's limit. It is keyed on each ajv error's `keyword` and `params`, never on
 * ajv's message text. Rules without a message here keep ajv's own message.
 */
const localizeValidationErrors: Localizer = errors => {
  errors?.forEach(error => {
    const message = getMessage(error)
    if (message !== undefined) {
      error.message = message
    }
  })
}

/**
 * The validator every JSON-schema-driven form uses by default (see `JsonSchemaForm`), so the
 * same rule gets the same message everywhere. Use it to validate answers programmatically too.
 */
export const jsonSchemaFormValidator = customizeValidator(
  {},
  localizeValidationErrors,
)
