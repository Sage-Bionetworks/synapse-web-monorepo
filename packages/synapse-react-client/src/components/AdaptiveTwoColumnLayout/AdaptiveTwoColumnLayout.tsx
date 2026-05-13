import { Box, SxProps } from '@mui/material'
import { ReactNode, useLayoutEffect, useRef, useState } from 'react'

export type MeasurementInfo = {
  leftHeight: number
  rightHeight: number
  ratio: number
  stacked: boolean
}

export type AdaptiveTwoColumnLayoutProps = {
  leftContent: ReactNode
  rightContent?: ReactNode
  /**
   * Stack if leftHeight / rightHeight falls below this ratio.
   * Measured once after initial render with both columns side-by-side.
   * Default: 0.45
   */
  stackRatioThreshold?: number
  gap?: string | number
  sx?: SxProps
  /**
   * Called once after the initial measurement completes. Useful for debugging.
   */
  onMeasure?: (info: MeasurementInfo) => void
}

/**
 * Lays out two columns side-by-side and, after the initial render, measures
 * their heights. If leftHeight / rightHeight < stackRatioThreshold, the layout
 * switches to a single stacked column. On mobile (xs–md) the layout always stacks.
 *
 * Measurement is performed once on mount via useLayoutEffect, which fires
 * synchronously before the browser paints, so there is no visible layout shift.
 *
 * Algorithm mirrors the prototype at https://github.com/adamhindman/detail-page-columns:
 * measure in side-by-side mode, compute ratio = leftHeight / rightHeight, stack if below threshold.
 *
 * Implementation note: CSS Grid with align-items:start is used (not Flexbox).
 * Flexbox's default align-items:stretch causes both children to report the same
 * offsetHeight (the taller column's height), making the ratio always 1.0 and
 * stacking never triggering. Grid cells with align-items:start only take the
 * height of their own content, giving accurate independent measurements.
 */
export function AdaptiveTwoColumnLayout({
  leftContent,
  rightContent,
  stackRatioThreshold = 0.45,
  gap = '40px',
  sx,
  onMeasure,
}: AdaptiveTwoColumnLayoutProps) {
  // null = not yet measured (2-column mode until useLayoutEffect reads heights)
  const [isStacked, setIsStacked] = useState<boolean | null>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  // Stable ref so onMeasure is never a useEffect dependency.
  const onMeasureRef = useRef(onMeasure)
  onMeasureRef.current = onMeasure

  // useLayoutEffect fires synchronously after React commits the DOM but before
  // the browser paints, so offsetHeight values are accurate and the user never
  // sees the intermediate 2-column state.
  //
  // NOTE: rightContent and onMeasure are intentionally excluded from the
  // dependency array. rightContent is JSX — a new object reference on every
  // parent render — so including it would restart this effect on every render,
  // preventing measurement from completing. onMeasure is accessed via
  // onMeasureRef to avoid the same issue.
  useLayoutEffect(() => {
    if (!leftRef.current) return

    if (!rightRef.current) {
      setIsStacked(false)
      return
    }

    // Both columns are in 2-column grid mode (isStacked is still null).
    // offsetHeight gives each column's independent content height.
    const leftH = leftRef.current.offsetHeight
    const rightH = rightRef.current.offsetHeight

    if (rightH > 0) {
      const ratio = leftH / rightH
      const stacked = ratio < stackRatioThreshold
      setIsStacked(stacked)
      onMeasureRef.current?.({
        leftHeight: leftH,
        rightHeight: rightH,
        ratio,
        stacked,
      })
    } else {
      setIsStacked(false)
    }
    // rightContent and onMeasure intentionally omitted — see note above.
  }, [stackRatioThreshold])

  return (
    <Box
      sx={{
        display: 'grid',
        // While unmeasured: 2 equal columns so heights are independently comparable.
        // After measurement: xs always single column; md+ follows the decision.
        gridTemplateColumns:
          isStacked === null
            ? '1fr 1fr'
            : { xs: '1fr', md: isStacked ? '1fr' : '1fr 1fr' },
        // align-items:start is critical — each cell is only as tall as its own
        // content, giving independent heights for the ratio comparison.
        alignItems: 'start',
        gap,
        ...sx,
      }}
    >
      <Box ref={leftRef}>{leftContent}</Box>
      {rightContent && <Box ref={rightRef}>{rightContent}</Box>}
    </Box>
  )
}

export default AdaptiveTwoColumnLayout
