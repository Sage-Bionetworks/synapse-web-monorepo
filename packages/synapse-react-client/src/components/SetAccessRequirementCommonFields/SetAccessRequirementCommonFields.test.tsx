import {
  ACCESS_TYPE,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  ManagedACTAccessRequirement,
  RestrictableObjectDescriptor,
  RestrictableObjectType,
  SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  SelfSignAccessRequirement,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import SetAccessRequirementCommonFields, {
  SetAccessRequirementCommonFieldsHandle,
  SetAccessRequirementCommonFieldsProps,
} from '.'
import { MOCK_ACCESS_TOKEN } from '../../mocks/MockSynapseContext'
import {
  MOCK_FILE_ENTITY_ID,
  MOCK_FILE_NAME,
} from '../../mocks/entity/mockFileEntity'
import {
  MOCK_NEWLY_CREATED_AR_ID,
  mockACTAccessRequirement,
  mockManagedACTAccessRequirement,
  mockSelfSignAccessRequirement,
  mockSelfSignAnnotationBasedSubjectsAccessRequirement,
  mockTeamSelfSignAccessRequirement,
  mockToUAccessRequirement,
} from '../../mocks/accessRequirement/mockAccessRequirements'
import { server } from '../../mocks/msw/server'
import { MOCK_TEAM_ID, mockTeamData } from '../../mocks/team/mockTeam'
import SynapseClient from '../../synapse-client'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { REMOVE_TEXT } from '../TeamSubjectsSelector/TeamSubjectsSelector'
import {
  EMPTY_SUBJECT_LIST_ERROR_MESSAGE,
  UNSAVED_SUBJECTS_ERROR_MESSAGE,
} from './SetAccessRequirementCommonFields'

const onSave = jest.fn()
const onError = jest.fn()
const createAccessRequirementSpy = jest.spyOn(
  SynapseClient,
  'createAccessRequirement',
)
const updateAccessRequirementSpy = jest.spyOn(
  SynapseClient,
  'updateAccessRequirement',
)

const entitySubject: RestrictableObjectDescriptor = {
  id: MOCK_FILE_ENTITY_ID,
  type: RestrictableObjectType.ENTITY,
}
const teamSubject: RestrictableObjectDescriptor = {
  id: MOCK_TEAM_ID.toString(),
  type: RestrictableObjectType.TEAM,
}

const newEntityArProps: SetAccessRequirementCommonFieldsProps = {
  subject: entitySubject,
  onSave,
  onError,
}
const existingTeamArProps: SetAccessRequirementCommonFieldsProps = {
  accessRequirementId: mockTeamSelfSignAccessRequirement.id.toString(),
  onSave,
  onError,
}

function renderComponent(props: SetAccessRequirementCommonFieldsProps) {
  const ref = React.createRef<SetAccessRequirementCommonFieldsHandle>()
  const component = render(
    <SetAccessRequirementCommonFields ref={ref} {...props} />,
    {
      wrapper: createWrapper(),
    },
  )
  return { ref, component }
}

async function setUp(props: SetAccessRequirementCommonFieldsProps) {
  const user = userEvent.setup()
  const { ref, component } = renderComponent(props)
  const nameInput = await screen.findByRole('textbox', { name: 'Name' })
  return {
    ref,
    component,
    user,
    nameInput,
  }
}

async function findSubjectsDefinedByAnnotationsCheckbox() {
  return await screen.findByRole('checkbox')
}

function getRadioButtons() {
  const radioGroup = screen.getByRole('radiogroup')
  return {
    managed: within(radioGroup).getByRole('radio', {
      name: 'Controlled - requests are in Synapse',
    }),
    selfSign: within(radioGroup).getByRole('radio', { name: 'Click wrap' }),
  }
}

describe('SetAccessRequirementCommonFields', () => {
  beforeEach(() => jest.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  test('creates a new managed entity AR', async () => {
    const { ref, user, nameInput } = await setUp(newEntityArProps)
    const subjectsDefinedByAnnotationsCheckbox =
      await findSubjectsDefinedByAnnotationsCheckbox()
    await waitFor(() => {
      expect(screen.getByText(MOCK_FILE_NAME)).toBeVisible()
      expect(nameInput).toHaveValue('')
      expect(subjectsDefinedByAnnotationsCheckbox).not.toBeChecked()
    })

    const radioButtons = getRadioButtons()
    expect(radioButtons.managed).toBeChecked()
    expect(radioButtons.selfSign).not.toBeChecked()

    const name = 'some name'
    await user.type(nameInput, name)
    expect(nameInput).toHaveValue(name)
    expect(onSave).not.toHaveBeenCalled()
    expect(onError).not.toHaveBeenCalled()

    // parent calls save
    ref.current?.save()

    await waitFor(() => {
      const managedAr: Pick<
        ManagedACTAccessRequirement,
        | 'concreteType'
        | 'name'
        | 'subjectIds'
        | 'accessType'
        | 'subjectsDefinedByAnnotations'
      > = {
        concreteType: MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
        name: name,
        subjectIds: [entitySubject],
        accessType: ACCESS_TYPE.DOWNLOAD,
        subjectsDefinedByAnnotations: false,
      }

      expect(createAccessRequirementSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        managedAr,
      )
      expect(updateAccessRequirementSpy).not.toHaveBeenCalled()

      expect(onSave).toHaveBeenCalledTimes(1)
      expect(onSave).toHaveBeenLastCalledWith(
        MOCK_NEWLY_CREATED_AR_ID.toString(),
        MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
      )
      expect(onError).not.toHaveBeenCalled()
    })
  })

  test('creates a new managed entity AR with subjects defined by annotation', async () => {
    const { ref, user, nameInput } = await setUp(newEntityArProps)
    const subjectsDefinedByAnnotationsCheckbox =
      await findSubjectsDefinedByAnnotationsCheckbox()
    await waitFor(() => {
      expect(subjectsDefinedByAnnotationsCheckbox).not.toBeChecked()
    })

    const name = 'some name'
    await user.type(nameInput, name)
    await user.click(subjectsDefinedByAnnotationsCheckbox)

    expect(subjectsDefinedByAnnotationsCheckbox).toBeChecked()
    expect(nameInput).toHaveValue(name)
    expect(onSave).not.toHaveBeenCalled()
    expect(onError).not.toHaveBeenCalled()

    // parent calls save
    ref.current?.save()

    await waitFor(() => {
      const managedAr: Pick<
        ManagedACTAccessRequirement,
        | 'concreteType'
        | 'name'
        | 'subjectIds'
        | 'accessType'
        | 'subjectsDefinedByAnnotations'
      > = {
        concreteType: MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
        name: name,
        subjectIds: [],
        accessType: ACCESS_TYPE.DOWNLOAD,
        subjectsDefinedByAnnotations: true,
      }

      expect(createAccessRequirementSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        managedAr,
      )
      expect(updateAccessRequirementSpy).not.toHaveBeenCalled()

      expect(onSave).toHaveBeenCalledTimes(1)
      expect(onSave).toHaveBeenLastCalledWith(
        MOCK_NEWLY_CREATED_AR_ID.toString(),
        MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
      )
      expect(onError).not.toHaveBeenCalled()
    })
  })
  test('updates an existing self-sign team AR with subjects defined by annotation', async () => {
    const { nameInput } = await setUp({
      accessRequirementId:
        mockSelfSignAnnotationBasedSubjectsAccessRequirement.id.toString(),
      onSave,
      onError,
    })

    const subjectsDefinedByAnnotationsCheckbox =
      await findSubjectsDefinedByAnnotationsCheckbox()

    await waitFor(() => {
      expect(nameInput).toHaveValue(
        mockSelfSignAnnotationBasedSubjectsAccessRequirement.name,
      )
      // cannot select access type for existing AR
      expect(screen.queryByRole('radiogroup')).toBeNull()
      expect(subjectsDefinedByAnnotationsCheckbox).toBeChecked()
    })
  })

  test('creates a new self-sign entity AR', async () => {
    const { ref, user, nameInput } = await setUp(newEntityArProps)

    await waitFor(() => {
      expect(screen.getByText(MOCK_FILE_NAME)).toBeVisible()
      expect(nameInput).toHaveValue('')
    })

    const name = 'some name'
    await user.type(nameInput, name)

    const radioButtons = getRadioButtons()
    await user.click(radioButtons.selfSign)
    expect(radioButtons.managed).not.toBeChecked()
    expect(radioButtons.selfSign).toBeChecked()

    expect(onSave).not.toHaveBeenCalled()
    expect(onError).not.toHaveBeenCalled()

    // parent calls save
    ref.current?.save()

    await waitFor(() => {
      const selfSignAr: Pick<
        SelfSignAccessRequirement,
        | 'concreteType'
        | 'name'
        | 'subjectIds'
        | 'accessType'
        | 'subjectsDefinedByAnnotations'
      > = {
        concreteType: SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
        name: name,
        subjectIds: [entitySubject],
        accessType: ACCESS_TYPE.DOWNLOAD,
        subjectsDefinedByAnnotations: false,
      }

      expect(createAccessRequirementSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        selfSignAr,
      )
      expect(updateAccessRequirementSpy).not.toHaveBeenCalled()

      expect(onSave).toHaveBeenCalledTimes(1)
      expect(onSave).toHaveBeenLastCalledWith(
        MOCK_NEWLY_CREATED_AR_ID.toString(),
        SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
      )
      expect(onError).not.toHaveBeenCalled()
    })
  })

  test('does not show AR type options when creating new team AR', async () => {
    const props: SetAccessRequirementCommonFieldsProps = {
      subject: teamSubject,
      onSave,
      onError,
    }
    await setUp(props)

    await waitFor(() => {
      expect(
        screen.getByRole('link', { name: mockTeamData.name }),
      ).toBeVisible()
    })

    expect(screen.queryByRole('radiogroup')).toBeNull()
  })

  test('creates a new self-signed team AR', async () => {
    const props: SetAccessRequirementCommonFieldsProps = {
      subject: teamSubject,
      onSave,
      onError,
    }
    const { ref, user, nameInput } = await setUp(props)

    await waitFor(() => {
      expect(
        screen.getByRole('link', { name: mockTeamData.name }),
      ).toBeVisible()
      expect(nameInput).toHaveValue('')
    })

    const name = 'some name'
    await user.type(nameInput, name)

    expect(onSave).not.toHaveBeenCalled()
    expect(onError).not.toHaveBeenCalled()

    // parent calls save
    ref.current?.save()

    await waitFor(() => {
      const selfSignAr: Pick<
        SelfSignAccessRequirement,
        | 'concreteType'
        | 'name'
        | 'subjectIds'
        | 'accessType'
        | 'subjectsDefinedByAnnotations'
      > = {
        concreteType: SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
        name: name,
        subjectIds: [teamSubject],
        accessType: ACCESS_TYPE.PARTICIPATE,
        subjectsDefinedByAnnotations: false,
      }

      expect(createAccessRequirementSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        selfSignAr,
      )
      expect(updateAccessRequirementSpy).not.toHaveBeenCalled()

      expect(onSave).toHaveBeenCalledTimes(1)
      expect(onSave).toHaveBeenLastCalledWith(
        MOCK_NEWLY_CREATED_AR_ID.toString(),
        SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
      )
      expect(onError).not.toHaveBeenCalled()
    })
  })

  test('updates an existing self-sign team AR', async () => {
    const { ref, user, nameInput } = await setUp(existingTeamArProps)

    await waitFor(() => {
      expect(
        screen.getByRole('link', { name: mockTeamData.name }),
      ).toBeVisible()
      expect(nameInput).toHaveValue(mockTeamSelfSignAccessRequirement.name)
      // cannot select access type for existing AR
      expect(screen.queryByRole('radiogroup')).toBeNull()
    })

    const updatedName = 'a new name'
    await user.clear(nameInput)
    await user.type(nameInput, updatedName)

    expect(nameInput).toHaveValue(updatedName)
    expect(onSave).not.toHaveBeenCalled()
    expect(onError).not.toHaveBeenCalled()

    // parent calls save
    ref.current?.save()

    await waitFor(() => {
      const updatedAr: SelfSignAccessRequirement = {
        ...mockTeamSelfSignAccessRequirement,
        name: updatedName,
      }
      expect(onSave).toHaveBeenCalledTimes(1)
      expect(onSave).toHaveBeenLastCalledWith(
        updatedAr.id.toString(),
        updatedAr.concreteType,
      )
      expect(onError).not.toHaveBeenCalled()
      expect(createAccessRequirementSpy).not.toHaveBeenCalled()
      expect(updateAccessRequirementSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        updatedAr,
      )
    })
  })

  const existingEntityArs = [
    // Lock ARs can only be deleted by ACT, so will not be managed with this component
    // ...so will not be included in this test.
    // mockLockAccessRequirement,
    mockSelfSignAccessRequirement,
    mockManagedACTAccessRequirement,
    mockToUAccessRequirement,
    mockACTAccessRequirement,
  ]
  for (const ar of existingEntityArs) {
    test(`updates an existing entity AR - ${ar.name}`, async () => {
      const props: SetAccessRequirementCommonFieldsProps = {
        onSave,
        onError,
        accessRequirementId: ar.id.toString(),
      }
      const { ref, user, nameInput } = await setUp(props)

      await waitFor(() => {
        expect(
          screen.getByRole('link', { name: ar.subjectIds[0].id }),
        ).toBeVisible()
        expect(nameInput).toHaveValue(ar.name)
        // cannot select access type for existing AR
        expect(screen.queryByRole('radiogroup')).toBeNull()
      })

      const updatedName = 'a new name'
      await user.clear(nameInput)
      await user.type(nameInput, updatedName)

      expect(nameInput).toHaveValue(updatedName)
      expect(onSave).not.toHaveBeenCalled()
      expect(onError).not.toHaveBeenCalled()

      // parent calls save
      ref.current?.save()

      await waitFor(() => {
        const updatedAr = { ...ar, name: updatedName }
        expect(onSave).toHaveBeenCalledTimes(1)
        expect(onSave).toHaveBeenLastCalledWith(
          updatedAr.id.toString(),
          updatedAr.concreteType,
        )
        expect(onError).not.toHaveBeenCalled()
        expect(createAccessRequirementSpy).not.toHaveBeenCalled()
        expect(updateAccessRequirementSpy).toHaveBeenCalledWith(
          MOCK_ACCESS_TOKEN,
          updatedAr,
        )
      })
    })
  }

  test('displays error when there are pending subjects', async () => {
    const { ref, user } = await setUp(existingTeamArProps)

    await waitFor(() => {
      expect(
        screen.getByRole('link', { name: mockTeamData.name }),
      ).toBeVisible()
    })

    const teamInput = screen.getByRole('textbox', { name: 'Add Team IDs' })
    expect(teamInput).toHaveValue('')
    await user.type(teamInput, '123, 456')

    // parent calls save
    act(() => ref.current?.save())

    await waitFor(() => {
      expect(onError).toHaveBeenCalledTimes(1)
      expect(onSave).not.toHaveBeenCalled()
      expect(createAccessRequirementSpy).not.toHaveBeenCalled()
      expect(updateAccessRequirementSpy).not.toHaveBeenCalled()
    })

    expect(screen.getByRole('alert')).toHaveTextContent(
      UNSAVED_SUBJECTS_ERROR_MESSAGE(RestrictableObjectType.TEAM),
    )
  })

  test('does not display error when pending subjects string only contains whitespace', async () => {
    const { ref, user } = await setUp(existingTeamArProps)

    await waitFor(() => {
      expect(
        screen.getByRole('link', { name: mockTeamData.name }),
      ).toBeVisible()
    })

    const teamInput = screen.getByRole('textbox', { name: 'Add Team IDs' })
    expect(teamInput).toHaveValue('')
    await user.type(teamInput, '    ')

    // parent calls save
    act(() => ref.current?.save())

    await waitFor(() => {
      expect(onSave).toHaveBeenCalledTimes(1)
      expect(onSave).toHaveBeenLastCalledWith(
        mockTeamSelfSignAccessRequirement.id.toString(),
        SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
      )
      expect(onError).not.toHaveBeenCalled()
      expect(updateAccessRequirementSpy).toHaveBeenCalledTimes(1)
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        mockTeamSelfSignAccessRequirement,
      )
    })

    expect(screen.queryByRole('alert')).toBeNull()
  })

  test('displays error when there are no subjects', async () => {
    const { ref, user } = await setUp(existingTeamArProps)

    const link = await screen.findByRole('link', { name: mockTeamData.name })

    const removeButton = screen.getByRole('button', {
      name: REMOVE_TEXT,
    })
    await user.click(removeButton)
    expect(link).not.toBeVisible()

    // parent calls save
    act(() => ref.current?.save())

    await waitFor(() => {
      expect(onError).toHaveBeenCalledTimes(1)
      expect(onSave).not.toHaveBeenCalled()
      expect(createAccessRequirementSpy).not.toHaveBeenCalled()
      expect(updateAccessRequirementSpy).not.toHaveBeenCalled()
    })

    expect(screen.getByRole('alert')).toHaveTextContent(
      EMPTY_SUBJECT_LIST_ERROR_MESSAGE,
    )
  })
})
