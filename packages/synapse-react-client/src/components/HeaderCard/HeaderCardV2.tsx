import { CardLabel } from '@/components/row_renderers/utils/CardFooter'
import React, { forwardRef, ForwardedRef } from 'react'
import {
  Box,
  Card,
  Typography,
  Link,
  // Stack,
  Button,
  // ButtonProps,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { DescriptionConfig } from '../CardContainerLogic'
import { CollapsibleDescription } from '../GenericCard/CollapsibleDescription'
import { GenericCardProps } from '@/components/GenericCard/GenericCard'
import { useDocumentMetadata } from '@/utils/context/DocumentMetadataContext'

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
  /** Character count threshold for truncating description (default 400) */
  charCountCutoff?: number
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
  /** Optional CTA link to display below description */
  ctaLinkConfig?: GenericCardProps['ctaLinkConfig']
}

/**
 * HeaderCardV2 Component   OUT OF DATE COMMENTS
 *
 * A material-UI based card component for displaying detailed information with metadata.
 * This component supports responsive layouts, background images, and dynamic content
 * organization.
 *
 * Layout Structure:

  ```
┌───────────────────────────────────────────────────────────────┐
│ ┌─────┐  Type Label                                           │
│ │Icon │  Title                                                │
│ │     │  Subtitle                                             │
│ └─────┘                                                       │
│         Description                     Metadata              │
│         [Show More/Less]                --------              │
│                                         Label 1    Value 1    │
│         [External Site Button]          Label 2    Value 2    │
└───────────────────────────────────────────────────────────────┘
 ```
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
 *   ctaLinkConfig={{text: "View Standard on External Website", link: "url"}}
 * />
 * ```

 * Core component logic:
 * 1. Responsive Layout:
 *    - Uses MUI Grid for flexible layouts
 *    - Switches to stacked layout on mobile, when forceStackedLayout is true,
 *
 * 2. Meta Tags:
 *    - Manages document title and meta description
 *    - Preserves original values for cleanup
 *
 * 3. Content Sections:
 *    - Icon: Optional, maintains aspect ratio
 *    - Main Content: Type, title, subtitle, description
 *    - Metadata: Right-aligned or stacked key-value pairs
 *    - CTA Button: Optional button link to external site
 *
 * 4. Styling:
 *    - Background image support with overlay
 *    - Consistent spacing using MUI theme
 *    - Responsive typography
 *    - Optional left-nav alignment
 */
const HeaderCardV2 = forwardRef(function HeaderCardV2(
  props: HeaderCardV2Props,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const {
    // type,
    title,
    subTitle = '',
    description,
    values,
    // secondaryLabelLimit,
    isAlignToLeftNav,
    descriptionConfig,
    charCountCutoff,
    href,
    target,
    icon,
    backgroundImage,
    forceStackedLayout = false,
    ctaLinkConfig,
  } = props
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  let useStackedLayout = false
  if (forceStackedLayout || isMobile) {
    useStackedLayout = true
  } else {
    // useStackedLayout = metadataHeight > descriptionHeight
    // as per https://github.com/bridge2ai/b2ai-standards-registry/issues/210#issuecomment-2773706202,
    // constrain metadata to 5-line expandable block
  }

  const descriptionConfiguration: DescriptionConfig = {
    ...descriptionConfig,
    showFullDescriptionByDefault:
      descriptionConfig?.showFullDescriptionByDefault ?? false,
  }
  const metadataDescription = description || subTitle || undefined
  useDocumentMetadata({
    title,
    description: metadataDescription,
    priority: 100,
  })

  // ctaLink stuff
  let ctaLinkBox = null
  if (ctaLinkConfig) {
    ctaLinkBox = (
      <Button
        variant="outlined"
        component={Link}
        href={ctaLinkConfig.href}
        target={ctaLinkConfig.target}
        rel={
          ctaLinkConfig.target === '_blank' ? 'noopener noreferrer' : undefined
        }
        size="large"
        sx={{
          color: '#FFF',
          '&:hover': {
            color: '#FFF',
            textDecorationColor: '#FFF',
            border: '2px solid white',
          },
          '&:focus': { color: '#FFF' },
          textDecorationColor: '#FFF',
          padding: '6px 24px',
          marginTop: '22px',
          border: '1px solid white',
        }}
      >
        {/* TODO: add an external open icon like https://materialui.co/icon/open-in-new */}
        {/*<AddAlertTwoTone sx={{ width: '24px', height: '24px' }} />*/}
        {ctaLinkConfig.text}
      </Button>
    )
  }

  return (
    <Card
      component={'div'}
      ref={ref}
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
      <Box
        sx={{
          marginLeft: 'auto',
          marginRight: 'auto',
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
                mb: 1,
                fontSize: '2.5rem',
                letterSpacing: '0.1em', // Add letter spacing
                marginBottom: '0.6em',
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
                sx={{
                  fontStyle: 'italic',
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
            style={{
              flexBasis: useStackedLayout ? '100%' : 'min(65ch, 100%)',
              width: useStackedLayout ? '100%' : 'auto',
            }}
          >
            <CollapsibleDescription
              description={description}
              descriptionSubTitle=""
              descriptionConfig={descriptionConfiguration}
              charCountCutoff={charCountCutoff}
            />
            {ctaLinkBox}
          </Box>
          {values && (
            <Box
              sx={{
                width: useStackedLayout ? '100%' : '30%',
                marginTop: useStackedLayout ? 2 : 0,
                alignItems: 'flex-start',
              }}
            >
              <MetadataTable data={values} />
            </Box>
          )}
        </Box>
      </Box>
    </Card>
  )
})

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
