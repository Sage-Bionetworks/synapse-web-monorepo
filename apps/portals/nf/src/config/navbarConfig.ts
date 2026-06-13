import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'Explore',
      path: '/Explore',
      children: [
        { name: 'Studies', path: '/Explore/Studies' },
        { name: 'Datasets', path: '/Explore/Datasets' },
        { name: 'Files', path: '/Explore/Files' },
        { name: 'Publications', path: '/Explore/Publications' },
        { name: 'Tools', path: '/Explore/Tools' },
        { name: 'Initiatives', path: '/Explore/Initiatives' },
        { name: 'Hackathon Projects', path: '/Explore/Hackathon' },
      ],
    },
    {
      name: 'About',
      path: '/About',
      children: [
        {
          name: 'Our Mission',
          path: '/About/Our-Mission',
        },
        {
          name: 'Our Roadmap',
          path: 'https://nfosi-community-tools.vercel.app/',
        },
        {
          name: 'News',
          path: '/News',
        },
        {
          name: 'Data Standards',
          path: 'https://nf-osi.github.io/nf-metadata-dictionary/',
        },
        { name: 'Organizations', path: '/Organizations' },
      ],
    },
    {
      name: 'Contribute',
      path: 'https://help.nf.synapse.org/nf-data-portal-documentation/contributing-data',
      children: [
        {
          name: 'Contribute Data',
          path: 'https://help.nf.synapse.org/nf-data-portal-documentation/contributing-data',
        },
        {
          name: 'Submit New Tool',
          path: '/Research Tools Central/Browse Tools',
        },
      ],
    },
    {
      name: 'Help',
      path: 'https://help.nf.synapse.org/nf-data-portal-documentation',
    },
  ],
  isPortalsDropdownEnabled: true,
  searchPath: '/Search',
}
