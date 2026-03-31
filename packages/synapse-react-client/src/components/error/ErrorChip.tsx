import { useSynapseContext } from '@/utils/context/SynapseContext'
import { ErrorOutlined, LockOutlined } from '@mui/icons-material'
import { Avatar, Chip, Tooltip } from '@mui/material'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { SignInPrompt, YOU_ARE_NOT_AUTHORIZED_MESSAGE } from './ErrorBanner'

export type ErrorChipProps = {
  chipText: string
  error: SynapseClientError
}

/**
 * A chip component for handling inline errors, where some information can be shown (e.g. an ID) without breaking an entire component.
 * @constructor
 */
export default function ErrorChip(props: ErrorChipProps) {
  const { chipText, error } = props
  const { isAuthenticated } = useSynapseContext()

  const loginError =
    (error.status === 403 || error.status === 401) && !isAuthenticated
  const accessDenied = error.status === 403 && isAuthenticated

  const variant = loginError ? 'warning' : 'error'
  let avatar
  let icon
  if (loginError || accessDenied) {
    avatar = (
      <Avatar sx={{ bgcolor: `${variant}.main` }}>
        <LockOutlined sx={{ color: 'white', width: '18px' }} />
      </Avatar>
    )
  } else {
    icon = loginError || accessDenied ? undefined : <ErrorOutlined />
  }
  let tooltipText
  if (loginError) {
    tooltipText = <SignInPrompt />
  } else if (accessDenied) {
    tooltipText = YOU_ARE_NOT_AUTHORIZED_MESSAGE
  } else {
    tooltipText = error.reason
  }

  return (
    <Tooltip title={tooltipText}>
      <Chip
        avatar={avatar}
        color={variant}
        variant="outlined"
        icon={icon}
        label={chipText}
      />
    </Tooltip>
  )
}
