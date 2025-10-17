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
      path: '/Data Access',
      children: [
        {
          name: 'How to Access Data',
          path: '/Data Access/How to Access Data',
        },
        {
          name: 'Required Data Acknowledgement',
          path: '/Data Access/Data Acknowledgement',
        },
        {
          name: 'AI/ML Acceptable Use Policy',
          path: '/Data Access/AI_ML_Acceptable_Use_Policy',
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
