import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'Home',
      path: '/',
      children: [
        { name: 'Resources', path: '/#Resources' },
        { name: 'How To Access Data', path: '/#How To Access Data' },
        { name: 'Publishing Requirements', path: '/#Publishing Requirements' },
        { name: "What's New", path: "/#What's New" },
        { name: 'All ALS', path: '/#All ALS' },
        { name: 'Featured Datasets', path: '/#Featured Datasets' },
        { name: 'More Resources', path: '/#More Resources' },
      ],
    },
    {
      name: 'Explore',
      path: '/Explore',
      children: [
        { name: 'Programs', path: '/Explore/Programs' },
        { name: 'Collections', path: '/Explore/Collections' },
        { name: 'Datasets', path: '/Explore/Datasets' },
        { name: 'Files', path: '/Explore/Files' },
        {
          name: 'All Data',
          path: '/Explore/All Data',
        },
      ],
    },
    {
      name: 'Resources',
      path: '/Resources',
      children: [
        { name: 'For Researchers', path: '/Resources/For Researchers' },
        { name: 'For Contributors', path: '/Resources/For Contributors' },
        {
          name: 'For Persons With Lived Experience',
          path: '/Resources/For Persons With Lived Experience',
        },
      ],
    },
    {
      name: 'Contribute Data',
      path: '/Contribute Data',
    },
    {
      name: 'News',
      path: 'https://news.ampals.org/',
    },
    {
      name: 'Help',
      path: 'https://help.ampals.org/help/',
    },
  ],
  isPortalsDropdownEnabled: false,
}
