import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import ErrorPage, {
  ACCESS_DENIED_CONTACT_ADMIN_ACTION_DESCRIPTION,
  ACCESS_DENIED_HELP_FORUM_ACTION_DESCRIPTION,
  ACCESS_DENIED_MESSAGE,
  ErrorPageProps,
  SynapseErrorType,
} from './ErrorPage'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import userEvent from '@testing-library/user-event'
import { server } from '../../mocks/msw/server'
import { MOCK_DOI } from '../../mocks/doi/MockDoi'

const mockGotoPlace = jest.fn()

function renderComponent(props: ErrorPageProps) {
  const component = render(<ErrorPage {...props} />, {
    wrapper: createWrapper(),
  })
  return { component }
}

async function setUp(props: ErrorPageProps) {
  const user = userEvent.setup()
  const { component } = renderComponent(props)

  let imageElement: HTMLElement | undefined
  await waitFor(() => {
    imageElement = screen.getByRole('img')
    expect(imageElement).toBeDefined()
  })

  return { component, user }
}

describe('ErrorPage: basic functionality', () => {
  beforeEach(() => jest.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())
  it('Access denied to an entity', async () => {
    const props: ErrorPageProps = {
      type: SynapseErrorType.ACCESS_DENIED,
      entityId: 'syn123',
      gotoPlace: mockGotoPlace,
    }
    await setUp(props)
    expect(screen.getByRole('img').getAttribute('title')).toBe(
      props.type.toString(),
    )
    await screen.findByText(ACCESS_DENIED_MESSAGE)
    await screen.findByText(ACCESS_DENIED_HELP_FORUM_ACTION_DESCRIPTION)
    await screen.findByText(ACCESS_DENIED_CONTACT_ADMIN_ACTION_DESCRIPTION)
    // by default, a DOI is set up in MSW (see doiHandlers)
    // searching for the text (using a regular expression because the element contains other text in addition to the search string)
    await screen.findByText(new RegExp(MOCK_DOI.creators[0].creatorName))
    await screen.findByText(new RegExp(MOCK_DOI.titles[0].title))
  })
})
