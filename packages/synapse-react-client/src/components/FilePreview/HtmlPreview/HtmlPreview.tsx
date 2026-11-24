import { useGetIsUserMemberOfTeam } from '@/synapse-queries/team/useTeamMembers'
import { sanitize } from '@/utils/functions/SanitizeHtmlUtils'
import { TRUSTED_HTML_USERS_TEAM_ID } from '@/utils/SynapseConstants'
import { Alert } from '@mui/material'
import { useEffect, useMemo, useRef, useState } from 'react'
import { SynapseSpinner } from '../../LoadingScreen/LoadingScreen'

const FRAME_HEIGHT_PADDING_PX = 50
const MIN_FRAME_HEIGHT_PX = 450
// Must stay larger than the padding. Some pages make their body as tall as the frame, so each resize
// would make the page report a taller height and the frame would keep growing
const RESIZE_THRESHOLD_PX = 70

// The sandboxed frame doesn't belong to any site, so the browser labels its messages with the origin 'null'
const SANDBOXED_FRAME_ORIGIN = 'null'

// Never add allow-same-origin: with allow-scripts, the preview's scripts would run as synapse.org and could read the
// parent page, cookies and storage, or remove the sandbox.
// allow-popups-to-escape-sandbox is deliberate: links that open a new tab load as normal pages, so linked sites work
const HTML_PREVIEW_SANDBOX =
  'allow-scripts allow-popups allow-popups-to-escape-sandbox'

const HEIGHT_MESSAGE_TYPE = 'SYNAPSE_HTML_PREVIEW_HEIGHT'

type HeightMessage = {
  type: typeof HEIGHT_MESSAGE_TYPE
  height: number
}

// The sandboxed frame is cross-origin, so it reports its own height on load and on resize
// The srcdoc frame inherits the embedding page's Content Security Policy. The portals' policy (vite-config's portal
// allowlist) allows this script only by its hash, so changing it needs a new hash there
const HEIGHT_REPORTER_SCRIPTS = `
    <script>
      window.addEventListener('load', () => {
        const post = () =>
          window.parent.postMessage(
            { type: '${HEIGHT_MESSAGE_TYPE}', height: document.body.scrollHeight },
            '*',
          )
        post()
        new ResizeObserver(post).observe(document.body)
      })
    </script>
  `

/**
 * @param options
 * @returns HTML that is cleaned if it is not trusted. undefined if `isLoading` is true.
 */
function useCleanHtml(options: {
  rawHtml: string
  isLoading: boolean
  isTrusted: boolean
}): string | undefined {
  const { rawHtml, isLoading, isTrusted } = options
  return useMemo(() => {
    if (isLoading) {
      return undefined
    }
    if (isTrusted) {
      return rawHtml
    } else {
      return sanitize(rawHtml)
    }
  }, [isLoading, isTrusted, rawHtml])
}

export type HtmlPreviewProps = {
  createdByUserId: string
  rawHtml: string
}

/**
 * Renders raw HTML. Uses file handle data to determine if the content should be sanitized.
 * @param props
 * @returns
 */
export default function HtmlPreview(props: HtmlPreviewProps) {
  const { createdByUserId, rawHtml } = props
  const frameEl = useRef<HTMLIFrameElement>(null)
  const [frameHeight, setFrameHeight] = useState(100)

  const { data: teamMembership, isLoading } = useGetIsUserMemberOfTeam(
    TRUSTED_HTML_USERS_TEAM_ID,
    createdByUserId,
  )
  useEffect(() => {
    function onMessage(event: MessageEvent) {
      // Only accept messages from this preview's iframe
      if (
        event.origin !== SANDBOXED_FRAME_ORIGIN ||
        event.source !== frameEl.current?.contentWindow
      ) {
        return
      }

      const { type, height } = (event.data ?? {}) as Partial<HeightMessage>

      if (
        type !== HEIGHT_MESSAGE_TYPE ||
        typeof height !== 'number' ||
        !Number.isFinite(height)
      ) {
        return
      }

      const paddedHeightPx =
        Math.max(height, MIN_FRAME_HEIGHT_PX) + FRAME_HEIGHT_PADDING_PX

      setFrameHeight(current =>
        Math.abs(paddedHeightPx - current) > RESIZE_THRESHOLD_PX
          ? paddedHeightPx
          : current,
      )
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])
  const htmlIsCreatedByTrustedUser = !!teamMembership

  const cleanHtml = useCleanHtml({
    rawHtml,
    isLoading,
    isTrusted: htmlIsCreatedByTrustedUser,
  })

  if (isLoading || cleanHtml === undefined) {
    return <SynapseSpinner />
  }

  // The script goes first so an unclosed tag at the end of the preview (e.g. <textarea>) can't swallow it
  const srcDoc = HEIGHT_REPORTER_SCRIPTS + cleanHtml

  return (
    <>
      {rawHtml !== cleanHtml && (
        <Alert severity="info" sx={{ marginBottom: '20px' }}>
          Limited rendering only.
        </Alert>
      )}
      <iframe
        ref={frameEl}
        title="HTML preview"
        srcDoc={srcDoc}
        height={`${frameHeight}px`}
        style={{ border: 0, width: '100%' }}
        sandbox={HTML_PREVIEW_SANDBOX}
      />
    </>
  )
}

export const EXPORTED_FOR_UNIT_TESTING = {
  useCleanHtml,
  FRAME_HEIGHT_PADDING_PX,
  MIN_FRAME_HEIGHT_PX,
  RESIZE_THRESHOLD_PX,
  SANDBOXED_FRAME_ORIGIN,
  HEIGHT_MESSAGE_TYPE,
  HEIGHT_REPORTER_SCRIPTS,
}
