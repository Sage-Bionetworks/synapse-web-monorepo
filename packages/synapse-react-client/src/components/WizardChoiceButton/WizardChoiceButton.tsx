import { StyledComponent } from '@emotion/styled'
import { Box, BoxProps, styled, Typography } from '@mui/material'
import { ReactNode } from 'react'
import IconSvg from '../IconSvg'
import WizardChoiceButtonDescription from './WizardChoiceButtonDescription'

export type WizardMenuItemProps = BoxProps & {
  selected?: boolean
}

export const WizardMenuItem: StyledComponent<WizardMenuItemProps> = styled(
  Box,
  {
    shouldForwardProp: prop => prop !== 'selected',
  },
)<WizardMenuItemProps>(({ theme, selected = false }) => ({
  backgroundColor: selected
    ? theme.palette.grey[300]
    : theme.palette.background.paper,
  width: '100%',
  border: '1px solid',
  borderColor: theme.palette.grey[200],
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: selected
      ? theme.palette.grey[200]
      : theme.palette.grey[100],
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}))

export default function WizardChoiceButton(props: {
  title: string
  description?: ReactNode
  icon?: ReactNode
  onClick?: () => void
  selected?: boolean
}) {
  const { title, description, icon, onClick, selected } = props

  const descriptionNode =
    typeof description === 'string' ? (
      <WizardChoiceButtonDescription>
        {description}
      </WizardChoiceButtonDescription>
    ) : (
      description
    )
  return (
    <WizardMenuItem
      component={'button'}
      role={'menuitem'}
      aria-label={title}
      display={'flex'}
      p={'20px'}
      onClick={onClick}
      alignItems={'center'}
      gap={'10px'}
      selected={selected}
    >
      {icon && (
        <Box
          sx={theme => ({
            p: 3,
            [theme.breakpoints.down('sm')]: {
              p: 0,
              alignSelf: 'flex-start',
            },
          })}
        >
          {icon}
        </Box>
      )}
      <Box sx={{ flexGrow: 1, textAlign: 'left' }}>
        <Typography variant={'headline2'} mb={'10px'}>
          {title}
        </Typography>
        {descriptionNode}
      </Box>
      <Box
        sx={theme => ({
          flexShrink: 0,
          [theme.breakpoints.down('sm')]: { alignSelf: 'flex-end' },
        })}
      >
        <IconSvg
          icon={'chevronRight'}
          fontSize={'large'}
          sx={{
            color: 'primary.light',
          }}
        />
      </Box>
    </WizardMenuItem>
  )
}
