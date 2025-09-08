/**
 * Separating API endpoints into their own constants file
 */

import { ObjectType } from '@sage-bionetworks/synapse-types'
import { getEndpoint, BackendDestinationEnum } from './functions/getEndpoint'

export const BACKEND_ENDPOINT = `${getEndpoint(
  BackendDestinationEnum.REPO_ENDPOINT,
)}`

export const REPO = `/repo/v1`
export const AUTH = `/auth/v1`
export const FILE = `/file/v1`

const ASYNC_START = '/async/start'
const ASYNC_GET = '/async/get'

export const OAUTH_ID = (id: string | number) => `${AUTH}/oauth2/client/${id}`
export const OAUTH_CLIENT_ACL = (id: string | number) => `${OAUTH_ID(id)}/acl`

export const ENTITY = `${REPO}/entity`
export const ENTITY_ALIAS = (alias: string) => `${REPO}/entity/alias/${alias}`
export const ENTITY_ID = (id: string | number) => `${REPO}/entity/${id}`
/**
 * Some services allow (but do not require) you to specify the version in the path.
 */
export const ENTITY_ID_VERSION = (
  id: string | number,
  version?: string | number,
) => `${REPO}/entity/${id}${version ? `/version/${version}` : ''}`
export const ENTITY_ID_VERSIONS = (id: string | number) =>
  `${REPO}/entity/${id}/version`
export const ENTITY_BUNDLE_V2 = (
  id: string | number,
  version?: string | number,
) => `${ENTITY_ID_VERSION(id, version)}/bundle2`
export const ENTITY_ACCESS = (id: string | number) =>
  `${REPO}/entity/${id}/access`
export const ENTITY_ACL = (id: string | number) => `${ENTITY_ID(id)}/acl`
export const ENTITY_EVALUATION = (id: string | number) =>
  `${ENTITY_ID(id)}/evaluation`
export const ENTITY_PATH = (id: string | number) => `${ENTITY_ID(id)}/path`
export const ENTITY_PERMISSIONS = (id: string | number) =>
  `${ENTITY_ID(id)}/permissions`
export const ENTITY_HEADER_BY_ID = (id: string | number) =>
  `${ENTITY_ID(id)}/type`
export const ENTITY_HEADERS = `${REPO}/entity/header`

export const ENTITY_JSON = (id: string | number) => `${REPO}/entity/${id}/json`
export const ENTITY_VERSION_JSON = (
  id: string | number,
  versionNumber: number,
) => `${REPO}/entity/${id}/version/${versionNumber}/json`

export const ENTITY_SCHEMA = (id: string | number) =>
  `${REPO}/entity/${id}/schema`
export const ENTITY_SCHEMA_BINDING = (id: string | number) =>
  `${ENTITY_SCHEMA(id)}/binding`
export const ENTITY_SCHEMA_VALIDATION = (id: string | number) =>
  `${ENTITY_SCHEMA(id)}/validation`

export const ENTITY_ACCESS_REQUIREMENTS = (entityId: string | number) =>
  `${ENTITY_ID(entityId)}/accessRequirement`

export const TABLE_QUERY_ASYNC_START = (id: string | number) =>
  `${ENTITY_ID(id)}/table/query/async/start`

export const TABLE_QUERY_ASYNC_GET = (
  entityId: string | number,
  asyncJobToken: string,
) => `${ENTITY_ID(entityId)}/table/query/async/get/${asyncJobToken}`

export const ASYNCHRONOUS_JOB_TOKEN = (asyncJobToken: string) =>
  `${REPO}/asynchronous/job/${asyncJobToken}`

export const USER_PROFILE_ENDPOINT = `${REPO}/userProfile`

export const SCHEMA = `${REPO}/schema`
export const REGISTERED_SCHEMA = `${REPO}/schema/type/registered`
export const REGISTERED_SCHEMA_ID = (schema$id: string | number) =>
  `${REPO}/schema/type/registered/${schema$id}`
export const SCHEMA_VALIDATION_START = `${SCHEMA}/type/validation${ASYNC_START}`
export const SCHEMA_VALIDATION_GET = (asyncJobId: string | number) =>
  `${SCHEMA}/type/validation${ASYNC_GET}/${asyncJobId}`

export const USER = `${REPO}/user`
export const USER_BUNDLE = `${USER}/bundle`
export const USER_ID = (id: string | number) => `${USER}/${id}`
export const USER_ID_BUNDLE = (id: string | number) => `${USER_ID(id)}/bundle`

