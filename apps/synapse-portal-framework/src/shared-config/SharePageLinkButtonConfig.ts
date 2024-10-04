import { SharePageLinkButtonProps } from 'synapse-react-client'
import { SynapseConfig } from '../types/portal-config'

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
export const SharePageLinkButtonConfig: SynapseConfig = {
  name: 'SharePageLinkButton',
  isOutsideContainer: true,
  props: {
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
  },
}
