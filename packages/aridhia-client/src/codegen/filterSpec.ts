import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

// Define the endpoints we want to keep
const ENDPOINTS_TO_KEEP = [
  // Workflows
  'GET /fair/workflows/',
  'GET /fair/workflows/{code}',
  // Dataset settings
  'GET /fair/datasets/{code}/settings',
  // Requests
  'POST /fair/requests/',
  'GET /fair/requests/',
  'GET /fair/requests/{code}',
  // Datasets
  'GET /fair/datasets/',
  'GET /fair/datasets/{code}',
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

// Main execution
const fullSpecPath = join(process.cwd(), 'src/spec/fair-api-full.json')
const filteredSpecPath = join(process.cwd(), 'src/spec/fair-api.json')

try {
  const fullSpec = JSON.parse(
    readFileSync(fullSpecPath, 'utf-8'),
  ) as OpenAPISpec
  const filteredSpec = filterOpenAPISpec(fullSpec, ENDPOINTS_TO_KEEP)

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
