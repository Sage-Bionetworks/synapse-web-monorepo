import * as React from 'react'
import RequestDataAccessStep1 from '../../../../../lib/containers/access_requirement_list/managedACTAccess/RequestDataAccessStep1'
import {
  ACCESS_TYPE,
  ManagedACTAccessRequirement,
} from '../../../../../lib/utils/synapseTypes'
import { render } from '@testing-library/react'
import { SynapseTestContext } from '../../../../../mocks/MockSynapseContext'

const mockAccessRequirement: ManagedACTAccessRequirement = {
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
  accessType: ACCESS_TYPE.UPDATE,
}

function renderComponent(override?: object) {
  return render(
    <SynapseTestContext>
      <RequestDataAccessStep1
        managedACTAccessRequirement={mockAccessRequirement}
        onHide={() => {}}
      />
    </SynapseTestContext>,
  )
}

describe('RequestDataAccessStep1: basic functionality', () => {
  it('render component without crashing', async () => {
    const { container } = renderComponent()
    expect(container).toBeDefined()
  })

  it('should show IDU field if required', async () => {
    mockAccessRequirement.isIDURequired = true
    const { container } = renderComponent()
    expect(container.querySelector('#data-use')).toBeDefined()
  })

  it('should not show IDU field if not required', async () => {
    mockAccessRequirement.isIDURequired = false
    const { container } = renderComponent()
    expect(container.querySelector('#data-use')).toEqual(null)
  })

  it('should show IDU public text if isIDUPublic is true', async () => {
    mockAccessRequirement.isIDURequired = true
    mockAccessRequirement.isIDUPublic = true
    const { container } = renderComponent()
    expect(container.querySelector('#idu-visible')?.textContent).toEqual(
      'this will be visible to the public',
    )
  })

  it('should not show IDU public text if isIDUPublic is false', async () => {
    mockAccessRequirement.isIDURequired = false
    mockAccessRequirement.isIDUPublic = false
    const { container } = renderComponent()
    expect(container.querySelector('#idu-visible')).toEqual(null)
  })
})
