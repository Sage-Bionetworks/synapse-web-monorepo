import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { cloneDeep } from 'lodash-es'
import React from 'react'
import { EntityModal, EntityModalProps } from './EntityModal'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import { SynapseContextType } from '../../../utils'
import mockFileEntityData from '../../../mocks/entity/mockFileEntity'
import { server } from '../../../mocks/msw/server'
import {
  FileEntity,
  UserEntityPermissions,
} from '@sage-bionetworks/synapse-types'
import {
  getEntityBundleHandler,
  getVersionedEntityBundleHandler,
} from '../../../mocks/msw/handlers/entityHandlers'

const {
  id: MOCK_FILE_ENTITY_ID,
  entity: mockFileEntity,
  bundle: mockFileEntityBundle,
} = mockFileEntityData

const defaultProps: EntityModalProps = {
  show: true,
  onClose: jest.fn(),
  entityId: MOCK_FILE_ENTITY_ID,
}

jest.mock(
  '../../../../src/components/SchemaDrivenAnnotationEditor/SchemaDrivenAnnotationEditor',
  () => ({
    SchemaDrivenAnnotationEditor: jest.fn(() => <p>Mock Annotation Editor</p>),
  }),
)

jest.mock(
  '../../../../src/components/entity/metadata/AnnotationsTable',
  () => ({
    AnnotationsTable: jest.fn(() => <p>Mock Annotations Table</p>),
  }),
)

function renderComponent(
  propOverrides?: Partial<EntityModalProps>,
  wrapperProps?: SynapseContextType,
) {
  const user = userEvent.setup()
  const component = render(
    <EntityModal {...defaultProps} {...propOverrides} />,
    {
      wrapper: createWrapper(wrapperProps),
    },
  )

  const dialog = screen.getByRole('dialog')
  const closeButton = screen.getByRole('button', { name: 'close' })

  return { user, component, dialog, closeButton }
}

const PERMISSIONS_CAN_EDIT: UserEntityPermissions = {
  canEdit: true,
  // the rest don't matter
  canAddChild: false,
  canCertifiedUserAddChild: false,
  canCertifiedUserEdit: false,
  canChangePermissions: false,
  canChangeSettings: false,
  canDelete: false,
  canDownload: false,
  canEnableInheritance: false,
  canModerate: false,
  canMove: false,
  canPublicRead: false,
  canUpload: false,
  canView: false,
  isCertificationRequired: false,
  isCertifiedUser: false,
  isEntityOpenData: false,
  ownerPrincipalId: 0,
}

const PERMISSIONS_CANNOT_EDIT: UserEntityPermissions = {
  ...PERMISSIONS_CAN_EDIT,
  canEdit: false,
}

