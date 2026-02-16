import { getValidationSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { BaseError } from '@sage-bionetworks/synapse-client'
import { http, HttpResponse } from 'msw'
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
import { realmHandlers } from './handlers/realmHandlers'
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

// Simple utility type that just indicates that the response body could be an error like the Synapse backend may send.
export type SynapseApiResponse<TData, TError = BaseError> = TData | TError

const getHandlers = (backendOrigin: string, portalOrigin?: string) => [
  http.options('*', () => {
    return new Response('', { status: 200 })
  }),
  http.get(`${backendOrigin}/auth/v1/authenticatedOn`, () => {
    return HttpResponse.json(
      { authenticatedOn: new Date().toISOString() },
      { status: 200 },
    )
  }),
  ...getEntityHandlers(backendOrigin),
  ...getUserProfileHandlers(backendOrigin),
  getCurrentUserCertifiedValidatedHandler(backendOrigin, true, true),
  ...getAllWikiHandlers(backendOrigin),
  ...getAllAccessRequirementHandlers(backendOrigin),
  ...getAllAccessRequirementAclHandlers(backendOrigin),
  ...getDataAccessRequestHandlers(backendOrigin),
  ...getResearchProjectHandlers(backendOrigin),
  ...getFileHandlers(backendOrigin),
  ...getGridHandlers(backendOrigin),
  ...getDiscussionHandlers(backendOrigin),
  ...getSubscriptionHandlers(backendOrigin),
  ...getEvaluationHandlers(backendOrigin),
  getCreateColumnModelBatchHandler(backendOrigin),
  ...getAnnotationColumnHandlers(
    MOCK_ANNOTATION_COLUMN_RESPONSE,
    backendOrigin,
  ),
  ...getDefaultColumnHandlers(backendOrigin),
  ...getPersonalAccessTokenHandlers(backendOrigin),
  ...getAllTeamHandlers(backendOrigin),
  ...getAllChallengeHandlers(backendOrigin),
  ...getResetTwoFactorAuthHandlers(backendOrigin),
  ...getMessageHandlers(backendOrigin),
  ...realmHandlers,
  getFeatureFlagsOverride({ portalOrigin }),
  ...getHandlersForTableQuery(backendOrigin),
  ...getDoiHandler(backendOrigin),
  ...getShortIoHandlers(),
  ...getWebhookHandlers(backendOrigin),
  ...getValidationSchemaHandlers(backendOrigin),
  ...getDataciteHandler(),
]

const handlers = getHandlers(
  getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
  getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT),
)

export { handlers, getHandlers }
