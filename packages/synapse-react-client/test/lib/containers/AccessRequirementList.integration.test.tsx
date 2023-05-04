import { act, render, screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import AccessRequirementList, {
  AccessRequirementListProps,
} from '../../../src/lib/containers/AccessRequirementList/AccessRequirementList'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { AccessRequirement } from '../../../src/lib/utils/synapseTypes/'
import mockFileEntityData from '../../../mocks/entity/mockFileEntity'
import { server } from '../../../mocks/msw/server'
import {
  mockACTAccessRequirement,
  mockManagedACTAccessRequirement,
  mockSelfSignAccessRequirement,
  mockToUAccessRequirement,
} from '../../../mocks/mockAccessRequirements'
import * as AccessRequirementListUtils from '../../../src/lib/containers/AccessRequirementList/AccessRequirementListUtils'

const MOCK_FILE_ENTITY_ID = mockFileEntityData.id

const sortAccessRequirementsByCompletionSpy = jest.spyOn(
  AccessRequirementListUtils,
  'sortAccessRequirementsByCompletion',
)

describe('AccessRequirementList tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  async function init(props: AccessRequirementListProps) {
    await act(() => {
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
    onHide: jest.fn(),
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
    await screen.findByText('certified', { exact: false })
    // Must have a verified profile (since one or more of the ARs requires it)
    await screen.findByText('validated', { exact: false })
    // Must have 2fa enabled (since one or more of the ARs requires it)
    await screen.findByText('2FA', { exact: false })

    // Plus one for each AR's own requirements, giving us a total of 8
    await waitFor(() =>
      expect(screen.getAllByTestId('RequirementItem')).toHaveLength(8),
    )
  })
})
