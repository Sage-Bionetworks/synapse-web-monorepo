import { MOCK_SHORT_IO_URL } from '@/mocks/mockShortIo'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SharePageLinkButton, {
  SharePageLinkButtonProps,
} from './SharePageLinkButton'

function renderComponent(props: SharePageLinkButtonProps) {
  return render(<SharePageLinkButton {...props} />, {
    wrapper: createWrapper(),
  })
}
describe('SharePageLinkButton', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('Copies short.io response to clipboard', async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve()),
      },
    })
    renderComponent({ shortIoPublicApiKey: 'abc' })
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    await userEvent.click(
      screen.getByRole('button', { name: 'Share Page Link' }),
    )
    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        MOCK_SHORT_IO_URL,
      )
    })
  })
})