export const USER_PROFILE = `${REPO}/userProfile`
export const USER_PROFILE_ID = (id: string | number) => `${USER_PROFILE}/${id}`

export const NOTIFICATION_EMAIL = `${REPO}/notificationEmail`
export const ALIAS_AVAILABLE = `${REPO}/principal/available`
export const REGISTER_ACCOUNT_STEP_1 = (portalEndpoint: string) =>
  `${REPO}/account/emailValidation?portalEndpoint=${portalEndpoint}`
export const REGISTER_ACCOUNT_STEP_2 = `${REPO}/account2`
export const TERMS_OF_USE = `${AUTH}/termsOfUse2`
export const TERMS_OF_USE_INFO = `${TERMS_OF_USE}/info`
export const TERMS_OF_USE_STATUS = `${TERMS_OF_USE}/status`
const PROJECT = (projectId: string) => `${REPO}/project/${projectId}`
export const PROJECT_STORAGE_USAGE = (projectId: string) =>
  `${PROJECT(projectId)}/storage/usage`
export const VERIFICATION_SUBMISSION = `${REPO}/verificationSubmission`
export const VERIFICATION_SUBMISSION_STATE = (id: string) =>
  `${VERIFICATION_SUBMISSION}/${id}/state`
export const CHANGE_PASSWORD = `${AUTH}/user/changePassword`

export const ACCESS_REQUIREMENT = `${REPO}/accessRequirement`
export const ACCESS_REQUIREMENT_SEARCH = `${ACCESS_REQUIREMENT}/search`
export const ACCESS_REQUEST_SUBMISSION_SEARCH = `${REPO}/dataAccessSubmission/search`

export const ACCESS_REQUIREMENT_BY_ID = (id: string | number) =>
  `${ACCESS_REQUIREMENT}/${id}`

export const ACCESS_REQUIREMENT_ACL = (id: string | number) =>
  ACCESS_REQUIREMENT_BY_ID(id) + '/acl'

export const ACCESS_REQUIREMENT_STATUS = (id: string | number) =>
  ACCESS_REQUIREMENT_BY_ID(id) + '/status'

export const ACCESS_REQUIREMENT_WIKI_PAGE_KEY = (id: string | number) =>
  // Note that this is `access_requirement` not `accessRequirement`!
  `${REPO}/access_requirement/${id}/wikikey`

export const FAVORITES = `${REPO}/favorite`

export const USER_GROUP_HEADERS = `${REPO}/userGroupHeaders`
export const USER_GROUP_HEADERS_BATCH = `${REPO}/userGroupHeaders/batch`

export const DATA_ACCESS_SUBMISSION_BY_ID = (id: string | number) =>
  `${REPO}/dataAccessSubmission/${id}`

export const PROFILE_IMAGE_PREVIEW = (userId: string) =>
  `${REPO}/userProfile/${userId}/image/preview`

export const APPROVED_SUBMISSION_INFO = (
  accessRequirementId: string | number,
) => ACCESS_REQUIREMENT_BY_ID(accessRequirementId) + `/approvedSubmissionInfo`

export const EVALUATION = `${REPO}/evaluation`
export const EVALUATION_BY_ID = (id: string | number) => EVALUATION + `/${id}`

export const ACTIVITY_FOR_ENTITY = (entityId: string, versionNumber?: string) =>
  versionNumber
    ? `${REPO}/entity/${entityId}/version/${versionNumber}/generatedBy`
    : `${REPO}/entity/${entityId}/generatedBy`
export const TRASHCAN = `${REPO}/trashcan`
export const TRASHCAN_VIEW = `${TRASHCAN}/view`
export const TRASHCAN_RESTORE = (id: string) => `${TRASHCAN}/restore/${id}`
export const TRASHCAN_PURGE = (id: string) => `${TRASHCAN}/purge/${id}`

export const TEAM = (teamId: string | number) => `${REPO}/team/${teamId}`
export const TEAM_ID_MEMBER_ID = (
  teamId: string | number,
  memberId: string | number,
) => TEAM(teamId) + `/member/${memberId}`
export const TEAM_MEMBERS = (teamId: string | number) =>
  `${REPO}/teamMembers/${teamId}`

const notificationUnsubscribeEndpoint = 'https://www.synapse.org/SignedToken:'
const teamEndpoint = 'https://www.synapse.org/Team:'

