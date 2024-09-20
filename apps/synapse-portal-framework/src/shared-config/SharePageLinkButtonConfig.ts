import { SynapseConfig } from '../types/portal-config'

export const SharePageLinkButtonConfig: SynapseConfig = {
  name: 'SharePageLinkButton',
  props: {
    shortIoPublicApiKey: 'pk_y4sPMLrxonM7kNQV',
    buttonProps: {
      variant: 'text',
      color: 'light',
      sx: {
        position: 'absolute',
        top: '50px',
        right: '20px',
        zIndex: 100,
      },
    },
  },
  containerClassName: 'container-full-width',
}
