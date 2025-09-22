export type Portal =
  | 'adknowledgeportal'
  | 'arkportal'
  | 'bsmn'
  | 'cancercomplexity'
  | 'challenges'
  | 'digitalhealth'
  | 'eliteportal'
  | 'genie'
  | 'nf'
  | 'stopadportal'

type RouteButtonsLinks = { buttons: string[]; links: string[] }
type RouteConfig = Record<Portal, RouteButtonsLinks>

// lists each Portal's navigation buttons and links
const routesConfig: RouteConfig = {
  adknowledgeportal: {
    buttons: ['Explore', 'Sign In'],
    links: ['Analysis Platforms', 'Data Access', 'Contribute', 'News', 'Help'],
  },
  arkportal: {
    buttons: ['Explore', 'Sign In'],
    links: ['Home', 'About', 'Data Access', 'News', 'Help'],
  },
  bsmn: {
    buttons: ['Home', 'Explore'],
    links: ['About'],
  },
  cancercomplexity: {
    buttons: ['Home', 'Explore', 'Sign In'],
    links: ['News', 'Help'],
  },
  challenges: {
    buttons: ['Home'],
    links: [],
  },
  digitalhealth: {
    buttons: ['Home', 'Explore', 'Sign In'],
    links: ['About', 'Help'],
  },
  eliteportal: {
    buttons: ['Explore', 'Data Access', 'Sign In'],
    links: ['Home', 'Analysis Platforms', 'Contribute Data', 'News', 'Help'],
  },
  nf: {
    buttons: [
      'Research Tools Central',
      'Explore',
      'Organizations',
      'About',
      'Sign In',
    ],
    links: ['Contribute Data', 'Help'],
  },
  stopadportal: {
    buttons: ['Help', 'Sign In'],
    links: ['Home', 'Apply'],
  },
  genie: {
    buttons: ['Explore', 'Sign In'],
    links: ['Home', 'Data Releases', 'Access', 'Help'],
  },
}

export default routesConfig
