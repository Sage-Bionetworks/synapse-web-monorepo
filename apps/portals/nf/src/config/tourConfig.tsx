import {
  navTourId,
  TOUR_TARGET_EXPLORE_CONTENT,
  TOUR_TARGET_EXPLORE_TABS,
  TOUR_TARGET_PORTAL_SEARCH,
} from '@sage-bionetworks/synapse-portal-framework/components/tour/tourTargets'
import { GuidedTourConfig, tourSelector } from 'synapse-react-client'

/** Tagged on the home page's "Resource Overview" section */
export const TOUR_TARGET_HOME_GOALS = 'home-goals'
/** Tagged on the home page's "New Studies" section */
export const TOUR_TARGET_HOME_NEW_STUDIES = 'home-new-studies'

const EXPLORE_STUDIES_PATH = '/Explore/Studies'

const tourConfig: GuidedTourConfig = {
  id: 'nf-welcome',
  version: 1,
  steps: [
    {
      target: 'body',
      placement: 'center',
      title: 'Welcome to the NF Data Portal',
      content:
        'The NF Data Portal hosts neurofibromatosis and schwannomatosis ' +
        'research data, tools, and resources. This quick tour shows you how ' +
        'to find what you need — it takes about a minute.',
    },
    {
      target: tourSelector(TOUR_TARGET_PORTAL_SEARCH),
      title: 'Search everything',
      content:
        'Search for studies, datasets, files, publications, and tools from ' +
        'any page in the portal.',
      placement: 'bottom',
    },
    {
      target: tourSelector(navTourId('Explore')),
      title: 'Explore the portal',
      content:
        'Browse everything in the portal by category: Initiatives, Studies, ' +
        'Datasets, Files, Publications, Tools, and Hackathon Projects.',
      placement: 'bottom',
    },
    {
      target: tourSelector(TOUR_TARGET_HOME_GOALS),
      title: 'Resource overview',
      content:
        'See at a glance how much data the portal contains, and jump ' +
        'directly to each resource type.',
      placement: 'top',
    },
    {
      target: tourSelector(TOUR_TARGET_HOME_NEW_STUDIES),
      title: 'New studies',
      content: 'The most recently added studies are featured here.',
      placement: 'top',
      spotlightPadding: 8,
    },
    {
      target: tourSelector(TOUR_TARGET_EXPLORE_TABS),
      pathname: EXPLORE_STUDIES_PATH,
      title: 'Browse by resource type',
      content:
        'This is the Explore page. Use these tabs to switch between ' +
        'resource types, like Studies, Datasets, and Files.',
      placement: 'bottom',
    },
    {
      target: tourSelector(TOUR_TARGET_EXPLORE_CONTENT),
      pathname: EXPLORE_STUDIES_PATH,
      title: 'Filter and visualize',
      content:
        'Filter results with the facet controls, visualize them in plots, ' +
        'and select rows to add data to your download cart.',
      placement: 'top',
      spotlightPadding: 8,
    },
    {
      target: tourSelector(navTourId('Help')),
      pathname: EXPLORE_STUDIES_PATH,
      title: 'Need help?',
      content:
        'Visit the Help section for documentation about the portal, ' +
        'contributing data, and working with NF research resources.',
      placement: 'bottom',
    },
  ],
}

export default tourConfig
