import { JSONSchema7 } from 'json-schema'
import SparkMD5 from 'spark-md5'
import UniversalCookies from 'universal-cookie'
import { ACCESS_TOKEN_COOKIE_KEY, SynapseConstants } from '../utils'
import {
  ACCESS_APPROVAL,
  ACCESS_APPROVAL_BY_ID,
  ACCESS_REQUEST_SUBMISSION_SEARCH,
  ACCESS_REQUIREMENT_ACL,
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE,
  ACCESS_REQUIREMENT_RESEARCH_PROJECT_FOR_UPDATE,
  ACCESS_REQUIREMENT_SEARCH,
  ACCESS_REQUIREMENT_STATUS,
  ACCESS_REQUIREMENT_WIKI_PAGE_KEY,
  ACTIVITY_FOR_ENTITY,
  ALIAS_AVAILABLE,
  APPROVED_SUBMISSION_INFO,
  ASYNCHRONOUS_JOB_TOKEN,
  BIND_INVITATION_TO_AUTHENTICATED_USER,
  DATA_ACCESS_REQUEST,
  DATA_ACCESS_REQUEST_SUBMISSION,
  DATA_ACCESS_SUBMISSION_BY_ID,
  DOI_ASSOCIATION,
  ENTITY,
  ENTITY_ACCESS,
  ENTITY_ACCESS_REQUIREMENTS,
  ENTITY_ACL,
  ENTITY_ACTIONS_REQUIRED,
  ENTITY_ALIAS,
  ENTITY_BUNDLE_V2,
  ENTITY_EVALUATION,
  ENTITY_HEADERS,
  ENTITY_ID,
  ENTITY_JSON,
  ENTITY_PATH,
  ENTITY_PERMISSIONS,
  ENTITY_SCHEMA_BINDING,
  ENTITY_SCHEMA_VALIDATION,
  ENTITY_VERSION_JSON,
  EVALUATION,
  EVALUATION_BY_ID,
  FAVORITES,
  FILE_HANDLE_BATCH,
  FORUM,
  FORUM_THREAD,
  INVITEE_VERIFICATION_SIGNED_TOKEN,
  MEMBERSHIP_INVITATION,
  NOTIFICATION_EMAIL,
  PROFILE_IMAGE_PREVIEW,
  PROJECTS,
  REGISTER_ACCOUNT_STEP_1,
  REGISTER_ACCOUNT_STEP_2,
  REGISTERED_SCHEMA_ID,
  REPO,
  RESEARCH_PROJECT,
  SCHEMA_VALIDATION_GET,
  SCHEMA_VALIDATION_START,
  SIGN_TERMS_OF_USE,
  TABLE_QUERY_ASYNC_GET,
  TABLE_QUERY_ASYNC_START,
  TEAM,
  TEAM_ID_MEMBER_ID,
  TEAM_ID_MEMBER_ID_WITH_NOTIFICATION,
  TEAM_MEMBER,
  TEAM_MEMBERS,
  THREAD,
  THREAD_ID,
  TRASHCAN_PURGE,
  TRASHCAN_RESTORE,
  TRASHCAN_VIEW,
  USER_BUNDLE,
  USER_GROUP_HEADERS,
  USER_GROUP_HEADERS_BATCH,
  USER_ID_BUNDLE,
  USER_PROFILE,
  USER_PROFILE_ID,
  VERIFICATION_SUBMISSION,
} from '../utils/APIConstants'
import { dispatchDownloadListChangeEvent } from '../utils/functions/dispatchDownloadListChangeEvent'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../utils/functions/getEndpoint'
import { removeUndefined } from '../utils/functions/ObjectUtils'
import { DATETIME_UTC_COOKIE_KEY } from '../utils/SynapseConstants'
import {
  ACCESS_TYPE,
  AccessApproval,
  AccessApprovalSearchRequest,
  AccessApprovalSearchResponse,
  AccessCodeResponse,
  AccessControlList,
  AccessRequirement,
  AccessRequirementSearchRequest,
  AccessRequirementSearchResponse,
  AccessRequirementStatus,
  AccessTokenGenerationRequest,
  AccessTokenGenerationResponse,
  AccessTokenRecordList,
  AccountSetupInfo,
  ActionRequiredList,
  ActionRequiredRequest,
  ActionRequiredResponse,
  Activity,
  ACTSubmissionStatus,
  AddBatchOfFilesToDownloadListRequest,
  AddBatchOfFilesToDownloadListResponse,
  AddPartResponse,
  AddToDownloadListRequest,
  AddToDownloadListResponse,
  AliasCheckRequest,
  AliasCheckResponse,
  AsynchronousJobStatus,
  AsyncJobId,
  AuthenticatedOn,
  AvailableFilesRequest,
  AvailableFilesResponse,
  BatchFileRequest,
  BatchFileResult,
  BatchPresignedUploadUrlRequest,
  BatchPresignedUploadUrlResponse,
  BulkFileDownloadRequest,
  BulkFileDownloadResponse,
  Challenge,
  ChallengePagedResults,
  ChallengeTeam,
  ChallengeTeamPagedResults,
  ChangePasswordWithCurrentPassword,
  ChangePasswordWithToken,
  ColumnModel,
  CreateAccessApprovalRequest,
  CreateChallengeTeamRequest,
  CreateDiscussionReply,
  CreateDiscussionThread,
  CreateMembershipInvitationRequest,
  CreateMembershipRequestRequest,
  CreateSubmissionRequest,
  CreateTeamRequest,
  Direction,
  DiscussionFilter,
  DiscussionReplyBundle,
  DiscussionReplyOrder,
  DiscussionSearchRequest,
  DiscussionSearchResponse,
  DiscussionThreadBundle,
  DiscussionThreadOrder,
  DockerCommit,
  DoiAssociation,
  DownloadFromTableRequest,
  DownloadFromTableResult,
  DownloadList,
  DownloadListItem,
  DownloadListManifestRequest,
  DownloadListPackageRequest,
  DownloadListPackageResponse,
  DownloadListQueryRequest,
  DownloadListQueryResponse,
  DownloadOrder,
  EmailValidationSignedToken,
  Entity,
  EntityBundle,
  EntityBundleRequest,
  EntityChildrenRequest,
  EntityChildrenResponse,
  EntityHeader,
  EntityId,
  EntityJson,
  EntityLookupRequest,
  EntityPath,
  Evaluation,
  EvaluationRound,
  EvaluationRoundListRequest,
  EvaluationRoundListResponse,
  EvaluationSubmission as EvaluationSubmission,
  FavoriteSortBy,
  FavoriteSortDirection,
  FileEntity,
  FileHandle,
  FileHandleAssociateType,
  FileHandleAssociation,
  FileHandleResults,
  FileResult,
  FilesStatisticsRequest,
  FilesStatisticsResponse,
  FileUploadComplete,
  FormChangeRequest,
  FormData,
  FormGroup,
  FormRejection,
  Forum,
  GetEvaluationParameters,
  GetProjectsParameters,
  HasAccessResponse,
  InviteeVerificationSignedToken,
  JoinTeamSignedToken,
  JsonSchemaObjectBinding,
  ListRequest,
  ListResponse,
  ListWrapper,
  LoginResponse,
  ManagedACTAccessRequirementStatus,
  MembershipInvitation,
  MembershipInvtnSignedToken,
  MembershipRequest,
  MessageURL,
  MultipartUploadRequest,
  MultipartUploadStatus,
  NewUser,
  NotificationEmail,
  OAuthClient,
  OAuthClientIdAndSecret,
  OAuthClientList,
  OAuthClientPublic,
  OAuthClientVerificationPrecheckResult,
  OAuthConsentGrantedResponse,
  ObjectType,
  OIDCAuthorizationRequest,
  OIDCAuthorizationRequestDescription,
  PaginatedIds,
  PaginatedResults,
  PassingRecord,
  PrincipalAliasRequest,
  PrincipalAliasResponse,
  ProjectFilesStatisticsRequest,
  ProjectFilesStatisticsResponse,
  ProjectHeaderList,
  QueryBundleRequest,
  QueryRequestDetails,
  QueryResponseDetails,
  QueryResultBundle,
  QueryTableResults,
  Quiz,
  QuizResponse,
  ReferenceList,
  RemoveBatchOfFilesFromDownloadListRequest,
  RemoveBatchOfFilesFromDownloadListResponse,
  Renewal,
  Request,
  ResearchProject,
  ResponseMessage,
  RestrictableObjectDescriptor,
  RestrictionInformationRequest,
  RestrictionInformationResponse,
  SearchQuery,
  SearchResults,
  SortBy,
  Submission as DataAccessSubmission,
  SubmissionInfoPage,
  SubmissionInfoPageRequest,
  SubmissionSearchRequest,
  SubmissionSearchResponse,
  SubmissionStateChangeRequest,
  SubscriberPagedResults,
  Subscription,
  SubscriptionPagedResults,
  SubscriptionQuery,
  SubscriptionRequest,
  SynapseVersion,
  TableUpdateTransactionRequest,
  Team,
  TeamMember,
  TeamMembershipStatus,
  TeamSubmissionEligibility,
  Topic,
  TotpSecret,
  TotpSecretActivationRequest,
  TrashedEntity,
  TwoFactorAuthErrorResponse,
  TwoFactorAuthLoginRequest,
  TwoFactorAuthRecoveryCodes,
  TwoFactorAuthStatus,
  TYPE_FILTER,
  UpdateDiscussionReply,
  UpdateThreadMessageRequest,
  UpdateThreadTitleRequest,
  UploadDestination,
  UserBundle,
  UserEntityPermissions,
  UserEvaluationPermissions,
  UserGroupHeaderResponse,
  UserGroupHeaderResponsePage,
  UserProfile,
  ValidationResults,
  VerificationSubmission,
  VersionInfo,
  ViewColumnModelRequest,
  ViewColumnModelResponse,
  ViewEntityType,
  WikiPage,
  WikiPageKey,
} from '@sage-bionetworks/synapse-types'
import { calculateFriendlyFileSize } from '../utils/functions/calculateFriendlyFileSize'
import {
  allowNotFoundError,
  isOutsideSynapseOrg,
  returnIfTwoFactorAuthError,
} from './SynapseClientUtils'
import { delay, doDelete, doGet, doPost, doPut } from './HttpClient'
import { SetOptional } from 'type-fest'

const cookies = new UniversalCookies()

// Max size file that we will allow the caller to read into memory (5MB)
const MAX_JS_FILE_DOWNLOAD_SIZE = 5242880
// This corresponds to the Synapse-managed S3 storage location:
export const SYNAPSE_STORAGE_LOCATION_ID = 1
export function getRootURL(): string {
  const portString = window.location.port ? `:${window.location.port}` : ''
  return `${window.location.protocol}//${window.location.hostname}${portString}/`
}

