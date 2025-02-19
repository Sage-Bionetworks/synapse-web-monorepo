import { useState, useEffect } from 'react'
import {
  Box,
  Card,
  Typography,
  Divider,
  Link,
  Stack,
  Button,
  ButtonProps,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { DescriptionConfig } from '../CardContainerLogic'
import { CollapsibleDescription } from '../GenericCard/CollapsibleDescription'
import { CardFooter } from '../row_renderers/utils'

export type HeaderCardProps = {
  type: string
  title: string
  subTitle?: string
  description: string
  secondaryLabelLimit?: number
  values?: string[][]
  isAlignToLeftNav?: boolean
  descriptionConfig?: DescriptionConfig
  href?: string
  target?: string
  icon: JSX.Element
  backgroundImage?: string
  forceStackedLayout?: boolean
  ctaButtons?: (ButtonProps & { label: string })[]
}

function HeaderCard({
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
}: HeaderCardProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

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
      <Box sx={{ position: 'relative', zIndex: 1, p: 3 }}>
        <Grid container spacing={3}>
          {/* Icon Column */}
          {icon && (
            <Grid item xs={12} md="auto">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                {icon}
              </Box>
            </Grid>
          )}

          {/* Main Content Grid */}
          <Grid item xs={12} md={values && !forceStackedLayout ? 7 : 12}>
            <Stack spacing={2}>
              <Box>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  {type}
                </Typography>

                <Typography
                  variant="h4"
                  component="h3"
                  sx={{ fontWeight: 700, mb: 1 }}
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

                {subTitle && (
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    className="SRC-author"
                  >
                    {subTitle}
                  </Typography>
                )}

                <CollapsibleDescription
                  description={description}
                  descriptionSubTitle=""
                  descriptionConfig={descriptionConfiguration}
                />

                {ctaButtons && ctaButtons.length > 0 && (
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    sx={{ mt: 2 }}
                  >
                    {ctaButtons.map((buttonProps, index) => (
                      <Button
                        key={index}
                        {...buttonProps}
                        sx={{
                          width: { xs: '100%', sm: 'auto' },
                          ...buttonProps.sx,
                        }}
                      >
                        {buttonProps.label}
                      </Button>
                    ))}
                  </Stack>
                )}
              </Box>
            </Stack>
          </Grid>

          {/* Values Section */}
          {values && (
            <Grid
              item
              xs={12}
              md={forceStackedLayout ? 12 : 4}
              sx={{
                borderLeft: {
                  xs: 'none',
                  md: forceStackedLayout
                    ? 'none'
                    : `1px solid ${theme.palette.divider}`,
                },
                pl: { xs: 0, md: forceStackedLayout ? 0 : 3 },
                mt: { xs: 2, md: 0 },
              }}
            >
              <CardFooter
                isHeader={true}
                secondaryLabelLimit={secondaryLabelLimit}
                values={values}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </Card>
  )
}

export default HeaderCard
