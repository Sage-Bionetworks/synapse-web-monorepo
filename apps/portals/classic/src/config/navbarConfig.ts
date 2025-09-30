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
        {
          name: 'Studies',
          path: '/Explore/Studies',
        },
        { name: 'Publications', path: '/Explore/Publications' },
      ],
    },
    {
      name: 'Contribute Study Metadata',
      path: '/Contribute Study Metadata',
    },
    {
      name: 'News',
      path: 'https://news.classic.org/',
    },
    {
      name: 'Help',
      path: 'https://help.classic.org/help/',
    },
  ],
  isPortalsDropdownEnabled: true,
}
