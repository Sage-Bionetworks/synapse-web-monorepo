import React from 'react'
import EntityViewMaskEditor, {
  EntityViewMaskEditorProps,
  isMaskSupportedInUI,
} from './EntityViewMaskEditor'
import { render, screen, within } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  ENTITY_VIEW_TYPE_MASK_DOCKER,
  ENTITY_VIEW_TYPE_MASK_FILE,
  ENTITY_VIEW_TYPE_MASK_FOLDER,
  ENTITY_VIEW_TYPE_MASK_TABLE,
} from '@sage-bionetworks/synapse-types'
import userEvent from '@testing-library/user-event'

describe('EntityViewMaskEditor tests', () => {
  function renderComponent(props: EntityViewMaskEditorProps) {
    return render(<EntityViewMaskEditor {...props} />, {
      wrapper: createWrapper(),
    })
  }

  it('renders mask settings with checked fields matching the passed value', () => {
    const value = ENTITY_VIEW_TYPE_MASK_FILE | ENTITY_VIEW_TYPE_MASK_FOLDER
    const onChange = jest.fn()
    renderComponent({ value, onChange })

    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(4)

    expect(screen.getByLabelText('Files')).toBeChecked()
    expect(screen.getByLabelText('Folders')).toBeChecked()
    expect(screen.getByLabelText('Tables')).not.toBeChecked()
    expect(screen.getByLabelText('Datasets')).not.toBeChecked()
  })
  it('onChange works', async () => {
    const value = ENTITY_VIEW_TYPE_MASK_FILE | ENTITY_VIEW_TYPE_MASK_FOLDER
    const onChange = jest.fn()
    renderComponent({ value, onChange })

    // Try untoggling 'Files'
    await userEvent.click(screen.getByLabelText('Files'))
    expect(onChange).toHaveBeenCalledWith(ENTITY_VIEW_TYPE_MASK_FOLDER)

    // Try adding 'Tables'
    // Note that we didn't update the prop passed to the component, so both Files and Folders are still checked
    await userEvent.click(screen.getByLabelText('Tables'))
    expect(onChange).toHaveBeenCalledWith(
      ENTITY_VIEW_TYPE_MASK_FILE |
        ENTITY_VIEW_TYPE_MASK_FOLDER |
        ENTITY_VIEW_TYPE_MASK_TABLE,
    )
  })

  it('Disables input if an unsupported mask value is passed', () => {
    const value = ENTITY_VIEW_TYPE_MASK_FILE | ENTITY_VIEW_TYPE_MASK_DOCKER
    const onChange = jest.fn()
    renderComponent({ value, onChange })

    screen
      .getAllByRole('checkbox')
      .forEach(checkbox => expect(checkbox).toBeDisabled())

    expect(screen.getByLabelText('Files')).toBeChecked()
    expect(screen.getByLabelText('Folders')).not.toBeChecked()
    expect(screen.getByLabelText('Tables')).not.toBeChecked()
    expect(screen.getByLabelText('Datasets')).not.toBeChecked()

    const alert = screen.getByRole('alert')
    within(alert).getByText(
      'A custom mask is in use. Changes cannot be made in the UI.',
    )
  })

  it('isMaskSupportedInUI', () => {
    expect(isMaskSupportedInUI(ENTITY_VIEW_TYPE_MASK_FILE)).toBe(true)
    expect(
      isMaskSupportedInUI(
        ENTITY_VIEW_TYPE_MASK_FILE | ENTITY_VIEW_TYPE_MASK_FOLDER,
      ),
    ).toBe(true)

    expect(isMaskSupportedInUI(ENTITY_VIEW_TYPE_MASK_DOCKER)).toBe(false)
    expect(
      isMaskSupportedInUI(
        ENTITY_VIEW_TYPE_MASK_FILE | ENTITY_VIEW_TYPE_MASK_DOCKER,
      ),
    ).toBe(false)
  })
})
