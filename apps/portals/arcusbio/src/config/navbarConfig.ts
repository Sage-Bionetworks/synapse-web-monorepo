import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'Home',
      path: '/',
      children: [
        {
          name: 'What’s in the portal?',
          path: '/#What’s in the portal?',
        },
        {
          name: 'Accessing the data',
          path: '/#Accessing the data',
        },
        {
          name: 'Using file provenance',
          path: '/#Using file provenance',
        },
        {
          name: 'Help & support',
          path: '/#Help & support',
        },
      ],
    },
    {
      name: 'Explore',
      path: '/Explore',
    },
    {
      name: 'About Arcus Biosciences',
      path: 'https://arcusbio.com/',
    },
  ],
  isPortalsDropdownEnabled: true,
}
