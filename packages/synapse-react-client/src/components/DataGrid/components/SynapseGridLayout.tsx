import { SynapseErrorBoundary } from '@/components/error/ErrorBanner'
import { ReactNode } from 'react'

export type SynapseGridLayoutProps = {
  /** Content shown above the grid content, such as the page title */
  header?: ReactNode
  /** Class name for the container around `children`, which excludes `header` */
  contentClassName?: string
  children: ReactNode
}

/**
 * Lays out the grid page: an optional header above the grid content. The header has its own error
 * boundary, so an error in it leaves the grid content on screen.
 */
export function SynapseGridLayout({
  header,
  contentClassName,
  children,
}: SynapseGridLayoutProps) {
  return (
    <div>
      <SynapseErrorBoundary>{header}</SynapseErrorBoundary>
      <div className={contentClassName}>{children}</div>
    </div>
  )
}

export default SynapseGridLayout
