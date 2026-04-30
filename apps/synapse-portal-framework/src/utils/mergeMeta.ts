import { MetaDescriptor } from 'react-router'

// Copied from https://github.com/remix-run/react-router/discussions/12672#discussioncomment-12211998

/**
 * Merges meta descriptors from route matches, ensuring that the most specific descriptors take precedence while avoiding duplicates. For 'charSet' and 'title' descriptors, only the presence of the key is considered for similarity, while for others, both key and value must match.
 *
 * @param args - An object containing the route matches and location information.
 * @param descriptors - An array of meta descriptors to merge with those from the matches.
 * @returns A merged array of meta descriptors with duplicates removed based on the defined similarity criteria.
 */
export const mergeMeta = <TMetaArgs extends { matches: any[] }>(
  args: TMetaArgs,
  descriptors: MetaDescriptor[],
): MetaDescriptor[] => {
  descriptors = [...descriptors]

  const isSimilar = (a: MetaDescriptor, b: MetaDescriptor, key: string) => {
    const keysAreEqual = key in a && key in b
    const valuesAreEqual = a[key as keyof typeof a] === b[key as keyof typeof b]

    return key === 'charSet' || key === 'title'
      ? keysAreEqual
      : keysAreEqual && valuesAreEqual
  }

  for (const descriptor of args.matches
    .filter(Boolean)
    .flatMap(_ => _.meta)
    .toReversed()) {
    const foundSimilar = descriptors.some(
      _ =>
        isSimilar(_, descriptor, 'charSet') ||
        isSimilar(_, descriptor, 'name') ||
        isSimilar(_, descriptor, 'property') ||
        isSimilar(_, descriptor, 'title'),
    )

    if (!foundSimilar) {
      descriptors.push(descriptor)
    }
  }

  return descriptors
}
