import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { DropdownMenu, DropdownMenuProps } from './DropdownMenu'
import { IconSvgButton, IconSvgButtonProps } from '../IconSvgButton'
import IconSvg from '../IconSvg'

export type ComplexMenuProps = {
  /*
   * Configuration for IconButtons. Each entry corresponds to one button.
   * See the IconButtonConfiguration type for more info.
   */
  iconButtons?: IconSvgButtonProps[]
  /*
   * Configuration for DropdownMenus. Each entry corresponds to one dropdown menu button, which
   * itself can contain multiple groups of items.
   * See the DropdownMenuProps type for more info.
   */
  dropdownMenus?: DropdownMenuProps[]
}

/**
 * The ComplexMenu component allows you to create a generic menu with
 * icon buttons and multiple dropdown menus that contain groups of items.
 */
export function ComplexMenu(props: ComplexMenuProps) {
  const { iconButtons = [], dropdownMenus = [] } = props
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      sx={theme => ({
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          paddingTop: '10px',
        },
      })}
    >
      {iconButtons.map(iconButton =>
        isSmallScreen && iconButton.tooltipText ? (
          <Box
            sx={{
              width: '100%',
              textAlign: 'center',
            }}
          >
            <Button
              variant="text"
              startIcon={
                <IconSvg
                  key={iconButton.tooltipText}
                  icon={iconButton.icon}
                  wrap={false}
                  fontSize={'inherit'}
                />
              }
              onClick={iconButton.onClick}
              sx={{
                padding: '6px 12px',
                minWidth: 'unset',
              }}
            >
              <Typography variant="buttonLink">
                {iconButton.tooltipText}
              </Typography>
            </Button>
          </Box>
        ) : (
          <IconSvgButton key={iconButton.tooltipText} {...iconButton} />
        ),
      )}
      {dropdownMenus.map(
        (menuProps, index) =>
          menuProps.items &&
          menuProps.items.length > 0 && (
            <Box
              sx={theme => ({
                [theme.breakpoints.down('sm')]: {
                  width: '100%',
                  '.MuiButton-root': { width: '100%' },
                },
              })}
            >
              <DropdownMenu key={index} {...menuProps} />
            </Box>
          ),
      )}
    </Box>
  )
}
