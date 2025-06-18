import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { MouseEvent, useState } from 'react'
import IconSvg from '../IconSvg/IconSvg'
import WarningDialog from '../SynapseForm/WarningDialog'

export type EvaluationRoundEditorDropdownProps = {
  onDelete: () => void
  onSave: () => void
}

export function EvaluationRoundEditorDropdown({
  onSave,
  onDelete,
}: EvaluationRoundEditorDropdownProps) {
  const [deleteWarningShow, setDeleteWarningShow] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <WarningDialog
        title="Delete Evaluation Round"
        content="Are you sure you want to delete this Evaluation Round?"
        open={deleteWarningShow}
        confirmButtonText="Delete"
        onConfirm={() => {
          onDelete()
          setDeleteWarningShow(false)
        }}
        onConfirmCallbackArgs={[]}
        onCancel={() => {
          setDeleteWarningShow(false)
        }}
        confirmButtonColor="error"
      />
      <IconButton onClick={handleClick} aria-label="Round Options">
        <IconSvg icon="verticalEllipsis" wrap={false} />
      </IconButton>
      <Menu
        aria-label="Round Options"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{ paper: { sx: { minWidth: '120px' } } }}
      >
        <MenuItem
          onClick={() => {
            handleClose()
            onSave()
          }}
        >
          Save
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            handleClose()
            setDeleteWarningShow(true)
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </>
  )
}
