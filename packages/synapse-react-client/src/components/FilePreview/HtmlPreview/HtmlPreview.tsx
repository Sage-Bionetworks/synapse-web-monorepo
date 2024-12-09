import { useMemo, useEffect, useState, useRef } from 'react'
import xss from 'xss'
import { xssOptions } from '../../../utils/functions/SanitizeHtmlUtils'
import { useGetIsUserMemberOfTeam } from '../../../synapse-queries/team/useTeamMembers'
import { TRUSTED_HTML_USERS_TEAM_ID } from '../../../utils/SynapseConstants'
import { SynapseSpinner } from '../../LoadingScreen/LoadingScreen'
import { Alert } from '@mui/material'

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
      return xss(rawHtml, xssOptions)
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
