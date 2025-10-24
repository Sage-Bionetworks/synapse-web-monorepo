import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    // Navbar is getting crowded, so removing Home and its children for now
    // {
    //   name: 'Home',
    //   path: '/',
    //   children: [
    //     { name: 'Resources', path: '/#Resources' },
    //     { name: 'How To Access Data', path: '/#How To Access Data' },
    //     { name: 'Publishing Requirements', path: '/#Publishing Requirements' },
    //     { name: "What's New", path: "/#What's New" },
    //     { name: 'All ALS', path: '/#All ALS' },
    //     { name: 'Featured Datasets', path: '/#Featured Datasets' },
    //     { name: 'More Resources', path: '/#More Resources' },
    //   ],
    // },
    {
      name: 'Explore',
      path: '/Explore',
      children: [
        { name: 'Programs', path: '/Explore/Programs' },
        { name: 'Collections', path: '/Explore/Collections' },
        { name: 'Datasets', path: '/Explore/Datasets' },
        {
          name: 'Files',
          path: '/Explore/Files',
        },
      ],
    },
    {
      name: 'Resources',
      path: '/Resources',
      children: [
        // {
        //   name: 'For Persons With Lived Experience',
        //   path: '/Resources/For Persons With Lived Experience',
        // },
        {
          name: 'Requirements for Publication',
          path: '/Resources/Requirements for Publication',
        },
        {
          name: 'Frequently Asked Questions',
          path: '/Resources/Frequently Asked Questions',
        },
        {
          name: 'Contact Us',
          path: '/ContactUs',
        },
        // {
        //   name: 'Publishing Requirements',
        //   path: '/Resources/Publishing Requirements',
        // },
      ],
    },
    {
      name: 'Data Access',
      path: '/Data Access',
    },
    {
      name: 'Contribute Data',
      path: '/Contribute Data',
    },
    // PORTALS-3644: removing News and Help from the navbar until external sites are ready
    // {
    //   name: 'News',
    //   path: 'https://news.ampals.org/',
    // },
    {
      name: 'Help',
      path: 'https://help.alsportal.org/help/',
    },
  ],
  isPortalsDropdownEnabled: false,
}
