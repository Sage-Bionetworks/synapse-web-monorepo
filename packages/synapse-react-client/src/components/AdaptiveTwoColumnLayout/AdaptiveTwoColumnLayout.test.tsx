import { render, screen } from '@testing-library/react'
import {
  AdaptiveTwoColumnLayout,
  MeasurementInfo,
} from './AdaptiveTwoColumnLayout'

/**
 * JSDOM always returns 0 for offsetHeight. This helper stubs the getter so
 * the first read returns `leftHeight` and the second returns `rightHeight`,
 * matching the order in which the component reads leftRef then rightRef.
 */
function mockOffsetHeights(leftHeight: number, rightHeight: number) {
  let callIndex = 0
  vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockImplementation(
    () => (callIndex++ === 0 ? leftHeight : rightHeight),
  )
}

describe('AdaptiveTwoColumnLayout', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('renders left content', () => {
    render(<AdaptiveTwoColumnLayout leftContent={<div>Left content</div>} />)
    expect(screen.getByText('Left content')).toBeInTheDocument()
  })

  it('renders right content when provided', () => {
    render(
      <AdaptiveTwoColumnLayout
        leftContent={<div>Left content</div>}
        rightContent={<div>Right content</div>}
      />,
    )
    expect(screen.getByText('Right content')).toBeInTheDocument()
  })

  it('does not render right content when not provided', () => {
    render(<AdaptiveTwoColumnLayout leftContent={<div>Left content</div>} />)
    expect(screen.queryByText('Right content')).not.toBeInTheDocument()
  })

  it('does not call onMeasure when there is no right content', () => {
    const onMeasure = vi.fn()
    render(
      <AdaptiveTwoColumnLayout
        leftContent={<div>Left</div>}
        onMeasure={onMeasure}
      />,
    )
    expect(onMeasure).not.toHaveBeenCalled()
  })

  it('does not call onMeasure when rightHeight is zero', () => {
    // JSDOM returns 0 for offsetHeight by default — simulates a zero-height element
    const onMeasure = vi.fn()
    render(
      <AdaptiveTwoColumnLayout
        leftContent={<div>Left</div>}
        rightContent={<div>Right</div>}
        onMeasure={onMeasure}
      />,
    )
    expect(onMeasure).not.toHaveBeenCalled()
  })

  it('calls onMeasure with correct measurement values', () => {
    mockOffsetHeights(100, 400)
    const onMeasure = vi.fn<(info: MeasurementInfo) => void>()

    render(
      <AdaptiveTwoColumnLayout
        leftContent={<div>Left</div>}
        rightContent={<div>Right</div>}
        onMeasure={onMeasure}
      />,
    )

    expect(onMeasure).toHaveBeenCalledWith({
      leftHeight: 100,
      rightHeight: 400,
      ratio: 0.25,
      stacked: true,
    })
  })

  it('reports stacked=true when the left/right height ratio is below the threshold', () => {
    // ratio = 100/400 = 0.25 < default threshold 0.45 → stacked
    mockOffsetHeights(100, 400)
    const onMeasure = vi.fn<(info: MeasurementInfo) => void>()

    render(
      <AdaptiveTwoColumnLayout
        leftContent={<div>Left</div>}
        rightContent={<div>Right</div>}
        onMeasure={onMeasure}
      />,
    )

    expect(onMeasure).toHaveBeenCalledWith(
      expect.objectContaining({ stacked: true }),
    )
  })

  it('reports stacked=false when the left/right height ratio is above the threshold', () => {
    // ratio = 300/400 = 0.75 > default threshold 0.45 → not stacked
    mockOffsetHeights(300, 400)
    const onMeasure = vi.fn<(info: MeasurementInfo) => void>()

    render(
      <AdaptiveTwoColumnLayout
        leftContent={<div>Left</div>}
        rightContent={<div>Right</div>}
        onMeasure={onMeasure}
      />,
    )

    expect(onMeasure).toHaveBeenCalledWith(
      expect.objectContaining({ stacked: false }),
    )
  })

  it('respects a custom stackRatioThreshold', () => {
    // ratio = 300/400 = 0.75; with threshold 0.8 → stacked
    mockOffsetHeights(300, 400)
    const onMeasure = vi.fn<(info: MeasurementInfo) => void>()

    render(
      <AdaptiveTwoColumnLayout
        leftContent={<div>Left</div>}
        rightContent={<div>Right</div>}
        stackRatioThreshold={0.8}
        onMeasure={onMeasure}
      />,
    )

    expect(onMeasure).toHaveBeenCalledWith(
      expect.objectContaining({ stacked: true }),
    )
  })

  it('re-measures when stackRatioThreshold changes', () => {
    // Initial: ratio=0.75, threshold=0.45 → not stacked
    mockOffsetHeights(300, 400)
    const onMeasure = vi.fn<(info: MeasurementInfo) => void>()

    const { rerender } = render(
      <AdaptiveTwoColumnLayout
        leftContent={<div>Left</div>}
        rightContent={<div>Right</div>}
        stackRatioThreshold={0.45}
        onMeasure={onMeasure}
      />,
    )

    expect(onMeasure).toHaveBeenCalledTimes(1)
    expect(onMeasure).toHaveBeenLastCalledWith(
      expect.objectContaining({ stacked: false }),
    )

    // Change threshold to trigger re-measurement; new heights give ratio=0.25
    vi.restoreAllMocks()
    mockOffsetHeights(100, 400)

    rerender(
      <AdaptiveTwoColumnLayout
        leftContent={<div>Left</div>}
        rightContent={<div>Right</div>}
        stackRatioThreshold={0.5}
        onMeasure={onMeasure}
      />,
    )

    expect(onMeasure).toHaveBeenCalledTimes(2)
    expect(onMeasure).toHaveBeenLastCalledWith(
      expect.objectContaining({ stacked: true }),
    )
  })

  it('passes the correct ratio value to onMeasure', () => {
    mockOffsetHeights(200, 500)
    const onMeasure = vi.fn<(info: MeasurementInfo) => void>()

    render(
      <AdaptiveTwoColumnLayout
        leftContent={<div>Left</div>}
        rightContent={<div>Right</div>}
        onMeasure={onMeasure}
      />,
    )

    expect(onMeasure).toHaveBeenCalledWith(
      expect.objectContaining({ ratio: 200 / 500 }),
    )
  })
})
