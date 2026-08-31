import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

// Endpoints kept from the vendored upstream FAIR spec (fair-api-full.json)
const ENDPOINTS_TO_KEEP = [
  'GET /requests/',
  'POST /requests/',
  'GET /requests/{code}',
  'GET /datasets/{code}',
  'GET /datasets/{code}/settings',
  'GET /datasets/{code}/dictionaries/',
  'GET /datasets/{code}/workspaces',
  'GET /datasets/{code}/workspaces-locations',
  'GET /datasets/{code}/catalogue',
  'GET /workspaces-forms/{code}',
  'GET /workflows/{code}',
  // Deliberately dropped:
  //   - `GET /workflows/` (the workflow code is read from `settings.workflow_key`, never from a listing)
  //   - `GET /datasets/` (dataset codes in the AMP-ALS portal come from the Synapse dataset table's `dataset_code` column).
]

const GATEWAY_SERVERS = [
  {
    url: 'https://gateway.westeurope.dap.c-path.org',
    description: 'C-Path Aridhia API Gateway',
  },
]

interface OpenAPISpec {
  openapi: string
  info: any
  servers: any[]
  tags?: any[]
  paths: Record<string, any>
  components?: any
  [key: string]: any
}

function filterOpenAPISpec(
  spec: OpenAPISpec,
  endpointsToKeep: string[],
): OpenAPISpec {
  const filteredPaths: Record<string, any> = {}
  const usedTags = new Set<string>()
  const usedSchemas = new Set<string>()

  // Parse endpoints to keep into a map
  const endpointMap = new Map<string, Set<string>>()
  endpointsToKeep.forEach(endpoint => {
    const [method, path] = endpoint.split(' ')
    if (!endpointMap.has(path)) {
      endpointMap.set(path, new Set())
    }
    endpointMap.get(path)!.add(method.toLowerCase())
  })

  // Filter paths
  for (const [path, pathItem] of Object.entries(spec.paths || {})) {
    const methods = endpointMap.get(path)
    if (methods) {
      filteredPaths[path] = {}
      methods.forEach(method => {
        if (pathItem[method]) {
          filteredPaths[path][method] = pathItem[method]
          // Collect used tags
          if (pathItem[method].tags) {
            pathItem[method].tags.forEach((tag: string) => usedTags.add(tag))
          }
          // Collect used schemas from request/response bodies
          collectUsedSchemas(pathItem[method], usedSchemas)
        }
      })
    }
  }

  // Filter tags
  const filteredTags = spec.tags?.filter(tag => usedTags.has(tag.name)) || []

  // Filter components (schemas, parameters, etc.)
  const filteredComponents = filterComponents(spec.components, usedSchemas)

  return {
    ...spec,
    paths: filteredPaths,
    tags: filteredTags,
    components: filteredComponents,
  }
}

function collectUsedSchemas(operation: any, usedSchemas: Set<string>) {
  // Collect from requestBody
  if (operation.requestBody?.content) {
    for (const mediaType of Object.values(operation.requestBody.content)) {
      extractSchemaRefs(mediaType, usedSchemas)
    }
  }

  // Collect from responses
  if (operation.responses) {
    for (const response of Object.values(operation.responses)) {
      if ((response as any).content) {
        for (const mediaType of Object.values((response as any).content)) {
          extractSchemaRefs(mediaType, usedSchemas)
        }
      }
    }
  }

  // Collect from parameters
  if (operation.parameters) {
    operation.parameters.forEach((param: any) => {
      if (param.schema) {
        extractSchemaRefs({ schema: param.schema }, usedSchemas)
      }
    })
  }
}

function extractSchemaRefs(obj: any, usedSchemas: Set<string>) {
  if (!obj) return

  if (obj.$ref && typeof obj.$ref === 'string') {
    const schemaName = obj.$ref.split('/').pop()
    if (schemaName) {
      usedSchemas.add(schemaName)
    }
  }

  if (typeof obj === 'object') {
    for (const value of Object.values(obj)) {
      extractSchemaRefs(value, usedSchemas)
    }
  }
}

function filterComponents(components: any, usedSchemas: Set<string>): any {
  if (!components) return undefined

  const filteredComponents: any = { ...components }

  // Recursively collect all referenced schemas
  let previousSize = 0
  while (previousSize !== usedSchemas.size) {
    previousSize = usedSchemas.size
    usedSchemas.forEach(schemaName => {
      const schema = components.schemas?.[schemaName]
      if (schema) {
        extractSchemaRefs(schema, usedSchemas)
      }
    })
  }

  // Filter schemas
  if (components.schemas) {
    filteredComponents.schemas = {}
    usedSchemas.forEach(schemaName => {
      if (components.schemas[schemaName]) {
        filteredComponents.schemas[schemaName] = components.schemas[schemaName]
      }
    })
  }

  return filteredComponents
}

