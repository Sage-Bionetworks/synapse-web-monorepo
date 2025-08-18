import { useState } from 'react'
import MarkdownSynapse, { MarkdownSynapseProps } from './MarkdownSynapse'
import { displayToast } from '../ToastMessage/ToastMessage'
import { Box, Collapse, SxProps, Typography } from '@mui/material'
import {
  ContentCopyTwoTone,
  KeyboardArrowDownTwoTone,
  KeyboardArrowUpTwoTone,
} from '@mui/icons-material'
import { copyStringToClipboard } from '@/utils/functions/StringUtils'
import { stripHTML } from './MarkdownUtils'

export type MarkdownCollapseProps = {
  // The text that should be shown.  If not given, will default to "full text"
  textDescription?: string
  showCopyPlainText?: boolean
  title?: string
} & MarkdownSynapseProps

/**
 * Wraps a MarkdownSynapse in a Collapse area, with customizable text description.
 * Will pass down all properties to the MarkdownSynapse component, so this can be used in
 * the portal detail pages.
 * @param props
 */
export const MarkdownCollapse = (props: MarkdownCollapseProps) => {
  const [show, setShow] = useState(false)
  const [wordCount, setWordCount] = useState<number>()
  const [plainText, setPlainText] = useState<string>()

  const onMarkdownProcessingDone = (htmlContent: string | null | undefined) => {
    if (htmlContent) {
      const textContent = stripHTML(htmlContent)
      setPlainText(textContent.trim())
      setWordCount(textContent.trim().split(/\s+/).length)
    }
  }

  const {
    textDescription = 'full text',
    showCopyPlainText,
    markdown,
    ownerId,
    title,
  } = props
  if (markdown == undefined && ownerId == undefined) {
    return
  }
  const iconSx: SxProps = {
    color: 'grey.700',
    marginBottom: '-5px !important',
    height: '18px',
  }
  return (
    <div
      className="MarkdownCollapse"
      style={{
        display: wordCount != undefined && wordCount > 0 ? 'block' : 'none',
      }}
    >
      {title && (
        <Typography variant="subtitle1" sx={{ margin: '20px 0px 10px 0px' }}>
          {title}
        </Typography>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'grey.200',
          padding: '15px',
        }}
      >
        <Typography
          variant="smallLink"
          onClick={() => setShow(!show)}
          aria-controls="collapse-text"
          aria-expanded={show}
          sx={{
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          {show ? 'Hide' : 'View'} {textDescription}{' '}
          {wordCount ? `(${wordCount} words)` : ''}
          {show ? (
            <KeyboardArrowUpTwoTone sx={iconSx} />
          ) : (
            <KeyboardArrowDownTwoTone sx={iconSx} />
          )}
        </Typography>
        {showCopyPlainText && (
          <Box>
            <Typography
              variant="smallLink"
              onClick={() => {
                if (plainText) {
                  copyStringToClipboard(plainText).then(
                    () => {
                      displayToast('Successfully copied to the clipboard')
                    },
                    err => {
                      console.error(err)
                    },
                  )
                }
              }}
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              <ContentCopyTwoTone sx={iconSx} />
              Copy {textDescription} to clipboard
            </Typography>
          </Box>
        )}
      </Box>

      <Collapse in={show}>
        <Box sx={{ backgroundColor: 'grey.100', padding: '25px' }}>
          <div id="collapse-text">
            <MarkdownSynapse
              {...props}
              onMarkdownProcessingDone={onMarkdownProcessingDone}
            />
          </div>
        </Box>
      </Collapse>
    </div>
  )
}

export default MarkdownCollapse
