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
    table_charts: ['Data', 'Experimental Models', 'Target Enabling Resources'],
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
  challengeportal: {},
  digitalhealth: {
    cards_charts: ['Collections', 'Tools', 'Publications'],
    table_charts: ['Data'],
  },
  elportal: {
    table_charts: ['Data By Files', 'Data by Participants'],
    cards: ['Species'],
    cards_charts: [
      'Projects',
      'Studies',
      'Publications',
      'Computational Tools',
    ],
    people_charts: ['People'],
  },
  nf: {
    table_charts: ['Files'],
    cards: ['Initiatives'],
    cards_charts: ['Studies', 'Datasets', 'Publications', 'Tools', 'Hackathon'],
  },
  psychencode: {
    table_charts: ['Data'],
    cards: ['Publications'],
    cards_charts: ['Studies', 'Grants'],
    people_charts: ['People'],
  },
  stopadportal: {},
}

export default exploreConfig
