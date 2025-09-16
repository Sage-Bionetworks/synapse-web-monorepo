import {
  MOCK_ACCESS_TOKEN,
  SynapseTestContext,
} from '@/mocks/MockSynapseContext'
import SynapseClient from '@/synapse-client'
import * as useEntityBundleModule from '@/synapse-queries/entity/useEntityBundle'
import { getUseQuerySuccessMock } from '@/testutils/ReactQueryMockUtils'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  EntityHeader,
  PaginatedResults,
  Reference,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Map } from 'immutable'
import { when } from 'vitest-when'
import * as DetailsListModule from './details/EntityDetailsList'
import {
  EntityDetailsListDataConfiguration,
  EntityDetailsListDataConfigurationType,
} from './details/EntityDetailsList'
import EntityFinder, { EntityFinderProps } from './EntityFinder'
import * as EntityTreeModule from './tree/EntityTree'
import { FinderScope } from './tree/EntityTree'

vi.mock('react-reflex', () => {
  return {
    ReflexContainer: vi
      .fn()
      .mockImplementation(({ children }) => <div>{children}</div>),
    ReflexElement: vi
      .fn()
      .mockImplementation(({ children }) => <div>{children}</div>),
    ReflexSplitter: vi.fn().mockImplementation(() => <div></div>),
  }
})

const mockUseGetEntityBundle = vi.spyOn(useEntityBundleModule, 'default')

vi.spyOn(EntityTreeModule, 'EntityTree').mockImplementation(
  ({ toggleSelection, setDetailsViewConfiguration }) => {
    invokeToggleSelectionViaTree = reference => {
      toggleSelection!(reference)
    }
    invokeSetConfigViaTree = configuration => {
      setDetailsViewConfiguration!(configuration)
    }
    return <div role="tree"></div>
  },
)

const mockDetailsList = vi
  .spyOn(DetailsListModule, 'EntityDetailsList')
  .mockImplementation(({ toggleSelection }) => {
    invokeToggleSelectionViaTable = (reference: Reference) => {
      toggleSelection(reference)
    }
    return <div role="table"></div>
  })

let invokeToggleSelectionViaTable: (reference: Reference) => void
let invokeToggleSelectionViaTree: (reference: Reference) => void
let invokeSetConfigViaTree: (
  configuration: EntityDetailsListDataConfiguration,
) => void

vi.spyOn(SynapseClient, 'getEntityPath')
vi.spyOn(SynapseClient, 'getEntityHeader')
const mockGetEntityHeaders = vi.spyOn(SynapseClient, 'getEntityHeaders')

const mockOnSelectionChange = vi.fn()

const defaultProps: EntityFinderProps = {
  initialScope: FinderScope.CURRENT_PROJECT,
  projectId: 'syn456',
  initialContainer: 'syn123',
  selectMultiple: true,
  onSelectedChange: mockOnSelectionChange,
  visibleTypesInList: [EntityType.file],
  visibleTypesInTree: [EntityType.project, EntityType.folder],
  selectableTypes: Object.values(EntityType),
  treeOnly: false,
}

function renderComponent(propOverrides?: Partial<EntityFinderProps>) {
  const user = userEvent.setup()
  render(
    <SynapseTestContext>
      <EntityFinder {...defaultProps} {...propOverrides} />
    </SynapseTestContext>,
  )

  const searchInput = screen.getByRole('textbox')

  return { user, searchInput }
}

