import '@testing-library/jest-dom'
import { act, render, screen, waitFor } from '@testing-library/react'
import React, { useState } from 'react'
import { EntityDetailsListDataConfigurationType } from '../../../../../src/lib/containers/entity_finder/details/EntityDetailsList'
import {
  EntityTree,
  EntityTreeContainer,
  EntityTreeProps,
  FinderScope,
} from '../../../../../src/lib/containers/entity_finder/tree/EntityTree'
import {
  EntityHeader,
  EntityPath,
  EntityType,
  PaginatedResults,
  ProjectHeader,
  ProjectHeaderList,
} from '../../../../../src/lib/utils/synapseTypes'
import userEvent from '@testing-library/user-event'
import * as VirtualizedTreeModule from '../../../../../src/lib/containers/entity_finder/tree/VirtualizedTree'
import {
  EntityTreeNodeType,
  VirtualizedTreeProps,
} from '../../../../../src/lib/containers/entity_finder/tree/VirtualizedTree'
import { rest, server } from '../../../../../mocks/msw/server'
import failOnConsole from 'jest-fail-on-console'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../../src/lib/utils/functions/getEndpoint'
import {
  ENTITY_HEADER_BY_ID,
  ENTITY_PATH,
  FAVORITES,
  PROJECTS,
} from '../../../../../src/lib/utils/APIConstants'
import { createWrapper } from '../../../../testutils/TestingLibraryUtils'
import mockFileEntityData from '../../../../../mocks/entity/mockFileEntity'
import * as ToastMessageModule from '../../../../../src/lib/containers/ToastMessage'

const VIRTUALIZED_TREE_TEST_ID = 'VirtualizedTreeComponent'

let invokeSetSelectedId: (containerId: string) => void

const mockVirtualizedTree = jest
  .spyOn(VirtualizedTreeModule, 'VirtualizedTree')
  .mockImplementation(({ rootNodeConfiguration, setSelectedId }) => {
    invokeSetSelectedId = (containerId: string) => {
      setSelectedId(containerId)
    }
    return <div data-testid={VIRTUALIZED_TREE_TEST_ID}></div>
  })

const mockDisplayToast = jest.spyOn(ToastMessageModule, 'displayToast')

const mockSetDetailsViewConfiguration = jest.fn()
const mockSetBreadcrumbItems = jest.fn()
const mockToggleSelection = jest.fn()

const defaultProps: EntityTreeProps = {
  // We use JS arrays rather than Immutable.Map so we can easily inspect it in
  selectedEntities: [],
  initialScope: FinderScope.CURRENT_PROJECT,
  projectId: 'syn5',
  initialContainer: 'syn123',
  showDropdown: true,
  visibleTypes: [EntityType.PROJECT, EntityType.FOLDER],
  setDetailsViewConfiguration: mockSetDetailsViewConfiguration,
  setBreadcrumbItems: mockSetBreadcrumbItems,
  toggleSelection: mockToggleSelection,
  treeNodeType: EntityTreeNodeType.SINGLE_PANE,
  showScopeAsRootNode: true,
  selectableTypes: Object.values(EntityType),
}

const projectsPage1: Partial<ProjectHeader>[] = [
  {
    id: 'syn1',
    name: 'Project 1',
    modifiedOn: 'today',
    modifiedBy: 100000,
  },
]

const projectsPage2: Partial<ProjectHeader>[] = [
  {
    id: 'syn2',
    name: 'Project 2',
    modifiedOn: 'today',
    modifiedBy: 100000,
  },
]

const favorites: PaginatedResults<EntityHeader> = {
  results: [
    {
      id: 'syn3',
      name: 'Favorite 1 - A Project',
      modifiedOn: 'today',
      modifiedBy: '100000',
      type: 'org.sagebionetworks.repo.model.Folder',
      versionNumber: 1,
      versionLabel: '',
      benefactorId: 123,
      createdOn: 'yesterday',
      createdBy: '10000',
      isLatestVersion: true,
    },
    {
      id: 'syn4',
      name: 'Favorite 2 - A file',
      modifiedOn: 'today',
      modifiedBy: '100000',
      type: 'org.sagebionetworks.repo.model.FileEntity',
      versionNumber: 1,
      versionLabel: '',
      benefactorId: 123,
      createdOn: 'yesterday',
      createdBy: '10000',
      isLatestVersion: true,
    },
  ],
}

