import {
  AccessApprovalSearchRequest,
  AccessRequirementSearchRequest,
  AvailableFilesRequest,
  BatchFileRequest,
  DiscussionFilter,
  DiscussionReplyOrder,
  DiscussionThreadOrder,
  EntityBundleRequest,
  EntityChildrenRequest,
  FavoriteSortBy,
  FavoriteSortDirection,
  FileHandle,
  FileHandleAssociation,
  GetEvaluationParameters,
  GetProjectsParameters,
  PrincipalAliasRequest,
  QueryBundleRequest,
  ReferenceList,
  RestrictionInformationRequest,
  SearchQuery,
  SubmissionInfoPageRequest,
  SubmissionSearchRequest,
  SubscriptionObjectType,
  SubscriptionQuery,
  TYPE_FILTER,
  ViewColumnModelRequest,
  ViewEntityType,
} from '@sage-bionetworks/synapse-types'
import { QueryKey } from '@tanstack/react-query'
import { removeTrailingUndefinedElements } from '../utils/functions/ArrayUtils'
import { hashCode } from '../utils/functions/StringUtils'
import {
  USER_BUNDLE_MASK_IS_ACT_MEMBER,
  USER_BUNDLE_MASK_IS_AR_REVIEWER,
  USER_BUNDLE_MASK_IS_CERTIFIED,
  USER_BUNDLE_MASK_IS_VERIFIED,
  USER_BUNDLE_MASK_ORCID,
  USER_BUNDLE_MASK_USER_PROFILE,
  USER_BUNDLE_MASK_VERIFICATION_SUBMISSION,
} from '../utils/SynapseConstants'

const entityQueryKeyObjects = {
  /* Query key for all entities */
  all: { objectType: 'entity' },
  // Data for an entity
  entity: (id: string, versionNumber?: string | number) => {
    const key: Record<string, unknown> = {
      ...entityQueryKeyObjects.all,
      id: id,
    }
    if (versionNumber) {
      key['version'] = versionNumber
    }
    return key
  },
  // List of Entity Versions
  versions: (id: string) => [entityQueryKeyObjects.entity(id), 'versions'],
  versionsQuery: (id: string, limit: number, offset: number) => ({
    ...entityQueryKeyObjects.versions(id),
    versionQuery: {
      limit: limit,
      offset: offset,
    },
  }),
  // JSON Representation of an entity
  json: (id: string, versionNumber?: number) => [
    entityQueryKeyObjects.entity(id, versionNumber),
    'json',
  ],
  // entity actions required
  entityActions: (id: string) => [
    entityQueryKeyObjects.entity(id),
    'entityActions',
  ],
  entityForum: (id: string) => [
    entityQueryKeyObjects.entity(id),
    'entityForum',
  ],
  entityChallenge: (id: string) => [
    entityQueryKeyObjects.entity(id),
    'entityChallenge',
  ],
  activity: (id: string, versionNumber?: number) => [
    entityQueryKeyObjects.entity(id, versionNumber),
    'activity',
  ],
  // Entity path
  path: (id: string) => [entityQueryKeyObjects.entity(id), 'path'],
  // Entity bundle
  bundle: (
    id: string,
    versionNumber: string | number | undefined,
    bundleRequest: EntityBundleRequest,
  ) => [
    entityQueryKeyObjects.entity(id, versionNumber),
    'entityBundle',
    bundleRequest,
  ],
  children: (request: EntityChildrenRequest, infinite: boolean) => [
    entityQueryKeyObjects.entity(request.parentId ?? 'root'),
    'children',
    { isInfinite: infinite, entityChildrenRequest: request },
  ],

  tableQueryResult: (
    queryBundleRequest: QueryBundleRequest,
    infinite: boolean,
  ) => [
    entityQueryKeyObjects.entity(queryBundleRequest.entityId),
    'tableQueryResult',
    {
      isInfinite: infinite,
      tableQueryBundleRequest: queryBundleRequest,
    },
  ],

  tableQueryResultWithAsyncStatus: (
    queryBundleRequest: QueryBundleRequest,
    infinite: boolean,
  ) => [
    entityQueryKeyObjects.entity(queryBundleRequest.entityId),
    'tableQueryResultWithAsyncStatus',
    {
      isInfinite: infinite,
      tableQueryBundleRequest: queryBundleRequest,
    },
  ],

  fullTableQueryResult: (
    queryBundleRequest: QueryBundleRequest,
    forceAnonymous: boolean,
  ) => [
    entityQueryKeyObjects.entity(queryBundleRequest.entityId),
    'fullTableQueryResult',
    { tableQueryBundleRequest: queryBundleRequest, forceAnonymous },
  ],

  boundJSONSchema: (id: string) => [
    entityQueryKeyObjects.entity(id),
    'boundJSONSchema',
  ],

  schemaValidationResults: (id: string) => [
    entityQueryKeyObjects.entity(id),
    'schemaValidationResults',
  ],
  header: (id: string, versionNumber?: number) => [
    entityQueryKeyObjects.entity(id, versionNumber),
    'entityHeaders',
  ],
  headers: (references: ReferenceList) => [
    entityQueryKeyObjects.all,
    'entityHeaders',
    references,
  ],
  accessRequirements: (id: string) => [
    entityQueryKeyObjects.entity(id),
    'accessRequirements',
  ],
}

