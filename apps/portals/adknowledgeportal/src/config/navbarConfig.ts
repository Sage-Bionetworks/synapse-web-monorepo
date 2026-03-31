import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'Explore',
      path: '/Explore',
      children: [
        { name: 'Programs', path: '/Explore/Programs' },
        { name: 'Projects', path: '/Explore/Projects' },
        { name: 'Studies', path: '/Explore/Studies' },
        { name: 'Data', path: '/Explore/Data' },
        { name: 'Cohort Builder', path: '/Explore/Cohort Builder/Individuals' },
        { name: 'Publications', path: '/Explore/Publications' },
        { name: 'People', path: '/Explore/People' },
        {
          name: 'Experimental Models',
          path: '/Explore/Experimental Models',
        },
        {
          name: 'Computational Tools',
          path: '/Explore/Computational Tools',
        },
        {
          name: 'Target Enabling Resources',
          path: '/Explore/Target Enabling Resources',
        },
        { name: 'Results', path: '/Explore/Results' },
      ],
    },
    {
      name: 'Analysis Platforms',
      path: '/Analysis Platforms',
    },
    {
      name: 'Data Access',
      path: '/Data Access',
    },
    {
      name: 'Contribute',
      path: '/Contribute',
    },
    {
      name: 'News',
      path: 'https://news.adknowledgeportal.org/',
    },
    {
      name: 'Help',
      path: 'https://help.adknowledgeportal.org/apd/',
    },
  ],
  isPortalsDropdownEnabled: false,
}