const entityPath: EntityPath = {
  path: [
    {
      id: 'syn0',
      name: 'The root entity that is never seen',
      modifiedOn: 'today',
      modifiedBy: '100000',
      type: 'org.sagebionetworks.repo.model.Folder',
      versionNumber: 1,
      versionLabel: '',
      benefactorId: 123,
      createdOn: 'yesterday',
      createdBy: '10000',
    },
    {
      id: 'syn5',
      name: 'Project in entity path',
      modifiedOn: 'today',
      modifiedBy: '100000',
      type: 'org.sagebionetworks.repo.model.Project',
      versionNumber: 1,
      versionLabel: '',
      benefactorId: 123,
      createdOn: 'yesterday',
      createdBy: '10000',
    },
    {
      id: 'syn6',
      name: 'Folder in entity path',
      modifiedOn: 'today',
      modifiedBy: '100000',
      type: 'org.sagebionetworks.repo.model.Folder',
      versionNumber: 1,
      versionLabel: '',
      benefactorId: 123,
      createdOn: 'yesterday',
      createdBy: '10000',
    },
  ],
}

const projectIdWithNoReadAccess = 'syn984312'

const setCurrentContainerSpy = jest.fn()

function renderComponent(propOverrides?: Partial<EntityTreeProps>) {
  function EntityTreeWithCurrentContainer() {
    const [currentContainer, setCurrentContainer] =
      useState<EntityTreeContainer>(propOverrides?.initialContainer ?? null)
    setCurrentContainerSpy.mockImplementation(setCurrentContainer)
    return (
      <EntityTree
        {...defaultProps}
        {...propOverrides}
        currentContainer={currentContainer}
        setCurrentContainer={setCurrentContainerSpy}
      />
    )
  }

  return render(<EntityTreeWithCurrentContainer />, {
    wrapper: createWrapper(),
  })
}

