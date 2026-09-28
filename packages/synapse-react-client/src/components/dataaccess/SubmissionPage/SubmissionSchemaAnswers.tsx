import { ErrorBanner } from '@/components/error/ErrorBanner'
import { useGeneratedSubmissionForm } from '@/synapse-queries/dataaccess/useGeneratedSubmissionForm'
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
const FILE_HANDLE_ID_FORMAT = 'synapse-filehandle-id'
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
  if (subSchema?.format === FILE_HANDLE_ID_FORMAT) {
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

export type SubmissionSchemaAnswersProps = {
  submission: Submission
}

/**
 * Read-only view of a submission's `schemaData`, grouped and labelled by the steps of the
 * FormTemplate version the submission was made against. Answers the template does not place in
 * a step are listed separately so a reviewer never misses submitted data.
 */
export function SubmissionSchemaAnswers(props: SubmissionSchemaAnswersProps) {
  const { submission } = props
  const schemaData = submission.schemaData ?? NO_SCHEMA_DATA
  const { form, isLoading, error } = useGeneratedSubmissionForm(submission)

  const groups = useMemo<AnswerGroup[]>(() => {
    if (!form) return []
    const stepGroups: AnswerGroup[] = form.steps.map(
      ({ jsonSchema, uiSchema }) => ({
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
      }),
    )

    const placedKeys = new Set(
      stepGroups.flatMap(g => g.fields.map(f => f.propertyKey)),
    )
    placedKeys.add(SUBMISSION_CONTEXT_PROPERTY)
    const schemaPropertiesByKey = new Map(
      listResolvedSchemaProperties(form.schema).map(p => [p.propertyKey, p]),
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
      ? [
          ...stepGroups,
          { title: OTHER_RESPONSES_TITLE, fields: unplacedFields },
        ]
      : stepGroups
  }, [form, schemaData])

  return (
    <section>
      <Typography variant="headline2" gutterBottom>
        Form Responses
      </Typography>
      {isLoading && <Skeleton width={300} />}
      {error && <ErrorBanner error={error} />}
      <Stack sx={{ gap: 2 }}>
        {groups.map(group => (
          <section key={group.title}>
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
                      submissionId={submission.id}
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
    </section>
  )
}
