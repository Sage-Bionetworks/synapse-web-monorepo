import { rest } from 'msw'
import { getEntityHandlers } from './handlers/entityHandlers'
import {
  getCurrentUserCertifiedValidatedHandler,
  getUserProfileHandlers,
} from './handlers/userProfileHandlers'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import { getAllAccessRequirementHandlers } from './handlers/accessRequirementHandlers'
import { getAllWikiHandlers } from './handlers/wikiHandlers'
import { getDataAccessRequestHandlers } from './handlers/dataAccessRequestHandlers'
import { getResearchProjectHandlers } from './handlers/researchProjectHandlers'
import { getFileHandlers } from './handlers/fileHandlers'
import { SynapseError } from '../../utils/SynapseError'
import { getDiscussionHandlers } from './handlers/discussionHandlers'
import { getSubscriptionHandlers } from './handlers/subscriptionHandlers'
import {
  getAnnotationColumnHandlers,
  getCreateColumnModelBatchHandler,
  getDefaultColumnHandlers,
  getHandlersForTableQuery,
} from './handlers/tableQueryHandlers'
import { getEvaluationHandlers } from './handlers/evaluationHandlers'
import { MOCK_ANNOTATION_COLUMN_RESPONSE } from '../mockAnnotationColumns'
import { getPersonalAccessTokenHandlers } from './handlers/personalAccessTokenHandlers'
import getAllChallengeHandlers from './handlers/challengeHandlers'
import getAllTeamHandlers from './handlers/teamHandlers'
import { getAllAccessRequirementAclHandlers } from './handlers/accessRequirementAclHandlers'
import { getResetTwoFactorAuthHandlers } from './handlers/resetTwoFactorAuthHandlers'
import { getMessageHandlers } from './handlers/messageHandlers'
import { getFeatureFlagsOverride } from './handlers/featureFlagHandlers'
import { getDoiHandler } from './handlers/doiHandlers'

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
]

const handlers = getHandlers(
  getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
  getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT),
)

export { handlers, getHandlers }