describe('EntityTree tests', () => {
  failOnConsole()
  beforeAll(() => {
    server.listen()
    server.use(
      rest.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FAVORITES}`,
        async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(favorites))
        },
      ),
      rest.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_PATH(
          ':id',
        )}`,
        async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(entityPath))
        },
      ),
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${ENTITY_HEADER_BY_ID(':id')}`,
        async (req, res, ctx) => {
          if (req.params.id === projectIdWithNoReadAccess) {
            return res(
              ctx.status(403),
              ctx.json({
                reason: 'You do not have READ access on this entity.',
              }),
            )
          }
          return res(ctx.status(200), ctx.json(entityPath.path[1]))
        },
      ),
      rest.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${PROJECTS}`,
        async (req, res, ctx) => {
          let response: ProjectHeaderList = {
            results: projectsPage1,
            nextPageToken: '50a0',
          }

          if (req.params.nextPageToken === '50a0') {
            response.results = projectsPage2
            response.nextPageToken = null
          }
          return res(ctx.status(200), ctx.json(response))
        },
      ),
    )
  })
  beforeEach(() => jest.clearAllMocks())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('loads more projects when rootNodeConfiguration.fetchNextPage is called', async () => {
    renderComponent({ initialScope: FinderScope.ALL_PROJECTS })

    // Wait for the virtualized tree to be rendered, which will happen when we have entities to show
    await screen.findByTestId(VIRTUALIZED_TREE_TEST_ID)

    // Capture the fetch function passed to the component, and check that the first project is passed along
    let props: VirtualizedTreeProps | undefined
    await waitFor(() => {
      props = mockVirtualizedTree.mock.calls[
        mockVirtualizedTree.mock.calls.length - 1
      ][0] as VirtualizedTreeProps
      expect(props.rootNodeConfiguration.fetchNextPage).toBeDefined()
      expect(props.rootNodeConfiguration.children).toHaveLength(1)
    })

    // Invoke the function
    act(() => {
      props!.rootNodeConfiguration.fetchNextPage!()
    })

    // Check that the second page of projects is now in the tree
    await waitFor(() => {
      props = mockVirtualizedTree.mock.calls[
        mockVirtualizedTree.mock.calls.length - 1
      ][0] as VirtualizedTreeProps
      expect(props.rootNodeConfiguration.fetchNextPage).toBeDefined()
      expect(props.rootNodeConfiguration.children).toHaveLength(2)
    })
  })

  describe('Dropdown selection tests', () => {
    it('cannot select Current Project if project ID is not provided', async () => {
      renderComponent({
        initialScope: FinderScope.ALL_PROJECTS,
        projectId: undefined,
      })

      await userEvent.click(screen.getByRole('button'))
      await waitFor(() =>
        expect(screen.getAllByRole('menuitem').length).toBeGreaterThan(0),
      )

      expect(screen.queryByLabelText('Current Project')).not.toBeInTheDocument()
    })

    it('can select Current Project if initial container is provided', async () => {
      renderComponent({
        initialScope: FinderScope.ALL_PROJECTS,
        projectId: 'syn123',
      })

      await userEvent.click(screen.getByRole('button'))
      await waitFor(() =>
        expect(screen.getAllByRole('menuitem').length).toBeGreaterThan(0),
      )

      expect(screen.getAllByText('Current Project').length).toBe(1)
    })

    it('changes data when a new selection is made', async () => {
      renderComponent({
        initialScope: FinderScope.ALL_PROJECTS,
        initialContainer: defaultProps.initialContainer,
      })

      let props: VirtualizedTreeProps | undefined
      await waitFor(() => {
        props = mockVirtualizedTree.mock.calls[
          mockVirtualizedTree.mock.calls.length - 1
        ][0] as VirtualizedTreeProps
        expect(props.rootNodeConfiguration.children).toHaveLength(
          projectsPage1.length,
        )
        expect(props.rootNodeConfiguration.children[0].id).toBe(
          projectsPage1[0].id,
        )
      })

      await userEvent.click(screen.getByRole('button'))
      await userEvent.click(screen.getByText('My Favorites'))

      await waitFor(() => {
        props = mockVirtualizedTree.mock.calls[
          mockVirtualizedTree.mock.calls.length - 1
        ][0] as VirtualizedTreeProps
        // While there are 2 favorites, only one is a container, so only one will appear
        expect(props.rootNodeConfiguration.children).toHaveLength(1)
        expect(props.rootNodeConfiguration.children[0].id).toBe(
          favorites.results[0].id,
        )
      })
      // SWC-5593 - When switching to favorites, the container should be 'root'
      expect(setCurrentContainerSpy).toHaveBeenLastCalledWith('root')
    })

    it('handles the case where the caller does not have READ access on the project', async () => {
      // The request to get the project will result in a 403 response, which will log an expected error
      const consoleSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(() => {})

      renderComponent({
        initialScope: FinderScope.CURRENT_PROJECT,
        projectId: projectIdWithNoReadAccess,
        initialContainer: undefined,
      })

      // No READ access on the project, so we should see a notification and the scope should be changed automatically
      await waitFor(() =>
        expect(mockDisplayToast).toHaveBeenCalledWith(
          `You don't have access to the current project (${projectIdWithNoReadAccess}).`,
          'warning',
        ),
      )
      await screen.findByText(FinderScope.CREATED_BY_ME)

      consoleSpy.mockRestore()
    })
  })

  describe('DetailsViewConfiguration callback tests', () => {
    // Test what happens e.g. when 'setCurrentContainer' is called with different values,
    it('Creates a prompt configuration there is no currentContainer', async () => {
      renderComponent({
        initialContainer: undefined,
        initialScope: FinderScope.ALL_PROJECTS,
      })

      await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

      expect(mockSetDetailsViewConfiguration).toBeCalledWith({
        type: EntityDetailsListDataConfigurationType.PROMPT,
      })
    })
    it('Configures to get all projects when the root node is selected with a scope of all projects', async () => {
      renderComponent({
        initialContainer: 'root',
        currentContainer: 'root',
        initialScope: FinderScope.ALL_PROJECTS,
      })

      await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

      expect(mockSetDetailsViewConfiguration).toHaveBeenLastCalledWith({
        type: EntityDetailsListDataConfigurationType.USER_PROJECTS,
        getProjectParams: undefined,
      })
    })

    it('Configures to get projects created by the user when the root node is selected with a scope of projects created by the user', () => {
      renderComponent({
        initialContainer: 'root',
        initialScope: FinderScope.CREATED_BY_ME,
      })

      expect(mockSetDetailsViewConfiguration).toHaveBeenLastCalledWith({
        type: EntityDetailsListDataConfigurationType.USER_PROJECTS,
        getProjectParams: { filter: 'CREATED' },
      })
    })

    it('Configures to display a list containing just the current project when the root node is selected with a scope of the current project', async () => {
      renderComponent({
        initialContainer: 'root',
        projectId: defaultProps.projectId,
        initialScope: FinderScope.CURRENT_PROJECT,
      })

      await waitFor(() => {
        const currentProject = entityPath.path[1]

        expect(mockSetDetailsViewConfiguration).toHaveBeenLastCalledWith({
          type: EntityDetailsListDataConfigurationType.HEADER_LIST,
          headerList: [currentProject],
        })
      })
    })

    it('Configures to get favorites when the root node is selected with a scope of favorites', async () => {
      renderComponent({
        initialContainer: 'root',
        initialScope: FinderScope.FAVORITES,
      })

      await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

      expect(mockSetDetailsViewConfiguration).toHaveBeenLastCalledWith({
        type: EntityDetailsListDataConfigurationType.USER_FAVORITES,
      })
    })

    it('Configures to get children of the current container when a container is selected', async () => {
      renderComponent()

      await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

      // Select an entity using callback prop in child component
      act(() => {
        invokeSetSelectedId('syn123')
      })

      await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

      expect(mockSetDetailsViewConfiguration).toHaveBeenLastCalledWith({
        type: EntityDetailsListDataConfigurationType.PARENT_CONTAINER,
        parentContainerId: 'syn123',
      })
    })
  })

  it('passes down props to children', async () => {
    renderComponent()

    await waitFor(() => {
      expect(mockSetDetailsViewConfiguration).toBeCalled()

      expect(mockVirtualizedTree).toHaveBeenLastCalledWith(
        expect.objectContaining<VirtualizedTreeProps>({
          rootNodeConfiguration: {
            nodeText: 'Projects',
            children: [entityPath.path[1]],
            fetchNextPage: expect.any(Function),
            hasNextPage: false,
            show: true,
          },
          autoExpand: expect.any(Function),
          selected: [],
          setSelectedId: expect.any(Function),
          visibleTypes: defaultProps.visibleTypes,
        }),
        {},
      )
    })
    // Select an entity using callback prop in child component
    const newSelectedId = mockFileEntityData.id
    act(() => {
      invokeSetSelectedId(newSelectedId)
    })

    await waitFor(() => expect(mockToggleSelection).toBeCalled())

    // The wrapping component that controls the selection should be updated via callback, changing the prop
    renderComponent({ selectedEntities: [{ targetId: newSelectedId }] })

    await waitFor(() => {
      expect(mockSetDetailsViewConfiguration).toBeCalled()

      expect(mockVirtualizedTree).toHaveBeenLastCalledWith(
        expect.objectContaining<VirtualizedTreeProps>({
          rootNodeConfiguration: {
            nodeText: 'Projects',
            children: [entityPath.path[1]],
            fetchNextPage: expect.any(Function),
            hasNextPage: false,
            show: true,
          },
          autoExpand: expect.any(Function),
          selectableTypes: defaultProps.selectableTypes,
          selected: [{ targetId: newSelectedId }],
          setSelectedId: expect.any(Function),
          visibleTypes: defaultProps.visibleTypes,
        }),
        {},
      )
    })
  })
})
