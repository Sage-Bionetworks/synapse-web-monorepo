import { Portal } from './routesConfig'

type ExploreTabTypes = {
  table?: string[]
  table_charts?: string[]
  cards?: string[]
  cards_charts?: string[]
  people_charts?: string[]
}

type ExploreConfig = Record<Portal, ExploreTabTypes>

// lists the objects (cards, charts, table, people) on each Explore tab per Portal
const exploreConfig: ExploreConfig = {
  adknowledgeportal: {
    table_charts: [
      'Data',
      'Experimental Models',
      'Target Enabling Resources',
      // Commented out until ADKP Cohort Builder tables are made public
      // 'Cohort Builder',
    ],
    cards: ['Programs'],
    cards_charts: [
      'Projects',
      'Studies',
      'Publications',
      'Computational Tools',
    ],
    people_charts: ['People'],
  },
  arkportal: {
    table: ['Datasets', 'All Data'],
    cards: ['Programs', 'Projects', 'Collections'],
  },
  bsmn: {
    cards_charts: ['Projects', 'Data', 'Tools', 'Publications'],
    people_charts: ['People'],
  },
  cancercomplexity: {
    cards_charts: [
      'Grants',
      'People',
      'Publications',
      'Datasets',
      'Tools',
      'Educational Resources',
    ],
  },
  challenges: {},
  digitalhealth: {
    cards_charts: ['Collections', 'Tools', 'Publications'],
    table_charts: ['Data'],
  },
  eliteportal: {
    table_charts: ['Data', 'Cohort Builder/Individuals'],
    cards_charts: [
      'Projects',
      'Studies',
      'Publications',
      // 'Computational Tools', // empty - known data curation issue
    ],
    people_charts: ['People'],
  },
  nf: {
    table_charts: ['Files'],
    cards: ['Initiatives'],
    cards_charts: ['Studies', 'Datasets', 'Publications', 'Tools', 'Hackathon'],
  },
  stopadportal: {},
  genie: {
    // getByRole('tab', { name: 'GENIE' }) resolves to 2 elements (the GENIE tab and GENIE-BPC tab)
    // table_charts: ['GENIE', 'GENIE-BPC'],
    // TODO: uncomment after route is finalized and source tables are OPEN_DATA
    // cards: ['Publications', 'Contributors', 'External Resources'],
  },
}

export default exploreConfig
