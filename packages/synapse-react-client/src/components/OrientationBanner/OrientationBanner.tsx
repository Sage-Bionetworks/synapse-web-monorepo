import { useTheme } from '@mui/material'
import FullWidthAlert, {
  AlertButtonConfig,
  FullWidthAlertProps,
} from '../FullWidthAlert/FullWidthAlert'
import Illustrations from '../../assets/illustrations'
import { useCookiePreferences } from '../../utils/hooks/useCookiePreferences'
import { ReactNode, useState } from 'react'
import {
  ORIENTATION_BANNER_NAME_TO_KEY,
  OrientationBannerName,
} from '../../utils/SynapseConstants'

export interface OrientationBannerProps {
  name: OrientationBannerName
  title: string
  text: ReactNode
  primaryButtonConfig?: AlertButtonConfig
  secondaryButtonConfig?: AlertButtonConfig
  sx?: FullWidthAlertProps['sx']
}

function OrientationBanner(props: OrientationBannerProps) {
  const { name, title, text, primaryButtonConfig, secondaryButtonConfig, sx } =
    props
  const [cookiePreferences] = useCookiePreferences()

  const storageBannerId = ORIENTATION_BANNER_NAME_TO_KEY[name]
  const [showBanner, setShowBanner] = useState(
    localStorage.getItem(storageBannerId) === null,
  )

  const theme = useTheme()
  const defaultSx = {
    backgroundColor: '#F9FAFB',
    border: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
    minHeight: '152px',
    mt: 0,
    paddingLeft: 4,
    '.MuiAlert-icon': { mr: 5 },
    '.MuiAlertTitle-root': { color: theme.palette.grey[1000] },
  }
  const BannerIllustration = Illustrations[name]

  return (
    <FullWidthAlert
      show={showBanner}
      isGlobal={false}
      title={title}
      description={text}
      primaryButtonConfig={primaryButtonConfig}
      secondaryButtonConfig={secondaryButtonConfig}
      icon={<BannerIllustration />}
      onClose={() => {
        if (cookiePreferences.functionalAllowed) {
          localStorage.setItem(storageBannerId, 'true')
        }
        setShowBanner(false)
      }}
      sx={{ ...defaultSx, ...sx }}
    />
  )
}

export default OrientationBanner
