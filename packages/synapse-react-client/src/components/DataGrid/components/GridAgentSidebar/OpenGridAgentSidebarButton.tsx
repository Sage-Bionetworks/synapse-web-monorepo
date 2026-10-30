import CurieAvatarHead from '@/assets/mui_components/CurieAvatarHead'
import { Fab, Tooltip } from '@mui/material'
import { GRID_AGENT_SIDEBAR_TITLE } from './GridAgentSidebar'
import styles from './GridAgentSidebar.module.scss'

export type OpenGridAgentSidebarButtonProps = {
  onClick: () => void
}

/**
 * A floating button that reopens the closed GridAgentSidebar. Positioned in the bottom-right
 * corner of the nearest positioned ancestor.
 */
export function OpenGridAgentSidebarButton({
  onClick,
}: OpenGridAgentSidebarButtonProps) {
  const label = `Open ${GRID_AGENT_SIDEBAR_TITLE}`
  return (
    <Tooltip title={label} placement="left">
      <Fab
        size="small"
        aria-label={label}
        className={styles.openButton}
        onClick={onClick}
      >
        <CurieAvatarHead />
      </Fab>
    </Tooltip>
  )
}

export default OpenGridAgentSidebarButton
