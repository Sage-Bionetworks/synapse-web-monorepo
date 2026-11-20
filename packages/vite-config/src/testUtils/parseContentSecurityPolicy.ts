/** Splits a serialized policy into its directives' source lists. */
export function parseContentSecurityPolicy(
  policy: string,
): Map<string, string[]> {
  return new Map(
    policy.split('; ').map(directive => {
      const [name, ...values] = directive.split(' ')
      return [name, values]
    }),
  )
}

// CloudFront rejects a custom header or Content-Security-Policy value longer than this
export const CLOUDFRONT_MAX_HEADER_VALUE_LENGTH = 1783
