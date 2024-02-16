import { faker } from '@faker-js/faker'
import { mockUserGroupData } from '../usergroup/mockUserGroup'

/**
 * Use faker to pick a random mock user out of those that have already been created.
 */
export function pickRandomMockUser() {
  return mockUserGroupData[
    faker.number.int({ min: 0, max: mockUserGroupData.length - 1 })
  ]
}