describe('EntityModal tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Shows metadata like the syn ID', async () => {
    renderComponent()
    await screen.findByText(mockFileEntity.id!)
    // tests for specific data are in MetadataTable.test.tsx
  })

  it('Shows annotations when the tab is switched', async () => {
    const { user } = renderComponent()
    const annotationsTab = (await screen.findAllByRole('tab')).filter(
      tab => tab.innerHTML === 'ANNOTATIONS',
    )[0]
    await user.click(annotationsTab)

    await screen.findByText('Mock Annotations Table')
  })

  it('Shows the edit button when the user has edit permissions', async () => {
    const bundle = cloneDeep(mockFileEntityBundle)
    bundle.permissions = PERMISSIONS_CAN_EDIT
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        bundle,
      ),
    )

    renderComponent({ initialTab: 'ANNOTATIONS' })
    await screen.findByRole('button', { name: 'Edit' })
  })

  it('Does not show the edit button when the user does not have edit permissions', () => {
    const bundle = cloneDeep(mockFileEntityBundle)
    bundle.permissions = PERMISSIONS_CANNOT_EDIT

    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        bundle,
      ),
    )

    renderComponent({ initialTab: 'ANNOTATIONS' })
    expect(
      screen.queryByRole('button', { name: 'Edit' }),
    ).not.toBeInTheDocument()
  })

  it('Does not show the edit button for annotations when looking at an older version', () => {
    const bundle = cloneDeep(mockFileEntityBundle)
    ;(bundle.entity as FileEntity).isLatestVersion = false
    bundle.permissions = PERMISSIONS_CAN_EDIT

    server.use(
      getVersionedEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        bundle,
      ),
    )

    renderComponent({ initialTab: 'ANNOTATIONS' })
    expect(
      screen.queryByRole('button', { name: 'Edit' }),
    ).not.toBeInTheDocument()
  })

  it('Opens the annotation editor when edit is clicked', async () => {
    const onEditModeChanged = jest.fn()
    const bundle = cloneDeep(mockFileEntityBundle)
    ;(bundle.entity as FileEntity).isLatestVersion = true
    bundle.permissions = PERMISSIONS_CAN_EDIT

    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        bundle,
      ),
    )

    const { user } = renderComponent({
      initialTab: 'ANNOTATIONS',
      onEditModeChanged,
    })

    const editButton = await screen.findByRole('button', { name: 'Edit' })
    await user.click(editButton)

    expect(onEditModeChanged).toHaveBeenLastCalledWith(true)

    // Text that appears in the editor component if there's a schema
    await screen.findByText('Mock Annotation Editor', { exact: false })
  })

  it('Cancelling out of edit mode using the cancel button triggers a warning before disabling edit mode', async () => {
    const onEditModeChanged = jest.fn()
    const onClose = jest.fn()

    const bundle = cloneDeep(mockFileEntityBundle)
    ;(bundle.entity as FileEntity).isLatestVersion = true
    bundle.permissions = PERMISSIONS_CAN_EDIT

    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        bundle,
      ),
    )

    const { user } = renderComponent({
      initialTab: 'ANNOTATIONS',
      onEditModeChanged,
      onClose,
    })

    const editButton = await screen.findByRole('button', { name: 'Edit' })
    await user.click(editButton)

    expect(onEditModeChanged).toHaveBeenLastCalledWith(true)

    // Text that appears in the editor component
    await screen.findByText('Mock Annotation Editor', { exact: false })

    // Click the cancel button
    const cancelButton = await screen.findByRole('button', { name: 'Cancel' })
    await user.click(cancelButton)

    // Verify the confirmation appears
    screen.getByText('Unsaved Changes')
    const confirmButton = screen.getByRole('button', {
      name: 'OK',
    })
    await user.click(confirmButton)

    expect(onEditModeChanged).toHaveBeenLastCalledWith(false)
    // onClose should have never been called, because we did not click the dialog close button
    expect(onClose).not.toHaveBeenCalled()
  })

  it('Cancelling out of edit mode using the modal "x" triggers a warning before calling onClose', async () => {
    const onEditModeChanged = jest.fn()
    const onClose = jest.fn()

    const bundle = cloneDeep(mockFileEntityBundle)
    ;(bundle.entity as FileEntity).isLatestVersion = true
    bundle.permissions = PERMISSIONS_CAN_EDIT

    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        bundle,
      ),
    )

    const { user, closeButton } = renderComponent({
      initialTab: 'ANNOTATIONS',
      onEditModeChanged,
      onClose,
    })

    const editButton = await screen.findByRole('button', { name: 'Edit' })
    await user.click(editButton)

    expect(onEditModeChanged).toHaveBeenLastCalledWith(true)

    // Text that appears in the editor component
    await screen.findByText('Mock Annotation Editor', { exact: false })

    // Click the modal close button
    await user.click(closeButton)

    // Verify the confirmation appears
    screen.getByText('Unsaved Changes')
    // Verify we didn't call the callback (yet)
    expect(onClose).not.toHaveBeenCalled()

    const confirmButton = screen.getByRole('button', {
      name: 'OK',
    })
    await user.click(confirmButton)

    expect(onEditModeChanged).toHaveBeenLastCalledWith(false)
    // onClose be called, since that was what the user originally tried to do
    expect(onClose).toHaveBeenCalled()
  })
})
