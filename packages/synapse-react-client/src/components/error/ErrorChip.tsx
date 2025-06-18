import { useSynapseContext } from '@/utils/context/SynapseContext'
import { ErrorOutlined, LockOutlined } from '@mui/icons-material'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { useJiraIssueCollector } from '../JiraIssueCollector'
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
  const { accessToken } = useSynapseContext()

  const loginError =
    (error.status === 403 || error.status === 401) && !accessToken
  const accessDenied = error.status === 403 && accessToken

  useJiraIssueCollector({
    show: error.status >= 500,
    issueCollector: 'SWC',
    issueSummary: '',
    issueDescription: error.reason,
    issuePriority: '3',
  })

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
