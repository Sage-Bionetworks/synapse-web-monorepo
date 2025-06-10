import { useGetEntityBundle } from '@/synapse-queries'
import { useGetDOIAssociation } from '@/synapse-queries/doi/useDOI'
import { isVersionableEntity } from '@/utils/functions/EntityTypeUtils'
import { DoiObjectType } from '@sage-bionetworks/synapse-client'

function useCombinedDOIAssociations(
  entityId?: string,
  versionNumber?: number,
  projectId?: string,
) {
  const { data: bundle } = useGetEntityBundle(entityId!)

  const useFallbackVersionlessDOI =
    bundle &&
    !bundle.doiAssociation &&
    isVersionableEntity(bundle.entity) &&
    bundle.entity.isLatestVersion

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

  const { data: projectDoiAssociation } = useGetDOIAssociation(
    {
      id: projectId!,
      version: undefined,
      type: DoiObjectType.ENTITY, // Not sure what PORTAL_RESOURCE is but that didn't work here
    },
    {
      enabled: !!projectId,
    },
  )

  console.log('versionedDoiAssociation utils:', versionedDoiAssociation)
  console.log('versionlessDoiAssociation utils:', versionlessDoiAssociation)
  console.log('bundle utils:', bundle)

  const entityDoiAssociation =
    versionedDoiAssociation ?? versionlessDoiAssociation

  console.log('projectId utils:', projectDoiAssociation)
  console.log('entityId utils:', entityDoiAssociation)

  console.log('Calling useGetDOIAssociation with', {
    id: entityId,
    version: versionNumber,
    type: DoiObjectType.ENTITY,
  })

  return { entityDoiAssociation, projectDoiAssociation }
}

export default useCombinedDOIAssociations
