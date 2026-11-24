import { Link, Typography } from '@mui/material'
import { CSSProperties, useId } from 'react'
import styles from './HubAndSpokes.module.scss'
import {
  getSpokeLayout,
  HUB_RADIUS,
  SPOKE_HEIGHT,
  SPOKE_WIDTH,
  VIEWBOX_HEIGHT,
  VIEWBOX_WIDTH,
} from './HubAndSpokesLayout'

export type Spoke = {
  label: string
  /** Opened in a new window when the spoke card is clicked */
  href: string
  imageUrl: string
  imageAlt: string
}

export type HubAndSpokesProps = {
  hubImageUrl: string
  hubImageAlt: string
  /** Placed clockwise, starting at the top */
  spokes: Spoke[]
}

const toPercent = (value: number, total: number) => `${(value / total) * 100}%`

/**
 * A central hub image surrounded by linked spoke cards, with arrows between the hub and each spoke. In narrow
 * containers the spokes collapse into a two-column grid below the hub.
 */
function HubAndSpokes({ hubImageUrl, hubImageAlt, spokes }: HubAndSpokesProps) {
  // useId output contains characters that are not valid in an SVG url(#...) reference
  const arrowheadId = `hubAndSpokesArrowhead${useId().replaceAll(/[^\w-]/g, '')}`
  const placedSpokes = spokes.map((spoke, index) => ({
    spoke,
    key: `${spoke.href} ${spoke.label}`,
    ...getSpokeLayout(index, spokes.length),
  }))
  const wheelStyle = {
    '--wheel-aspect-ratio': VIEWBOX_WIDTH / VIEWBOX_HEIGHT,
    '--hub-size': toPercent(HUB_RADIUS * 2, VIEWBOX_WIDTH),
    '--spoke-width': toPercent(SPOKE_WIDTH, VIEWBOX_WIDTH),
    '--spoke-height': toPercent(SPOKE_HEIGHT, VIEWBOX_HEIGHT),
  } as CSSProperties

  return (
    <div className={styles.container}>
      <div className={styles.wheel} style={wheelStyle}>
        <svg
          className={styles.arrows}
          viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
          aria-hidden
        >
          <defs>
            <marker
              id={arrowheadId}
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="4"
              markerHeight="4"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
            </marker>
          </defs>
          {placedSpokes.map(
            ({ key, arrow }) =>
              arrow && (
                <line
                  key={key}
                  x1={arrow.start.x}
                  y1={arrow.start.y}
                  x2={arrow.end.x}
                  y2={arrow.end.y}
                  markerStart={`url(#${arrowheadId})`}
                  markerEnd={`url(#${arrowheadId})`}
                />
              ),
          )}
        </svg>
        <div className={styles.hub}>
          <img src={hubImageUrl} alt={hubImageAlt} />
        </div>
        {placedSpokes.map(({ spoke, key, center }) => (
          <Link
            key={key}
            className={styles.spoke}
            underline="none"
            href={spoke.href}
            target="_blank"
            rel="noopener noreferrer"
            style={
              {
                '--spoke-left': toPercent(center.x, VIEWBOX_WIDTH),
                '--spoke-top': toPercent(center.y, VIEWBOX_HEIGHT),
              } as CSSProperties
            }
          >
            <img
              className={styles.spokeImage}
              src={spoke.imageUrl}
              alt={spoke.imageAlt}
            />
            <Typography component="span" className={styles.spokeLabel}>
              {spoke.label}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HubAndSpokes
