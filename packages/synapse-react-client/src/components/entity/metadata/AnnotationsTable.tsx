import React, { useCallback, useState } from 'react'
import { isEmpty } from 'lodash-es'
import {
  convertToEntityType,
  entityTypeToFriendlyName,
} from '../../../utils/functions/EntityTypeUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import {
  useGetJson,
  useGetSchemaBinding,
  useGetValidationResults,
} from '../../../synapse-queries'
import { useSynapseContext } from '../../../utils'
import { SkeletonTable } from '../../Skeleton'
import dayjs from 'dayjs'
import FullWidthAlert from '../../FullWidthAlert'
import { isISOTimestamp } from '../../../utils/functions/DateTimeUtils'
import { formatDate } from '../../../utils/functions/DateFormatter'

export type AnnotationsTableProps = {
  readonly entityId: string
  readonly versionNumber?: number
}

function getDisplayedAnnotation(value: string | number | boolean): string {
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
  /**
   * Currently, schema/validation features are only shown in experimental mode.
   */
  const { isInExperimentalMode } = useSynapseContext()

  const {
    data: entityData,
    isLoading,
    refetch: refetchEntityData,
  } = useGetJson(entityId, versionNumber, true)
  const entityMetadata = entityData?.entityMetadata
  const annotations = entityData?.annotations

  const { data: boundSchema } = useGetSchemaBinding(entityId, {
    enabled: isInExperimentalMode,
  })

  const { data: validationResults, refetch: refetchValidationInformation } =
    useGetValidationResults(entityId, {
      enabled: isInExperimentalMode && Boolean(boundSchema),
    })

  const showSchemaInformation = isInExperimentalMode && Boolean(boundSchema)

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
                  <td className="AnnotationsTable__Row__Key">{key}</td>
                  <td className="AnnotationsTable__Row__Value">
                    {Array.isArray(annotations[key])
                      ? (annotations[key] as string[] | number[] | boolean[])
                          .map(getDisplayedAnnotation)
                          .join(', ')
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
