import { faker } from '@faker-js/faker'
import { Evaluation } from '@sage-bionetworks/synapse-types'
import { pickRandomMockUser } from './fakerUtils'

export function generateEvaluation(
  overrides?: Partial<Evaluation>,
): Evaluation {
  return {
    id: String(faker.number.int()),
    etag: faker.string.uuid(),
    name: faker.lorem.words({ min: 1, max: 4 }),
    description: faker.lorem.words({ min: 1, max: 10 }),
    ownerId: String(pickRandomMockUser().id),
    createdOn: faker.date.anytime().toISOString(),
    contentSource: `syn${faker.number.int({ min: 10000, max: 99999 })}`,
    submissionInstructionsMessage: faker.lorem.words({ min: 1, max: 10 }),
    submissionReceiptMessage: faker.lorem.words({ min: 1, max: 10 }),
    ...overrides,
  }
}
