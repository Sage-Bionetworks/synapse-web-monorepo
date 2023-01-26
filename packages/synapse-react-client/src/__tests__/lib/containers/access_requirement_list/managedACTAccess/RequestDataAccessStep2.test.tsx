import * as React from 'react'
import { render } from '@testing-library/react'
import RequestDataAccessStep2 from '../../../../../lib/containers/access_requirement_list/managedACTAccess/RequestDataAccessStep2'
import {
  ACCESS_TYPE,
  ManagedACTAccessRequirement,
  UserProfile,
} from '../../../../../lib/utils/synapseTypes'
import { SynapseTestContext } from '../../../../../mocks/MockSynapseContext'

const mockManagedACTAccessRequirement: ManagedACTAccessRequirement = {
  concreteType: 'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
  isCertifiedUserRequired: false,
  isValidatedProfileRequired: false,
  isDUCRequired: false,
  ducTemplateFileHandleId: '123',
  isIRBApprovalRequired: false,
  areOtherAttachmentsRequired: false,
  expirationPeriod: 1,
  isIDUPublic: false,
  isIDURequired: false,
  versionNumber: 1,
  id: 1234,
  etag: '12345',
  createdOn: '',
  createdBy: '',
  modifiedOn: '',
  modifiedBy: '',
  subjectIds: [],
  accessType: ACCESS_TYPE.DOWNLOAD,
}

const mockUserProfile: UserProfile = {
  ownerId: '777',
  firstName: 'ABC',
  lastName: 'DEE',
  userName: 'abc777',
}

function renderComponent(override?: object) {
  let accessRequirement = mockManagedACTAccessRequirement
  if (accessRequirement) {
    accessRequirement = Object.assign(
      {},
      mockManagedACTAccessRequirement,
      override,
    )
  }
  return render(
    <SynapseTestContext>
      <RequestDataAccessStep2
        requestDataStepCallback={() => {}}
        entityId={'abc12'}
        user={mockUserProfile}
        managedACTAccessRequirement={accessRequirement}
        researchProjectId={'890'}
        onHide={() => {}}
      />
    </SynapseTestContext>,
  )
}

describe('RequestDataAccessStep2: basic functionality', () => {
  it('render component without crashing', async () => {
    const { container } = renderComponent()
    expect(container).toBeDefined()
  })

  it('should show DUC field if required', async () => {
    mockManagedACTAccessRequirement.isDUCRequired = true
    const { container } = renderComponent()
    expect(container.querySelector('#duc-temp')).toBeDefined()
  })

  it('should not show DUC field if not required', async () => {
    mockManagedACTAccessRequirement.isDUCRequired = false
    const { container } = renderComponent()
    expect(container.querySelector('#duc-temp')).toBeNull()
  })

  it('should show IRB field if required', async () => {
    mockManagedACTAccessRequirement.isIRBApprovalRequired = true
    const { container } = renderComponent()
    expect(container.querySelector('#irb-download')).toBeDefined()
  })

  it('should not show IRB field if not required', async () => {
    mockManagedACTAccessRequirement.isIRBApprovalRequired = true
    const { container } = renderComponent()
    expect(container.querySelector('#irb-download')).toBeNull()
  })

  it('should show attachments if required', async () => {
    mockManagedACTAccessRequirement.areOtherAttachmentsRequired = true
    const { container } = renderComponent()
    expect(container.querySelector('.attachment-download')).toBeDefined()
  })

  it('should not show attachments if not required', async () => {
    mockManagedACTAccessRequirement.areOtherAttachmentsRequired = true
    const { container } = renderComponent()
    expect(container.querySelector('.attachment-download')).toBeNull()
  })
})
