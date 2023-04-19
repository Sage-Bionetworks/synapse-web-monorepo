import { Dropdown } from 'react-bootstrap'
import React, { useState } from 'react'
import WarningDialog from '../synapse_form_wrapper/WarningDialog'
import IconSvg from '../IconSvg'

export type EvaluationRoundEditorDropdownProps = {
  onDelete: () => void
  onSave: () => void
}

export const EvaluationRoundEditorDropdown: React.FunctionComponent<
  EvaluationRoundEditorDropdownProps
> = ({ onSave, onDelete }) => {
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
