import React from 'react'
import { useTheme } from '@mui/material'
import FullWidthAlert, {
  AlertButtonConfig,
} from '../FullWidthAlert/FullWidthAlert'
import Illustrations from '../../assets/illustrations'

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
}

function OrientationBanner(props: OrientationBannerProps) {
  const { name, title, text, primaryButtonConfig, secondaryButtonConfig } =
    props

  const storageBannerId = getOrientationBannerKey(name)
  const [showBanner, setShowBanner] = React.useState(
    localStorage.getItem(storageBannerId) === null,
  )

  const theme = useTheme()
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
        localStorage.setItem(storageBannerId, 'true')
        setShowBanner(false)
      }}
      sx={{
        backgroundColor: '#F9FAFB',
        border: 'none',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
        minHeight: theme.spacing(19),
        mt: 0,
        paddingLeft: 4,
        '.MuiAlert-icon': { mr: 5 },
        '.MuiAlertTitle-root': { color: theme.palette.grey[1000] },
      }}
    />
  )
}

export default OrientationBanner
