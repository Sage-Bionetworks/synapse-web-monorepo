export type Reference = {
  targetId: string // The the id of the entity to which this reference refers
  targetVersionNumber?: number // The version number of the entity to which this reference refers
}

export type ReferenceList = Reference[]
