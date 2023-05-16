export type ProjectHeaderList = {
  results: Array<ProjectHeader>
  nextPageToken?: string | null
}

export type ProjectHeader = {
  name: string
  id: string
  lastActivity: string
  modifiedOn: string
  modifiedBy: number
}
