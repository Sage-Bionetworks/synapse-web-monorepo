import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/About' },
    {
      name: 'Data Access',
      path: '/Data Access',
    },
    {
      name: 'Explore',
      path: '/Explore',
      children: [
        { name: 'Programs', path: '/Explore/Programs' },
        { name: 'Projects', path: '/Explore/Projects' },
        { name: 'Collections', path: '/Explore/Collections' },
        { name: 'Datasets', path: '/Explore/Datasets' },
        { name: 'All Data', path: '/Explore/All Data' },
      ],
    },
    {
      name: 'News',
      path: 'https://news.arkportal.org/',
    },
    {
      name: 'Help',
      path: 'https://help.arkportal.org/help/',
    },
  ],
}
