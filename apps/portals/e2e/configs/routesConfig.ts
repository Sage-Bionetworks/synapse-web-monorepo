export type Portal =
  | 'adknowledgeportal'
  | 'arkportal'
  | 'bsmn'
  | 'cancercomplexity'
  | 'challengeportal'
  | 'digitalhealth'
  | 'elportal'
  | 'nf'
  | 'psychencode'
  | 'stopadportal'

type RouteButtonsLinks = { buttons: string[]; links: string[] }
type RouteConfig = Record<Portal, RouteButtonsLinks>

// lists each Portal's navigation buttons and links
const routesConfig: RouteConfig = {
  adknowledgeportal: {
    buttons: ['Home', 'Explore', 'Sign In'],
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
    links: ['Intranet', 'News', 'Help'],
  },
  challengeportal: {
    buttons: ['Home'],
    links: [],
  },
  digitalhealth: {
    buttons: ['Home', 'Explore', 'Sign In'],
    links: ['About', 'Help'],
  },
  elportal: {
    buttons: ['Explore', 'Sign In'],
    links: [
      'Home',
      'Analysis Platforms',
      'Data Access',
      'Contribute',
      'News',
      'Help',
    ],
  },
  nf: {
    buttons: ['Explore', 'Organizations', 'About', 'Sign In'],
    links: ['Browse Tools', 'Contribute Data', 'News', 'Help'],
  },
  psychencode: {
    buttons: ['Home', 'Explore', 'Sign In'],
    links: ['Data Access', 'News', 'About', 'Help'],
  },
  stopadportal: {
    buttons: ['Help', 'Sign In'],
    links: ['Home', 'Apply'],
  },
}

export default routesConfig
