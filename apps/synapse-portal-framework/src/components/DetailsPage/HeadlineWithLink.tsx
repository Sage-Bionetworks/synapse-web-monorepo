import { Box, Skeleton, Tooltip, Typography } from '@mui/material'
import { useState } from 'react'
import HelpPopover from 'synapse-react-client/components/HelpPopover/index'
import IconSvg from 'synapse-react-client/components/IconSvg/IconSvg'
import { useGetEntityHeader } from 'synapse-react-client/synapse-queries/entity/useGetEntityHeaders'
import { copyStringToClipboard } from 'synapse-react-client/utils/functions/StringUtils'

export function HeadlineWithLinkDerivedFromEntityId(props: {
  id: string
  entityTitlePrepend?: string
  helpText?: string
}) {
  const { entityTitlePrepend = '', ...rest } = props

  const { data: entityHeader, isLoading } = useGetEntityHeader(props.id)

  if (isLoading) {
    return <Skeleton width={300} />
  }
  return (
    <HeadlineWithLink
      {...rest}
      title={`${entityTitlePrepend}${entityHeader?.name ?? ''}`}
    />
  )
}

export function HeadlineWithLink(props: {
  title: string
  id: string
  helpText?: string
}) {
  const { title, id, helpText } = props
  const [showLink, setShowLink] = useState(false)
  const [copied, setCopied] = useState(false)
  return (
    <div
      onMouseOver={() => {
        setShowLink(true)
      }}
      onMouseOut={() => {
        setShowLink(false)
      }}
    >
      <Typography
        variant="sectionTitle"
        role="heading"
        sx={{ display: 'flex' }}
      >
        {title}
        {helpText && (
          <Box
            sx={{
              fontSize: '14px',
              display: 'inline-block',
              ml: '5px',
            }}
          >
            <HelpPopover markdownText={helpText} />
          </Box>
        )}
        <span
          style={{
            marginTop: '-3px',
            ...(showLink ? { display: 'inline' } : { display: 'none' }),
          }}
        >
          <Tooltip
            title={copied ? 'Copied' : 'Copy link to section'}
            placement="right"
          >
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                const urlWithoutHash = window.location.href.replace(
                  window.location.hash,
                  '',
                )
                const url = `${urlWithoutHash}#${id}`
                copyStringToClipboard(url).then(() => {
                  setCopied(true)
                })
              }}
            >
              <IconSvg icon="link" wrap={false} sx={{ pl: 1 }} />
            </div>
          </Tooltip>
        </span>
      </Typography>
    </div>
  )
}
