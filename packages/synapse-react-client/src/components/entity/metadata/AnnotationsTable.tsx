import {
  useGetJson,
  useGetSchema,
  useGetSchemaBinding,
  useGetValidationResults,
} from '@/synapse-queries'
import { formatDate } from '@/utils/functions/DateFormatter'
import { isISOTimestamp } from '@/utils/functions/DateTimeUtils'
import {
  convertToEntityType,
  entityTypeToFriendlyName,
} from '@/utils/functions/EntityTypeUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { hasSchema, SchemaObject } from '@hyperjump/json-schema'
import * as AnnotatedInstance from '@hyperjump/json-schema/annotated-instance/experimental'
import {
  annotate,
  Annotator,
} from '@hyperjump/json-schema/annotations/experimental'
import { registerSchema } from '@hyperjump/json-schema/draft-07'
import { Box, Tooltip, Typography } from '@mui/material'
import { Json } from '@sage-bionetworks/synapse-client'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { isEmpty } from 'lodash-es'
import { useCallback, useMemo, useState } from 'react'
import FullWidthAlert from '../../FullWidthAlert'
import { SkeletonTable } from '../../Skeleton'

export type AnnotationsTableProps = {
  readonly entityId: string
  readonly versionNumber?: number
}

export function getDisplayedAnnotation(
  value: string | number | boolean,
): string {
  if (typeof value === 'number' || typeof value === 'boolean') {
    return value.toString()
  } else if (isISOTimestamp(value)) {
    return formatDate(dayjs(value))
  }
  return value
}

function getSchemaAnnotationForProperty(
  key: string,
  instance: Annotator,
  annotationKey: string,
): string | undefined {
  if (instance) {
    // Get the title of each of the properties in the object
    for (const [
      propertyNameNode,
      propertyInstance,
    ] of AnnotatedInstance.entries(
      instance as unknown as AnnotatedInstance.JsonNode,
    )) {
      const propertyName = AnnotatedInstance.value(propertyNameNode)
      if (propertyName === key) {
        const annotationValue = AnnotatedInstance.annotation(
          propertyInstance,
          annotationKey,
        )[0] as string | undefined
        return annotationValue
      }
    }
  }

  return undefined
}

function getDisplayedAnnotationTitle(
  key: string,
  instance?: Annotator,
): string {
  if (instance) {
    const titleFromSchema = getSchemaAnnotationForProperty(
      key,
      instance,
      'title',
    )
    if (titleFromSchema) {
      return titleFromSchema
    }
  }

  return key
}

function getDisplayedAnnotationDescription(
  key: string,
  instance?: Annotator,
): string | undefined {
  if (instance) {
    return getSchemaAnnotationForProperty(key, instance, 'description')
  }

  return undefined
}

function getDisplayedAnnotationKey(key: string, instance?: Annotator) {
  const title = getDisplayedAnnotationTitle(key, instance)
  const description = getDisplayedAnnotationDescription(key, instance)

  if (title == key && !description) {
    return key
  }

  return (
    <Tooltip
      placement={'left'}
      title={
        <>
          {title != key && (
            <p>
              Annotation Key: <i>{key}</i>
            </p>
          )}
          <p>{description}</p>
        </>
      }
    >
      <Box
        component="span"
        sx={{
          textDecoration: '1px underline dashed',
          textUnderlineOffset: '4px',
          cursor: 'help',
        }}
      >
        {title}
      </Box>
    </Tooltip>
  )
}

