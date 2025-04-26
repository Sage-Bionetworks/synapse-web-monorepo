import { useCallback } from 'react'
import { useMutation } from '@tanstack/react-query'
import { displayToast } from '../ToastMessage'
import IconSvg from '../IconSvg'
import { Button, ButtonProps } from '@mui/material'
import { copyStringToClipboard } from '@/utils/functions/StringUtils'

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
    copyStringToClipboard(value, () => {
      displayToast('Page URL copied to the clipboard', 'success')
    })
  }, [])
  // create short io link (if not already created)
  const { mutate: createShortUrl } = useMutation({
    mutationFn: async () => {
      if (!shortIoPublicApiKey) {
        return window.location.href
      } else {
        const response = await fetch('https://api.short.io/links/public', {
          method: 'POST',
          headers: {
            Authorization: shortIoPublicApiKey,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            originalURL: window.location.href,
            domain: domain,
          }),
        })
        if (!response.ok) {
          const responseText = await response.text()
          throw new Error(responseText)
        }
        const jsonResponse = await response.json()
        return jsonResponse.shortURL
      }
    },
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
