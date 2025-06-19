import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { MouseEvent, useState } from 'react'
import { useMatch } from 'react-router'
import NavLink from '../NavLink'

export function DropdownNavButton(props) {
  const { route, onClickedNavLink } = props
  const match = useMatch({ path: route.path, end: route.path === '/' })
  const theme = useTheme()
  const isSmallView = useMediaQuery(theme.breakpoints.down('lg'))

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const navLinkChildItems = route.children.map(childRoute => {
    return (
      <MenuItem
        key={childRoute.path}
        className={'dropdown-item SRC-primary-background-color-hover'}
      >
        <NavLink
          className="dropdown-item SRC-nested-color"
          to={childRoute.path}
          style={{ textDecoration: 'none' }}
          onClick={() => {
            handleClose()
            onClickedNavLink()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          {childRoute.name}
        </NavLink>
      </MenuItem>
    )
  })

  return (
    <>
      {isSmallView && (
        <Accordion
          disableGutters
          elevation={0}
          onClick={e => {
            e.stopPropagation()
          }}
          sx={{
            '&:before': {
              display: 'none',
            },
          }}
        >
          <AccordionSummary
            className={'nav-button-container nav-button center-content'}
            expandIcon={<ExpandMoreIcon />}
            sx={{
              my: 0,
              '.MuiAccordionSummary-content': {
                my: 0,
              },
              '&.Mui-expanded': {
                backgroundColor: 'secondary.main',
                '.MuiAccordionSummary-content,.MuiSvgIcon-root': {
                  color: 'white',
                },
              },
            }}
          >
            {route.name}
          </AccordionSummary>
          <AccordionDetails
            sx={{
              p: 0,
              '.MuiMenuItem-root': {
                pl: 4,
                minHeight: '50px',
                '&:hover': {
                  backgroundColor: 'primary.main',
                },
              },
            }}
          >
            {navLinkChildItems}
          </AccordionDetails>
        </Accordion>
      )}
      {!isSmallView && (
        <>
          <Menu
            className={'portal-nav-menu'}
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            {navLinkChildItems}
          </Menu>
          <Button
            className={`nav-button-container nav-button center-content ${
              match ? 'active' : ''
            }`}
            onClick={handleClick}
            endIcon={<ExpandMoreIcon />}
            sx={{
              '&:hover': {
                textDecoration: 'none',
              },
            }}
          >
            {route.name}
          </Button>
        </>
      )}
    </>
  )
}