const downloadListQueryKeys = {
  /* Key used to invalidate all download list queries */
  base: 'downloadList',
  availableFiles: (request: AvailableFilesRequest) => [
    downloadListQueryKeys.base,
    'availableFiles',
    request,
  ],
  availableFilesInfinite: (request: AvailableFilesRequest) => [
    downloadListQueryKeys.availableFiles(request),
    'infinite',
  ],
  getActionsRequired: () => [downloadListQueryKeys.base, 'actionsRequired'],
  getActionsRequiredInfinite: () => [
    ...downloadListQueryKeys.getActionsRequired(),
    'infinite',
  ],
  getStatistics: () => [downloadListQueryKeys.base, 'statistics'],
}

const ACCESS_REQUIREMENT_QUERY_KEY = 'accessRequirement'

/**
 * Returns a react-query Query Key.
 *
 * Co-location of react-query keys for queries related to Synapse data. Two objectives of this strategy are
 * - minimize the risk of inappropriate cache key collisions
 * - simplify clearing the appropriate query caches when the entity data is updated
 *
 * For more information, see https://tkdodo.eu/blog/leveraging-the-query-function-context
 */
export class KeyFactory {
  accessToken: string | undefined = undefined
  constructor(accessToken: string | undefined) {
    this.accessToken = accessToken
  }

  /**
   * Returns a react-query Query Key. Prepends the key with the access token, so that the key is unique per-session.
   * Also removes trailing undefined elements from the passed args, so a key can be generated for query invalidation.
   * @param args
   * @private
   */
  private getKey(...args: unknown[]): QueryKey {
    return [
      this.accessToken == null
        ? 'anonymous'
        : btoa(String(hashCode(this.accessToken))),
      ...removeTrailingUndefinedElements(args),
    ]
  }

  public getAllEntityDataQueryKey() {
    return this.getKey(entityQueryKeyObjects.all)
  }

  public getEntityQueryKey(id: string) {
    return this.getKey(entityQueryKeyObjects.entity(id))
  }

  public getEntityActivityQueryKey(id: string, versionNumber?: number) {
    return this.getKey(entityQueryKeyObjects.activity(id, versionNumber))
  }

  public getEntityActionsRequiredQueryKey(id: string) {
    return this.getKey(...entityQueryKeyObjects.entityActions(id))
  }

  public getEntityChallengeQueryKey(id: string) {
    return this.getKey(...entityQueryKeyObjects.entityChallenge(id))
  }

  public getForumQueryKey(id: string) {
    return this.getKey(...entityQueryKeyObjects.entityForum(id))
  }

  public getEntityVersionQueryKey(id: string, versionNumber?: string | number) {
    return this.getKey(entityQueryKeyObjects.entity(id, versionNumber))
  }

  public getPaginatedEntityVersionsQueryKey(
    id: string,
    limit: number,
    offset: number,
  ) {
    return this.getKey(entityQueryKeyObjects.versionsQuery(id, limit, offset))
  }
  public getEntityVersionsQueryKey(id: string) {
    return this.getKey(entityQueryKeyObjects.versions(id))
  }

