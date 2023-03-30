import React from 'react'
import footerConfig from './config/footerConfig'
import logoFooterConfig from './config/logoFooterConfig'
import { ReactComponent as PoweredBySvg } from './portal-assets/poweredbysynapse.svg'
import Versions from 'portal-components/Versions'
import ExperimentalMode from 'synapse-react-client/dist/containers/ExperimentalMode' // synapse-react-client/dist/utils/functions/sqlFunctions
import { URL_TERMS_CONDITIONS_AGREEMENT } from 'synapse-react-client/dist/utils/SynapseConstants'

function Footer() {
  const goToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }
  const { name, icon } = logoFooterConfig
  const logo = name ? (
    <span className="nav-logo">
      <button onClick={goToTop}>{name}</button>
      <a
        target="_blank"
        rel="noopener noreferrer"
        id="powered-by-anchor"
        href="https://synapse.org"
      >
        <PoweredBySvg />
      </a>
    </span>
  ) : (
    <img alt="footer logo" className="nav-logo" src={icon} />
  )
  const termsOfServiceUrl =
    footerConfig.termsOfService ?? URL_TERMS_CONDITIONS_AGREEMENT
  return (
    <footer id="footer" className="center-content">
      <div id="portal-title-footer">
        <div id="footer-logo-link">{logo}</div>
      </div>
      <div id="portal-contact-footer" className="center-content">
        <ExperimentalMode />
        <Versions />
        <a
          rel="noopener noreferrer"
          target={termsOfServiceUrl.charAt(0) === '/' ? '_self' : '_blank'}
          href={termsOfServiceUrl}
          className="footer-item"
        >
          Terms of Service
        </a>
        {footerConfig.contactUs && (
          <a
            rel="noopener noreferrer"
            href={footerConfig.contactUs}
            className="footer-item"
          >
            Contact Us
          </a>
        )}
        {footerConfig.forum && (
          <a
            href={footerConfig.forum}
            className="footer-item"
            target="_blank"
            rel="noreferrer"
          >
            Forum
          </a>
        )}
        {footerConfig.about && (
          <a
            href={footerConfig.about}
            className="footer-item"
            target="_blank"
            rel="noreferrer"
          >
            About
          </a>
        )}
      </div>
    </footer>
  )
}

export default React.memo(Footer)
