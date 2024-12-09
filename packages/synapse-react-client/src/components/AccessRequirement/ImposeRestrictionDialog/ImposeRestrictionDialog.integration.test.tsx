import { render, screen, waitFor, within } from '@testing-library/react'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import ImposeRestrictionDialog from './ImposeRestrictionDialog'
import { rest, server } from '../../../mocks/msw/server'
import mockFileEntityData from '../../../mocks/entity/mockFileEntity'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import userEvent from '@testing-library/user-event'
import { mockLockAccessRequirement } from '../../../mocks/accessRequirement/mockAccessRequirements'

const mockOnClose = jest.fn()

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

const onApplyLock = jest.fn()
server.use(
  rest.post(
    `${getEndpoint(
      BackendDestinationEnum.REPO_ENDPOINT,
    )}/repo/v1/entity/:id/lockAccessRequirement`,
    async (req, res, ctx) => {
      onApplyLock()
      return res(ctx.status(201), ctx.json(mockLockAccessRequirement))
    },
  ),
)

describe('ImposeRestrictionDialog', () => {
  beforeEach(() => jest.clearAllMocks())
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
