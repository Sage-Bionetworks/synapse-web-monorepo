import { SharePageLinkButtonProps } from 'synapse-react-client/components/SharePageLinkButton/index'

const shortIoPublicApiKey = 'pk_y4sPMLrxonM7kNQV'

export const sharePageLinkButtonDetailPageProps: SharePageLinkButtonProps = {
  shortIoPublicApiKey,
  buttonProps: {
    variant: 'outlined',
    color: 'light',
    sx: {
      position: 'absolute',
      top: '50px',
      right: '20px',
      zIndex: 100,
    },
  },
}
export const sharePageLinkExplorePageButtonProps: SharePageLinkButtonProps = {
  shortIoPublicApiKey,
  buttonProps: {
    variant: 'outlined',
    color: 'primary',
    sx: {
      position: 'absolute',
      top: '35px',
      right: '20px',
      zIndex: 100,
    },
  },
}
