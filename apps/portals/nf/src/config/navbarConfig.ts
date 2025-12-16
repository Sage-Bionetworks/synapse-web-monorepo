import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'Research Tools Central',
      path: '/Research Tools Central',
      children: [
        { name: 'Browse Tools', path: '/Research Tools Central/Browse Tools' },
        {
          name: 'Submit Animal Model',
          path: '/Research Tools Central/Submit Animal Model',
        },
        {
          name: 'Submit Observation',
          path: '/Research Tools Central/Submit Observation',
        },
        {
          name: 'Submit Cell Line',
          path: '/Research Tools Central/Submit Cell Line',
        },
        {
          name: 'Submit Antibody',
          path: '/Research Tools Central/Submit Antibody',
        },
        {
          name: 'Submit Genetic Reagent',
          path: '/Research Tools Central/Submit Genetic Reagent',
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
          path: '/Organizations/DetailsPage?abbreviation=CTF',
        },
        {
          name: 'NTAP',
          path: '/Organizations/DetailsPage?abbreviation=NTAP',
        },
        {
          name: 'GFF',
          path: '/Organizations/DetailsPage?abbreviation=GFF',
        },
        {
          name: 'NCI DHART SPORE',
          path: '/Organizations/DetailsPage?fundingAgency=NIH-NCI',
        },
        {
          name: 'CDMRP NFRP',
          path: '/Organizations/DetailsPage?abbreviation=CDMRP',
        },
        {
          name: 'NFRI',
          path: '/Organizations/DetailsPage?abbreviation=NFRI',
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
    { name: 'Help', path: 'https://help.nf.synapse.org/nf-data-portal-documentation' },
  ],
  isPortalsDropdownEnabled: true,
}
