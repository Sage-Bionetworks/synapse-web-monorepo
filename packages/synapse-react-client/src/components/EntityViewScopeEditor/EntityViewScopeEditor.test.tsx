import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { act, render, screen, waitFor } from '@testing-library/react'
import { FinderScope } from '../EntityFinder/tree/EntityTree'
import { VersionSelectionType } from '../EntityFinder/VersionSelectionType'
import EntityHeaderTable from '../EntityHeaderTable'
import EntityViewScopeEditor, {
  EntityViewScopeEditorProps,
} from './EntityViewScopeEditor'

vi.mock('../EntityHeaderTable', () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid={'EntityHeaderTableMocked'} />),
}))

const mockedEntityHeaderTable = vi.mocked(EntityHeaderTable)

function renderComponent(props: EntityViewScopeEditorProps) {
  return render(<EntityViewScopeEditor {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('EntityViewScopeEditor tests', () => {
  it('Renders an EntityHeaderTable which can be used to update scope', async () => {
    const scopeIds = ['syn123']
    const onChange = vi.fn()
    const isProjectView = false
    renderComponent({
      scopeIds,
      onChange,
      isProjectView,
    })

    await screen.findByText('Scope')
    await screen.findByTestId('EntityHeaderTableMocked')

    await waitFor(() =>
      expect(mockedEntityHeaderTable).toHaveBeenLastRenderedWithProps({
        references: [{ targetId: 'syn123' }],
        isEditable: true,
        onUpdate: expect.anything(),
        removeSelectedRowsButtonText: 'Remove Selected Items from View Scope',
        objectNameCopy: 'container',
        hideTextFieldToPasteValue: true,
        entityFinderConfiguration: {
          selectMultiple: true,
          versionSelection: VersionSelectionType.DISALLOWED,
          initialScope: FinderScope.ALL_PROJECTS,
          initialContainer: 'root',
          selectableTypes: expect.arrayContaining([
            EntityType.project,
            EntityType.folder,
          ]),
        },
      }),
    )

    const capturedOnUpdate = mockedEntityHeaderTable.mock.lastCall![0].onUpdate!

    act(() => {
      capturedOnUpdate([{ targetId: 'syn123' }, { targetId: 'syn456' }])
    })

    expect(onChange).toHaveBeenLastCalledWith(['syn123', 'syn456'])
  })

  it('Shows text when scope is empty', async () => {
    const scopeIds: string[] = []
    const onChange = vi.fn()
    const isProjectView = false
    renderComponent({
      scopeIds,
      onChange,
      isProjectView,
    })
    await screen.findByText('Empty! Add items to populate your view')

    await waitFor(() =>
      expect(mockedEntityHeaderTable).toHaveBeenLastRenderedWithProps({
        references: [],
        isEditable: true,
        onUpdate: expect.anything(),
        removeSelectedRowsButtonText: 'Remove Selected Items from View Scope',
        objectNameCopy: 'container',
        hideTextFieldToPasteValue: true,
        entityFinderConfiguration: {
          selectMultiple: true,
          versionSelection: VersionSelectionType.DISALLOWED,
          initialScope: FinderScope.ALL_PROJECTS,
          initialContainer: 'root',
          selectableTypes: expect.arrayContaining([
            EntityType.project,
            EntityType.folder,
          ]),
        },
      }),
    )
  })

  it('Restricts the selectable types based on isProjectView', async () => {
    const scopeIds = ['syn123']
    const onChange = vi.fn()
    const isProjectView = true // Test different UI for project views
    renderComponent({
      scopeIds,
      onChange,
      isProjectView,
    })

    await screen.findByText('Scope')
    await screen.findByTestId('EntityHeaderTableMocked')

    await waitFor(() =>
      expect(mockedEntityHeaderTable).toHaveBeenLastRenderedWithProps({
        references: [{ targetId: 'syn123' }],
        isEditable: true,
        onUpdate: expect.anything(),
        removeSelectedRowsButtonText: 'Remove Selected Items from View Scope',
        objectNameCopy: 'project',
        hideTextFieldToPasteValue: true,
        entityFinderConfiguration: {
          selectMultiple: true,
          versionSelection: VersionSelectionType.DISALLOWED,
          initialScope: FinderScope.ALL_PROJECTS,
          initialContainer: 'root',
          selectableTypes: expect.arrayContaining([
            EntityType.project,
            // Folders cannot be added to a Project View!
            // EntityType.folder,
          ]),
        },
      }),
    )
  })
})
