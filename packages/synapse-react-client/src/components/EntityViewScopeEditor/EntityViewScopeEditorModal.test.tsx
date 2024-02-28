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
  EntityView,
  ENTITY_VIEW_TYPE_MASK_DATASET,
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
  default: jest.fn(() => <div data-testid={'EntityViewScopeEditorrMocked'} />),
}))
const mockEntityViewScopeEditor = jest.mocked(EntityViewScopeEditor)

function renderComponent(props: EntityViewScopeEditorModalProps) {
  return render(<EntityViewScopeEditorModal {...props} />, {
    wrapper: createWrapper(),
  })
}

const mockUpdateEntity = jest.spyOn(SynapseClient, 'updateEntity')

describe('EntityViewScopeEditorModal tests', () => {
  const mockOnCancel = jest.fn()
  const mockOnUpdate = jest.fn()

  beforeEach(() => {
    jest.spyOn(SynapseClient, 'getEntity').mockResolvedValue({
      ...mockTableEntity,
      scopeIds: ['syn123'],
      viewTypeMask: ENTITY_VIEW_TYPE_MASK_FILE | ENTITY_VIEW_TYPE_MASK_FOLDER,
      concreteType: ENTITY_VIEW_CONCRETE_TYPE_VALUE,
    } as Entity)
  })

  it('displays the correct scope editor and mask editor after initial render', () => {
    jest.clearAllMocks()
    renderComponent({
      entityId: mockTableEntity.id,
      open: true,
      onCancel: mockOnCancel,
      onUpdate: mockOnUpdate,
    })

    const dialog = screen.getByRole('dialog')
    expect(
      within(dialog).getByRole('heading', { name: 'Edit Scope' }),
    ).toBeVisible()
    expect(within(dialog).getByRole('button', { name: 'Cancel' })).toBeVisible()
    expect(within(dialog).getByRole('button', { name: 'Save' })).toBeVisible()

    const filesButton = within(dialog).getByRole('checkbox', { name: 'Files' })
    const foldersButton = within(dialog).getByRole('checkbox', {
      name: 'Folders',
    })
    const tablesButton = within(dialog).getByRole('checkbox', {
      name: 'Tables',
    })
    const datasetsButton = within(dialog).getByRole('checkbox', {
      name: 'Datasets',
    })

    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(4)

    expect(filesButton).toBeVisible()
    expect(foldersButton).toBeVisible()
    expect(tablesButton).toBeVisible()
    expect(datasetsButton).toBeVisible()

    expect(filesButton).not.toBeChecked()
    expect(foldersButton).not.toBeChecked()
    expect(tablesButton).not.toBeChecked()
    expect(datasetsButton).not.toBeChecked()
  })

  it('display error for invalid entity', async () => {
    jest.clearAllMocks()
    renderComponent({
      entityId: mockTableEntity.id,
      open: true,
      onCancel: mockOnCancel,
      onUpdate: mockOnUpdate,
    })

    const dialog = screen.getByRole('dialog')
    mockUpdateEntity.mockRejectedValue(
      new SynapseClientError(
        404,
        'Error with scope',
        expect.getState().currentTestName!,
      ),
    )

    const saveButton = within(dialog).getByRole('button', { name: 'Save' })
    await userEvent.click(saveButton)
    expect(mockOnUpdate).not.toHaveBeenCalled()
  })

  it('verify no mask options are shown when projectView is passed', async () => {
    jest.clearAllMocks()

    jest.spyOn(SynapseClient, 'getEntity').mockResolvedValue({
      ...mockTableEntity,
      scopeIds: ['syn123'],
      viewTypeMask: ENTITY_VIEW_TYPE_MASK_PROJECT,
      concreteType: ENTITY_VIEW_CONCRETE_TYPE_VALUE,
    } as Entity)

    renderComponent({
      entityId: mockProjectViewEntity.id,
      open: true,
      onCancel: mockOnCancel,
      onUpdate: mockOnUpdate,
    })
    const dialog = screen.getByRole('dialog')
    expect(
      within(dialog).getByRole('heading', { name: 'Edit Scope' }),
    ).toBeVisible()

    expect(within(dialog).getByRole('button', { name: 'Cancel' })).toBeVisible()
    expect(within(dialog).getByRole('button', { name: 'Save' })).toBeVisible()

    await waitFor(() => {
      expect(
        within(dialog).getByRole('button', { name: 'Save' }),
      ).not.toBeDisabled()
      expect(within(dialog).queryByRole('checkbox')).not.toBeInTheDocument()
    })
  })

  it('validate onCancel is correctly called', async () => {
    jest.clearAllMocks()
    renderComponent({
      entityId: mockTableEntity.id,
      open: true,
      onCancel: mockOnCancel,
      onUpdate: mockOnUpdate,
    })
    const dialog = screen.getByRole('dialog')
    const cancelButton = within(dialog).getByRole('button', { name: 'Cancel' })
    await waitFor(() => expect(cancelButton).not.toBeDisabled())
    await userEvent.click(cancelButton)
    expect(mockOnCancel).toHaveBeenCalled()
  })

  it('successfully submit new scope and call the onUpdate callback', async () => {
    jest.clearAllMocks()

    renderComponent({
      entityId: mockTableEntity.id,
      open: true,
      onCancel: mockOnCancel,
      onUpdate: mockOnUpdate,
    })
    const dialog = screen.getByRole('dialog')
    const newScopeIds = ['syn321']
    const newViewTypeMask = ENTITY_VIEW_TYPE_MASK_FILE

    const mockEntityView = {
      ...mockTableEntityInstance,
      scopeIds: newScopeIds,
      viewTypeMask: newViewTypeMask,
    }
    mockUpdateEntity.mockResolvedValue(mockEntityView)

    const filesButton = within(dialog).getByRole('checkbox', { name: 'Files' })
    const foldersButton = within(dialog).getByRole('checkbox', {
      name: 'Folders',
    })

    await waitFor(() => {
      expect(filesButton).toBeChecked()
      expect(foldersButton).toBeChecked()
    })
    await userEvent.click(foldersButton)

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

    const saveButton = within(dialog).getByRole('button', { name: 'Save' })
    await userEvent.click(saveButton)

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
