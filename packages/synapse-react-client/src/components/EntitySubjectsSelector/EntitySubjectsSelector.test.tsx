import {
  RestrictableObjectDescriptor,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  MOCK_FILE_ENTITY_ID,
  MOCK_FILE_NAME,
} from '../../mocks/entity/mockFileEntity'
import { MOCK_FILE_VIEW_ENTITY_ID } from '../../mocks/entity/mockFileView'
import { MOCK_PROJECT_VIEW_ENTITY_ID } from '../../mocks/entity/mockProjectView'
import { server } from '../../mocks/msw/server'
import { MOCK_TEAM_ID } from '../../mocks/team/mockTeam'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import EntitySubjectsSelector, {
  EntitySubjectsSelectorProps,
  NO_ENTITIES_SELECTED,
  REMOVE_BUTTON_TEXT,
} from './EntitySubjectsSelector'

const onUpdate = jest.fn()
const onUpdateEntityIDsTextbox = jest.fn()

const teamSubject: RestrictableObjectDescriptor = {
  id: MOCK_TEAM_ID.toString(),
  type: RestrictableObjectType.TEAM,
}
const entitySubject: RestrictableObjectDescriptor = {
  id: MOCK_FILE_ENTITY_ID.toString(),
  type: RestrictableObjectType.ENTITY,
}

const defaultProps: EntitySubjectsSelectorProps = {
  subjects: [entitySubject, teamSubject],
  onUpdate,
  onUpdateEntityIDsTextbox,
}

const defaultRowsCount = 1

function renderComponent(props: EntitySubjectsSelectorProps) {
  return render(<EntitySubjectsSelector {...props} />, {
    wrapper: createWrapper(),
  })
}

async function setUp(
  props: EntitySubjectsSelectorProps = defaultProps,
  rowsCount: number = defaultRowsCount,
) {
  const user = userEvent.setup()
  const component = renderComponent(props)

  await waitFor(() => {
    // account for the header row
    expect(screen.getAllByRole('row')).toHaveLength(rowsCount + 1)
  })

  return { component, user }
}

describe('EntitySubjectsSelector', () => {
  beforeEach(() => jest.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  test('displays selected entities', async () => {
    await setUp()

    expect(screen.getByText(MOCK_FILE_NAME)).toBeVisible()

    expect(onUpdate).not.toHaveBeenCalled()
    expect(onUpdateEntityIDsTextbox).not.toHaveBeenCalled()
  })

  test('displays placeholder when no entities selected', () => {
    renderComponent({ ...defaultProps, subjects: [] })

    expect(screen.getByText(NO_ENTITIES_SELECTED)).toBeVisible()

    expect(onUpdate).not.toHaveBeenCalled()
    expect(onUpdateEntityIDsTextbox).not.toHaveBeenCalled()
  })

  test('removes entity and drops any team subjects', async () => {
    const { user } = await setUp()

    const row = screen.getAllByRole('row')[1]
    const checkbox = within(row).getByRole('checkbox')
    await user.click(checkbox)

    const removeButton = await screen.findByRole('button', {
      name: REMOVE_BUTTON_TEXT,
    })
    await user.click(removeButton)

    expect(onUpdate).toHaveBeenCalledTimes(1)
    expect(onUpdate).toHaveBeenLastCalledWith([])
    expect(screen.queryAllByRole('row')).toHaveLength(0)
  })

  test('adds entities and drops any team subjects', async () => {
    const { user } = await setUp()

    const newEntityIds = `${MOCK_FILE_VIEW_ENTITY_ID}, ${MOCK_PROJECT_VIEW_ENTITY_ID}`
    const input = screen.getByRole('textbox', { name: 'Add Synapse IDs' })
    await user.type(input, newEntityIds)

    expect(input).toHaveValue(newEntityIds)
    expect(onUpdateEntityIDsTextbox).toHaveBeenLastCalledWith(newEntityIds)

    const addButton = screen.getByRole('button', { name: 'Add Entities' })
    await user.click(addButton)

    expect(onUpdate).toHaveBeenCalledTimes(1)
    expect(onUpdate).toHaveBeenCalledWith([
      entitySubject,
      {
        id: MOCK_FILE_VIEW_ENTITY_ID,
        type: RestrictableObjectType.ENTITY,
      },
      {
        id: MOCK_PROJECT_VIEW_ENTITY_ID,
        type: RestrictableObjectType.ENTITY,
      },
    ])
    expect(onUpdateEntityIDsTextbox).toHaveBeenLastCalledWith('')
  })

  test('drops duplicates when adding entities', async () => {
    const { user } = await setUp()

    // add 1 new ID, 1 duplicate of the new ID, and 1 duplicate of the ID that selector was configured with
    const newEntityId = MOCK_PROJECT_VIEW_ENTITY_ID
    const newEntityIdsString = `${entitySubject.id}, ${newEntityId}, ${newEntityId}`
    const input = screen.getByRole('textbox', { name: 'Add Synapse IDs' })
    await user.type(input, newEntityIdsString)

    expect(input).toHaveValue(newEntityIdsString)
    expect(onUpdateEntityIDsTextbox).toHaveBeenLastCalledWith(
      newEntityIdsString,
    )

    const addButton = screen.getByRole('button', { name: 'Add Entities' })
    await user.click(addButton)

    expect(onUpdate).toHaveBeenCalledTimes(1)
    expect(onUpdate).toHaveBeenCalledWith([
      entitySubject,
      {
        id: newEntityId,
        type: RestrictableObjectType.ENTITY,
      },
    ])
    expect(onUpdateEntityIDsTextbox).toHaveBeenLastCalledWith('')
  })
})
