import mockDatasetEntityData from '@/mocks/entity/mockDataset'
import mockDatasetCollectionData from '@/mocks/entity/mockDatasetCollection'
import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import { rest, server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/utils'
import { ENTITY_ID } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  EntityRef,
  EntityType,
  Reference,
} from '@sage-bionetworks/synapse-types'
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { cloneDeep, noop, uniqueId } from 'lodash-es'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import * as EntityBadgeModule from '../../EntityBadgeIcons/EntityBadgeIcons'
import * as EntityFinderModal from '../../EntityFinder/EntityFinderModal'
import { displayToast } from '../../ToastMessage'
import * as ToastMessageModule from '../../ToastMessage/ToastMessage'
import {
  DatasetItemsEditor,
  DatasetItemsEditorProps,
  getCopy,
} from './DatasetItemsEditor'

const mockDatasetEntity = mockDatasetEntityData.entity
const mockDatasetCollectionEntity = mockDatasetCollectionData.entity
const mockFileEntity = mockFileEntityData.entity

const datasetCopy = getCopy(mockDatasetEntity)
const datasetCollectionCopy = getCopy(mockDatasetCollectionEntity)

const mockEntityBadgeIcons = jest
  .spyOn(EntityBadgeModule, 'EntityBadgeIcons')
  .mockImplementation(() => <></>)

jest.spyOn(ToastMessageModule, 'displayToast').mockImplementation(() => {
  return noop
})

const mockFileReference: Reference = {
  targetId: mockFileEntity.id!,
  targetVersionNumber: 3,
}

const mockDatasetItem: EntityRef = {
  entityId: mockFileEntity.id!,
  versionNumber: 1,
}

const mockDatasetReference: Reference = {
  targetId: mockDatasetEntity.id!,
  targetVersionNumber: 2,
}

function referenceToDatasetItem(reference: Reference): EntityRef {
  return {
    entityId: reference.targetId,
    versionNumber: reference.targetVersionNumber!,
  }
}
// The Entity Finder is complicated to use and would require setting up a lot of API mocks, so we'll just mock the component.
const mockEntityFinder = jest
  .spyOn(EntityFinderModal, 'EntityFinderModal')
  .mockImplementation(() => <></>)

const mockEntityFinderButtonText = 'Add Items From Entity Finder'
function mockEntityFinderToAddItems(items: Array<Reference>) {
  mockEntityFinder.mockImplementation(({ show, onConfirm }) => {
    return (
      <>
        {show ? (
          <div role="dialog">
            <button onClick={() => onConfirm(items)}>
              {mockEntityFinderButtonText}
            </button>
          </div>
        ) : null}
      </>
    )
  })
}

async function addItemsViaEntityFinder(
  user: ReturnType<typeof userEvent.setup>,
) {
  const addItemsButton = screen.getAllByRole('button', {
    name: /Add (File|Dataset)s/,
  })[0]
  // Mocked entity finder is not visible
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

  await user.click(addItemsButton)

  // Entity finder should now be visible
  expect(screen.queryByRole('dialog')).toBeInTheDocument()

  // Use the entity finder to add items
  await user.click(screen.getByText(mockEntityFinderButtonText))

  // The entity finder should be automatically closed.
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
}

async function selectIndividualItem(
  id: string,
  user: ReturnType<typeof userEvent.setup>,
) {
  // Click the checkbox for the corresponding item
  const checkbox = await screen.findByRole('checkbox', { name: `Select ${id}` })
  await user.click(checkbox)
}

async function removeItem(
  id: string,
  user: ReturnType<typeof userEvent.setup>,
) {
  await selectIndividualItem(id, user)
  await clickRemove(user)
}

async function clickRemove(user: ReturnType<typeof userEvent.setup>) {
  await user.click(
    screen.getByRole('button', {
      name: /Remove (File|Dataset)s/,
    }),
  )
}

const mockToastFn = displayToast

// Captures the JSON passed to the server via msw.
const updatedEntityCaptor = jest.fn()

