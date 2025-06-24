import { mockLockAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import ImposeRestrictionDialog from './ImposeRestrictionDialog'

const mockOnClose = vi.fn()

function renderComponent() {
  return render(
    <ImposeRestrictionDialog
      entityId={mockFileEntityData.id}
      open={true}
      onClose={mockOnClose}
    />,
    {
      wrapper: createWrapper(),
    },
  )
}

const onApplyLock = vi.fn()
server.use(
  http.post(
    `${getEndpoint(
      BackendDestinationEnum.REPO_ENDPOINT,
    )}/repo/v1/entity/:id/lockAccessRequirement`,
    () => {
      onApplyLock()
      return HttpResponse.json(mockLockAccessRequirement, { status: 201 })
    },
  ),
)

describe('ImposeRestrictionDialog', () => {
  beforeEach(() => vi.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Prompts the user to choose if there is human data', async () => {
    renderComponent()

    await screen.findByText(
      'Is this sensitive human data that must be protected?',
    )
    const radioGroup = await screen.findByRole('radiogroup')
    await within(radioGroup).findByRole('radio', { name: 'Yes' })
    await within(radioGroup).findByRole('radio', { name: 'No' })
  })

  it("Applies a lock if the user chooses 'Yes'", async () => {
    renderComponent()

    const yesOption = await screen.findByRole('radio', { name: 'Yes' })
    await userEvent.click(yesOption)

    const submitButton = await screen.findByRole('button', { name: 'OK' })

    await userEvent.click(submitButton)
    await waitFor(() => expect(onApplyLock).toHaveBeenCalledTimes(1))
    await waitFor(() => expect(mockOnClose).toHaveBeenCalled())
  })
  it("Shows a warning and does nothing if the user chooses 'No'", async () => {
    renderComponent()

    const noOption = await screen.findByRole('radio', { name: 'No' })
    await userEvent.click(noOption)

    const alert = await screen.findByRole('alert')
    within(alert).getByText(
      'Sage Bionetworks does not typically impose conditions for use on non-human data unless there is a legal, ethical or regulatory reason to do so.',
      { exact: false },
    )

    const submitButton = await screen.findByRole('button', { name: 'OK' })

    await userEvent.click(submitButton)
    await waitFor(() => expect(mockOnClose).toHaveBeenCalled())
    await waitFor(() => expect(onApplyLock).not.toHaveBeenCalled())
  })
})
