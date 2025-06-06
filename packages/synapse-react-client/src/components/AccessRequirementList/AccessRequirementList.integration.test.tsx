import {
  mockACTAccessRequirement,
  mockManagedACTAccessRequirement,
  mockSelfSignAccessRequirement,
  mockToUAccessRequirement,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { AccessRequirement } from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import AccessRequirementList, {
  AccessRequirementListProps,
} from './AccessRequirementList'
import * as AccessRequirementListUtils from './AccessRequirementListUtils'

const MOCK_FILE_ENTITY_ID = mockFileEntityData.id

const sortAccessRequirementsByCompletionSpy = vi.spyOn(
  AccessRequirementListUtils,
  'sortAccessRequirementsByCompletion',
)

describe('AccessRequirementList tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  async function init(props: AccessRequirementListProps) {
    // We must await asynchronous events for our assertions to pass
    // eslint-disable-next-line @typescript-eslint/require-await
    await act(async () => {
      render(<AccessRequirementList {...props} />, {
        wrapper: createWrapper(),
      })
    })
  }

  const accessRequirements: Array<AccessRequirement> = [
    mockSelfSignAccessRequirement,
    mockToUAccessRequirement,
    mockManagedACTAccessRequirement,
    mockACTAccessRequirement,
  ]

  const props: AccessRequirementListProps = {
    entityId: MOCK_FILE_ENTITY_ID,
    accessRequirementFromProps: accessRequirements,
    onHide: vi.fn(),
  }

  it('Renders a Access Requirements List with valid props', async () => {
    await init(props)

    await waitFor(() =>
      expect(sortAccessRequirementsByCompletionSpy).toHaveBeenCalled(),
    )
    // There should be 8 distinct requirements shown

    // Must be logged in
    await screen.findByText('signed in', { exact: false })
    // Must be certified (since one or more of the ARs requires it)
    await screen.findByText(/You must first become a/)
    await screen.findAllByText(/certified user/) // may appear multiple times since we also display if the current user is a certified user
    // Must have a verified profile (since one or more of the ARs requires it)
    await screen.findByText('user profile validated', { exact: false })
    // Must have 2fa enabled (since one or more of the ARs requires it)
    await screen.findByText('2FA', { exact: false })

    // Plus one for each AR's own requirements, giving us a total of 8
    await waitFor(() =>
      expect(screen.getAllByTestId('RequirementItem')).toHaveLength(8),
    )
  })
})
