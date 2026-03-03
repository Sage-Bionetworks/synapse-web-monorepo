import { EntityType } from '@sage-bionetworks/synapse-client'
import { getDownloadActionsForEntityType } from './EntityDownloadButton'

// This test will fail if a new EntityType is added and not handled in getDownloadActionsForEntityType
describe('getDownloadActionsForEntityType', () => {
  test.each(Object.values(EntityType))(
    'getDownloadActionsForEntityType: %s',
    type => {
      expect(() => {
        getDownloadActionsForEntityType(type)
      }).not.toThrow()
    },
  )

  it('Returns no actions for project entity', () => {
    expect(getDownloadActionsForEntityType(EntityType.project)).toEqual([])
  })
})
