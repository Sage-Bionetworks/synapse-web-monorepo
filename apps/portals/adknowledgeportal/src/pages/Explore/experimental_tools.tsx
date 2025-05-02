import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'

function ExploreExperimentalTools() {
  // PORTALS-2001 - we renamed "Experimental Tools" to "Experimental Models"
  return <RedirectWithQuery to={'/Explore/Experimental Models'} />
}

export default ExploreExperimentalTools
