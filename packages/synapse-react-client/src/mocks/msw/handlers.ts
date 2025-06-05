import { getValidationSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { SynapseError } from '@/utils/SynapseError'
import { rest } from 'msw'
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

// Simple utility type that just indicates that the response body could be an error like the Synapse backend may send.
export type SynapseApiResponse<T> = T | SynapseError

const getHandlers = (backendOrigin: string, portalOrigin?: string) => [
  rest.options('*', async (req, res, ctx) => {
    return res(ctx.status(200))
  }),
  rest.get(
    `${backendOrigin}/auth/v1/authenticatedOn`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ authenticatedOn: new Date().toISOString() }),
      )
    },
  ),
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
  getFeatureFlagsOverride({ portalOrigin }),
  ...getHandlersForTableQuery(backendOrigin),
  ...getDoiHandler(backendOrigin),
  ...getShortIoHandlers(),
  ...getWebhookHandlers(backendOrigin),
  ...getValidationSchemaHandlers(backendOrigin),
]

const handlers = getHandlers(
  getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
  getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT),
)

export { handlers, getHandlers }
