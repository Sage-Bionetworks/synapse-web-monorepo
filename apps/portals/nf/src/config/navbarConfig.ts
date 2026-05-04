import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'Research Tools Central',
      path: '/Research Tools Central',
      children: [
        { name: 'Browse Tools', path: '/Research Tools Central/Browse Tools' },
        {
          name: 'Submit New Tool',
          path: '/Research Tools Central/Submit New Tool',
        },
        {
          name: 'Submit Observation',
          path: '/Research Tools Central/Submit Observation',
        },
      ],
    },
    {
      name: 'Explore',
      path: '/Explore',
      children: [
        { name: 'Initiatives', path: '/Explore/Initiatives' },
        { name: 'Studies', path: '/Explore/Studies' },
        {
          name: 'Datasets',
          path: '/Explore/Datasets',
        },
        { name: 'Files', path: '/Explore/Files' },
        { name: 'Publications', path: '/Explore/Publications' },
        { name: 'Tools', path: '/Explore/Tools' },
        { name: 'Hackathon Projects', path: '/Explore/Hackathon' },
      ],
    },
    {
      name: 'Organizations',
      path: '/Organizations',
      children: [
        {
          name: 'CTF',
          path: '/Organizations/CTF',
        },
        {
          name: 'NTAP',
          path: '/Organizations/NTAP',
        },
        {
          name: 'GFF',
          path: '/Organizations/GFF',
        },
        {
          name: 'NCI DHART SPORE',
          path: '/Organizations/DHART SPORE',
        },
        {
          name: 'CDMRP NFRP',
          path: '/Organizations/CDMRP',
        },
        {
          name: 'NFRI',
          path: '/Organizations/NFRI',
        },
      ],
    },
    {
      name: 'About',
      path: '/About',
      children: [
        { name: 'News', path: 'https://news.nfdataportal.org/' },
        {
          name: 'NF-OSI',
          path: 'https://help.nf.synapse.org/nf-data-portal-documentation/about',
        },
        {
          name: 'Data Standards',
          path: 'https://nf-osi.github.io/nf-metadata-dictionary/',
        },
      ],
    },
    {
      name: 'Contribute Data',
      path: 'https://help.nf.synapse.org/nf-data-portal-documentation/contributing-data',
    },
    {
      name: 'Help',
      path: 'https://help.nf.synapse.org/nf-data-portal-documentation',
    },
    {
      name: 'Admin',
      path: 'https://www.synapse.org/Synapse:syn26451327',
      requiredTeamId: '3378999',
    },
  ],
  isPortalsDropdownEnabled: true,
}
