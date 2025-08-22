import Versions from '@/components/Versions'
import { Box, darken, Typography, useTheme } from '@mui/material'
import { memo } from 'react'
import ExperimentalMode from 'synapse-react-client/components/ExperimentalMode'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { ReactComponent as PoweredBySvg } from '../portal-assets/poweredbysynapse.svg'
import { usePortalContext } from './PortalContext'

function Footer() {
  const { footerConfig, logoFooterConfig } = usePortalContext()
  const theme = useTheme()
  const darkerBackgroundColor = darken(theme.palette.primary.main, 0.1) // Darken primary background color by 10%
  const goToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }
  const { name, icon } = logoFooterConfig
  const logo = name ? (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <button onClick={goToTop}>{name}</button>
      <a
        target="_blank"
        rel="noopener noreferrer"
        id="powered-by-anchor"
        href="https://www.synapse.org"
        style={{ height: '14px' }}
      >
        <PoweredBySvg />
      </a>
    </Box>
  ) : (
    <img alt="footer" className="nav-logo" src={icon} />
  )
  const termsOfServiceUrl =
    footerConfig.termsOfService ??
    SynapseConstants.URL_TERMS_CONDITIONS_AGREEMENT
  return (
    <footer id="footer">
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
          rowGap: '30px',
          p: { xs: '20px 40px', md: '40px 80px' },
        }}
      >
        <Box>{logo}</Box>
        <Box
          sx={{
            display: 'flex',
            gap: { xs: '30px', md: '60px' },
            alignItems: 'center',
            flexWrap: 'wrap',
            textWrap: 'nowrap',
          }}
        >
          {footerConfig.contactUs && (
            <Typography variant="body1">
              <a rel="noopener noreferrer" href={footerConfig.contactUs}>
                Contact Us
              </a>
            </Typography>
          )}
          <Typography variant="body1">
            <a
              rel="noopener noreferrer"
              target={termsOfServiceUrl.charAt(0) === '/' ? '_self' : '_blank'}
              href={termsOfServiceUrl}
            >
              Terms of Service
            </a>
          </Typography>
          {footerConfig.forum && (
            <Typography variant="body1">
              <a href={footerConfig.forum} target="_blank" rel="noreferrer">
                Forum
              </a>
            </Typography>
          )}
          {footerConfig.about && (
            <Typography variant="body1">
              <a href={footerConfig.about} target="_blank" rel="noreferrer">
                About
              </a>
            </Typography>
          )}
          {footerConfig.additionalLogos &&
            footerConfig.additionalLogos.map(additionalLogoSvg => {
              return <img key={additionalLogoSvg} src={additionalLogoSvg} />
            })}
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: darkerBackgroundColor,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: { xs: '20px 40px', md: '40px 80px' },
        }}
      >
        <Versions />
        <ExperimentalMode />
      </Box>
    </footer>
  )
}

export default memo(Footer)
