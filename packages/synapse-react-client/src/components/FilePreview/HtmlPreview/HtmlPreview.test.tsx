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
import {
  act,
  render,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import HtmlPreview, {
  EXPORTED_FOR_UNIT_TESTING,
  HtmlPreviewProps,
} from './HtmlPreview'

const {
  useCleanHtml,
  FRAME_HEIGHT_PADDING_PX,
  MIN_FRAME_HEIGHT_PX,
  RESIZE_THRESHOLD_PX,
  SANDBOXED_FRAME_ORIGIN,
  HEIGHT_MESSAGE_TYPE,
  HEIGHT_REPORTER_SCRIPTS,
} = EXPORTED_FOR_UNIT_TESTING

function renderComponent(props: HtmlPreviewProps) {
  return render(<HtmlPreview {...props} />, { wrapper: createWrapper() })
}

async function renderTrustedFrame() {
  const { container } = renderComponent({
    rawHtml: '<span>test</span>',
    createdByUserId: MOCK_USER_ID.toString(),
  })
  return waitFor(() => {
    const iframe = container.querySelector('iframe')
    expect(iframe).not.toBeNull()
    return iframe!
  })
}

// Simulates the height reporter script posting from inside the sandboxed frame
function postHeightMessage(
  frame: HTMLIFrameElement,
  data: unknown,
  overrides: Partial<MessageEventInit> = {},
) {
  act(() => {
    window.dispatchEvent(
      new MessageEvent('message', {
        data,
        origin: SANDBOXED_FRAME_ORIGIN,
        source: frame.contentWindow,
        ...overrides,
      }),
    )
  })
}

describe('HTML Preview tests', () => {
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

  describe('useCleanHtml unit tests', () => {
    it('Returns undefined if isLoading is true', () => {
      const { result } = renderHook(() =>
        useCleanHtml({
          isLoading: true,
          rawHtml: '',
          isTrusted: false,
        }),
      )
      expect(result.current).toBeUndefined()
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
      expect(frame).not.toBeNull()
      expect(frame).toHaveAttribute('srcdoc', HEIGHT_REPORTER_SCRIPTS + rawHtml)
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
      expect(frame).not.toBeNull()
      // The HTML is sanitized, so the script tag is removed
      expect(frame).toHaveAttribute('srcdoc', HEIGHT_REPORTER_SCRIPTS)
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
      expect(frame).not.toBeNull()
      // The HTML should be identical since it doesn't contain anything that would be stripped by sanitization
      expect(frame).toHaveAttribute('srcdoc', HEIGHT_REPORTER_SCRIPTS + rawHtml)
    })

    // Verify that no alert is shown since the content was unchanged by sanitization
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('Puts the height reporter before trusted HTML so an unclosed element cannot swallow it', async () => {
    const rawHtml = '<p>notes</p><textarea>'
    const { container } = renderComponent({
      rawHtml,
      createdByUserId: MOCK_USER_ID.toString(),
    })

    let frame: HTMLIFrameElement | null = null
    await waitFor(() => {
      frame = container.querySelector('iframe')
      expect(frame).not.toBeNull()
      expect(frame).toHaveAttribute('srcdoc', HEIGHT_REPORTER_SCRIPTS + rawHtml)
    })
  })

  it.each([
    ['trusted', MOCK_USER_ID],
    ['sanitized', MOCK_USER_ID_2],
  ])(
    'Sandboxes the %s preview without allow-same-origin',
    async (_, createdByUserId) => {
      const rawHtml = '<span>test</span>'
      const { container } = renderComponent({
        rawHtml,
        createdByUserId: createdByUserId.toString(),
      })

      let frame: HTMLIFrameElement | null = null
      await waitFor(() => {
        frame = container.querySelector('iframe')
        expect(frame).not.toBeNull()
        expect(frame).toHaveAttribute('sandbox')
        expect(frame).not.toHaveAttribute(
          'sandbox',
          expect.stringContaining('allow-same-origin'),
        )
      })
    },
  )

  it('Receives a height message and updates the iframe height', async () => {
    const rawHtml = '<span>test</span>'
    const { container } = renderComponent({
      rawHtml,
      createdByUserId: MOCK_USER_ID.toString(),
    })

    const frame = await waitFor(() => {
      const iframe = container.querySelector('iframe')
      expect(iframe).not.toBeNull()
      return iframe!
    })

    const newHeight = 600
    // Simulate the height message from the iframe. The component ignores messages from any other source
    window.dispatchEvent(
      new MessageEvent('message', {
        data: { type: HEIGHT_MESSAGE_TYPE, height: newHeight },
        // Messages from the sandboxed iframe have the origin 'null'
        origin: SANDBOXED_FRAME_ORIGIN,
        source: frame.contentWindow,
      }),
    )

    await waitFor(() => {
      expect(frame).toHaveAttribute(
        'height',
        `${newHeight + FRAME_HEIGHT_PADDING_PX}px`,
      )
    })
  })

  describe('Height messages', () => {
    const tallContentHeight = 600

    it('Uses the minimum height when the content is shorter', async () => {
      const frame = await renderTrustedFrame()

      postHeightMessage(frame, {
        type: HEIGHT_MESSAGE_TYPE,
        height: MIN_FRAME_HEIGHT_PX / 2,
      })

      expect(frame).toHaveAttribute(
        'height',
        `${MIN_FRAME_HEIGHT_PX + FRAME_HEIGHT_PADDING_PX}px`,
      )
    })

    it('Grows when the content grows by more than the threshold', async () => {
      const frame = await renderTrustedFrame()
      const grownHeight = MIN_FRAME_HEIGHT_PX + RESIZE_THRESHOLD_PX + 1

      postHeightMessage(frame, {
        type: HEIGHT_MESSAGE_TYPE,
        height: MIN_FRAME_HEIGHT_PX,
      })
      postHeightMessage(frame, {
        type: HEIGHT_MESSAGE_TYPE,
        height: grownHeight,
      })

      expect(frame).toHaveAttribute(
        'height',
        `${grownHeight + FRAME_HEIGHT_PADDING_PX}px`,
      )
    })

    it('Ignores changes within the threshold', async () => {
      const frame = await renderTrustedFrame()

      postHeightMessage(frame, {
        type: HEIGHT_MESSAGE_TYPE,
        height: tallContentHeight,
      })
      postHeightMessage(frame, {
        type: HEIGHT_MESSAGE_TYPE,
        height: tallContentHeight - RESIZE_THRESHOLD_PX,
      })

      expect(frame).toHaveAttribute(
        'height',
        `${tallContentHeight + FRAME_HEIGHT_PADDING_PX}px`,
      )
    })

    const validMessage = {
      type: HEIGHT_MESSAGE_TYPE,
      height: tallContentHeight,
    }

    it.each<[string, unknown, Partial<MessageEventInit>]>([
      ['a message from another window', validMessage, { source: window }],
      [
        'a message from a non-sandboxed origin',
        validMessage,
        { origin: 'https://example.com' },
      ],
      [
        'a message with another type',
        { type: 'OTHER', height: tallContentHeight },
        {},
      ],
      ['a message with no data', undefined, {}],
      ['a NaN height', { type: HEIGHT_MESSAGE_TYPE, height: Number.NaN }, {}],
      [
        'an Infinity height',
        { type: HEIGHT_MESSAGE_TYPE, height: Number.POSITIVE_INFINITY },
        {},
      ],
      ['a string height', { type: HEIGHT_MESSAGE_TYPE, height: '600' }, {}],
    ])('Ignores %s', async (_, data, overrides) => {
      const frame = await renderTrustedFrame()
      const initialHeight = frame.getAttribute('height')

      postHeightMessage(frame, data, overrides)

      expect(frame).toHaveAttribute('height', initialHeight)
    })

    it('Removes the message listener on unmount', async () => {
      const addEventListenerSpy = vi.spyOn(window, 'addEventListener')
      const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
      const { container, unmount } = renderComponent({
        rawHtml: '<span>test</span>',
        createdByUserId: MOCK_USER_ID.toString(),
      })
      await waitFor(() => {
        expect(container.querySelector('iframe')).not.toBeNull()
      })
      const messageListeners = addEventListenerSpy.mock.calls
        .filter(([type]) => type === 'message')
        .map(([, listener]) => listener)
      expect(messageListeners).toHaveLength(1)

      unmount()

      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'message',
        messageListeners[0],
      )
      addEventListenerSpy.mockRestore()
      removeEventListenerSpy.mockRestore()
    })
  })
})
