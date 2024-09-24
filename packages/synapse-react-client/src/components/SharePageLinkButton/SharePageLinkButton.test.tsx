import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import SharePageLinkButton, {
  SharePageLinkButtonProps,
} from './SharePageLinkButton'
import { MOCK_SHORT_IO_URL } from '../../mocks/mockShortIo'
import { server } from '../../mocks/msw/server'

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
    jest.clearAllMocks()
  })

  it('Copies short.io response to clipboard', async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
    })
    renderComponent({ shortIoPublicApiKey: 'abc' })
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()

    await userEvent.click(
      screen.getByRole('button', { name: 'Share Page Link' }),
    )
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      MOCK_SHORT_IO_URL,
    )
  })
})
