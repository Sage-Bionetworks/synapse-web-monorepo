import { rest } from 'msw'
import {
  ACCESS_REQUIREMENT,
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_SEARCH,
  ACCESS_REQUIREMENT_STATUS,
  ACCESS_REQUIREMENT_WIKI_PAGE_KEY,
  ENTITY_ACCESS_REQUIREMENTS,
} from '../../../utils/APIConstants'
import {
  AccessApproval,
  AccessRequirement,
  AccessRequirementSearchRequest,
  AccessRequirementStatus,
  CreateAccessApprovalRequest,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  ObjectType,
  PaginatedResults,
  SubmissionState,
  WikiPageKey,
} from '@sage-bionetworks/synapse-types'
import { SynapseApiResponse } from '../handlers'
import {
  MOCK_AR_ETAG,
  MOCK_NEWLY_CREATED_AR_ID,
  mockAccessRequirements,
  mockAccessRequirementWikiPageKeys,
  mockSearchResultsPageOne,
  mockSearchResultsPageTwo,
  mockSelfSignAccessRequirement,
} from '../../accessRequirement/mockAccessRequirements'
import { mockApprovedSubmission } from '../../dataaccess/MockSubmission'
import { MOCK_USER_ID } from '../../user/mock_user_profile'

const accessRequirementStatuses: Map<string, AccessRequirementStatus> =
  new Map()

export const getAccessRequirementHandlers = (backendOrigin: string) => [
  rest.get(
    `${backendOrigin}${ACCESS_REQUIREMENT_BY_ID(':id')}`,

    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<AccessRequirement> = {
        reason: `Mock Service worker could not find an access requirement with ID ${req.params.id}`,
      }
      const ar = mockAccessRequirements.find(
        ar => ar.id.toString() === req.params.id,
      )

      if (ar) {
        response = ar
        status = 200
      }

      return res(ctx.status(status), ctx.json(response))
    },
  ),
  rest.get(
    `${backendOrigin}${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}`,
    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<WikiPageKey> = {
        reason: `Mock Service worker could not find an access requirement wiki page key with AR ID ${req.params.id}`,
      }
      const wikiPageKey = mockAccessRequirementWikiPageKeys.find(
        wpk =>
          wpk.ownerObjectType === ObjectType.ACCESS_REQUIREMENT &&
          String(wpk.ownerObjectId) === req.params.id,
      )

      if (wikiPageKey) {
        response = wikiPageKey
        status = 200
      }

      return res(ctx.status(status), ctx.json(response))
    },
  ),
]

export function createAccessRequirement(backendOrigin: string) {
  return rest.post(
    `${backendOrigin}${ACCESS_REQUIREMENT}`,
    async (req, res, ctx) => {
      const requestBody: AccessRequirement = await req.json()
      return res(
        ctx.status(201),
        ctx.json({
          ...requestBody,
          id: MOCK_NEWLY_CREATED_AR_ID,
          etag: MOCK_AR_ETAG,
        }),
      )
    },
  )
}

export function updateAccessRequirement(backendOrigin: string) {
  return rest.put(
    `${backendOrigin}${ACCESS_REQUIREMENT_BY_ID(':id')}`,
    async (req, res, ctx) => {
      const requestBody: AccessRequirement = await req.json()
      return res(ctx.status(200), ctx.json(requestBody))
    },
  )
}

