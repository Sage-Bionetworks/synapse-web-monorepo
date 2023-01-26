import { render, screen } from '@testing-library/react'
import React from 'react'
import ManagedACTAccessRequirementComponent from '../../../../../lib/containers/access_requirement_list/managedACTAccess/ManagedACTAccessRequirement'
import { createWrapper } from '../../../../../lib/testutils/TestingLibraryUtils'
import {
  ACCESS_TYPE,
  ManagedACTAccessRequirement,
  SubmissionState,
} from '../../../../../lib/utils/synapseTypes'

describe('ManagedACTAccessRequirement: basic functionality', () => {
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

  test('should load RequestDataAccess component', () => {
    render(
      <ManagedACTAccessRequirementComponent
        user={undefined}
        entityId={'1'}
        accessRequirement={mockAccessRequirement}
        accessRequirementStatus={mockAccessRequirementStatus}
      />,
      {
        wrapper: createWrapper(),
      },
    )
    screen.getByTestId('RequestDataAccess')
  })
})
