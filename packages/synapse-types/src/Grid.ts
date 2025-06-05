export type CreateGridRequest = {
  concreteType?: string
  csvFileHandleId?: number // The ID of a fileHandle of a CSV that defines the starting state of the grid. The first line of the CSV must be a header that defines the column names of the grid.
  schema$id?: string // The $id of the JSON schema to be used for model validation. Note: If the $id includes a semantic version then specific version will be used. If the $id excludes the semantic version then the latest version of that schema.
}

export type CreateGridResponse = {
  concreteType?: string
  gridSession: string // Basic information about a grid session.
}

export type GridSession = {
  sessionId: string // 	The unique sessionId that identifies the grid session.
  startedBy: string // 	The user that started this session.
  startedOn: string // 	The date-time when the session was started.
  etag: string // 	Changes when the session chagnes.
  modifiedOn: string // 	The date-time when the session was last changed.
  lastReplicaIdClient: number // 	The last replica ID issued to a client. Client replica IDs are incremented.
  lastReplicaIdService: number // The last replica ID issued to a service. Service replica IDs are decremented.
}

export type CreateReplicaRequest = {
  gridSessionId: string // The ID of the grid session to create a replica for.
}

export type GridReplica = {
  gridSessionId: string // The ID of the grid seesion.
  replicaId: number // The unique identifier for the new replica.
  createdBy: string // The user that created this replica.
  isAgentReplica: boolean // When true, this replica belongs to the createdBy user's agent.
  createdOn: string // The date-time when the user created this replica.
}
export type CreateReplicaResponse = {
  replica: GridReplica // Information about a replica.
}

export type CreateGridPresignedUrlRequest = {
  gridSessionId: string // The ID of the grid session to create a presigned URL for.
  replicaId: number // The ID of the replica to create a presigned URL for.
}

export type CreateGridPresignedUrlResponse = {
  presignedUrl: string // A presigned URL used to establish a websocket connection to the grid session.
}
