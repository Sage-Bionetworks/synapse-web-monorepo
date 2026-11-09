import CurieAvatarHead from '@/assets/mui_components/CurieAvatarHead'
import { Fab, Tooltip } from '@mui/material'
import { OPEN_GRID_AGENT_SIDEBAR_LABEL } from './GridAgentSidebar'
import styles from './GridAgentSidebar.module.scss'

export type OpenGridAgentSidebarButtonProps = {
  onClick: () => void
}

/**
 * A floating button that reopens the closed GridAgentSidebar. It is fixed to the bottom-right
 * corner of the viewport.
 */
export function OpenGridAgentSidebarButton({
  onClick,
}: OpenGridAgentSidebarButtonProps) {
  return (
    <Tooltip title={OPEN_GRID_AGENT_SIDEBAR_LABEL} placement="left">
      <Fab
        size="small"
        aria-label={OPEN_GRID_AGENT_SIDEBAR_LABEL}
        className={styles.openButton}
        onClick={onClick}
      >
        <CurieAvatarHead />
      </Fab>
    </Tooltip>
  )
}

export default OpenGridAgentSidebarButton