export function AnnotationsTable(props: AnnotationsTableProps) {
  const { entityId, versionNumber } = props
  const [isManuallyRefetching, setIsManuallyRefetching] = useState(false)

  const {
    data: entityData,
    isLoading,
    refetch: refetchEntityData,
  } = useGetJson(entityId, versionNumber, true)
  const entityMetadata = entityData?.entityMetadata
  const annotations = entityData?.annotations

  const { data: boundSchema } = useGetSchemaBinding(entityId)
  const { data: validationSchema } = useGetSchema(
    boundSchema?.jsonSchemaVersionInfo.$id!,
    {
      enabled: Boolean(boundSchema),
    },
  )

  useMemo(() => {
    if (
      validationSchema &&
      validationSchema.$id &&
      !hasSchema(validationSchema.$id)
    ) {
      registerSchema(validationSchema as SchemaObject)
    }
  }, [validationSchema])

  const { data: annotatedInstance } = useQuery({
    queryKey: ['AnnotationsTable_annotatedInstance', entityId, versionNumber],
    queryFn: () => {
      if (entityData?.entity && validationSchema) {
        return annotate(validationSchema.$id!, entityData.entity as Json)
      }
      return null
    },
    enabled: Boolean(entityData?.entity && validationSchema),
  })

  const { data: validationResults, refetch: refetchValidationInformation } =
    useGetValidationResults(entityId, {
      enabled: Boolean(boundSchema),
    })

  const showSchemaInformation = Boolean(boundSchema)

  // If the entity has not yet been validated since the last fetch, then derived annotations may not have been calculated.
  const recentChangesHaveNotBeenValidated =
    !!entityMetadata &&
    !!validationResults &&
    dayjs(entityMetadata.modifiedOn).diff(
      dayjs(validationResults.validatedOn),
    ) > 0

  const onRefetch = useCallback(async () => {
    setIsManuallyRefetching(true)
    const promises = [
      // Refetch the annotations, which may have changed if new derived annotations have been calculated
      refetchEntityData(),
      // Refetch the validation information, which we use to determine if derived annotations may still be pending
      refetchValidationInformation(),
    ]
    await Promise.allSettled(promises)
    setIsManuallyRefetching(false)
  }, [refetchEntityData, refetchValidationInformation])

  return isLoading || isManuallyRefetching ? (
    <SkeletonTable numRows={3} numCols={2} />
  ) : (
    <>
      {entityMetadata && annotations && isEmpty(annotations) ? (
        <div className="placeholder">
          This{' '}
          {entityTypeToFriendlyName(
            convertToEntityType(entityMetadata.concreteType),
          )}{' '}
          has no annotations.
        </div>
      ) : null}
      <table className="AnnotationsTable">
        <tbody>
          {annotations &&
            Object.keys(annotations).map((key: string) => {
              return (
                <tr key={key} className="AnnotationsTable__Row">
                  <td className="AnnotationsTable__Row__Key">
                    {getDisplayedAnnotationKey(key, annotatedInstance)}
                  </td>
                  <td className="AnnotationsTable__Row__Value">
                    {Array.isArray(annotations[key])
                      ? annotations[key].map(getDisplayedAnnotation).join(', ')
                      : getDisplayedAnnotation(
                          annotations[key] as string | number | boolean,
                        )}
                  </td>
                </tr>
              )
            })}
          {showSchemaInformation ? (
            <tr className="AnnotationsTable__Row">
              <td className="AnnotationsTable__Row__Key Schema">
                Validation Schema
              </td>
              <td className="AnnotationsTable__Row__Value">
                <a
                  href={`${getEndpoint(
                    BackendDestinationEnum.REPO_ENDPOINT,
                  )}/repo/v1/schema/type/registered/${
                    boundSchema!.jsonSchemaVersionInfo.$id
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {boundSchema!.jsonSchemaVersionInfo.schemaName}
                </a>
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
      {entityMetadata &&
        showSchemaInformation &&
        recentChangesHaveNotBeenValidated && (
          <FullWidthAlert
            variant="warning"
            description={`This ${entityTypeToFriendlyName(
              convertToEntityType(entityMetadata.concreteType),
            )} has changed since it has been last validated. If this ${entityTypeToFriendlyName(
              convertToEntityType(entityMetadata.concreteType),
            )} is expected to have annotations derived from the Validation Schema, they may not yet be visible.`}
            primaryButtonConfig={{
              text: 'Reload Annotations',
              onClick: () => {
                onRefetch()
              },
            }}
            isGlobal={false}
          />
        )}
    </>
  )
}
