import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'About',
      path: '/About',
      children: [
        {
          name: 'Overview',
          path: '/Overview',
        },
        {
          name: 'Data Coordinating Center',
          path: '/Data Coordinating Center',
        },
        {
          name: 'Data Contribution',
          path: '/Data Contribution',
        },
      ],
    },
    {
      name: 'Explore',
      path: '/Explore',
      children: [
        {
          name: 'Programs',
          path: '/Explore/Programs',
        },
        {
          name: 'Projects',
          path: '/Explore/Projects',
        },
        {
          name: 'Studies',
          path: '/Explore/Studies',
        },
        { name: 'Files', path: '/Explore/Data' },
        {
          name: 'Cohort Discovery',
          path: '/Explore/Cohort Builder/Individuals',
        },
        { name: 'Publications', path: '/Explore/Publications' },
        { name: 'Tools', path: '/Explore/Computational Tools' },
        { name: 'People', path: '/Explore/People' },
      ],
    },
    {
      name: 'Data Access',
      path: '/Data Access',
      children: [
        {
          name: 'Data Access Overview',
          path: '/Data Access/Data Access Overview',
        },
        {
          name: 'Approved Access Requests',
          path: '/Data Access/Approved Access Requests',
        },
        {
          name: 'Acknowledge Data Use',
          path: '/Data Access/Data Acknowledgement',
        },
        {
          name: 'AI/ML Acceptable Use Policy',
          path: '/Data Access/AI_ML_Acceptable_Use_Policy',
        },
      ],
    },
    {
      name: 'Analysis Platforms',
      path: '/Analysis Platforms',
    },
    {
      name: 'Help',
      path: 'https://help.eliteportal.org/help/',
    },
    {
      name: 'News',
      path: 'https://news.eliteportal.org/',
    },
  ],
  isPortalsDropdownEnabled: true,
}
