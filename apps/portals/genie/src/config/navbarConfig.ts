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
        { name: 'GENIE', path: '/Explore/GENIE' },
        { name: 'GENIE-BPC', path: '/Explore/GENIE-BPC' },
        { name: 'Publications', path: '/Explore/Publications' },
        {
          name: 'Contributors',
          path: '/Explore/Contributors',
        },
        { name: 'External Resources', path: '/Explore/External Resources' },
      ],
    },
    {
      name: 'Data Releases',
      path: '/Data Releases',
    },
    {
      name: 'Access',
      path: '/Access',
    },
    {
      name: 'Help',
      path: '/Help',
    },
  ],
  isPortalsDropdownEnabled: false,
}
