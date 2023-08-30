import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { cloneDeep } from 'lodash-es'
import React from 'react'
import { FileEntity } from '@sage-bionetworks/synapse-types'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { ENTITY_BUNDLE_V2 } from '../../../utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import { SynapseContextType } from '../../../utils/context/SynapseContext'
import mockFileEntityData from '../../../mocks/entity/mockFileEntity'
import { rest, server } from '../../../mocks/msw/server'
import { EntityModal, EntityModalProps } from './EntityModal'

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
  render(<EntityModal {...defaultProps} {...propOverrides} />, {
    wrapper: createWrapper(wrapperProps),
  })
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
    renderComponent()
    const annotationsTab = (await screen.findAllByRole('tab')).filter(
      tab => tab.innerHTML === 'ANNOTATIONS',
    )[0]
    await userEvent.click(annotationsTab)

    await screen.findByText('Mock Annotations Table')
  })

  it('Shows the edit button when the user has edit permissions', async () => {
    server.use(
      rest.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
          ':entityId',
        )}`,
        async (req, res, ctx) => {
          const response = cloneDeep(mockFileEntityBundle)
          response.permissions = {
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
          return res(ctx.status(200), ctx.json(response))
        },
      ),
    )

    renderComponent({ initialTab: 'ANNOTATIONS' })
    await screen.findByRole('button', { name: 'Edit' })
  })

  it('Does not show the edit button when the user does not have edit permissions', () => {
    server.use(
      rest.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
          ':entityId',
        )}`,
        async (req, res, ctx) => {
          const response = cloneDeep(mockFileEntityBundle)
          response.permissions = {
            canEdit: false,

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
          return res(ctx.status(200), ctx.json(response))
        },
      ),
    )

    renderComponent({ initialTab: 'ANNOTATIONS' })
    expect(
      screen.queryByRole('button', { name: 'Edit' }),
    ).not.toBeInTheDocument()
  })

  it('Does not show the edit button for annotations when looking at an older version', () => {
    server.use(
      rest.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
          ':entityId',
          ':versionNumber',
        )}`,
        async (req, res, ctx) => {
          const response = cloneDeep(mockFileEntityBundle)
          ;(response.entity as FileEntity).isLatestVersion = false
          response.permissions = {
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
          return res(ctx.status(200), ctx.json(response))
        },
      ),
    )

    renderComponent({ initialTab: 'ANNOTATIONS' })
    expect(
      screen.queryByRole('button', { name: 'Edit' }),
    ).not.toBeInTheDocument()
  })

  it('Opens the annotation editor when edit is clicked', async () => {
    server.use(
      rest.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
          ':entityId',
        )}`,
        async (req, res, ctx) => {
          const response = cloneDeep(mockFileEntityBundle)
          ;(response.entity as FileEntity).isLatestVersion = true
          response.permissions = {
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
          return res(ctx.status(200), ctx.json(response))
        },
      ),
    )

    renderComponent({ initialTab: 'ANNOTATIONS' })

    const editButton = await screen.findByRole('button', { name: 'Edit' })
    await userEvent.click(editButton)

    // Text that appears in the editor component if there's a schema
    await screen.findByText('Mock Annotation Editor', { exact: false })
  })
})
