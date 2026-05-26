import { useMediaQuery } from '@react-hookz/web'
import { SxProps } from '@mui/material'

// This code scrolls an element into view, and accounts for the fixed top nav bar height.
export const scrollToWithOffset = (el: HTMLElement) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
  const navHeight =
    document.querySelector<HTMLElement>('.nav.top-nav')?.offsetHeight ?? 75
  const yOffset = -(navHeight + 15)
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
}

export const DESKTOP_VIEWPORT_MIN_WIDTH_PX = 769
export const DESKTOP_VIEWPORT_MIN_WIDTH_MEDIA_QUERY = `(min-width: ${DESKTOP_VIEWPORT_MIN_WIDTH_PX}px)`

export const useShowDesktop = () =>
  useMediaQuery(DESKTOP_VIEWPORT_MIN_WIDTH_MEDIA_QUERY)

export const RESPONSIVE_SIDE_PADDING = {
  px: {
    xs: '16px !important',
    md: '40px !important',
  },
} satisfies SxProps

// Should stay in sync with RESPONSIVE_SIDE_PADDING
export const NEGATIVE_RESPONSIVE_SIDE_MARGIN = {
  mx: {
    xs: '-16px !important',
    md: '-40px !important',
  },
} satisfies SxProps
