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
import { Fragment, ReactNode, useMemo } from 'react'
import { DataAccessSubmissionFileHandleLink } from './DataAccessSubmissionFileHandleLink'

export const NO_RESPONSE_TEXT = 'No response'
export const OTHER_RESPONSES_TITLE = 'Other responses'
const FILE_HANDLE_ID_PATTERN = /^\d+$/
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
 * `schemaData` is written by the submitter, so only a well-formed ID may be turned into a
 * download request made with the reviewer's credentials.
 */
function isFileHandleId(value: unknown): value is string | number {
  return (
    (typeof value === 'string' || typeof value === 'number') &&
    FILE_HANDLE_ID_PATTERN.test(String(value))
  )
}

/** A choice answer's display label: its `oneOf` title when declared, otherwise the stored value. */
function choiceLabel(subSchema: RJSFSchema | undefined, value: unknown) {
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
  if (detectFieldType(subSchema) === 'file' && isFileHandleId(value)) {
    return (
      <DataAccessSubmissionFileHandleLink
        submissionId={submissionId}
        fileHandleId={String(value)}
      />
    )
  }
  const itemSchema = subSchema?.items as RJSFSchema | undefined
  const text = Array.isArray(value)
    ? value.map(item => choiceLabel(itemSchema, item)).join(', ')
    : choiceLabel(subSchema, value)
  return (
    <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
      {text}
    </Typography>
  )
}

function toStepGroup({
  jsonSchema,
  uiSchema,
}: GeneratedSubmissionForm['steps'][number]): AnswerGroup {
  return {
    title: String(jsonSchema.title ?? ''),
    description: jsonSchema.description,
    fields: (uiSchema['ui:order'] ?? []).map(propertyKey => {
      const subSchema = jsonSchema.properties?.[propertyKey] as
        | RJSFSchema
        | undefined
      const fieldUiSchema = uiSchema[propertyKey] as UiSchema | undefined
      return {
        propertyKey,
        label: String(
          fieldUiSchema?.['ui:title'] ?? subSchema?.title ?? propertyKey,
        ),
        subSchema,
      }
    }),
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
    .map(propertyKey => {
      const subSchema = schemaPropertiesByKey.get(propertyKey)?.subSchema
      return {
        propertyKey,
        label: String(subSchema?.title ?? propertyKey),
        subSchema,
      }
    })

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
    <Stack sx={{ gap: 2 }}>
      {groups.map((group, index) => (
        // Step titles are not unique, and the list is derived rather than reordered.
        <section key={index}>
          <Typography variant="headline3" gutterBottom>
            {group.title}
          </Typography>
          {group.description && (
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {group.description}
            </Typography>
          )}
          <Stack component="dl" sx={{ gap: 1, m: 0 }}>
            {group.fields.map(field => (
              <Fragment key={field.propertyKey}>
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
              </Fragment>
            ))}
          </Stack>
        </section>
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
    <section>
      <Typography variant="headline2" gutterBottom>
        Form Responses
      </Typography>
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
    </section>
  )
}
