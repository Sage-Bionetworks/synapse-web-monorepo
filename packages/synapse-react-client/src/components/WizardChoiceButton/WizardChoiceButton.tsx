import React from 'react'
import { Box, Typography } from '@mui/material'
import IconSvg from '../IconSvg'
import WizardChoiceButtonDescription from './WizardChoiceButtonDescription'

export default function WizardChoiceButton(props: {
  title: string
  description?: React.ReactNode
  onClick?: () => void
}) {
  const { title, description, onClick } = props

  const descriptionNode =
    typeof description === 'string' ? (
      <WizardChoiceButtonDescription>
        {description}
      </WizardChoiceButtonDescription>
    ) : (
      description
    )
  return (
    <Box
      component={'button'}
      role={'menuitem'}
      aria-label={title}
      display={'flex'}
      p={'20px'}
      sx={{
        width: '100%',
        border: '1px solid',
        borderColor: 'grey.200',
        borderRadius: '5px',
        '&:hover': {
          backgroundColor: 'grey.100',
        },
      }}
      onClick={onClick}
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={'10px'}
    >
      <Box sx={{ textAlign: 'left' }}>
        <Typography variant={'headline2'} mb={'10px'}>
          {title}
        </Typography>
        {descriptionNode}
      </Box>
      <Box>
        <IconSvg
          icon={'chevronRight'}
          fontSize={'large'}
          sx={{
            color: 'primary.light',
          }}
        />
      </Box>
    </Box>
  )
}
