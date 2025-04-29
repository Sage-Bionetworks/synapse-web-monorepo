import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'Home',
      path: '/',
      children: [
        { name: 'Portal Goals', path: '/#Portal Goals' },
        // {
        //   name: 'What Resources are Available?',
        //   path: '/#What Resources are Available?',
        // },
        {
          name: 'What Research Themes are Scientists Currently Focusing On?',
          path: '/#What Research Themes are Scientists Currently Focusing On?',
        },
        { name: "What's New", path: "/#What's New" },
        { name: 'Consortia', path: '/#Consortia' },
        {
          name: 'The Cancer Resource Information Ecosystem',
          path: '/#The Cancer Resource Information Ecosystem',
        },
        {
          name: 'About the Cancer Complexity Knowledge Portal',
          path: '/#About the Cancer Complexity Knowledge Portal',
        },
      ],
    },
    {
      name: 'Explore',
      path: '/Explore',
      children: [
        { name: 'Grants', path: '/Explore/Grants' },
        { name: 'People', path: '/Explore/People' },
        { name: 'Publications', path: '/Explore/Publications' },
        {
          name: 'Datasets',
          path: '/Explore/Datasets',
        },
        {
          name: 'Tools',
          path: '/Explore/Tools',
        },
        {
          name: 'Educational Resources',
          path: '/Explore/Educational Resources',
        },
      ],
    },
    {
      name: 'News',
      path: 'https://news.cancercomplexity.synapse.org/',
    },
    {
      name: 'Help',
      path: 'https://help.cancercomplexity.synapse.org/',
    },
  ],
  isPortalsDropdownEnabled: false,
}
