import openAPISpec from '../spec/openapispecification.json'
import { shortenCanonicalNames } from './ShortenCanonicalName'

/**
 * Transform model definitions to shorten them to be as brief as possible when exposed via in the generated TypeScript SDK
 *
 * This is designed to be used with OpenAPI Generator's `model-name-mappings` CLI option.
 *
 * Consider the model ID "org.sagebionetworks.repo.model.MyObject".
 * Normally, the generator would yield a model with the name "OrgSagebionetworksRepoModelMyObject"
 *
 * After providing the `--model-name-mappings org.sagebionetworks.repo.model.MyObject=MyObject` option to OpenAPI Generator, the model would be generated with the name "MyObject"
 *
 * This script will programmatically generate the `--model-name-mappings` option for all types in the Synapse OpenAPI definition.
 *
 * In cases where there are duplicates, we'll include as many prefixes as necessary, For example, for
 *   "org.sagebionetworks.repo.model.foo.MyObject" and
 *   "org.sagebionetworks.repo.model.bar.MyObject"
 * the script would return:
 *   "org.sagebionetworks.repo.model.foo.MyObject=FooMyObject,org.sagebionetworks.repo.model.bar.MyObject=BarMyObject"
 * And the generator would create TypeScript models with the names "FooMyObject" and "BarMyObject"
 */

const shortenedCanonicalNameMap = shortenCanonicalNames(
  Object.keys(openAPISpec.components.schemas),
)

function transformToCLIOption(map: Record<string, string>) {
  return Object.entries(map)
    .map(([k, v]) => [k, v].join('='))
    .join(',')
}

// Send to stdout so that we can easily pipe it into an environment variable and interpolate it in a script
console.log(transformToCLIOption(shortenedCanonicalNameMap))
