import { NavbarConfig } from '@sage-bionetworks/synapse-portal-framework/components/navbar/Navbar'

export const navbarConfig: NavbarConfig = {
  routes: [
    {
      name: 'Research Tools Central',
      path: '/Research Tools Central',
      children: [
        { name: 'Browse Tools', path: '/Research Tools Central/Browse Tools' },
        {
          name: 'Submit Animal Models',
          path: '/Research Tools Central/Submit Animal Models',
        },
        {
          name: 'Submit Observations',
          path: '/Research Tools Central/Submit Observations',
        },
        {
          name: 'Submit Genetic Reagents',
          path: '/Research Tools Central/Submit Genetic Reagents',
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
        {
          name: 'NF-OSI',
          path: 'https://help.nf.synapse.org/NFdocs/about',
        },
        {
          name: 'Data Standards',
          path: 'https://nf-osi.github.io/nf-metadata-dictionary/',
        },
      ],
    },
    {
      name: 'Contribute Data',
      path: 'https://help.nf.synapse.org/NFdocs/how-to-share-data-an-overview',
    },
    { name: 'News', path: 'https://news.nfdataportal.org/' },
    { name: 'Help', path: 'https://help.nf.synapse.org/NFdocs/' },
  ],
}
