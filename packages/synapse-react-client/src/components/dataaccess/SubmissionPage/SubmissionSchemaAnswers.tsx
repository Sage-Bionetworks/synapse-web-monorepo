import { ErrorBanner } from '@/components/error/ErrorBanner'
import { detectFieldType } from '@/components/FormTemplateEditor/schemaFieldUtils'
import {
  GeneratedSubmissionForm,
  useGeneratedSubmissionForm,
} from '@/synapse-queries/dataaccess/useGeneratedSubmissionForm'
import {
  listResolvedSchemaProperties,
  SUBMISSION_CONTEXT_PROPERTY,
} from '@/utils/jsonschema/submissionContext'
import { Skeleton, Stack, Typography } from '@mui/material'
import { RJSFSchema, UiSchema } from '@rjsf/utils'
import { Submission } from '@sage-bionetworks/synapse-types'
import { ReactNode, useMemo } from 'react'
import { DataAccessSubmissionFileHandleLink } from './DataAccessSubmissionFileHandleLink'

export const NO_RESPONSE_TEXT = 'No response'
export const OTHER_RESPONSES_TITLE = 'Other responses'
const NUMERIC_ID_PATTERN = /^\d+$/
const NO_SCHEMA_DATA: Record<string, unknown> = {}

type AnsweredField = {
  propertyKey: string
  label: string
  subSchema: RJSFSchema | undefined
}

type AnswerGroup = {
  title: string
  description?: string
  fields: AnsweredField[]
}

function isEmptyAnswer(value: unknown): boolean {
  return (
    value === undefined ||
    value === null ||
    value === '' ||
    (Array.isArray(value) && value.length === 0)
  )
}

/**
 * Whether `value` has the shape of a numeric ID. This does not establish what the ID refers to:
 * that comes from the schema declaring a file field. `schemaData` is written by the submitter, so
 * even then only a well-formed ID may be turned into a download request made with the reviewer's
 * credentials.
 */
function isNumericId(value: unknown): value is string | number {
  return (
    (typeof value === 'string' || typeof value === 'number') &&
    NUMERIC_ID_PATTERN.test(String(value))
  )
}

/** An answer's display text: a choice's `oneOf` title when declared, otherwise the stored value. */
function formatAnswer(subSchema: RJSFSchema | undefined, value: unknown) {
  const option = subSchema?.oneOf?.find(
    o => typeof o === 'object' && o.const === value,
  ) as RJSFSchema | undefined
  if (option?.title) return option.title
  if (typeof value === 'boolean') return value ? 'Yes' : 'No'
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value as string | number | bigint)
}

function SchemaAnswerValue(props: {
  submissionId: string
  value: unknown
  subSchema: RJSFSchema | undefined
}): ReactNode {
  const { submissionId, value, subSchema } = props
  if (isEmptyAnswer(value)) {
    return (
      <Typography variant="body1" color="text.secondary">
        {NO_RESPONSE_TEXT}
      </Typography>
    )
  }
  if (detectFieldType(subSchema) === 'file' && isNumericId(value)) {
    return (
      <DataAccessSubmissionFileHandleLink
        submissionId={submissionId}
        fileHandleId={String(value)}
      />
    )
  }
  const itemSchema = subSchema?.items as RJSFSchema | undefined
  const text = Array.isArray(value)
    ? value.map(item => formatAnswer(itemSchema, item)).join(', ')
    : formatAnswer(subSchema, value)
  return (
    <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
      {text}
    </Typography>
  )
}

function toAnsweredField(
  propertyKey: string,
  subSchema: RJSFSchema | undefined,
  uiTitle?: string,
): AnsweredField {
  return {
    propertyKey,
    label: uiTitle ?? subSchema?.title ?? propertyKey,
    subSchema,
  }
}

