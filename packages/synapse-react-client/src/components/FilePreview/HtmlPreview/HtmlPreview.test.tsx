import { server } from '@/mocks/msw/server'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
  MOCK_USER_NAME,
} from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { TEAM_ID_MEMBER_ID } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { TRUSTED_HTML_USERS_TEAM_ID } from '@/utils/SynapseConstants'
import { TeamMember } from '@sage-bionetworks/synapse-types'
import { render, renderHook, screen, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import HtmlPreview, {
  EXPORTED_FOR_UNIT_TESTING,
  HtmlPreviewProps,
} from './HtmlPreview'

function renderComponent(props: HtmlPreviewProps) {
  return render(<HtmlPreview {...props} />, { wrapper: createWrapper() })
}

const { useCleanHtml } = EXPORTED_FOR_UNIT_TESTING

describe('HTML Preview tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    // Configure the team members request to indicate that MOCK_USER_ID is on the trusted users team
    const htmlTeamMembership: TeamMember = {
      teamId: TRUSTED_HTML_USERS_TEAM_ID.toString(),
      member: {
        userName: MOCK_USER_NAME,
        ownerId: MOCK_USER_ID.toString(),
        isIndividual: true,
      },
      isAdmin: false,
    }

    server.use(
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${TEAM_ID_MEMBER_ID(TRUSTED_HTML_USERS_TEAM_ID, ':userId')}`,
        ({ params }) => {
          let status = 404
          let result: TeamMember | null = null
          if (params.userId === MOCK_USER_ID.toString()) {
            status = 200
            result = htmlTeamMembership
          }
          return HttpResponse.json(result, { status: status })
        },
      ),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  describe('useCleanHtml unit tests', () => {
    it('Returns undefined if isLoading is true', () => {
      const { result } = renderHook(() =>
        useCleanHtml({
          isLoading: true,
          rawHtml: '',
          isTrusted: false,
        }),
      )
      expect(result.current).toEqual(undefined)
    })
    it('Returns rawHtml if the user is trusted', () => {
      const isTrustedUser = true
      const rawHtml = "<script>alert('hello')</script>"
      const { result } = renderHook(() =>
        useCleanHtml({
          isLoading: false,
          rawHtml: rawHtml,
          isTrusted: isTrustedUser,
        }),
      )
      expect(result.current).toEqual(rawHtml)
    })
    it('Sanitizes HTML if the user is not trusted', () => {
      const isTrustedUser = false
      const rawHtml = "<script>alert('hello')</script>"
      const { result } = renderHook(() =>
        useCleanHtml({
          isLoading: false,
          rawHtml: rawHtml,
          isTrusted: isTrustedUser,
        }),
      )
      expect(result.current).not.toEqual(rawHtml)
    })
  })

  it('Renders the raw HTML if the creator is on the trusted team', async () => {
    const idOfUserOnTrustedTeam = MOCK_USER_ID.toString()
    const rawHtml = "<script>alert('hello')</script>"
    const { container } = renderComponent({
      rawHtml,
      createdByUserId: idOfUserOnTrustedTeam,
    })

    let frame: HTMLIFrameElement | null = null
    await waitFor(() => {
      frame = container.querySelector('iframe')
      expect(frame).toBeDefined()
      expect(frame).toHaveAttribute('srcdoc', rawHtml)
    })
    // Verify that no alert is shown since the content is trusted
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('Sanitizes the HTML if the creator is NOT on the trusted team', async () => {
    // Use a user ID NOT on the trusted team
    const idOfUserNotOnTrustedTeam = MOCK_USER_ID_2.toString()
    const rawHtml = "<script>alert('hello')</script>"
    const { container } = renderComponent({
      rawHtml,
      createdByUserId: idOfUserNotOnTrustedTeam,
    })

    let frame: HTMLIFrameElement | null = null
    await waitFor(() => {
      frame = container.querySelector('iframe')
      expect(frame).toBeDefined()
      // The HTML is sanitized, so the script tag is removed
      expect(frame).toHaveAttribute('srcdoc', '')
    })

    // An alert should be shown to inform the user that the rendering is limited
    expect(screen.queryByRole('alert')).toBeInTheDocument()
  })

  it('Shows no alert if sanitized HTML is identical to unsanitized HTML', async () => {
    // Use a user ID NOT on the trusted team
    const idOfUserNotOnTrustedTeam = MOCK_USER_ID_2.toString()
    const rawHtml = '<span>no restricted content here</span>'
    const { container } = renderComponent({
      rawHtml,
      createdByUserId: idOfUserNotOnTrustedTeam,
    })

    let frame: HTMLIFrameElement | null = null
    await waitFor(() => {
      frame = container.querySelector('iframe')
      expect(frame).toBeDefined()
      // The HTML should be identical since it doesn't contain anything that would be stripped by sanitization
      expect(frame).toHaveAttribute('srcdoc', rawHtml)
    })

    // Verify that no alert is shown since the content was unchanged by sanitization
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
