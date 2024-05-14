export type ROROrganizationType =
  | 'education'
  | 'funder'
  | 'healthcare'
  | 'company'
  | 'archive'
  | 'nonprofit'
  | 'government'
  | 'facility'
  | 'other'

export type ROROrganizationName = {
  value: string
  types: Array<'acronym' | 'alias' | 'label' | 'ror_display'>
}

export type ROROrganizationRelationship = {
  id: string
  type: Array<'related' | 'parent' | 'child' | 'successor' | 'predecessor'>
  label: string
}

export type RORLocation = {
  geonames_id: number
  geonames_details: {
    name: string
    lat?: number | null
    lng?: number | null
    country_code?: string | null
    country_name?: string | null
  }
}

export type RORLink = {
  type: 'website' | 'wikipedia'
  value: string
}

/**
 * https://github.com/ror-community/ror-schema/blob/master/ror_schema_v2_0.json
 */
export type ROROrganization = {
  /* Unique ROR ID for the organization	 */
  id: string

  /* The domains registered to a particular institution */
  domains: Array<string> | null
  /* Year the organization was established (CE) */
  established: number | null
  /* The organization's website and Wikipedia page */
  links: Array<RORLink> | null
  /* The location of the organization */
  locations: Array<RORLocation>
  /* Names the organization goes by. Allowed name types: acronym, alias, label, ror_display */
  names: Array<ROROrganizationName>
  /* Related organizations in ROR. Allowed relationship types: related, parent, child, predecessor, successor */
  relationships: Array<ROROrganizationRelationship> | null
  /* Whether the organization is active */
  status: 'active' | 'inactive' | 'withdrawn'
  /* Organization type */
  types: Array<ROROrganizationType>

  /* Other identifiers for the organization. Allowed ID types: fundref, grid, isni, wikidata */
  // external_ids: Array | null - not required for our purposes
  /* Container for administrative information about the record */
  // admin: object - not required for our purposes
}

export type RORSearchResult = {
  items: ROROrganization[]
}
