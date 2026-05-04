import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'Home',
      path: '/',
      children: [
        {
          name: 'Contribute to the Registry',
          path: '/#Contribute to the Registry',
        },
        { name: 'Exploring the Standards', path: '/#Exploring the Standards' },
      ],
    },
    {
      name: 'Explore',
      path: '/Explore',
    },
    {
      name: 'Contribute A Standard',
      path: 'https://github.com/bridge2ai/b2ai-standards-registry/tree/main?tab=readme-ov-file#submitting-a-new-standard',
    },
    {
      name: 'About',
      path: 'https://bridge2ai.github.io/b2ai-standards-registry/',
    },
    {
      name: 'Admin',
      path: 'https://www.synapse.org/Synapse:syn63096806/tables/',
      requiredTeamId: '3534128',
    },
  ],
  isPortalsDropdownEnabled: false,
}
