import {
  EntityHeader,
  EntityPath,
  EntityType,
  PaginatedResults,
  ProjectHeader,
  ProjectHeaderList,
  Reference,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Map } from 'immutable'
import failOnConsole from 'jest-fail-on-console'
import { useState } from 'react'
import { EntityDetailsListDataConfigurationType } from '../details/EntityDetailsList'
import {
  EntityTree,
  EntityTreeContainer,
  EntityTreeProps,
  FinderScope,
} from './EntityTree'
import * as VirtualizedTreeModule from './VirtualizedTree'
import { EntityTreeNodeType, VirtualizedTreeProps } from './VirtualizedTree'
import * as ToastMessageModule from '@/components/ToastMessage/ToastMessage'
import { mockProjects } from '@/mocks/entity'
import { mockFolderEntity } from '@/mocks/entity/mockEntity'
import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import mockFileEntity from '@/mocks/entity/mockFileEntity'
import mockProject from '@/mocks/entity/mockProject'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { http, HttpResponse } from 'msw'
import {
  ENTITY_HEADERS,
  ENTITY_PATH,
  FAVORITES,
  PROJECTS,
} from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'

const VIRTUALIZED_TREE_TEST_ID = 'VirtualizedTreeComponent'

let invokeSetSelectedId: (containerId: string) => void

const mockVirtualizedTree = vi
  .spyOn(VirtualizedTreeModule, 'VirtualizedTree')
  .mockImplementation(({ rootNodeConfiguration, setSelectedId }) => {
    invokeSetSelectedId = (containerId: string) => {
      setSelectedId(containerId)
    }
    return <div data-testid={VIRTUALIZED_TREE_TEST_ID}></div>
  })

const mockDisplayToast = vi.spyOn(ToastMessageModule, 'displayToast')

const mockSetDetailsViewConfiguration = vi.fn()
const mockSetBreadcrumbItems = vi.fn()
const mockToggleSelection = vi.fn()

const defaultProps = {
  currentContainer: mockProject.id,
  setCurrentContainer: vi.fn(),
  selectedEntities: Map<string, Reference>(),
  initialScope: FinderScope.CURRENT_PROJECT,
  projectId: mockProject.id,
  initialContainer: mockProject.id,
  showDropdown: true,
  visibleTypes: [EntityType.PROJECT, EntityType.FOLDER],
  setDetailsViewConfiguration: mockSetDetailsViewConfiguration,
  setBreadcrumbItems: mockSetBreadcrumbItems,
  toggleSelection: mockToggleSelection,
  treeNodeType: EntityTreeNodeType.SINGLE_PANE,
  showScopeAsRootNode: true,
  selectableTypes: Object.values(EntityType),
} satisfies EntityTreeProps

const projectsPage1: ProjectHeader[] = [
  {
    id: mockProjects[0].id!,
    name: 'Project 1',
    modifiedOn: 'today',
    modifiedBy: 100000,
    lastActivity: new Date().toISOString(),
  },
]

const projectsPage2: ProjectHeader[] = [
  {
    id: mockProjects[1].id!,
    name: 'Project 2',
    modifiedOn: 'today',
    modifiedBy: 100000,
    lastActivity: new Date().toISOString(),
  },
]

const favorites: PaginatedResults<EntityHeader> = {
  results: [
    {
      id: mockFolderEntity.id!,
      name: 'Favorite 1 - A Folder',
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
      id: mockFileEntity.id,
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
      id: 'syn4489',
      name: 'The root entity that is never seen',
      type: 'org.sagebionetworks.repo.model.Folder',
    },
    {
      id: mockProjects[3].id!,
      name: 'Project in entity path',
      type: 'org.sagebionetworks.repo.model.Project',
    },
    {
      id: mockFolderEntity.id!,
      name: 'Folder in entity path',
      type: 'org.sagebionetworks.repo.model.Folder',
    },
  ],
}

const projectIdWithNoReadAccess = mockProjects[4].id

