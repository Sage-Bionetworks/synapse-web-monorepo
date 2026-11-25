import CurieAvatarHead from '@/assets/mui_components/CurieAvatarHead'
import { SynapseErrorBoundary } from '@/components/error/ErrorBanner'
import { useElementWidth } from '@/utils/hooks/useElementWidth'
import { useHeightInViewport } from '@/utils/hooks/useHeightInViewport'
import CloseIcon from '@mui/icons-material/Close'
import { Fab, IconButton, Tooltip, Typography } from '@mui/material'
import { ReactNode, useId, useState } from 'react'
import styles from './GridAgentSidebar.module.scss'
import { GridAgentSidebarResizeHandle } from './GridAgentSidebarResizeHandle'
import { useGridAgentSidebarResize } from './useGridAgentSidebarResize'

export const GRID_AGENT_SIDEBAR_TITLE = 'AI Assistant'
export const OPEN_GRID_AGENT_SIDEBAR_LABEL = `Open ${GRID_AGENT_SIDEBAR_TITLE}`
export const CLOSE_GRID_AGENT_SIDEBAR_LABEL = `Close ${GRID_AGENT_SIDEBAR_TITLE}`

export type GridAgentSidebarProps = {
  open: boolean
  onOpen: () => void
  onClose: () => void
  children: ReactNode
}

/**
 * A right-hand sidebar for the `sidebar` slot of SynapseGridLayout. It takes its own width beside
 * the page and is at least as tall as the viewport. Its header and content stay on screen while the
 * page scrolls, whatever the page shows above or below the layout. Its left edge can be dragged (or
 * moved with the arrow keys when focused) to resize it, and the chosen width persists in
 * localStorage. Closing it hides it without unmounting its children, so their state (such as a chat
 * draft) survives closing and reopening. While it is closed, a floating button in the bottom-right
 * corner of the viewport reopens it. An error in its children is shown in the sidebar instead of
 * replacing the page.
 */
export function GridAgentSidebar({
  open,
  onOpen,
  onClose,
  children,
}: GridAgentSidebarProps) {
  const titleId = useId()
  const sidebarId = useId()
  const [sidebarElement, setSidebarElement] = useState<HTMLElement | null>(null)
  // A hidden sidebar measures as empty, so it is measured only while open
  const heightInViewport = useHeightInViewport(open ? sidebarElement : null)
  const layoutWidth = useElementWidth(sidebarElement?.parentElement ?? null)
  const resize = useGridAgentSidebarResize(layoutWidth)

  return (
    <>
      {!open && (
        <Tooltip title={OPEN_GRID_AGENT_SIDEBAR_LABEL} placement="left">
          <Fab
            size="small"
            aria-label={OPEN_GRID_AGENT_SIDEBAR_LABEL}
            className={styles.openButton}
            onClick={onOpen}
          >
            <CurieAvatarHead />
          </Fab>
        </Tooltip>
      )}
      <aside
        id={sidebarId}
        ref={setSidebarElement}
        className={styles.sidebar}
        style={{ width: resize.width }}
        hidden={!open}
        aria-labelledby={titleId}
      >
        <GridAgentSidebarResizeHandle
          resize={resize}
          titleId={titleId}
          sidebarId={sidebarId}
        />
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
          <div className={styles.body}>
            <SynapseErrorBoundary>{children}</SynapseErrorBoundary>
          </div>
        </div>
      </aside>
    </>
  )
}

export default GridAgentSidebar
