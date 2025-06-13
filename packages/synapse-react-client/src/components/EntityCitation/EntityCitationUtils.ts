import { useGetDOIAssociation } from '@/synapse-queries/doi/useDOI'
import { isVersionableEntity } from '@/utils/functions/EntityTypeUtils'
import { DoiObjectType } from '@sage-bionetworks/synapse-client'
import { EntityBundle } from '@sage-bionetworks/synapse-types'

export function useGetEntityDoiAssociation(
  entityId?: string,
  versionNumber?: number,
  projectId?: string,
  bundle?: EntityBundle,
) {
  const useFallbackVersionlessDOI =
    bundle &&
    !bundle.doiAssociation &&
    isVersionableEntity(bundle.entity) &&
    bundle.entity.isLatestVersion

  // Try fetching the versioned DOI first
  const { data: versionedDoiAssociation } = useGetDOIAssociation(
    {
      id: entityId!,
      version: versionNumber,
      type: DoiObjectType.ENTITY,
    },
    {
      enabled: !!entityId && !!versionNumber,
    },
  )

  // If the versioned DOI is not found, fallback to the versionless DOI so we can still show a DOI if it exists.
  // We do not want to show the versionless DOI if the entity is not the latest version as it would be misleading.
  const { data: versionlessDoiAssociation } = useGetDOIAssociation(
    {
      id: entityId!,
      version: undefined,
      type: DoiObjectType.ENTITY,
    },
    {
      enabled: useFallbackVersionlessDOI,
    },
  )

  const doiAssociation =
    projectId === entityId
      ? undefined
      : versionedDoiAssociation ?? versionlessDoiAssociation

  return doiAssociation
}
