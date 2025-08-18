import { EntityAnnotationKey } from '@/components/entity/metadata/EntityAnnotationKey'
import { useGetJson } from '@/synapse-queries/entity/useEntity'
import { useGetSchema } from '@/synapse-queries/entity/useSchema'
import {
  useGetSchemaBinding,
  useGetValidationResults,
} from '@/synapse-queries/entity/useEntityBoundSchema'
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
import {
  getDisplayedAnnotationDescription,
  getDisplayedAnnotationTitle,
  useGetAnnotatedJsonInstance,
} from '@/utils/jsonschema/SchemaAnnotationUtils'
import { Json } from '@sage-bionetworks/synapse-client'
import dayjs from 'dayjs'
import { isEmpty } from 'lodash-es'
import { useCallback, useState } from 'react'
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

export function AnnotationsTable(props: AnnotationsTableProps) {
  const { entityId, versionNumber } = props
  const [isManuallyRefetching, setIsManuallyRefetching] = useState(false)

  const {
    data: entityData,
    isLoading: isLoadingEntityData,
    refetch: refetchEntityData,
  } = useGetJson(entityId, versionNumber, true)
  const entityMetadata = entityData?.entityMetadata
  const annotations = entityData?.annotations

  const { data: boundSchema, isLoading: isLoadingSchemaBinding } =
    useGetSchemaBinding(entityId)
  const { data: validationSchema, isLoading: isLoadingValidationSchema } =
    useGetSchema(boundSchema?.jsonSchemaVersionInfo.$id!, {
      enabled: Boolean(boundSchema),
    })

  const { data: annotatedInstance, isLoading: isLoadingSchemaAnnotations } =
    useGetAnnotatedJsonInstance(entityData?.entity as Json, validationSchema)

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
      void refetchEntityData(),
      // Refetch the validation information, which we use to determine if derived annotations may still be pending
      void refetchValidationInformation(),
    ]
    await Promise.allSettled(promises)
    setIsManuallyRefetching(false)
  }, [refetchEntityData, refetchValidationInformation])

  const isLoading =
    isLoadingEntityData ||
    isLoadingSchemaBinding ||
    isLoadingValidationSchema ||
    isLoadingSchemaAnnotations

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
            Object.keys(annotations).map((annotationKey: string) => {
              return (
                <tr key={annotationKey} className="AnnotationsTable__Row">
                  <td className="AnnotationsTable__Row__Key">
                    <EntityAnnotationKey
                      annotationKey={annotationKey}
                      title={getDisplayedAnnotationTitle(
                        annotationKey,
                        annotatedInstance,
                      )}
                      description={getDisplayedAnnotationDescription(
                        annotationKey,
                        annotatedInstance,
                      )}
                    />
                  </td>
                  <td className="AnnotationsTable__Row__Value">
                    {Array.isArray(annotations[annotationKey])
                      ? annotations[annotationKey]
                          .map(getDisplayedAnnotation)
                          .join(', ')
                      : getDisplayedAnnotation(
                          annotations[annotationKey] as
                            | string
                            | number
                            | boolean,
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
