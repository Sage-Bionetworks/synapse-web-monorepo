import { SharePageLinkButtonProps } from 'synapse-react-client'

const shortIoPublicApiKey = 'pk_y4sPMLrxonM7kNQV'

export const sharePageLinkButtonDetailPageProps: SharePageLinkButtonProps = {
  shortIoPublicApiKey,
  buttonProps: {
    variant: 'outlined',
    color: 'light',
    sx: {
      position: 'absolute',
      mt: '10px',
      right: '20px',
      zIndex: 100,
      '& + *': {
        '.SRC-portalCardHeader': { pt: 8 },
      },
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
      mt: '10px',
      right: '20px',
      zIndex: 100,
    },
  },
}
