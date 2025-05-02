import { TableToGenericCardMapping } from '@/components/GenericCard/TableRowGenericCard'
import { useGetDOIAssociation } from '@/synapse-queries/doi/useDOI'
import { useGetUserPortalPermissions } from '@/synapse-queries/portal/usePortal'

export function useShowDoiCardLabel(opts: {
  /** The ID of the portal created with https://rest-docs.synapse.org/rest/POST/portal.html */
  portalId?: string
  /** The candidate DOI ID of the resource */
  resourceId?: string
}) {
  const { portalId, resourceId } = opts

  const { data: doi } = useGetDOIAssociation(
    {
      id: resourceId!,
      portalId,
      type: 'PORTAL_RESOURCE',
    },
    { enabled: Boolean(portalId && resourceId) },
  )
  const { data: canMintDoi } = useGetUserPortalPermissions(portalId!, {
    enabled: !!portalId,
    select: permissions => permissions.canMintDoi!,
  })

  return Boolean(doi || canMintDoi)
}

/**
 * Given a portalDoiConfiguration and a row of data, return the candidate DOI ID for this row. The candidate DOI ID
 * can be used to look up an existing DOI or create a new one that can be looked up later.
 */
export function getCandidateDoiId(args: {
  /** Configuration to display a DOI, as well as the ability to create one for users with such permission */
  portalDoiConfiguration?: TableToGenericCardMapping['portalDoiConfiguration']
  /** Mapping of column name to row data index */
  schema: Record<string, number>
  /** The row data */
  data: string[]
}): string | undefined {
  const { portalDoiConfiguration, schema, data } = args

  if (!portalDoiConfiguration) {
    return undefined
  }

  const { resourceType, resourceIdKeyColumns, serializeDoiString } =
    portalDoiConfiguration

  const doiAttributes: Record<string, string> | undefined =
    resourceIdKeyColumns?.reduce((acc, columnName) => {
      const columnIndex = schema[columnName]
      if (columnIndex !== undefined) {
        acc[columnName] = data[columnIndex]
      }
      return acc
    }, {} as Record<string, string>)

  if (!doiAttributes || Object.keys(doiAttributes).length === 0) {
    return undefined
  }

  return serializeDoiString(resourceType, doiAttributes)
}
