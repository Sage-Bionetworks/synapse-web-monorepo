import {
  DoiAssociation,
  EntityBundle,
  EntityChildrenResponse,
  EntityType,
  ExternalFileHandle,
  ExternalObjectStoreFileHandle,
  S3_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  S3FileHandle,
  VersionableEntity,
} from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import failOnConsoleError from 'jest-fail-on-console'
import React from 'react'
import mockDataset from '../../../../mocks/entity/mockDataset'
import { mockFolderEntity } from '../../../../mocks/entity/mockEntity'
import mockFileEntity from '../../../../mocks/entity/mockFileEntity'
import { mockDoiAssociation } from '../../../../mocks/entity/mockProject'
import { mockFileHandle } from '../../../../mocks/mock_file_handle'
import { rest, server } from '../../../../mocks/msw/server'
import { createWrapper } from '../../../../testutils/TestingLibraryUtils'
import { DOI_ASSOCIATION } from '../../../../utils/APIConstants'
import { calculateFriendlyFileSize } from '../../../../utils/functions/calculateFriendlyFileSize'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../utils/functions/getEndpoint'
import * as HasAccessModule from '../../../HasAccess/HasAccessV2'
import TitleBarProperties, {
  TitleBarPropertiesProps,
} from './TitleBarProperties'
import * as UseGetEntityPropertiesModule from './useGetEntityTitleBarProperties'
import {
  MOCK_EXTERNAL_S3_STORAGE_LOCATION_ID,
  mockExternalS3UploadDestination,
} from '../../../../mocks/mock_upload_destination'
import { getEntityBundleHandler } from '../../../../mocks/msw/handlers/entityHandlers'

const HAS_ACCESS_V2_DATA_TEST_ID = 'mock-has-access-v2'

jest
  .spyOn(HasAccessModule, 'HasAccessV2')
  .mockImplementation(() => (
    <span data-testid={HAS_ACCESS_V2_DATA_TEST_ID}></span>
  ))

const mockOnActClick = jest.fn()

function useEntityBundleOverride(bundle: EntityBundle) {
  server.use(
    getEntityBundleHandler(
      getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
      bundle,
    ),
  )
}

