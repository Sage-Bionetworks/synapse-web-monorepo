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
  ],
  isPortalsDropdownEnabled: false,
}
