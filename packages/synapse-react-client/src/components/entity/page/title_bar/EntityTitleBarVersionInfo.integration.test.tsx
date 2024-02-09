import React from 'react'
import {
  EntityTitleBarVersionInfo,
  EntityTitleBarVersionInfoProps,
  EXPORTED_FOR_UNIT_TESTING,
} from './EntityTitleBarVersionInfo'
import { mockFolderEntity } from '../../../../mocks/entity/mockEntity'
import mockFileEntity from '../../../../mocks/entity/mockFileEntity'
import { mockDatasetEntity } from '../../../../mocks/entity/mockDataset'
import { render, screen } from '@testing-library/react'
import { createWrapper } from '../../../../testutils/TestingLibraryUtils'
import userEvent from '@testing-library/user-event'
import { server } from '../../../../mocks/msw/server'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../utils/functions/getEndpoint'
import { mockTableEntity } from '../../../../mocks/entity/mockTableEntity'
import { getVersionedEntityBundleHandler } from '../../../../mocks/msw/handlers/entityHandlers'
import {
  EntityBundle,
  VersionableEntity,
} from '@sage-bionetworks/synapse-types'

function renderComponent(props: EntityTitleBarVersionInfoProps) {
  return render(<EntityTitleBarVersionInfo {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('EntityTitleBarVersionInfo', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  describe('Component tests', () => {
    it('Clicking the version number invokes the showVersionHistory callback', async () => {
      const mockCallback = jest.fn()
      renderComponent({
        entityId: mockFileEntity.id,
        versionNumber: mockFileEntity.entity.versionNumber,
        toggleShowVersionHistory: mockCallback,
      })

      await screen.findByText(mockFileEntity.entity.versionLabel!, {
        exact: false,
      })
      const toggleVersionHistoryLink = await screen.findByText(
        `V${mockFileEntity.entity.versionNumber} (Current)`,
        { exact: false },
      )

      await userEvent.click(toggleVersionHistoryLink)

      expect(mockCallback).toHaveBeenCalled()
    })

    it('Truncates a long version label', async () => {
      const longLabel =
        'This is an extra long version label that should be truncated to a reasonable length that we can show in the UI'
      const bundle: EntityBundle = {
        ...mockFileEntity.bundle,
        entity: {
          ...mockFileEntity.bundle.entity,
          versionLabel: longLabel,
        } as VersionableEntity,
      }
      server.use(
        getVersionedEntityBundleHandler(
          getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
          bundle,
        ),
      )
      const mockCallback = jest.fn()
      renderComponent({
        entityId: mockFileEntity.id,
        versionNumber: mockFileEntity.entity.versionNumber,
        toggleShowVersionHistory: mockCallback,
      })

      const truncatedLabel = await screen.findByText(
        `${longLabel.substring(0, 50)}`,
        {
          exact: false,
        },
      )

      // Verify that the entire label is not visible
      expect(screen.queryByText(longLabel)).not.toBeInTheDocument()

      // Show the full label in a tooltip on hover
      await userEvent.hover(truncatedLabel)
      await screen.findByText(longLabel)
    })

    it('Renders nothing for non-versionable entities', () => {
      const mockCallback = jest.fn()
      const { container } = renderComponent({
        entityId: mockFolderEntity.id!,
        toggleShowVersionHistory: mockCallback,
      })

      expect(container.innerHTML).toHaveLength(0)
    })
  })
  describe('getDisplayedVersionLabel', () => {
    const { getDisplayedVersionLabel } = EXPORTED_FOR_UNIT_TESTING
    it('should return null if entity is not versionable', () => {
      const entity = mockFolderEntity
      const result = getDisplayedVersionLabel(entity)
      expect(result).toBeNull()
    })
    it('should return null if entity is a table and is the latest version', () => {
      const entity = {
        ...mockTableEntity,
        isLatestVersion: true,
      }
      const result = getDisplayedVersionLabel(entity)
      expect(result).toBeNull()
    })
    it('should return versionLabel if it exists', () => {
      const entity = mockFileEntity.entity
      const result = getDisplayedVersionLabel(entity)
      expect(result).toEqual(entity.versionLabel)
    })

    it('should return null if versionLabel does not exist', () => {
      const entity = {
        ...mockFileEntity.entity,
        versionLabel: undefined,
      }
      const result = getDisplayedVersionLabel(entity)
      expect(result).toBeNull()
    })
  })
  describe('getDisplayedVersionNumber', () => {
    const { getDisplayedVersionNumber } = EXPORTED_FOR_UNIT_TESTING
    it('should return null if entity is not versionable', () => {
      const entity = mockFolderEntity
      const result = getDisplayedVersionNumber(entity)
      expect(result).toBeNull()
    })
    it('should indicate current version if entity is a non-dataset table and is the latest version', () => {
      const entity = {
        ...mockTableEntity,
        isLatestVersion: true,
      }
      const result = getDisplayedVersionNumber(entity)
      expect(result).toBe('Current Version')
    })
    it('should indicate draft version if entity is a dataset and is the latest version', () => {
      const entity = {
        ...mockDatasetEntity,
        isLatestVersion: true,
      }
      const result = getDisplayedVersionNumber(entity)
      expect(result).toBe('Draft Version')
    })
    it('should return version number if entity is a table and is not the latest version', () => {
      const entity = {
        ...mockTableEntity,
        isLatestVersion: false,
      }
      const result = getDisplayedVersionNumber(entity)
      expect(result).toBe(`V${mockTableEntity.versionNumber}`)
    })

    it('should return versionNumber and denote current if the entity is versionable and is the latest version', () => {
      const entity = { ...mockFileEntity.entity, isLatestVersion: true }
      const result = getDisplayedVersionNumber(entity)
      expect(result).toEqual(`V${entity.versionNumber} (Current)`)
    })

    it('should return versionNumber alone if not latest', () => {
      const entity = { ...mockFileEntity.entity, isLatestVersion: false }
      const result = getDisplayedVersionNumber(entity)
      expect(result).toEqual(`V${entity.versionNumber}`)
    })
  })
})
