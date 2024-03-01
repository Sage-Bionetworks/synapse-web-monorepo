import { createWrapper } from '../../testutils/TestingLibraryUtils'
import React from 'react'
import EntityViewScopeEditorModal from './EntityViewScopeEditorModal'
import EntityViewScopeEditor from './EntityViewScopeEditor'
import { EntityViewScopeEditorModalProps } from './EntityViewScopeEditorModal'
import { act, render, screen, within } from '@testing-library/react'
import { waitFor } from '@testing-library/react'
import SynapseClient from '../../synapse-client'
import userEvent from '@testing-library/user-event'
import mockTableEntityData, {
  mockTableEntity,
} from '../../mocks/entity/mockTableEntity'
import {
  ENTITY_VIEW_TYPE_MASK_FILE,
  ENTITY_VIEW_TYPE_MASK_FOLDER,
  ENTITY_VIEW_TYPE_MASK_PROJECT,
  ENTITY_VIEW_CONCRETE_TYPE_VALUE,
  Entity,
} from '@sage-bionetworks/synapse-types'
import { MOCK_ACCESS_TOKEN } from '../../mocks/MockSynapseContext'
import { SynapseClientError } from '../../utils'
import { mockProjectViewEntity } from '../../mocks/entity/mockProjectView'

const mockTableEntityInstance = mockTableEntityData.entity

jest.mock('../EntityViewScopeEditor/EntityViewScopeEditor', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid={'EntityViewScopeEditorMocked'} />),
}))
const mockEntityViewScopeEditor = jest.mocked(EntityViewScopeEditor)

function renderComponent(props: EntityViewScopeEditorModalProps) {
  return render(<EntityViewScopeEditorModal {...props} />, {
    wrapper: createWrapper(),
  })
}

async function setUp(props: EntityViewScopeEditorModalProps) {
  const user = userEvent.setup()
  const component = renderComponent(props)
  const dialog = await screen.findByRole('dialog')
  const heading = await screen.findByRole('heading')
  const saveButton = await screen.findByRole('button', { name: 'Save' })
  const cancelButton = await screen.findByRole('button', { name: 'Cancel' })
  const filesCheckbox = screen.queryByRole('checkbox', { name: 'Files' })
  const foldersCheckbox = screen.queryByRole('checkbox', { name: 'Folders' })
  const tablesCheckbox = screen.queryByRole('checkbox', { name: 'Tables' })
  const datasetsCheckbox = screen.queryByRole('checkbox', { name: 'Datasets' })

  return {
    user,
    component,
    dialog,
    heading,
    saveButton,
    cancelButton,
    filesCheckbox,
    foldersCheckbox,
    tablesCheckbox,
    datasetsCheckbox,
  }
}

const mockUpdateEntity = jest.spyOn(SynapseClient, 'updateEntity')

