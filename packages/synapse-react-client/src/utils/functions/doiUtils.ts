import { DOI_REGEX } from './RegularExpressions'

export function convertDoiToLink(doi: string) {
  doi = doi.trim()
  if (DOI_REGEX.test(doi)) {
    return `https://dx.doi.org/${doi}`
  }
  return ''
}
