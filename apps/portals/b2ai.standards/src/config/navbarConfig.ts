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
      name: 'Help',
      path: 'https://github.com/bridge2ai/b2ai-standards-registry/tree/main?tab=readme-ov-file#user-documentation',
    },
  ],
  isPortalsDropdownEnabled: false,
}