describe('EntityViewScopeEditorModal tests', () => {
  const mockOnCancel = jest.fn()
  const mockOnUpdate = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(SynapseClient, 'getEntity').mockResolvedValue({
      ...mockTableEntity,
      scopeIds: ['syn123'],
      viewTypeMask: ENTITY_VIEW_TYPE_MASK_FILE | ENTITY_VIEW_TYPE_MASK_FOLDER,
      concreteType: ENTITY_VIEW_CONCRETE_TYPE_VALUE,
    } as Entity)
  })

  it('displays the correct scope editor and mask editor after initial render', async () => {
    const {
      heading,
      saveButton,
      cancelButton,
      filesCheckbox,
      foldersCheckbox,
      tablesCheckbox,
      datasetsCheckbox,
    } = await setUp({
      entityId: mockTableEntity.id,
      open: true,
      onCancel: mockOnCancel,
      onUpdate: mockOnUpdate,
    })

    expect(heading).toBeVisible()
    expect(saveButton).toBeVisible()
    expect(cancelButton).toBeVisible()

    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(4)

    expect(filesCheckbox).toBeInTheDocument()
    expect(foldersCheckbox).toBeInTheDocument()
    expect(tablesCheckbox).toBeInTheDocument()
    expect(datasetsCheckbox).toBeInTheDocument()

    await waitFor(() => {
      expect(filesCheckbox).toBeChecked()
      expect(foldersCheckbox).toBeChecked()
      expect(tablesCheckbox).not.toBeChecked()
      expect(datasetsCheckbox).not.toBeChecked()
    })
  })

  it('display error for response returned by update call', async () => {
    const { user, saveButton } = await setUp({
      entityId: mockTableEntity.id,
      open: true,
      onCancel: mockOnCancel,
      onUpdate: mockOnUpdate,
    })
    const errorMessage = 'Error with scope'
    mockUpdateEntity.mockRejectedValue(
      new SynapseClientError(
        404,
        'Error with scope',
        expect.getState().currentTestName!,
      ),
    )

    await waitFor(() => {
      expect(saveButton).not.toBeDisabled()
    })
    await user.click(saveButton)

    const alert = await screen.findByRole('alert')
    within(alert).getByText(errorMessage)

    expect(mockOnUpdate).not.toHaveBeenCalled()
  })

  it('verify no mask options are shown when projectView is passed', async () => {
    jest.spyOn(SynapseClient, 'getEntity').mockResolvedValue({
      ...mockProjectViewEntity,
      scopeIds: ['syn123'],
      viewTypeMask: ENTITY_VIEW_TYPE_MASK_PROJECT,
      concreteType: ENTITY_VIEW_CONCRETE_TYPE_VALUE,
    } as Entity)

    const { dialog, saveButton } = await setUp({
      entityId: mockProjectViewEntity.id,
      open: true,
      onCancel: mockOnCancel,
      onUpdate: mockOnUpdate,
    })

    expect(
      within(dialog).getByRole('heading', { name: 'Edit Scope' }),
    ).toBeVisible()

    await waitFor(() => {
      expect(saveButton).not.toBeDisabled()
      expect(within(dialog).queryByRole('checkbox')).not.toBeInTheDocument()
    })
  })

  it('validate onCancel is correctly called', async () => {
    const { user, cancelButton } = await setUp({
      entityId: mockTableEntity.id,
      open: true,
      onCancel: mockOnCancel,
      onUpdate: mockOnUpdate,
    })

    await waitFor(() => expect(cancelButton).not.toBeDisabled())
    await user.click(cancelButton)
    expect(mockOnCancel).toHaveBeenCalled()
  })

  it('successfully submit new scope and call the onUpdate callback', async () => {
    const { dialog, user, saveButton, filesCheckbox } = await setUp({
      entityId: mockTableEntity.id,
      open: true,
      onCancel: mockOnCancel,
      onUpdate: mockOnUpdate,
    })
    const newScopeIds = ['syn321']
    const newViewTypeMask = ENTITY_VIEW_TYPE_MASK_FILE

    const mockEntityView = {
      ...mockTableEntityInstance,
      scopeIds: newScopeIds,
      viewTypeMask: newViewTypeMask,
    }
    mockUpdateEntity.mockResolvedValue(mockEntityView)

    const foldersCheckbox = within(dialog).getByRole('checkbox', {
      name: 'Folders',
    })

    await waitFor(() => {
      expect(filesCheckbox).toBeChecked()
      expect(foldersCheckbox).toBeChecked()
    })

    await user.click(foldersCheckbox)

    await waitFor(() => {
      expect(mockEntityViewScopeEditor).toHaveBeenLastCalledWith(
        {
          scopeIds: ['syn123'],
          disabled: false,
          isProjectView: false,
          onChange: expect.any(Function),
        },
        expect.anything(),
      )
    })

    const onChangePassedToEntityViewScopeEditor =
      mockEntityViewScopeEditor.mock.lastCall![0].onChange

    act(() => {
      onChangePassedToEntityViewScopeEditor(newScopeIds)
    })

    await user.click(saveButton)

    await waitFor(() => {
      expect(mockUpdateEntity).toHaveBeenCalledWith(
        expect.objectContaining({
          scopeIds: newScopeIds,
          viewTypeMask: newViewTypeMask,
        }),
        MOCK_ACCESS_TOKEN,
      )
      expect(mockOnUpdate).toHaveBeenCalled()
    })
  })
})
