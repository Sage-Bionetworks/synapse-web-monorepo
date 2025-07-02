import { Box, Skeleton, Tooltip, Typography } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { ReactNode, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { HelpPopover, IconSvg } from 'synapse-react-client'
import { copyStringToClipboard } from 'synapse-react-client/utils/functions/StringUtils'
import { useGetEntityHeader } from 'synapse-react-client/synapse-queries'

type CollapsibleSectionProps = {
  title: string
  children: ReactNode
  id: string
  helpText?: string
  hideTitle?: boolean
  linkDerivedFromEntityId?: boolean
  entityTitlePrepend?: string
}

const CollapsibleSection = ({
  title,
  children,
  id,
  helpText,
  hideTitle = false,
  linkDerivedFromEntityId = false,
  entityTitlePrepend = '',
}: CollapsibleSectionProps) => {
  const [open, setOpen] = useState(true)
  const [showLink, setShowLink] = useState(false)
  const [copied, setCopied] = useState(false)

  const { data: entityHeader, isLoading } = useGetEntityHeader(
    linkDerivedFromEntityId ? id : undefined,
  )

  if (linkDerivedFromEntityId && isLoading) {
    return <Skeleton width={300} />
  }

  return (
    <Box
      id={id}
      onMouseOver={() => {
        setShowLink(true)
      }}
      onMouseOut={() => {
        setShowLink(false)
      }}
    >
      <Box sx={{ gap: '30px' }}>
        {!hideTitle && title && (
          <Box
            sx={{
              display: 'flex',
              borderBottom: '1px solid',
              borderColor: 'grey.400',
              marginBottom: '30px',
            }}
            onClick={() => setOpen(!open)}
          >
            <Typography
              variant="sectionTitle"
              sx={{
                display: 'flex',
                marginBottom: '14px',
              }}
            >
              {linkDerivedFromEntityId
                ? `${entityTitlePrepend}${entityHeader?.name ?? ''}`
                : title}
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
                    onClick={e => {
                      e.stopPropagation()
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
            {open ? (
              <KeyboardArrowUpIcon
                sx={{
                  marginLeft: 'auto',
                  cursor: 'pointer',
                  color: '#878E95',
                }}
              />
            ) : (
              <KeyboardArrowDownIcon
                sx={{
                  marginLeft: 'auto',
                  cursor: 'pointer',
                  color: '#878E95',
                }}
              />
            )}
          </Box>
        )}
        <Box sx={{ paddingBottom: open ? '50px' : 0 }}>{open && children}</Box>
      </Box>
    </Box>
  )
}

export default CollapsibleSection
