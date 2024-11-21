export type ProjectStorageUsage = {
  projectId: string // The ID of the project
  locations: ProjectStorageLocationUsage[] // List of storage location usages
}

export type ProjectStorageLocationUsage = {
  storageLocationId: number // The ID of the storage location
  sumFileBytes: number // The total number of bytes of files currently associated with this project storage location
  maxAllowedFileBytes?: number // The total number of allowed bytes for this project storage location (optional)
  isOverLimit: boolean // Whether the project storage location is over its limit
}

export type ProjectStorageLocationLimit = {
  projectId: string // The ID of the project
  storageLocationId: number // The ID of the storage location
  maxAllowedFileBytes: number // Sets the limit on the number of file bytes for this storage location
}
