import React from 'react'
import SynapseFullLogo from '../../assets/icons/SynapseFullLogo'
import { Close, MenuOutlined } from '@mui/icons-material'
import {
  Box,
  Button,
  SxProps,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  Divider,
  IconButton,
  styled,
} from '@mui/material'
import { useOneSageURL } from '../../utils/hooks'
import { ColorPartial } from '@mui/material/styles/createPalette'

const LOGIN_LINK = '/LoginPlace:0'

const navTextButtonSx: SxProps = {
  fontSize: '18px',
  lineHeight: '24px',
  fontWeight: 400,
}
const navButtonSx: SxProps = {
  borderRadius: '0',
  p: {
    xs: '7px 10px',
    sm: '7px 30px',
  },
}
const StyledMenu = styled(Menu)(() => ({
  '& .MuiPaper-root': {
    width: '100vw',
    height: '100vh',
    maxWidth: '100vw',
    maxHeight: '100vh',
    margin: 0,
    top: '0 !important',
    left: '0 !important',
    transform: 'none',
  },
}))

const StyledMenuItem = styled(MenuItem)(() => ({
  fontSize: '36px',
  fontWeight: 200,
  lineHeight: '32px',
  height: '80px',
  paddingLeft: '30px',
}))

export type SynapseHomepageNavBarProps = {
  gotoPlace: (href: string) => void
}

export const SynapseHomepageNavBar: React.FunctionComponent<
  SynapseHomepageNavBarProps
> = ({ gotoPlace }) => {
  const registrationLink = useOneSageURL('/register1')
  const resourcesLink = useOneSageURL('/sageresources')
  const theme = useTheme()
  const isSmallView = useMediaQuery(theme.breakpoints.down('md'))

  // mobile view nav bar menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        columnGap: '5px',
        p: {
          xs: '10px 5px',
          sm: '20px 15px',
        },
      }}
    >
      {/* Logo */}
      <SynapseFullLogo
        textColor={(theme.palette.primary as ColorPartial)[900]!}
      />
      {/* Menu Items */}
      {/* Desktop nav bar, and a mobile hamburger dropdown menu nav bar that contain the same options */}
      {!isSmallView && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <Button
            sx={navTextButtonSx}
            href={resourcesLink.toString()}
            target="_blank"
          >
            Portals
          </Button>
          <Button
            sx={{ ...navTextButtonSx, mr: '15px' }}
            href="https://sagebionetworks.org/"
            target="_blank"
          >
            Sage Bionetworks
          </Button>
          <Button
            size="large"
            variant="outlined"
            color="secondary"
            sx={navButtonSx}
            onClick={() => {
              gotoPlace(LOGIN_LINK)
            }}
          >
            Login
          </Button>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            sx={navButtonSx}
            href={registrationLink.toString()}
          >
            Register Now
          </Button>
        </Box>
      )}
      {isSmallView && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            columnGap: '10px',
          }}
        >
          <IconButton
            color="secondary"
            sx={{
              borderWidth: 1,
              borderStyle: 'solid',
              borderRadius: '0',
              ml: '70px',
            }}
            onClick={handleClick}
          >
            <MenuOutlined />
          </IconButton>
          <StyledMenu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              style: {
                width: '100%',
                height: '100%',
              },
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: 5,
                right: 5,
                zIndex: 1,
                color: 'secondary.main',
                borderWidth: 1,
                borderStyle: 'solid',
                borderRadius: '0',
              }}
            >
              <Close />
            </IconButton>
            <StyledMenuItem
              sx={{ mt: '70px' }}
              onClick={() => {
                window.open(resourcesLink.toString(), '_blank')
                handleClose()
              }}
            >
              Portals
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => {
                window.open('https://sagebionetworks.org/', '_blank')
                handleClose()
              }}
            >
              Sage Bionetworks
            </StyledMenuItem>

            <Divider sx={{ pt: '100px' }} />
            <StyledMenuItem
              sx={{ mt: '30px', color: 'secondary.main' }}
              onClick={() => {
                window.open(registrationLink.toString(), '_blank')
                handleClose()
              }}
            >
              Register Now
            </StyledMenuItem>
            <StyledMenuItem
              sx={{ mb: '40px' }}
              onClick={() => {
                handleClose()
                gotoPlace(LOGIN_LINK)
              }}
            >
              Log In
            </StyledMenuItem>
          </StyledMenu>
        </Box>
      )}
    </Box>
  )
}
