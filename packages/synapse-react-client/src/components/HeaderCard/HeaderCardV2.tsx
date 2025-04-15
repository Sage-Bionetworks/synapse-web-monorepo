import { CardLabel } from '@/components/row_renderers/utils/CardFooter'
import React, { useState, useEffect, useRef } from 'react'
import {
  Box,
  Card,
  Typography,
  Link,
  Stack,
  Button,
  ButtonProps,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { DescriptionConfig } from '../CardContainerLogic'
import { CollapsibleDescription } from '../GenericCard/CollapsibleDescription'

interface CTAButton {
  label: string
  href?: string
  variant?: ButtonProps['variant']
  sx?: ButtonProps['sx']
  endIcon?: React.ReactNode
  // Add other button props as needed
}

export type HeaderCardV2Props = {
  /** Type label displayed at the top of the card */
  type: string
  /** Main title of the card */
  title: string
  /** Optional subtitle, often used for author or additional context */
  subTitle?: string
  /** Main description text */
  description: string
  /** Maximum number of secondary labels to show before "Show More" */
  secondaryLabelLimit?: number
  /** Array of label-value pairs to display in the card footer */
  values?: CardLabel[]
  /** Whether to align the card to the left navigation */
  isAlignToLeftNav?: boolean
  /** Configuration for the collapsible description */
  descriptionConfig?: DescriptionConfig
  /** Optional URL for making the title clickable */
  href?: string
  /** Target attribute for the title link */
  target?: string
  /** Icon element to display */
  icon: React.ReactNode
  /** Optional background image URL */
  backgroundImage?: string
  /** Force values section to appear below main content */
  forceStackedLayout?: boolean
  /** Optional array of CTA buttons to display below description */
  ctaButtons?: CTAButton[]
}

/**
 * HeaderCardV2 Component
 *
 * A material-UI based card component for displaying detailed information with metadata.
 * This component supports responsive layouts, background images, and dynamic content
 * organization.
 *
 * Layout Structure:
 * ┌───────────────────────────────────────────────────────────────┐
 * │ ┌─────┐  Type Label                                           │
 * │ │Icon │  Title                                                │
 * │ │     │  Subtitle                                             │
 * │ └─────┘                                                       │
 * │         Description                     Metadata              │
 * │         [Show More/Less]                --------              │
 * │                                         Label 1    Value 1    │
 * │         [CTA Buttons]                   Label 2    Value 2    │
 * └───────────────────────────────────────────────────────────────┘
 *
 * Features:
 * - Responsive layout with configurable breakpoints
 * - Optional background image with overlay
 * - Collapsible description text
 * - Right-aligned or stacked metadata section
 * - Call-to-action buttons
 * - SEO-friendly meta tags management
 *
 * Meta Tags Handling:
 * - Updates document title with card title
 * - Sets meta description from card description/subtitle
 * - Restores original meta data on component cleanup
 *
 * Layout Modes:
 * - Default: Icon + Content | Metadata (on desktop)
 * - Stacked: Full width content with metadata below
 * - Mobile: All sections stack vertically
 * - Height-Based: Stacks when metadata height exceeds description height
 *
 * @component
 * @example
 * ```tsx
 * <HeaderCardV2
 *   type="Study"
 *   title="Example Study"
 *   description="Study description"
 *   values={[['Status', 'Active'], ['Access', 'Public']]}
 *   icon={<StudyIcon />}
 *   ctaButtons={[
 *     { label: 'View Details', variant: 'contained' }
 *   ]}
 * />
 * ```

 * Core component logic:
 * 1. Responsive Layout:
 *    - Uses MUI Grid for flexible layouts
 *    - Switches to stacked layout on mobile, when forceStackedLayout is true,
 *      or when the metadata table height exceeds the description height
 *
 * 2. Meta Tags:
 *    - Manages document title and meta description
 *    - Preserves original values for cleanup
 *
 * 3. Content Sections:
 *    - Icon: Optional, maintains aspect ratio
 *    - Main Content: Type, title, subtitle, description
 *    - Metadata: Right-aligned or stacked key-value pairs
 *    - CTA Buttons: Optional action buttons below description
 *
 * 4. Styling:
 *    - Background image support with overlay
 *    - Consistent spacing using MUI theme
 *    - Responsive typography
 *    - Optional left-nav alignment
 */
function HeaderCardV2({
  type,
  title,
  subTitle = '',
  description,
  values,
  secondaryLabelLimit,
  isAlignToLeftNav,
  descriptionConfig,
  href,
  target,
  icon,
  backgroundImage,
  forceStackedLayout = false,
  ctaButtons,
}: HeaderCardV2Props) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  // State for dynamic layout
  // const [useStackedLayout, setUseStackedLayout] = useState(
  //   forceStackedLayout || isMobile,
  // )

  // Refs for measuring heights
  const descriptionRef = useRef<HTMLDivElement>(null)
  const metadataRef = useRef<HTMLDivElement>(null)
  const [descriptionHeight, setDescriptionHeight] = useState<number>(0)
  const [metadataHeight, setMetadataHeight] = useState<number>(0)
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    // Only set up height checking if not already forced to stack
    if (forceStackedLayout || isMobile) {
      return
    }

    const dHeight = descriptionRef.current?.offsetHeight || 0
    const mHeight = metadataRef.current?.offsetHeight || 0
    // const { dHeight } = descriptionRef.current.getBoundingClientRect();
    setDescriptionHeight(dHeight)
    // const { mHight } = metadataRef.current.getBoundingClientRect();
    setMetadataHeight(mHeight)

    const sww = () => setWindowWidth(window.innerWidth)

    window.addEventListener('resize', sww)

    // Cleanup
    return () => {
      window.removeEventListener('resize', sww)
    }
  }, [forceStackedLayout, isMobile, values, description, windowWidth])

  let useStackedLayout = false
  if (forceStackedLayout || isMobile) {
    useStackedLayout = true
  } else {
    // useStackedLayout = metadataHeight > descriptionHeight
    // as per https://github.com/bridge2ai/b2ai-standards-registry/issues/210#issuecomment-2773706202,
    // constrain metadata to 5-line expandable block
  }
  console.log({
    windowWidth,
    useStackedLayout,
    descriptionHeight,
    metadataHeight,
  })

  // Meta tags handling
  const descriptionElement: Element | null = document.querySelector(
    'meta[name="description"]',
  )
  const descriptionConfiguration: DescriptionConfig = {
    ...descriptionConfig,
    showFullDescriptionByDefault:
      descriptionConfig?.showFullDescriptionByDefault ?? true,
  }
  const [docTitle] = useState<string>(document.title)
  const [docDescription] = useState<string>(
    descriptionElement ? descriptionElement.getAttribute('content')! : '',
  )

  // Effect to handle meta tags
  useEffect(() => {
    if (title && document.title !== title) {
      document.title = title
    }

    if (description || subTitle) {
      descriptionElement?.setAttribute(
        'content',
        description ? description : subTitle,
      )
    }

    return function cleanup() {
      document.title = docTitle
      descriptionElement?.setAttribute('content', docDescription)
    }
  }, [title, description, subTitle, docTitle, docDescription])

  return (
    <Card
      sx={{
        borderRadius: 0,
        boxShadow: 'none',
        position: 'relative',
        ...(backgroundImage && {
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
            zIndex: 0,
          },
        }),
        ...(isAlignToLeftNav &&
          {
            // Add any special styles for aligned cards
          }),
      }}
      className={`SRC-portalCard SRC-portalCardHeader ${
        isAlignToLeftNav ? 'isAlignToLeftNav' : ''
      }`}
    >
      {/* <Typography
        className="SRC-type"
        sx={{
          fontSize: '14px',
          textTransform: 'uppercase',
          fontWeight: 700,
          color: '#000000',
        }}
      >
        {type}
      </Typography> */}

      <Box
        sx={{
          // align: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          // border: '1px solid #000',
          maxWidth: '1400px',
          display: 'grid',
          gridTemplateColumns: '1fr 12fr 1fr',
          '& > *': {
            gridColumn: 2,
          },
          paddingBottom: '25px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            minHeight: '64px', // Set minimum height to ensure proper centering space
            gap: 1,
          }}
        >
          {icon && (
            <Box
              sx={{
                height: '120px',
              }}
            >
              {icon}
            </Box>
          )}

          <Box sx={{}}>
            {/* Title */}
            <Typography
              sx={{
                // fontWeight: 700,
                mb: 1,
                fontSize: '2.5rem',
                letterSpacing: '0.1em', // Add letter spacing
              }}
            >
              {href ? (
                <Link
                  href={href}
                  target={target}
                  underline="hover"
                  color="inherit"
                >
                  {title}
                </Link>
              ) : (
                title
              )}
            </Typography>
            {/* Subtitle */}
            {subTitle && (
              <Typography
                variant="body1"
                color="inherit"
                fontStyle="italic"
                sx={{
                  fontSize: '1.5rem',
                }}
              >
                {subTitle}
              </Typography>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: useStackedLayout ? 'column' : 'row',
            flexWrap: useStackedLayout ? 'nowrap' : 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 2,
          }}
        >
          <Box
            ref={descriptionRef}
            style={{
              flexBasis: useStackedLayout ? '100%' : 'min(65ch, 100%)',
              width: useStackedLayout ? '100%' : 'auto',
            }}
          >
            <CollapsibleDescription
              description={description}
              descriptionSubTitle=""
              descriptionConfig={descriptionConfiguration}
            />
          </Box>
          {values && (
            <Box
              ref={metadataRef}
              sx={{
                width: useStackedLayout ? '100%' : 'auto',
                marginTop: useStackedLayout ? 2 : 0,
                alignItems: 'flex-start',
              }}
            >
              <MetadataTable data={values} />
            </Box>
          )}
        </Box>

        {ctaButtons && ctaButtons.length > 0 && (
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{ mt: 2 }}
          >
            {ctaButtons.map((buttonProps, index) => (
              <Button
                key={index}
                variant={buttonProps.variant || 'contained'}
                href={buttonProps.href}
                sx={{
                  width: { xs: '100%', sm: 'auto' },
                  ...(buttonProps.sx || {}),
                }}
                endIcon={buttonProps.endIcon}
              >
                {buttonProps.label}
              </Button>
            ))}
          </Stack>
        )}
      </Box>
    </Card>
  )
}

type MetadataTableProps = {
  data: CardLabel[]
}

function MetadataTable({ data }: MetadataTableProps) {
  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
      }}
    >
      <tbody>
        {data.map((item, index) => (
          <tr key={item.columnName || index}>
            <td
              style={{
                width: '1%',
                whiteSpace: 'nowrap',
                padding: '0px 16px 8px 0',
                verticalAlign: 'top',
                fontWeight: 'bold',
              }}
            >
              {item.columnDisplayName}
            </td>
            <td
              style={{
                width: 'auto',
                paddingBottom: '12px',
                verticalAlign: 'top',
                wordBreak: 'break-word',
              }}
            >
              {item.value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default HeaderCardV2