export const getAccessRequirementEntityBindingHandlers = (
  backendOrigin: string,
  entityId = ':entityId',
  accessRequirements: AccessRequirement[] = mockAccessRequirements,
) => [
  rest.get(
    `${backendOrigin}${ENTITY_ACCESS_REQUIREMENTS(entityId)}`,

    async (req, res, ctx) => {
      const status = 200
      const response: PaginatedResults<AccessRequirement> = {
        results: accessRequirements,
        totalNumberOfResults: accessRequirements.length,
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),
]

export const getAccessRequirementsBoundToTeamHandler = (
  backendOrigin: string,
  accessRequirements: AccessRequirement[] = [mockSelfSignAccessRequirement],
) =>
  rest.get(
    `${backendOrigin}/repo/v1/team/:teamId/accessRequirement`,

    async (req, res, ctx) => {
      const status = 200
      const response: PaginatedResults<AccessRequirement> = {
        results: accessRequirements,
        totalNumberOfResults: accessRequirements.length,
      }
      return res(ctx.status(status), ctx.json(response))
    },
  )

export const getAccessRequirementStatusHandlers = (
  backendOrigin: string,
  arStatusOverrides?: AccessRequirementStatus[],
) => {
  if (arStatusOverrides) {
    arStatusOverrides.forEach(override => {
      accessRequirementStatuses.set(override.accessRequirementId, override)
    })
  }
  return [
    rest.get(
      `${backendOrigin}${ACCESS_REQUIREMENT_STATUS(':id')}`,

      async (req, res, ctx) => {
        let response: AccessRequirementStatus | undefined
        const accessRequirement = mockAccessRequirements.find(
          accessRequirement =>
            req.params.id === accessRequirement.id.toString(),
        )
        const override = accessRequirementStatuses.get(req.params.id as string)
        if (override) {
          response = override
        }
        if (!response && accessRequirement) {
          const isManagedACTAR =
            accessRequirement.concreteType ===
            MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE
          response = {
            accessRequirementId: req.params.id as string,
            concreteType: isManagedACTAR
              ? 'org.sagebionetworks.repo.model.dataaccess.ManagedACTAccessRequirementStatus'
              : 'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
            isApproved: true,
            currentSubmissionStatus: isManagedACTAR
              ? {
                  submissionId: mockApprovedSubmission.id,
                  submittedBy: mockApprovedSubmission.submittedBy,
                  modifiedOn: mockApprovedSubmission.modifiedOn,
                  state: SubmissionState.APPROVED,
                }
              : undefined,
          }
        }
        const status = response ? 200 : 404
        return res(ctx.status(status), ctx.json(response))
      },
    ),
  ]
}

export function getCreateAccessApprovalHandler(backendOrigin: string) {
  return rest.post(
    `${backendOrigin}/repo/v1/accessApproval`,

    async (req, res, ctx) => {
      const requestBody: CreateAccessApprovalRequest = await req.json()
      const status = 200
      const response: AccessApproval = {
        ...requestBody,
        id: 123,
        etag: 'mock-etag',
        createdOn: new Date().toISOString(),
        modifiedOn: new Date().toISOString(),
        createdBy: String(MOCK_USER_ID),
        modifiedBy: String(MOCK_USER_ID),
      }

      // Update the corresponding status object
      // TODO: Status should be inferred from the presence of an access approval, rather than the other way around
      accessRequirementStatuses.set(String(requestBody.requirementId), {
        accessRequirementId: String(requestBody.requirementId),
        concreteType:
          'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
        isApproved: true,
      })

      return res(ctx.status(status), ctx.json(response))
    },
  )
}

export function getAccessRequirementSearchHandler(backendOrigin: string) {
  return rest.post(
    `${backendOrigin}${ACCESS_REQUIREMENT_SEARCH}`,

    async (req, res, ctx) => {
      let response
      if (
        (await req.json<AccessRequirementSearchRequest>()).nextPageToken ===
        mockSearchResultsPageOne.nextPageToken
      ) {
        response = mockSearchResultsPageTwo
      } else {
        response = mockSearchResultsPageOne
      }

      return res(ctx.status(200), ctx.json(response))
    },
  )
}

export function getAllAccessRequirementHandlers(backendOrigin: string) {
  return [
    ...getAccessRequirementHandlers(backendOrigin),
    createAccessRequirement(backendOrigin),
    updateAccessRequirement(backendOrigin),
    ...getAccessRequirementEntityBindingHandlers(backendOrigin),
    getAccessRequirementsBoundToTeamHandler(backendOrigin),
    ...getAccessRequirementStatusHandlers(backendOrigin),
    getCreateAccessApprovalHandler(backendOrigin),
    getAccessRequirementSearchHandler(backendOrigin),
  ]
}
