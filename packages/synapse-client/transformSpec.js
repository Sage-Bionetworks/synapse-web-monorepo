let openAPISpec = require('./openapispecification.json')
const fs = require('fs')
const _ = require('lodash')
/*
 * Transform schema definitions to remove unncessary `org.sagebionetworks.repo.model` prefix
 *   "#/components/schemas/org.sagebionetworks.repo.model.MyObject"
 * to
 *   "#/components/schemas/MyObject"
 *
 * In cases where there are duplicates, we'll include as many prefixes as necessary
 *   "#/components/schemas/org.sagebionetworks.repo.model.foo.MyObject" and
 *   "#/components/schemas/org.sagebionetworks.repo.model.bar.MyObject"
 * to
 *   "#/components/schemas/foo.MyObject" and
 *   "#/components/schemas/bar.MyObject"
 *
 */
const keyPaths = Object.keys(openAPISpec.components.schemas).map(key =>
  key.split('.'),
)

let shortenedPaths = keyPaths.map(path => {
  return path.slice(Math.max(0, path.length - 1)).join('.')
})
let counts = _.countBy(shortenedPaths)
let duplicates = Object.entries(counts).filter(([k, v]) => v > 1)
let duplicateKeys = duplicates.map(([k, v]) => k)
let hasDuplicates = Object.entries(duplicates).length > 0
let numIterations = 1

while (hasDuplicates) {
  // Start with the last key in the path and work backwards until all schemas are unique
  shortenedPaths = shortenedPaths.map((path, index) => {
    if (duplicateKeys.includes(path)) {
      const originalPath = keyPaths[index]
      return keyPaths[index]
        .slice(Math.max(0, originalPath.length - (1 + numIterations)))
        .join('.')
    }
    return path
  })

  counts = _.countBy(shortenedPaths)
  duplicates = Object.entries(counts).filter(([k, v]) => v > 1)
  duplicateKeys = duplicates.map(([k, v]) => k)
  hasDuplicates = Object.entries(duplicates).length > 0
}

const mapFromOldToNew = Object.keys(openAPISpec.components.schemas).map(
  (key, index) => {
    return [key, shortenedPaths[index]]
  },
)

const newSchemas = shortenedPaths.reduce((acc, path, idx) => {
  acc[path] = Object.values(openAPISpec.components.schemas)[idx]
  return acc
}, {})

openAPISpec.components.schemas = newSchemas

// Rewrite all $refs in the spec to match the new schema paths
const replaceRefs = obj => {
  if (typeof obj == 'object') {
    if (obj.$ref && typeof obj.$ref === 'string') {
      const [_, newKey] = mapFromOldToNew.find(
        ([oldKey]) => obj.$ref === `#/components/schemas/${oldKey}`,
      )
      obj.$ref = `#/components/schemas/${newKey}`
    }
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object' || Array.isArray(obj[key])) {
        replaceRefs(obj[key])
      }
    })
  } else if (Array.isArray(obj)) {
    obj.forEach(item => replaceRefs(item))
  }
  return obj
}

function shortenOperationIds(obj) {
  if (typeof obj == 'object') {
    if (obj.operationId && typeof obj.operationId === 'string') {
      obj.operationId = obj.operationId.replace(/\/(repo|file|auth)\/v1\//g, '')
    }
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object' || Array.isArray(obj[key])) {
        shortenOperationIds(obj[key])
      }
    })
  } else if (Array.isArray(obj)) {
    obj.forEach(item => shortenOperationIds(item))
  }
  return obj
}

openAPISpec = replaceRefs(openAPISpec)
// openAPISpec = shortenOperationIds(openAPISpec)

fs.writeFileSync('transformedSpec.json', JSON.stringify(openAPISpec, null, 2))