  public getEntityChildrenQueryKey(
    request: EntityChildrenRequest,
    infinite: boolean,
  ) {
    return this.getKey(entityQueryKeyObjects.children(request, infinite))
  }

  public getEntityJsonQueryKey(
    id: string,
    versionNumber: number | undefined,
    includeDerivedAnnotations: boolean,
  ) {
    return this.getKey(entityQueryKeyObjects.json(id, versionNumber), {
      includeDerivedAnnotations,
    })
  }

  public getEntityBundleQueryKey(
    id: string,
    version: number | undefined,
    bundleRequest: EntityBundleRequest,
  ) {
    return this.getKey(entityQueryKeyObjects.bundle(id, version, bundleRequest))
  }

  public getEntityPathQueryKey(id: string) {
    return this.getKey(entityQueryKeyObjects.path(id))
  }

  public getEntityACLQueryKey(entityId: string) {
    return this.getKey('entityACL', entityId)
  }

  public getEntityAliasQueryKey(alias: string) {
    return this.getKey('entityAlias', alias)
  }

  public getEntityEvaluationsQueryKey(entityId: string) {
    return this.getKey('entityEvaluations', entityId)
  }

  public getEntityPermissionsQueryKey(entityId: string) {
    return this.getKey('entityPermissions', entityId)
  }

  public getEntityBoundJsonSchemaQueryKey(id: string) {
    return this.getKey(entityQueryKeyObjects.boundJSONSchema(id))
  }

  public getEntitySchemaValidationResultsQueryKey(id: string) {
    return this.getKey(entityQueryKeyObjects.schemaValidationResults(id))
  }

  public getEntityHeaderQueryKey(id: string, versionNumber?: number) {
    return this.getKey(entityQueryKeyObjects.header(id, versionNumber))
  }

  public getEntityAccessRequirementsQueryKey(id: string) {
    return this.getKey(entityQueryKeyObjects.accessRequirements(id))
  }

  public getEntityHeadersQueryKey(references: ReferenceList) {
    return this.getKey(entityQueryKeyObjects.headers(references))
  }

  public getEntityTableQueryResultQueryKey(
    queryBundleRequest: QueryBundleRequest,
    infinite: boolean,
  ) {
    return this.getKey(
      entityQueryKeyObjects.tableQueryResult(queryBundleRequest, infinite),
    )
  }

  public getEntityTableQueryResultWithAsyncStatusQueryKey(
    queryBundleRequest: QueryBundleRequest,
    infinite: boolean,
  ) {
    return this.getKey(
      entityQueryKeyObjects.tableQueryResultWithAsyncStatus(
        queryBundleRequest,
        infinite,
      ),
    )
  }

  public getFullTableQueryResultQueryKey(
    queryBundleRequest: QueryBundleRequest,
    forceAnonymous: boolean,
  ) {
    return this.getKey(
      entityQueryKeyObjects.fullTableQueryResult(
        queryBundleRequest,
        forceAnonymous,
      ),
    )
  }

  public getDownloadListBaseQueryKey() {
    return this.getKey(downloadListQueryKeys.base)
  }

  public getDownloadListAvailableFilesQueryKey(request: AvailableFilesRequest) {
    return this.getKey(...downloadListQueryKeys.availableFiles(request))
  }

  public getDownloadListAvailableFilesInfiniteQueryKey(
    request: AvailableFilesRequest,
  ) {
    return this.getKey(...downloadListQueryKeys.availableFilesInfinite(request))
  }

  public getDownloadListActionsRequiredQueryKey() {
    return this.getKey(...downloadListQueryKeys.getActionsRequired())
  }
  public getDownloadListActionsRequiredInfiniteQueryKey() {
    return this.getKey(...downloadListQueryKeys.getActionsRequiredInfinite())
  }

  public getDownloadListStatisticsQueryKey() {
    return this.getKey(...downloadListQueryKeys.getStatistics())
  }

  public searchAccessApprovalsQueryKey(params?: AccessApprovalSearchRequest) {
    return this.getKey('accessApprovalSearch', params)
  }

