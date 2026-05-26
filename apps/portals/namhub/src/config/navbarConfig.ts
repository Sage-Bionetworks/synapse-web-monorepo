import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'About',
      path: '/#About New Approach Methodologies Hub',
    },
    {
      name: 'Events',
      path: 'https://nhdcc.wpenginepowered.com/',
    },
    {
      name: 'Admin',
      path: 'https://www.synapse.org/Synapse:syn74360399/wiki/640276',
      requiredTeamId: '3582968',
    },
  ],
  isPortalsDropdownEnabled: false,
}