function useDoiAssociationOverride(doiAssociation: DoiAssociation | null) {
  server.use(
    rest.get(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${DOI_ASSOCIATION}`,

      async (req, res, ctx) => {
        if (doiAssociation == null) {
          return res(ctx.status(404), ctx.json({}))
        }
        return res(ctx.status(200), ctx.json(doiAssociation))
      },
    ),
  )
}

function renderComponent(propOverrides?: Partial<TitleBarPropertiesProps>) {
  return render(
    <TitleBarProperties
      entityId={mockFileEntity.id}
      onActMemberClickAddConditionsForUse={mockOnActClick}
      {...propOverrides}
    />,
    { wrapper: createWrapper() },
  )
}

async function expandPropertiesIfPossible() {
  try {
    await userEvent.click(await screen.findByText(/\d+ more properties/))
  } catch (e) {
    // add a comment to ignore empty block error
  }
}

describe('TitleBarProperties', () => {
  failOnConsoleError()
  beforeAll(() => server.listen())
  beforeEach(() => {
    useDoiAssociationOverride(null)
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  describe('Show/Hide properties', () => {
    it('Shows all properties if there are 6 or less', async () => {
      // Mock useGetEntityTitleBarProperties to return 6 properties
      jest
        .spyOn(UseGetEntityPropertiesModule, 'useGetEntityTitleBarProperties')
        .mockImplementation(() => {
          const properties = []
          for (let i = 1; i <= 6; i++) {
            properties.push({
              key: i.toString(),
              title: `Property ${i}`,
              value: `Value ${i}`,
            })
          }
          return properties
        })

      renderComponent()

      for (let i = 1; i <= 6; i++) {
        await screen.findByText(`Property ${i}`)
        await screen.findByText(`Value ${i}`)
      }
      expect(screen.queryByText(/\d+ more properties/)).not.toBeInTheDocument()
      expect(screen.queryByText(/Hide properties/)).not.toBeInTheDocument()
    })
    it('Shows 4 properties and can expand to show more if there are > 6', async () => {
      // Mock useGetEntityTitleBarProperties to return 8 properties
      jest
        .spyOn(UseGetEntityPropertiesModule, 'useGetEntityTitleBarProperties')
        .mockImplementation(() => {
          const properties = []
          for (let i = 1; i <= 8; i++) {
            properties.push({
              key: i.toString(),
              title: `Property ${i}`,
              value: `Value ${i}`,
            })
          }
          return properties
        })

      renderComponent()

      // Properties 1-4 should be visible
      for (let i = 1; i <= 4; i++) {
        await screen.findByText(`Property ${i}`)
        await screen.findByText(`Value ${i}`)
      }

      // Properties 5-8 should not be visible
      for (let i = 5; i <= 8; i++) {
        expect(screen.queryByText(`Property ${i}`)).not.toBeInTheDocument()
        expect(screen.queryByText(`Value ${i}`)).not.toBeInTheDocument()
      }

      const showMore = await screen.findByText(/4 more properties/)
      await userEvent.click(showMore)

      // Properties 1-8 should be visible
      for (let i = 1; i <= 8; i++) {
        await screen.findByText(`Property ${i}`)
        await screen.findByText(`Value ${i}`)
      }

      const hide = await screen.findByText('Hide properties')
      await userEvent.click(hide)

      // Once again, properties 1-4 should remain visible
      for (let i = 1; i <= 4; i++) {
        await screen.findByText(`Property ${i}`)
        await screen.findByText(`Value ${i}`)
      }

      // ...and properties 5-8 should not be visible
      for (let i = 5; i <= 8; i++) {
        expect(screen.queryByText(`Property ${i}`)).not.toBeInTheDocument()
        expect(screen.queryByText(`Value ${i}`)).not.toBeInTheDocument()
      }
    })
  })
  describe('Displays individual properties', () => {
    beforeEach(() => {
      jest
        .spyOn(UseGetEntityPropertiesModule, 'useGetEntityTitleBarProperties')
        .mockRestore()
    })
    it('SynID', async () => {
      renderComponent()
      await expandPropertiesIfPossible()

      await screen.findByText(`SynID`)
      await screen.findByText(mockFileEntity.id)
    })
    it('HasAccess', async () => {
      renderComponent()
      await expandPropertiesIfPossible()

      await screen.findByText(`Access`)
      await screen.findByTestId(HAS_ACCESS_V2_DATA_TEST_ID)
    })
    it('File size', async () => {
      renderComponent()
      await expandPropertiesIfPossible()

      await screen.findByText(`Size`)
      await screen.findByText(
        calculateFriendlyFileSize(mockFileHandle.contentSize),
      )
    })
    it('File handle storage location', async () => {
      renderComponent()
      await expandPropertiesIfPossible()

      await screen.findByText(`Storage Location`)
      await screen.findByText('Synapse Storage')
    })
    it('File handle storage location bucket and baseKey', async () => {
      const bucketName = mockExternalS3UploadDestination.bucket
      useEntityBundleOverride({
        ...mockFileEntity.bundle,
        fileHandles: [
          {
            ...mockFileHandle,
            concreteType: S3_FILE_HANDLE_CONCRETE_TYPE_VALUE,
            bucketName: bucketName,
            storageLocationId: MOCK_EXTERNAL_S3_STORAGE_LOCATION_ID,
          } as S3FileHandle,
        ],
      })
      renderComponent()
      await expandPropertiesIfPossible()

      await screen.findByText(`Storage Location`)
      await screen.findByText(
        `s3://${bucketName}/${mockExternalS3UploadDestination.baseKey}`,
      )
    })
    it('File handle endpoint, bucket, key', async () => {
      const endpointUrl = 'https://my-endpoint.fake'
      const bucket = 'my-bucket'
      const fileKey = 'my-key'
      useEntityBundleOverride({
        ...mockFileEntity.bundle,
        fileHandles: [
          {
            ...mockFileHandle,
            concreteType:
              'org.sagebionetworks.repo.model.file.ExternalObjectStoreFileHandle',
            endpointUrl,
            bucket,
            fileKey,
          } as ExternalObjectStoreFileHandle,
        ],
      })
      renderComponent()
      await expandPropertiesIfPossible()

      await screen.findByText('Endpoint')
      await screen.findByText(endpointUrl)
      await screen.findByText('Bucket')
      await screen.findByText(bucket)
      await screen.findByText('File Key')
      await screen.findByText(fileKey)
      expect(screen.queryByText(`Storage Location`)).not.toBeInTheDocument()
    })
    it('External URL', async () => {
      const externalUrl = 'https://some-external-url.net/path-to-file.jpg'
      const fileHandle: ExternalFileHandle = {
        ...mockFileHandle,
        concreteType: 'org.sagebionetworks.repo.model.file.ExternalFileHandle',
        externalURL: externalUrl,
      }
      useEntityBundleOverride({
        ...mockFileEntity.bundle,
        fileHandles: [fileHandle],
      })
      renderComponent()
      await expandPropertiesIfPossible()

      await screen.findByText('URL')
      await screen.findByText(externalUrl)
      expect(screen.queryByText('Endpoint')).not.toBeInTheDocument()
      expect(screen.queryByText('Bucket')).not.toBeInTheDocument()
      expect(screen.queryByText('File Key')).not.toBeInTheDocument()
      expect(screen.queryByText(`Storage Location`)).not.toBeInTheDocument()
    })

    it('File handle md5', async () => {
      renderComponent()
      await expandPropertiesIfPossible()

      await screen.findByText(`MD5`)
      await screen.findByText(mockFileHandle.contentMd5!)
    })
    it('File handle download alias', async () => {
      const fileName = 'custom-file-name-not-matching-entity-name.tar.gz'
      useEntityBundleOverride({
        ...mockFileEntity.bundle,
        fileName,
      })
      renderComponent()
      await expandPropertiesIfPossible()

      await screen.findByText(`Alias`)
      await screen.findByText('Name when downloaded will be:')
      await screen.findByText(fileName)
    })
    it('Does not show file handle download alias if it matches the name', async () => {
      useEntityBundleOverride({
        ...mockFileEntity.bundle,
        fileName: mockFileEntity.entity.name,
      })
      renderComponent()
      await expandPropertiesIfPossible()

      expect(screen.queryByText(`Alias`)).not.toBeInTheDocument()
    })
    it('DOI', async () => {
      useEntityBundleOverride({
        ...mockFileEntity.bundle,
        doiAssociation: mockDoiAssociation,
      })
      renderComponent()
      await expandPropertiesIfPossible()

      await screen.findByText(`DOI`)
      await screen.findByText(`https://doi.org/${mockDoiAssociation.doiUri}`)
    })
    it('Unversioned DOI fallback for latest version of versionable entity', async () => {
      // The bundle does not provide a version-specific DOI, and the entity is the latest version
      useEntityBundleOverride({
        ...mockFileEntity.bundle,
        entity: {
          ...mockFileEntity.entity,
          isLatestVersion: true,
        } as VersionableEntity,
        doiAssociation: undefined,
      })
      // A non-version-specific DOI exists
      useDoiAssociationOverride(mockDoiAssociation)
      renderComponent()
      await expandPropertiesIfPossible()

      await screen.findByText(`DOI`)
      await screen.findByText(`https://doi.org/${mockDoiAssociation.doiUri}`)
    })

    it('Unversioned DOI fallback is not shown if not latest version', async () => {
      // The bundle does not provide a version-specific DOI, but this is not the latest version
      useEntityBundleOverride({
        ...mockFileEntity.bundle,
        entity: {
          ...mockFileEntity.entity,
          isLatestVersion: false,
        } as VersionableEntity,
        doiAssociation: undefined,
      })
      // A non-version-specific DOI exists
      useDoiAssociationOverride(mockDoiAssociation)
      renderComponent()
      await expandPropertiesIfPossible()

      expect(screen.queryByText(`DOI`)).not.toBeInTheDocument()
      expect(
        screen.queryByText(`https://doi.org/${mockDoiAssociation.doiUri}`),
      ).not.toBeInTheDocument()
    })
    it('Container fields (Child count, upload destination)', async () => {
      useEntityBundleOverride({
        ...mockFileEntity.bundle,
        entity: mockFolderEntity,
        entityType: EntityType.FOLDER,
      })

      server.use(
        rest.post(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}/repo/v1/entity/children`,
          async (req, res, ctx) => {
            const response: EntityChildrenResponse = {
              page: [],
              totalChildCount: 55,
              nextPageToken: 'npt',
            }
            return res(ctx.status(200), ctx.json(response))
          },
        ),
      )

      renderComponent()
      await expandPropertiesIfPossible()

      await screen.findByText(`Items`)
      await screen.findByText((55).toLocaleString())

      await screen.findByText('Storage Location')
      await screen.findByText('Synapse Storage')
    })
    it('Dataset items', async () => {
      useEntityBundleOverride(mockDataset.bundle)
      renderComponent()
      await expandPropertiesIfPossible()

      await screen.findByText(`Items`)
      await screen.findByText(mockDataset.entity.items!.length.toString())
    })
  })
})
