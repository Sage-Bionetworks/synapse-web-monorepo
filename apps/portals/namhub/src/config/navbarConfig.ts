import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'Explore',
      path: '/Explore',
      children: [
        { name: 'Studies', path: '/Explore/Studies' },
        { name: 'Datasets', path: '/Explore/Datasets' },
      ],
    },
    {
      name: 'About',
      path: 'https://help.namhub.org/help/about',
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
  ],
  isPortalsDropdownEnabled: false,
}
