import React from 'react'
import { useResolveLinkEntity } from '../../utils/functions/ResolveLinkEntity'
import useGetEntityBundle from '../../synapse-queries/entity/useEntityBundle'
import {
  ALL_ENTITY_BUNDLE_FIELDS,
  FileEntity,
} from '@sage-bionetworks/synapse-types'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import FileEntityPreview from './FileEntityPreview'
import { isFileEntity } from '../../utils/types/IsType'

export type EntityPreviewProps = {
  entityId: string
  versionNumber?: number
}

/**
 * Returns a preview of an entity. Currently only works for FileEntities, and Links that resolve to FileEntities.
 * @param props
 * @returns
 */
export default function EntityPreview(props: EntityPreviewProps) {
  const { entityId, versionNumber } = props

  // If the entity is a Link, follow it until we get a non-link
  const { data: resolvedLink, isLoading: isLoadingLinkResolution } =
    useResolveLinkEntity(entityId, versionNumber)
  const isResolvedLinkFileEntity = resolvedLink && isFileEntity(resolvedLink)

  const { data: bundle, isLoading: isLoadingBundle } = useGetEntityBundle(
    resolvedLink?.id!,
    (resolvedLink as FileEntity | undefined)?.versionNumber,
    ALL_ENTITY_BUNDLE_FIELDS,
    {
      enabled: !!isResolvedLinkFileEntity,
      throwOnError: true,
    },
  )

  const isLoading = isLoadingLinkResolution || isLoadingBundle

  if (isLoading) {
    return <SynapseSpinner />
  }

  // If the entity is NOT a FileEntity, throw an error
  if (!isResolvedLinkFileEntity) {
    throw new Error(`${entityId} is not a File and cannot be previewed.`)
  } else {
    return <FileEntityPreview bundle={bundle!} />
  }
}
