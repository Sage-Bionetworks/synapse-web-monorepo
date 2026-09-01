import {
  Box,
  Button,
  ButtonProps,
  SxProps,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { DropdownMenu, DropdownMenuProps } from './DropdownMenu'
import { IconSvgButton, IconSvgButtonProps } from '../IconSvgButton'
import IconSvg from '../IconSvg'

export type ComplexMenuButtonProps = Omit<IconSvgButtonProps, 'icon'> & {
  icon?: IconSvgButtonProps['icon']
  variant?: ButtonProps['variant']
  text?: string
  iconSx?: SxProps
}

export type ComplexMenuProps = {
  /*
   * Configuration for buttons. Each entry corresponds to one button.
   * See the ComplexMenuButtonProps type for more info.
   */
  iconButtons?: ComplexMenuButtonProps[]
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
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
        },
      })}
    >
      {iconButtons.map(iconButton => {
        if (iconButton.variant != null) {
          const label = iconButton.text ?? iconButton.tooltipText
          return (
            <Box
              key={label}
              sx={theme => ({
                [theme.breakpoints.down('md')]: {
                  width: '100%',
                  '.MuiButton-root': { width: '100%' },
                },
              })}
            >
              <Button
                variant={iconButton.variant}
                startIcon={
                  iconButton.icon ? (
                    <IconSvg
                      icon={iconButton.icon}
                      wrap={false}
                      fontSize={'inherit'}
                      sx={iconButton.iconSx}
                    />
                  ) : undefined
                }
                onClick={iconButton.onClick}
                href={iconButton.href}
                disabled={iconButton.disabled}
              >
                <Typography variant="buttonLink">{label}</Typography>
              </Button>
            </Box>
          )
        }
        return isSmallScreen && iconButton.tooltipText ? (
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
                  icon={iconButton.icon!}
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
          <IconSvgButton
            key={iconButton.tooltipText}
            {...iconButton}
            icon={iconButton.icon!}
          />
        )
      })}
      {dropdownMenus.map(
        (menuProps, index) =>
          menuProps.items &&
          menuProps.items.length > 0 && (
            <Box
              sx={theme => ({
                [theme.breakpoints.down('md')]: {
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