export const getVersion = (): Promise<SynapseVersion> => {
  return doGet<SynapseVersion>(
    '/repo/v1/version',
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * https://rest-docs.synapse.org/rest/POST/entity/id/table/download/csv/async/start.html
 */
export const getDownloadFromTableRequest = async (
  request: DownloadFromTableRequest,
  accessToken: string | undefined = undefined,
): Promise<DownloadFromTableResult> => {
  const asyncJobId = await doPost<AsyncJobId>(
    `/repo/v1/entity/${request.entityId}/table/download/csv/async/start`,
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
  return getAsyncResultBodyFromJobId(
    asyncJobId.token,
    `/repo/v1/entity/${request.entityId}/table/download/csv/async/get/${asyncJobId.token}`,
    accessToken,
  )
}

/**
 * https://rest-docs.synapse.org/rest/GET/fileHandle/handleId.html
 * Get a FileHandle using its ID.
 * Note: Only the user that created the FileHandle can access it directly.
 * @return FileHandle
 **/
export const getFileHandleById = (
  handleId: string,
  accessToken: string | undefined = undefined,
): Promise<FileHandle> => {
  return doGet<FileHandle>(
    `/file/v1/fileHandle/${handleId}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * http://rest-docs.synapse.org/rest/GET/file/id.html
 * Get the actual URL of the file from with an associated object .
 * @return a short lived presignedURL to be redirected with
 **/
export const getActualFileHandleByIdURL = (
  handleId: string,
  accessToken: string | undefined = undefined,
  fileAssociateType: FileHandleAssociateType,
  fileAssociateId: string,
  redirect: boolean = true,
): Promise<string> => {
  // get the presigned URL for this file handle association.
  return doGet<string>(
    `/file/v1/file/${handleId}?fileAssociateType=${fileAssociateType}&fileAssociateId=${fileAssociateId}&redirect=${redirect}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * https://rest-docs.synapse.org/rest/GET/fileHandle/handleId/url.html
 * Note: Only the user that created the FileHandle can use this method for download.
 * @return a short lived presignedURL to be redirected with
 **/
export const getFileHandleByIdURL = (
  handleId: string,
  accessToken: string | undefined = undefined,
) => {
  // get the presigned URL for this file handle
  return doGet<string>(
    `/file/v1/fileHandle/${handleId}/url?redirect=false`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get a completed asynchronous job. Will refetch every 500ms until COMPLETE or FAILED.
 * @param asyncJobId
 * @param responseBodyEndpoint
 * @param accessToken
 * @param setCurrentAsyncStatus - optional function that will receive the AsynchronousJobStatus object every time
 *   it's fetched, including while it is in the "PROCESSING" state.
 * @returns
 */
export const getAsyncResultFromJobId = async <TRequest, TResponse>(
  asyncJobId: string,
  responseBodyEndpoint: string,
  accessToken?: string,
  setCurrentAsyncStatus?: (
    result: AsynchronousJobStatus<TRequest, TResponse>,
  ) => void,
): Promise<AsynchronousJobStatus<TRequest, TResponse>> => {
  let response = await doGet<AsynchronousJobStatus<TRequest, TResponse>>(
    ASYNCHRONOUS_JOB_TOKEN(asyncJobId),
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
  setCurrentAsyncStatus?.(response)
  while (response.jobState && response.jobState === 'PROCESSING') {
    await delay(500)
    response = await doGet<AsynchronousJobStatus<TRequest, TResponse>>(
      ASYNCHRONOUS_JOB_TOKEN(asyncJobId),
      accessToken,
      BackendDestinationEnum.REPO_ENDPOINT,
    )
    setCurrentAsyncStatus?.(response)
  }

  if (response.jobState === 'FAILED') {
    /**
     * While we technically already have the failure reason in the response, the HTTP response doesn't give a helpful error code (e.g. 403)
     * that we can use for an error banner. We can get the HTTP code if we fetch the response body directly.
     */
    const failureResponse = await doGet<TResponse>(
      responseBodyEndpoint,
      accessToken,
      BackendDestinationEnum.REPO_ENDPOINT,
    )
    console.warn(
      'SynapseClient.getAsyncResultFromJobId should have thrown an error, but instead retrieved the following response:',
      failureResponse,
    )
  }
  return response
}

/**
 * Get the response body for an asynchronous job, or throw an error if the job failed.
 * @param asyncJobId
 * @param responseBodyEndpoint
 * @param accessToken
 * @returns
 */
export const getAsyncResultBodyFromJobId = async <TResponse>(
  asyncJobId: string,
  responseBodyEndpoint: string,
  accessToken?: string,
): Promise<TResponse> => {
  const response = await getAsyncResultFromJobId<unknown, TResponse>(
    asyncJobId,
    responseBodyEndpoint,
    accessToken,
  )

  return response.responseBody!
}

/**
 * https://rest-docs.synapse.org/rest/POST/entity/id/table/query/nextPage/async/start.html
 * @param {*} queryBundleRequest
 * @param {*} accessToken
 */
export const getQueryTableAsyncJobResults = async (
  queryBundleRequest: QueryBundleRequest,
  accessToken?: string,
  setCurrentAsyncStatus?: (
    result: AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>,
  ) => void,
): Promise<AsynchronousJobStatus<QueryBundleRequest, QueryResultBundle>> => {
  const asyncJobId = await doPost<AsyncJobId>(
    TABLE_QUERY_ASYNC_START(queryBundleRequest.entityId),
    queryBundleRequest,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
  return getAsyncResultFromJobId<QueryBundleRequest, QueryResultBundle>(
    asyncJobId.token,
    TABLE_QUERY_ASYNC_GET(queryBundleRequest.entityId, asyncJobId.token),
    accessToken,
    setCurrentAsyncStatus,
  )
}

/**
 * https://rest-docs.synapse.org/rest/POST/entity/id/table/query/nextPage/async/start.html
 * @param {*} queryBundleRequest
 * @param {*} accessToken
 * @param {*} signal
 */
export const getQueryTableResults = async (
  queryBundleRequest: QueryBundleRequest,
  accessToken?: string,
  signal?: AbortSignal,
): Promise<QueryResultBundle> => {
  const asyncJobId = await doPost<AsyncJobId>(
    `/repo/v1/entity/${queryBundleRequest.entityId}/table/query/async/start`,
    queryBundleRequest,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
    { signal },
  )
  return getAsyncResultBodyFromJobId(
    asyncJobId.token,
    `/repo/v1/entity/${queryBundleRequest.entityId}/table/query/async/get/${asyncJobId.token}`,
    accessToken,
  )
}
/**
 *  Run and return results from queryBundleRequest, queryBundle request must be of the
 *  form:
 *     {
 *        concreteType: String,
 *        query: {
 *           sql: String,
 *           partMask: Number
 *        }
 *     }
 * @param {*} queryBundleRequest
 * @param {*} [accessToken=undefined]
 * @returns Full dataset from synapse table query
 */

export const getFullQueryTableResults = async (
  queryBundleRequest: QueryBundleRequest,
  accessToken: string | undefined = undefined,
  signal?: AbortSignal,
): Promise<QueryResultBundle> => {
  // get first page
  let offset = 0
  const { query, ...rest } = queryBundleRequest
  const queryRequest: QueryBundleRequest = {
    ...rest,
    query: { ...query, offset: offset, limit: undefined },
    partMask:
      queryBundleRequest.partMask |
      SynapseConstants.BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE,
  }
  const data = await getQueryTableResults(queryRequest, accessToken, signal)
  // we are done if we return less than a max pagesize that the backend is willing to return.
  let isDone = data.queryResult!.queryResults.rows.length < data.maxRowsPerPage!
  offset += data.queryResult!.queryResults.rows.length
  queryRequest.query.limit = data.maxRowsPerPage // set the limit to the actual max rows per page

  while (!isDone) {
    queryRequest.query.offset = offset
    // update the maxPageSize to the largest possible value after the first page is complete.  This is a no-op after the second page.

    const response = await getQueryTableResults(
      queryRequest,
      accessToken,
      signal,
    )
    data.queryResult!.queryResults.rows.push(
      ...response.queryResult!.queryResults.rows, // ... spread operator to push all elements on
    )
    isDone =
      response.queryResult!.queryResults.rows.length < queryRequest.query.limit!
    offset += response.queryResult!.queryResults.rows.length
  }
  return data
}

/**
 *  Log-in using the given username and password.  Will return a access token that must be used in
 *  authenticated requests.
 *  https://rest-docs.synapse.org/rest/POST/login2.html
 */
export async function login(
  username: string,
  password: string,
  authenticationReceipt: string | null,
  endpoint = BackendDestinationEnum.REPO_ENDPOINT,
): Promise<LoginResponse | TwoFactorAuthErrorResponse | null> {
  return returnIfTwoFactorAuthError(() =>
    doPost(
      '/auth/v1/login2',
      { username, password, authenticationReceipt },
      undefined,
      endpoint,
    ),
  )
}

/**
 * Performs authentication using 2FA, the body of the request needs to include the twoFaToken received as part of the
 * error when authenticating and the totp code shown by the authenticator application.
 *
 * https://rest-docs.synapse.org/rest/POST/2fa/token.html
 */
export function loginWith2fa(
  request: TwoFactorAuthLoginRequest,
  endpoint: BackendDestinationEnum = BackendDestinationEnum.REPO_ENDPOINT,
): Promise<LoginResponse> {
  return doPost('/auth/v1/2fa/token', request, undefined, endpoint)
}

/**
 * Get redirect url
 * https://rest-docs.synapse.org/rest/POST/oauth2/authurl.html
 * @param {*} provider
 * @param {*} redirectUrl
 * @param {*} endpoint
 */
export const oAuthUrlRequest = (
  provider: string,
  redirectUrl: string,
  state?: string,
  endpoint = BackendDestinationEnum.REPO_ENDPOINT,
) => {
  return doPost<{ authorizationUrl: string }>(
    '/auth/v1/oauth2/authurl',
    { provider, redirectUrl, state },
    undefined,
    endpoint,
  )
}
/**
 * Get access token from SSO
 * https://rest-docs.synapse.org/rest/POST/oauth2/session2.html
 * @param {*} provider
 * @param {*} authenticationCode
 * @param {*} redirectUrl
 * @param {*} endpoint
 */
export const oAuthSessionRequest = (
  provider: string,
  authenticationCode: string | number,
  redirectUrl: string,
  endpoint: BackendDestinationEnum = BackendDestinationEnum.REPO_ENDPOINT,
): Promise<LoginResponse | TwoFactorAuthErrorResponse | null> => {
  return returnIfTwoFactorAuthError(() =>
    doPost(
      '/auth/v1/oauth2/session2',
      { provider, authenticationCode, redirectUrl },
      undefined,
      endpoint,
    ),
  )
}

/**
 * Fetch the current 2FA status for the user.
 * https://rest-docs.synapse.org/rest/GET/2fa.html
 */
export function getCurrentUserTwoFactorEnrollmentStatus(accessToken?: string) {
  return doGet<TwoFactorAuthStatus>(
    '/auth/v1/2fa',
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Disable 2FA for the user.
 * https://rest-docs.synapse.org/rest/DELETE/2fa.html
 */
export function disableTwoFactorAuthForCurrentUser(accessToken?: string) {
  return doDelete(
    '/auth/v1/2fa',
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * https://rest-docs.synapse.org/rest/POST/2fa/enroll.html
 */
export function start2FAEnrollment(accessToken?: string) {
  return doPost<TotpSecret>(
    '/auth/v1/2fa/enroll',
    null,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * https://rest-docs.synapse.org/rest/POST/2fa.html
 */
export function complete2FAEnrollment(
  request: TotpSecretActivationRequest,
  accessToken?: string,
) {
  return doPost<TwoFactorAuthStatus>(
    '/auth/v1/2fa',
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Generates a new set of single use recovery codes that are associated with the two factor authentication of the user.
 * The recovery codes are single use and can be used to login with 2FA in place of an TOTP. In order to use a recovery
 * code the body of the login request should specify as the otpType RECOVERY_CODE and the otpCode should match one of
 * the generated recovery codes.
 *
 * Note that invoking this endpoint will replace existing recovery codes.
 *
 * https://rest-docs.synapse.org/rest/POST/2fa/recoveryCodes.html
 */
export function createRecoveryCodes(accessToken?: string) {
  return doPost<TwoFactorAuthRecoveryCodes>(
    '/auth/v1/2fa/recoveryCodes',
    null,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Create an entity (Project, Folder, File, Table, View)
 * https://rest-docs.synapse.org/rest/POST/entity.html
 */
export const createEntity = <T extends Entity>(
  entity: T,
  accessToken: string | undefined,
) => {
  return doPost<T>(
    ENTITY,
    entity,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}
/**
 * Create a project with the given name.
 * https://rest-docs.synapse.org/rest/POST/entity.html
 */
export const createProject = (
  name: string,
  accessToken: string | undefined,
): Promise<Entity> => {
  return createEntity(
    {
      name,
      concreteType: 'org.sagebionetworks.repo.model.Project',
    },
    accessToken,
  )
}

/**
 * Return this user's UserProfile
 * https://rest-docs.synapse.org/rest/GET/userProfile.html
 */
export const getUserProfile = (accessToken: string | undefined) => {
  return doGet<UserProfile>(
    USER_PROFILE,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Return any user's UserProfile
 * https://rest-docs.synapse.org/rest/GET/userProfile.html
 */
export const getUserProfileById = (
  ownerId: string,
  accessToken?: string | undefined,
) => {
  return doGet<UserProfile>(
    USER_PROFILE_ID(ownerId),
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Return this user's profile bundle
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/UserBundle.html
 */
export const getUserBundle = (
  id: string,
  mask: number,
  accessToken: string | undefined,
): Promise<UserBundle> => {
  return doGet<UserBundle>(
    `${USER_ID_BUNDLE(id)}?mask=${mask}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Return the current user's bundle
 * http://rest-docs.synapse.org/rest/GET/user/bundle.html
 */
export const getMyUserBundle = (
  mask: number,
  accessToken: string | undefined,
): Promise<UserBundle> => {
  return doGet<UserBundle>(
    `${USER_BUNDLE}?mask=${mask}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Update your own profile
 * @param profile
 * @param accessToken
 * @returns
 */
export const updateMyUserProfile = (
  profile: UserProfile,
  accessToken: string | undefined = undefined,
): Promise<UserProfile> => {
  const url = '/repo/v1/userProfile'
  return doPut<UserProfile>(
    url,
    profile,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get Users and Groups that match the given prefix.
 * http://rest-docs.synapse.org/rest/GET/userGroupHeaders.html
 */
export const getUserGroupHeaders = (
  prefix: string = '',
  typeFilter: TYPE_FILTER = TYPE_FILTER.ALL,
  offset: number = 0,
  limit: number = 20,
): Promise<UserGroupHeaderResponsePage> => {
  return doGet<UserGroupHeaderResponsePage>(
    USER_GROUP_HEADERS +
      `?prefix=${prefix}&typeFilter=${typeFilter}&offset=${offset}&limit=${limit}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get Users and Groups that match the given list of aliases.
 * https://repo-prod.prod.sagebase.org/repo/v1/userGroupHeaders/aliases
 */
export const postUserGroupHeadersWithAlias = (aliases: string[]) => {
  return doPost<UserGroupHeaderResponse>(
    `${USER_GROUP_HEADERS}/aliases`,
    { list: aliases },
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Return batch of user group headers
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/UserGroupHeaderResponsePage.html
 */
export const getGroupHeadersBatch = (
  ids: string[],
): Promise<UserGroupHeaderResponsePage> => {
  return doGet<UserGroupHeaderResponsePage>(
    USER_GROUP_HEADERS_BATCH + `?ids=${ids.join(',')}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Return a batch of Evaluation queues
 * https://rest-docs.synapse.org/rest/GET/evaluation.html
 */
export const getEvaluations = async (
  params: GetEvaluationParameters = {},
  accessToken?: string,
): Promise<PaginatedResults<Evaluation>> => {
  const urlParams = new URLSearchParams()
  if (params.accessType != null) urlParams.set('accessType', params.accessType)
  if (params.activeOnly != null)
    urlParams.set('activeOnly', params.activeOnly.toString())
  if (params.evaluationIds != null)
    urlParams.set('evaluationIds', params.evaluationIds.join(','))

  const fn = (limit: number, offset: number) => {
    urlParams.set('limit', limit.toString())
    urlParams.set('offset', offset.toString())

    const url = `${EVALUATION}?${urlParams.toString()}`
    return doGet<PaginatedResults<Evaluation>>(
      url,
      accessToken,
      BackendDestinationEnum.REPO_ENDPOINT,
    )
  }

  // If evaluation IDs were explicitly specified, fetch all pages
  if (params.evaluationIds) {
    const results = await getAllOfPaginatedService(fn)
    return {
      totalNumberOfResults: results.length,
      results,
    }
  }

  // Otherwise, return the requested page of data
  return fn(params.limit ?? 20, params.offset ?? 0)
}

export type UserProfileList = { list: UserProfile[] }
/**
 * Return the User Profiles for the given list of user IDs
 * https://rest-docs.synapse.org/rest/POST/userProfile.html
 */
export const getUserProfiles = (
  list: string[],
  accessToken: string | undefined = undefined,
): Promise<UserProfileList> => {
  return doPost(
    USER_PROFILE,
    { list },
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Return the children (Files/Folders) of the given entity (Project or Folder).
 * https://rest-docs.synapse.org/rest/POST/entity/children.html
 */
export const getEntityChildren = (
  request: EntityChildrenRequest,
  accessToken: string | undefined = undefined,
  signal?: AbortSignal,
) => {
  return doPost<EntityChildrenResponse>(
    '/repo/v1/entity/children',
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
    { signal },
  )
}
/**
 * Retrieve an entityId for a given parent ID and entity name.
 * https://rest-docs.synapse.org/rest/POST/entity/child.html
 */
export const lookupChildEntity = (
  request: EntityLookupRequest,
  accessToken: string | undefined = undefined,
) => {
  return doPost<EntityId>(
    '/repo/v1/entity/child',
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get a batch of pre-signed URLs and/or FileHandles for the given list of FileHandleAssociations.
 * https://rest-docs.synapse.org/rest/POST/fileHandle/batch.html
 */
export const getFiles = (
  request: BatchFileRequest,
  accessToken: string | undefined = undefined,
): Promise<BatchFileResult> => {
  return doPost(
    FILE_HANDLE_BATCH,
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get a batch of pre-signed URLs and/or FileHandles for the given list of FileHandleAssociations.
 * https://rest-docs.synapse.org/rest/POST/fileHandle/batch.html
 */
export const getBulkFiles = async (
  bulkFileDownloadRequest: BulkFileDownloadRequest,
  accessToken: string | undefined = undefined,
): Promise<BulkFileDownloadResponse> => {
  const asyncJobId = await doPost<AsyncJobId>(
    '/file/v1/file/bulk/async/start',
    bulkFileDownloadRequest,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
  return getAsyncResultBodyFromJobId(
    asyncJobId.token,
    `/file/v1/file/bulk/async/get/${asyncJobId.token}`,
    accessToken,
  )
}
/**
 * Bundled access to Entity and related data components.
 * An EntityBundle can be used to create, fetch, or update an Entity and associated
 * objects with a single web service request.
 * See SynapseClient.test.js for an example partsMask.
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/Entity.html
 */

export const getEntity = <T extends Entity>(
  accessToken: string | undefined = undefined,
  entityId: string,
  versionNumber?: string | number,
) => {
  if (entityId.indexOf('.') > -1) {
    // PORTALS-1943: we were given an entity Id with a version!
    const entityTokens = entityId.split('.')
    entityId = entityTokens[0]
    versionNumber = entityTokens[1]
  }
  const url = versionNumber
    ? `/repo/v1/entity/${entityId}/version/${versionNumber}`
    : `/repo/v1/entity/${entityId}`
  return doGet<T>(url, accessToken, BackendDestinationEnum.REPO_ENDPOINT)
}

export const getEntityHeadersByIds = (
  entityIds: string[],
  accessToken?: string,
) => {
  return getEntityHeaders(
    entityIds.map(id => ({ targetId: id })),
    accessToken,
  )
}

/**
 * Get the EntityHeader for a list of references with a POST.
 * If any item in the batch fails (e.g., with a 404) it will be EXCLUDED in the result set.
 * https://rest-docs.synapse.org/rest/POST/entity/header.html
 */
export const getEntityHeaders = (
  references: ReferenceList,
  accessToken?: string,
) => {
  // if references contains entity IDs with dot notation, fix the reference object
  const fixedReferences = references.map(reference => {
    if (reference.targetId.indexOf('.') > -1) {
      const entityTokens = reference.targetId.split('.')
      return {
        targetId: entityTokens[0],
        version: entityTokens[1],
      }
    } else return reference
  })

  return doPost<PaginatedResults<EntityHeader>>(
    ENTITY_HEADERS,
    { references: fixedReferences },
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Lookup an Entity ID using an alias.
 * https://rest-docs.synapse.org/rest/GET/entity/alias/alias.html
 */
export const getEntityAlias = (alias: string, accessToken?: string) => {
  return allowNotFoundError(() =>
    doGet<EntityId>(
      ENTITY_ALIAS(alias),
      accessToken,
      BackendDestinationEnum.REPO_ENDPOINT,
    ),
  )
}

/**
 * Get the EntityHeader for a single entity.
 *
 * Note that this will not throw an error if not found or unauthorized.
 * See https://sagebionetworks.jira.com/browse/PLFM-7989
 */
export const getEntityHeader = async (
  entityId: string,
  versionNumber?: number,
  accessToken?: string,
): Promise<EntityHeader | undefined> => {
  const batchResult = await getEntityHeaders(
    [{ targetId: entityId, targetVersionNumber: versionNumber }],
    accessToken,
  )
  return batchResult.results[0]
}

/**
 * Update an Entity's ACL
 * Note: The caller must be granted ACCESS_TYPE.CHANGE_PERMISSIONS on the Entity to call this method.
 * https://rest-docs.synapse.org/rest/PUT/entity/id/acl.html
 */
export const updateEntityACL = (
  acl: AccessControlList,
  accessToken: string | undefined = undefined,
): Promise<AccessControlList> => {
  return doPut<AccessControlList>(
    ENTITY_ACL(acl.id),
    acl,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const updateEntity = <T extends Entity>(
  entity: T,
  accessToken: string | undefined = undefined,
  newVersion?: boolean,
): Promise<T> => {
  let url = `/repo/v1/entity/${entity.id}`
  if (newVersion) url += '?newVersion=true'
  return doPut<T>(
    url,
    entity,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const deleteEntity = (
  accessToken: string | undefined = undefined,
  entityId: string | number,
) => {
  return doDelete(
    ENTITY_ID(entityId),
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const getEntityBundleV2 = <T extends EntityBundleRequest>(
  entityId: string | number,
  requestObject: T,
  version?: number,
  accessToken?: string,
): Promise<EntityBundle<T>> => {
  return doPost<EntityBundle<T>>(
    ENTITY_BUNDLE_V2(entityId, version),
    requestObject,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get a corresponding string value of ObjectType:
 **/
function getObjectTypeToString(key: ObjectType) {
  return ObjectType[key]
}

/**
 * Get Wiki page contents, call is of the form:
 * https://rest-docs.synapse.org/rest/GET/entity/ownerId/wiki.html
 */
export const getEntityWiki = (
  accessToken: string | undefined,
  ownerId: string | undefined,
  wikiId: string | undefined = '',
  objectType: ObjectType = ObjectType.ENTITY,
) => {
  const objectTypeString = getObjectTypeToString(objectType)

  const url = `/repo/v1/${objectTypeString?.toLocaleLowerCase()}/${ownerId}/wiki/${wikiId}`
  return doGet<WikiPage>(url, accessToken, BackendDestinationEnum.REPO_ENDPOINT)
}

/**
 * Returns synapse user favorites list given their access token
 * https://rest-docs.synapse.org/rest/GET/favorite.html
 */
export function getUserFavorites(
  accessToken: string | undefined,
  offset: number = 0,
  limit: number = 200,
  sort: FavoriteSortBy = 'NAME',
  sortDirection: FavoriteSortDirection = 'ASC',
) {
  const params = new URLSearchParams()
  params.set('offset', offset.toString())
  params.set('limit', limit.toString())
  params.set('sort', sort)
  params.set('sortDirection', sortDirection)

  const url = `${FAVORITES}?${params.toString()}`
  return doGet<PaginatedResults<EntityHeader>>(
    url,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Add an Entity as a Favorite of the caller.
 * http://rest-docs.synapse.org/rest/POST/favorite/id.html
 */
export function addUserFavorite(
  entityId: string,
  accessToken: string | undefined,
): Promise<EntityHeader> {
  return doPost(
    `${FAVORITES}/${entityId}`,
    null,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Remove a favorite
 * http://rest-docs.synapse.org/rest/DELETE/favorite/id.html
 */
export const removeUserFavorite = (
  entityId: string,
  accessToken: string | undefined,
): Promise<void> => {
  return doDelete(
    `${FAVORITES}/${entityId}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get a list of challenges for which the given user is registered.
 * see http://rest-docs.synapse.org/rest/GET/challenge.html
 */
export const getUserChallenges = (
  accessToken: string | undefined,
  userId: string | number,
  offset: string | number = 0,
  limit: string | number = 200,
): Promise<ChallengePagedResults> => {
  const url = `/repo/v1/challenge?participantId=${userId}&offset=${offset}&limit=${limit}`
  return doGet(url, accessToken, BackendDestinationEnum.REPO_ENDPOINT)
}

/**
 * Get a user's certification quiz passing record
 * see https://rest-docs.synapse.org/rest/GET/user/id/certifiedUserPassingRecord.html
 */
export const getPassingRecord = (
  userId: string | number,
  accessToken: string | undefined,
): Promise<PassingRecord> => {
  const url = `/repo/v1//user/${userId}/certifiedUserPassingRecord`
  return doGet(url, accessToken, BackendDestinationEnum.REPO_ENDPOINT)
}

/**
 * Get a list of teams registered to the given challenge.
 * see http://rest-docs.synapse.org/rest/GET/challenge.html
 */
export const getChallengeTeams = (
  accessToken: string | undefined,
  challengeId: string | number,
  offset: string | number = 0,
  limit: string | number = 200,
): Promise<ChallengeTeamPagedResults> => {
  const url = `/repo/v1/challenge/${challengeId}/challengeTeam?&offset=${offset}&limit=${limit}`
  return doGet(url, accessToken, BackendDestinationEnum.REPO_ENDPOINT)
}

/**
 * Get a list of all teams registered to the given challenge.
 * see http://rest-docs.synapse.org/rest/GET/challenge.html
 */
export const getAllChallengeTeams = (
  accessToken: string | undefined,
  challengeId: string | number,
): Promise<ChallengeTeam[]> => {
  // format function to be callable by getAllOfPaginatedService
  const fn = (limit: number, offset: number) => {
    const url = `/repo/v1/challenge/${challengeId}/challengeTeam?&offset=${offset}&limit=${limit}`
    return doGet<PaginatedResults<ChallengeTeam>>(
      url,
      accessToken,
      BackendDestinationEnum.REPO_ENDPOINT,
    )
  }
  return getAllOfPaginatedService(fn)
}

/**
 * List the Teams under which the given submitter may submit to the Challenge,
 * i.e. the Teams on which the user is a member and which are registered for the Challenge.
 * see https://rest-docs.synapse.org/rest/GET/challenge/challengeId/submissionTeams.html
 */
export const getSubmissionTeams = (
  accessToken: string | undefined,
  challengeId: string | number,
  offset: string | number = 0,
  limit: string | number = 50,
): Promise<PaginatedIds> => {
  const url = `/repo/v1/challenge/${challengeId}/submissionTeams?&offset=${offset}&limit=${limit}`
  return doGet(url, accessToken, BackendDestinationEnum.REPO_ENDPOINT)
}

/**
 * Find out whether a Team and its members are eligible to submit to a given Evaluation queue (at the current time).
 * see https://rest-docs.synapse.org/rest/GET/evaluation/evalId/team/id/submissionEligibility.html
 */
export const getSubmissionEligibility = (
  evaluationId: string,
  teamId: string,
  accessToken?: string,
): Promise<TeamSubmissionEligibility> => {
  const url = `/repo/v1/evaluation/${evaluationId}/team/${teamId}/submissionEligibility`
  return doGet(url, accessToken, BackendDestinationEnum.REPO_ENDPOINT)
}

/**
 * Register a Team with a Challenge.
 * see https://rest-docs.synapse.org/rest/POST/challenge/challengeId/challengeTeam.html
 */
export const registerChallengeTeam = (
  challengeTeam: CreateChallengeTeamRequest,
  accessToken: string | undefined,
): Promise<ChallengeTeam> => {
  const url = `/repo/v1/challenge/${String(
    challengeTeam.challengeId,
  )}/challengeTeam`
  return doPost(
    url,
    challengeTeam,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get the Challenge associated to a particular Project entity
 * https://rest-docs.synapse.org/rest/GET/entity/id/challenge.html
 */
export const getEntityChallenge = (
  entityId: string | number,
  accessToken: string | undefined,
): Promise<Challenge> => {
  const url = `/repo/v1/entity/${entityId}/challenge`
  return doGet(url, accessToken, BackendDestinationEnum.REPO_ENDPOINT)
}

/**
 * Create a new Team
 * https://rest-docs.synapse.org/rest/POST/team.html
 */
export function createTeam(
  team: CreateTeamRequest,
  accessToken: string | undefined,
): Promise<Team> {
  return doPost(
    `/repo/v1/team`,
    team,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get the user's list of teams they are on
 *
 * @param {*} id ownerID of the synapse user see - https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/UserProfile.html
 */
export const getUserTeamList = (
  accessToken: string | undefined,
  userId: string | number,
  offset: string | number = 0,
  limit: string | number = 200,
): Promise<PaginatedResults<Team>> => {
  const url = `/repo/v1/user/${userId}/team?offset=${offset}&limit=${limit}`
  return doGet(url, accessToken, BackendDestinationEnum.REPO_ENDPOINT)
}

/**
 * Get the access requirements associated with a team
 *
 * @param {(string | undefined)} accessToken token of user
 * @param {*} teamId teamId of the synapse team - https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/Team.html
 * @param {*} offset   (optional) the starting index of the returned results (default 0)
 * @param {*} limit    (optional) the maximum number of access requirements to return (default 50)
 * @returns {Promise<Array<AccessRequirement>>}
 */
export const getTeamAccessRequirements = (
  accessToken: string | undefined,
  teamId: string,
): Promise<AccessRequirement[]> => {
  const fn = (limit: number, offset: number) => {
    const url = `/repo/v1/team/${teamId}/accessRequirement?offset=${offset}&limit=${limit}`
    return doGet<PaginatedResults<AccessRequirement>>(
      url,
      accessToken,
      BackendDestinationEnum.REPO_ENDPOINT,
    )
  }
  return getAllOfPaginatedService(fn)
}

/**
 * Get a list of members for a team
 *
 * @param {*} id ownerID of the synapse user see -https://rest-docs.synapse.org/rest/GET/teamMembers/id.html
 * @param {*} fragment (optional) a prefix of the user's first or last name or email address (optional)
 * @param {*} limit    (optional) the maximum number of members to return (default 10, max limit 50)
 * @param {*} offset   (optional) the starting index of the returned results (default 0)
 *
 */
export const getTeamMembers = (
  accessToken: string | undefined,
  teamId: string | number,
  fragment: string = '',
  limit: number = 10,
  offset: number = 0,
): Promise<PaginatedResults<TeamMember>> => {
  const url = `${TEAM_MEMBERS(teamId)}?limit=${limit}&offset=${offset}${
    fragment ? `&fragment=${fragment}` : ''
  }`
  return doGet(url, accessToken, BackendDestinationEnum.REPO_ENDPOINT)
}

/**
 * Add a member to the Team
 * https://rest-docs.synapse.org/rest/PUT/teamMember.html
 */
export const addTeamMemberWithToken = (
  joinTeamSignedToken: JoinTeamSignedToken,
): Promise<ResponseMessage> => {
  return doPut<ResponseMessage>(
    TEAM_MEMBER,
    joinTeamSignedToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Add member to the Team
 * https://rest-docs.synapse.org/rest/PUT/team/id/member/principalId.html
 */
export const addTeamMemberAsAuthenticatedUserOrAdmin = (
  teamId: string,
  memberId: string,
  accessToken: string,
) => {
  return doPut<void>(
    TEAM_ID_MEMBER_ID_WITH_NOTIFICATION(teamId, memberId),
    undefined,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Retrieve the open membership invitations for a user
 * https://rest-docs.synapse.org/rest/GET/user/id/openInvitation.html
 */
export function getOpenMembershipInvitationsForUser(
  userId: string,
  accessToken: string,
): Promise<PaginatedResults<MembershipInvitation>> {
  return doGet(
    `${REPO}/user/${userId}/openInvitation`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Retrieve all open membership invitations for a user.
 */
export function getAllOpenMembershipInvitationsForUser(
  userId: string,
  accessToken: string,
) {
  return getAllOfPaginatedService(() =>
    getOpenMembershipInvitationsForUser(userId, accessToken),
  )
}

/**
 * Create a membership invitation and send an email notification to the invitee.
 * https://rest-docs.synapse.org/rest/POST/membershipInvitation.html
 */
export function createMembershipInvitation(
  membershipInvitation: CreateMembershipInvitationRequest,
  accessToken: string | undefined,
): Promise<MembershipInvitation> {
  return doPost(
    `${REPO}/membershipInvitation`,
    membershipInvitation,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://rest-docs.synapse.org/rest/POST/membershipInvitation/id.html
export const getMembershipInvitation = (
  membershipInvitationSignedToken: MembershipInvtnSignedToken,
): Promise<MembershipInvitation> => {
  return doPost(
    MEMBERSHIP_INVITATION(
      membershipInvitationSignedToken.membershipInvitationId,
    ),
    membershipInvitationSignedToken,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://rest-docs.synapse.org/rest/GET/membershipInvitation/id/inviteeVerificationSignedToken.html
export const getInviteeVerificationSignedToken = (
  membershipInvitationId: string,
  accessToken: string,
): Promise<InviteeVerificationSignedToken> => {
  return doGet(
    INVITEE_VERIFICATION_SIGNED_TOKEN(membershipInvitationId),
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://rest-docs.synapse.org/rest/PUT/membershipInvitation/id/inviteeId.html
export const bindInvitationToAuthenticatedUser = (
  inviteeVerificationSignedToken: InviteeVerificationSignedToken,
  membershipInvitationId: string,
  accessToken: string,
) => {
  return doPut(
    BIND_INVITATION_TO_AUTHENTICATED_USER(membershipInvitationId),
    inviteeVerificationSignedToken,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Checks if a user is a member of a specific team.
 *
 * @returns a TeamMember if the user is a member of the team, or null if the user is not.
 */
export const getIsUserMemberOfTeam = (
  teamId: string,
  userId: string,
  accessToken?: string,
): Promise<TeamMember | null> => {
  const url = TEAM_ID_MEMBER_ID(teamId, userId)
  return allowNotFoundError(() =>
    doGet<TeamMember>(url, accessToken, BackendDestinationEnum.REPO_ENDPOINT),
  )
}

/**
 * Retrieve the Team Membership Status bundle for a team and user.
 * https://rest-docs.synapse.org/rest/GET/team/id/member/principalId/membershipStatus.html
 */
export const getMembershipStatus = (
  teamId: string | number,
  userId: string | number,
  accessToken?: string,
): Promise<TeamMembershipStatus> => {
  const url = `${TEAM_ID_MEMBER_ID(teamId, userId)}/membershipStatus`
  return doGet(url, accessToken, BackendDestinationEnum.REPO_ENDPOINT)
}

/**
 * Create a membership request and send an email notification to the administrators of the team. The Team must be specified. Optionally, the creator may include a message and/or expiration date for the request. If no expiration date is specified then the request never expires.
 *
 * https://rest-docs.synapse.org/rest/POST/membershipRequest.html
 */
export const createMembershipRequest = (
  membershipRequest: CreateMembershipRequestRequest,
  accessToken?: string,
): Promise<MembershipRequest> => {
  const url = `/repo/v1/membershipRequest`
  return doPost<MembershipRequest>(
    url,
    membershipRequest,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Remove the given member from the specified Team. Note: The client must either be a Team administrator or the member being removed.
 * https://rest-docs.synapse.org/rest/DELETE/team/id/member/principalId.html
 */
export const deleteMemberFromTeam = (
  teamId: string,
  userId: string,
  accessToken: string | undefined,
) => {
  return doDelete(
    `/repo/v1/team/${teamId}/member/${userId}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get Team that matches the given ID.
 * https://rest-docs.synapse.org/rest/GET/team/id.html
 */
export const getTeam = (
  id: string | number,
  accessToken?: string | undefined,
) => {
  return doGet<Team>(
    TEAM(id),
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get Teams that match the given list of IDs.
 * https://rest-docs.synapse.org/rest/POST/teamList.html
 */
export const getTeamList = (
  ids: string[] | number[],
  accessToken?: string | undefined,
) => {
  return doPost<ListWrapper<Team>>(
    `/repo/v1/teamList`,
    { list: ids },
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * https://rest-docs.synapse.org/rest/GET/entity/ownerId/wikikey.html
 * Get the root WikiPageKey for an Entity.
 * Note: The caller must be granted the ACCESS_TYPE.READ permission on the owner.
 * @return WikiPageKey
 **/
export const getWikiPageKeyForEntity = (
  accessToken: string | undefined,
  ownerId: string | number,
): Promise<WikiPageKey> => {
  const url = `/repo/v1/entity/${ownerId}/wikikey`
  return doGet<WikiPageKey>(
    url,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * https://rest-docs.synapse.org/rest/GET/access_requirement/ownerId/wikikey.html
 * Get the root WikiPageKey for an Access Requirement.
 * Note: The caller must be granted the ACCESS_TYPE.READ permission on the owner.
 * @return WikiPageKey
 **/
export const getWikiPageKeyForAccessRequirement = (
  accessToken: string | undefined,
  ownerId: string | number,
): Promise<WikiPageKey> => {
  const url = ACCESS_REQUIREMENT_WIKI_PAGE_KEY(ownerId)
  return doGet<WikiPageKey>(
    url,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const getWikiAttachmentsFromEntity = (
  accessToken: string | undefined,
  id: string | number,
  wikiId: string | number,
  objectType: ObjectType = ObjectType.ENTITY,
): Promise<FileHandleResults> => {
  const objectTypeString = getObjectTypeToString(objectType)
  const url = `/repo/v1/${objectTypeString.toLocaleLowerCase()}/${id}/wiki2/${wikiId}/attachmenthandles`
  return doGet(url, accessToken, BackendDestinationEnum.REPO_ENDPOINT)
}
export const getWikiAttachmentsFromEvaluation = (
  accessToken: string | undefined,
  id: string | number,
  wikiId: string | number,
) => {
  const url = `/repo/v1/evaluation/${id}/wiki/${wikiId}/attachmenthandles`
  return doGet(url, accessToken, BackendDestinationEnum.REPO_ENDPOINT)
}

export const getPresignedUrlForWikiAttachment = (
  accessToken: string | undefined,
  id: string | number,
  wikiId: string | number,
  fileName: string,
  objectType: ObjectType = ObjectType.ENTITY,
): Promise<string> => {
  const objectTypeString = getObjectTypeToString(objectType)
  const url = `/repo/v1/${objectTypeString.toLocaleLowerCase()}/${id}/wiki2/${wikiId}/attachment?fileName=${fileName}&redirect=false`
  return doGet(url, accessToken, BackendDestinationEnum.REPO_ENDPOINT)
}

export const isInSynapseExperimentalMode = (): boolean => {
  // bang bang, you're a boolean!
  return !!cookies.get(SynapseConstants.EXPERIMENTAL_MODE_COOKIE)
}

/**
 * Set the access token cookie.  Note that this will only succeed if your app is running on
 * a .synapse.org subdomain.
 *
 * @param {*} token Access token.  If undefined, then call should instruct the browser to delete the cookie.
 */
export const setAccessTokenCookie = async (
  token: string | undefined,
): Promise<void> => {
  if (isOutsideSynapseOrg()) {
    if (!token) {
      cookies.remove(ACCESS_TOKEN_COOKIE_KEY, { path: '/' })
      // See - https://github.com/reactivestack/cookies/issues/189
      await delay(100)
    } else {
      // sets cookie
      cookies.set(ACCESS_TOKEN_COOKIE_KEY, token, {
        // expires in 10 days (see SWC-6190)
        maxAge: 60 * 60 * 24 * 10,
        path: '/',
      })
    }
  } else {
    // will set cookie in the http header
    return doPost(
      'Portal/sessioncookie',
      { sessionToken: token },
      undefined,
      BackendDestinationEnum.PORTAL_ENDPOINT,
      { credentials: 'include' },
    )
  }
}
/**
 * Get the current access token from a cookie.  Note that this will only succeed if your app is running on
 * a .synapse.org subdomain.
 *
 * @throws SynapseClientError if the token is expired or not found by the servlet
 */
export const getAccessTokenFromCookie = async (): Promise<
  string | undefined
> => {
  if (isOutsideSynapseOrg()) {
    return Promise.resolve(cookies.get(ACCESS_TOKEN_COOKIE_KEY) as string)
  }
  return doGet<string>(
    'Portal/sessioncookie?validate=true',
    undefined,
    BackendDestinationEnum.PORTAL_ENDPOINT,
    { credentials: 'include' },
  )
}

export const getUseUtcTimeFromCookie = () => {
  return cookies.get(DATETIME_UTC_COOKIE_KEY) === 'true'
}

export const getPrincipalAliasRequest = (
  accessToken: string | undefined,
  request: PrincipalAliasRequest,
): Promise<PrincipalAliasResponse> => {
  const url = '/repo/v1/principal/alias'
  return doPost(url, request, accessToken, BackendDestinationEnum.REPO_ENDPOINT)
}

export const signOut = async () => {
  await setAccessTokenCookie(undefined)
}

/**
 * Upload file.  Note that this currently only supports Synapse storage (Sage s3 bucket)
 * @param accessToken
 * @param file
 * @param endpoint
 */
export const uploadFile = (
  accessToken: string | undefined,
  filename: string,
  file: Blob,
) => {
  return new Promise<FileUploadComplete>(
    (fileUploadResolve, fileUploadReject) => {
      const partSize: number = Math.max(5242880, file.size / 10000)
      const request: MultipartUploadRequest = {
        contentType: file.type,
        fileName: filename,
        fileSizeBytes: file.size,
        partSizeBytes: partSize,
        storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
      }
      calculateMd5(file).then((md5: string) => {
        request.contentMD5Hex = md5
        startMultipartUpload(
          accessToken,
          filename,
          file,
          request,
          fileUploadResolve,
          fileUploadReject,
        )
      })
    },
  )
}

const calculateMd5 = (fileBlob: File | Blob): Promise<string> => {
  // code taken from md5 example from library
  return new Promise((resolve, reject) => {
    const blobSlice = File.prototype.slice,
      file = fileBlob,
      chunkSize = 2097152, // Read in chunks of 2MB
      chunks = Math.ceil(file.size / chunkSize),
      spark = new SparkMD5.ArrayBuffer(),
      fileReader = new FileReader()
    let currentChunk = 0

    fileReader.onload = function (e) {
      console.log('read chunk nr', currentChunk + 1, 'of', chunks)
      spark.append(fileReader.result as ArrayBuffer) // Append array buffer
      currentChunk++

      if (currentChunk < chunks) {
        loadNext()
      } else {
        console.log('finished loading')
        const md5: string = spark.end()
        console.info('computed hash', md5) // Compute hash
        resolve(md5)
      }
    }

    fileReader.onerror = function () {
      console.warn('oops, something went wrong.')
      reject(fileReader.error)
    }

    const loadNext = () => {
      const start = currentChunk * chunkSize,
        end = start + chunkSize >= file.size ? file.size : start + chunkSize

      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end))
    }
    loadNext()
  })
}

const processFilePart = (
  partNumber: number,
  multipartUploadStatus: MultipartUploadStatus,
  accessToken: string | undefined,
  fileName: string,
  file: Blob,
  request: MultipartUploadRequest,
  fileUploadResolve: (fileUpload: FileUploadComplete) => void,
  fileUploadReject: (reason: any) => void,
) => {
  if (multipartUploadStatus.clientSidePartsState![partNumber - 1]) {
    // no-op. this part has already been processed!
    return
  }

  const uploadId = multipartUploadStatus.uploadId
  const presignedUploadUrlRequest: BatchPresignedUploadUrlRequest = {
    uploadId,
    contentType: 'application/octet-stream', // each part is binary
    partNumbers: [partNumber],
  }
  const presignedUrlUrl = `/file/v1/file/multipart/${uploadId}/presigned/url/batch`
  doPost<BatchPresignedUploadUrlResponse>(
    presignedUrlUrl,
    presignedUploadUrlRequest,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  ).then(async (presignedUrlResponse: BatchPresignedUploadUrlResponse) => {
    const presignedUrl =
      presignedUrlResponse.partPresignedUrls[0].uploadPresignedUrl
    // calculate the byte range
    const startByte = (partNumber - 1) * request.partSizeBytes
    let endByte = partNumber * request.partSizeBytes - 1
    if (endByte >= request.fileSizeBytes) {
      endByte = request.fileSizeBytes - 1
    }
    const fileSlice = file.slice(
      startByte,
      endByte + 1,
      presignedUploadUrlRequest.contentType,
    )
    await uploadFilePart(
      presignedUrl,
      fileSlice,
      presignedUploadUrlRequest.contentType,
    )
    // uploaded the part.  calculate md5 of the part and add the part to the upload
    calculateMd5(fileSlice).then((md5: string) => {
      const addPartUrl = `/file/v1/file/multipart/${uploadId}/add/${partNumber}?partMD5Hex=${md5}`
      doPut<AddPartResponse>(
        addPartUrl,
        undefined,
        accessToken,
        BackendDestinationEnum.REPO_ENDPOINT,
      ).then((addPartResponse: AddPartResponse) => {
        if (addPartResponse.addPartState === 'ADD_SUCCESS') {
          // done with this part!
          multipartUploadStatus.clientSidePartsState![partNumber - 1] = true
          checkUploadComplete(
            multipartUploadStatus,
            fileName,
            accessToken,
            fileUploadResolve,
            fileUploadReject,
          )
        } else {
          // retry after a brief delay
          delay(1000).then(() => {
            processFilePart(
              partNumber,
              multipartUploadStatus,
              accessToken,
              fileName,
              file,
              request,
              fileUploadResolve,
              fileUploadReject,
            )
          })
        }
      })
    })
  })
}
export const checkUploadComplete = (
  status: MultipartUploadStatus,
  fileHandleName: string,
  accessToken: string | undefined,
  fileUploadResolve: (fileUpload: FileUploadComplete) => void,
  fileUploadReject: (reason: any) => void,
) => {
  // if all client-side parts are true (uploaded), then complete the upload and get the file handle!
  if (
    status.clientSidePartsState!.every(v => {
      return v
    })
  ) {
    const url = `/file/v1/file/multipart/${status.uploadId}/complete`
    doPut<MultipartUploadStatus>(
      url,
      undefined,
      accessToken,
      BackendDestinationEnum.REPO_ENDPOINT,
    )
      .then((newStatus: MultipartUploadStatus) => {
        // success!
        fileUploadResolve({
          fileHandleId: newStatus.resultFileHandleId,
          fileName: fileHandleName,
        })
      })
      .catch(error => {
        fileUploadReject(error)
      })
  }
}
const uploadFilePart = async (
  presignedUrl: string,
  file: Blob,
  contentType: string,
) => {
  // TODO: could try using axios to get upload progress, then update the client-side part state (change to numbers from 0-1)
  // This would give progress for the single file (across all parts).
  // The parent would still need to figure out progress (for the total file set).
  await fetch(presignedUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': contentType,
    },
    body: file,
  })
}
export const startMultipartUpload = (
  accessToken: string | undefined,
  fileName: string,
  file: Blob,
  request: MultipartUploadRequest,
  fileUploadResolve: (fileUpload: FileUploadComplete) => void,
  fileUploadReject: (reason: any) => void,
) => {
  const url = '/file/v1/file/multipart'
  doPost<MultipartUploadStatus>(
    url,
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
    .then((status: MultipartUploadStatus) => {
      // started the upload
      // keep track of the part state client-side
      const clientSidePartsState: boolean[] = status.partsState
        .split('')
        .map(bit => bit === '1')
      status.clientSidePartsState = clientSidePartsState
      for (let i = 0; i < clientSidePartsState.length; i = i + 1) {
        if (!clientSidePartsState[i]) {
          // upload this part.  note that partNumber is always the index+1
          processFilePart(
            i + 1,
            status,
            accessToken,
            fileName,
            file,
            request,
            fileUploadResolve,
            fileUploadReject,
          )
        }
      }
      // in case there is no upload work to do!
      checkUploadComplete(
        status,
        fileName,
        accessToken,
        fileUploadResolve,
        fileUploadReject,
      )
    })
    .catch(error => {
      fileUploadReject(error)
    })
}

export const getFileHandleContentFromID = (
  fileHandleId: string,
  accessToken: string,
): Promise<string> => {
  // get the presigned URL, download the data, and send that back (via resolve())
  return new Promise((resolve, reject) => {
    // get the file handle and url
    const getFileHandleByIdPromise = getFileHandleById(
      fileHandleId,
      accessToken,
    )
    const getFileHandlePresignedUrlPromis = getFileHandleByIdURL(
      fileHandleId,
      accessToken,
    )
    Promise.all([getFileHandleByIdPromise, getFileHandlePresignedUrlPromis])
      .then(values => {
        const fileHandle: FileHandle = values[0]
        const presignedUrl: string = values[1]
        return getFileHandleContent(fileHandle, presignedUrl).then(
          (content: string) => {
            resolve(content)
          },
        )
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const getFileHandleContent = (
  fileHandle: FileHandle,
  presignedUrl: string,
  maxFileSizeBytes: number = MAX_JS_FILE_DOWNLOAD_SIZE,
): Promise<string> => {
  // get the presigned URL, download the data, and send that back (via resolve())
  return new Promise((resolve, reject) => {
    // sanity check!  must be less than 5MB (unless overridden)
    if (fileHandle.contentSize < maxFileSizeBytes) {
      fetch(presignedUrl, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': fileHandle.contentType,
        },
      }).then(response => {
        // the response is always decoded using UTF-8
        response.text().then(text => {
          resolve(text)
        })
      })
    } else {
      reject(
        `File size (${calculateFriendlyFileSize(
          fileHandle.contentSize,
        )}) exceeds the maximum size that can be downloaded (${calculateFriendlyFileSize(
          maxFileSizeBytes,
        )})`,
      )
    }
  })
}

/**
 * Return the FileHandle of the file associated to the given FileEntity.
 * * @param fileEntity: FileEntity
 * @param accessToken
 * @param endpoint
 */
export const getFileResult = (
  fileEntity: FileEntity,
  accessToken?: string,
  includeFileHandles?: boolean,
  includePreSignedURLs?: boolean,
  includePreviewPreSignedURLs?: boolean,
): Promise<FileResult> => {
  return new Promise((resolve, reject) => {
    const fileHandleAssociationList: FileHandleAssociation[] = [
      {
        associateObjectId: fileEntity.id!,
        associateObjectType: FileHandleAssociateType.FileEntity,
        fileHandleId: fileEntity.dataFileHandleId,
      },
    ]
    const request: BatchFileRequest = {
      includeFileHandles: includeFileHandles || false,
      includePreSignedURLs: includePreSignedURLs || false,
      includePreviewPreSignedURLs: includePreviewPreSignedURLs || false,
      requestedFiles: fileHandleAssociationList,
    }
    getFiles(request, accessToken)
      .then((data: BatchFileResult) => {
        if (
          data.requestedFiles.length &&
          data.requestedFiles[0].fileHandleId !== undefined
        ) {
          resolve(data.requestedFiles[0])
        } else {
          reject(data.requestedFiles[0].failureCode)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * Add a batch of files to the user's download list.
 * Uses http://rest-docs.synapse.org/rest/POST/download/list/add.html
 * @param batchToAdd
 */
export const addFileBatchToDownloadListV2 = (
  batchToAdd: { fileEntityId: string; versionNumber?: number }[],
  accessToken?: string,
): Promise<AddBatchOfFilesToDownloadListResponse> => {
  const request: AddBatchOfFilesToDownloadListRequest = {
    batchToAdd,
  }
  return doPost(
    '/repo/v1/download/list/add',
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Add a file to the user's download list.
 * Uses http://rest-docs.synapse.org/rest/POST/download/list/add.html
 * @param fileEntityId
 * @param versionNumber
 */
export const addFileToDownloadListV2 = (
  fileEntityId: string,
  versionNumber?: number,
  accessToken?: string,
): Promise<AddBatchOfFilesToDownloadListResponse> => {
  return addFileBatchToDownloadListV2(
    [{ fileEntityId, versionNumber }],
    accessToken,
  )
}

/**
 * http://rest-docs.synapse.org/rest/POST/download/list/package/async/start.html
 */
export const createPackageFromDownloadListV2 = async (
  zipFileName?: string,
  accessToken?: string,
): Promise<DownloadListPackageResponse> => {
  const request: DownloadListPackageRequest = {
    zipFileName,
    includeManifest: true,
    concreteType:
      'org.sagebionetworks.repo.model.download.DownloadListPackageRequest',
  }
  const asyncJobId = await doPost<AsyncJobId>(
    `/repo/v1/download/list/package/async/start`,
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
  return getAsyncResultBodyFromJobId(
    asyncJobId.token,
    `/repo/v1/download/list/package/async/get/${asyncJobId.token}`,
    accessToken,
  )
}

/**
 * http://rest-docs.synapse.org/rest/POST/download/list/package/async/start.html
 */
export const createManifestFromDownloadListV2 = async (
  accessToken: string | undefined = undefined,
) => {
  const request: DownloadListManifestRequest = {
    csvTableDescriptor: {},
    concreteType:
      'org.sagebionetworks.repo.model.download.DownloadListManifestRequest',
  }
  const asyncJobId = await doPost<AsyncJobId>(
    `/repo/v1/download/list/manifest/async/start`,
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
  return getAsyncResultBodyFromJobId(
    asyncJobId.token,
    `/repo/v1/download/list/manifest/async/get/${asyncJobId.token}`,
    accessToken,
  )
}

/**
 * http://rest-docs.synapse.org/rest/POST/download/list/add/async/start.html
 * Start an asynchronous job to add files to a user's download list from either a view query or a folder. Use GET /download/list/add/async/get/{asyncToken} to get both the job status and job results.
 */
export const addFilesToDownloadListV2 = async (
  request: AddToDownloadListRequest,
  accessToken: string | undefined = undefined,
): Promise<AddToDownloadListResponse> => {
  const asyncJobId = await doPost<AsyncJobId>(
    '/repo/v1/download/list/add/async/start',
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
  return getAsyncResultBodyFromJobId(
    asyncJobId.token,
    `/repo/v1/download/list/add/async/get/${asyncJobId.token}`,
    accessToken,
  )
}

/**
 * Create an ACL
 * https://rest-docs.synapse.org/rest/POST/entity/id/acl.html
 */
export const createACL = (
  entityId: string,
  acl: AccessControlList,
  accessToken: string | undefined,
) => {
  return doPost(
    `/repo/v1/entity/${entityId}/acl`,
    acl,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Submit an entity to an evaluation queue
 * https://rest-docs.synapse.org/rest/POST/evaluation/submission.html
 */
export const submitToEvaluation = (
  accessToken: string | undefined,
  submission: EvaluationSubmission,
  etag: string,
  submissionEligibilityHash?: number,
) => {
  let url = `/repo/v1/evaluation/submission?etag=${etag}`
  if (submissionEligibilityHash)
    url += `&submissionEligibilityHash=${submissionEligibilityHash}`
  return doPost(
    url,
    submission,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const getEvaluationPermissions = (
  evalId: string,
  accessToken: string | undefined,
) => {
  return doGet<UserEvaluationPermissions>(
    `/repo/v1/evaluation/${evalId}/permissions`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get an evaluation queue
 * https://rest-docs.synapse.org/rest/GET/evaluation/evalId.html
 */
export const getEvaluation = (
  evalId: string,
  accessToken: string | undefined,
): Promise<Evaluation> => {
  if (!evalId) {
    // we must explicitly handle this because /repo/v1/evaluation
    // without an evalId is a valid API that returns a different API response
    return Promise.reject(new Error('evalId is empty'))
  }
  return doGet<Evaluation>(
    EVALUATION_BY_ID(evalId),
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Update an existing evaluation queue
 * https://rest-docs.synapse.org/rest/PUT/evaluation/evalId.html
 */
export const updateEvaluation = (
  evaluation: Evaluation,
  accessToken: string | undefined,
): Promise<Evaluation> => {
  if (!evaluation.id) {
    // we must explicitly handle this because /repo/v1/evaluation
    // without an evalId is a valid API that returns a different API response
    return Promise.reject(new Error('evaluation does not have an ID'))
  }
  return doPut<Evaluation>(
    EVALUATION_BY_ID(evaluation.id),
    evaluation,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Create an evaluation queue
 * https://rest-docs.synapse.org/rest/POST/evaluation.html
 */
export const createEvaluation = (
  evaluation: Evaluation,
  accessToken: string | undefined,
): Promise<Evaluation> => {
  return doPost<Evaluation>(
    EVALUATION,
    evaluation,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Delete an existing evaluation queue
 * https://rest-docs.synapse.org/rest/PUT/evaluation/evalId.html
 */
export const deleteEvaluation = (
  evalId: string,
  accessToken: string | undefined,
): Promise<void> => {
  return doDelete(
    `/repo/v1/evaluation/${evalId}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get an evaluation round
 * https://rest-docs.synapse.org/rest/GET/evaluation/evalId/round/evalRoundId.html
 */
export const getEvaluationRound = (
  evalId: string,
  evalRoundId: string,
  accessToken: string | undefined,
): Promise<EvaluationRound> => {
  return doGet(
    `/repo/v1/evaluation/${evalId}/round/${evalRoundId}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get all evaluation rounds
 * https://rest-docs.synapse.org/rest/GET/evaluation/evalId/round/list.html
 */
export const getEvaluationRoundsList = (
  evalId: string,
  evaluationRoundListRequest: EvaluationRoundListRequest | undefined,
  accessToken: string | undefined,
): Promise<EvaluationRoundListResponse> => {
  return doPost(
    `/repo/v1/evaluation/${evalId}/round/list`,
    evaluationRoundListRequest ?? {},
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Create an evaluation round
 * https://rest-docs.synapse.org/rest/POST/evaluation/evalId/round/evalRoundId.html
 */
export const createEvaluationRound = (
  evaluationRound: EvaluationRound,
  accessToken: string | undefined,
): Promise<EvaluationRound> => {
  return doPost(
    `/repo/v1/evaluation/${evaluationRound.evaluationId}/round`,
    evaluationRound,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Update an evaluation round
 * https://rest-docs.synapse.org/rest/PUT/evaluation/evalId/round/evalRoundId.html
 */
export const updateEvaluationRound = (
  evaluationRound: EvaluationRound,
  accessToken: string | undefined,
): Promise<EvaluationRound> => {
  return doPut(
    `/repo/v1/evaluation/${evaluationRound.evaluationId}/round/${evaluationRound.id}`,
    evaluationRound,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Delete an evaluation round
 * https://rest-docs.synapse.org/rest/DELETE/evaluation/evalId/round/evalRoundId.html
 */
export const deleteEvaluationRound = (
  evalId: string,
  evalRoundId: string,
  accessToken: string | undefined,
) => {
  return doDelete(
    `/repo/v1/evaluation/${evalId}/round/${evalRoundId}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Executes a user-defined query over the Submissions of a specific Evaluation.
 * https://rest-docs.synapse.org/rest/GET/evaluation/submission/query.html
 */
export const getEvaluationSubmissions = (
  query: string,
  accessToken: string | undefined,
): Promise<QueryTableResults> => {
  return doGet(
    `/repo/v1/evaluation/submission/query?query=${encodeURI(query)}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get user-friendly OAuth2 request information (to present to the user so they can choose if they want to give consent).
 * http://rest-docs.synapse.org/rest/POST/oauth2/description.html
 */
export const getOAuth2RequestDescription = (
  oidcAuthRequest: OIDCAuthorizationRequest,
): Promise<OIDCAuthorizationRequestDescription> => {
  return doPost(
    '/auth/v1/oauth2/description',
    oidcAuthRequest,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Check whether user has already granted consent for the given OAuth client, scope, and claims.
 * Consent persists for one year.
 */
export const hasUserAuthorizedOAuthClient = (
  oidcAuthRequest: OIDCAuthorizationRequest,
  accessToken: string,
): Promise<OAuthConsentGrantedResponse> => {
  return doPost(
    '/auth/v1/oauth2/consentcheck',
    oidcAuthRequest,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get OAuth2 Client information (available to the public)
 */
export const getOAuth2Client = (
  clientId: string,
): Promise<OAuthClientPublic> => {
  return doGet(
    `/auth/v1/oauth2/client/${clientId}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 List the OAuth 2.0 clients created by the current user.
 */
export const getOAuth2 = (
  accessToken: string,
  nextPageToken?: string,
): Promise<OAuthClientList> => {
  return doGet(
    `/auth/v1/oauth2/client${
      nextPageToken ? '?nextPageToken=' + nextPageToken : ''
    }`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
Create an OAuth 2.0 client.
Note: The client name must be unique.
Note: After creating the client one must also set the client secret and have their client verified
https://rest-docs.synapse.org/rest/POST/oauth2/client.html
 */
export const createOAuthClient = (
  request: OAuthClient,
  accessToken: string,
): Promise<OAuthClient> => {
  return doPost(
    '/auth/v1/oauth2/client',
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
Delete OAuth 2.0 client
https://rest-docs.synapse.org/rest/DELETE/oauth2/client/id.html
 */
export const deleteOAuthClient = (id: string, accessToken: string) => {
  return doDelete(
    `/auth/v1/oauth2/client/${id}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 Update the metadata for an existing OAuth 2.0 client.
 Note: Only the creator of a client can update it.
 Note: Changing the redirect URIs will revert the 'verified' status of the client, necessitating re-verification.
 https://repo-prod.prod.sagebase.org/auth/v1/oauth2/client/{id}
 */
export const updateOAuthClient = (
  request: OAuthClient,
  accessToken: string,
): Promise<OAuthClient> => {
  return doPut(
    `/auth/v1/oauth2/client/${request.client_id}`,
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**

 Note: Only the creator of a client can update it.
 https://rest-docs.synapse.org/rest/PUT/oauth2/client/id/verificationPrecheck.html
 */
export const isOAuthClientReverificationRequired = (
  request: OAuthClient,
  accessToken: string,
): Promise<OAuthClientVerificationPrecheckResult> => {
  return doPut(
    `/auth/v1/oauth2/client/${request.client_id}/verificationPrecheck`,
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
Get a secret credential to use when requesting an access token.
Synapse supports 'client_secret_basic' and 'client_secret_post'.
NOTE: This request will invalidate any previously issued secrets.
https://rest-docs.synapse.org/rest/POST/oauth2/client/secret/id.html
*/
export const createOAuthClientSecret = (
  accessToken: string,
  id: string,
): Promise<OAuthClientIdAndSecret> => {
  return doPost(
    `/auth/v1/oauth2/client/secret/${id}`,
    undefined,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get OAuth2 Client information (available to the public)
 */
export const getAuthenticatedOn = async (
  accessToken: string,
): Promise<AuthenticatedOn> => {
  return doGet(
    `/auth/v1/authenticatedOn`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * User consents to the given OIDCAuthorizationRequest (after being presented with all information returned by getOAuth2RequestDescription())
 * @param oidcAuthRequest
 * @param accessToken
 * @param endpoint
 */
export const consentToOAuth2Request = (
  oidcAuthRequest: OIDCAuthorizationRequest,
  accessToken: string | undefined,
): Promise<AccessCodeResponse> => {
  return doPost(
    '/auth/v1/oauth2/consent',
    oidcAuthRequest,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/***********************
 * FORM SERVICES
 * https://rest-docs.synapse.org/rest/#org.sagebionetworks.repo.web.controller.FormController
 *************************/
/**
 * Create a FormGroup
 * https://rest-docs.synapse.org/rest/POST/form/group.html
 * @param name
 * @param accessToken
 * @param endpoint
 */
export const createFormGroup = (
  name: string,
  accessToken: string,
): Promise<FormGroup> => {
  return doPost(
    `/repo/v1/form/group?name=${encodeURI(name)}`,
    undefined,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get FormGroup ACL
 * https://rest-docs.synapse.org/rest/GET/form/group/id/acl.html
 */
export const getFormACL = (
  formGroupId: string,
  accessToken: string | undefined,
): Promise<AccessControlList> => {
  return doGet(
    `/repo/v1/form/group/${formGroupId}/acl`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Update FormGroup ACL
 * https://rest-docs.synapse.org/rest/PUT/form/group/id/acl.html
 */
export const updateFormACL = (
  formGroupId: string,
  newAcl: AccessControlList,
  accessToken: string | undefined,
): Promise<AccessControlList> => {
  return doPut(
    `/repo/v1/form/group/${formGroupId}/acl`,
    newAcl,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Create a new FormData object
 * https://rest-docs.synapse.org/rest/POST/form/data.html
 * @param formGroupId
 * @param name
 * @param accessToken
 * @param endpoint
 */
export const createFormData = (
  formGroupId: string,
  name: string,
  dataFileHandleId: string,
  accessToken: string,
): Promise<FormData> => {
  const newFormData: FormChangeRequest = {
    name,
    fileHandleId: dataFileHandleId,
  }
  return doPost(
    `/repo/v1/form/data?groupId=${formGroupId}`,
    newFormData,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Update FormData object
 * https://rest-docs.synapse.org/rest/PUT/form/data.html
 */
export const updateFormData = (
  formDataId: string,
  name: string,
  dataFileHandleId: string,
  accessToken: string,
): Promise<FormData> => {
  const updatedFormData: FormChangeRequest = {
    name,
    fileHandleId: dataFileHandleId,
  }
  return doPut(
    `/repo/v1/form/data/${formDataId}`,
    updatedFormData,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Delete FormData object
 * https://rest-docs.synapse.org/rest/DELETE/form/data.html
 */
export const deleteFormData = (
  formDataId: string,
  accessToken: string | undefined,
) => {
  return doDelete(
    `/repo/v1/form/data/${formDataId}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Submit the identified FormData for review.
 * https://rest-docs.synapse.org/rest/POST/form/data/id/submit.html
 */
export const submitFormData = (
  formDataId: string,
  accessToken: string | undefined,
): Promise<FormData> => {
  return doPost(
    `/repo/v1/form/data/${formDataId}/submit`,
    undefined,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * List FormData objects and their associated status that match the filters of the provided request that are
 * owned by the caller. Note: Only objects owned by the caller will be returned.
 * https://rest-docs.synapse.org/rest/POST/form/data/list.html
 */
export const listFormData = (
  request: ListRequest,
  accessToken: string | undefined,
): Promise<ListResponse> => {
  return doPost(
    `/repo/v1/form/data/list`,
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * List FormData objects and their associated status that match the filters of the provided request for the entire
 * group. This is used by service accounts to process submissions.
 * https://rest-docs.synapse.org/rest/POST/form/data/list/reviewer.html
 */
export const listFormDataAsFormAdmin = (
  request: ListRequest,
  accessToken: string | undefined,
): Promise<ListResponse> => {
  return doPost(
    `/repo/v1/form/data/list/reviewer`,
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Called by the form processing service to accept a submitted data.
 * https://rest-docs.synapse.org/rest/PUT/form/data/id/accept.html
 */
export const acceptFormData = (
  formDataId: string,
  accessToken: string | undefined,
): Promise<FormData> => {
  return doPut(
    `/repo/v1/form/data/${formDataId}/accept`,
    undefined,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Called by the form processing service to reject a submitted data.
 * https://rest-docs.synapse.org/rest/PUT/form/data/id/reject.html
 */
export const rejectFormData = (
  formDataId: string,
  reason: string,
  accessToken: string | undefined,
): Promise<FormData> => {
  const formRejection: FormRejection = {
    reason,
  }
  return doPut(
    `/repo/v1/form/data/${formDataId}/reject`,
    formRejection,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get Statistics
 * https://rest-docs.synapse.org/rest/POST/statistics.html
 * Generic endpoint to retrieve statistics about objects. The user should have VIEW_STATISTICS access on the object referenced by the objectId in the request.
 */
export const getProjectStatistics = (
  request: ProjectFilesStatisticsRequest,
  accessToken: string | undefined,
): Promise<ProjectFilesStatisticsResponse> => {
  return doPost(
    `/repo/v1/statistics`,
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// see https://rest-docs.synapse.org/rest/POST/restrictionInformation.html
export const getRestrictionInformation = (
  request: RestrictionInformationRequest,
  accessToken: string | undefined,
): Promise<RestrictionInformationResponse> => {
  return doPost(
    `/repo/v1/restrictionInformation`,
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}
/**
 * Returns a paginated result of access requirements associated for an entity
 *
 * See https://rest-docs.synapse.org/rest/GET/entity/id/accessRequirement.html
 *
 * @param {(string | undefined)} accessToken token of user
 * @param {string} id id of entity
 * @param {number} [limit=50]
 * @param {number} [offset=0]
 * @returns {Promise<PaginatedResults<AccessRequirement>>}
 */
export const getAccessRequirement = (
  accessToken: string | undefined,
  id: string,
  limit: number = 50,
  offset: number = 0,
): Promise<PaginatedResults<AccessRequirement>> => {
  const url = `${ENTITY_ACCESS_REQUIREMENTS(
    id,
  )}?limit=${limit}&offset=${offset}`
  return doGet<PaginatedResults<AccessRequirement>>(
    url,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Returns the Access Requirement with the given AR_ID
 *
 * See http://rest-docs.synapse.org/rest/GET/accessRequirement/requirementId.html
 *
 * @param {(string | undefined)} accessToken token of user
 * @param {number} id id of the access requirement
 * @returns {Promise<AccessRequirement>}
 */
export const getAccessRequirementById = <T extends AccessRequirement>(
  accessToken: string | undefined,
  id: string | number,
): Promise<T> => {
  return doGet<T>(
    ACCESS_REQUIREMENT_BY_ID(id),
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Fetch the ACL for the access requirement with the given id.
 *
 * See https://rest-docs.synapse.org/rest/GET/accessRequirement/requirementId/acl.html
 * @returns the ACL for the specified AR, or null if the ACL does not exist
 */
export const getAccessRequirementAcl = (
  accessToken: string | undefined,
  id: string | number,
): Promise<AccessControlList | null> => {
  // It's possible for an AR to not have an ACL, so pre-emptively handle 404
  return allowNotFoundError(() =>
    doGet<AccessControlList>(
      ACCESS_REQUIREMENT_ACL(id),
      accessToken,
      BackendDestinationEnum.REPO_ENDPOINT,
    ),
  )
}

/**
 * Search for access requirements
 *
 * See http://rest-docs.synapse.org/rest/POST/accessRequirement/search.html
 */
export const searchAccessRequirements = (
  accessToken: string | undefined,
  request: AccessRequirementSearchRequest,
): Promise<AccessRequirementSearchResponse> => {
  return doPost<AccessRequirementSearchResponse>(
    ACCESS_REQUIREMENT_SEARCH,
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Retrieve an access requirement status for a given access requirement ID.
 *
 * @param {string} requirementId id of entity to lookup
 * @returns {AccessRequirementStatus}
 */
export function getAccessRequirementStatus<
  T extends
    | AccessRequirementStatus
    | ManagedACTAccessRequirementStatus = AccessRequirementStatus,
>(accessToken: string | undefined, requirementId: string | number): Promise<T> {
  return doGet<T>(
    ACCESS_REQUIREMENT_STATUS(requirementId),
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Returns all the access requirements associated to an entity {id}, calling the
 * paginated getAccessRequirement service until all results are returned.
 *
 * @param {(string | undefined)} accessToken token of user
 * @param {string} id id of entity to lookup
 * @returns {Promise<Array<AccessRequirement>>}
 */
export const getAllAccessRequirements = (
  accessToken: string | undefined,
  id: string,
): Promise<Array<AccessRequirement>> => {
  // format function to be callable by getAllOfPaginatedService
  const fn = (limit: number, offset: number) => {
    const url = `/repo/v1/entity/${id}/accessRequirement?limit=${limit}&offset=${offset}`
    return doGet<PaginatedResults<AccessRequirement>>(
      url,
      accessToken,
      BackendDestinationEnum.REPO_ENDPOINT,
    )
  }
  return getAllOfPaginatedService(fn)
}

/**
 * Add a temporary access restriction that prevents access pending review by the Synapse Access and Compliance Team.
 * This service may be used only by an administrator of the specified entity.
 *
 * https://rest-docs.synapse.org/rest/POST/entity/id/lockAccessRequirement.html
 * @param entityId
 * @param accessToken
 */
export function createLockAccessRequirement(
  entityId: string,
  accessToken: string | undefined,
): Promise<AccessRequirement> {
  return doPost(
    `/repo/v1/entity/${entityId}/lockAccessRequirement`,
    null,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 *
 *
 * @param {(string | undefined)} accessToken user access token
 * @param {(number | undefined)} id the unique immutable ID
 * @returns {AccessApproval}
 */
export const getAccessApproval = async (
  accessToken: string | undefined,
  approvalId: number,
): Promise<AccessApproval> => {
  const url = `${ACCESS_APPROVAL_BY_ID(approvalId)}`
  return doGet<AccessApproval>(
    url,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 *
 *
 * @param {(string | undefined)} accessToken user access token
 * @param {AccessApproval} accessApproval access approval request object
 * @returns {AccessApproval}
 */
export const createAccessApproval = async (
  accessToken: string | undefined,
  accessApproval: CreateAccessApprovalRequest,
): Promise<AccessApproval> => {
  return doPost<AccessApproval>(
    ACCESS_APPROVAL,
    accessApproval,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://rest-docs.synapse.org/rest/GET/download/list.html
export const getDownloadList = (accessToken: string | undefined) => {
  return doGet<DownloadList>(
    '/file/v1/download/list',
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const getDownloadOrder = (
  zipFileName: string | undefined,
  accessToken: string | undefined,
): Promise<DownloadOrder> => {
  const baseURL = '/file/v1/download/order'
  const url = zipFileName ? `${baseURL}?zipFileName=${zipFileName}` : baseURL
  return doPost(
    url,
    undefined,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export type FunctionReturningPaginatedResults<T> = (
  limit: number,
  offset: number,
) => Promise<PaginatedResults<T>>
/**
 * Utility function to get all the results of a paginated service
 *
 * @template T Type of paginated service
 * @param {FunctionReturningPaginatedResults<T>} fn Function that returns a paginated synapse object, accepts a limit and offset
 * @returns
 */
export const getAllOfPaginatedService = async <T>(
  fn: FunctionReturningPaginatedResults<T>,
) => {
  const limit = 50
  let offset = 0
  let existsMoreData = true
  const results: T[] = []

  while (existsMoreData) {
    try {
      const data = await fn(limit, offset)
      results.push(...data.results)
      offset += data.results.length
      if (data.results.length < limit) {
        existsMoreData = false
      }
    } catch (e) {
      throw Error(`Error on getting paginated results ${e}`)
    }
  }

  return results
}

export type FunctionReturningNextPageToken<T> = (
  nextPageToken?: string | null,
) => Promise<{ results: T[]; nextPageToken?: string | null }>

export async function getAllOfNextPageTokenPaginatedService<T>(
  fn: FunctionReturningNextPageToken<T>,
): Promise<T[]> {
  let existsMoreData = true
  let nextPageToken: string | null | undefined = undefined
  const results: T[] = []

  while (existsMoreData) {
    try {
      const data = await fn(nextPageToken)
      results.push(...data.results)
      nextPageToken = data.nextPageToken

      if (!nextPageToken) {
        existsMoreData = false
      }
    } catch (e) {
      throw Error(`Error on getting paginated results ${e}`)
    }
  }

  return results
}

// https://rest-docs.synapse.org/rest/POST/download/list/remove.html
export const deleteDownloadListFiles = (
  list: FileHandleAssociation[],
  accessToken: string | undefined,
): Promise<DownloadList> => {
  return doPost<DownloadList>(
    '/file/v1/download/list/remove',
    { list },
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  ).then(data => {
    dispatchDownloadListChangeEvent(data)
    return data
  })
}

// https://rest-docs.synapse.org/rest/DELETE/download/list.html ?
export const deleteDownloadList = (accessToken: string | undefined) => {
  return doDelete(
    '/file/v1/download/list',
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  ).then(() => {
    dispatchDownloadListChangeEvent(undefined)
  })
}

/**
 * http://rest-docs.synapse.org/rest/POST/entity/id/table/transaction/async/start.html
 * @param {*} tableUpdateRequest
 * @param {*} accessToken
 * @param {*} endpoint
 * // technically returns a TableUpdateTransactionResponse, but I don't see any reason we need this
 */
export const updateTable = async (
  tableUpdateRequest: TableUpdateTransactionRequest,
  accessToken: string | undefined = undefined,
): Promise<void> => {
  const asyncJobId = await doPost<AsyncJobId>(
    `/repo/v1/entity/${tableUpdateRequest.entityId}/table/transaction/async/start`,
    tableUpdateRequest,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
  return getAsyncResultBodyFromJobId(
    asyncJobId.token,
    `/repo/v1/entity/${tableUpdateRequest.entityId}/table/transaction/async/get/${asyncJobId.token}`,
    accessToken,
  )
}

export const createPersonalAccessToken = (
  accessTokenGenerationRequest: AccessTokenGenerationRequest,
  accessToken: string | undefined,
) => {
  return doPost<AccessTokenGenerationResponse>(
    '/auth/v1/personalAccessToken',
    accessTokenGenerationRequest,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const getPersonalAccessTokenRecords = (
  accessToken: string | undefined,
  nextPageToken: string | undefined,
) => {
  return doGet<AccessTokenRecordList>(
    `/auth/v1/personalAccessToken${
      nextPageToken ? '?nextPageToken=' + nextPageToken : ''
    }`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const deletePersonalAccessToken = (
  accessTokenId: string,
  accessToken: string | undefined,
) => {
  return doDelete(
    `/auth/v1/personalAccessToken/${accessTokenId}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://rest-docs.synapse.org/rest/GET/projects.html
export const getMyProjects = (
  accessToken: string,
  params: GetProjectsParameters = {},
) => {
  const urlParams = new URLSearchParams(
    removeUndefined(params) as Record<string, string>,
  )
  return doGet<ProjectHeaderList>(
    `${PROJECTS}?${urlParams.toString()}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// http://rest-docs.synapse.org/rest/GET/projects/user/principalId.html
export const getUserProjects = (
  userId: string,
  params: GetProjectsParameters = {},
  accessToken?: string,
) => {
  const urlParams = new URLSearchParams(
    removeUndefined(params) as Record<string, string>,
  )
  return doGet<ProjectHeaderList>(
    `/repo/v1/projects/user/${userId}?${urlParams.toString()}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://rest-docs.synapse.org/rest/GET/entity/id/acl.html
export const getEntityACL = (entityId: string, accessToken?: string) => {
  return doGet<AccessControlList>(
    ENTITY_ACL(entityId),
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://rest-docs.synapse.org/rest/GET/entity/id/evaluation.html
export const getAllEntityEvaluations = (
  entityId: string,
  params: GetEvaluationParameters = {},
  accessToken?: string,
): Promise<Evaluation[]> => {
  const urlParams = new URLSearchParams(
    removeUndefined(params) as Record<string, string>,
  )
  const fn = (limit: number, offset: number) => {
    const url = `${ENTITY_EVALUATION(
      entityId,
    )}?offset=${offset}&limit=${limit}&${urlParams.toString()}`
    return doGet<PaginatedResults<Evaluation>>(
      url,
      accessToken,
      BackendDestinationEnum.REPO_ENDPOINT,
    )
  }
  return getAllOfPaginatedService(fn)
}

// https://rest-docs.synapse.org/rest/GET/entity/id/permissions.html
export const getEntityPermissions = (
  entityId: string,
  accessToken?: string,
) => {
  return doGet<UserEntityPermissions>(
    ENTITY_PERMISSIONS(entityId),
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://rest-docs.synapse.org/rest/GET/entity/id/path.html
export const getEntityPath = (entityId: string, accessToken?: string) => {
  return doGet<EntityPath>(
    ENTITY_PATH(entityId),
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://rest-docs.synapse.org/rest/GET/entity/id/version.html
export const getEntityVersions = (
  entityId: string,
  accessToken?: string,
  offset: number = 0,
  limit: number = 200,
) => {
  return doGet<PaginatedResults<VersionInfo>>(
    `/repo/v1/entity/${entityId}/version?offset=${offset}&limit=${limit}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://rest-docs.synapse.org/rest/POST/search.html
export const searchEntities = (query: SearchQuery, accessToken?: string) => {
  return doPost<SearchResults>(
    '/repo/v1/search',
    query,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

const getDownloadListJobResponse = async (
  accessToken: string | undefined,
  queryRequestDetails: QueryRequestDetails,
): Promise<QueryResponseDetails> => {
  const downloadListQueryRequest: DownloadListQueryRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.download.DownloadListQueryRequest',
    requestDetails: queryRequestDetails,
  }
  const asyncJobId = await doPost<AsyncJobId>(
    '/repo/v1/download/list/query/async/start',
    downloadListQueryRequest,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
  const response = await getAsyncResultBodyFromJobId<DownloadListQueryResponse>(
    asyncJobId.token,
    `/repo/v1/download/list/query/async/get/${asyncJobId.token}`,
    accessToken,
  )
  return response.responseDetails
}

/**
 * Clear all files from the user's Download List v2.
 * http://rest-docs.synapse.org/rest/DELETE/download/list.html
 */
export const clearDownloadListV2 = (
  accessToken: string | undefined,
): Promise<void> => {
  return doDelete(
    '/repo/v1/download/list',
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get Download List v2 available files to download
 * http://rest-docs.synapse.org/rest/POST/download/list/query/async/start.html
 */
export const getAvailableFilesToDownload = (
  request: AvailableFilesRequest,
  accessToken: string | undefined = undefined,
): Promise<AvailableFilesResponse> => {
  return getDownloadListJobResponse(
    accessToken,
    request,
  ) as Promise<AvailableFilesResponse>
}

/**
 * Get Download List v2 statistics
 * http://rest-docs.synapse.org/rest/POST/download/list/query/async/start.html
 */
export const getDownloadListStatistics = (
  accessToken: string | undefined = undefined,
): Promise<FilesStatisticsResponse> => {
  const filesStatsRequest: FilesStatisticsRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.download.FilesStatisticsRequest',
  }
  return getDownloadListJobResponse(
    accessToken,
    filesStatsRequest,
  ) as Promise<FilesStatisticsResponse>
}

/**
 * Get Download List v2 actions required
 * http://rest-docs.synapse.org/rest/POST/download/list/query/async/start.html
 */
export const getDownloadListActionsRequired = (
  request: ActionRequiredRequest,
  accessToken: string | undefined = undefined,
): Promise<ActionRequiredResponse> => {
  return getDownloadListJobResponse(
    accessToken,
    request,
  ) as Promise<ActionRequiredResponse>
}

/**
 * Remove item from Download List v2
 * http://rest-docs.synapse.org/rest/POST/download/list/remove.html
 */
export const removeItemFromDownloadListV2 = (
  item: DownloadListItem,
  accessToken: string | undefined = undefined,
): Promise<RemoveBatchOfFilesFromDownloadListResponse> => {
  const request: RemoveBatchOfFilesFromDownloadListRequest = {
    batchToRemove: [item],
  }
  return doPost<RemoveBatchOfFilesFromDownloadListResponse>(
    '/repo/v1/download/list/remove',
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// http://rest-docs.synapse.org/rest/POST/researchProject.html
export const updateResearchProject = (
  requestObj: ResearchProject,
  accessToken: string,
) => {
  return doPost<ResearchProject>(
    RESEARCH_PROJECT,
    requestObj,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// http://rest-docs.synapse.org/rest/GET/accessRequirement/requirementId/researchProjectForUpdate.html
export const getResearchProject = (
  requirementId: string,
  accessToken: string,
) => {
  return doGet<ResearchProject>(
    ACCESS_REQUIREMENT_RESEARCH_PROJECT_FOR_UPDATE(requirementId),
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// http://rest-docs.synapse.org/rest/GET/accessRequirement/requirementId/dataAccessRequestForUpdate.html
export const getDataAccessRequestForUpdate = (
  requirementId: string,
  accessToken: string,
) => {
  return doGet<Request | Renewal>(
    ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE(requirementId),
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://rest-docs.synapse.org/rest/POST/dataAccessRequest.html
export function updateDataAccessRequest(
  requestObj: Request | Renewal,
  accessToken: string,
) {
  return doPost<typeof requestObj>(
    DATA_ACCESS_REQUEST,
    requestObj,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// http://rest-docs.synapse.org/rest/POST/dataAccessRequest/requestId/submission.html
export const submitDataAccessRequest = (
  requestObj: CreateSubmissionRequest,
  accessToken: string,
) => {
  return doPost<ACTSubmissionStatus>(
    DATA_ACCESS_REQUEST_SUBMISSION(requestObj.requestId),
    requestObj,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// http://rest-docs.synapse.org/rest/PUT/dataAccessSubmission/submissionId/cancellation.html
// Cancel a submission. Only the user who created this submission can cancel it.
export const cancelDataAccessRequest = (
  submissionId: string,
  accessToken: string,
) => {
  return doPut<ACTSubmissionStatus>(
    `/repo/v1/dataAccessSubmission/${submissionId}/cancellation`,
    undefined,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// http://rest-docs.synapse.org/rest/GET/dataAccessSubmission/submissionId.html
// Fetch a submission by its id. If the user is a not part of the ACT they must be validated and assigned as reviewers of the AR submissions in order to fetch the submission.
export const getSubmissionById = (
  submissionId: string | number,
  accessToken?: string,
) => {
  return doGet<DataAccessSubmission>(
    DATA_ACCESS_SUBMISSION_BY_ID(submissionId),
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Request to update a submission' state. Only ACT members and delegates with the REVIEW_SUBMISSION ACL
 * permission can perform this action.
 *
 * See https://rest-docs.synapse.org/rest/PUT/dataAccessSubmission/submissionId.html
 * @param request
 * @param accessToken
 * @returns
 */
export const updateSubmissionStatus = (
  request: SubmissionStateChangeRequest,
  accessToken?: string,
): Promise<DataAccessSubmission> => {
  return doPut<DataAccessSubmission>(
    DATA_ACCESS_SUBMISSION_BY_ID(request.submissionId),
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get the schema bound to an entity.
 * https://rest-docs.synapse.org/rest/GET/entity/id/schema/binding.html
 * @param entityId
 * @param accessToken
 * @returns
 */
//
export const getSchemaBinding = (entityId: string, accessToken?: string) => {
  return allowNotFoundError(() =>
    doGet<JsonSchemaObjectBinding>(
      ENTITY_SCHEMA_BINDING(entityId),
      accessToken,
      BackendDestinationEnum.REPO_ENDPOINT,
    ),
  )
}

/**
 * Get the schema bound to an entity.
 * https://rest-docs.synapse.org/rest/GET/entity/id/schema/binding.html
 * @param entityId
 * @param accessToken
 * @returns
 */
export const getSchemaValidationResults = (
  entityId: string,
  accessToken?: string,
) => {
  return doGet<ValidationResults>(
    ENTITY_SCHEMA_VALIDATION(entityId),
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get a schema by its $id.
 * https://rest-docs.synapse.org/rest/GET/entity/id/schema/binding.html
 * @returns
 */
export const getSchema = (schema$id: string) => {
  return doGet<JSONSchema7>(
    `${REGISTERED_SCHEMA_ID(schema$id)}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Retrieve a "validation" schema--all references are resolved and dereferenced.
 * @param schema$id
 * @returns
 */
export const getValidationSchema = async (
  schema$id: string,
  accessToken?: string,
): Promise<{
  concreteType: 'org.sagebionetworks.repo.model.schema.GetValidationSchemaResponse'
  validationSchema: JSONSchema7
}> => {
  const asyncJobId = await doPost<AsyncJobId>(
    SCHEMA_VALIDATION_START,
    {
      concreteType:
        'org.sagebionetworks.repo.model.schema.GetValidationSchemaRequest',
      $id: schema$id,
    },
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
  return getAsyncResultBodyFromJobId(
    asyncJobId.token,
    SCHEMA_VALIDATION_GET(asyncJobId.token),
    accessToken,
  )
}

/**
 * Determine if the caller has a particular access type on an entity
 * https://rest-docs.synapse.org/rest/GET/entity/id/access.html
 * @param entityId
 * @param accessToken
 * @returns
 */
export const hasAccessToEntity = (
  entityId: string,
  accessType: ACCESS_TYPE,
  accessToken?: string,
) => {
  return doGet<HasAccessResponse>(
    `${ENTITY_ACCESS(entityId)}?accessType=${accessType}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get the entity and its annotations as a JSON object
 * https://rest-docs.synapse.org/rest/GET/entity/id/json.html
 * @param entityId
 * @param versionNumber
 * @param includeDerivedAnnotations
 * @param accessToken
 * @returns
 */
export const getEntityJson = (
  entityId: string,
  versionNumber: number | undefined,
  includeDerivedAnnotations: boolean,
  accessToken?: string,
) => {
  const params = new URLSearchParams()
  params.set('includeDerivedAnnotations', String(includeDerivedAnnotations))
  const path = versionNumber
    ? ENTITY_VERSION_JSON(entityId, versionNumber)
    : ENTITY_JSON(entityId)
  return doGet<EntityJson>(
    `${path}?${params.toString()}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Update an entity and its annotations using a JSON object
 * https://rest-docs.synapse.org/rest/PUT/entity/id/json.html
 * @param entityId
 * @param accessToken
 * @returns
 */
export const updateEntityJson = (
  entityId: string,
  json: EntityJson,
  accessToken?: string,
) => {
  return doPut<EntityJson>(
    ENTITY_JSON(entityId),
    json,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This service returns the email used for user notifications, i.e. when a Synapse message
 *  is sent and if the user has elected to receive messages by email, then this is the
 *  email address at which the user will receive the message.
 * https://rest-docs.synapse.org/rest/GET/notificationEmail.html
 */
export const getNotificationEmail = (accessToken?: string) => {
  return doGet<NotificationEmail>(
    NOTIFICATION_EMAIL,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// http://rest-docs.synapse.org/rest/POST/principal/available.html
export const isAliasAvailable = (
  aliasCheckRequest: AliasCheckRequest,
  accessToken?: string,
): Promise<AliasCheckResponse> => {
  return doPost<AliasCheckResponse>(
    ALIAS_AVAILABLE,
    aliasCheckRequest,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// http://rest-docs.synapse.org/rest/POST/account/emailValidation.html
export const registerAccountStep1 = (
  newUser: NewUser,
  portalEndpoint: string,
): Promise<void> => {
  return doPost<void>(
    REGISTER_ACCOUNT_STEP_1(portalEndpoint),
    newUser,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// http://rest-docs.synapse.org/rest/POST/account2.html
export const registerAccountStep2 = (
  accountSetupInfo: AccountSetupInfo,
): Promise<LoginResponse> => {
  return doPost(
    REGISTER_ACCOUNT_STEP_2,
    accountSetupInfo,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Step 2 of creating a new account via oauth signin
 *  http://rest-docs.synapse.org/rest/POST/oauth2/account2.html
 * @param {*} provider
 * @param {*} authenticationCode
 * @param {*} redirectUrl
 * @param {*} endpoint
 */
export const oAuthRegisterAccountStep2 = (
  userName: string,
  provider: string,
  authenticationCode: string | number,
  redirectUrl: string,
  endpoint: BackendDestinationEnum = BackendDestinationEnum.REPO_ENDPOINT,
): Promise<LoginResponse> => {
  return doPost(
    '/auth/v1/oauth2/account2',
    {
      provider,
      authenticationCode,
      redirectUrl,
      userName,
    },
    undefined,
    endpoint,
  )
}

/**
 * Bind OAuth account to Synapse account as a new 'alias'.
 * https://rest-docs.synapse.org/rest/POST/oauth2/alias.html
 * @param {*} provider
 * @param {*} authenticationCode
 * @param {*} redirectUrl
 * @param {*} endpoint
 */
export const bindOAuthProviderToAccount = async (
  provider: string,
  authenticationCode: string | number,
  redirectUrl: string,
  endpoint: BackendDestinationEnum = BackendDestinationEnum.REPO_ENDPOINT,
): Promise<LoginResponse> => {
  // Special case.  web app may not have discovered the access token by this point in init.
  // Look for the access token ourselves before binding.
  const accessToken = await getAccessTokenFromCookie()
  return doPost(
    '/auth/v1/oauth2/alias',
    { provider, authenticationCode, redirectUrl },
    accessToken,
    endpoint,
  )
}

/**
 * Remove an alias associated with an account via the OAuth mechanism.
 * http://rest-docs.synapse.org/rest/DELETE/oauth2/alias.html
 * @param provider
 * @param accessToken
 * @param alias
 */
export const unbindOAuthProviderToAccount = async (
  provider: string,
  accessToken: string | undefined,
  alias: string,
) => {
  const url = `/auth/v1/oauth2/alias?provider=${provider}&alias=${encodeURIComponent(
    alias,
  )}`
  return doDelete(url, accessToken, BackendDestinationEnum.REPO_ENDPOINT)
}

//http://rest-docs.synapse.org/rest/POST/termsOfUse2.html
export const signSynapseTermsOfUse = (accessToken: string) => {
  return doPost(
    SIGN_TERMS_OF_USE,
    { accessToken },
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

//https://rest-docs.synapse.org/rest/POST/verificationSubmission.html
export const createProfileVerificationSubmission = (
  verificationSubmission: VerificationSubmission,
  accessToken: string,
) => {
  return doPost(
    VERIFICATION_SUBMISSION,
    verificationSubmission,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://rest-docs.synapse.org/rest/POST/user/changePassword.html
export const changePasswordWithCurrentPassword = (
  newPassword: ChangePasswordWithCurrentPassword,
  accessToken: string | undefined,
) => {
  return doPost<ChangePasswordWithCurrentPassword>(
    '/auth/v1/user/changePassword',
    newPassword,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://rest-docs.synapse.org/rest/POST/user/changePassword.html
export const changePasswordWithToken = (
  newPassword: ChangePasswordWithToken,
) => {
  return doPost<ChangePasswordWithToken>(
    '/auth/v1/user/changePassword',
    newPassword,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// http://rest-docs.synapse.org/rest/POST/user/password/reset.html
export const resetPassword = (email: string) => {
  const endpoint = window.location.href + '?passwordResetToken='
  const url = `/auth/v1/user/password/reset?passwordResetEndpoint=${encodeURIComponent(
    endpoint,
  )}`
  return doPost(url, { email }, undefined, BackendDestinationEnum.REPO_ENDPOINT)
}

/**
 * https://rest-docs.synapse.org/rest/POST/account/id/emailValidation.html
 * @param email
 * @param userId
 * @param portalEndpoint
 * @param accessToken
 */
export const addEmailAddressStep1 = (
  email: string,
  userId: string,
  portalEndpoint: string,
  accessToken: string | undefined,
) => {
  return doPost(
    `/repo/v1/account/${userId}/emailValidation?portalEndpoint=${portalEndpoint}`,
    { email },
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * https://rest-docs.synapse.org/rest/POST/email.html
 * @param emailValidationSignedToken
 * @param accessToken
 */
export const addEmailAddressStep2 = (
  emailValidationSignedToken: EmailValidationSignedToken,
  accessToken: string | undefined,
) => {
  return doPost(
    `/repo/v1/email`,
    emailValidationSignedToken,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * https://rest-docs.synapse.org/rest/DELETE/email.html
 * @param email
 * @param accessToken
 */
export const deleteEmail = (accessToken: string | undefined, email: string) => {
  return doDelete(
    `/repo/v1/email?email=${email}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * https://rest-docs.synapse.org/rest/PUT/notificationEmail.html
 * @param email
 * @param accessToken
 */
export const updateNotificationEmail = (
  email: string,
  accessToken: string | undefined,
) => {
  return doPut(
    '/repo/v1/notificationEmail',
    { email },
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to get the Forum's metadata for a given project ID.
 * Target users: anyone who has READ permission to the project.
 * https://rest-docs.synapse.org/rest/GET/project/projectId/forum.html
 * @param projectId
 * @param accessToken
 */
export const getForum = (
  projectId: string,
  accessToken: string | undefined,
) => {
  return doGet<Forum>(
    `/repo/v1/project/${projectId}/forum`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to get a reply and its statistic given its ID.
 * Target users: anyone who has READ permission to the project.
 * http://rest-docs.synapse.org/rest/GET/reply/replyId.html
 * @param replyId
 * @param accessToken
 */
export const getReply = (replyId: string, accessToken: string | undefined) => {
  return doGet<DiscussionReplyBundle>(
    `/repo/v1/reply/${replyId}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to create a new reply to a thread.
 * Target users: anyone who has READ permission to the project.
 * https://rest-docs.synapse.org/rest/POST/reply.html
 * @param createDiscussionReply
 * @param accessToken
 * @returns
 */
export const postReply = (
  createDiscussionReply: CreateDiscussionReply,
  accessToken: string | undefined,
) => {
  return doPost<DiscussionReplyBundle>(
    `/repo/v1/reply`,
    createDiscussionReply,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to update the message of a reply.
 * Target users: only the author of the reply can update its message.
 * https://rest-docs.synapse.org/rest/PUT/reply/replyId/message.html
 * @param updateDiscussionReply
 * @param accessToken
 * @returns
 */
export const putReply = (
  updateDiscussionReply: UpdateDiscussionReply,
  accessToken: string | undefined,
) => {
  return doPut<DiscussionReplyBundle>(
    `/repo/v1/reply/${updateDiscussionReply.replyId}/message`,
    { messageMarkdown: updateDiscussionReply.messageMarkdown },
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to mark a reply as deleted.
 * Target users: only forum's moderator can mark a reply as deleted.
 * https://rest-docs.synapse.org/rest/DELETE/reply/replyId.html
 * @param accessToken
 * @param replyId
 * @returns
 */
export const deleteReply = (
  accessToken: string | undefined,
  replyId: string,
) => {
  return doDelete(
    `/repo/v1/reply/${replyId}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to get N number of replies for a given thread ID.
 * Target users: anyone who has READ permission to the project.
 * https://rest-docs.synapse.org/rest/GET/thread/threadId/replies.html
 */
export const getReplies = (
  accessToken: string | undefined,
  threadId: string,
  limit: number = 30,
  offset: number = 0,
  sort: DiscussionReplyOrder = DiscussionReplyOrder.CREATED_ON,
  ascending: boolean = true,
  filter: DiscussionFilter = DiscussionFilter.EXCLUDE_DELETED,
) => {
  const params = new URLSearchParams()
  params.set('offset', offset.toString())
  params.set('limit', limit.toString())
  params.set('sort', sort)
  params.set('ascending', ascending.toString())
  params.set('filter', filter)

  const url = `${THREAD}/${threadId}/replies?${params.toString()}`

  return doGet<PaginatedResults<DiscussionReplyBundle>>(
    url,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to get the message URL of a reply. The message
 * URL is the URL to download the file which contains the reply message.
 * Target users: anyone who has READ permission to the project.
 * http://rest-docs.synapse.org/rest/GET/reply/messageUrl.html
 * @param messageKey
 * @param accessToken
 */

export const getReplyMessageUrl = (
  messageKey: string,
  accessToken: string | undefined,
) => {
  return doGet<MessageURL>(
    `/repo/v1/reply/messageUrl?messageKey=${messageKey}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to mark a thread as pinned.
 * Target users: only forum's moderator can mark a thread as pinned.
 * https://rest-docs.synapse.org/rest/PUT/thread/threadId/pin.html
 * @param accessToken
 * @param threadId
 * @returns
 */
export const pinThread = (
  accessToken: string | undefined,
  threadId: string,
) => {
  return doPut<void>(
    `${THREAD_ID(threadId)}/pin`,
    undefined,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to unpin a thread.
 * Target users: only forum's moderator can unpin a thread.
 * https://rest-docs.synapse.org/rest/PUT/thread/threadId/unpin.html
 * @param accessToken
 * @param threadId
 * @returns
 */
export const unPinThread = (
  accessToken: string | undefined,
  threadId: string,
) => {
  return doPut<void>(
    `${THREAD_ID(threadId)}/unpin`,
    undefined,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to get a thread and its statistic given its ID.
 * Target users: anyone who has READ permission to the project.
 * http://rest-docs.synapse.org/rest/GET/thread/threadId.html
 * @param threadId
 * @param accessToken
 */
export const getThread = (
  threadId: string,
  accessToken: string | undefined,
) => {
  return doGet<DiscussionThreadBundle>(
    THREAD_ID(threadId),
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to get the message URL of a reply. The message
 * URL is the URL to download the file which contains the reply message.
 * Target users: anyone who has READ permission to the project.
 * http://rest-docs.synapse.org/rest/GET/thread/messageUrl.html
 * @param messageKey
 * @param accessToken
 */

export const getThreadMessageUrl = (
  messageKey: string,
  accessToken: string | undefined,
) => {
  return doGet<MessageURL>(
    `${THREAD}/messageUrl?messageKey=${messageKey}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to create a new thread in a forum.
 * Target users: anyone who has READ permission to the project.
 * https://rest-docs.synapse.org/rest/POST/thread.html
 * @param accessToken
 * @param createDiscussionThread
 */
export const postThread = (
  accessToken: string | undefined,
  createDiscussionThread: CreateDiscussionThread,
) => {
  return doPost<DiscussionThreadBundle>(
    THREAD,
    createDiscussionThread,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to update the title of a thread.
 * Target users: only the author of the thread can update its title.
 * https://rest-docs.synapse.org/rest/PUT/thread/threadId/title.html
 * @param accessToken
 * @param request
 */
export const putThreadTitle = (
  accessToken: string | undefined,
  request: UpdateThreadTitleRequest,
) => {
  return doPut<DiscussionThreadBundle>(
    `${THREAD}/${request.threadId}/title`,
    { title: request.title },
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to update the message of a thread.
 * Target users: only the author of the thread can update its message.
 * https://rest-docs.synapse.org/rest/PUT/thread/threadId/message.html
 * @param accessToken
 * @param request
 */
export const putThreadMessage = (
  accessToken: string | undefined,
  request: UpdateThreadMessageRequest,
) => {
  return doPut<DiscussionThreadBundle>(
    `${THREAD}/${request.threadId}/message`,
    { messageMarkdown: request.messageMarkdown },
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to mark a thread as deleted.
 * Target users: only forum's moderator can mark a thread as deleted.
 * https://rest-docs.synapse.org/rest/DELETE/thread/threadId.html
 * @param accessToken
 * @param threadId
 * @returns
 */
export const deleteThread = (
  accessToken: string | undefined,
  threadId: string,
) => {
  return doDelete(
    THREAD_ID(threadId),
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export const restoreThread = (
  accessToken: string | undefined,
  threadId: string,
) => {
  return doPut<void>(
    `${THREAD_ID(threadId)}/restore`,
    undefined,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Returns a page of moderators for a given forum ID.
 * Target users: anyone who has READ permission to the project.
 * https://rest-docs.synapse.org/rest/GET/forum/forumId/moderators.html
 * @param accessToken
 * @param forumId
 * @returns
 */
export const getModerators = (
  accessToken: string | undefined,
  forumId: string,
  limit: number = 20,
  offset: number = 0,
) => {
  const params = new URLSearchParams()
  params.set('offset', offset.toString())
  params.set('limit', limit.toString())

  return doGet<PaginatedIds>(
    `${FORUM}/${forumId}/moderators?${params.toString()}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to get the Forum's metadata for a given its ID.
 * Target users: anyone who has READ permission to the project.
 * https://rest-docs.synapse.org/rest/GET/forum/forumId.html
 * @param accessToken
 * @param forumId
 * @returns
 */
export const getForumMetadata = (
  accessToken: string | undefined,
  forumId: string,
) => {
  return doGet<Forum>(
    `${FORUM}/${forumId}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Performs a full text search in the forum defined by the given id.
 * Target users: anyone who has READ permission on the project of the forum.
 * http://rest-docs.synapse.org/rest/POST/forum/forumId/search.html
 * @param discussionSearchRequest
 * @param forumId
 * @param accessToken
 */

export const forumSearch = (
  discussionSearchRequest: DiscussionSearchRequest,
  forumId: string,
  accessToken: string | undefined,
) => {
  return doPost<DiscussionSearchResponse>(
    `${FORUM}/${forumId}/search`,
    discussionSearchRequest,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to get N number of threads for a given forum ID.
 * Target users: anyone who has READ permission to the project.
 * https://rest-docs.synapse.org/rest/GET/forum/forumId/threads.html
 */

export const getForumThreads = (
  accessToken: string | undefined,
  forumId: string,
  offset: number = 0,
  limit: number = 20,
  sort: DiscussionThreadOrder = DiscussionThreadOrder.PINNED_AND_LAST_ACTIVITY,
  ascending: boolean = true,
  filter: DiscussionFilter = DiscussionFilter.EXCLUDE_DELETED,
) => {
  const params = new URLSearchParams()
  params.set('offset', offset.toString())
  params.set('limit', limit.toString())
  params.set('sort', sort)
  params.set('ascending', ascending.toString())
  params.set('filter', filter)

  const url = `${FORUM_THREAD(forumId)}?${params.toString()}`
  return doGet<PaginatedResults<DiscussionThreadBundle>>(
    url,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Search through the history of access approvals filtering by accessor/submitter
 * and optional by access requirement id. The caller must be a member of the ACT.
 * https://rest-docs.synapse.org/rest/POST/accessApproval/search.html
 * @param accessApprovalSearchRequest
 * @param accessToken
 */

export const searchAccessApprovals = (
  accessApprovalSearchRequest: AccessApprovalSearchRequest | undefined,
  accessToken: string | undefined,
) => {
  return doPost<AccessApprovalSearchResponse>(
    '/repo/v1/accessApproval/search',
    accessApprovalSearchRequest,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Performs a search through access submissions that are reviewable by the user and
 * that match the criteria in the given request.
 * @param submissionSearchRequest
 * @param accessToken
 * https://rest-docs.synapse.org/rest/POST/dataAccessSubmission/search.html
 */
export const searchAccessSubmission = (
  submissionSearchRequest: SubmissionSearchRequest,
  accessToken: string | undefined,
) => {
  return doPost<SubmissionSearchResponse>(
    ACCESS_REQUEST_SUBMISSION_SEARCH,
    submissionSearchRequest,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * http://rest-docs.synapse.org/rest/POST/accessRequirement/requirementId/approvedSubmissionInfo.html
 */
export const getApprovedSubmissionInfo = (
  submissionInfoPageRequest: SubmissionInfoPageRequest,
  accessToken: string | undefined,
) => {
  return doPost<SubmissionInfoPage>(
    APPROVED_SUBMISSION_INFO(submissionInfoPageRequest.accessRequirementId),
    submissionInfoPageRequest,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * http://rest-docs.synapse.org/rest/GET/activity/id/generated.html
 */
export const getActivityForEntity = (
  entityId: string,
  versionNumber?: number,
  accessToken?: string,
): Promise<Activity> => {
  const url = ACTIVITY_FOR_ENTITY(
    entityId,
    versionNumber ? `${versionNumber}` : undefined,
  )
  return doGet<Activity>(url, accessToken, BackendDestinationEnum.REPO_ENDPOINT)
}

/**
 * Returns the presigned URL for a user's profile pic. Note that the presigned URL
 * expires after a short time, so it should be used immediately.
 * @param userId
 * @returns A presigned URL that can be used to fetch the profile preview image, or null if the user
 *   does not have a profile image
 */
export function getProfilePicPreviewPresignedUrl(userId: string) {
  return allowNotFoundError(() =>
    doGet<string>(
      PROFILE_IMAGE_PREVIEW(userId) + `?redirect=false`,
      undefined,
      BackendDestinationEnum.REPO_ENDPOINT,
    ),
  )
}

export function getItemsInTrashCan(
  accessToken: string | undefined,
  offset = 0,
  limit = 25,
) {
  return doGet<PaginatedResults<TrashedEntity>>(
    TRASHCAN_VIEW + `?offset=${offset}&limit=${limit}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export function restoreFromTrashCan(
  entityId: string,
  accessToken: string | undefined,
) {
  return doPut<void>(
    TRASHCAN_RESTORE(entityId),
    undefined,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export function purgeFromTrashCan(
  entityId: string,
  accessToken: string | undefined,
) {
  return doPut<void>(
    TRASHCAN_PURGE(entityId),
    undefined,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get the test to become a Certified User
 * https://rest-docs.synapse.org/rest/GET/certifiedUserTest.html
 */
export function getCertifyQuiz(accessToken: string | undefined) {
  return doGet<Quiz>(
    '/repo/v1/certifiedUserTest',
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Submit a response to the Certified User test.
 * https://rest-docs.synapse.org/rest/POST/certifiedUserTestResponse.html
 */
export function postCertifiedUserTestResponse(
  accessToken: string | undefined,
  quizResponse: QuizResponse,
) {
  return doPost<PassingRecord>(
    '/repo/v1/certifiedUserTestResponse',
    quizResponse,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Models the output data created by https://github.com/Sage-Bionetworks/Synapse-User-Geolocation
 * The output files each contain a JSON array where each element matches this type.
 */
export type GeoData = {
  location: string
  latLng: [number, number]
  userIds: string[]
}
const S3_GEODATA_ENDPOINT = 'https://s3.amazonaws.com/geoloc.sagebase.org/'
const GEO_DATA_URL = S3_GEODATA_ENDPOINT + 'allPoints.json'
const API_KEY_URL = S3_GEODATA_ENDPOINT + 'googlemap.txt'

/**
 * Fetches the API key for Google Maps used by Synapse, which can be used to fetch the API script.
 *
 * Note: the production API key is not a secret. It is secure because the key is configured to only
 *  allow Maps API requests from particular referrers (e.g. synapse.org)
 */
export async function getGoogleMapsApiKey(): Promise<string> {
  const response = await fetch(API_KEY_URL)
  return await response.text()
}

/**
 * Fetch Geolocation data for all Synapse users.
 */
export async function getAllSynapseUserGeoData(): Promise<GeoData[]> {
  const response = await fetch(GEO_DATA_URL)
  return (await response.json()) as GeoData[]
}

/**
 * Fetch Geolocation data for a particular Synapse team.
 */
export async function getSynapseTeamGeoData(
  teamId: string,
): Promise<GeoData[]> {
  const response = await fetch(`${S3_GEODATA_ENDPOINT}${teamId}.json`)
  if (response.status == 200) {
    return (await response.json()) as GeoData[]
  } else return []
}

/**
 * This API is used to retrieve all subscriptions one has.
 * Target users: all Synapse users.
 */
export function getAllSubscriptions(
  accessToken: string | undefined,
  limit: number = 100,
  offset: number = 0,
  query: SubscriptionQuery,
) {
  const params = new URLSearchParams()
  params.set('limit', limit.toString())
  params.set('offset', offset.toString())
  params.set('objectType', query.objectType)
  if (query.sortBy) params.set('sortBy', query.sortBy)
  if (query.sortDirection) params.set('sortDirection', query.sortDirection)

  return doGet<SubscriptionPagedResults>(
    `/repo/v1/subscription/all?${params.toString()}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to retrieve a subscription given its ID
 * Target users: Synapse user who created this subscription.
 */
export function getSubscription(
  accessToken: string | undefined,
  subscriptionId: string,
) {
  return doGet<Subscription>(
    `/repo/v1/subscription/${subscriptionId}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Retrieve subscribers for a given topic.
 * https://rest-docs.synapse.org/rest/POST/subscription/subscribers.html
 * @param accessToken
 * @param topic
 * @returns
 */
export function getSubscribers(accessToken: string | undefined, topic: Topic) {
  return doPost<SubscriberPagedResults>(
    '/repo/v1/subscription/subscribers',
    topic,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to subscribe to a topic.
 * Target users: anyone who has READ permission on the object.
 * https://rest-docs.synapse.org/rest/POST/subscription.html
 */
export function postSubscription(
  accessToken: string | undefined,
  topic: Topic,
) {
  return doPost<Subscription>(
    '/repo/v1/subscription',
    topic,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to unsubscribe to a topic.
 * Target users: Synapse user who created this subscription.
 */
export function deleteSubscription(
  accessToken: string | undefined,
  subscriptionId: string,
) {
  return doDelete(
    `/repo/v1/subscription/${subscriptionId}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * This API is used to retrieve subscriptions one has based on a list of provided topics.
 * These topics must have the same objectType.
 * Target users: all Synapse users.
 */
export function postSubscriptionList(
  accessToken: string | undefined,
  request: SubscriptionRequest,
) {
  return doPost<SubscriptionPagedResults>(
    '/repo/v1/subscription/list',
    request,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get the default upload destination for the entity with the given id. The id might refer to the parent container
 * (e.g. a folder or a project) where a file needs to be uploaded.
 *
 * The upload destination is generated according to the default StorageLocationSetting for the project where the entity
 * resides. If the project does not contain any custom StorageLocationSetting the default synapse storage location is
 * used to generate an upload destination.
 *
 * https://rest-docs.synapse.org/rest/GET/entity/id/uploadDestination.html
 * @param containerEntityId
 * @param accessToken
 */
export function getDefaultUploadDestination(
  containerEntityId: string,
  accessToken: string | undefined,
): Promise<UploadDestination> {
  return doGet<UploadDestination>(
    `/file/v1/entity/${containerEntityId}/uploadDestination`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get the upload destination associated with the given storage location id.
 * This will always return an upload destination
 *
 * https://rest-docs.synapse.org/rest/GET/entity/id/uploadDestination/storageLocationId.html
 */
export function getUploadDestinationForStorageLocation(
  parentId: string,
  storageLocationId: number,
  accessToken?: string,
): Promise<UploadDestination> {
  return doGet<UploadDestination>(
    `/file/v1/entity/${parentId}/uploadDestination/${storageLocationId}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Retrieves the DOI for the object. Note: this call only retrieves the DOI association, if it exists.
 * To retrieve the metadata for the object, see GET /doi
 *
 * https://rest-docs.synapse.org/rest/GET/doi/association.html
 */
export function getDOIAssociation(
  accessToken: string | undefined,
  objectId: string,
  objectVersion?: number,
  objectType = 'ENTITY',
): Promise<DoiAssociation | null> {
  const params = new URLSearchParams()
  params.set('type', objectType)
  params.set('id', objectId)
  if (objectVersion) {
    params.set('type', objectVersion.toString())
  }

  return allowNotFoundError(() =>
    doGet<DoiAssociation>(
      `${DOI_ASSOCIATION}?${params.toString()}`,
      accessToken,
      BackendDestinationEnum.REPO_ENDPOINT,
    ),
  )
}

/**
 * Returns the URL for the SWC file handle servlet so the user can retrieve the contents of a Synapse file handle when
 * they follow the link.
 * This effectively provides a stable URL where a user can request the contents of a file and get the same result, without
 * concern for the 30s expiration of presigned file handles returned by the Synapse backend.
 *
 * Note that this URL will only work if the user is logged in to Synapse on the domain of the SWC instance, and the client
 * (typically a browser) can provide the current access token cookie.
 * @param fileHandleId The ID of the file handle to retrieve
 * @param associatedObjectId ID of the object the file handle is associated with. Required if the user is not the one who uploaded the file handle
 * @param associatedObjectType The type of the associated object. Required if the user is not the one who uploaded the file handle
 */
export function getPortalFileHandleServletUrl(
  fileHandleId: string,
  associatedObjectId?: string,
  associatedObjectType?: FileHandleAssociateType,
) {
  const search = new URLSearchParams()
  search.set('fileHandleId', fileHandleId)
  if (associatedObjectId && associatedObjectType) {
    search.set('associatedObjectId', associatedObjectId)
    search.set('associatedObjectType', associatedObjectType.toString())
  }
  return `${getEndpoint(
    BackendDestinationEnum.PORTAL_ENDPOINT,
  )}/Portal/filehandleassociation?${search.toString()}`
}

// https://rest-docs.synapse.org/rest/GET/entity/id/actions/download.html
export const getEntityDownloadActionsRequired = (
  entityId: string,
  accessToken?: string,
) => {
  return doGet<ActionRequiredList>(
    ENTITY_ACTIONS_REQUIRED(entityId),
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://rest-docs.synapse.org/rest/GET/entity/id/actions/download.html
export const getDockerTag = (
  entityId: string,
  accessToken?: string,
  offset: string | number = 0,
  limit: string | number = 20,
  sort: SortBy = SortBy.CREATED_ON,
  sortDirection: Direction = Direction.DESC,
) => {
  const params = new URLSearchParams()
  params.set('offset', offset.toString())
  params.set('limit', limit.toString())
  params.set('sort', sort)
  params.set('sortDirection', sortDirection)
  return doGet<PaginatedResults<DockerCommit>>(
    `/repo/v1/entity/${entityId}/dockerTag?${params.toString()}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

// https://rest-docs.synapse.org/rest/GET/accessRequirement/requirementId/subjects.html
export function getSubjects(
  accessToken: string | undefined,
  requirementId: string,
  nextPageToken?: string,
) {
  const params = new URLSearchParams()
  if (nextPageToken) {
    params.set('nextPageToken', nextPageToken)
  }
  return doGet<{
    subjects: RestrictableObjectDescriptor[]
    nextPageToken?: string
  }>(
    `/repo/v1/accessRequirement/${requirementId}/subjects?${params.toString()}`,
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 *
 *
 * Create a batch of ColumnModel that can be used as columns of a Table.
 * Unlike other objects in Synapse ColumnModels are immutable and reusable
 * and do not have an "owner" or "creator".
 *
 * This method is idempotent, so if the same ColumnModel is passed multiple times,
 * a new ColumnModel will not be created. Instead, the existing ColumnModel will be returned.
 * This also means if two users create identical ColumnModels for their tables they will both
 * receive the same ColumnModel. This call will either create all column models or create none.
 *
 * https://rest-docs.synapse.org/rest/POST/column/batch.html
 * @param accessToken
 * @param columnModels
 */
export function createColumnModels(
  accessToken: string,
  columnModels: SetOptional<ColumnModel, 'id'>[],
): Promise<{
  list: ColumnModel[]
}> {
  return doPost<{
    list: ColumnModel[]
  }>(
    `/repo/v1/column/batch`,
    {
      list: columnModels.map(cm => ({
        ...cm,
        concreteType: 'org.sagebionetworks.repo.model.table.ColumnModel',
      })),
      concreteType: 'org.sagebionetworks.repo.model.ListWrapper',
    },
    accessToken,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

/**
 * Get the list of default ColumnModels for the given viewEntityType and viewTypeMask.
 *
 * https://rest-docs.synapse.org/rest/GET/column/tableview/defaults.html
 *
 * @param viewEntityType  The entity type of the view, if omitted use entityview
 * @param viewTypeMask  Bit mask representing the types to include in the view. Not required for a submission view.
 * For an entity view following are the possible types: (type=): File=0x01, Project=0x02, Table=0x04, Folder=0x08,
 * View=0x10, Docker=0x20, SubmissionView=0x40, Dataset=0x80, DatasetCollection=0x100, MaterializedView=0x200).
 */
export function getDefaultColumnModels(
  viewEntityType?: ViewEntityType,
  viewTypeMask?: number,
): Promise<{ list: ColumnModel[] }> {
  const params = new URLSearchParams()
  if (viewEntityType != null) {
    params.set('viewEntityType', viewEntityType)
  }
  if (viewTypeMask != null) {
    params.set('viewTypeMask', viewTypeMask.toString())
  }
  return doGet<{ list: ColumnModel[] }>(
    `/repo/v1/column/tableview/defaults?${params.toString()}`,
    undefined,
    BackendDestinationEnum.REPO_ENDPOINT,
  )
}

export async function getAnnotationColumnModels(
  request: ViewColumnModelRequest,
  accessToken: string | undefined = undefined,
): Promise<ColumnModel[]> {
  // format function to be callable by getAllOfNextPageTokenPaginatedService
  const fn: FunctionReturningNextPageToken<ColumnModel> = async (
    nextPageToken?: string | null,
  ): Promise<ViewColumnModelResponse> => {
    request.nextPageToken = nextPageToken
    const asyncJobId = await doPost<AsyncJobId>(
      '/repo/v1/column/view/scope/async/start',
      request,
      accessToken,
      BackendDestinationEnum.REPO_ENDPOINT,
    )
    return getAsyncResultBodyFromJobId(
      asyncJobId.token,
      `/repo/v1/column/view/scope/async/get/${asyncJobId.token}`,
      accessToken,
    )
  }

  return getAllOfNextPageTokenPaginatedService(fn)
}
