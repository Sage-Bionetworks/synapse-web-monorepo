import { InsertPhotoOutlined } from '@mui/icons-material'
import { Card, CardActionArea, Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

export type TaskCategoryCardProps = {
  title: string
  /**
   * URL of an exported illustration asset matching the Figma card art. The Figma MCP can only return
   * raster/expiring URLs for these illustrations, so this is left undefined (rendering a placeholder
   * icon) until the real assets are exported from Figma and imported into the codebase.
   */
  illustrationSrc?: string
  disabled?: boolean
  /** e.g. a "Coming soon" chip for a category that isn't implemented yet. */
  badge?: ReactNode
  onClick?: () => void
}

const CARD_WIDTH = 260
const ILLUSTRATION_HEIGHT = 160

/**
 * A single category tile in the "Select Category for New Task" grid (see `CreateTaskCategoryPicker`).
 * Mirrors the card layout from Figma (Curator BDF-LINC file, node 12373:22776): a light illustration
 * area above a dark, centered title footer.
 */
export default function TaskCategoryCard(props: TaskCategoryCardProps) {
  const { title, illustrationSrc, disabled = false, badge, onClick } = props

  return (
    <Card
      variant="outlined"
      sx={{
        width: { xs: '100%', sm: CARD_WIDTH },
        borderRadius: '5px',
        opacity: disabled ? 0.6 : 1,
      }}
    >
      <CardActionArea
        disabled={disabled}
        onClick={onClick}
        aria-label={title}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            width: '100%',
            height: ILLUSTRATION_HEIGHT,
            bgcolor: 'grey.200',
          }}
        >
          {illustrationSrc ? (
            <Stack
              component="img"
              src={illustrationSrc}
              alt=""
              sx={{ maxHeight: '80%', maxWidth: '80%' }}
            />
          ) : (
            <InsertPhotoOutlined sx={{ fontSize: 48, color: 'grey.400' }} />
          )}
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          gap={1}
          sx={{ width: '100%', bgcolor: 'primary.700', py: 2.5, px: 2 }}
        >
          <Typography
            variant="headline3"
            sx={{ color: 'common.white', textAlign: 'center' }}
          >
            {title}
          </Typography>
          {badge}
        </Stack>
      </CardActionArea>
    </Card>
  )
}