async function renderComponent(wrapperProps?: SynapseContextType) {
  const user = userEvent.setup()

  const mockOnUnsavedChangesFn = jest.fn()
  const mockOnSaveFn = jest.fn()
  const mockOnCloseFn = jest.fn()

  const defaultProps: DatasetItemsEditorProps = {
    entityId: mockDatasetEntityData.id,
    onSave: mockOnSaveFn,
    onClose: mockOnCloseFn,
    onUnsavedChangesChange: mockOnUnsavedChangesFn,
  }

  render(<DatasetItemsEditor {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })

  // The dataset will be loaded when the add items button is not disabled.
  await waitFor(() =>
    expect(
      screen.getAllByRole('button', {
        name: /Add (File|Dataset)s/,
      })[0],
    ).not.toBeDisabled(),
  )

  const saveButton = screen.getByRole('button', { name: 'Save' })

  return {
    user,
    saveButton,
    mockOnUnsavedChangesFn,
    mockOnSaveFn,
    mockOnCloseFn,
  }
}

async function clickSave(user: ReturnType<typeof userEvent.setup>) {
  const saveButton = await screen.findByRole('button', { name: 'Save' })
  await waitFor(() => expect(saveButton).not.toBeDisabled())
  await user.click(saveButton)
}

async function clickCancel(user: ReturnType<typeof userEvent.setup>) {
  const saveButton = await screen.findByRole('button', { name: 'Cancel' })
  await user.click(saveButton)
}

async function clickSelectAll(user: ReturnType<typeof userEvent.setup>) {
  await user.click(await screen.findByLabelText('Select All'))
}

async function verifyNoneSelected() {
  // We verify no items are selected by checking the Remove Items button, which is disabled if no items are selected.
  // In the future, if we add a counter for the number of items currently selected, we should use that instead.
  await waitFor(() =>
    expect(
      screen.getByRole('button', {
        name: /Remove (File|Dataset)s/,
      }),
    ).toBeDisabled(),
  )
}

function getDatasetHandlerWithItems(
  type: 'dataset' | 'datasetcollection',
  items?: Array<EntityRef>,
) {
  return rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_ID(
      ':entityId',
    )}`,

    async (req, res, ctx) => {
      const response = cloneDeep(
        type === 'dataset'
          ? mockDatasetEntityData.entity
          : mockDatasetCollectionData.entity,
      )
      response.items = items
      return res(ctx.status(200), ctx.json(response))
    },
  )
}

const successfulUpdateHandler = rest.put(
  `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_ID(
    ':entityId',
  )}`,
  async (req, res, ctx) => {
    const requestBody = await req.json()
    updatedEntityCaptor(requestBody)

    server.use(
      rest.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_ID(
          ':entityId',
        )}`,
        async (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              ...requestBody,
              etag: 'new-etag-' + uniqueId(),
            }),
          )
        },
      ),
    )

    return res(ctx.status(200), ctx.json(requestBody))
  },
)

const unsuccessfulUpdateHandler = rest.put(
  `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_ID(
    ':entityId',
  )}`,
  async (req, res, ctx) => {
    const status = 500
    return res(
      ctx.status(status),
      ctx.json({
        status: status,
        reason: 'Server error occurred',
      }),
    )
  },
)

