import { AccessType, Renewal, Request } from '@sage-bionetworks/synapse-types'
import { mockManagedACTAccessRequirement } from '../accessRequirement/mockAccessRequirements'
import { MOCK_USER_ID, MOCK_USER_ID_2 } from '../user/mock_user_profile'
import {
  MOCK_DATA_ACCESS_SUBMISSION_ATTACHMENT_1_FILE_HANDLE_ID,
  MOCK_DATA_ACCESS_SUBMISSION_ATTACHMENT_2_FILE_HANDLE_ID,
  MOCK_DATA_ACCESS_SUBMISSION_IRB_APPROVAL_FILE_HANDLE_ID,
  MOCK_DUC_SUBMISSION_FILE_HANDLE_ID,
} from '../mock_file_handle'
import { MOCK_RESEARCH_PROJECT_ID } from './MockResearchProject'

export const MOCK_DATA_ACCESS_REQUEST_ID = '3541518'
export const MOCK_DATA_ACCESS_RENEWAL_ID = '49813181'

export const MOCK_DATA_ACCESS_REQUEST: Request = {
  id: MOCK_DATA_ACCESS_REQUEST_ID,
  accessorChanges: [
    {
      userId: String(MOCK_USER_ID),
      type: AccessType.GAIN_ACCESS,
    },
  ],
  attachments: [
    MOCK_DATA_ACCESS_SUBMISSION_ATTACHMENT_1_FILE_HANDLE_ID,
    MOCK_DATA_ACCESS_SUBMISSION_ATTACHMENT_2_FILE_HANDLE_ID,
  ],
  createdBy: String(MOCK_USER_ID),
  createdOn: '2023-04-19T13:06:51+00:00',
  ducFileHandleId: MOCK_DUC_SUBMISSION_FILE_HANDLE_ID,
  irbFileHandleId: MOCK_DATA_ACCESS_SUBMISSION_IRB_APPROVAL_FILE_HANDLE_ID,
  modifiedBy: String(MOCK_USER_ID),
  modifiedOn: '2023-04-19T13:06:51+00:00',
  researchProjectId: MOCK_RESEARCH_PROJECT_ID,
  etag: '0',
  accessRequirementId: String(mockManagedACTAccessRequirement.id),
  concreteType: 'org.sagebionetworks.repo.model.dataaccess.Request',
}

export const MOCK_DATA_ACCESS_RENEWAL: Renewal = {
  id: MOCK_DATA_ACCESS_RENEWAL_ID,
  accessorChanges: [
    {
      userId: String(MOCK_USER_ID),
      type: AccessType.GAIN_ACCESS,
    },
    {
      userId: String(MOCK_USER_ID_2),
      type: AccessType.REVOKE_ACCESS,
    },
  ],
  attachments: [
    MOCK_DATA_ACCESS_SUBMISSION_ATTACHMENT_1_FILE_HANDLE_ID,
    MOCK_DATA_ACCESS_SUBMISSION_ATTACHMENT_2_FILE_HANDLE_ID,
  ],
  createdBy: String(MOCK_USER_ID),
  createdOn: '2023-04-19T13:06:51+00:00',
  ducFileHandleId: MOCK_DUC_SUBMISSION_FILE_HANDLE_ID,
  irbFileHandleId: MOCK_DATA_ACCESS_SUBMISSION_IRB_APPROVAL_FILE_HANDLE_ID,
  modifiedBy: String(MOCK_USER_ID),
  modifiedOn: '2023-04-19T13:06:51+00:00',
  researchProjectId: MOCK_RESEARCH_PROJECT_ID,
  etag: '0',
  accessRequirementId: String(mockManagedACTAccessRequirement.id),
  concreteType: 'org.sagebionetworks.repo.model.dataaccess.Renewal',
  publication:
    'My cool paper that used this data: https://doi.org/10.1016/j.cell.2011.02.013',
  summaryOfUse:
    'We ran a χ² test of homogeneity to determine if this data was representative of the rest of the population with' +
    ' consideration for similar large data collections.',
}