describe('EntityFinder tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()

    mockUseGetEntityBundle.mockReturnValue(
      getUseQuerySuccessMock({
        entity: {
          id: 'syn123',
          name: 'My file entity',
          concreteType: 'org.sagebionetworks.repo.model.FileEntity',
        },
      }),
    )
  })

  describe('single-select toggleSelection validation', () => {
    it('adds a new entity when it is toggled', async () => {
      renderComponent({ selectMultiple: false })

      const reference: Reference = {
        targetId: 'syn123',
        targetVersionNumber: undefined,
      }

      // action under test
      act(() => {
        invokeToggleSelectionViaTable(reference)
      })

      await waitFor(() =>
        expect(mockOnSelectionChange).toBeCalledWith([reference]),
      )
    })

    it('removes the entity when the current selected entity is toggled', async () => {
      renderComponent({ selectMultiple: false })
      const reference: Reference = {
        targetId: 'syn123',
        targetVersionNumber: undefined,
      }

      act(() => {
        invokeToggleSelectionViaTable(reference)
      })

      await waitFor(() => expect(mockOnSelectionChange).toBeCalled())

      // action under test - remove the current reference
      act(() => {
        invokeToggleSelectionViaTable(reference)
      })
      await waitFor(() => expect(mockOnSelectionChange).toBeCalledWith([]))
    })

    it('removes the old entity when a new entity is toggled', async () => {
      renderComponent({ selectMultiple: false })
      const reference1: Reference = {
        targetId: 'syn123',
        targetVersionNumber: undefined,
      }
      const reference2: Reference = {
        targetId: 'syn456',
        targetVersionNumber: undefined,
      }

      act(() => {
        invokeToggleSelectionViaTable(reference1)
      })
      await waitFor(() => expect(mockOnSelectionChange).toBeCalled())

      // action under test - replace the current reference with the new one
      act(() => {
        invokeToggleSelectionViaTable(reference2)
      })

      await waitFor(() =>
        expect(mockOnSelectionChange).toBeCalledWith([reference2]),
      )
    })

    it('replaces an entity with the same ID when a new version is toggled', async () => {
      renderComponent({ selectMultiple: false })
      const reference1: Reference = {
        targetId: 'syn123',
        targetVersionNumber: undefined,
      }
      const reference2: Reference = {
        targetId: 'syn123',
        targetVersionNumber: 5,
      }

      act(() => {
        invokeToggleSelectionViaTable(reference1)
      })

      await waitFor(() => expect(mockOnSelectionChange).toBeCalled())

      // action under test - replace the old reference with the new one, which has the same ID but a different version
      act(() => {
        invokeToggleSelectionViaTable(reference2)
      })

      await waitFor(() =>
        expect(mockOnSelectionChange).toBeCalledWith([reference2]),
      )
    })
  })

  describe('multi-select toggleSelection validation', () => {
    it('allows adding multiple entities', async () => {
      renderComponent({ selectMultiple: true })

      const reference1: Reference = {
        targetId: 'syn123',
        targetVersionNumber: undefined,
      }

      const reference2: Reference = {
        targetId: 'syn456',
        targetVersionNumber: undefined,
      }

      // action under test -- add multiple entities
      act(() => {
        invokeToggleSelectionViaTable(reference1)
        invokeToggleSelectionViaTable(reference2)
      })

      await waitFor(() =>
        expect(mockOnSelectionChange).toBeCalledWith([reference1, reference2]),
      )
    })

    it('removes only a re-toggled entity', async () => {
      renderComponent({ selectMultiple: true })

      const reference1: Reference = {
        targetId: 'syn123',
        targetVersionNumber: undefined,
      }

      const reference2: Reference = {
        targetId: 'syn456',
        targetVersionNumber: undefined,
      }

      act(() => {
        invokeToggleSelectionViaTable(reference1)
        invokeToggleSelectionViaTable(reference2)
      })

      await waitFor(() =>
        expect(mockOnSelectionChange).toBeCalledWith([reference1, reference2]),
      )

      // action under test -- toggle reference 1 to remove it, while keeping reference 2
      act(() => {
        invokeToggleSelectionViaTable(reference1)
      })

      await waitFor(() =>
        expect(mockOnSelectionChange).toBeCalledWith([reference2]),
      )
    })

    it('replaces an entity when a new version is toggled', async () => {
      renderComponent({ selectMultiple: true })

      const reference1: Reference = {
        targetId: 'syn123',
        targetVersionNumber: undefined,
      }

      const reference2: Reference = {
        targetId: 'syn123',
        targetVersionNumber: 5,
      }

      // action under test -- toggling a reference with the same ID but new version should replace the selection
      act(() => {
        invokeToggleSelectionViaTable(reference1)
        invokeToggleSelectionViaTable(reference2)
      })

      await waitFor(() =>
        expect(mockOnSelectionChange).toBeCalledWith([reference2]),
      )
    })
  })

  it('renders both the tree and the list when treeOnly is false', async () => {
    renderComponent({ treeOnly: false })

    screen.getByRole('tree') // Tree has rendered
    screen.getByRole('table') // Table/list has rendered

    const configuration: EntityDetailsListDataConfiguration = {
      type: EntityDetailsListDataConfigurationType.USER_PROJECTS,
      getProjectParams: {
        sort: 'LAST_ACTIVITY',
      },
    }

    // Check that the tree drives the list via configuration
    act(() => {
      invokeSetConfigViaTree(configuration)
    })

    expect(mockDetailsList).toHaveBeenRenderedWithProps(
      expect.objectContaining({
        configuration: configuration, // !
        selectableTypes: defaultProps.selectableTypes,
        visibleTypes: [
          ...defaultProps.visibleTypesInList!,
          ...defaultProps.selectableTypes!,
        ],
      }),
    )

    const reference: Reference = {
      targetId: 'syn123',
    }

    // Check that the list gets the selected entities as they are updated
    act(() => {
      invokeToggleSelectionViaTable(reference)
    })
    await waitFor(() =>
      expect(mockDetailsList).toHaveBeenLastRenderedWithProps(
        expect.objectContaining({
          selected: Map([
            [reference.targetId, { targetId: reference.targetId }],
          ]),
        }),
      ),
    )
  })

  it('only renders the tree when treeOnly is true', async () => {
    renderComponent({ treeOnly: true })

    screen.getByRole('tree') // Tree has rendered
    expect(() => screen.getByRole('table')).toThrowError() // Table/list has not rendered

    const reference: Reference = {
      targetId: 'syn123',
    }

    // Check that the tree drives selections.
    act(() => {
      invokeToggleSelectionViaTree(reference)
    })
    await waitFor(() =>
      expect(mockOnSelectionChange).toBeCalledWith([reference]),
    )
  })

  describe('Search', () => {
    it('handles searching for terms', async () => {
      const { user, searchInput } = renderComponent({
        treeOnly: true,
        selectableTypes: [EntityType.file],
      })

      // Tree should be visible before we start search. No table should be visible
      expect(() => screen.getByRole('tree')).not.toThrow()
      expect(() => screen.getByRole('table')).toThrow()

      const query = 'my search terms '
      const queryTerms = ['my', 'search', 'terms']
      await user.type(searchInput, query)
      await user.type(searchInput, '{enter}')

      // The tree should be hidden when searching. The table of search results should be visible
      expect(() => screen.getByRole('tree')).toThrow()
      expect(() => screen.getByRole('table')).not.toThrow()

      await waitFor(() =>
        expect(mockDetailsList).toHaveBeenRenderedWithProps(
          expect.objectContaining({
            configuration: {
              type: EntityDetailsListDataConfigurationType.ENTITY_SEARCH,
              query: {
                queryTerm: queryTerms,
                // Verify that at least one of the omitted types is excluded from the search
                booleanQuery: expect.arrayContaining([
                  {
                    key: 'node_type',
                    value: 'project',
                    not: true,
                  },
                ]),
              },
            },
          }),
        ),
      )
      await waitFor(() =>
        expect(mockDetailsList).toHaveBeenRenderedWithProps(
          expect.objectContaining({
            configuration: {
              type: EntityDetailsListDataConfigurationType.ENTITY_SEARCH,
              query: {
                queryTerm: queryTerms,
                // The lone selectable type should not have been excluded
                booleanQuery: expect.not.arrayContaining([
                  {
                    key: 'node_type',
                    value: 'file',
                    not: true,
                  },
                ]),
              },
            },
          }),
        ),
      )

      // Clear the search results and verify we go back to the original view
      await user.click(screen.getByRole('button', { name: 'Clear Search' }))

      // Tree should be visible once again and table should be hidden
      expect(() => screen.getByRole('tree')).not.toThrow()
      expect(() => screen.getByRole('table')).toThrow()
    })

    it('handles searching for a synId', async () => {
      const { user, searchInput } = renderComponent()

      const entityId = 'syn123'
      const version = 2

      const entityHeaderResult: PaginatedResults<EntityHeader> = {
        results: [
          {
            id: entityId,
            name: 'foo',
            benefactorId: 123,
            type: 'org.sagebionetworks.repo.model.FileEntity',
            createdOn: '',
            modifiedOn: '',
            createdBy: '',
            modifiedBy: '',
            isLatestVersion: false,
          },
        ],
      }
      const entityHeaderResultWithVersion: PaginatedResults<EntityHeader> = {
        results: [
          {
            id: entityId,
            versionNumber: version,
            name: 'foo',
            benefactorId: 123,
            type: 'org.sagebionetworks.repo.model.FileEntity',
            createdOn: '',
            modifiedOn: '',
            createdBy: '',
            modifiedBy: '',
            isLatestVersion: true,
          },
        ],
      }

      when(mockGetEntityHeaders)
        .calledWith([{ targetId: entityId }], MOCK_ACCESS_TOKEN)
        .thenResolve(entityHeaderResult)

      when(mockGetEntityHeaders)
        .calledWith(
          [{ targetId: entityId, targetVersionNumber: version }],
          MOCK_ACCESS_TOKEN,
        )
        .thenResolve(entityHeaderResultWithVersion)

      await user.type(searchInput, entityId)
      await user.type(searchInput, '{enter}')

      await waitFor(() =>
        expect(mockDetailsList).toHaveBeenRenderedWithProps(
          expect.objectContaining({
            configuration: {
              type: EntityDetailsListDataConfigurationType.HEADER_LIST,
              headerList: entityHeaderResult.results,
            },
          }),
        ),
      )
      expect(mockGetEntityHeaders).toBeCalledTimes(1)

      // Search with a version number
      await user.clear(searchInput)
      await user.type(searchInput, `${entityId}.${version}`)
      await user.type(searchInput, '{enter}')
      await waitFor(() =>
        expect(mockDetailsList).toHaveBeenRenderedWithProps(
          expect.objectContaining({
            configuration: {
              type: EntityDetailsListDataConfigurationType.HEADER_LIST,
              headerList: entityHeaderResultWithVersion.results,
            },
          }),
        ),
      )

      expect(mockGetEntityHeaders).toHaveBeenCalledTimes(2)
    })
  })

  it('handles initialSelected', async () => {
    const initialSelected: Reference[] = [
      {
        targetId: 'syn123',
      },
    ]

    renderComponent({
      selectMultiple: false,
      initialSelected,
    })

    await waitFor(() =>
      expect(mockOnSelectionChange).toHaveBeenCalledWith(initialSelected),
    )
  })
})
