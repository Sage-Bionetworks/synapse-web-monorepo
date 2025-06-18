import { useRef, useState, MouseEvent as ReactMouseEvent } from 'react'
import Button, { ButtonProps } from '@mui/material/Button'
import ButtonGroup, { ButtonGroupProps } from '@mui/material/ButtonGroup'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import IconSvg from '../IconSvg'

export type DropdownSelectProps = ButtonGroupProps & {
  options: string[]
  selectedIndex?: number
  setSelectedIndex?: (selectedIndex: number) => void
  onButtonClick?: (selectedIndex: number) => void
  variant?: ButtonProps['variant']
  buttonGroupAriaLabel?: string
}
// Derived from https://mui.com/material-ui/react-button-group/#split-button

/**
 * Renders a button group that acts as a select group
 * @param props
 * @constructor
 */
export default function DropdownSelect(props: DropdownSelectProps) {
  const {
    options,
    selectedIndex,
    setSelectedIndex,
    variant = 'contained',
    buttonGroupAriaLabel,
    onButtonClick,
    ...rest
  } = props
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLDivElement>(null)
  const [selectedIndexLocal, setSelectedIndexLocal] = useState(
    selectedIndex ?? 0,
  )

  const handleMenuItemClick = (
    event: ReactMouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    if (setSelectedIndex) {
      setSelectedIndex(index)
    } else {
      setSelectedIndexLocal(index)
    }
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setOpen(false)
  }

  return (
    <>
      <ButtonGroup
        variant={variant}
        ref={anchorRef}
        aria-label="split button"
        {...rest}
      >
        <Button
          onClick={() => {
            if (onButtonClick) {
              onButtonClick(selectedIndex ?? selectedIndexLocal)
            } else {
              handleToggle()
            }
          }}
        >
          {options[selectedIndex ?? selectedIndexLocal]}
        </Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label={buttonGroupAriaLabel}
          aria-haspopup="menu"
          onClick={handleToggle}
          sx={{ width: '36px' }}
        >
          <IconSvg icon={'expandMore'} wrap={false} />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 10,
        }}
        open={open}
        placement={'bottom-start'}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}
