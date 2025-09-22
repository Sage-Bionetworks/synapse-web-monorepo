import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Explore',
      path: '/Explore',
      children: [
        { name: 'Data', path: '/Explore/Data' },
        { name: 'Cohort Builder', path: '/Explore/Cohort Builder' },
        {
          name: 'Projects',
          path: '/Explore/Projects',
        },
        {
          name: 'Studies',
          path: '/Explore/Studies',
        },
        { name: 'Publications', path: '/Explore/Publications' },
        { name: 'Computational Tools', path: '/Explore/Computational Tools' },
        { name: 'People', path: '/Explore/People' },
      ],
    },
    {
      name: 'Analysis Platforms',
      path: '/Analysis Platforms',
    },
    {
      name: 'Data Access',
      path: '/Data Access Dropdown',
      children: [
        { name: 'How to Access Our Data', path: '/Data Access' },
        {
          name: 'Required Data Acknowledgement',
          path: '/Data Acknowledgement',
        },
      ],
    },
    {
      name: 'Contribute Data',
      path: '/Contribute Data',
    },
    {
      name: 'News',
      path: 'https://news.eliteportal.org/',
    },
    {
      name: 'Help',
      path: 'https://help.eliteportal.org/help/',
    },
  ],
  isPortalsDropdownEnabled: true,
}
