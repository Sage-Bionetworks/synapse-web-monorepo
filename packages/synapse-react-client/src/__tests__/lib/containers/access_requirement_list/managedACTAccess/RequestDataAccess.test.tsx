import { render, screen } from '@testing-library/react'
import React from 'react'
import RequestDataAccess from '../../../../../lib/containers/access_requirement_list/managedACTAccess/RequestDataAccess'
import { createWrapper } from '../../../../../lib/testutils/TestingLibraryUtils'
import {
  ACCESS_TYPE,
  ManagedACTAccessRequirement,
  SubmissionState,
} from '../../../../../lib/utils/synapseTypes'

describe('RequestDataAccess: basic functionality', () => {
  const mockAccessRequirement: ManagedACTAccessRequirement = {
    concreteType: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
    isCertifiedUserRequired: true,
    isValidatedProfileRequired: true,
    isDUCRequired: true,
    ducTemplateFileHandleId: '123',
    isIRBApprovalRequired: true,
    areOtherAttachmentsRequired: true,
    expirationPeriod: 1,
    isIDUPublic: true,
    isIDURequired: true,
    versionNumber: 1,
    id: 1234,
    etag: '12345',
    createdOn: '',
    createdBy: '',
    modifiedOn: '',
    modifiedBy: '',
    subjectIds: [],
    accessType: ACCESS_TYPE.UPDATE,
  }

  const mockAccessRequirementStatus = {
    currentSubmissionStatus: {
      submissionId: 'string',
      submittedBy: 'string',
      rejectedReason: 'string',
      state: SubmissionState.SUBMITTED,
      modifiedOn: 'string',
    },
    accessRequirementId: 'string',
    concreteType: 'string',
    isApproved: true,
    expiredOn: 'string',
  }

  test('should show request access button regardless logged in or not', () => {
    delete mockAccessRequirementStatus.currentSubmissionStatus.state
    render(
      <RequestDataAccess
        user={undefined}
        wikiPage={undefined}
        entityId={'123'}
        accessRequirement={mockAccessRequirement}
        accessRequirementStatus={mockAccessRequirementStatus}
        showButton={true}
      />,
      {
        wrapper: createWrapper(),
      },
    )
    screen.getAllByRole('button', { name: 'Request access' })
  })
})
