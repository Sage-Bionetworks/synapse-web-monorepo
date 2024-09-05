export type DoiNameIdentifier = {
  identifier: string // Uniquely identifies an individual or legal entity.
  nameIdentifierScheme: string // The scheme used for the name identifier.
}

export type DoiCreator = {
  creatorName: string // The name of the creator.
  nameIdentifiers?: DoiNameIdentifier[] // Optional. Array of name identifiers.
}

export type DoiTitle = {
  title: string // The title of the resource.
}

export type DoiResourceType = {
  resourceTypeGeneral: string // Describes the type of media that the DOI Metadata refers to.
}

export type Doi = {
  creators: DoiCreator[] // Required. The main researchers involved in producing the data, or the authors of the publication, in priority order.
  titles: DoiTitle[] // Required. A name or title by which a resource is known.
  publicationYear?: number // Optional. Publication year as an integer.
  resourceType?: DoiResourceType // Optional. Describes the type of media that the DOI Metadata refers to.
  associationId?: string // Optional string. Association ID.
  etag?: string // Optional string. ETag for concurrency control.
  doiUri?: string // Optional string. The URI of the DOI.
  doiUrl?: string // Optional string. The URL of the DOI.
  objectId?: string // Optional string. Object ID in Synapse.
  objectType?: string // Optional string. Object type.
  objectVersion?: number // Optional integer. Version number of the object.
  associatedBy?: string // Optional string. User ID who associated the DOI.
  associatedOn?: string // Optional string. Timestamp of when the DOI was associated.
  updatedBy?: string // Optional string. User ID who last updated the DOI.
  updatedOn?: string // Optional string. Timestamp of when the DOI was last updated.
}
