import {
  getSpokeLayout,
  HUB_RADIUS,
  Point,
  SPOKE_HEIGHT,
  SPOKE_WIDTH,
  VIEWBOX_HEIGHT,
  VIEWBOX_WIDTH,
} from './HubAndSpokesLayout'

const HUB_CENTER: Point = { x: VIEWBOX_WIDTH / 2, y: VIEWBOX_HEIGHT / 2 }
const SPOKE_COUNTS = Array.from({ length: 12 }, (_, i) => i + 1)

function distanceFromHub(point: Point) {
  return Math.hypot(point.x - HUB_CENTER.x, point.y - HUB_CENTER.y)
}

function isInsideCard(point: Point, cardCenter: Point) {
  return (
    Math.abs(point.x - cardCenter.x) <= SPOKE_WIDTH / 2 &&
    Math.abs(point.y - cardCenter.y) <= SPOKE_HEIGHT / 2
  )
}

describe('getSpokeLayout', () => {
  it('places the first spoke at 12 o’clock and continues clockwise', () => {
    const [top, right, bottom, left] = [0, 1, 2, 3].map(
      index => getSpokeLayout(index, 4).center,
    )
    expect(top.x).toBeCloseTo(HUB_CENTER.x)
    expect(top.y).toBeLessThan(HUB_CENTER.y)
    expect(right.x).toBeGreaterThan(HUB_CENTER.x)
    expect(right.y).toBeCloseTo(HUB_CENTER.y)
    expect(bottom.x).toBeCloseTo(HUB_CENTER.x)
    expect(bottom.y).toBeGreaterThan(HUB_CENTER.y)
    expect(left.x).toBeLessThan(HUB_CENTER.x)
    expect(left.y).toBeCloseTo(HUB_CENTER.y)
  })

  it.each(SPOKE_COUNTS)(
    'keeps every card inside the wheel for %i spokes',
    count => {
      for (let index = 0; index < count; index++) {
        const { center } = getSpokeLayout(index, count)
        expect(center.x - SPOKE_WIDTH / 2).toBeGreaterThanOrEqual(0)
        expect(center.x + SPOKE_WIDTH / 2).toBeLessThanOrEqual(VIEWBOX_WIDTH)
        expect(center.y - SPOKE_HEIGHT / 2).toBeGreaterThanOrEqual(0)
        expect(center.y + SPOKE_HEIGHT / 2).toBeLessThanOrEqual(VIEWBOX_HEIGHT)
      }
    },
  )

  it.each(SPOKE_COUNTS)(
    'draws each arrow between the hub edge and the card edge for %i spokes',
    count => {
      for (let index = 0; index < count; index++) {
        const { center, arrow } = getSpokeLayout(index, count)
        expect(arrow).toBeDefined()
        const { start, end } = arrow!
        expect(distanceFromHub(start)).toBeGreaterThan(HUB_RADIUS)
        expect(distanceFromHub(end)).toBeGreaterThan(distanceFromHub(start))
        expect(isInsideCard(start, center)).toBe(false)
        expect(isInsideCard(end, center)).toBe(false)
      }
    },
  )
})
