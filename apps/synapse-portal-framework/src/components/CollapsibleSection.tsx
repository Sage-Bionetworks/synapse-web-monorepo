import { Box, Collapse, Skeleton, Tooltip, Typography } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { ReactNode, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { HelpPopover, IconSvg } from 'synapse-react-client'
import { copyStringToClipboard } from 'synapse-react-client/utils/functions/StringUtils'
import { useGetEntityHeader } from 'synapse-react-client/synapse-queries'

type BaseCollapsibleSectionProps = {
  id: string
  children: ReactNode
  helpText?: string
  hideTitle?: boolean
}

type CollapsibleSectionProps = BaseCollapsibleSectionProps & {
  title: string
}

type CollapsibleSectionDerivedFromEntityIdProps =
  BaseCollapsibleSectionProps & {
    entityTitlePrepend?: string
  }

export const CollapsibleSectionDerivedFromEntityId = ({
  id,
  children,
  helpText,
  hideTitle = false,
  entityTitlePrepend = '',
}: CollapsibleSectionDerivedFromEntityIdProps) => {
  const { data: entityHeader, isLoading } = useGetEntityHeader(id)

  if (isLoading) {
    return <Skeleton width={300} />
  }

  const title = `${entityTitlePrepend}${entityHeader?.name ?? ''}`

  return (
    <CollapsibleSection
      id={id}
      title={title}
      helpText={helpText}
      hideTitle={hideTitle}
    >
      {children}
    </CollapsibleSection>
  )
}

const CollapsibleSection = ({
  title,
  children,
  id,
  helpText,
  hideTitle = false,
}: CollapsibleSectionProps) => {
  const [open, setOpen] = useState(true)
  const [showLink, setShowLink] = useState(false)
  const [copied, setCopied] = useState(false)

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
        <Collapse in={open} unmountOnExit timeout="auto">
          <Box sx={{ paddingBottom: '50px' }}>{children}</Box>
        </Collapse>
      </Box>
    </Box>
  )
}

export default CollapsibleSection