describe('Dataset Items Editor tests', () => {
  // Stub for getBoundingClientRect, required by @tanstack/react-virtual to work in tests
  jest
    .spyOn(Element.prototype, 'getBoundingClientRect')
    .mockImplementation(() => ({
      width: 1200,
      height: 600,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      x: 0,
      y: 0,
      toJSON: () => {},
    }))

  // Handle the msw lifecycle:
  beforeAll(() => {
    mockAllIsIntersecting(false)
    server.listen()
  })

  beforeEach(() => {
    jest.clearAllMocks()
    server.resetHandlers()
  })
  afterAll(() => server.close())

  it('Displays call to action when there are no items', async () => {
    const { ADD_ITEMS, NO_ITEMS_IN_THIS_DATASET } = datasetCopy

    const getEmptyDatasetHandler = getDatasetHandlerWithItems('dataset', [])
    server.use(getEmptyDatasetHandler)

    await renderComponent()
    await screen.findByText(NO_ITEMS_IN_THIS_DATASET, { exact: true })
    const addItemsButtons = await screen.findAllByRole('button', {
      name: ADD_ITEMS,
    })
    expect(addItemsButtons.length).toBe(2)
  })

  it('Opens the Entity Finder modal when Add Items is clicked', async () => {
    const { ADD_ITEMS } = datasetCopy

    const getEmptyDatasetHandler = getDatasetHandlerWithItems('dataset', [])
    server.use(getEmptyDatasetHandler)
    mockEntityFinderToAddItems([mockFileReference])

    const { user, mockOnUnsavedChangesFn } = await renderComponent()
    await waitFor(() =>
      expect(
        screen.getAllByRole('button', {
          name: ADD_ITEMS,
        })[0],
      ).not.toBeDisabled(),
    )

    // Assertions are captured in the helper function:
    await addItemsViaEntityFinder(user)
    expect(mockOnUnsavedChangesFn).toHaveBeenCalledWith(true)
  })

  it('Updates the entity when Save is clicked', async () => {
    const { ADD_ITEMS } = datasetCopy

    // Start with empty dataset
    const getEmptyDatasetHandler = getDatasetHandlerWithItems('dataset', [])
    server.use(getEmptyDatasetHandler, successfulUpdateHandler)
    mockEntityFinderToAddItems([mockFileReference])

    const { user, mockOnUnsavedChangesFn, mockOnSaveFn } =
      await renderComponent()
    await waitFor(() =>
      expect(
        screen.getAllByRole('button', {
          name: ADD_ITEMS,
        })[1],
      ).not.toBeDisabled(),
    )

    await addItemsViaEntityFinder(user)
    expect(mockOnUnsavedChangesFn).toHaveBeenCalledWith(true)

    await clickSave(user)

    // Verify that items were added to the dataset passed to the update API
    const expectedDatasetItems = [mockFileReference].map(referenceToDatasetItem)
    await waitFor(() => {
      expect(updatedEntityCaptor).toHaveBeenCalledWith(
        expect.objectContaining({ items: expectedDatasetItems }),
      )

      expect(mockOnSaveFn).toHaveBeenCalled()
      expect(mockOnUnsavedChangesFn).toHaveBeenLastCalledWith(false)
    })
  })

  describe('Select All', () => {
    it('Selects all when none are selected', async () => {
      const getDatasetHandler = getDatasetHandlerWithItems(
        'dataset',
        [mockFileReference, { targetId: 'syn999', targetVersionNumber: 1 }].map(
          referenceToDatasetItem,
        ),
      )
      server.use(getDatasetHandler, successfulUpdateHandler)
      const { user } = await renderComponent()

      await clickSelectAll(user)

      await clickRemove(user)

      await clickSave(user)

      // Verify that there are no dataset items
      await waitFor(() =>
        expect(updatedEntityCaptor).toHaveBeenCalledWith(
          expect.objectContaining({ items: [] }),
        ),
      )
    })

    it('Selects all when some are selected', async () => {
      const getDatasetHandler = getDatasetHandlerWithItems(
        'dataset',
        [mockFileReference, { targetId: 'syn999', targetVersionNumber: 1 }].map(
          referenceToDatasetItem,
        ),
      )
      server.use(getDatasetHandler, successfulUpdateHandler)
      const { user } = await renderComponent()

      // Select one item
      await selectIndividualItem(mockFileReference.targetId, user)

      // Clicking select all should select all items, since not all items are selected
      await clickSelectAll(user)

      // Verify all were selected by removing the items
      await clickRemove(user)

      await clickSave(user)

      // Verify that there are no dataset items
      await waitFor(() =>
        expect(updatedEntityCaptor).toHaveBeenCalledWith(
          expect.objectContaining({ items: [] }),
        ),
      )
    })

    it('Selects none when all are selected', async () => {
      const getDatasetHandler = getDatasetHandlerWithItems(
        'dataset',
        [mockFileReference, { targetId: 'syn999', targetVersionNumber: 1 }].map(
          referenceToDatasetItem,
        ),
      )
      server.use(getDatasetHandler, successfulUpdateHandler)
      const { user } = await renderComponent()

      await clickSelectAll(user)

      // Call under test -- Deselect all
      await clickSelectAll(user)

      // Verify that nothing is selected.
      await verifyNoneSelected()
    })
  })

  it('Displays the correct number of files in the dataset', async () => {
    const getEmptyDatasetHandler = getDatasetHandlerWithItems('dataset', [])
    server.use(getEmptyDatasetHandler)

    const itemsToAdd: Array<Reference> = [
      mockFileReference,
      { targetId: 'syn999', targetVersionNumber: 1 },
    ]
    mockEntityFinderToAddItems(itemsToAdd)

    const { user, mockOnUnsavedChangesFn } = await renderComponent()

    // Call under test--we start with no files in the dataset
    await screen.findByText('No Files', { exact: true })

    // Add two items
    await addItemsViaEntityFinder(user)
    expect(mockOnUnsavedChangesFn).toHaveBeenCalledWith(true)

    await screen.findByText('2 Files', { exact: true })

    // Remove one item
    await removeItem('syn999', user)

    await screen.findByText('1 File', { exact: true })
  })

  describe('Remove Items', () => {
    it('Disables the remove button until an item has been selected', async () => {
      const { REMOVE_ITEMS } = datasetCopy

      // Start with one item
      const getDatasetHandler = getDatasetHandlerWithItems('dataset', [
        referenceToDatasetItem(mockFileReference),
      ])
      server.use(getDatasetHandler)

      const { user } = await renderComponent()

      // The Remove button should be disabled.
      await waitFor(() =>
        expect(
          screen.getByRole('button', {
            name: REMOVE_ITEMS,
          }),
        ).toBeDisabled(),
      )

      await selectIndividualItem(mockFileReference.targetId, user)

      // The remove item should not be disabled after making a selection
      await waitFor(() =>
        expect(
          screen.getByRole('button', {
            name: REMOVE_ITEMS,
          }),
        ).not.toBeDisabled(),
      )
    })

    it('Removes selected items when the button is clicked', async () => {
      // Start with one item
      const getDatasetHandler = getDatasetHandlerWithItems('dataset', [
        referenceToDatasetItem(mockFileReference),
      ])
      server.use(getDatasetHandler, successfulUpdateHandler)

      const { user } = await renderComponent()

      await removeItem(mockFileReference.targetId, user)

      await clickSave(user)

      // Verify that there are no dataset items
      await waitFor(() =>
        expect(updatedEntityCaptor).toHaveBeenCalledWith(
          expect.objectContaining({ items: [] }),
        ),
      )

      // Since we removed the selected item, there should now be nothing selected
      await verifyNoneSelected()
    })
  })

  it('Allows selecting versions and updates the selected version when a new one is picked', async () => {
    const getDatasetHandler = getDatasetHandlerWithItems(
      'dataset',
      [mockFileReference].map(referenceToDatasetItem),
    )
    server.use(getDatasetHandler, successfulUpdateHandler)
    const { user } = await renderComponent()

    // Sanity check: the selected version should not be 1 when we start.
    expect(mockFileReference.targetVersionNumber).not.toEqual(1)
    // The data rows, including the entity badge icons, should be showing the current selected version's data
    await waitFor(() =>
      expect(mockEntityBadgeIcons).toHaveBeenLastCalledWith(
        expect.objectContaining({
          entityId: mockFileReference.targetId,
          versionNumber: mockFileReference.targetVersionNumber,
        }),
        expect.anything(),
      ),
    )

    // Call under test: select a different version
    await user.selectOptions(await screen.findByRole('combobox'), '1')

    // The version passed to the icons should now be v1
    await waitFor(() =>
      expect(mockEntityBadgeIcons).toHaveBeenLastCalledWith(
        expect.objectContaining({
          entityId: mockFileReference.targetId,
          versionNumber: 1,
        }),
        expect.anything(),
      ),
    )

    await clickSave(user)

    // Verify that the item has changed
    await waitFor(() =>
      expect(updatedEntityCaptor).toHaveBeenCalledWith(
        expect.objectContaining({
          items: [
            referenceToDatasetItem({
              targetId: mockFileEntity.id!,
              targetVersionNumber: 1,
            }),
          ],
        }),
      ),
    )
  })

  it('Handles an error on Save by displaying a toast and not calling the callback', async () => {
    const getDatasetHandler = getDatasetHandlerWithItems('dataset', [])
    server.use(getDatasetHandler, unsuccessfulUpdateHandler)
    mockEntityFinderToAddItems([mockFileReference])

    const { user, mockOnSaveFn } = await renderComponent()

    await addItemsViaEntityFinder(user)

    await clickSave(user)

    await waitFor(() =>
      expect(mockToastFn).toHaveBeenCalledWith(
        expect.anything(),
        'danger',
        expect.anything(),
      ),
    )

    expect(mockToastFn).not.toHaveBeenCalledWith(
      expect.anything(),
      'success',
      expect.anything(),
    )
    expect(mockOnSaveFn).not.toHaveBeenCalled()
  })

  describe('Cancel', () => {
    it('Calls the correct callback when onCancel is called', async () => {
      const getEmptyDatasetHandler = getDatasetHandlerWithItems('dataset', [])
      server.use(getEmptyDatasetHandler)
      const { user, mockOnCloseFn } = await renderComponent()

      await clickCancel(user)

      expect(mockOnCloseFn).toHaveBeenCalled()
    })

    it('Displays a warning when cancelling without making changes', async () => {
      const getEmptyDatasetHandler = getDatasetHandlerWithItems('dataset', [])
      server.use(getEmptyDatasetHandler)
      mockEntityFinderToAddItems([mockFileReference])

      const { user, mockOnUnsavedChangesFn, mockOnCloseFn } =
        await renderComponent()

      await addItemsViaEntityFinder(user)
      expect(mockOnUnsavedChangesFn).toHaveBeenCalledWith(true)

      await clickCancel(user)

      // Verify that the warning dialog appears
      const dialog = screen.getByRole('dialog')
      await screen.findByText('Any unsaved changes will be lost', {
        exact: false,
      })

      // Click the cancel button in the dialog
      await user.click(await screen.findByRole('button', { name: 'Cancel' }))
      await waitForElementToBeRemoved(dialog)

      // Verify the dialog is gone but onClose was not called
      expect(mockOnCloseFn).not.toHaveBeenCalled()
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('Click through the warning after making changes', async () => {
      const getEmptyDatasetHandler = getDatasetHandlerWithItems('dataset', [])
      server.use(getEmptyDatasetHandler)
      mockEntityFinderToAddItems([mockFileReference])

      const { user, mockOnUnsavedChangesFn, mockOnCloseFn } =
        await renderComponent()

      await addItemsViaEntityFinder(user)
      expect(mockOnUnsavedChangesFn).toHaveBeenCalledWith(true)

      await clickCancel(user)

      // Verify that the warning dialog appears
      const dialog = screen.getByRole('dialog')
      await screen.findByText('Any unsaved changes will be lost', {
        exact: false,
      })

      // Click the 'Close Editor' button in the dialog
      await user.click(
        await screen.findByRole('button', { name: 'Close Editor' }),
      )
      await waitForElementToBeRemoved(dialog)

      // Verify the dialog is gone and onClose was called
      expect(mockOnCloseFn).toHaveBeenCalled()
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  it('SWC-5876 - Handles a dataset with undefined items', async () => {
    const { NO_ITEMS_IN_THIS_DATASET } = datasetCopy

    const getDatasetHandler = getDatasetHandlerWithItems('dataset', undefined)
    server.use(getDatasetHandler, successfulUpdateHandler)
    await renderComponent()

    // Verify that the dataset is empty and no error was thrown.
    await waitFor(() =>
      expect(
        screen.queryByText(NO_ITEMS_IN_THIS_DATASET, { exact: false }),
      ).toBeInTheDocument(),
    )
  })

  describe('SWC-6177 - Gets difference when item is added/updated/changed', () => {
    it('Shows no changes when same item with same version is added', async () => {
      // Render dataset editor with item
      const mockItem = { entityId: mockFileEntity.id!, versionNumber: 3 }
      const getDatasetHandler = getDatasetHandlerWithItems('dataset', [
        mockItem,
      ])
      server.use(getDatasetHandler, successfulUpdateHandler)
      const { user, mockOnUnsavedChangesFn } = await renderComponent()

      // Add same item with same version to dataset
      mockEntityFinderToAddItems([mockFileReference])
      await addItemsViaEntityFinder(user)
      expect(mockOnUnsavedChangesFn).not.toHaveBeenCalledWith(true)

      // Verify toast showing change is not called
      expect(mockToastFn).not.toHaveBeenCalled()
    })

    it('Shows item has updated when same item with different version is added', async () => {
      const getDatasetHandler = getDatasetHandlerWithItems('dataset', [
        mockDatasetItem,
      ])
      server.use(getDatasetHandler, successfulUpdateHandler)
      const { user, mockOnUnsavedChangesFn } = await renderComponent()

      // Add identical item to existing dataset with different version
      mockEntityFinderToAddItems([mockFileReference])
      await addItemsViaEntityFinder(user)
      expect(mockOnUnsavedChangesFn).toHaveBeenCalledWith(true)

      // Verify toast shows no item has been added and 1 has updated
      expect(mockToastFn).toHaveBeenCalledWith(
        expect.anything(),
        'info',
        expect.objectContaining({
          title: '0 Items added and 1 Item updated',
        }),
      )
    })

    it('Shows item has been added', async () => {
      const getDatasetHandler = getDatasetHandlerWithItems('dataset', [])
      server.use(getDatasetHandler, successfulUpdateHandler)
      const { user, mockOnUnsavedChangesFn } = await renderComponent()

      // Add item to dataset
      mockEntityFinderToAddItems([mockFileReference])
      await addItemsViaEntityFinder(user)
      expect(mockOnUnsavedChangesFn).toHaveBeenCalledWith(true)

      // Verify one item has been added to dataset
      expect(mockToastFn).toHaveBeenCalledWith(
        expect.anything(),
        'info',
        expect.objectContaining({
          title: '1 Item added',
        }),
      )
    })

    it('Shows item has been removed', async () => {
      const getDatasetHandler = getDatasetHandlerWithItems('dataset', [
        mockDatasetItem,
      ])
      server.use(getDatasetHandler, successfulUpdateHandler)
      const { user } = await renderComponent()

      // Remove item from dataset
      await removeItem(mockDatasetItem.entityId, user)

      // Verify item has been removed from dataset
      expect(mockToastFn).toHaveBeenCalledWith(
        expect.anything(),
        'info',
        expect.objectContaining({
          title: '1 Item removed',
        }),
      )
    })
  })

  describe('Dataset Collections support', () => {
    it('Can add items to and update a dataset collection', async () => {
      const { ADD_ITEMS } = datasetCollectionCopy

      // Start with empty dataset
      const getEmptyDatasetHandler = getDatasetHandlerWithItems(
        'datasetcollection',
        [],
      )
      server.use(getEmptyDatasetHandler, successfulUpdateHandler)
      mockEntityFinderToAddItems([mockDatasetReference])

      const { user, mockOnUnsavedChangesFn, mockOnSaveFn } =
        await renderComponent()
      await waitFor(() =>
        expect(
          screen.getAllByRole('button', {
            name: ADD_ITEMS,
          })[1],
        ).not.toBeDisabled(),
      )

      await addItemsViaEntityFinder(user)
      expect(mockOnUnsavedChangesFn).toHaveBeenCalledWith(true)

      // Verify that the Entity Finder is configured to select Datasets
      expect(mockEntityFinder).toHaveBeenLastCalledWith(
        expect.objectContaining({
          configuration: expect.objectContaining({
            selectableTypes: [EntityType.DATASET],
          }),
        }),
        expect.anything(),
      )

      await clickSave(user)

      // Verify that items were added to the collection and passed to the update API
      const expectedDatasetCollectionItems = [mockDatasetReference].map(
        referenceToDatasetItem,
      )

      await waitFor(() => {
        expect(updatedEntityCaptor).toHaveBeenCalledWith(
          expect.objectContaining({ items: expectedDatasetCollectionItems }),
        )
        expect(mockOnSaveFn).toHaveBeenCalled()

        // Verify the 'unsaved changes' flag was reset
        expect(mockOnUnsavedChangesFn).toHaveBeenLastCalledWith(false)
      })
    })
  })
})
