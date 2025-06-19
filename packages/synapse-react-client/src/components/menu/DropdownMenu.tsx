import Button, { ButtonProps } from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Divider from '@mui/material/Divider'
import Fade from '@mui/material/Fade'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import { SxProps } from '@mui/material/styles'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import {
  KeyboardEvent,
  MouseEvent,
  SyntheticEvent,
  useId,
  useRef,
  useState,
} from 'react'
import IconSvg, { IconName } from '../IconSvg/IconSvg'

/**
 * Defines a configuration for a particular dropdown menu item
 */
export type DropdownMenuItem = {
  /* The text to show on the menu item. */
  text: string
  /* The icon to show for this item in the menu. */
  icon?: IconName
  /* A function invoked upon clicking the item, assuming `disabled` is falsy */
  onClick?: (e: MouseEvent) => void
  /* A link that the item should point to. */
  href?: string
  /* The optional tooltipText to show for this item. Compatible with the `disabled` prop. */
  tooltipText?: string
  /* Whether the item should be disabled from selection. */
  disabled?: boolean
  /* Additional MUI SxProps to pass to the text component */
  textSx?: SxProps
  /* Additional MUI SxProps to pass to the icon component */
  iconSx?: SxProps
}

export type DropdownMenuProps = {
  /* Groups of menu items. Each group will be split with a divider. See DropdownMenuItem for per-item configuration */
  items: DropdownMenuItem[][]
  /* The text to show on the dropdown menu button. */
  dropdownButtonText: string
  /* The optional tooltip text for the dropdown menu button. */
  buttonTooltip?: string
  /* Any additional props to pass to the dropdown menu button. */
  buttonProps?: ButtonProps
  /* If true, will render a single action as a standalone button. Default true. */
  convertSingleItemToButton?: boolean
  /* If true, nothing will be rendered if no actions are passed. Default false. */
  renderMenuIfNoItems?: boolean
}

/**
 * The DropdownMenu component provides a generic way to compose a MUI dropdown menu.
 */
export function DropdownMenu(props: DropdownMenuProps) {
  const {
    buttonTooltip,
    dropdownButtonText,
    items = [] as DropdownMenuItem[][],
    convertSingleItemToButton = true,
    renderMenuIfNoItems = false,
    buttonProps = {},
  } = props

  const dropdownMenuId = useId()
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLButtonElement>(null)

  const numberOfMenuItems = items.flat().length

  if (!renderMenuIfNoItems && numberOfMenuItems === 0) {
    // Hide menu if no actions will be in the menu
    return null
  }

  if (convertSingleItemToButton && numberOfMenuItems === 1) {
    // If one action is in the menu, show it as a button
    const menuItem = items.flat()[0]
    return (
      <Button
        component={'href' in menuItem ? 'a' : 'button'}
        title={menuItem.tooltipText}
        variant="outlined"
        href={'href' in menuItem ? menuItem.href : undefined}
        rel={'href' in menuItem ? 'noopener noreferrer' : undefined}
        onClick={'onClick' in menuItem ? menuItem.onClick : undefined}
        disabled={menuItem.disabled}
        endIcon={menuItem.icon && <IconSvg icon={menuItem.icon} wrap={false} />}
      >
        <Typography variant={'buttonLink'}>{menuItem.text}</Typography>
      </Button>
    )
  }

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = (event: Event | SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <>
      <Tooltip
        title={
          buttonTooltip ? (
            <div style={{ whiteSpace: 'pre-line' }}>{buttonTooltip}</div>
          ) : undefined
        }
        placement={'top'}
      >
        <span>
          <Button
            variant="outlined"
            ref={anchorRef}
            id={`composition-button-${dropdownMenuId}`}
            aria-controls={
              open ? `composition-menu-${dropdownMenuId}` : undefined
            }
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            {...buttonProps}
          >
            <Typography variant={'buttonLink'}>{dropdownButtonText}</Typography>
          </Button>
        </span>
      </Tooltip>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-end"
        transition
        style={{
          // Fixes issue where react-flow (provenance) would appear above the menu
          zIndex: 10,
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id={`composition-menu-${dropdownMenuId}`}
                  aria-labelledby={`composition-button-${dropdownMenuId}`}
                  onKeyDown={handleListKeyDown}
                >
                  {items.map((itemGroup, index, array) => {
                    return [
                      itemGroup.map(item => {
                        return (
                          <Tooltip
                            key={item.text}
                            title={item.tooltipText}
                            placement={'left'}
                          >
                            <MenuItem
                              // Always make the component an anchor in case href is defined.
                              component="a"
                              sx={{
                                // Override the anchor-specific state styles, we don't want it to look like an anchor
                                '&:hover': {
                                  color: 'unset',
                                },
                                '&:focus': {
                                  color: 'unset',
                                  textDecoration: 'unset',
                                },
                              }}
                              disabled={item.disabled}
                              href={'href' in item ? item.href : undefined}
                              rel={
                                'href' in item
                                  ? 'noopener noreferrer'
                                  : undefined
                              }
                              // Allow pointer events on disabled item so tooltip works.
                              style={{ pointerEvents: 'auto' }}
                              onClick={(e: MouseEvent) => {
                                /*
                                 * Must check if the item is disabled because we set
                                 * `pointer-events: 'auto'`
                                 */
                                if (
                                  !item.disabled &&
                                  'onClick' in item &&
                                  item.onClick
                                ) {
                                  setOpen(false)
                                  item.onClick(e)
                                }
                              }}
                            >
                              <ListItemIcon
                                style={{
                                  // MUI has specified a more specific minWidth for ListItemIcon inside a MenuList than
                                  // we can create with sx, so apply an inline style for this property only.
                                  minWidth: '30px',
                                }}
                              >
                                {item.icon && (
                                  <IconSvg
                                    icon={item.icon}
                                    sx={{
                                      width: '17px',
                                      height: '17px',
                                      ...item.iconSx,
                                    }}
                                    wrap={false}
                                  />
                                )}
                              </ListItemIcon>
                              <ListItemText
                                sx={{ marginTop: 0 }}
                                slotProps={{
                                  primary: {
                                    variant: 'smallText1',
                                    sx: item.textSx,
                                  },
                                }}
                              >
                                {item.text}
                              </ListItemText>
                            </MenuItem>
                          </Tooltip>
                        )
                      }),
                      index < array.length - 1 && <Divider />,
                    ]
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  )
}