const setCurrentContainerSpy = vi.fn()

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
      http.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FAVORITES}`,
        () => {
          return HttpResponse.json(favorites, { status: 200 })
        },
      ),
      http.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_PATH(
          ':id',
        )}`,
        () => {
          return HttpResponse.json(entityPath, { status: 200 })
        },
      ),

      http.post<never, { references: Reference[] }>(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_HEADERS}`,
        async ({ request }) => {
          const { references } = await request.json()
          if (references[0].targetId === projectIdWithNoReadAccess) {
            return HttpResponse.json(
              { results: [], totalNumberOfResults: 0 },
              { status: 200 },
            )
          }
          return HttpResponse.json(
            {
              results: [entityPath.path[1]],
              totalNumberOfResults: 1,
            },
            { status: 200 },
          )
        },
      ),
      http.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${PROJECTS}`,
        ({ params }) => {
          const response: ProjectHeaderList = {
            results: projectsPage1,
            nextPageToken: '50a0',
          }

          if (params.nextPageToken === '50a0') {
            response.results = projectsPage2
            response.nextPageToken = null
          }
          return HttpResponse.json(response, { status: 200 })
        },
      ),
    )
  })
  beforeEach(() => vi.clearAllMocks())
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
      props!.rootNodeConfiguration.fetchNextPage()
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

      await userEvent.click(
        screen.getByRole('button', {
          name: 'All Projects',
        }),
      )
      await waitFor(() =>
        expect(screen.getAllByRole('menu').length).toBeGreaterThan(0),
      )

      expect(screen.queryByLabelText('Current Project')).not.toBeInTheDocument()
    })

    it('can select Current Project if initial container is provided', async () => {
      renderComponent({
        initialScope: FinderScope.ALL_PROJECTS,
        projectId: mockProject.id,
      })

      await userEvent.click(
        screen.getByRole('button', {
          name: 'All Projects',
        }),
      )
      await waitFor(() =>
        expect(screen.getAllByRole('menu').length).toBeGreaterThan(0),
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

      await userEvent.click(
        screen.getByRole('button', {
          name: 'All Projects',
        }),
      )
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
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

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
        invokeSetSelectedId(mockProject.id)
      })

      await waitFor(() => expect(mockSetDetailsViewConfiguration).toBeCalled())

      expect(mockSetDetailsViewConfiguration).toHaveBeenLastCalledWith({
        type: EntityDetailsListDataConfigurationType.PARENT_CONTAINER,
        parentContainerId: mockProject.id,
      })
    })
  })

  it('passes down props to children', async () => {
    renderComponent()

    await waitFor(() => {
      expect(mockSetDetailsViewConfiguration).toBeCalled()

      expect(mockVirtualizedTree).toHaveBeenLastRenderedWithProps(
        expect.objectContaining<VirtualizedTreeProps>({
          rootNodeConfiguration: {
            nodeText: 'Projects',
            children: [entityPath.path[1]],
            fetchNextPage: expect.any(Function),
            hasNextPage: false,
            show: true,
          },
          autoExpand: expect.any(Function),
          selected: Map<string, Reference>(),
          setSelectedId: expect.any(Function),
          visibleTypes: defaultProps.visibleTypes,
          treeNodeType: defaultProps.treeNodeType,
          selectableTypes: defaultProps.selectableTypes,
        }),
      )
    })
    // Select an entity using callback prop in child component
    const newSelectedId = mockFileEntityData.id
    act(() => {
      invokeSetSelectedId(newSelectedId)
    })

    await waitFor(() => expect(mockToggleSelection).toBeCalled())

    const newSelectionMap = Map<string, Reference>().set(newSelectedId, {
      targetId: newSelectedId,
    })

    // The wrapping component that controls the selection should be updated via callback, changing the prop
    renderComponent({
      selectedEntities: newSelectionMap,
    })

    await waitFor(() => {
      expect(mockSetDetailsViewConfiguration).toBeCalled()

      expect(mockVirtualizedTree).toHaveBeenLastRenderedWithProps(
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
          selected: newSelectionMap,
          setSelectedId: expect.any(Function),
          visibleTypes: defaultProps.visibleTypes,
          treeNodeType: defaultProps.treeNodeType,
        }),
      )
    })
  })
})
