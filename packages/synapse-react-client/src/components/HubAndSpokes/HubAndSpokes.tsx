import { Link, Typography } from '@mui/material'
import { CSSProperties, useId } from 'react'
import styles from './HubAndSpokes.module.scss'

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

type Point = { x: number; y: number }

type SpokeLayout = {
  center: Point
  arrow?: { start: Point; end: Point }
}

// All geometry lives in a 150x100 coordinate space. The wheel shares that 3:2 aspect ratio, so the SVG arrows and the
// percentage-positioned cards line up at every rendered width.
const VIEWBOX_WIDTH = 150
const VIEWBOX_HEIGHT = 100
const HUB_RADIUS = 16.5
const SPOKE_RADIUS_X = 44.5
const SPOKE_RADIUS_Y = 36
const SPOKE_WIDTH = 30
const SPOKE_HEIGHT = 17
const ARROW_GAP = 2.5
// An exponent above 2 bends the ellipse toward a rounded rectangle, pushing diagonal spokes outward so their cards
// clear the cards at the top, bottom and sides.
const SUPERELLIPSE_EXPONENT = 3

const toPercent = (value: number, total: number) => `${(value / total) * 100}%`

// Standard superellipse parametrization: x = rx·sgn(cos θ)·|cos θ|^(2/n), y = ry·sgn(sin θ)·|sin θ|^(2/n). With n = 2
// this reduces to an ordinary ellipse (rx·cos θ, ry·sin θ). sgn keeps the quadrant, since a fractional power of a
// negative number is undefined.
function superellipseComponent(trig: number, radius: number) {
  return (
    radius * Math.sign(trig) * Math.abs(trig) ** (2 / SUPERELLIPSE_EXPONENT)
  )
}

/**
 * Places spoke `index` of `count` around the hub, and the arrow connecting the two.
 * @returns the spoke card's center and the arrow endpoints, in viewBox coordinates. `arrow` is omitted when the card
 * sits too close to the hub to leave room for one.
 */
function getSpokeLayout(index: number, count: number): SpokeLayout {
  // Spokes are spaced evenly around a full turn (2π / count apart). Screen y grows downward, so increasing angles run
  // clockwise, and the -π/2 starting offset puts the first spoke at 12 o'clock rather than 3 o'clock.
  const angle = -Math.PI / 2 + (2 * Math.PI * index) / count

  // Card center relative to the hub center. Separate horizontal and vertical radii stretch the ring to fill the
  // wheel's wide aspect ratio.
  const offset = {
    x: superellipseComponent(Math.cos(angle), SPOKE_RADIUS_X),
    y: superellipseComponent(Math.sin(angle), SPOKE_RADIUS_Y),
  }

  // The superellipse distorts the angle, so the ray from the hub to the card is recomputed from the actual offset
  // instead of reusing `angle`. Arrows follow this ray, so they always point straight at the card's center.
  const distance = Math.hypot(offset.x, offset.y)
  const direction = { x: offset.x / distance, y: offset.y / distance }

  // How far the ray travels from the card's center before leaving its rectangle. The ray crosses a vertical edge after
  // halfWidth / |dx| and a horizontal edge after halfHeight / |dy|; it exits through whichever comes first. A zero or
  // near-zero component makes its term Infinity or very large, so a vertical or horizontal ray picks the other edge.
  const cardEdgeDistance = Math.min(
    SPOKE_WIDTH / 2 / Math.abs(direction.x),
    SPOKE_HEIGHT / 2 / Math.abs(direction.y),
  )

  // Arrow endpoints as distances along the ray from the hub center: it starts just outside the hub's circle and ends
  // just short of the card's edge, leaving ARROW_GAP of space at both ends.
  const arrowStart = HUB_RADIUS + ARROW_GAP
  const arrowEnd = distance - cardEdgeDistance - ARROW_GAP

  // Converts a distance along the ray into absolute viewBox coordinates, measured from the hub at the viewBox center
  const pointAt = (length: number): Point => ({
    x: VIEWBOX_WIDTH / 2 + direction.x * length,
    y: VIEWBOX_HEIGHT / 2 + direction.y * length,
  })

  return {
    center: pointAt(distance),
    arrow:
      arrowEnd > arrowStart
        ? { start: pointAt(arrowStart), end: pointAt(arrowEnd) }
        : undefined,
  }
}

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