function toStepGroup({
  jsonSchema,
  uiSchema,
}: GeneratedSubmissionForm['steps'][number]): AnswerGroup {
  return {
    title: String(jsonSchema.title ?? ''),
    description: jsonSchema.description,
    fields: (uiSchema['ui:order'] ?? []).map(propertyKey =>
      toAnsweredField(
        propertyKey,
        jsonSchema.properties?.[propertyKey] as RJSFSchema | undefined,
        (uiSchema[propertyKey] as UiSchema | undefined)?.['ui:title'],
      ),
    ),
  }
}

function buildAnswerGroups(
  form: GeneratedSubmissionForm | undefined,
  schemaData: Record<string, unknown>,
): AnswerGroup[] {
  const stepGroups = form ? form.steps.map(toStepGroup) : []
  const placedKeys = new Set([
    SUBMISSION_CONTEXT_PROPERTY,
    ...stepGroups.flatMap(g => g.fields.map(f => f.propertyKey)),
  ])
  const schemaPropertiesByKey = new Map(
    form
      ? listResolvedSchemaProperties(form.schema).map(p => [p.propertyKey, p])
      : [],
  )
  const unplacedFields = Object.keys(schemaData)
    .filter(key => !placedKeys.has(key))
    .map(propertyKey =>
      toAnsweredField(
        propertyKey,
        schemaPropertiesByKey.get(propertyKey)?.subSchema,
      ),
    )

  return unplacedFields.length > 0
    ? [...stepGroups, { title: OTHER_RESPONSES_TITLE, fields: unplacedFields }]
    : stepGroups
}

export type SubmissionSchemaAnswerListProps = {
  submissionId: string
  schemaData: Record<string, unknown>
  /** The generated form to group and label answers by. Without it, answers are listed by key. */
  form: GeneratedSubmissionForm | undefined
}

/**
 * Answers grouped and labelled by the steps of `form`. Answers the form does not place in a step
 * are listed under {@link OTHER_RESPONSES_TITLE} so a reviewer never misses submitted data.
 */
export function SubmissionSchemaAnswerList(
  props: SubmissionSchemaAnswerListProps,
) {
  const { submissionId, schemaData, form } = props
  const groups = useMemo(
    () => buildAnswerGroups(form, schemaData),
    [form, schemaData],
  )

  return (
    <Stack sx={{ gap: 4 }}>
      {groups.map((group, index) => (
        // Step titles are not unique, and the list is derived rather than reordered.
        <Stack component="section" key={index} sx={{ gap: 2 }}>
          <Stack sx={{ gap: 0.5 }}>
            <Typography variant="headline3">{group.title}</Typography>
            {group.description && (
              <Typography variant="body1" color="text.secondary">
                {group.description}
              </Typography>
            )}
          </Stack>
          <Stack component="dl" sx={{ gap: 2, m: 0 }}>
            {group.fields.map(field => (
              <Stack key={field.propertyKey} sx={{ gap: 0.5 }}>
                <Typography variant="smallText2" component="dt">
                  {field.label}
                </Typography>
                <Typography component="dd" sx={{ m: 0 }}>
                  <SchemaAnswerValue
                    submissionId={submissionId}
                    value={schemaData[field.propertyKey]}
                    subSchema={field.subSchema}
                  />
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  )
}

export type SubmissionSchemaAnswersProps = {
  submission: Submission
}

/**
 * Read-only view of a submission's `schemaData`, grouped and labelled by the steps of the
 * FormTemplate version the submission was made against. If that form cannot be generated, the
 * error is shown alongside the answers listed by key.
 */
export function SubmissionSchemaAnswers(props: SubmissionSchemaAnswersProps) {
  const { submission } = props
  const schemaData = submission.schemaData ?? NO_SCHEMA_DATA
  const { form, isLoading, error } = useGeneratedSubmissionForm(submission)

  return (
    <Stack component="section" sx={{ gap: 2 }}>
      <Typography variant="headline2">Form Responses</Typography>
      {error && <ErrorBanner error={error} />}
      {isLoading ? (
        <Skeleton width={300} />
      ) : (
        <SubmissionSchemaAnswerList
          submissionId={submission.id}
          schemaData={schemaData}
          form={form}
        />
      )}
    </Stack>
  )
}
