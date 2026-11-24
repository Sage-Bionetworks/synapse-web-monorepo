import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'Explore',
      path: '/Explore',
      children: [
        { name: 'Studies', path: '/Explore/Studies' },
        { name: 'Datasets', path: '/Explore/Datasets' },
        { name: 'Publications', path: '/Explore/Publications' },
      ],
    },
    {
      name: 'About',
      path: 'https://help.namhub.org/help/about',
    },
    {
      name: 'People',
      path: '/People',
      children: [
        {
          name: 'MPI Leadership',
          path: 'https://nhdcc.wpenginepowered.com/mpi-leadership/',
        },
        {
          name: 'Scientific Advisory Board',
          path: 'https://nhdcc.wpenginepowered.com/scientific-advisory-board/',
        },
      ],
    },
    {
      name: 'Events',
      path: 'https://nhdcc.wpenginepowered.com/',
    },
    {
      name: 'Help',
      path: 'https://help.namhub.org/help',
    },
    {
      name: 'Admin',
      path: 'https://www.synapse.org/Synapse:syn74360399/wiki/640276',
      requiredTeamId: '3582968',
    },
    {
      name: 'News',
      path: 'https://nhdcc.wpenginepowered.com/news/',
    },
  ],
  isPortalsDropdownEnabled: false,
}
