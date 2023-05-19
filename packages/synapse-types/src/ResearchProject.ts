/**
 * A research project describes a project at an institution that used a controlled data set for
 * the purposes that are stated in the Intended Data Use Statement.
 * http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dataaccess/ResearchProject.html
 */
export type ResearchProject = {
  id?: string
  accessRequirementId: string
  institution?: string
  projectLead?: string
  intendedDataUseStatement?: string
  createdOn?: string
  modifiedOn?: string
  createdBy?: string
  modifiedBy?: string
  etag?: string
}
