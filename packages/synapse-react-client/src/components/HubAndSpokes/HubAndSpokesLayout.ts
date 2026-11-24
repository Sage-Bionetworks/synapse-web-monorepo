export type Point = { x: number; y: number }

export type SpokeLayout = {
  center: Point
  arrow?: { start: Point; end: Point }
}

// All geometry lives in a 150x100 coordinate space. The wheel shares that 3:2 aspect ratio, so the SVG arrows and the
// percentage-positioned cards line up at every rendered width.
export const VIEWBOX_WIDTH = 150
export const VIEWBOX_HEIGHT = 100
export const HUB_RADIUS = 16.5
const SPOKE_RADIUS_X = 44.5
const SPOKE_RADIUS_Y = 36
export const SPOKE_WIDTH = 30
export const SPOKE_HEIGHT = 17
const ARROW_GAP = 2.5
// An exponent above 2 bends the ellipse toward a rounded rectangle, pushing diagonal spokes outward so their cards
// clear the cards at the top, bottom and sides.
const SUPERELLIPSE_EXPONENT = 3

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
export function getSpokeLayout(index: number, count: number): SpokeLayout {
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
