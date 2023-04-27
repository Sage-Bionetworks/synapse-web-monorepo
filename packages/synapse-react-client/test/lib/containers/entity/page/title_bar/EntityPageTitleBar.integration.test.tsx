import React from 'react'
import EntityPageTitleBar, {
  EntityPageTitleBarProps,
} from '../../../../../../src/lib/containers/entity/page/title_bar/EntityPageTitleBar'
import { render, screen } from '@testing-library/react'
import { createWrapper } from '../../../../../testutils/TestingLibraryUtils'
import mockFileEntity from '../../../../../../mocks/entity/mockFileEntity'
import { EntityActionMenuProps } from '../../../../../../src/lib/containers/entity/page/action_menu/EntityActionMenu'
import {
  EntityBundle,
  EntityType,
} from '../../../../../../src/lib/utils/synapseTypes'
import { rest, server } from '../../../../../../mocks/msw/server'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../../../src/lib/utils/functions/getEndpoint'
import { ENTITY_BUNDLE_V2 } from '../../../../../../src/lib/utils/APIConstants'
import * as FavoriteButtonModule from '../../../../../../src/lib/containers/favorites/FavoriteButton'
import * as EntityActionMenuModule from '../../../../../../src/lib/containers/entity/page/action_menu/EntityActionMenu'
import * as TitleBarPropertiesModule from '../../../../../../src/lib/containers/entity/page/title_bar/TitleBarProperties'
import * as TitleBarVersionInfoModule from '../../../../../../src/lib/containers/entity/page/title_bar/EntityTitleBarVersionInfo'

const TITLE_BAR_PROPERTIES_TEST_ID = 'title-bar-properties'
const TITLE_BAR_VERSION_INFO_TEST_ID = 'title-bar-version-info'
const ENTITY_ACTION_MENU_TEST_ID = 'entity-action-menu'
const FAVORITE_BUTTON_TEST_ID = 'favorite-button'

jest
  .spyOn(TitleBarPropertiesModule, 'default')
  .mockImplementation(() => (
    <div data-testid={TITLE_BAR_PROPERTIES_TEST_ID}></div>
  ))

jest
  .spyOn(TitleBarVersionInfoModule, 'EntityTitleBarVersionInfo')
  .mockImplementation(() => (
    <div data-testid={TITLE_BAR_VERSION_INFO_TEST_ID}></div>
  ))

jest
  .spyOn(EntityActionMenuModule, 'default')
  .mockImplementation(() => (
    <div data-testid={ENTITY_ACTION_MENU_TEST_ID}></div>
  ))

jest
  .spyOn(FavoriteButtonModule, 'default')
  .mockImplementation(() => <span data-testid={FAVORITE_BUTTON_TEST_ID}></span>)

function renderComponent(props: EntityPageTitleBarProps) {
  return render(<EntityPageTitleBar {...props} />, {
    wrapper: createWrapper(),
  })
}

function useEntityBundleOverride(bundle: EntityBundle) {
  server.use(
    rest.post(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
        ':entityId',
        ':versionNumber',
      )}`,

      async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(bundle))
      },
    ),
  )
}

const onActMemberClickAddConditionsForUse = jest.fn()
const toggleShowVersionHistory = jest.fn()

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
      entityType: EntityType.DOCKER_REPO,
      entity: {
        ...mockFileEntity,
        concreteType: 'org.sagebionetworks.repo.model.docker.DockerRepository',
        repositoryName: repoName,
      },
    })

    renderComponent(defaultProps)
    await screen.findByText(repoName)
  })
  it('Shows favorite button component', async () => {
    // Component is mocked and interactions are tested separately
    renderComponent(defaultProps)
    await screen.findByTestId(FAVORITE_BUTTON_TEST_ID)
    expect(FavoriteButtonModule.default).toBeCalledWith(
      {
        entityId: defaultProps.entityId,
      },
      expect.anything(),
    )
  })
  it('Shows version info component', async () => {
    // Component is mocked and interactions are tested separately
    renderComponent(defaultProps)
    await screen.findByTestId(TITLE_BAR_VERSION_INFO_TEST_ID)
    expect(TitleBarVersionInfoModule.EntityTitleBarVersionInfo).toBeCalledWith(
      expect.objectContaining({
        entityId: defaultProps.entityId,
        versionNumber: defaultProps.versionNumber,
        toggleShowVersionHistory: toggleShowVersionHistory,
      }),
      expect.anything(),
    )
  })
  it('Shows the action menu', async () => {
    // Component is mocked and interactions are tested separately
    renderComponent(defaultProps)
    await screen.findByTestId(ENTITY_ACTION_MENU_TEST_ID)
    expect(EntityActionMenuModule.default).toBeCalledWith(
      defaultProps.entityActionMenuProps,
      expect.anything(),
    )
  })
  it('Shows the properties', async () => {
    // Component is mocked and interactions are tested separately
    renderComponent(defaultProps)
    await screen.findByTestId(TITLE_BAR_PROPERTIES_TEST_ID)
    expect(TitleBarPropertiesModule.default).toBeCalledWith(
      expect.objectContaining({
        entityId: defaultProps.entityId,
        versionNumber: defaultProps.versionNumber,
        onActMemberClickAddConditionsForUse:
          defaultProps.onActMemberClickAddConditionsForUse,
      }),
      expect.anything(),
    )
  })
})
