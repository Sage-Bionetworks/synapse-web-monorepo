import { Box, Card, Link, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as Certified } from '../../assets/icons/account-certified.svg'
import { ReactComponent as Validated } from '../../assets/icons/account-validated.svg'
import { ReactComponent as EnabledMFA } from '../../assets/icons/account-enabled-mfa.svg'

export type AccountLevelBadgeType = 'certified' | 'validated' | 'enabledMFA'
type AccountLevelBadgeConfig = {
  label: string
  description: string
  tooltipText: string
  icon: React.ReactElement
  linkHref: string
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
    linkHref: 'https://help.synapse.org/docs/User-Types.2007072795.html',
  },
  validated: {
    label: 'Validated',
    description: 'Identity has been manually verified.',
    tooltipText:
      'This user is Validated. Their identity and credentials have been manually verified by Sage Bionetworks.',
    icon: <Validated />,
    linkHref: 'https://help.synapse.org/docs/User-Types.2007072795.html',
  },
  enabledMFA: {
    label: 'Multi-factor Authentication',
    description: 'User has activated MFA',
    tooltipText:
      'This user currently has multi-factor authentication (MFA) activated.',
    icon: <EnabledMFA />,
    linkHref:
      'https://help.synapse.org/docs/Managing-Your-Account.2055405596.html#ManagingYourAccount-AddingTwo-FactorAuthentication(2FA)toyouraccount',
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
        maxWidth: 325,
        minWidth: 250,
        padding: '30px 20px',
        display: 'flex',
        width: '100%',
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
          href={badgeConfig.linkHref}
        >
          <Typography variant="buttonLink">Learn more</Typography>
        </Link>
      </Box>
    </Card>
  )
}
