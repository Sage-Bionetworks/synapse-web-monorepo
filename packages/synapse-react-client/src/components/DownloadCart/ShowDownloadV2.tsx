import { useGetDownloadListStatistics } from '@/synapse-queries/download/useDownloadList'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { Link as MuiLink, Tooltip } from '@mui/material'
import { Suspense, useEffect } from 'react'
import { ErrorBoundary, useErrorHandler } from 'react-error-boundary'
import { Link } from 'react-router'
import IconSvg from '../IconSvg/IconSvg'
import { TOOLTIP_DELAY_SHOW } from '../SynapseTable/SynapseTableConstants'
import { SkeletonInlineBlock } from '../Skeleton'
import { EmptyFallbackComponent } from '../error'

export type ShowDownloadV2Props = {
  to: string
  className?: string
}

/**
 * Nav bar item, displayed when files have been added to the Download Cart.
 * This must be configured with the URL of a page dedicated to showing the Download Cart.
 */
function ShowDownloadV2Internal({ to, className = '' }: ShowDownloadV2Props) {
  const { isAuthenticated } = useSynapseContext()
  const handleError = useErrorHandler()
  const tooltipText = 'Click to view items in your download cart.'

  const {
    data,
    isLoading,
    isError,
    error: newError,
  } = useGetDownloadListStatistics()

  useEffect(() => {
    if (isError && newError && isAuthenticated) {
      handleError(newError)
    }
  }, [isError, newError, handleError, isAuthenticated])

  if (!isAuthenticated || isLoading) {
    return <></>
  }

  const size = data?.totalNumberOfFiles ?? 0
  if (size === 0) {
    return <></>
  }
  const content = (
    <Tooltip
      title={tooltipText}
      placement="bottom"
      enterNextDelay={TOOLTIP_DELAY_SHOW}
    >
      <span>
        <span className="SRC-primary-text-color">
          <IconSvg icon="cart" />
        </span>
        <span className={`download-cart-size`}>{size}</span>
      </span>
    </Tooltip>
  )
  return (
    <MuiLink
      to={to}
      component={Link}
      className={`Download-Link v2 ${className}`}
    >
      {content}
    </MuiLink>
  )
}

export function ShowDownloadV2(props: ShowDownloadV2Props) {
  return (
    <ErrorBoundary FallbackComponent={EmptyFallbackComponent}>
      <Suspense fallback={<SkeletonInlineBlock width={100} />}>
        <ShowDownloadV2Internal {...props} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default ShowDownloadV2
