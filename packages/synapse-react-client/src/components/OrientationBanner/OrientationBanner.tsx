import React from 'react'
import { useTheme } from '@mui/material'
import FullWidthAlert, {
  AlertButtonConfig,
  FullWidthAlertProps,
} from '../FullWidthAlert/FullWidthAlert'
import Illustrations from '../../assets/illustrations'
import { useCookiePreferences } from '../../utils/hooks/useCookiePreferences'

const OrientationBannerNameStrings = [
  'Challenges',
  'CohortBuilder',
  'DataAccessManagement',
  'Datasets',
  'Discussions',
  'Docker',
  'Favorites',
  'Files',
  'Following',
  'Projects',
  'Tables',
  'Teams',
  'TrashCan',
  'Wikis',
  'Donate',
] as const
export type OrientationBannerName =
  (typeof OrientationBannerNameStrings)[number]

export function getOrientationBannerKey(name: OrientationBannerName) {
  return 'orientation_banner_' + name.toLowerCase() + '_dismissed'
}

export const ORIENTATION_BANNER_KEYS = OrientationBannerNameStrings.map(el =>
  getOrientationBannerKey(el),
)

export interface OrientationBannerProps {
  name: OrientationBannerName
  title: string
  text: React.ReactNode
  primaryButtonConfig?: AlertButtonConfig
  secondaryButtonConfig?: AlertButtonConfig
  sx?: FullWidthAlertProps['sx']
}

function OrientationBanner(props: OrientationBannerProps) {
  const { name, title, text, primaryButtonConfig, secondaryButtonConfig, sx } =
    props
  const [cookiePreferences] = useCookiePreferences()

  const storageBannerId = getOrientationBannerKey(name)
  const [showBanner, setShowBanner] = React.useState(
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
      sx={{
        ...defaultSx,
        ...sx,
        display: { xs: 'none', md: 'unset' },
      }}
    />
  )
}

export default OrientationBanner
