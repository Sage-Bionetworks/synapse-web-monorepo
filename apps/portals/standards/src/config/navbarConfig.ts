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
    },
    {
      //TODO
      name: 'Contribute A Standard',
      path: '/ContributeAStandard',
    },
    {
      //TODO
      name: 'Help',
      path: 'https://help.standardsexplorer.synapse.org/doc/',
    },
  ],
}
