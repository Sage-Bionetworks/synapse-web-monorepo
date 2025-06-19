import { spreadSx } from '@/theme/spreadSx'
import Typography from '@mui/material/Typography'
import { TypographyProps } from '@mui/material/Typography'

export default function WizardChoiceButtonDescription(
  props: Omit<TypographyProps, 'variant'>,
) {
  return (
    <Typography
      variant={'body1'}
      {...props}
      sx={spreadSx(
        {
          color: 'grey.700',
          my: 1.25,
        },
        props.sx,
      )}
    />
  )
}
