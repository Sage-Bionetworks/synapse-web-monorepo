import minimist from 'minimist'
import { request } from 'undici'
import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'node:url'

const outputFile = path.resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../spec/openapispecification.json',
)

const STAGING_SPEC_URL =
  'http://dev.release.rest.doc.sagebase.org.s3-website-us-east-1.amazonaws.com/openapi/openapispecification.json'
const PROD_SPEC_URL =
  'https://rest-docs.synapse.org/rest/openapi/openapispecification.json'

const args = minimist(process.argv.slice(2))

const stack = (args['stack'] as string | undefined) || 'production'

let restDocsUrl
switch (stack) {
  case 'staging':
    restDocsUrl = STAGING_SPEC_URL
    break
  case 'production':
  default:
    restDocsUrl = PROD_SPEC_URL
}

request(restDocsUrl).then(({ body }) => {
  body.text().then(spec => {
    fs.writeFileSync(outputFile, spec)
  })
})
