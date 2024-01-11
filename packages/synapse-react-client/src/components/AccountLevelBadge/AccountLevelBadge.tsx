import { Link, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as Certified } from '../../assets/icons/account-certified.svg'
import { ReactComponent as Validated } from '../../assets/icons/account-validated.svg'

export type AccountLevelBadgeType = 'certified' | 'validated'
type AccountLevelBadgeConfig = {
  label: string
  description: string
  tooltipText: string
  icon: React.ReactElement
}

export const accountLevelBadgeConfig: Record<
  AccountLevelBadgeType,
  AccountLevelBadgeConfig
> = {
  certified: {
    label: 'Certified',
    description: 'Has access to normal functionality.',
    tooltipText:
      'This user has passed Sage Certification, which means they can upload data and create new projects and tables.',
    icon: <Certified />,
  },
  validated: {
    label: 'Validated',
    description: 'Identity has been manually verified.',
    tooltipText:
      'This user is Validated. Their identity and credentials have been manually verified by Sage Bionetworks.',
    icon: <Validated />,
  },
}

export type AccountLevelBadgeProps = {
  badgeType: AccountLevelBadgeType
}

export const AccountLevelBadge: React.FunctionComponent<
  AccountLevelBadgeProps
> = ({ badgeType }: AccountLevelBadgeProps) => {
  const badgeConfig = accountLevelBadgeConfig[badgeType]
  return (
    <div className={'AccountLevelBadge cardContainer'}>
      <Tooltip title={badgeConfig.tooltipText}>
        <div className="AccountLevelBadge__iconContainer">
          {badgeConfig.icon}
        </div>
      </Tooltip>
      <div className="AccountLevelBadge__body">
        <Typography variant="headline3" sx={{ mb: '5px' }}>
          {badgeConfig.label}
        </Typography>
        <Typography variant="body1" sx={{ color: 'grey.700', mb: 1 }}>
          {badgeConfig.description}
        </Typography>
        <Link
          className="AccountLevelBadge__body__moreInfoLink"
          target="_blank"
          rel="noopener noreferrer"
          href="https://help.synapse.org/docs/User-Types.2007072795.html"
        >
          Learn more
        </Link>
      </div>
    </div>
  )
}
