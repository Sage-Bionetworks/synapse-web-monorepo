import { MOCK_MANAGED_ACCESS_REQUIREMENT_ACL } from '@/mocks/accessRequirement/mockAccessRequirementAcls'
import {
  MOCK_AR_ETAG,
  MOCK_NEWLY_CREATED_AR_ID,
  mockACTAccessRequirement,
  mockManagedACTAccessRequirement,
  mockToUAccessRequirement,
} from '@/mocks/accessRequirement/mockAccessRequirements'
import {
  MOCK_FILE_ENTITY_ID,
  MOCK_FILE_NAME,
} from '@/mocks/entity/mockFileEntity'
import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { server } from '@/mocks/msw/server'
import { MOCK_USER_NAME } from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client'
import {
  confirmMarkdownSynapseTextContent,
  confirmMarkdownSynapseIsShown,
} from '@/testutils/MarkdownSynapseUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  ACCESS_TYPE,
  RestrictableObjectDescriptor,
  RestrictableObjectType,
  SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  SelfSignAccessRequirement,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { REMOVE_BUTTON_LABEL } from '../AclEditor/ResourceAccessItem'
import { NO_WIKI_CONTENT } from '../Markdown/MarkdownSynapse/MarkdownSynapse'
import CreateOrUpdateAccessRequirementWizard, {
  CreateOrUpdateAccessRequirementWizardProps,
} from './CreateOrUpdateAccessRequirementWizard'

const entitySubject: RestrictableObjectDescriptor = {
  id: MOCK_FILE_ENTITY_ID,
  type: RestrictableObjectType.ENTITY,
}

const onCancel = vi.fn()
const onComplete = vi.fn()

const createAccessRequirementSpy = vi.spyOn(
  SynapseClient,
  'createAccessRequirement',
)
const updateAccessRequirementSpy = vi.spyOn(
  SynapseClient,
  'updateAccessRequirement',
)
const updateAccessRequirementAclSpy = vi.spyOn(
  SynapseClient,
  'updateAccessRequirementAcl',
)

function renderComponent(props: CreateOrUpdateAccessRequirementWizardProps) {
  const component = render(
    <CreateOrUpdateAccessRequirementWizard {...props} />,
    {
      wrapper: createWrapper(),
    },
  )
  return { component }
}

function setUp(props: CreateOrUpdateAccessRequirementWizardProps) {
  const user = userEvent.setup()
  const { component } = renderComponent(props)

  return { component, user }
}

async function expectNoContentWiki() {
  await screen.findByRole('button', { name: 'Edit Instructions' })
  await confirmMarkdownSynapseTextContent(NO_WIKI_CONTENT)
}

async function confirmArSubject(subjectName: string) {
  const nameRegex = new RegExp(subjectName, 'i')
  await screen.findByRole('link', { name: nameRegex })
}

function getArNameInput() {
  return screen.getByRole('textbox', { name: 'Name' })
}
async function updateArName(
  newName: string,
  user: ReturnType<(typeof userEvent)['setup']>,
) {
  const nameInput = getArNameInput()
  await user.clear(nameInput)
  await user.type(nameInput, newName)
  expect(nameInput).toHaveValue(newName)
}

function getBtn(name: string) {
  return screen.getByRole('button', { name: name })
}

