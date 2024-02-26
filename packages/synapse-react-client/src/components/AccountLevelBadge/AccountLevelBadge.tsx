import { Box, Card, Link, Tooltip, Typography } from '@mui/material'
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
    <Card
      sx={{
        maxWidth: 450,
        padding: '30px 20px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Tooltip title={badgeConfig.tooltipText}>
        <Box alignSelf="start" mr="10px">
          {badgeConfig.icon}
        </Box>
      </Tooltip>
      <Box>
        <Typography variant="headline3" gutterBottom component="div">
          {badgeConfig.label}
        </Typography>
        <Typography variant="body1" sx={{ color: 'grey.700', mb: '10px' }}>
          {badgeConfig.description}
        </Typography>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://help.synapse.org/docs/User-Types.2007072795.html"
        >
          <Typography variant="buttonLink">Learn more</Typography>
        </Link>
      </Box>
    </Card>
  )
}
