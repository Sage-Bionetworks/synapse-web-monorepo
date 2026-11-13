import { useGetIsUserMemberOfTeam } from '@/synapse-queries/team/useTeamMembers'
import { sanitize } from '@/utils/functions/SanitizeHtmlUtils'
import { TRUSTED_HTML_USERS_TEAM_ID } from '@/utils/SynapseConstants'
import { Alert } from '@mui/material'
import { useEffect, useMemo, useRef, useState } from 'react'
import { SynapseSpinner } from '../../LoadingScreen/LoadingScreen'

// Never add allow-same-origin: with allow-scripts, the preview's scripts would run as synapse.org and could read the
// parent page, cookies and storage, or remove the sandbox
export const HTML_PREVIEW_SANDBOX =
  'allow-scripts allow-popups allow-popups-to-escape-sandbox'

export const HEIGHT_MESSAGE_TYPE = 'SYNAPSE_HTML_PREVIEW_HEIGHT'

// The sandboxed frame is cross-origin, so it reports its own height on load and on resize (no polling needed)
export const HEIGHT_REPORTER_SCRIPTS = `
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
      if (event.source !== frameEl?.current?.contentWindow) {
        return
      }

      const { type, height } = (event.data ?? {}) as {
        type?: string
        height?: number
      }

      if (type !== HEIGHT_MESSAGE_TYPE || !Number.isFinite(height)) {
        return
      }

      const newHeightPx = Math.max(height, 450)
      setFrameHeight(current =>
        Math.abs(newHeightPx - current) > 70 ? newHeightPx + 50 : current,
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

  const srcDoc =
    cleanHtml === undefined ? undefined : cleanHtml + HEIGHT_REPORTER_SCRIPTS

  if (isLoading) {
    return <SynapseSpinner />
  }

  return (
    <>
      {rawHtml !== cleanHtml && (
        <Alert severity="info" sx={{ marginBottom: '20px' }}>
          Limited rendering only.
        </Alert>
      )}
      <iframe
        ref={frameEl}
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
}
