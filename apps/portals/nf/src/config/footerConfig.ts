import { FooterConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import irdicLogoSvg from './style/IRDiC-logo.svg?url'

const footer: FooterConfig = {
  contactUs: 'mailto:nf-osi@sagebionetworks.org',
  additionalLogos: [irdicLogoSvg],
}
export default footer
