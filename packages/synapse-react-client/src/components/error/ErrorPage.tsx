import * as React from 'react'
import { ReactComponent as MaintenanceSvg } from '../../assets/icons/error_page/maintenance.svg'
import { ReactComponent as NoAccessSvg } from '../../assets/icons/error_page/no-access.svg'
import { ReactComponent as UnavailableSvg } from '../../assets/icons/error_page/unavailable.svg'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'

export type ErrorPageProps = {
  image: string
  title: string
  message: string
}

const getImage = (image: string) => {
  switch (image) {
    case 'maintenance':
      return <MaintenanceSvg role="img" title={image} />
    case 'noAccess':
      return <NoAccessSvg role="img" title={image} />
    case 'unavailable':
      return <UnavailableSvg role="img" title={image} />
    default:
      return <></>
  }
}

const ErrorPage: React.FunctionComponent<ErrorPageProps> = props => {
  const { image, title, message } = props

  return (
    <div className={'error-page-wrapper'}>
      <div className={'error-page-content'}>
        <div className={'error-page-image'}>{getImage(image)}</div>
        <div className={'error-page-message'}>
          <h2>{title}</h2>
          <p>{message}</p>
          <ul>
            <li>
              <a href={PRODUCTION_ENDPOINT_CONFIG.PORTAL}>Synapse Home</a>
            </li>
            <li>
              <a
                href={
                  'https://sagebionetworks.jira.com/servicedesk/customer/portal/9'
                }
              >
                Contact Us
              </a>
            </li>
            <li>
              <a href={'http://status.synapse.org/'}>Status</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
