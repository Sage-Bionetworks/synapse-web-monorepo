import { Link, Skeleton } from '@mui/material'
import React from 'react'
import {
  convertToEntityType,
  getEntityTypeFromHeader,
} from '../utils/functions/EntityTypeUtils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../utils/functions/getEndpoint'
import { useGetEntity, useGetEntityHeader } from '../synapse-queries'
import { Entity, EntityHeader } from '@sage-bionetworks/synapse-types'
import { EntityTypeIcon } from './EntityIcon'
import { ErrorBanner } from './error/ErrorBanner'
import ErrorChip from './error/ErrorChip'

type EntityLinkProps = {
  entity: string | EntityHeader | Entity
  versionNumber?: number
  /** Whether the component should link to the entity page in Synapse. Default true */
  link?: boolean
  className?: string
  /** Whether to display an icon identifying the entity type. Default true */
  showIcon?: boolean
  /** The field of the entity to display. Default is 'name' */
  displayTextField?: keyof Entity | keyof EntityHeader
}

export const EntityLink = (props: EntityLinkProps) => {
  const {
    entity: entityOrId,
    className,
    versionNumber,
    displayTextField = 'name',
    link = true,
    showIcon = true,
  } = props

  let entityId = ''
  if (typeof entityOrId === 'string') {
    entityId = entityOrId
  }

  const fetchHeader = !!entityId && typeof entityOrId === 'string'

  const { data: fetchedEntity, isLoading } = useGetEntityHeader(
    entityId,
    versionNumber,
    {
      enabled: fetchHeader,
    },
  )

  // We don't get 4XX errors from useGetEntityHeader, so fetch the entity object to get an error response
  // See PLFM-7989
  const fetchFullEntity =
    fetchHeader && fetchedEntity == undefined && !isLoading
  const { error } = useGetEntity(entityId, versionNumber, {
    enabled: fetchFullEntity,
  })

  if (fetchedEntity || typeof entityOrId !== 'string') {
    const entity = fetchedEntity ?? (entityOrId as Entity | EntityHeader)
    let type
    if ('concreteType' in entity) {
      type = convertToEntityType(entity.concreteType)
    } else {
      type = getEntityTypeFromHeader(entity)
    }

    if (link) {
      return (
        <Link
          className={className}
          target="_blank"
          rel="noopener noreferrer"
          href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${entity.id!}${
            versionNumber ? `.${versionNumber}` : ''
          }`}
        >
          {showIcon && (
            <EntityTypeIcon type={type} style={{ marginRight: '6px' }} />
          )}
          {entity[displayTextField as keyof typeof entity]}
        </Link>
      )
    } else {
      return (
        <p className={className}>
          {showIcon && (
            <EntityTypeIcon type={type} style={{ marginRight: '6px' }} />
          )}
          {entity[displayTextField as keyof typeof entity]}
        </p>
      )
    }
  } else if (error) {
    if (entityId) {
      return <ErrorChip chipText={entityId} error={error} />
    }
    return <ErrorBanner error={error} />
  } else {
    return <Skeleton variant="rectangular" width="100" />
  }
}
