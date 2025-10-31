import { Theme, useTheme } from '@mui/material'
import IconSvg, { IconName } from '../IconSvg/IconSvg'

export enum RestrictionUiType {
  Accessible = 'Accessible',
  AccessibleWithTerms = 'AccessibleWithTerms',
  AccessBlockedByRestriction = 'AccessBlockedByRestriction',
  AccessBlockedByACL = 'AccessBlockedByACL',
  AccessBlockedToAnonymous = 'AccessBlockedToAnonymous',
  AccessibleExternalFileHandle = 'AccessibleExternalFileHandle',
}

const iconConfiguration: Record<
  RestrictionUiType,
  { icon: IconName; color: (theme: Theme) => string; tooltipText: string }
> = {
  [RestrictionUiType.AccessBlockedToAnonymous]: {
    icon: 'accessClosed',
    color: theme => theme.palette.warning.main,
    tooltipText: 'You must sign in to access this item.',
  },
  [RestrictionUiType.AccessBlockedByRestriction]: {
    icon: 'accessClosed',
    color: theme => theme.palette.warning.main,
    tooltipText: 'You must request access to this restricted item.',
  },
  [RestrictionUiType.AccessBlockedByACL]: {
    icon: 'accessClosed',
    color: theme => theme.palette.warning.main,
    tooltipText: 'You do not have download access for this item.',
  },
  [RestrictionUiType.AccessibleWithTerms]: {
    icon: 'accessOpen',
    color: theme => theme.palette.success.main,
    tooltipText: 'View Terms',
  },
  [RestrictionUiType.Accessible]: {
    icon: 'accessOpen',
    color: theme => theme.palette.success.main,
    tooltipText: '',
  },
  [RestrictionUiType.AccessibleExternalFileHandle]: {
    icon: 'linkOff',
    color: theme => theme.palette.grey[700],
    tooltipText: 'Access may be controlled by an external system.',
  },
}

function AccessIcon(props: {
  restrictionUiType: RestrictionUiType
  wrap?: boolean
}) {
  const { restrictionUiType, wrap = true } = props
  const theme = useTheme()
  if (restrictionUiType) {
    const configuration = iconConfiguration[restrictionUiType]
    return (
      <IconSvg
        icon={configuration.icon}
        label={configuration.tooltipText}
        wrap={wrap}
        sx={{
          color: configuration.color(theme),
          height: '16px',
          verticalAlign: 'text-top',
        }}
      />
    )
  }
  // nothing is rendered until downloadType is determined
  return <></>
}

export default AccessIcon
