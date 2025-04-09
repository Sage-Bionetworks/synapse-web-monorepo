import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'Home',
      path: '/',
      children: [
        { name: 'About the Portal', path: '/#About the Portal' },
        {
          name: 'Grants and Principal Investigators',
          path: '/#Grants and Principal Investigators',
        },
        { name: 'Acknowledgement', path: '/#Acknowledgement' },
      ],
    },
    {
      name: 'Explore',
      path: '/Explore',
      children: [
        { name: 'Projects', path: '/Explore/Projects' },
        { name: 'Data', path: '/Explore/Data' },
        { name: 'Tools', path: '/Explore/Tools' },
        { name: 'People', path: '/Explore/People' },
        { name: 'Publications', path: '/Explore/Publications' },
      ],
    },
    {
      name: 'About',
      path: '/About',
    },
  ],
  isPortalsDropdownEnabled: false,
}
