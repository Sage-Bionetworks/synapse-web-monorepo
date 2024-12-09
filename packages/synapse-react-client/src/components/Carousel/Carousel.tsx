import BrainhubCarousel, {
  CarouselProps as BrainhubCarouselProps,
} from '@brainhubeu/react-carousel'
import { Children, cloneElement, ReactElement, useState } from 'react'
import Arrow from '../../assets/icons/Arrow'
import useShowDesktop from '../../utils/hooks/useShowDesktop'
import { SizeMe } from 'react-sizeme'
import '@brainhubeu/react-carousel/lib/style.css'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
function mod(a: number, b: number) {
  return ((a % b) + b) % b
}

export type CarouselProps = {
  children: ReactElement[]
  isLoading?: boolean
}

const DesktopProps: BrainhubCarouselProps = {
  clickToChange: true,
  infinite: true,
  slidesPerScroll: 1,
  slidesPerPage: 3,
  centered: true,
  arrowLeft: <Arrow className="SRC-Carousel__Arrow" arrowDirection="left" />,
  arrowRight: <Arrow className="SRC-Carousel__Arrow" arrowDirection="right" />,
  addArrowClickHandler: true,
  breakpoints: {
    1100: {
      slidesPerPage: 1,
    },
  },
}

const MobileProps: BrainhubCarouselProps = {
  dots: true,
  infinite: true,
  slidesPerScroll: 1,
  slidesPerPage: 1,
}

/**
 * Responsive carousel. The component will display a loading spinner if no children are passed via props.
 * Note that the child components must accept a className prop, or its class will be overriden
 */
export function Carousel({ children, isLoading = false }: CarouselProps) {
  const showDesktop = useShowDesktop()
  const [currentIndex, setCurrentIndex] = useState(0)

  const styledChildren = Children.map(children, (child, index) => {
    // react-carousel renders a flexbox that translates the visible portion to achieve the carousel effect.
    // To create the 'infinite' effect, duplicates are rendered, and the translation sometimes 'jumps' to the previous identical part of the flex container
    // Styling just the 'active' card (and not duplicates) causes CSS transitions to appear to run twice when the translation jumps
    // Calculating the mod index lets us style all duplicates, preventing the user from seeing multiple transitions.
    let childClass = child.props.className ?? ''
    if (index === mod(currentIndex, children.length)) {
      childClass += ' SRC-Carousel__SelectedCard'
    } else {
      childClass += ' SRC-Carousel__UnselectedCard'
    }
    return cloneElement(child, {
      className: childClass,
      role: 'listitem',
    })
  })

  return isLoading ? (
    <div className="spinner" style={{ display: 'block' }} />
  ) : (
    <div
      className="SRC-Carousel"
      role={'marquee'}
      aria-roledescription="carousel"
    >
      <SizeMe refreshMode="debounce" noPlaceholder={true}>
        {({ size }) => (
          // @ts-ignore - the BrainhubCarousel component doesn't properly specify `children`
          <BrainhubCarousel
            {...(showDesktop ? DesktopProps : MobileProps)}
            key={size.width}
            value={currentIndex}
            onChange={value => setCurrentIndex(value)}
          >
            {styledChildren}
          </BrainhubCarousel>
        )}
      </SizeMe>
    </div>
  )
}

export default Carousel
