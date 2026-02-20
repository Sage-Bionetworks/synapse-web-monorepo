import { MOCK_DOI } from '@/mocks/doi/MockDoi'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ErrorPage, {
  ACCESS_DENIED_ANONYMOUS_ACTION_DESCRIPTION,
  ACCESS_DENIED_ANONYMOUS_MESSAGE,
  ACCESS_DENIED_HELP_FORUM_ACTION_DESCRIPTION,
  ACCESS_DENIED_MESSAGE,
  ACCESS_DENIED_TITLE,
  ErrorPageProps,
  CONTACT_US_LINK_TEXT,
  LOG_IN_LINK_TEXT,
  NOT_FOUND_MESSAGE,
  NOT_FOUND_TITLE,
  SYNAPSE_DOWN_TITLE,
  SynapseErrorType,
} from './ErrorPage'

const mockGotoPlace = vi.fn()

function renderComponent(props: ErrorPageProps, isAuthenticated: boolean) {
  const component = render(<ErrorPage {...props} />, {
    wrapper: createWrapper({
      isAuthenticated,
    }),
  })
  return { component }
}

async function setUp(props: ErrorPageProps, isAuthenticated: boolean) {
  const user = userEvent.setup()
  const { component } = renderComponent(props, isAuthenticated)

  let imageElement: HTMLElement | undefined
  await waitFor(() => {
    imageElement = screen.getByRole('img')
    expect(imageElement).toBeDefined()
  })

  return { component, user }
}

describe('ErrorPage: basic functionality', () => {
  beforeEach(() => vi.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())
  it('403 error on an entity', async () => {
    const mockWindowOpen = vi.fn()
    window.open = mockWindowOpen

    const props: ErrorPageProps = {
      type: SynapseErrorType.ACCESS_DENIED,
      entityId: 'syn123',
      gotoPlace: mockGotoPlace,
    }
    const { user } = await setUp(props, true)
    expect(screen.getByRole('img').getAttribute('title')).toBe(
      props.type.toString(),
    )
    await screen.findByText(ACCESS_DENIED_TITLE)
    await screen.findByText(ACCESS_DENIED_MESSAGE)
    await screen.findByText(ACCESS_DENIED_HELP_FORUM_ACTION_DESCRIPTION)
    // SWC-7073
    // await screen.findByText(ACCESS_DENIED_CONTACT_ADMIN_ACTION_DESCRIPTION)
    // by default, a DOI is set up in MSW (see doiHandlers)
    // searching for the text (using a regular expression because the element contains other text in addition to the search string)
    await screen.findByText(new RegExp(MOCK_DOI.creators[0].creatorName))
    await screen.findByText(new RegExp(MOCK_DOI.titles[0].title))

    const contactUsLink = screen.getByText(CONTACT_US_LINK_TEXT)
    await user.click(contactUsLink)
    await waitFor(() =>
      expect(mockWindowOpen).toHaveBeenLastCalledWith(
        'https://sagebionetworks.jira.com/servicedesk/customer/portals',
        '_blank',
      ),
    )

    // SWC-7073
    // verify link pops up the SendMessageToEntityOwnerDialog
    // const contactAdminLink = screen.getByText(CONTACT_ADMIN_LINK_TEXT)
    // await user.click(contactAdminLink)
    // expect(
    //   screen.queryByRole('dialog', {
    //     name: new RegExp(CONTACT_ADMIN_DIALOG_TITLE),
    //   }),
    // ).toBeInTheDocument()
  })

  it('403 error on an entity - anonymous test', async () => {
    const props: ErrorPageProps = {
      type: SynapseErrorType.ACCESS_DENIED,
      entityId: 'syn123',
      gotoPlace: mockGotoPlace,
    }
    const { user } = await setUp(props, false)

    await screen.findByText(ACCESS_DENIED_ANONYMOUS_MESSAGE)
    await screen.findByText(ACCESS_DENIED_ANONYMOUS_ACTION_DESCRIPTION)

    const logInLink = screen.getByText(LOG_IN_LINK_TEXT)
    await user.click(logInLink)
    await waitFor(() =>
      expect(mockGotoPlace).toHaveBeenLastCalledWith('/LoginPlace:0'),
    )
  })
  it('404 error page', async () => {
    const props: ErrorPageProps = {
      type: SynapseErrorType.NOT_FOUND,
      gotoPlace: mockGotoPlace,
    }
    await setUp(props, false)
    await screen.findByText(NOT_FOUND_TITLE)
    await screen.findByText(NOT_FOUND_MESSAGE)
  })
  it('Synapse Down error page', async () => {
    const props: ErrorPageProps = {
      type: SynapseErrorType.DOWN,
      gotoPlace: mockGotoPlace,
    }
    await setUp(props, false)
    await screen.findByText(SYNAPSE_DOWN_TITLE)
  })
})
