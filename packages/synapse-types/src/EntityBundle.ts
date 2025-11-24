import { DoiAssociation, EntityType } from '@sage-bionetworks/synapse-client'
import { AccessControlList } from './AccessControlList'
import { Annotations } from './Annotations'
import { Entity } from './Entity'
import { EntityPath } from './EntityHeader'
import { FileHandle } from './File'
import { RestrictionInformationResponse } from './RestrictionInformation'
import { TableBundle } from './Table/TableBundle'
import { UserEntityPermissions } from './UserEntityPermissions'

/**
 * The entity bundle type defined by Synapse. We are using Typescript to generate a more strongly-typed EntityBundle based on the passed EntityBundleRequest, which is exported below.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/entitybundle/v2/EntityBundle.html
 */
type _EntityBundle = {
  entity: Entity
  entityType: EntityType
  annotations: Annotations
  permissions: UserEntityPermissions
  path: EntityPath
  hasChildren: boolean
  fileHandles: FileHandle[]
  benefactorAcl: AccessControlList
  threadCount: number
  restrictionInformation: RestrictionInformationResponse
  // The following fields may be undefined even if they are requested
  accessControlList?: AccessControlList
  tableBundle?: TableBundle
  rootWikiId?: string
  doiAssociation?: DoiAssociation
  fileName?: string
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/entitybundle/v2/EntityBundleRequest.html
export type EntityBundleRequest = {
  includeEntity?: boolean
  includeAnnotations?: boolean
  includePermissions?: boolean
  includeEntityPath?: boolean
  includeHasChildren?: boolean
  includeAccessControlList?: boolean
  includeFileHandles?: boolean
  includeTableBundle?: boolean
  includeRootWikiId?: boolean
  includeBenefactorACL?: boolean
  includeDOIAssociation?: boolean
  includeFileName?: boolean
  includeThreadCount?: boolean
  includeRestrictionInformation?: boolean
}

/**
 * Maps the fields of an Entity bundle to the EntityBundleRequest field that is required to return that field
 */
interface BundleFieldToRequestFieldMapping
  extends Record<keyof _EntityBundle, keyof EntityBundleRequest> {
  entity: 'includeEntity'
  entityType: 'includeEntity'
  annotations: 'includeAnnotations'
  permissions: 'includePermissions'
  path: 'includeEntityPath'
  hasChildren: 'includeHasChildren'
  accessControlList: 'includeAccessControlList'
  fileHandles: 'includeFileHandles'
  tableBundle: 'includeTableBundle'
  rootWikiId: 'includeRootWikiId'
  benefactorAcl: 'includeBenefactorACL'
  doiAssociation: 'includeDOIAssociation'
  fileName: 'includeFileName'
  threadCount: 'includeThreadCount'
  restrictionInformation: 'includeRestrictionInformation'
}

/**
 * Given the following types:
 * @param TRequestConst: a constant request object with boolean values (e.g. an EntityBundleRequest)
 * @param TRequestField: a key of the request object
 * @param TResultObject: a result object (e.g. EntityBundle)
 * @param TResultField: a key of the result object
 *
 * If the constant object has the specified field set to true, then the resulting type will be TResultObject[TResultField].
 *
 * Otherwise, the resulting type is never, indicating that the field is not present in the result.
 */
type IncludeOnlyIfRequested<
  TRequestConst extends Record<string, boolean>,
  TRequestField extends keyof TRequestConst,
  TResultObject,
  TResultField extends keyof TResultObject,
> = TRequestConst[TRequestField] extends true
  ? TResultObject[TResultField]
  : never

/** Request object to return all Entity Bundle fields */
export const ALL_ENTITY_BUNDLE_FIELDS = {
  includeEntity: true,
  includeEntityPath: true,
  includeAnnotations: true,
  includePermissions: true,
  includeHasChildren: true,
  includeAccessControlList: true,
  includeFileHandles: true,
  includeTableBundle: true,
  includeRootWikiId: true,
  includeBenefactorACL: true,
  includeDOIAssociation: true,
  includeFileName: true,
  includeThreadCount: true,
  includeRestrictionInformation: true,
} as const

/**
 * Bundle to transport an Entity and related data objects. See [Synapse REST API](https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/entitybundle/v2/EntityBundle.html).
 *
 * We have utilized TypeScript to add additional type safety based on the value of the request object.
 * @typeParam T - A constant EntityBundleRequest object.
 * @returns An EntityBundle type that only includes the fields that are requested in the request object.
 */
export type EntityBundle<
  T extends EntityBundleRequest = typeof ALL_ENTITY_BUNDLE_FIELDS,
> = {
  // Map over the keys of the EntityBundle type, and for each key, use the IncludeOnlyIfRequested type to determine whether the field is included in the result
  [EntityBundleField in keyof _EntityBundle]: IncludeOnlyIfRequested<
    T,
    BundleFieldToRequestFieldMapping[EntityBundleField],
    _EntityBundle,
    EntityBundleField
  >
}
