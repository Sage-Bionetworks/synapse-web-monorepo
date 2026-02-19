import { removeTrailingUndefinedElements } from '@/utils/functions/ArrayUtils'
import { parseEntityIdFromSqlStatement } from '@/utils/functions/index'
import { hashCode, normalizeNumericId } from '@/utils/functions/StringUtils'
import {
  USER_BUNDLE_MASK_IS_ACT_MEMBER,
  USER_BUNDLE_MASK_IS_AR_REVIEWER,
  USER_BUNDLE_MASK_IS_CERTIFIED,
  USER_BUNDLE_MASK_IS_VERIFIED,
  USER_BUNDLE_MASK_ORCID,
  USER_BUNDLE_MASK_USER_PROFILE,
  USER_BUNDLE_MASK_VERIFICATION_SUBMISSION,
} from '@/utils/SynapseConstants'
import {
  AddToDownloadListStatsRequest,
  DiscussionSearchRequest,
  EntityLookupRequest,
  GetRepoV1DoiAssociationRequest,
  GetRepoV1DoiRequest,
  ListGridSessionsRequest,
  SuggestionQuery,
  UploadToTablePreviewRequest,
  type UserSubmissionSearchRequest,
  ViewEntityType,
} from '@sage-bionetworks/synapse-client'
import { OIDCAuthorizationRequest } from '@sage-bionetworks/synapse-client/generated/models/OIDCAuthorizationRequest'
import { PrincipalAliasRequest } from '@sage-bionetworks/synapse-client/generated/models/PrincipalAliasRequest'
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
  ObjectType,
  QueryBundleRequest,
  ReferenceList,
  RestrictionInformationBatchRequest,
  RestrictionInformationRequest,
  SearchQuery,
  SessionHistoryRequest,
  SubmissionInfoPageRequest,
  SubmissionSearchRequest,
  SubscriptionObjectType,
  SubscriptionQuery,
  TraceEventsRequest,
  TYPE_FILTER,
  ViewColumnModelRequest,
  WikiPageKey,
} from '@sage-bionetworks/synapse-types'
import { QueryKey } from '@tanstack/react-query'