describe('CreateOrUpdateAccessRequirementWizard', () => {
  beforeEach(() => vi.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  test('when passed a subject, title specifies that wizard is creating an AR', () => {
    setUp({
      open: true,
      subject: entitySubject,
      accessRequirementId: undefined,
      onCancel,
      onComplete,
    })

    expect(
      screen.getByRole('heading', { name: 'Create Access Requirement' }),
    ).toBeVisible()
  })

  test('when passed an AR id, title specifies that wizard is editing an AR', () => {
    setUp({
      open: true,
      subject: undefined,
      accessRequirementId: mockACTAccessRequirement.id.toString(),
      onCancel,
      onComplete,
    })

    expect(
      screen.getByRole('heading', { name: 'Edit Access Requirement' }),
    ).toBeVisible()
  })

  test('calls onCancel when cancel button clicked', async () => {
    const { user } = setUp({
      open: true,
      accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
      onCancel,
      onComplete,
    })

    await user.click(getBtn('Cancel'))

    expect(onCancel).toHaveBeenCalledTimes(1)
    expect(onComplete).not.toHaveBeenCalled()
    expect(createAccessRequirementSpy).not.toHaveBeenCalled()
    expect(updateAccessRequirementSpy).not.toHaveBeenCalled()
  })

  test('calls onCancel when dialog closed', async () => {
    const { user } = setUp({
      open: true,
      accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
      onCancel,
      onComplete,
    })

    await user.click(getBtn('close'))

    expect(onCancel).toHaveBeenCalledTimes(1)
    expect(onComplete).not.toHaveBeenCalled()
    expect(createAccessRequirementSpy).not.toHaveBeenCalled()
    expect(updateAccessRequirementSpy).not.toHaveBeenCalled()
  })

  test('updates managed AR', async () => {
    const { user } = setUp({
      open: true,
      accessRequirementId: mockManagedACTAccessRequirement.id.toString(),
      onCancel,
      onComplete,
    })

    // step 1: common AR fields
    await confirmArSubject(mockManagedACTAccessRequirement.subjectIds[0].id)

    const nameInput = getArNameInput()
    expect(nameInput).toHaveValue(mockManagedACTAccessRequirement.name)

    const newName = 'some other name'
    await updateArName(newName, user)

    await user.click(getBtn('Save & Continue'))

    await waitFor(() => {
      expect(onCancel).not.toHaveBeenCalled()
      expect(onComplete).not.toHaveBeenCalled()
      expect(updateAccessRequirementSpy).toHaveBeenCalledTimes(1)
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        { ...mockManagedACTAccessRequirement, name: newName },
      )
    })

    // step 2: fields specific to managed ARs
    await confirmMarkdownSynapseIsShown()
    const ducField = await screen.findByRole('checkbox', {
      name: 'DUC is required.',
    })
    expect(ducField).toBeChecked()
    await user.click(ducField)
    expect(ducField).not.toBeChecked()

    await user.click(getBtn('Save & Continue'))

    await waitFor(() => {
      expect(onCancel).not.toHaveBeenCalled()
      expect(onComplete).not.toHaveBeenCalled()
      expect(updateAccessRequirementSpy).toHaveBeenCalledTimes(2)
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        {
          ...mockManagedACTAccessRequirement,
          name: newName,
          isDUCRequired: false,
        },
      )
    })

    // step 3: managed AR acl editor
    await screen.findByRole('heading', {
      name: 'Access Requirement Permissions',
    })

    const nPrincipalsOnACL =
      MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.resourceAccess.length
    await waitFor(() => {
      expect(screen.queryAllByRole('link')).toHaveLength(nPrincipalsOnACL)
    })

    const userOnAcl = screen.getByRole('link', { name: `@${MOCK_USER_NAME}` })
    const removeBtns = screen.getAllByRole('button', {
      name: REMOVE_BUTTON_LABEL,
    })
    expect(removeBtns).toHaveLength(nPrincipalsOnACL)
    await user.click(removeBtns[nPrincipalsOnACL - 1])
    await waitFor(() => {
      expect(userOnAcl).not.toBeInTheDocument()
    })

    await user.click(getBtn('Save'))
    await waitFor(() => {
      expect(updateAccessRequirementAclSpy).toHaveBeenCalledTimes(1)
      expect(updateAccessRequirementAclSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        {
          ...MOCK_MANAGED_ACCESS_REQUIREMENT_ACL,
          resourceAccess:
            MOCK_MANAGED_ACCESS_REQUIREMENT_ACL.resourceAccess.slice(0, 2),
        },
      )

      expect(onCancel).not.toHaveBeenCalled()
      expect(onComplete).toHaveBeenCalledTimes(1)
    })
  })

  test('creates self-sign AR', async () => {
    const { user } = setUp({
      open: true,
      subject: entitySubject,
      onCancel,
      onComplete,
    })
    const arName = 'new self-sign ar'
    const ar: Pick<
      SelfSignAccessRequirement,
      | 'concreteType'
      | 'subjectIds'
      | 'accessType'
      | 'name'
      | 'subjectsDefinedByAnnotations'
    > = {
      concreteType: SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
      subjectIds: [entitySubject],
      accessType: ACCESS_TYPE.DOWNLOAD,
      name: arName,
      subjectsDefinedByAnnotations: false,
    }

    // step 1: common AR fields
    await confirmArSubject(MOCK_FILE_NAME)

    await user.type(getArNameInput(), arName)
    const radioBtn = within(screen.getByRole('radiogroup')).getByRole('radio', {
      name: 'Click wrap',
    })
    await user.click(radioBtn)

    await user.click(getBtn('Save & Continue'))

    await waitFor(() => {
      expect(onCancel).not.toHaveBeenCalled()
      expect(onComplete).not.toHaveBeenCalled()
      expect(createAccessRequirementSpy).toHaveBeenCalledTimes(1)
      expect(createAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        ar,
      )
    })

    // step 2: basic AR fields
    await expectNoContentWiki()

    const certifiedAccessorField = await screen.findByRole('checkbox', {
      name: 'Accessors must be certified.',
    })
    expect(certifiedAccessorField).not.toBeChecked()
    await user.click(certifiedAccessorField)
    expect(certifiedAccessorField).toBeChecked()

    await user.click(getBtn('Save'))

    await waitFor(() => {
      expect(updateAccessRequirementSpy).toHaveBeenCalledTimes(1)
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        {
          ...ar,
          id: MOCK_NEWLY_CREATED_AR_ID,
          etag: MOCK_AR_ETAG,
          isCertifiedUserRequired: true,
        },
      )

      expect(onCancel).not.toHaveBeenCalled()
      expect(onComplete).toHaveBeenCalledTimes(1)
    })
  })

  test('updates ACT AR', async () => {
    const { user } = setUp({
      open: true,
      accessRequirementId: mockACTAccessRequirement.id.toString(),
      onCancel,
      onComplete,
    })

    // step 1: common AR fields
    await confirmArSubject(mockACTAccessRequirement.subjectIds[0].id)

    const nameInput = getArNameInput()
    expect(nameInput).toHaveValue(mockACTAccessRequirement.name)

    const newName = 'some other name'
    await updateArName(newName, user)

    await user.click(getBtn('Save & Continue'))

    await waitFor(() => {
      expect(onCancel).not.toHaveBeenCalled()
      expect(onComplete).not.toHaveBeenCalled()
      expect(updateAccessRequirementSpy).toHaveBeenCalledTimes(1)
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        { ...mockACTAccessRequirement, name: newName },
      )
    })

    // step 2: basic AR fields
    await expectNoContentWiki()
    expect(screen.getByText('Legacy text-only instructions')).toBeVisible()
    expect(
      screen.getByText(mockACTAccessRequirement.actContactInfo!),
    ).toBeVisible()

    await user.click(getBtn('Save'))

    await waitFor(() => {
      expect(updateAccessRequirementSpy).toHaveBeenCalledTimes(2)
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        {
          ...mockACTAccessRequirement,
          name: newName,
        },
      )

      expect(onCancel).not.toHaveBeenCalled()
      expect(onComplete).toHaveBeenCalledTimes(1)
    })
  })

  test('updates terms of use AR', async () => {
    const { user } = setUp({
      open: true,
      accessRequirementId: mockToUAccessRequirement.id.toString(),
      onCancel,
      onComplete,
    })

    // step 1: common AR fields
    await confirmArSubject(mockToUAccessRequirement.subjectIds[0].id)

    const nameInput = getArNameInput()
    expect(nameInput).toHaveValue(mockToUAccessRequirement.name)

    const newName = 'some other name'
    await updateArName(newName, user)

    await user.click(getBtn('Save & Continue'))

    await waitFor(() => {
      expect(onCancel).not.toHaveBeenCalled()
      expect(onComplete).not.toHaveBeenCalled()
      expect(updateAccessRequirementSpy).toHaveBeenCalledTimes(1)
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        { ...mockToUAccessRequirement, name: newName },
      )
    })

    // step 2: basic AR fields
    await expectNoContentWiki()
    expect(screen.getByText('Legacy text-only instructions')).toBeVisible()
    expect(screen.getByText(mockToUAccessRequirement.termsOfUse!)).toBeVisible()

    await user.click(getBtn('Save'))

    await waitFor(() => {
      expect(updateAccessRequirementSpy).toHaveBeenCalledTimes(2)
      expect(updateAccessRequirementSpy).toHaveBeenLastCalledWith(
        MOCK_ACCESS_TOKEN,
        {
          ...mockToUAccessRequirement,
          name: newName,
        },
      )

      expect(onComplete).toHaveBeenCalledTimes(1)
      expect(onCancel).not.toHaveBeenCalled()
    })
  })
})
