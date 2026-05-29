import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'Explore',
      path: '/Explore',
      children: [
        { name: 'Datasets', path: '/Explore/Datasets' },
        { name: 'Files', path: '/Explore/Files' },
      ],
    },
  ],
  isPortalsDropdownEnabled: false,
}
