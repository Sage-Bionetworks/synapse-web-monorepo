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
