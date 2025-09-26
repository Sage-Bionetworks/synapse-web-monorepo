import { render } from '@testing-library/react'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { EntityDownloadButton } from './EntityDownloadButton'

// Test that the function doesn't throw an error for any entity type
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
