import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'Home',
      path: '/',
      children: [
        { name: 'Collections', path: '/#Collections' },
        { name: "What's New", path: "/#What's New" },
      ],
    },
    {
      name: 'Explore',
      path: '/Explore',
      children: [
        { name: 'Collections', path: '/Explore/Collections' },
        {
          name: 'Tools',
          path: '/Explore/Tools',
        },
        { name: 'Data', path: '/Explore/Data' },
        { name: 'Publications', path: '/Explore/Publications' },
      ],
    },
    {
      name: 'About',
      path: '/About',
    },
    {
      name: 'Help',
      path: 'https://help.dhealth.synapse.org/doc/',
    },
  ],
  isPortalsDropdownEnabled: false,
}
