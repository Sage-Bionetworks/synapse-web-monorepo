import { describe, expect, test } from 'vitest'
import { shortenCanonicalNames } from './ShortenCanonicalName'

describe('generateModelNameMappings', () => {
  test('shortenCanonicalName', () => {
    const namesToShorten = [
      'org.sagebionetworks.repo.model.one.Foo',
      'org.sagebionetworks.repo.model.one.Bar',
      'org.sagebionetworks.repo.model.two.Bar',
      'org.sagebionetworks.repo.model.two.Baz',
    ]
    const shortenedNameMap = {
      'org.sagebionetworks.repo.model.one.Foo': 'Foo',
      'org.sagebionetworks.repo.model.one.Bar': 'OneBar',
      'org.sagebionetworks.repo.model.two.Bar': 'TwoBar',
      'org.sagebionetworks.repo.model.two.Baz': 'Baz',
    }

    expect(shortenCanonicalNames(namesToShorten)).toEqual(shortenedNameMap)
  })
})
