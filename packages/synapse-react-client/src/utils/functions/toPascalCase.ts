/**
 * Joins the alphanumeric words of a string with each word's first letter capitalized. Any other
 * character separates words and is dropped; letters after the first in a word are unchanged.
 */
export function toPascalCase(str: string): string {
  const words = str.match(/[A-Za-z0-9]+/g) ?? []
  return words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}
