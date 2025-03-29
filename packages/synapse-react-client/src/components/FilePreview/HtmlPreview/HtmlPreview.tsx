import { useGetIsUserMemberOfTeam } from '@/synapse-queries/team/useTeamMembers'
import { sanitize } from '@/utils/functions/SanitizeHtmlUtils'
import { TRUSTED_HTML_USERS_TEAM_ID } from '@/utils/SynapseConstants'
import { Alert } from '@mui/material'
import { useEffect, useMemo, useRef, useState } from 'react'
import { SynapseSpinner } from '../../LoadingScreen/LoadingScreen'

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
  const frameEl = useRef(null)
  const [frameHeight, setFrameHeight] = useState(100)

  const { data: teamMembership, isLoading } = useGetIsUserMemberOfTeam(
    TRUSTED_HTML_USERS_TEAM_ID,
    createdByUserId,
  )
  const updateHeight = () => {
    if (frameEl?.current && frameEl?.current['contentWindow']) {
      let newHeightPx: number =
        frameEl.current['contentWindow']['document']['body']['scrollHeight']
      if (newHeightPx < 450) {
        newHeightPx = 450
      }
      if (!frameHeight || Math.abs(newHeightPx - frameHeight) > 70) {
        setFrameHeight(newHeightPx + 50)
      }
    }
  }
  useEffect(() => {
    setInterval(() => {
      updateHeight()
    }, 500)
  }, [rawHtml])
  const htmlIsCreatedByTrustedUser = !!teamMembership

  const cleanHtml = useCleanHtml({
    rawHtml,
    isLoading,
    isTrusted: htmlIsCreatedByTrustedUser,
  })

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
        srcDoc={cleanHtml}
        height={`${frameHeight}px`}
        style={{ border: 0, width: '100%' }}
      />
    </>
  )
}

export const EXPORTED_FOR_UNIT_TESTING = {
  useCleanHtml,
}