  public getAccessRequirementQueryKey(id?: string) {
    return this.getKey(ACCESS_REQUIREMENT_QUERY_KEY, id)
  }

  public getAccessRequirementAclQueryKey(id: string) {
    return this.getKey(ACCESS_REQUIREMENT_QUERY_KEY, id, 'acl')
  }

  public searchAccessRequirementsQueryKey(
    params?: AccessRequirementSearchRequest,
  ) {
    return this.getKey(ACCESS_REQUIREMENT_QUERY_KEY, 'search', params)
  }

  public getAccessRequirementWikiPageKey(id: string) {
    return this.getKey(ACCESS_REQUIREMENT_QUERY_KEY, id, 'wikiPageKey')
  }

  public getAccessRequirementRestrictionInformationQueryKey(
    request?: RestrictionInformationRequest,
  ) {
    return this.getKey(
      ACCESS_REQUIREMENT_QUERY_KEY,
      'restrictionInformation',
      request,
    )
  }

  public getAccessRequirementStatusQueryKey(id: string) {
    return this.getKey(ACCESS_REQUIREMENT_QUERY_KEY, id, 'status')
  }

  public getDataAccessRequestForUpdateQueryKey(accessRequirementId: string) {
    return this.getKey(
      ACCESS_REQUIREMENT_QUERY_KEY,
      accessRequirementId,
      'dataAccessRequestForUpdate',
    )
  }

  public getAccessRequirementResearchProjectQueryKey(
    accessRequirementId: string,
  ) {
    return this.getKey(
      ACCESS_REQUIREMENT_QUERY_KEY,
      accessRequirementId,
      'researchProject',
    )
  }

  public getSortedAccessRequirementsAndStatusQueryKey(
    accessRequirementIds?: string[],
  ) {
    return this.getKey(
      ACCESS_REQUIREMENT_QUERY_KEY,
      'sortedByStatus',
      accessRequirementIds,
    )
  }

  public getDataAccessSubmissionQueryKey(id?: string) {
    return this.getKey('dataAccessSubmission', id)
  }

  public searchDataAccessSubmissionQueryKey(params?: SubmissionSearchRequest) {
    return this.getKey('accessSubmissionSearch', params)
  }

  public getApprovedSubmissionInfoQueryKey(
    request?: SubmissionInfoPageRequest,
  ) {
    return this.getKey('approvedSubmissionInfo', request)
  }

  public getValidationSchemaQueryKey(schema$id: string) {
    return this.getKey('validationSchema', schema$id)
  }

  public getPresignedUrlContentQueryKey(
    fileHandle: FileHandle,
    request: BatchFileRequest,
    maxSizeBytes?: number,
  ) {
    return this.getKey('presignedUrlContent', fileHandle, request, maxSizeBytes)
  }

  public getPresignedUrlFromFHAContentQueryKey(
    fileHandleAssociation: FileHandleAssociation,
    forceAnonymous: boolean,
  ) {
    return this.getKey(
      'presignedUrlContentFromFHA',
      fileHandleAssociation,
      forceAnonymous,
    )
  }

  public getProfileImageQueryKey(userId: string) {
    return this.getKey('profileImageData', userId)
  }

  public getDefaultUploadDestinationQueryKey(containerEntityId: string) {
    return this.getKey('uploadDestination', 'default', containerEntityId)
  }

  public getUploadDestinationForStorageLocationQueryKey(
    parentId: string,
    storageLocationId: number,
  ) {
    return this.getKey('uploadDestination', parentId, storageLocationId)
  }

  public getForumModeratorsQueryKey(forumId: string) {
    return this.getKey('moderators', forumId)
  }

  public getForumMetadataQueryKey(forumId: string) {
    return this.getKey('forumThread', forumId, 'metadata')
  }

  public getAllForumThreadsQueryKey(forumId: string) {
    return this.getKey('forumthread', forumId)
  }

  public getForumThreadsQueryKey(
    forumId: string,
    limit: number,
    sort: DiscussionThreadOrder,
    ascending: boolean,
    filter?: DiscussionFilter,
  ) {
    return this.getKey('forumthread', forumId, {
      limit,
      filter,
      sort,
      ascending,
    })
  }

