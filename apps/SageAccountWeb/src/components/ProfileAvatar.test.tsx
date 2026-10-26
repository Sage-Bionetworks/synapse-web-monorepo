import { server } from '@/mocks/node'
import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import TestWrapper from '../tests/TestWrapper'
import { ProfileAvatar } from './ProfileAvatar'

describe('ProfileAvatar', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  const onProfileUpdated = vi.fn()
  const picture = new File(['avatar'], 'avatar.png', { type: 'image/png' })

  function renderComponent() {
    const user = userEvent.setup()
    const { container, rerender } = render(
      <ProfileAvatar onProfileUpdated={onProfileUpdated} />,
      { wrapper: TestWrapper },
    )
    const getFileInput = () =>
      container.querySelector<HTMLInputElement>('input[type="file"]')!
    return { user, rerender, getFileInput }
  }

  it('keeps the picture selected while the file picker was open when the avatar re-renders', async () => {
    const { user, rerender, getFileInput } = renderComponent()
    const fileInput = getFileInput()

    rerender(<ProfileAvatar onProfileUpdated={onProfileUpdated} />)
    await user.upload(fileInput, picture)

    expect(
      await screen.findByRole('dialog', { name: 'Crop Image' }),
    ).toBeVisible()
  })

  it('opens the crop dialog again when the same picture is selected after cancelling', async () => {
    const { user, getFileInput } = renderComponent()

    await user.upload(getFileInput(), picture)
    await screen.findByRole('dialog', { name: 'Crop Image' })
    await user.click(screen.getByRole('button', { name: 'Cancel' }))
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    await user.upload(getFileInput(), picture)
    expect(
      await screen.findByRole('dialog', { name: 'Crop Image' }),
    ).toBeVisible()
  })
})
