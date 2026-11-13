import { useHeightInViewport } from '@/utils/hooks/useHeightInViewport'
import CloseIcon from '@mui/icons-material/Close'
import { IconButton, Typography } from '@mui/material'
import { ReactNode, useId, useState } from 'react'
import styles from './GridAgentSidebar.module.scss'

export const GRID_AGENT_SIDEBAR_TITLE = 'AI Assistant'
export const OPEN_GRID_AGENT_SIDEBAR_LABEL = `Open ${GRID_AGENT_SIDEBAR_TITLE}`
export const CLOSE_GRID_AGENT_SIDEBAR_LABEL = `Close ${GRID_AGENT_SIDEBAR_TITLE}`
export const GRID_AGENT_SIDEBAR_DEFAULT_WIDTH = 400

export type GridAgentSidebarProps = {
  open: boolean
  onClose: () => void
  children: ReactNode
}

/**
 * A right-hand sidebar for the `sidebar` slot of SynapseGridLayout. It takes its own width beside
 * the page and is at least as tall as the viewport. Its header and content stay on screen while the
 * page scrolls, whatever the page shows above or below the layout. Closing it hides it without
 * unmounting its children, so their state (such as a chat draft) survives closing and reopening.
 */
export function GridAgentSidebar({
  open,
  onClose,
  children,
}: GridAgentSidebarProps) {
  const titleId = useId()
  const [sidebarElement, setSidebarElement] = useState<HTMLElement | null>(null)
  const heightInViewport = useHeightInViewport(sidebarElement)

  return (
    <aside
      ref={setSidebarElement}
      className={styles.sidebar}
      style={{ width: GRID_AGENT_SIDEBAR_DEFAULT_WIDTH }}
      hidden={!open}
      aria-labelledby={titleId}
    >
      <div className={styles.panel} style={{ height: heightInViewport }}>
        <div className={styles.header}>
          <Typography id={titleId} variant="headline3" component="h2">
            {GRID_AGENT_SIDEBAR_TITLE}
          </Typography>
          <IconButton
            aria-label={CLOSE_GRID_AGENT_SIDEBAR_LABEL}
            size="small"
            onClick={onClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </aside>
  )
}

export default GridAgentSidebar
