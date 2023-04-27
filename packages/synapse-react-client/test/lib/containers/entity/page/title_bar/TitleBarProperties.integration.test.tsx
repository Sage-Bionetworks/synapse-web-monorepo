import React from 'react'
import * as UseGetEntityPropertiesModule from '../../../../../../src/lib/containers/entity/page/title_bar/useGetEntityTitleBarProperties'
import { render, screen } from '@testing-library/react'
import TitleBarProperties, {
  TitleBarPropertiesProps,
} from '../../../../../../src/lib/containers/entity/page/title_bar/TitleBarProperties'
import mockFileEntity from '../../../../../../mocks/entity/mockFileEntity'
import { createWrapper } from '../../../../../testutils/TestingLibraryUtils'
import userEvent from '@testing-library/user-event'
import * as HasAccessModule from '../../../../../../src/lib/containers/access_requirements/HasAccessV2'
import { mockFileHandle } from '../../../../../../mocks/mock_file_handle'
import { calculateFriendlyFileSize } from '../../../../../../src/lib/utils/functions/calculateFriendlyFileSize'
import { rest, server } from '../../../../../../mocks/msw/server'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../../../src/lib/utils/functions/getEndpoint'
import {
  DOI_ASSOCIATION,
  ENTITY_BUNDLE_V2,
} from '../../../../../../src/lib/utils/APIConstants'
import {
  DoiAssociation,
  EntityBundle,
  EntityChildrenResponse,
  EntityType,
  ExternalFileHandle,
} from '../../../../../../src/lib/utils/synapseTypes'
import mockDataset from '../../../../../../mocks/entity/mockDataset'
import { mockFolderEntity } from '../../../../../../mocks/entity/mockEntity'
import failOnConsoleError from 'jest-fail-on-console'

const HAS_ACCESS_V2_DATA_TEST_ID = 'mock-has-access-v2'

jest
  .spyOn(HasAccessModule, 'HasAccessV2')
  .mockImplementation(() => (
    <span data-testid={HAS_ACCESS_V2_DATA_TEST_ID}></span>
  ))

const mockOnActClick = jest.fn()

function useEntityBundleOverride(bundle: EntityBundle) {
  server.use(
    rest.post(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
        ':entityId',
      )}`,

      async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(bundle))
      },
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
  } catch (e) {}
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
          },
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
      const doiUri = '10.7303/syn12345678.3'
      useEntityBundleOverride({
        ...mockFileEntity.bundle,
        doiAssociation: {
          doiUri,
        },
      })
      renderComponent()
      await expandPropertiesIfPossible()

      await screen.findByText(`DOI`)
      await screen.findByText('https://doi.org/10.7303/syn12345678.3')
    })
    it('Unversioned DOI fallback for latest version of versionable entity', async () => {
      const doiUri = '10.7303/syn12345678'
      // The bundle does not provide a version-specific DOI, and the entity is the latest version
      useEntityBundleOverride({
        ...mockFileEntity.bundle,
        entity: {
          ...mockFileEntity.entity,
          isLatestVersion: true,
        },
        doiAssociation: undefined,
      })
      // A non-version-specific DOI exists
      useDoiAssociationOverride({
        doiUri,
      })
      renderComponent()
      await expandPropertiesIfPossible()

      await screen.findByText(`DOI`)
      await screen.findByText('https://doi.org/10.7303/syn12345678')
    })

    it('Unversioned DOI fallback is not shown if not latest version', async () => {
      const doiUri = '10.7303/syn12345678'
      // The bundle does not provide a version-specific DOI, but this is not the latest version
      useEntityBundleOverride({
        ...mockFileEntity.bundle,
        entity: {
          ...mockFileEntity.entity,
          isLatestVersion: false,
        },
        doiAssociation: undefined,
      })
      // A non-version-specific DOI exists
      useDoiAssociationOverride({
        doiUri,
      })
      renderComponent()
      await expandPropertiesIfPossible()

      expect(screen.queryByText(`DOI`)).not.toBeInTheDocument()
      expect(
        screen.queryByText(`https://doi.org/10.7303/syn12345678`),
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
