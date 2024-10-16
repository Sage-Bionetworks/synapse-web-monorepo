import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Apply',
      path: '/Apply',
    },
    {
      name: 'Help',
      path: '/Help',
      children: [
        {
          name: 'How It Works',
          path: '/Help/How It Works',
        },
        {
          name: 'Data Requirements',
          path: '/Help/Data Requirements',
        },
      ],
    },
  ],
}