/** Prefix every path key with `/fair`, matching how the gateway proxies the FAIR API. */
function prefixPaths(spec: OpenAPISpec): OpenAPISpec {
  const prefixedPaths: Record<string, any> = {}
  for (const [path, pathItem] of Object.entries(spec.paths)) {
    prefixedPaths[`/fair${path}`] = pathItem
  }
  return { ...spec, paths: prefixedPaths }
}

/**
 * Two operations (`/datasets/{code}/workspaces` and `/datasets/{code}/workspaces-locations`)
 * carry both a `datasets` and a `workspaces` tag upstream. The typescript-fetch generator emits
 * one class per tag and duplicates the *entire* operation — including its request-params
 * interface — into each, so both `DatasetsApi.ts` and `WorkspacesApi.ts` end up declaring an
 * identically named `FairDatasetsCodeWorkspaces(Locations)?GetRequest` interface, which the
 * generated `apis/index.ts` barrel then re-exports ambiguously (TS2308). Keeping only the first
 * tag emits each operation exactly once, under `DatasetsApi`.
 */
function dedupeMultiTagOperations(spec: OpenAPISpec): OpenAPISpec {
  const paths = [
    '/fair/datasets/{code}/workspaces',
    '/fair/datasets/{code}/workspaces-locations',
  ]
  for (const path of paths) {
    const pointer = `${path}#/get/tags`
    const tags = spec.paths[path]?.get?.tags
    const isDefect = Array.isArray(tags) && tags.length > 1
    if (!isDefect) {
      throw new Error(
        `Codegen tag-dedup patch failed: ${pointer} no longer carries multiple tags. Re-check whether this patch is still needed.`,
      )
    }
    spec.paths[path].get.tags = [tags[0]]
  }
  return spec
}