  public getAllRepliesQueryKey(threadId: string) {
    return this.getKey('reply', threadId)
  }

  public getRepliesQueryKey(
    threadId: string,
    ascending?: boolean,
    limit?: number,
    sort?: DiscussionReplyOrder,
    filter?: DiscussionFilter,
  ) {
    return this.getKey('reply', threadId, { limit, filter, sort, ascending })
  }

  public getReplyQueryKey(
    threadId: string,
    replyId: string,
    messageKey: string,
  ) {
    return this.getKey('reply', threadId, { replyId, messageKey })
  }

  public getThreadQueryKey(threadId: string) {
    return this.getKey('thread', threadId)
  }

  public getThreadBodyQueryKey(threadId: string, messageKey: string) {
    return this.getKey('thread', threadId, messageKey)
  }

  public getMyOAuthClientsQueryKey() {
    return this.getKey('oauthClient')
  }

  public getDOIAssociationQueryKey(
    objectType: string,
    objectId: string,
    versionNumber?: number,
  ) {
    return this.getKey([
      'doi',
      'association',
      objectType,
      objectId,
      versionNumber,
    ])
  }

  public getAllSubscribersQueryKey() {
    return this.getKey('subscribers')
  }

  public getSubscribersQueryKey(
    objectId: string,
    objectType: SubscriptionObjectType,
  ) {
    return this.getKey('subscribers', objectId, objectType)
  }

  public getBaseSubscriptionQueryKey() {
    return this.getKey('subscription')
  }

  public getAllSubscriptionsQueryKey(query?: SubscriptionQuery) {
    return this.getKey('subscription', 'all', query)
  }

  public getSubscriptionQueryKey(
    objectId: string,
    objectType: SubscriptionObjectType,
  ) {
    return this.getKey('subscription', objectId, objectType)
  }

  public getSearchEntitiesQueryKey(query: SearchQuery) {
    return this.getKey('searchEntities', query)
  }

  public getTeamQueryKey(teamId: string) {
    return this.getKey('team', teamId)
  }

  public getTeamListQueryKey(teamIds: string) {
    return this.getKey('team', teamIds, 'teamList')
  }

  public getChallengeTeamListQueryKey(challengeId: string) {
    return this.getKey('challenge', challengeId, 'teamList')
  }

  public getTeamMembersQueryKey(teamId: string) {
    return this.getKey('team', teamId, 'membersList')
  }

  public getIsUserMemberOfTeamQueryKey(teamId: string, userId: string) {
    return this.getKey('team', teamId, 'member', userId)
  }

  public getMembershipStatusQueryKey(teamId: string, userId?: string) {
    return this.getKey('team', teamId, 'membershipStatus', userId)
  }

  public getAllOpenMembershipInvitationsForUserQueryKey(userId: string) {
    return this.getKey('openMembershipInvitations', userId)
  }

  public getTeamAccessRequirementsQueryKey(teamId: string) {
    return this.getKey('team', teamId, 'accessRequirements')
  }

  public getFavoritesQueryKey() {
    return this.getKey('favorites')
  }

  public getUserFavoritesQueryKey(
    sort: FavoriteSortBy,
    sortDirection: FavoriteSortDirection,
  ) {
    return this.getKey('favorites', sort, sortDirection)
  }

  public getUserFavoritesInfiniteQueryKey(
    sort: FavoriteSortBy,
    sortDirection: FavoriteSortDirection,
  ) {
    return this.getKey('favorites', 'infinite', sort, sortDirection)
  }
  public getTrashCanItemsQueryKey() {
    return this.getKey('trashCan', 'list')
  }

  public getUserChallengesQueryKey(userId: string) {
    return this.getKey('userChallenges', userId)
  }
  public getPassingRecordQueryKey(userId: string) {
    return this.getKey('passingRecord', userId)
  }

  public getAllSubmissionTeamsQueryKeys() {
    return this.getKey('submissionTeams')
  }

  public getSubmissionTeamsQueryKey(
    challengeId: string,
    limit?: number,
    offset?: number,
  ) {
    return this.getKey('submissionTeams', challengeId, { limit, offset })
  }