const entityQueryKeyObjects = {
  /* Query key for all entities */
  all: { objectType: 'entity' },
  // Data for an entity
  entity: (id?: string, versionNumber?: string | number) => {
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
  versionsQuery: (id: string, limit: number, offset: number) => [
    ...entityQueryKeyObjects.versions(id),
    {
      limit: limit,
      offset: offset,
    },
  ],
  // JSON Representation of an entity
  json: (id: string, versionNumber?: number) => [
    entityQueryKeyObjects.entity(id, versionNumber),
    'json',
  ],
  // actions required for all entities
  allActionsRequired: () => [entityQueryKeyObjects.all, 'actionsRequired'],
  // entity actions required
  actionsRequired: (id: string) => [
    entityQueryKeyObjects.entity(id),
    'actionsRequired',
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
    id: string | undefined,
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
    { type: 'tableQueryResult' },
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
    { type: 'tableQueryResult', withAsyncStatus: true },
    {
      isInfinite: infinite,
      tableQueryBundleRequest: queryBundleRequest,
    },
  ],

  fullTableQueryResult: (queryBundleRequest: QueryBundleRequest) => [
    entityQueryKeyObjects.entity(queryBundleRequest.entityId),
    { type: 'tableQueryResult', allResults: true },
    { tableQueryBundleRequest: queryBundleRequest },
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
    ...downloadListQueryKeys.availableFiles(request),
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
const ROOT_WIKI_PAGE_KEY_QUERY_KEY = 'rootWikiPageKey'
const WIKI_PAGE_QUERY_KEY = 'wikiPage'
const DATA_ACCESS_SUBMISSION_QUERY_KEY = 'dataAccessSubmission'

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

  private getKeyAnonymous(...args: unknown[]): QueryKey {
    return ['anonymous', ...removeTrailingUndefinedElements(args)]
  }

  public getFeatureFlagQueryKey() {
    return this.getKey('featureflag')
  }

  public getAllEntityDataQueryKey() {
    return this.getKey(entityQueryKeyObjects.all)
  }

  public getEntityQueryKey(id: string) {
    return this.getKey(entityQueryKeyObjects.entity(id))
  }

  public getEntityActivityQueryKey(id: string, versionNumber?: number) {
    return this.getKey(...entityQueryKeyObjects.activity(id, versionNumber))
  }

  public getAllEntityActionsRequiredQueryKey() {
    return this.getKey(...entityQueryKeyObjects.allActionsRequired())
  }

  public getEntityActionsRequiredQueryKey(id: string) {
    return this.getKey(...entityQueryKeyObjects.actionsRequired(id))
  }

  public getEntityChallengeQueryKey(id: string) {
    return this.getKey(...entityQueryKeyObjects.entityChallenge(id))
  }

  public getForumQueryKey(id: string) {
    return this.getKey(...entityQueryKeyObjects.entityForum(id))
  }

  public getEntityVersionQueryKey(
    id?: string,
    versionNumber?: string | number,
  ) {
    return this.getKey(entityQueryKeyObjects.entity(id, versionNumber))
  }

  public getEntityLookupQueryKey(entityLookupRequest: EntityLookupRequest) {
    return this.getKey(
      entityQueryKeyObjects.all,
      'entityLookup',
      entityLookupRequest,
    )
  }

  public getPaginatedEntityVersionsQueryKey(
    id: string,
    limit: number,
    offset: number,
  ) {
    return this.getKey(
      ...entityQueryKeyObjects.versionsQuery(id, limit, offset),
    )
  }
  public getEntityVersionsQueryKey(id: string) {
    return this.getKey(...entityQueryKeyObjects.versions(id))
  }

  public getEntityChildrenQueryKey(
    request: EntityChildrenRequest,
    infinite: boolean,
  ) {
    return this.getKey(...entityQueryKeyObjects.children(request, infinite))
  }

  public getEntityJsonQueryKey(
    id: string,
    versionNumber: number | undefined,
    includeDerivedAnnotations: boolean,
  ) {
    return this.getKey(...entityQueryKeyObjects.json(id, versionNumber), {
      includeDerivedAnnotations,
    })
  }

  public getEntityBundleQueryKey(
    id: string | undefined,
    version: number | undefined,
    bundleRequest: EntityBundleRequest,
  ) {
    return this.getKey(
      ...entityQueryKeyObjects.bundle(id, version, bundleRequest),
    )
  }

  public getEntityPathQueryKey(id: string) {
    return this.getKey(...entityQueryKeyObjects.path(id))
  }

  public getEntityACLQueryKey(id: string) {
    return this.getKey(entityQueryKeyObjects.entity(id), 'acl')
  }

  public getEntityAliasQueryKey(alias: string) {
    return this.getKey(entityQueryKeyObjects.all, 'alias', alias)
  }

  public getEntityEvaluationsQueryKey(id: string) {
    return this.getKey(entityQueryKeyObjects.entity(id), 'evaluations')
  }

  public getEntityPermissionsQueryKey(id: string) {
    return this.getKey(entityQueryKeyObjects.entity(id), 'permissions')
  }

  public getEntityBoundJsonSchemaQueryKey(id: string) {
    return this.getKey(...entityQueryKeyObjects.boundJSONSchema(id))
  }

  public getEntitySchemaValidationResultsQueryKey(id: string) {
    return this.getKey(...entityQueryKeyObjects.schemaValidationResults(id))
  }

  public getEntityHeaderQueryKey(id: string, versionNumber?: number) {
    return this.getKey(...entityQueryKeyObjects.header(id, versionNumber))
  }

  public getEntityAccessRequirementsQueryKey(id: string) {
    return this.getKey(...entityQueryKeyObjects.accessRequirements(id))
  }

  public getEntityHeadersQueryKey(references: ReferenceList) {
    // TODO: invalidations should check all references
    return this.getKey(...entityQueryKeyObjects.headers(references))
  }

  public getAllTableQueryResultsKey() {
    return this.getKey(entityQueryKeyObjects.all, {
      type: 'tableQueryResult',
    })
  }

  public getEntityTableQueryResultQueryKey(
    queryBundleRequest: QueryBundleRequest,
    infinite: boolean,
  ) {
    return this.getKey(
      ...entityQueryKeyObjects.tableQueryResult(queryBundleRequest, infinite),
    )
  }

  public getEntityTableQueryResultWithAsyncStatusQueryKey(
    queryBundleRequest: QueryBundleRequest,
    infinite: boolean,
  ) {
    return this.getKey(
      ...entityQueryKeyObjects.tableQueryResultWithAsyncStatus(
        queryBundleRequest,
        infinite,
      ),
    )
  }

  public getRootWikiPageKeyQueryKey(
    ownerObjectType: ObjectType,
    ownerObjectId: string,
  ) {
    return this.getKey(
      ROOT_WIKI_PAGE_KEY_QUERY_KEY,
      ownerObjectType,
      ownerObjectId,
    )
  }

  public getWikiPageQueryKey(wikiPageKey: WikiPageKey) {
    return this.getKey(
      WIKI_PAGE_QUERY_KEY,
      wikiPageKey.ownerObjectType,
      wikiPageKey.ownerObjectId,
      wikiPageKey.wikiPageId,
    )
  }

  public getWikiPageKey(ownerId: string, wikiPageId: string) {
    return this.getKey('ownerId', ownerId, 'wikiPageId', wikiPageId)
  }

  public getWikiAttachmentsQueryKey(wikiPageKey: WikiPageKey) {
    return this.getKey(
      WIKI_PAGE_QUERY_KEY,
      wikiPageKey.ownerObjectType,
      wikiPageKey.ownerObjectId,
      wikiPageKey.wikiPageId,
      'attachments',
    )
  }

  public getFullTableQueryResultQueryKey(
    queryBundleRequest: QueryBundleRequest,
    forceAnonymous: boolean,
  ) {
    if (forceAnonymous) {
      return this.getKeyAnonymous(
        ...entityQueryKeyObjects.fullTableQueryResult(queryBundleRequest),
      )
    } else {
      return this.getKey(
        ...entityQueryKeyObjects.fullTableQueryResult(queryBundleRequest),
      )
    }
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

  public getUserAccessApprovalQueryKey(submissionId: string) {
    return this.getKey('accessApproval', submissionId)
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

  public getRestrictionInformationQueryKey(
    request: RestrictionInformationRequest,
  ) {
    return this.getKey(ACCESS_REQUIREMENT_QUERY_KEY, 'restrictionInformation', {
      ...request,
      // The ID may be a number, or a stringified number, or a synID. Transform to just a number to normalize the cache.
      objectId: normalizeNumericId(request.objectId),
    })
  }

  public getRestrictionInformationBatchQueryKey(
    request: RestrictionInformationBatchRequest,
  ) {
    const normalizedRequest: RestrictionInformationBatchRequest = {
      ...request,
      // The IDs may be number, or stringified numbers, or synIDs. Transform to normalize the cache.
      objectIds: request.objectIds.map(normalizeNumericId).map(String),
    }
    return this.getKey(
      ACCESS_REQUIREMENT_QUERY_KEY,
      'restrictionInformationBatch',
      normalizedRequest,
    )
  }

  public getAllAccessRequirementStatusesQueryKey() {
    return this.getKey(ACCESS_REQUIREMENT_QUERY_KEY, 'status')
  }

  public getAccessRequirementStatusQueryKey(id: string) {
    return this.getKey(ACCESS_REQUIREMENT_QUERY_KEY, 'status', id)
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

  // Returns key that can be used to invalidate all data access submission queries
  public getDataAccessSubmissionQueryKey() {
    return this.getKey(DATA_ACCESS_SUBMISSION_QUERY_KEY)
  }

  public getDataAccessSubmissionByIdQueryKey(id: string) {
    return this.getKey(DATA_ACCESS_SUBMISSION_QUERY_KEY, 'byId', id)
  }

  public searchDataAccessSubmissionQueryKey(params?: SubmissionSearchRequest) {
    return this.getKey(
      DATA_ACCESS_SUBMISSION_QUERY_KEY,
      'search',
      'reviewer',
      params,
    )
  }

  public searchDataAccessSubmissionUserRequestsQueryKey(
    params?: UserSubmissionSearchRequest,
  ) {
    return this.getKey(
      DATA_ACCESS_SUBMISSION_QUERY_KEY,
      'search',
      'user',
      params,
    )
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
    if (forceAnonymous) {
      return this.getKeyAnonymous(
        'presignedUrlContentFromFHA',
        fileHandleAssociation,
      )
    } else {
      return this.getKey('presignedUrlContentFromFHA', fileHandleAssociation)
    }
  }

  public getStablePresignedUrlFromFHAQueryKey(
    fileHandleAssociation: FileHandleAssociation,
    forceAnonymous: boolean,
  ) {
    if (forceAnonymous) {
      return this.getKeyAnonymous(
        'stablePresignedUrlFromFHA',
        fileHandleAssociation,
      )
    } else {
      return this.getKey('stablePresignedUrlFromFHA', fileHandleAssociation)
    }
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

  public getForumSearchQueryKey(
    forumId: string,
    discussionSearchRequest: DiscussionSearchRequest,
  ) {
    return this.getKey(
      'forumthread',
      'search',
      forumId,
      discussionSearchRequest,
    )
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

  public getOAuthClientQueryKey(clientId: string) {
    return this.getKey('oauthClient', clientId)
  }

  public getOAuthClientAclQueryKey(clientId: string) {
    return this.getKey('oauthClient', clientId, 'acl')
  }

  public getHasCurrentUserAuthorizedOAuthClientQueryKey(
    request: OIDCAuthorizationRequest,
  ) {
    return this.getKey('currentUserHasAuthorizedClient', request)
  }

  public getDOIAssociationQueryKey(request: GetRepoV1DoiAssociationRequest) {
    return this.getKey(['doi', request, 'association'])
  }

  public getDOIQueryKey(request: GetRepoV1DoiRequest) {
    return this.getKey(['doi', request])
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

  public getSuggestionQueryKey(query: SuggestionQuery) {
    return this.getKey('suggestion', query)
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
  public getTeamMemberCountQueryKey(teamId: string) {
    return this.getKey('team', teamId, 'memberCount')
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

  public getChatAgentTraceKey(request: TraceEventsRequest) {
    return this.getKey('chatbotTraceEvents', request)
  }

  public getTermsOfServiceInfoKey() {
    return this.getKey('termsOfServiceInfo')
  }

  public getTermsOfServiceStatus() {
    return this.getKey('termsOfServiceStatus')
  }

  public getRealmPrincipalsQueryKey() {
    return this.getKey('realmPrincipals')
  }

  public getCurrentRealmQueryKey() {
    return this.getKey('currentRealm')
  }

  public getProjectStorageUsageKey(projectId: string) {
    return this.getKey('projectstorageusage', projectId)
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

  public getEvaluationRoundsQueryKey(evaluationId: string) {
    return this.getKey('evaluation', evaluationId, 'rounds')
  }

  public chatAgentSessionHistoryQueryKey(params?: SessionHistoryRequest) {
    return this.getKey('chatHistory', params)
  }

  public getWebhooksQueryKey() {
    return this.getKey('webhooks')
  }

  public getGithubLatestTagKey(repoOwner: string, repoName: string) {
    return this.getKey('githubLatestTag', repoOwner, repoName)
  }

  public getFileContentKey(fileURL?: string) {
    return this.getKey('fileContent', fileURL)
  }

  public getPortalKey(portalId: string) {
    return this.getKey('portal', portalId)
  }

  public getPortalPermissionsKey(portalId: string) {
    return this.getKey('portal', portalId, 'permissions')
  }

  public getPortalAclQueryKey(portalId: string) {
    return this.getKey('portal', portalId, 'acl')
  }

  public getListPortalsQueryKey() {
    return this.getKey('portal', 'list')
  }

  public getGridSessionKey(sessionId: string) {
    return this.getKey('gridSession', sessionId)
  }

  public getGridSessionListKey(request?: ListGridSessionsRequest) {
    return this.getKey('gridSession', 'list', request)
  }

  public getCurationTaskKey(taskId: number) {
    return this.getKey('curationTask', taskId)
  }

  public getCurationTaskListKey(projectId: string) {
    return this.getKey('curationTask', 'list', projectId)
  }

  public getCsvPreviewQueryKey(request: UploadToTablePreviewRequest) {
    return this.getKey('csvPreview', request)
  }

  public getAddToDownloadListStatsQueryKey(
    addToDownloadListStatsRequest: AddToDownloadListStatsRequest,
  ) {
    // Retrieve the entityId from the request so that changes to the entity can invalidate this query
    const entityId =
      addToDownloadListStatsRequest.request?.parentId ??
      parseEntityIdFromSqlStatement(
        addToDownloadListStatsRequest?.request?.query?.sql ?? '',
      )
    return this.getKey(
      entityQueryKeyObjects.entity(entityId),
      'addToDownloadListStats',
      addToDownloadListStatsRequest,
    )
  }

  public getAsyncJobStatusQueryKey(jobId: string) {
    return this.getKey('asyncJobStatus', jobId)
  }

  public getCurrentRealmPrincipalsQueryKey() {
    return this.getKey('realm', 'current', 'principals')
  }
}
