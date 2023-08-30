import React, { useEffect } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import { Tooltip } from '@mui/material'
import { TOOLTIP_DELAY_SHOW } from '../SynapseTable/SynapseTableConstants'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { useGetDownloadListStatistics } from '../../synapse-queries/download/useDownloadList'
import IconSvg from '../IconSvg/IconSvg'

export type ShowDownloadV2Props = {
  to: string
  className?: string
}

/**
 * Nav bar item, displayed when files have been added to the Download Cart.
 * This must be configured with the URL of a page dedicated to showing the Download Cart.
 */
export function ShowDownloadV2({ to, className = '' }: ShowDownloadV2Props) {
  const { accessToken } = useSynapseContext()
  const handleError = useErrorHandler()
  const tooltipText = 'Click to view items in your download cart.'

  const {
    data,
    isLoading,
    isError,
    error: newError,
  } = useGetDownloadListStatistics()

  useEffect(() => {
    if (isError && newError && accessToken) {
      handleError(newError)
    }
  }, [isError, newError, handleError, accessToken])

  if (!accessToken || isLoading) {
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
    <a
      className={`Download-Link v2 ${className}`}
      href={to}
      rel="noopener noreferrer"
    >
      {content}
    </a>
  )
}

export default ShowDownloadV2
