import { Dropdown } from 'react-bootstrap'
import { useState } from 'react'
import WarningDialog from '../SynapseForm/WarningDialog'
import IconSvg from '../IconSvg/IconSvg'

export type EvaluationRoundEditorDropdownProps = {
  onDelete: () => void
  onSave: () => void
}

export function EvaluationRoundEditorDropdown({
  onSave,
  onDelete,
}: EvaluationRoundEditorDropdownProps) {
  const [deleteWarningShow, setDeleteWarningShow] = useState<boolean>(false)

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

      <Dropdown className="float-right">
        <Dropdown.Toggle
          aria-label="Round Options"
          variant="link"
          className="dropdown-no-caret evaluation-round-editor-dropdown"
        >
          <IconSvg icon="verticalEllipsis" />
        </Dropdown.Toggle>
        <Dropdown.Menu alignRight={true}>
          <Dropdown.Item onClick={onSave}>Save</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => setDeleteWarningShow(true)}>
            Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
