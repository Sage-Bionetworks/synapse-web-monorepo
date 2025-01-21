import { Box, Stack, Typography, Button } from '@mui/material'

export type HeaderProps = {
  backgroundCss: string
  buttonLink?: string
  title: React.ReactNode
  subTitle: React.ReactNode
  description: React.ReactNode
}

const Header = ({
  backgroundCss,
  buttonLink,
  title,
  subTitle,
  description,
}: HeaderProps) => {
  return (
    <Box
      data-testid="HeaderContainer"
      sx={{
        background: backgroundCss,
        padding: { xs: 0, md: '50px 80px' },
      }}
    >
      <Stack
        sx={{
          alignItems: 'flex-start',
          padding: { xs: '40px', md: '40px 0' },
          gap: '24px',
          width: { sm: '100%', md: '746px' },
        }}
      >
        <Typography
          variant="headline2"
          sx={{
            fontWeight: 300,
            lineHeight: '130%',
            fontSize: { xs: '36px', md: '42px' },
            color: 'grey.1000',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="headline3"
          sx={{
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '160%',
            color: 'grey.1000',
          }}
        >
          {subTitle}
        </Typography>
        <Typography
          sx={{ fontSize: '18px', lineHeight: '140%', color: 'grey.900' }}
        >
          {description}
        </Typography>
        {buttonLink && (
          <Button
            href={buttonLink}
            target="_blank"
            variant="contained"
            role="button"
            sx={theme => ({
              whiteSpace: 'nowrap',
              alignSelf: 'flex-start',
              padding: '6px 24px',
              fontWeight: 600,
              boxShadow:
                '0px 16px 16px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.10), 0px 1px 1px 0px rgba(0, 0, 0, 0.10)',
              '&:hover': {
                boxShadow:
                  '0px 16px 16px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.10), 0px 1px 1px 0px rgba(0, 0, 0, 0.10)',
              },
              [theme.breakpoints.down('sm')]: {
                width: '100%',
              },
            })}
          >
            Learn more
          </Button>
        )}
      </Stack>
    </Box>
  )
}

export default Header
