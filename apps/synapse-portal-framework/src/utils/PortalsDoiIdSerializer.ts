import omit from 'lodash-es/omit'

const RESERVED_PORTAL_RESOURCE_TYPE_KEY = '__type'

type DoiSerializerConfiguration<ResourceType extends string> = {
  /** For each serializable portal resource type, describes an ordered set of keys that describe such a resource. */
  resourceTypeOrderedRequiredAttributes: Record<ResourceType, string[]>
}

/**
 * Handles serializing and deserializing a DOI ID for a portal resource. If configured correctly, a portal resource
 * will always serialize to the same DOI ID string, so we can look it up later using this ID string.
 */
class PortalsDoiIdSerializer<ResourceType extends string> {
  private config: DoiSerializerConfiguration<ResourceType>
  constructor(config: DoiSerializerConfiguration<ResourceType>) {
    this.config = config
  }

  /**
   * Serializes a portal resource type and its key to a DOI ID.
   * @param type
   * @param resourceKeyAttributes
   */
  public serialize(
    type: ResourceType,
    resourceKeyAttributes: Record<string, string>,
  ): string {
    // Check that all required keys are present. If not, throw an error
    const requiredKeys = this.config.resourceTypeOrderedRequiredAttributes[type]
    const missingKeys = requiredKeys.filter(
      key => !(key in resourceKeyAttributes),
    )
    if (missingKeys.length > 0) {
      throw new Error(
        `Missing key(s) ${missingKeys.join(
          ', ',
        )} in resource attributes for ${type}. Passed attributes: ${JSON.stringify(
          resourceKeyAttributes,
        )}`,
      )
    }

    const fullObject = {
      [RESERVED_PORTAL_RESOURCE_TYPE_KEY]: type,
      ...resourceKeyAttributes,
    }

    // Stringify as JSON. The 2nd parameter ensures we only stringify the keys we want, in the specified order
    return JSON.stringify(fullObject, [
      RESERVED_PORTAL_RESOURCE_TYPE_KEY,
      ...this.config.resourceTypeOrderedRequiredAttributes[type],
    ])
  }

  /**
   * Deserializes a DOI ID to a portal resource type and its key attributes.
   * @param doiId
   */
  public deserialize(doiId: string): [ResourceType, Record<string, string>] {
    const parsed = JSON.parse(doiId) as Record<string, string>

    return [
      parsed[RESERVED_PORTAL_RESOURCE_TYPE_KEY] as ResourceType,
      omit(parsed, RESERVED_PORTAL_RESOURCE_TYPE_KEY),
    ]
  }
}

export default PortalsDoiIdSerializer
