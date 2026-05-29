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
      name: 'About',
      path: '/About',
      children: [
        {
          name: 'MC2 Center',
          path: 'https://help.cancercomplexity.synapse.org/doc/about-the-mc2-center',
        },
        {
          name: 'CCKP',
          path: 'https://help.cancercomplexity.synapse.org/doc/about-the-cckp-new',
        },
        {
          name: 'Data Standards',
          path: 'https://mc2-center.github.io/data-models/',
        },
      ],
    },
    {
      name: 'News',
      path: 'https://news.cancercomplexity.synapse.org/',
    },
    {
      name: 'Contribute Data',
      path: 'https://help.cancercomplexity.synapse.org/doc/contribute-to-the-cckp',
    },
    {
      name: 'Help',
      path: 'https://help.cancercomplexity.synapse.org/',
    },
  ],
  isPortalsDropdownEnabled: true,
}
