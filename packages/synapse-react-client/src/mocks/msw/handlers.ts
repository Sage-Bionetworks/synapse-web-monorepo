import { getValidationSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { BaseError } from '@sage-bionetworks/synapse-client'
import { http, HttpHandler } from 'msw'
import { MOCK_ANNOTATION_COLUMN_RESPONSE } from '../mockAnnotationColumns'
import { getAllAccessRequirementAclHandlers } from './handlers/accessRequirementAclHandlers'
import { getAllAccessRequirementHandlers } from './handlers/accessRequirementHandlers'
import getAllChallengeHandlers from './handlers/challengeHandlers'
import { getDataAccessRequestHandlers } from './handlers/dataAccessRequestHandlers'
import { getDiscussionHandlers } from './handlers/discussionHandlers'
import { getDoiHandler } from './handlers/doiHandlers'
import { getEntityHandlers } from './handlers/entityHandlers'
import { getEvaluationHandlers } from './handlers/evaluationHandlers'
import { getFeatureFlagsOverride } from './handlers/featureFlagHandlers'
import { getFileHandlers } from './handlers/fileHandlers'
import { getGridHandlers } from './handlers/gridHandlers'
import { getMessageHandlers } from './handlers/messageHandlers'
import { getPersonalAccessTokenHandlers } from './handlers/personalAccessTokenHandlers'
import { getResearchProjectHandlers } from './handlers/researchProjectHandlers'
import { getResetTwoFactorAuthHandlers } from './handlers/resetTwoFactorAuthHandlers'
import { getRealmHandlers } from './handlers/realmHandlers'
import { getShortIoHandlers } from './handlers/shortIoHandlers'
import { getSubscriptionHandlers } from './handlers/subscriptionHandlers'
import {
  getAnnotationColumnHandlers,
  getCreateColumnModelBatchHandler,
  getDefaultColumnHandlers,
  getHandlersForTableQuery,
} from './handlers/tableQueryHandlers'
import getAllTeamHandlers from './handlers/teamHandlers'
import {
  getCurrentUserCertifiedValidatedHandler,
  getUserProfileHandlers,
} from './handlers/userProfileHandlers'
import { getWebhookHandlers } from './handlers/webhookHandlers'
import { getAllWikiHandlers } from './handlers/wikiHandlers'
import { getDataciteHandler } from './handlers/dataciteHandlers'
import { getAuthHandlers } from './handlers/authHandlers'

// Simple utility type that just indicates that the response body could be an error like the Synapse backend may send.
export type SynapseApiResponse<TData, TError = BaseError> = TData | TError

/**
 * Storybook MSW plugin supports setting named groups of handlers to simplify handler reuse and specific story-level overrides.
 */
export function getHandlersForStorybook(
  backendOrigin: string,
  portalOrigin?: string,
): Record<string, HttpHandler[]> {
  return {
    base: [
      http.options('*', () => {
        return new Response('', { status: 200 })
      }),
    ],
    auth: getAuthHandlers(backendOrigin),
    entity: getEntityHandlers(backendOrigin),
    userProfile: getUserProfileHandlers(backendOrigin),
    certification: [
      getCurrentUserCertifiedValidatedHandler(backendOrigin, true, true),
    ],
    wiki: getAllWikiHandlers(backendOrigin),
    accessRequirement: getAllAccessRequirementHandlers(backendOrigin),
    accessRequirementAcl: getAllAccessRequirementAclHandlers(backendOrigin),
    dataAccessRequest: getDataAccessRequestHandlers(backendOrigin),
    researchProject: getResearchProjectHandlers(backendOrigin),
    file: getFileHandlers(backendOrigin),
    grid: getGridHandlers(backendOrigin),
    discussion: getDiscussionHandlers(backendOrigin),
    subscription: getSubscriptionHandlers(backendOrigin),
    evaluation: getEvaluationHandlers(backendOrigin),
    createColumnModelBatch: [getCreateColumnModelBatchHandler(backendOrigin)],
    annotationColumn: getAnnotationColumnHandlers(
      MOCK_ANNOTATION_COLUMN_RESPONSE,
      backendOrigin,
    ),
    defaultColumn: getDefaultColumnHandlers(backendOrigin),
    personalAccessToken: getPersonalAccessTokenHandlers(backendOrigin),
    team: getAllTeamHandlers(backendOrigin),
    challenge: getAllChallengeHandlers(backendOrigin),
    resetTwoFactorAuth: getResetTwoFactorAuthHandlers(backendOrigin),
    message: getMessageHandlers(backendOrigin),
    realm: getRealmHandlers(backendOrigin),
    featureFlags: [getFeatureFlagsOverride({ portalOrigin })],
    tableQuery: getHandlersForTableQuery(backendOrigin),
    doi: getDoiHandler(backendOrigin),
    shortIo: getShortIoHandlers(),
    webhook: getWebhookHandlers(backendOrigin),
    validationSchema: getValidationSchemaHandlers(backendOrigin),
    datacite: getDataciteHandler(),
  }
}

function getHandlers(
  backendOrigin: string,
  portalOrigin?: string,
): HttpHandler[] {
  return Object.values(
    getHandlersForStorybook(backendOrigin, portalOrigin),
  ).flat()
}

const handlers = getHandlers(
  getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
  getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT),
)

export { handlers, getHandlers }
