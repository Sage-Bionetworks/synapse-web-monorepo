import { Entity } from '../Entity'

export const DOCKER_REPOSITORY_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.docker.DockerRepository'
export type DOCKER_REPOSITORY_CONCRETE_TYPE =
  typeof DOCKER_REPOSITORY_CONCRETE_TYPE_VALUE

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/docker/DockerRepository.html
export interface DockerRepository extends Entity {
  concreteType: DOCKER_REPOSITORY_CONCRETE_TYPE
  /** This is the repository name, [host[:port]/]path */
  repositoryName: string
  /** Indicates that the repository is managed by Synapse, rather than by an external registry. */
  isManaged: boolean
}
