import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import AcceptedRequirements, {
  AcceptedRequirementsProps,
} from '../../../lib/containers/access_requirement_list/AcceptedRequirements'
import AccessApprovalCheckMark, {
  CheckMarkProps,
} from '../../../lib/containers/access_requirement_list/AccessApprovalCheckMark'
import AccessRequirementList, {
  AccessRequirementListProps,
  sortAccessRequirementByCompletion,
} from '../../../lib/containers/access_requirement_list/AccessRequirementList'
import { createWrapper } from '../../../lib/testutils/TestingLibraryUtils'
import { ACCESS_REQUIREMENT_STATUS } from '../../../lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../lib/utils/functions/getEndpoint'
import {
  AccessApproval,
  AccessRequirement,
  AccessRequirementStatus,
  ACCESS_TYPE,
  ApprovalState,
  ObjectType,
  WikiPageKey,
} from '../../../lib/utils/synapseTypes/'
import mockFileEntityData from '../../../mocks/entity/mockFileEntity'
import { rest, server } from '../../../mocks/msw/server'
import { mockUserProfileData } from '../../../mocks/user/mock_user_profile'
import { SynapseClient } from '../../../lib/utils'

const MOCK_FILE_ENTITY_ID = mockFileEntityData.id

describe('Access Requirement List works as expect', () => {
  beforeAll(() => {
    server.listen()
    server.use(
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ACCESS_REQUIREMENT_STATUS(':id')}`,

        async (req, res, ctx) => {
          let responseCode = 404
          const statuses: AccessRequirementStatus[] = [
            {
              accessRequirementId: '1',
              concreteType:
                'org.sagebionetworks.repo.model.SelfSignAccessRequirement',
              isApproved: true,
              expiredOn: '-',
            },
            {
              accessRequirementId: '2',
              concreteType:
                'org.sagebionetworks.repo.model.TermsOfUseAccessRequirement',
              isApproved: false,
              expiredOn: '-',
            },
            {
              accessRequirementId: '3',
              concreteType:
                'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
              isApproved: true,
              expiredOn: '-',
            },
            {
              accessRequirementId: '4',
              concreteType:
                'org.sagebionetworks.repo.model.ACTAccessRequirement',
              isApproved: false,
              expiredOn: '-',
            },
          ]

          let responseBody = statuses.find(
            status => req.params.id === status.accessRequirementId,
          )
          if (responseBody) {
            responseCode = 200
          }

          return res(ctx.status(responseCode), ctx.json(responseBody))
        },
      ),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  function init(props: AccessRequirementListProps) {
    render(<AccessRequirementList {...props} />, { wrapper: createWrapper() })
  }

  const accessRequirements: Array<AccessRequirement> = [
    {
      name: 'SelfSignAccessRequirement',
      versionNumber: 1,
      id: 1,
      etag: '_',
      createdOn: '_',
      modifiedOn: '_',
      createdBy: '_',
      modifiedBy: '_',
      subjectIds: [],
      accessType: ACCESS_TYPE.CREATE,
      concreteType: 'org.sagebionetworks.repo.model.SelfSignAccessRequirement',
    },
    {
      name: 'TermsOfUseAccessRequirement',
      versionNumber: 2,
      id: 2,
      etag: '_',
      createdOn: '_',
      modifiedOn: '_',
      createdBy: '_',
      modifiedBy: '_',
      subjectIds: [],
      accessType: ACCESS_TYPE.CREATE,
      concreteType:
        'org.sagebionetworks.repo.model.TermsOfUseAccessRequirement',
    },
    {
      name: 'ManagedACTAccessRequirement',
      versionNumber: 3,
      id: 3,
      etag: '_',
      createdOn: '_',
      modifiedOn: '_',
      createdBy: '_',
      modifiedBy: '_',
      subjectIds: [],
      accessType: ACCESS_TYPE.CREATE,
      concreteType:
        'org.sagebionetworks.repo.model.ManagedACTAccessRequirement',
    },
    {
      name: 'ACTAccessRequirement',
      versionNumber: 4,
      id: 4,
      etag: '_',
      createdOn: '_',
      modifiedOn: '_',
      createdBy: '_',
      modifiedBy: '_',
      subjectIds: [],
      accessType: ACCESS_TYPE.CREATE,
      concreteType: 'org.sagebionetworks.repo.model.ACTAccessRequirement',
    },
  ]

  const props = {
    entityId: '_',
    accessRequirementFromProps: accessRequirements,
    onHide: jest.fn(),
  }

  it('Renders a Access Requirements List with valid props', async () => {
    init(props)
    // The ManagedACTAccessRequirementComponent renders as "RequestDataAccess"
    await screen.findByTestId('RequestDataAccess')
    // The other three access requirements render as "AcceptedRequirements"
    expect(await screen.findAllByTestId('AcceptedRequirements')).toHaveLength(3)
  })

  it('Renders a Access Requirements List with completion order', async () => {
    init(props)

    const sorted = await sortAccessRequirementByCompletion(
      '',
      accessRequirements,
    )

    // There are 4 ARs
    expect(sorted).toHaveLength(4)

    // The first two in the sorted list should have approved statuses
    expect(sorted[0].accessRequirementStatus.isApproved).toBe(true)
    expect(sorted[1].accessRequirementStatus.isApproved).toBe(true)

    // The latter two should not
    expect(sorted[2].accessRequirementStatus.isApproved).toBeFalsy()
    expect(sorted[3].accessRequirementStatus.isApproved).toBeFalsy()
  })
})

describe('Accepted Requirements works as expect', () => {
  function init(props: AcceptedRequirementsProps) {
    return render(<AcceptedRequirements {...props} />, {
      wrapper: createWrapper(),
    })
  }

  const wikiPage: WikiPageKey = {
    wikiPageId: '_',
    ownerObjectId: '_',
    ownerObjectType: ObjectType.ACCESS_REQUIREMENT,
  }

  const accessRequirement: AccessRequirement = {
    name: '_',
    versionNumber: 1,
    id: 5,
    etag: '_',
    createdOn: '_',
    modifiedOn: '_',
    createdBy: '_',
    modifiedBy: '_',
    subjectIds: [],
    accessType: ACCESS_TYPE.CREATE,
    concreteType: '_',
  }

  const props: AcceptedRequirementsProps = {
    user: mockUserProfileData,
    entityId: MOCK_FILE_ENTITY_ID,
    wikiPage: wikiPage,
    accessRequirement: accessRequirement,
    accessRequirementStatus: {
      accessRequirementId: '_',
      concreteType: '_',
      isApproved: true,
      expiredOn: '_',
    },
    onHide: jest.fn(),
  }

  it('Renders a AccessRequirements with valid props', () => {
    init(props)
    screen.getByTestId('AcceptedRequirements')
  })

  it('Render AccessRequirements correctly if user is already accepted requirements', () => {
    init(props)
    screen.getByTestId('AccessApprovalCheckMark-true')
  })

  const accessApprovalMock: AccessApproval = {
    requirementId: 1,
    submitterId: '_',
    accessorId: '_',
    state: ApprovalState.APPROVED,
  }

  it('Render AccessRequirements correctly when user click accept button', async () => {
    const { container } = init(props)

    jest
      .spyOn(SynapseClient, 'postAccessApproval')
      .mockResolvedValue(accessApprovalMock)

    await userEvent.click(
      await screen.findByRole('button', { name: 'I Accept Terms of Use' }),
    )

    await screen.findByTestId('AccessApprovalCheckMark-true')

    expect(container.querySelector('.button-container.hide')).not.toBeNull()
  })
})

describe('Check Mark works as expect', () => {
  function init(prop: CheckMarkProps) {
    return render(<AccessApprovalCheckMark {...prop} />).container
  }

  it('Check Marks color turns into green if isCompleted is true', () => {
    const props = {
      isCompleted: true,
    }
    const container = init(props)
    expect(container.querySelectorAll('div')[0].className).toMatch(
      'check-mark-container green',
    )
  })

  it('Check Marks color turns into orange if isCompleted is false', () => {
    const props = {
      isCompleted: false,
    }
    const container = init(props)
    expect(container.querySelectorAll('div')[0].className).toMatch(
      'check-mark-container orange',
    )
  })
})
