import { reorderColumnsWithUpsertKeysFirst } from './reorderColumnsWithUpsertKeysFirst'

describe('reorderColumnsWithUpsertKeysFirst', () => {
  it('returns the columns unchanged when there are no upsert keys', () => {
    expect(
      reorderColumnsWithUpsertKeysFirst(['firstName', 'lastName', 'age'], []),
    ).toEqual(['firstName', 'lastName', 'age'])
  })

  it('moves a single upsert key to the front', () => {
    expect(
      reorderColumnsWithUpsertKeysFirst(
        ['firstName', 'lastName', 'age'],
        ['lastName'],
      ),
    ).toEqual(['lastName', 'firstName', 'age'])
  })

  it('moves multiple upsert keys to the front, in the given upsert-key order', () => {
    expect(
      reorderColumnsWithUpsertKeysFirst(
        ['firstName', 'lastName', 'age', 'email'],
        ['email', 'firstName'],
      ),
    ).toEqual(['email', 'firstName', 'lastName', 'age'])
  })

  it('preserves the relative order of the remaining columns', () => {
    expect(
      reorderColumnsWithUpsertKeysFirst(['a', 'b', 'c', 'd'], ['c']),
    ).toEqual(['c', 'a', 'b', 'd'])
  })

  it('leaves the order unchanged when upsert keys are already at the front', () => {
    expect(
      reorderColumnsWithUpsertKeysFirst(
        ['firstName', 'lastName', 'age'],
        ['firstName'],
      ),
    ).toEqual(['firstName', 'lastName', 'age'])
  })

  it('ignores upsert keys that are not present among the columns', () => {
    expect(
      reorderColumnsWithUpsertKeysFirst(
        ['firstName', 'lastName'],
        ['doesNotExist', 'lastName'],
      ),
    ).toEqual(['lastName', 'firstName'])
  })
})
