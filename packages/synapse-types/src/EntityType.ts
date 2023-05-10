// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/EntityType.html
export enum EntityType {
  PROJECT = 'project',
  FOLDER = 'folder',
  FILE = 'file',
  TABLE = 'table',
  LINK = 'link',
  ENTITY_VIEW = 'entityview',
  DOCKER_REPO = 'dockerrepo',
  SUBMISSION_VIEW = 'submissionview',
  DATASET = 'dataset',
  DATASET_COLLECTION = 'datasetcollection',
  MATERIALIZED_VIEW = 'materializedview',
}
