import { http, HttpResponse } from 'msw'
import {
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_STATUS,
  ACCESS_REQUIREMENT_WIKI_PAGE_KEY,
  ENTITY_ACCESS_REQUIREMENTS,
} from '../../../utils/APIConstants'
import {
  AccessApproval,
  AccessRequirement,
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
  mockAccessRequirements,
  mockAccessRequirementWikiPageKeys,
  mockSelfSignAccessRequirement,
} from '../../mockAccessRequirements'
import { mockApprovedSubmission } from '../../dataaccess/MockSubmission'
import { MOCK_USER_ID } from '../../user/mock_user_profile'

const accessRequirementStatuses: Map<string, AccessRequirementStatus> =
  new Map()

export const getAccessRequirementHandlers = (backendOrigin: string) => [
  http.get<{ id: string }, never, SynapseApiResponse<AccessRequirement>>(
    `${backendOrigin}${ACCESS_REQUIREMENT_BY_ID(':id')}`,

    ({ params }) => {
      let status = 404
      let response: SynapseApiResponse<AccessRequirement> = {
        reason: `Mock Service worker could not find an access requirement with ID ${params.id}`,
      }
      const ar = mockAccessRequirements.find(
        ar => ar.id.toString() === params.id,
      )

      if (ar) {
        response = ar
        status = 200
      }

      return HttpResponse.json(response, { status })
    },
  ),
  http.get<{ id: string }, never, SynapseApiResponse<WikiPageKey>>(
    `${backendOrigin}${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}`,
    ({ params }) => {
      let status = 404
      let response: SynapseApiResponse<WikiPageKey> = {
        reason: `Mock Service worker could not find an access requirement wiki page key with AR ID ${params.id}`,
      }
      const wikiPageKey = mockAccessRequirementWikiPageKeys.find(
        wpk =>
          wpk.ownerObjectType === ObjectType.ACCESS_REQUIREMENT &&
          String(wpk.ownerObjectId) === params.id,
      )

      if (wikiPageKey) {
        response = wikiPageKey
        status = 200
      }

      return HttpResponse.json(response, { status })
    },
  ),
]
export const getAccessRequirementEntityBindingHandlers = (
  backendOrigin: string,
  entityId = ':entityId',
  accessRequirements: AccessRequirement[] = mockAccessRequirements,
) => [
  http.get<
    { entityId: string },
    never,
    SynapseApiResponse<PaginatedResults<AccessRequirement>>
  >(
    `${backendOrigin}${ENTITY_ACCESS_REQUIREMENTS(entityId)}`,

    () => {
      const status = 200
      const response: PaginatedResults<AccessRequirement> = {
        results: accessRequirements,
        totalNumberOfResults: accessRequirements.length,
      }
      return HttpResponse.json(response, { status })
    },
  ),
]

export const getAccessRequirementsBoundToTeamHandler = (
  backendOrigin: string,
  accessRequirements: AccessRequirement[] = [mockSelfSignAccessRequirement],
) =>
  http.get<
    { teamId: string },
    never,
    SynapseApiResponse<PaginatedResults<AccessRequirement>>
  >(
    `${backendOrigin}/repo/v1/team/:teamId/accessRequirement`,

    () => {
      const status = 200
      const response: PaginatedResults<AccessRequirement> = {
        results: accessRequirements,
        totalNumberOfResults: accessRequirements.length,
      }
      return HttpResponse.json(response, { status })
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
    http.get<
      { id: string },
      never,
      SynapseApiResponse<AccessRequirementStatus>
    >(
      `${backendOrigin}${ACCESS_REQUIREMENT_STATUS(':id')}`,

      ({ params }) => {
        let response: AccessRequirementStatus | undefined
        const accessRequirement = mockAccessRequirements.find(
          accessRequirement => params.id === accessRequirement.id.toString(),
        )
        let override = accessRequirementStatuses.get(params.id)
        if (override) {
          response = override
        }
        if (!response && accessRequirement) {
          const isManagedACTAR =
            accessRequirement.concreteType ===
            MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE
          response = {
            accessRequirementId: params.id as string,
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
        return HttpResponse.json(response, { status })
      },
    ),
  ]
}

export function getCreateAccessApprovalHandler(backendOrigin: string) {
  return http.post<
    never,
    CreateAccessApprovalRequest,
    SynapseApiResponse<AccessApproval>
  >(
    `${backendOrigin}/repo/v1/accessApproval`,

    async ({ request }) => {
      const requestBody = await request.json()
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

      return HttpResponse.json(response, { status })
    },
  )
}

export function getAllAccessRequirementHandlers(backendOrigin: string) {
  return [
    ...getAccessRequirementHandlers(backendOrigin),
    ...getAccessRequirementEntityBindingHandlers(backendOrigin),
    getAccessRequirementsBoundToTeamHandler(backendOrigin),
    ...getAccessRequirementStatusHandlers(backendOrigin),
    getCreateAccessApprovalHandler(backendOrigin),
  ]
}
