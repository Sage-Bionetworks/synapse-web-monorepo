import { render } from '@testing-library/react'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { EntityDownloadButton } from './EntityDownloadButton'

// This test will fail if a new EntityType is added and not handled in getDownloadActionsForEntityType
describe('EntityDownloadButton', () => {
  test.each(Object.values(EntityType))(
    'getDownloadActionsForEntityType: %s',
    type => {
      expect(() => {
        render(
          <EntityDownloadButton
            entityId="syn123"
            name="Test Entity"
            entityType={type}
          />,
        )
      }).not.toThrow()
    },
  )
})
