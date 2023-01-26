// This is not an object defined by Synapse. Just consolidating parameters into a type
// https://rest-docs.synapse.org/rest/GET/projects.html

export type GetProjectsParameters = {
  nextPageToken?: string | null
  teamId?: string
  filter?: 'ALL' | 'CREATED' | 'PARTICIPATED' | 'TEAM'
  sort?: 'LAST_ACTIVITY' | 'PROJECT_NAME'
  sortDirection?: 'ASC' | 'DESC'
}
