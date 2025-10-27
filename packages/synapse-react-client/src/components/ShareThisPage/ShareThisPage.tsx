import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Input,
  Box,
} from '@mui/material'
import { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import CopyToClipboardIcon from '../CopyToClipboardIcon'
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  BlueskyShareButton,
  BlueskyIcon,
  XIcon,
} from 'react-share'
import styles from './ShareThisPage.module.scss'
import { ShareTwoTone } from '@mui/icons-material'
import { useCreateShortUrl } from '../../utils/hooks/useCreateShortUrl'

export type ShareThisPageProps = {
  shortIoPublicApiKey?: string
  domain?: string
  renderAs?: 'button' | 'icon'
  open?: boolean
  onClose?: () => void
}

const ShareThisPage = ({
  shortIoPublicApiKey,
  domain = 'sageb.io',
  renderAs = 'button',
  open: externalOpen,
  onClose: externalOnClose,
}: ShareThisPageProps) => {
  const [url, setUrl] = useState('')
  const [internalOpen, setInternalOpen] = useState(false)

  // Use internal state if externalOpen is undefined
  // Otherwise, the open state is controlled externally by externalOpen
  const isControlled = externalOpen === undefined
  const open = isControlled ? internalOpen : externalOpen

  const handleOpen = () => {
    if (isControlled) {
      setInternalOpen(true)
    }
  }

  const handleClose = () => {
    if (isControlled) {
      setInternalOpen(false)
    }
    if (externalOnClose) {
      externalOnClose()
    }
  }

  const { mutate: createShortUrl, isPending } = useCreateShortUrl({
    shortIoPublicApiKey,
    domain,
    onSuccess: data => {
      setUrl(data)
    },
    onError: error => {
      console.error(error)
      setUrl(window.location.href)
    },
  })

  useEffect(() => {
    if (open) {
      createShortUrl()
    }
  }, [open, createShortUrl])

  return (
    <div>
      {renderAs === 'button' && (
        <Button
          variant="outlined"
          endIcon={<ShareTwoTone className={styles.shareIcon} />}
          onClick={handleOpen}
        >
          Share
        </Button>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        className={styles.dialogPaper}
      >
        <DialogTitle className={styles.dialogTitle}>
          Share this page
          <IconButton onClick={handleClose} size="small">
            <CloseIcon className={styles.closeIcon} />
          </IconButton>
        </DialogTitle>

        <DialogContent className={styles.dialogContent}>
          <Box className={styles.contentStack}>
            <div className={styles.shareButtonsContainer}>
              <LinkedinShareButton url={url} aria-label="Share on LinkedIn">
                <div className={styles.shareItem}>
                  <LinkedinIcon size={48} round />
                  <Typography variant="body1" className={styles.shareItemLabel}>
                    LinkedIn
                  </Typography>
                </div>
              </LinkedinShareButton>

              <TwitterShareButton url={url} aria-label="Share on X">
                <div className={styles.shareItem}>
                  <XIcon size={48} round />
                  <Typography variant="body1" className={styles.shareItemLabel}>
                    X
                  </Typography>
                </div>
              </TwitterShareButton>

              <BlueskyShareButton url={url} aria-label="Share on Bluesky">
                <div className={styles.shareItem}>
                  <BlueskyIcon size={48} round />
                  <Typography variant="body1" className={styles.shareItemLabel}>
                    Bluesky
                  </Typography>
                </div>
              </BlueskyShareButton>
            </div>

            <div className={styles.copySection}>
              <Typography className={styles.copyLabel}>Page Link</Typography>
              <div className={styles.copyRow}>
                <Input
                  className={styles.urlInput}
                  value={url}
                  readOnly
                  aria-label="Page URL"
                  placeholder={isPending ? 'Generating link...' : ''}
                />
                <CopyToClipboardIcon
                  value={url}
                  sizePx={24}
                  className={styles.copyButton}
                />
              </div>
            </div>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ShareThisPage
