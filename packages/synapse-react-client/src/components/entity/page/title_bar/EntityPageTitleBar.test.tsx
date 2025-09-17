import mockFileEntity from '@/mocks/entity/mockFileEntity'
import { getVersionedEntityBundleHandler } from '@/mocks/msw/handlers/entityHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { DockerRepository, EntityBundle } from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import * as FavoriteButtonModule from '../../../favorites/FavoriteButton'
import * as EntityActionMenuModule from '../action_menu/EntityActionMenu'
import { EntityActionMenuProps } from '../action_menu/EntityActionMenu'
import EntityPageTitleBar, {
  EntityPageTitleBarProps,
} from './EntityPageTitleBar'
import * as TitleBarVersionInfoModule from './EntityTitleBarVersionInfo'
import * as TitleBarPropertiesModule from './TitleBarProperties'

const TITLE_BAR_PROPERTIES_TEST_ID = 'title-bar-properties'
const TITLE_BAR_VERSION_INFO_TEST_ID = 'title-bar-version-info'
const ENTITY_ACTION_MENU_TEST_ID = 'entity-action-menu'
const FAVORITE_BUTTON_TEST_ID = 'favorite-button'

vi.spyOn(TitleBarPropertiesModule, 'default').mockImplementation(() => (
  <div data-testid={TITLE_BAR_PROPERTIES_TEST_ID}></div>
))

vi.spyOn(
  TitleBarVersionInfoModule,
  'EntityTitleBarVersionInfo',
).mockImplementation(() => (
  <div data-testid={TITLE_BAR_VERSION_INFO_TEST_ID}></div>
))

vi.spyOn(EntityActionMenuModule, 'default').mockImplementation(() => (
  <div data-testid={ENTITY_ACTION_MENU_TEST_ID}></div>
))

vi.spyOn(FavoriteButtonModule, 'default').mockImplementation(() => (
  <span data-testid={FAVORITE_BUTTON_TEST_ID}></span>
))

function renderComponent(props: EntityPageTitleBarProps) {
  return render(<EntityPageTitleBar {...props} />, {
    wrapper: createWrapper(),
  })
}

function useEntityBundleOverride(bundle: EntityBundle) {
  server.use(
    getVersionedEntityBundleHandler(
      getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
      bundle,
    ),
  )
}

const onActMemberClickAddConditionsForUse = vi.fn()
const toggleShowVersionHistory = vi.fn()

const actionMenuProps: EntityActionMenuProps = {
  actionConfiguration: {
    SHOW_VERSION_HISTORY: {
      onClick: toggleShowVersionHistory,
      visible: true,
      text: '',
    },
  },
  menuConfiguration: {
    DOWNLOAD: { visible: false },
    PRIMARY: { visible: false },
  },
  layout: {
    buttonActions: [],
    downloadMenuActions: [],
    primaryMenuActions: [],
    primaryMenuText: '',
    primaryMenuEndIcon: 'link',
    menuButtonSx: undefined,
  },
}

const defaultProps: EntityPageTitleBarProps = {
  entityId: mockFileEntity.id,
  versionNumber: mockFileEntity.entity.versionNumber,
  entityActionMenuProps: actionMenuProps,
  onActMemberClickAddConditionsForUse,
}

describe('Entity Page Title Bar', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Shows the entity name', async () => {
    renderComponent(defaultProps)
    await screen.findByText(mockFileEntity.name)
  })
  it('Docker entity: shows the repository name', async () => {
    const repoName = 'name for the docker repo'
    useEntityBundleOverride({
      ...mockFileEntity.bundle,
      entityType: EntityType.dockerrepo,
      entity: {
        ...mockFileEntity,
        concreteType: 'org.sagebionetworks.repo.model.docker.DockerRepository',
        repositoryName: repoName,
        isManaged: true,
      } as DockerRepository,
    })

    renderComponent(defaultProps)
    await screen.findByText(repoName)
  })
  it('Shows favorite button component', async () => {
    // Component is mocked and interactions are tested separately
    renderComponent(defaultProps)
    await screen.findByTestId(FAVORITE_BUTTON_TEST_ID)
    expect(FavoriteButtonModule.default).toHaveBeenRenderedWithProps({
      entityId: defaultProps.entityId,
    })
  })
  it('Shows version info component', async () => {
    // Component is mocked and interactions are tested separately
    renderComponent(defaultProps)
    await screen.findByTestId(TITLE_BAR_VERSION_INFO_TEST_ID)
    expect(
      TitleBarVersionInfoModule.EntityTitleBarVersionInfo,
    ).toHaveBeenRenderedWithProps(
      expect.objectContaining({
        entityId: defaultProps.entityId,
        versionNumber: defaultProps.versionNumber,
        toggleShowVersionHistory: toggleShowVersionHistory,
      }),
    )
  })
  it('Shows the action menu', async () => {
    // Component is mocked and interactions are tested separately
    renderComponent(defaultProps)
    await screen.findByTestId(ENTITY_ACTION_MENU_TEST_ID)
    expect(EntityActionMenuModule.default).toHaveBeenRenderedWithProps(
      defaultProps.entityActionMenuProps,
    )
  })
  it('Shows the properties', async () => {
    // Component is mocked and interactions are tested separately
    renderComponent(defaultProps)
    await screen.findByTestId(TITLE_BAR_PROPERTIES_TEST_ID)
    expect(TitleBarPropertiesModule.default).toHaveBeenRenderedWithProps(
      expect.objectContaining({
        entityId: defaultProps.entityId,
        versionNumber: defaultProps.versionNumber,
        onActMemberClickAddConditionsForUse:
          defaultProps.onActMemberClickAddConditionsForUse,
      }),
    )
  })
})
