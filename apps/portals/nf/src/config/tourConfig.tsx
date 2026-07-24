import {
  navTourId,
  TOUR_TARGET_EXPLORE_TABS,
  TOUR_TARGET_PORTAL_SEARCH,
} from '@sage-bionetworks/synapse-portal-framework/components/tour/tourTargets'
import {
  GuidedTourConfig,
  TOUR_TARGET_EXPLORE_CHARTS,
  TOUR_TARGET_EXPLORE_FACET_FILTERS,
  TOUR_TARGET_EXPLORE_RESULTS,
  TOUR_TARGET_EXPLORE_TOP_CONTROLS,
  tourSelector,
} from 'synapse-react-client'

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
        'research data, tools, and resources. This tour walks through how ' +
        'to find, filter, and download data — it takes about two minutes. ' +
        'You can reopen it anytime with the "Take a Tour" button in the ' +
        'corner of the page.',
    },
    {
      target: tourSelector(TOUR_TARGET_PORTAL_SEARCH),
      title: 'Search everything',
      content:
        'Type a term — a gene, condition, or data type like "whole genome ' +
        'sequencing" — and press Enter to search every study, dataset, ' +
        'file, publication, and tool in the portal at once.',
      placement: 'bottom',
    },
    {
      target: tourSelector(navTourId('Explore')),
      title: 'Or browse by category',
      content:
        'Prefer to browse? Open the Explore menu to jump to one resource ' +
        'type: Initiatives, Studies, Datasets, Files, Publications, Tools, ' +
        'or Hackathon Projects.',
      placement: 'bottom',
    },
    {
      target: tourSelector(TOUR_TARGET_HOME_GOALS),
      title: 'Resource overview',
      content:
        'These counters show how much data the portal holds. Click any of ' +
        'them to jump straight to that resource type in Explore.',
      placement: 'top',
    },
    {
      target: tourSelector(TOUR_TARGET_HOME_NEW_STUDIES),
      title: 'New studies',
      content:
        'The most recently added studies are featured here — check back to ' +
        'see what is new. Now let’s look at the Explore page, where ' +
        'the real data work happens.',
      placement: 'top',
      spotlightPadding: 8,
    },
    {
      target: tourSelector(TOUR_TARGET_EXPLORE_TABS),
      pathname: EXPLORE_STUDIES_PATH,
      title: 'The Explore page',
      content:
        'This is Explore, opened to Studies. Each tab is a different ' +
        'resource type, and the charts, filters, and results below update ' +
        'to match the tab you are on.',
      placement: 'bottom',
    },
    {
      target: tourSelector(TOUR_TARGET_EXPLORE_CHARTS),
      pathname: EXPLORE_STUDIES_PATH,
      title: 'Charts are interactive',
      content:
        'These charts summarize the current results — for example, studies ' +
        'by initiative. Click a chart segment to filter the results to ' +
        'just that group, and click "View All Charts" to visualize every ' +
        'category.',
      placement: 'bottom',
      spotlightPadding: 8,
    },
    {
      target: tourSelector(TOUR_TARGET_EXPLORE_FACET_FILTERS),
      pathname: EXPLORE_STUDIES_PATH,
      title: 'Filter the results',
      content:
        'Narrow the results by checking filter boxes — for example, a ' +
        'specific disease manifestation or data type. You can combine ' +
        'filters across categories, and your active filters appear above ' +
        'the results so they are easy to clear.',
      placement: 'right',
      spotlightPadding: 8,
    },
    {
      target: tourSelector(TOUR_TARGET_EXPLORE_TOP_CONTROLS),
      pathname: EXPLORE_STUDIES_PATH,
      title: 'Easy-to-miss controls',
      content:
        'These small buttons do a lot: search within the current results, ' +
        'show or hide the filters and charts, and download the data you ' +
        'have filtered.',
      placement: 'bottom',
      spotlightPadding: 8,
    },
    {
      target: tourSelector(TOUR_TARGET_EXPLORE_RESULTS),
      pathname: EXPLORE_STUDIES_PATH,
      title: 'Open a result for details',
      content:
        'Matching studies appear here. Click a study name to open its ' +
        'details page with a description, investigators, and all of its ' +
        'associated data. On the Files tab, you can select individual ' +
        'files and add them to your Download Cart.',
      placement: 'top',
      spotlightPadding: 8,
    },
    {
      target: tourSelector(navTourId('Help')),
      pathname: EXPLORE_STUDIES_PATH,
      title: 'Need help?',
      content:
        'The Help section has step-by-step documentation for finding, ' +
        'downloading, and contributing data. That’s the tour — happy ' +
        'exploring!',
      placement: 'bottom',
    },
  ],
}

export default tourConfig
