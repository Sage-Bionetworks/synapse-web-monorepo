import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'OpenChallenges',
      path: '/OpenChallenges',
    },
    {
      name: 'Admin',
      path: 'https://www.synapse.org/Synapse:syn51476216',
      requiredTeamId: '3379097',
    },
  ],
  isPortalsDropdownEnabled: false,
}
