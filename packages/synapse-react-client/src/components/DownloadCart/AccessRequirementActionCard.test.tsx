import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as AccessRequirementListModule from '../AccessRequirementList/AccessRequirementList'
import {
  AccessRequirementActionCard,
  AccessRequirementActionCardProps,
} from './AccessRequirementActionCard'

const MOCK_ACCESS_REQUIREMENT_LIST_COMPONENT =
  'mock-access-requirement-list-component'
const accessRequirementListSpy = vi
  .spyOn(AccessRequirementListModule, 'default')
  .mockImplementation(() => (
    <div data-testid={MOCK_ACCESS_REQUIREMENT_LIST_COMPONENT}></div>
  ))

const CARD_TITLE = 'Requires Something'
const COUNT = 10

function renderComponent(props: Partial<AccessRequirementActionCardProps>) {
  render(
    <AccessRequirementActionCard
      accessRequirementId={mockManagedACTAccessRequirement.id}
      title={CARD_TITLE}
      count={COUNT}
      {...props}
    />,
    { wrapper: createWrapper() },
  )
}

describe('AccessRequirementActionCard', () => {
  beforeEach(() => accessRequirementListSpy.mockClear())

  it('opens the access requirement for its first subject when started', async () => {
    renderComponent({})

    await screen.findByText(CARD_TITLE)
    await screen.findByText(mockManagedACTAccessRequirement.name)
    expect(
      screen.queryByTestId(MOCK_ACCESS_REQUIREMENT_LIST_COMPONENT),
    ).not.toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'Start' }))

    await screen.findByTestId(MOCK_ACCESS_REQUIREMENT_LIST_COMPONENT)
    expect(accessRequirementListSpy.mock.lastCall?.[0]).toEqual(
      expect.objectContaining({
        subjectId: mockManagedACTAccessRequirement.subjectIds[0].id,
        subjectType: mockManagedACTAccessRequirement.subjectIds[0].type,
        accessRequirementFromProps: [mockManagedACTAccessRequirement],
        renderAsModal: true,
        numberOfFilesAffected: COUNT,
      }),
    )
  })

  it('cannot be started when complete', async () => {
    renderComponent({ isComplete: true })

    const completeButton = await screen.findByRole('button', {
      name: 'Complete',
    })
    expect(completeButton).toBeDisabled()
  })
})
