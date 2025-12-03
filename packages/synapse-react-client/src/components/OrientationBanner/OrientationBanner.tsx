import Illustrations from '@/assets/illustrations'
import { spreadSx } from '@/theme/spreadSx'
import { useCookiePreferences } from '@/utils/hooks/useCookiePreferences'
import { Theme } from '@mui/material'
import { SxProps } from '@mui/system'
import React, { ReactNode, useState } from 'react'
import FullWidthAlert, {
  AlertButtonConfig,
  FullWidthAlertProps,
} from '../FullWidthAlert/FullWidthAlert'

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
  'UnderConstruction',
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
  text: ReactNode
  primaryButtonConfig?: AlertButtonConfig
  secondaryButtonConfig?: AlertButtonConfig
  sx?: FullWidthAlertProps['sx']
}

function OrientationBanner(props: OrientationBannerProps): React.ReactNode {
  const { name, title, text, primaryButtonConfig, secondaryButtonConfig, sx } =
    props
  const [cookiePreferences] = useCookiePreferences()

  const storageBannerId = getOrientationBannerKey(name)
  const [showBanner, setShowBanner] = useState(
    localStorage.getItem(storageBannerId) === null,
  )

  const defaultSx: SxProps<Theme> = theme => ({
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    backgroundColor: '#F9FAFB',
    border: 'none',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
    minHeight: '152px',
    mt: 0,
    paddingLeft: 4,
    '.MuiAlert-icon': { mr: 5 },
    '.MuiAlertTitle-root': { color: theme.palette.grey[1000] },
  })
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
      sx={spreadSx(defaultSx, sx)}
    />
  )
}

export default OrientationBanner
