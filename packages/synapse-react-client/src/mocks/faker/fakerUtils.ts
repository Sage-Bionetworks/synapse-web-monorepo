import { mockUserData } from '../user/mock_user_profile'
import { faker } from '@faker-js/faker'

/**
 * Use faker to pick a random mock user out of those that have already been created.
 */
export function pickRandomMockUser() {
  return mockUserData[
    faker.number.int({ min: 0, max: mockUserData.length - 1 })
  ]
}
