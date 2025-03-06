import { FooterConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import irdicLogoSvg from './style/IRDiC-logo.svg?url'

const footer: FooterConfig = {
  contactUs: 'https://sagebionetworks.jira.com/servicedesk/customer/portal/2',
  additionalLogos: [irdicLogoSvg],
}
export default footer
