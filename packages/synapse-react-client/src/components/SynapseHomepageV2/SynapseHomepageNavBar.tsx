import React from 'react'
import SynapseFullLogo from '../../assets/icons/SynapseFullLogo'
import { LoginTwoTone, MenuOutlined } from '@mui/icons-material'
import {
  Box,
  Button,
  SxProps,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  IconButton,
} from '@mui/material'
import { useOneSageURL } from '../../utils/hooks'
import { useSynapseContext } from '../../utils'
import { ColorPartial } from '@mui/material/styles/createPalette'

const LOGIN_LINK = '/LoginPlace:0'
const MY_DASHBOARD_LINK = '/Profile:v'

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

export type SynapseHomepageNavBarProps = {
  gotoPlace: (href: string) => void
}

export const SynapseHomepageNavBar: React.FunctionComponent<
  SynapseHomepageNavBarProps
> = ({ gotoPlace }) => {
  const { accessToken } = useSynapseContext()
  const isSignedIn = !!accessToken
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
          xs: '10px 0px',
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
          {isSignedIn && (
            <Button
              size="large"
              variant="contained"
              color="secondary"
              sx={navButtonSx}
              onClick={() => {
                gotoPlace(MY_DASHBOARD_LINK)
              }}
            >
              View My Dashboard
            </Button>
          )}
          {!isSignedIn && (
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
          )}
          {!isSignedIn && (
            <Button
              size="large"
              variant="contained"
              color="secondary"
              sx={navButtonSx}
              href={registrationLink.toString()}
            >
              Register Now
            </Button>
          )}
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
          {!isSignedIn && (
            <Button
              variant="contained"
              color="secondary"
              sx={{ ...navButtonSx, textWrap: 'nowrap' }}
              href={registrationLink.toString()}
            >
              Register Now
            </Button>
          )}
          <IconButton
            color="secondary"
            sx={{ borderWidth: 1, borderStyle: 'solid', borderRadius: '0' }}
            onClick={handleClick}
          >
            <MenuOutlined />
          </IconButton>
          <Menu
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
          >
            {!isSignedIn && (
              <MenuItem
                onClick={() => {
                  handleClose()
                  gotoPlace(LOGIN_LINK)
                }}
              >
                <ListItemIcon>
                  <LoginTwoTone fontSize="small" />
                </ListItemIcon>
                Login
              </MenuItem>
            )}
            {isSignedIn && (
              <MenuItem
                onClick={() => {
                  handleClose()
                  gotoPlace(MY_DASHBOARD_LINK)
                }}
              >
                View My Dashboard
              </MenuItem>
            )}
            <Divider />
            <MenuItem
              onClick={() => {
                window.open(resourcesLink.toString(), '_blank')
                handleClose()
              }}
            >
              Portals
            </MenuItem>
            <MenuItem
              onClick={() => {
                window.open('https://sagebionetworks.org/', '_blank')
                handleClose()
              }}
            >
              Sage Bionetworks
            </MenuItem>
          </Menu>
        </Box>
      )}
    </Box>
  )
}