  public getUserProjectsQueryKey(
    userId: string,
    projectParams: GetProjectsParameters,
  ) {
    return this.getKey('userProjects', userId, projectParams)
  }

  public getAllUserTeamsQueryKey() {
    return this.getKey('userTeams')
  }

  public getUserTeamsQueryKey(userId: string) {
    return this.getKey('userTeams', userId)
  }

  public getPersonalAccessTokensQueryKey() {
    return this.getKey('personalAccessTokens')
  }

  public getMyProjectsQueryKey(params?: GetProjectsParameters) {
    return this.getKey('myProjects', params)
  }

  public getNotificationEmailQueryKey() {
    return this.getKey('notificationEmail')
  }

  public getCurrentUserProfileQueryKey() {
    return this.getKey('user', 'current', 'profile')
  }

  public getUserBundleQueryKey(userId: string, mask: number) {
    // Convert the mask into an object, where the field is only included (with value true) iff the bit in the mask is set
    const maskObject = {
      ...((mask & USER_BUNDLE_MASK_USER_PROFILE) !== 0
        ? { isUserProfile: true }
        : undefined),
      ...((mask & USER_BUNDLE_MASK_ORCID) !== 0
        ? { isOrcId: true }
        : undefined),
      ...((mask & USER_BUNDLE_MASK_VERIFICATION_SUBMISSION) !== 0
        ? { isVerificationSubmission: true }
        : undefined),
      ...((mask & USER_BUNDLE_MASK_IS_CERTIFIED) !== 0
        ? { isCertified: true }
        : undefined),
      ...((mask & USER_BUNDLE_MASK_IS_VERIFIED) !== 0
        ? { isVerified: true }
        : undefined),
      ...((mask & USER_BUNDLE_MASK_IS_ACT_MEMBER) !== 0
        ? { isACT: true }
        : undefined),
      ...((mask & USER_BUNDLE_MASK_IS_AR_REVIEWER) !== 0
        ? { isARReviewer: true }
        : undefined),
    }
    return this.getKey('user', userId, 'bundle', maskObject)
  }

  public getUserProfileQueryKey(userId: string) {
    return this.getKey('user', userId, 'profile')
  }

  public getPrincipalAliasQueryKey(request: PrincipalAliasRequest) {
    return this.getKey('principalAlias', request)
  }

  public getUserGroupHeaderQueryKey(id: string) {
    return this.getKey('userGroupHeader', id)
  }

  public getUserGroupHeaderBatchQueryKey(id: string[]) {
    return this.getKey('userGroupHeaderBatch', id)
  }
  public getUserGroupHeaderWithAliasQueryKey(aliases: string[]) {
    return this.getKey('userGroupHeader', aliases)
  }

  public getUserGroupHeaderSearchQueryKey(
    prefix: string,
    filter?: TYPE_FILTER,
  ) {
    return this.getKey('userGroupHeader', 'search', prefix, filter)
  }

  public getTwoFactorAuthStatusQueryKey() {
    return this.getKey('twoFactorAuthStatus')
  }

  public getBatchOfFiles(request: BatchFileRequest) {
    return this.getKey('fileBatch', request)
  }

  public getPaginatedDockerTagQueryKey(
    id: string,
    offset: string,
    limit: string,
    sort: string,
    sortDirection: string,
  ) {
    return this.getKey('dockerTag', id, offset, limit, sort, sortDirection)
  }

  public getDefaultColumnModelsQueryKey(
    viewEntityType?: ViewEntityType,
    viewTypeMask?: number,
  ) {
    return this.getKey('defaultColumnModels', viewEntityType, viewTypeMask)
  }

  public getAnnotationColumnModelsQueryKey(
    request: Omit<ViewColumnModelRequest, 'nextPageToken'>,
  ) {
    return this.getKey('annotationColumnModels', request)
  }

  public getEvaluationByIdQueryKey(evalId: string) {
    return this.getKey('evaluation', evalId)
  }
  public getEvaluationsQueryKey(request: GetEvaluationParameters) {
    return this.getKey('evaluation', 'paginated', request)
  }
}
