import { useCallback } from 'react'
import { Button, ButtonProps } from '@mui/material'
import { displayToast } from '../ToastMessage'
import IconSvg from '../IconSvg'
import { copyStringToClipboard } from '@/utils/functions/StringUtils'
import { useCreateShortUrl } from '@/utils/hooks/useCreateShortUrl'

export type SharePageLinkButtonProps = {
  shortIoPublicApiKey?: string
  domain?: string
  buttonProps?: ButtonProps
}

export function SharePageLinkButton({
  shortIoPublicApiKey,
  domain = 'sageb.io',
  buttonProps,
}: SharePageLinkButtonProps) {
  const copyToClipboard = useCallback((value: string) => {
    copyStringToClipboard(value).then(() => {
      displayToast('Page URL copied to the clipboard', 'success')
    })
  }, [])

  const { mutate: createShortUrl } = useCreateShortUrl({
    shortIoPublicApiKey,
    domain,
    onSuccess: data => {
      copyToClipboard(data)
    },
    onError: error => {
      console.error(error)
      copyToClipboard(window.location.href)
    },
  })

  return (
    <Button
      variant="contained"
      onClick={() => {
        createShortUrl()
      }}
      {...buttonProps}
      startIcon={<IconSvg icon="contentCopy" wrap={false} />}
    >
      Share Page Link
    </Button>
  )
}

export default SharePageLinkButton
