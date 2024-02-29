import { http, HttpResponse } from 'msw'
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
import { getWikiHandlers } from './handlers/wikiHandlers'
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
} from './handlers/tableQueryHandlers'
import { getEvaluationHandlers } from './handlers/evaluationHandlers'
import { MOCK_ANNOTATION_COLUMNS } from '../mockAnnotationColumns'
import { getPersonalAccessTokenHandlers } from './handlers/personalAccessTokenHandlers'
import getAllChallengeHandlers from './handlers/challengeHandlers'
import getAllTeamHandlers from './handlers/teamHandlers'
import getTrashCanHandlers from './handlers/trashCanHandlers'

// Simple utility type that just indicates that the response body could be an error like the Synapse backend may send.
export type SynapseApiResponse<T> = T | SynapseError

const getHandlers = (backendOrigin: string) => [
  http.options('*', () => {
    return HttpResponse.json(null, { status: 200 })
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
  ...getWikiHandlers(backendOrigin),
  ...getAllAccessRequirementHandlers(backendOrigin),
  ...getDataAccessRequestHandlers(backendOrigin),
  ...getResearchProjectHandlers(backendOrigin),
  ...getFileHandlers(backendOrigin),
  ...getDiscussionHandlers(backendOrigin),
  ...getSubscriptionHandlers(backendOrigin),
  ...getEvaluationHandlers(backendOrigin),
  getCreateColumnModelBatchHandler(backendOrigin),
  ...getAnnotationColumnHandlers(MOCK_ANNOTATION_COLUMNS, backendOrigin),
  ...getDefaultColumnHandlers(backendOrigin),
  ...getPersonalAccessTokenHandlers(backendOrigin),
  ...getAllTeamHandlers(backendOrigin),
  ...getAllChallengeHandlers(backendOrigin),
  ...getTrashCanHandlers(backendOrigin),
]

const handlers = getHandlers(getEndpoint(BackendDestinationEnum.REPO_ENDPOINT))

export { handlers, getHandlers }
