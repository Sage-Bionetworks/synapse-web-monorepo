import { ReactComponent as Certified } from '@/assets/icons/account-certified.svg'
import { ReactComponent as EnabledMFA } from '@/assets/icons/account-enabled-mfa.svg'
import { ReactComponent as Validated } from '@/assets/icons/account-validated.svg'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { ButtonProps } from '@mui/material/Button'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { ReactNode } from 'react'

export type AccountLevelBadgeType = 'certified' | 'validated' | 'enabledMFA'
type AccountLevelBadgeConfig = {
  label: string
  description: string
  tooltipText: string
  icon: ReactNode
  linkHref: string
  buttonNode?: ReactNode
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
  /* If truthy, show a button with the following props. If undefined, no button will be shown */
  buttonProps?: ButtonProps
}

export function AccountLevelBadge({
  badgeType,
  buttonProps,
}: AccountLevelBadgeProps) {
  const badgeConfig = accountLevelBadgeConfig[badgeType]
  return (
    <Card
      sx={{
        maxWidth: 325,
        minWidth: 250,
        padding: '30px 20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Tooltip title={badgeConfig.tooltipText}>
          <Box
            sx={{
              alignSelf: 'start',
              mr: '10px',
            }}
          >
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
      </Box>
      {buttonProps && (
        <Button
          fullWidth
          {...buttonProps}
          sx={{
            mt: 2,
            ...buttonProps.sx,
          }}
        ></Button>
      )}
    </Card>
  )
}
