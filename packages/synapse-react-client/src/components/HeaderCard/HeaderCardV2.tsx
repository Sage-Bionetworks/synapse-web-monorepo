import { useState, useEffect } from 'react'
import { Box, Card, Typography, Divider, Link, Stack } from '@mui/material'
import { CardFooter } from '../row_renderers/utils'
import { DescriptionConfig } from '../CardContainerLogic'
import { CollapsibleDescription } from '../GenericCard/CollapsibleDescription'

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
}: HeaderCardProps) {
  // Meta tags handling code remains the same
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
  })

  return (
    <Card
      sx={theme => ({
        borderRadius: 0,
        boxShadow: 'none',
        ...(isAlignToLeftNav &&
          {
            // Add any special styles for aligned cards
          }),
      })}
    >
      <Stack direction="row" spacing={2} sx={{ p: 3 }}>
        this is a test
        <Box>{icon}</Box>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Box>
            <Typography variant="smallText2" color="grey.700" gutterBottom>
              {type} type blah
            </Typography>

            <Typography
              variant="headline3"
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
              <Typography variant="body1" color="grey.700" sx={{ mb: 2 }}>
                {subTitle}
              </Typography>
            )}

            <CollapsibleDescription
              description={description}
              descriptionSubTitle=""
              descriptionConfig={descriptionConfiguration}
            />
          </Box>

          {values && (
            <>
              <Divider />
              <Box sx={{ mt: 2 }}>
                <CardFooter
                  isHeader={true}
                  secondaryLabelLimit={secondaryLabelLimit}
                  values={values}
                />
              </Box>
            </>
          )}
        </Stack>
      </Stack>
    </Card>
  )
}

export default HeaderCard