export const TEAM_MEMBER = `${REPO}/teamMember/?teamEndpoint=${teamEndpoint}&notificationUnsubscribeEndpoint=${notificationUnsubscribeEndpoint}`
export const TEAM_ID_MEMBER_ID_WITH_NOTIFICATION = (
  teamId: string | number,
  memberId: string | number,
) =>
  TEAM_ID_MEMBER_ID(teamId, memberId) +
  `?teamEndpoint=${teamEndpoint}&notificationUnsubscribeEndpoint=${notificationUnsubscribeEndpoint}`
export const MEMBERSHIP_INVITATION = (id: string) =>
  `${REPO}/membershipInvitation/${id}`
export const INVITEE_VERIFICATION_SIGNED_TOKEN = (id: string) =>
  `${REPO}/membershipInvitation/${id}/inviteeVerificationSignedToken`
export const BIND_INVITATION_TO_AUTHENTICATED_USER = (id: string) =>
  `${REPO}/membershipInvitation/${id}/inviteeId`

export const FORUM = `${REPO}/forum`
export const FORUM_THREAD = (id: string) => `${FORUM}/${id}/threads`

export const THREAD = `${REPO}/thread`
export const THREAD_ID = (id: string) => `${THREAD}/${id}`
export const THREAD_REPLIES = (id: string) => `${THREAD_ID(id)}/replies`

export const AGENT = `${REPO}/agent`
export const AGENT_SESSION = `${AGENT}/session`
export const UPDATE_AGENT_SESSION = (sessionId?: string) =>
  `${AGENT_SESSION}/${sessionId}`
export const LIST_AGENT_SESSIONS = `${AGENT_SESSION}s/list`
export const AGENT_SESSION_HISTORY = (sessionId?: string) =>
  `${AGENT_SESSION}/history/${sessionId}`
export const START_CHAT_ASYNC = `${AGENT}/chat/async/start`
export const GET_CHAT_ASYNC = (jobId: string | number) =>
  `${AGENT}/chat/async/get/${jobId}`

export const AGENT_CHAT_TRACE = (jobId: string | number) =>
  `${AGENT}/chat/trace/${jobId}`

export const DOI = `${REPO}/doi`
export const DOI_ASSOCIATION = `${DOI}/association`

export const ACCESS_APPROVAL = `${REPO}/accessApproval`
export const ACCESS_APPROVAL_BY_ID = (id: string | number) =>
  `${ACCESS_APPROVAL}/${id}`

export const DATA_ACCESS_REQUEST = `${REPO}/dataAccessRequest`
export const DATA_ACCESS_REQUEST_SUBMISSION = (id: string | number) =>
  `${DATA_ACCESS_REQUEST}/${id}/submission`
export const ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE = (
  accessRequirementId: string | number,
) =>
  `${ACCESS_REQUIREMENT_BY_ID(accessRequirementId)}/dataAccessRequestForUpdate`

export const RESEARCH_PROJECT = `${REPO}/researchProject`
export const ACCESS_REQUIREMENT_RESEARCH_PROJECT_FOR_UPDATE = (
  accessRequirementId: string | number,
) => `${ACCESS_REQUIREMENT_BY_ID(accessRequirementId)}/researchProjectForUpdate`

export const FILE_HANDLE = `${FILE}/fileHandle`
export const FILE_HANDLE_BATCH = `${FILE_HANDLE}/batch`

export const PROJECTS = `${REPO}/projects`
export const ENTITY_ACTIONS_REQUIRED = (entityId: string) =>
  `${REPO}/entity/${entityId}/actions/download`

export const WIKI_OBJECT_TYPE = (objectType: ObjectType) => {
  return `${REPO}/${ObjectType[objectType].toLowerCase()}`
}

export const WIKI_PAGE = (
  ownerObjectType: ObjectType,
  ownerObjectId: string,
) => {
  return `${WIKI_OBJECT_TYPE(ownerObjectType)}/${ownerObjectId}/wiki`
}
export const WIKI_PAGE_ID = (
  ownerObjectType: ObjectType,
  ownerObjectId: string,
  wikiPageId: string | undefined,
) => {
  return `${WIKI_PAGE(ownerObjectType, ownerObjectId)}/${wikiPageId ?? ''}`
}

export const SESSION_ACCESS_TOKEN = `${AUTH}/sessionAccessToken`
export const ALL_USER_SESSION_TOKENS = (targetUserId: string | number) =>
  `${AUTH}/user/${targetUserId}/sessionAccessToken/all`
