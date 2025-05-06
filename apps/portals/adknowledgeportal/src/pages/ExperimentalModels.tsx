import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'

export function Component() {
  // PORTALS-2028: redirect /ExperimentalModels to /Explore/Experimental%20Models
  return <RedirectWithQuery to={'/Explore/Experimental Models'} />
}

export default Component