function getByPointer(root: any, pointer: string): any {
  const parts = pointer
    .replace(/^#\//, '')
    .split('/')
    .map(p => p.replace(/~1/g, '/').replace(/~0/g, '~'))
  let cur = root
  for (const part of parts) {
    if (cur == null) return undefined
    cur = cur[part]
  }
  return cur
}

/**
 * Fixes defects in the upstream spec.
 *
 * Each patch is implemented as an assert-then-patch pair so that an upstream fix makes this
 * script fail loudly, instead of silently double-patching or applying a patch that no longer
 * matches reality.
 */
function applyUpstreamDefectPatches(spec: OpenAPISpec): OpenAPISpec {
  // 1. RequestField is a closed object (8 named example props, `required: ["key"]` — a property
  //    that does not even exist on the schema — and no `additionalProperties`), but the real
  //    `fields` payload is an arbitrary map keyed by workflow field name.
  {
    const pointer = '#/components/schemas/RequestField'
    const schema = getByPointer(spec, pointer)
    const isDefect =
      schema &&
      schema.type === 'object' &&
      schema.additionalProperties !== true &&
      Array.isArray(schema.required) &&
      schema.required.includes('key') &&
      schema.properties &&
      typeof schema.properties === 'object'
    if (!isDefect) {
      throw new Error(
        `Upstream spec defect patch failed: ${pointer} no longer matches the expected closed-object shape. Re-check whether this patch is still needed.`,
      )
    }
    spec.components!.schemas[pointer.split('/').pop()!] = {
      type: 'object',
      additionalProperties: true,
    }
  }

  // 2. RequestMetadata has no `workspace_uuid` property, though `POST /requests/`'s example
  //    sends it and `RequestFull` returns it.
  {
    const pointer = '#/components/schemas/RequestMetadata'
    const schema = getByPointer(spec, pointer)
    const isDefect =
      schema &&
      schema.properties &&
      typeof schema.properties === 'object' &&
      !('workspace_uuid' in schema.properties)
    if (!isDefect) {
      throw new Error(
        `Upstream spec defect patch failed: ${pointer} already declares workspace_uuid (or has no properties). Re-check whether this patch is still needed.`,
      )
    }
    schema.properties.workspace_uuid = { type: 'string' }
  }

  // 3 & 4 are on the (already `/fair`-prefixed) filtered paths.
  const workspacesPatches: Array<{ path: string; refName: string }> = [
    { path: '/fair/datasets/{code}/workspaces', refName: 'Workspace' },
    {
      path: '/fair/datasets/{code}/workspaces-locations',
      refName: 'WorkspaceLocation',
    },
  ]
  for (const { path, refName } of workspacesPatches) {
    const pointer = `${path}#/get/responses/200/content/application~1json/schema/properties/items/items`
    const itemsItems = getByPointer(
      spec.paths[path],
      'get/responses/200/content/application~1json/schema/properties/items/items',
    )
    const isDefect =
      itemsItems &&
      typeof itemsItems.$ref === 'string' &&
      itemsItems.$ref.startsWith('#/components/schemas/') &&
      itemsItems.$ref !== `#/components/schemas/${refName}`
    if (!isDefect) {
      throw new Error(
        `Upstream spec defect patch failed: ${pointer} is not the expected array-of-array $ref. Re-check whether this patch is still needed.`,
      )
    }
    itemsItems.$ref = `#/components/schemas/${refName}`
  }

  // 4. GET /datasets/{code}/dictionaries/ declares `required: ["dictionaries"]` on its 200
  //    response body, but that schema only defines `items`/`paging` — `dictionaries` isn't a
  //    property at all, so every real (spec-valid) response would fail schema validation.
  {
    const path = '/fair/datasets/{code}/dictionaries/'
    const pointer = `${path}#/get/responses/200/content/application~1json/schema/required`
    const responseSchema = getByPointer(
      spec.paths[path],
      `get/responses/200/content/application~1json/schema`,
    )
    const isDefect =
      responseSchema &&
      Array.isArray(responseSchema.required) &&
      responseSchema.required.includes('dictionaries') &&
      responseSchema.properties &&
      !('dictionaries' in responseSchema.properties)
    if (!isDefect) {
      throw new Error(
        `Upstream spec defect patch failed: ${pointer} no longer declares a bogus required "dictionaries" property. Re-check whether this patch is still needed.`,
      )
    }
    delete responseSchema.required
  }

  // 5 & 6. Real `list`-type form fields send their pre-selected option under `default_options`
  //    (confirmed against live gateway responses — see `fairFormToRjsf.ts`'s `FairField` type),
  //    but neither field-definition schema that models a form field declares it: `WorkflowField`
  //    (used by `GET /fair/workflows/{code}`) and the inline field schema nested under
  //    `WorkspaceFormSections.workspace.fields` (used by `GET /fair/workspaces-forms/{code}`).
  {
    const pointer = '#/components/schemas/WorkflowField'
    const schema = getByPointer(spec, pointer)
    const isDefect =
      schema &&
      schema.properties &&
      typeof schema.properties === 'object' &&
      !('default_options' in schema.properties)
    if (!isDefect) {
      throw new Error(
        `Upstream spec defect patch failed: ${pointer} already declares default_options (or has no properties). Re-check whether this patch is still needed.`,
      )
    }
    schema.properties.default_options = { type: 'string' }
  }
  {
    const pointer = '#/components/schemas/WorkspaceFormSections'
    const schema = getByPointer(spec, pointer)
    const fieldItemSchema =
      schema?.properties?.workspace?.properties?.fields?.items
    const isDefect =
      fieldItemSchema &&
      fieldItemSchema.properties &&
      typeof fieldItemSchema.properties === 'object' &&
      !('default_options' in fieldItemSchema.properties)
    if (!isDefect) {
      throw new Error(
        `Upstream spec defect patch failed: ${pointer}'s nested workspace field schema already declares default_options (or no longer matches the expected shape). Re-check whether this patch is still needed.`,
      )
    }
    fieldItemSchema.properties.default_options = { type: 'string' }
  }

  return spec
}

/** Merge the hand-authored gateway fragment (paths/schemas that don't exist upstream). */
function mergeGatewaySpec(spec: OpenAPISpec, gatewaySpec: any): OpenAPISpec {
  return {
    ...spec,
    paths: { ...spec.paths, ...gatewaySpec.paths },
    components: {
      ...spec.components,
      schemas: {
        ...spec.components?.schemas,
        ...gatewaySpec.components?.schemas,
      },
      securitySchemes: {
        ...spec.components?.securitySchemes,
        ...gatewaySpec.components?.securitySchemes,
      },
    },
  }
}

// Main execution
const fullSpecPath = join(process.cwd(), 'src/spec/fair-api-full.json')
const gatewaySpecPath = join(process.cwd(), 'src/spec/gateway-api.json')
const filteredSpecPath = join(process.cwd(), 'src/generated/fair-api.json')

try {
  const fullSpec = JSON.parse(
    readFileSync(fullSpecPath, 'utf-8'),
  ) as OpenAPISpec
  const gatewaySpec = JSON.parse(readFileSync(gatewaySpecPath, 'utf-8'))

  let filteredSpec = filterOpenAPISpec(fullSpec, ENDPOINTS_TO_KEEP)
  filteredSpec = prefixPaths(filteredSpec)
  filteredSpec.servers = GATEWAY_SERVERS
  filteredSpec = applyUpstreamDefectPatches(filteredSpec)
  filteredSpec = dedupeMultiTagOperations(filteredSpec)
  filteredSpec = mergeGatewaySpec(filteredSpec, gatewaySpec)
  filteredSpec.security = [{ bearerAuth: [] }]
  mkdirSync(join(process.cwd(), 'src/generated'), { recursive: true })
  writeFileSync(filteredSpecPath, JSON.stringify(filteredSpec, null, 2))
  console.log(`✅ Filtered OpenAPI spec created at ${filteredSpecPath}`)
  console.log(
    `   Original endpoints: ${Object.keys(fullSpec.paths || {}).length}`,
  )
  console.log(
    `   Filtered endpoints: ${Object.keys(filteredSpec.paths || {}).length}`,
  )
} catch (error) {
  console.error('❌ Error filtering OpenAPI spec:', error)
  process.exit(1)
}
