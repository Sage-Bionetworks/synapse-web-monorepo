import { render, screen } from '@testing-library/react'
import React from 'react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../utils/context/SynapseContext'
import { server } from '../../mocks/msw/server'
import { http, HttpResponse } from 'msw'
import { ENTITY_HEADERS } from '../../utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import {
  RequestDownloadCard,
  RequestDownloadCardProps,
  REQUEST_DOWNLOAD_TITLE,
} from './RequestDownloadCard'
import userEvent from '@testing-library/user-event'

const ENTITY_ID = 'syn29218'
const onViewSharingSettingsClicked = jest.fn()
const defaultProps: RequestDownloadCardProps = {
  entityId: ENTITY_ID,
  count: 10,
  onViewSharingSettingsClicked,
}
const mockEntityHeaderResult = { results: [{ id: ENTITY_ID }] }
const setupEntityHeaderResponse = () => {
  server.use(
    http.post(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_HEADERS}`,
      async ({ request, params }) => {
        return HttpResponse.json(mockEntityHeaderResult, { status: 200 })
      },
    ),
  )
}
function renderComponent(wrapperProps?: SynapseContextType) {
  render(<RequestDownloadCard {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('RequestDownloadCard tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Show a Request Download Card', async () => {
    setupEntityHeaderResponse()
    renderComponent()
    await screen.findByText(REQUEST_DOWNLOAD_TITLE)

    const viewSharingSettingsButton = screen.queryByRole('button', {
      name: 'View Sharing Settings',
    })
    expect(viewSharingSettingsButton).toBeInTheDocument()
    await userEvent.click(viewSharingSettingsButton!)
    expect(onViewSharingSettingsClicked).toHaveBeenLastCalledWith(ENTITY_ID)
  })
})
