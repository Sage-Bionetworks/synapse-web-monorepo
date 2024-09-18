import { countBy, isEqual, upperFirst } from 'lodash-es'

/**
 * Given a set of "shortened" canonical names, returns just those that are duplicated.
 *
 * Example input: [
 *  ['foo', 'bar'],
 *  ['foo', 'baz'],
 *  ['foo', 'bar']
 * ]
 *
 * Output: [['foo', 'bar']]
 *
 * @param canonicalNames
 */
function getDuplicateNames(canonicalNames: string[][]): string[][] {
  // countBy returns an object with the count of each unique value
  const counts = countBy(
    Object.values(canonicalNames).map(name =>
      // re-join the name parts so lodash can compare strings
      name.join('.'),
    ),
  )
  return (
    Object.entries(counts)
      // Return just those that have a count greater than 1
      .filter(([k, v]) => v > 1)
      // And convert the name strings back to arrays
      .map(([k, v]) => k.split('.'))
  )
}

/**
 * Shortens the canonical names in the mapping to the shortest unique name.
 * Each key in the mapping will be returned in the new object to have a value that is the shortest unique, case-insensitive name for that key.
 *
 * Example input: `['org.sagebionetworks.foo.Bar', 'org.sagebionetworks.foo.Baz', 'org.sagebionetworks.bar.Bar']`
 * Output:
 * ```
 *  {
 *    'org.sagebionetworks.foo.Bar': 'FooBar',
 *    'org.sagebionetworks.foo.Baz': 'Baz',
 *    'org.sagebionetworks.bar.Bar': 'BarBar',
 *  }
 * ```
 */
export function shortenCanonicalNames(
  canonicalNames: string[],
): Record<string, string> {
  /* Shorten the names to the last part, case insensitive
  e.g.
  {
    'org.sagebionetworks.repo.model.one.Foo': 'foo',
    'org.sagebionetworks.repo.model.one.Bar': 'bar',
    'org.sagebionetworks.repo.model.two.Bar': 'bar',
    'org.sagebionetworks.repo.model.two.Baz': 'baz',
  }
 */
  const caseInsensitiveMapping = canonicalNames.reduce(
    (acc: Record<string, string[]>, name) => {
      acc[name] = name.toLowerCase().split('.').slice(-1)
      return acc
    },
    {},
  )

  /* Find any duplicate names and iterate until they are removed
  e.g.
  {
    'org.sagebionetworks.repo.model.one.Foo': 'foo',
    'org.sagebionetworks.repo.model.one.Bar': 'one.bar',
    'org.sagebionetworks.repo.model.two.Bar': 'two.bar',
    'org.sagebionetworks.repo.model.two.Baz': 'baz',
  }
  */
  let duplicateNames = getDuplicateNames(Object.values(caseInsensitiveMapping))
  while (duplicateNames.length > 0) {
    // For each duplicate name, extend the length of the name by one and check again
    Object.entries(caseInsensitiveMapping).forEach(([key, value]) => {
      if (duplicateNames.find(duplicate => isEqual(duplicate, value))) {
        // Extend the length of the name by one
        caseInsensitiveMapping[key] = key
          .toLowerCase()
          .split('.')
          .slice((value.length + 1) * -1)
      }
    })
    duplicateNames = getDuplicateNames(Object.values(caseInsensitiveMapping))
  }

  /* Convert the names back to their original case
    e.g.
    {
      'org.sagebionetworks.repo.model.one.Foo': 'Foo',
      'org.sagebionetworks.repo.model.one.Bar': 'one.Bar',
      'org.sagebionetworks.repo.model.two.Bar': 'two.Bar',
      'org.sagebionetworks.repo.model.two.Baz': 'Baz',
    }
   */
  const originalCaseNames = Object.entries(caseInsensitiveMapping).reduce(
    (
      acc: Record<string, string>,
      [originalName, shortenedCaseInsenstiveName],
    ) => {
      acc[originalName] = originalName
        .split('.')
        .slice(shortenedCaseInsenstiveName.length * -1)
        .join('.')
      return acc
    },
    {},
  )

  // Finally, remove the separators and capitalize the first letter in each part
  // This ensures that we return valid TypeScript
  return Object.entries(originalCaseNames).reduce(
    (acc: Record<string, string>, [originalName, shortenedName]) => {
      acc[originalName] = shortenedName.split('.').map(upperFirst).join('')
      return acc
    },
    {},
  )
}
