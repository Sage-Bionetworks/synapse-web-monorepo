import { DoiRedirectConfig } from '@sage-bionetworks/synapse-portal-framework/shared-config/DoiRedirectRoute'

type ADKPResourceType = 'STUDY'

export const doiRedirectConfig: DoiRedirectConfig<ADKPResourceType> = (
  resourceType,
  resourceId,
) => {
  switch (resourceType) {
    case 'STUDY':
      return `/Explore/Studies/DetailsPage/StudyDetails?Study=${resourceId}`
    default:
      throw new Error(
        `Resource type ${resourceType} not supported in this portal.`,
      )
  }
}
