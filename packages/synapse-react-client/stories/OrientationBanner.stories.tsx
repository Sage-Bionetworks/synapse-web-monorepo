import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import OrientationBanner, {
  getOrientationBannerKey,
  OrientationBannerProps,
} from '../src/components/OrientationBanner/OrientationBanner'
import Illustrations from '../src/assets/illustrations'

const meta = {
  title: 'UI/OrientationBanner',
  component: OrientationBanner,
  render: args => {
    localStorage.removeItem(getOrientationBannerKey(args.name))
    return <OrientationBanner {...args} />
  },
} satisfies Meta<OrientationBannerProps>
export default meta
type Story = StoryObj<typeof meta>

export const Projects: Story = {
  args: {
    name: 'Projects',
    illustration: <Illustrations.Projects />,
    title: 'Getting Started With Your Projects',
    text: 'Projects are the main "containers" where information is stored and organized in Synapse. They are online workspaces where you can collaborate and share your work with teammates. Projects can be shared with individuals, small teams, or large consortia. Projects can be private so only you and your team can see what\'s inside, or they can be shared publicly for anyone to browse.',
    /* primaryButtonConfig: {
      text: 'Create a New Project',
      onClick: undefined,
    }, */
    secondaryButtonConfig: {
      text: 'Learn More About Projects',
      href: 'https://help.synapse.org/docs/Setting-Up-a-Project.2055471258.html',
    },
  },
}

export const Teams: Story = {
  args: {
    name: 'Teams',
    illustration: <Illustrations.Teams />,
    title: 'Getting Started With Your Teams',
    text: 'Teams allow you to easily manage groups of users to control access to projects, communicate with colleagues, and participate in challenges.',
    /* primaryButtonConfig: {
      text: 'Search Teams',
      onClick: undefined,
    }, */
    secondaryButtonConfig: {
      text: 'Learn More About Teams',
      href: 'https://help.synapse.org/docs/Teams.1985446029.html',
    },
  },
}

export const Challenges: Story = {
  args: {
    name: 'Challenges',
    illustration: <Illustrations.Challenges />,
    title: 'Getting Started With Your Challenges',
    text: 'Challenges are open science, collaborative competitions for evaluating and comparing computational algorithms or solutions to problems.',
    /* primaryButtonConfig: {
      text: 'Browse Challenges',
      onClick: undefined,
    }, */
    secondaryButtonConfig: {
      text: 'Learn More About Challenges',
      href: 'https://help.synapse.org/docs/Teams.1985446029.html',
    },
  },
}

export const Favorites: Story = {
  args: {
    name: 'Favorites',
    illustration: <Illustrations.Favorites />,
    title: 'Getting Started With Your Favorites',
    text: 'Throughout Synapse, you can favorite pretty much any item (project, file, folder, table, dataset, etc.) by clicking the star icon next to its name. This will add that item to your favorites list.',
    secondaryButtonConfig: {
      text: 'Learn More About Favorites',
      href: 'https://help.synapse.org/docs/Navigating-Synapse.2048557182.html#NavigatingSynapse-Favorites',
    },
  },
}

export const Datasets: Story = {
  args: {
    name: 'Datasets',
    illustration: <Illustrations.Datasets />,
    title: 'Getting Started With Datasets',
    text: 'Use Datasets to produce and distribute an immutable set of files found across one or more Projects or Folders.',
    /* primaryButtonConfig: {
      text: 'Add a Dataset',
      onClick: undefined,
    }, */
    secondaryButtonConfig: {
      text: 'Learn More About Datasets',
      href: 'https://help.synapse.org/docs/Datasets.2611281979.html',
    },
  },
}

export const Files: Story = {
  args: {
    name: 'Files',
    illustration: <Illustrations.Files />,
    title: 'Getting Started With Files',
    text: 'Synapse files can be created by uploading content from your local computer or linking to digital files on the web. You can annotate files with custom metadata, embed files into Synapse wiki pages, or associate them with a DOI.',
    /* primaryButtonConfig: {
      text: 'Add a File',
      onClick: undefined,
    }, */
    secondaryButtonConfig: {
      text: 'Learn More About Files',
      href: 'https://help.synapse.org/docs/Managing-Files-and-Folders.2058846522.html',
    },
  },
}

export const Tables: Story = {
  args: {
    name: 'Tables',
    illustration: <Illustrations.Tables />,
    title: 'Getting Started With Tables',
    text: 'Synapse tables are used to organize web-accessible, sharable, and queryable data. Tables may be queried and edited with the Synapse UI, as well as with the Synapse programmatic clients.',
    /* primaryButtonConfig: {
      text: 'Add a Table',
      onClick: undefined,
    }, */
    secondaryButtonConfig: {
      text: 'Learn More About Tables',
      href: 'https://help.synapse.org/docs/Organizing-Data-With-Tables.2011038095.html',
    },
  },
}

export const Discussions: Story = {
  args: {
    name: 'Discussions',
    illustration: <Illustrations.Discussions />,
    title: 'Getting Started With Discussions',
    text: 'Discussion forums are a space to communicate with others, similar to a message board. The discussion forum is visible to users who have access to the project.',
    /* primaryButtonConfig: {
      text: 'Start a Thread',
      onClick: undefined,
    }, */
    secondaryButtonConfig: {
      text: 'Learn More About Discussions',
      href: 'https://help.synapse.org/docs/Discussion-Forums.1985904796.html',
    },
  },
}

export const Docker: Story = {
  args: {
    name: 'Docker',
    illustration: <Illustrations.Docker />,
    title: 'Getting Started With Docker',
    text: 'The Synapse Docker Registry provides a space for Synapse users to store and distribute their Docker images per Synapse project.',
    /* primaryButtonConfig: {
      text: 'Add External Repository',
      onClick: undefined,
    }, */
    secondaryButtonConfig: {
      text: 'Learn More About Docker',
      href: 'https://help.synapse.org/docs/Synapse-Docker-Registry.2011037752.html',
    },
  },
}

export const Wikis: Story = {
  args: {
    name: 'Wikis',
    illustration: <Illustrations.Wikis />,
    title: 'Getting Started With Wikis',
    text: 'Wikis provide a space to write narrative content to describe a project or content within a project. Wikis are available in Synapse on projects, folders, and files. Every project has a separate Wiki tab where you can create pages and a hierarchy of sub-pages.',
    /* primaryButtonConfig: {
      text: 'Edit Project Wiki',
      onClick: undefined,
    }, */
    secondaryButtonConfig: {
      text: 'Learn More About Wikis',
      href: 'https://help.synapse.org/docs/Creating-and-Managing-Wikis.1975746682.html',
    },
  },
}

export const TrashCan: Story = {
  args: {
    name: 'TrashCan',
    illustration: <Illustrations.TrashCan />,
    title: 'Getting Started With Trash Can',
    text: 'The trash can contains items that were recently deleted. You can recover deleted items in the trash can by clicking "Restore". Items will remain in the trash can for 30 days before being automatically purged.',
  },
}

export const DataAccessManagement: Story = {
  args: {
    name: 'DataAccessManagement',
    illustration: <Illustrations.DataAccessManagement />,
    title: 'Getting Started With Data Access Management',
    text: 'When someone requests access to data, that request will show up here. Clicking on the Request ID will take you to a page where you can review the request.',
  },
}

export const CohortBuilder: Story = {
  args: {
    name: 'CohortBuilder',
    illustration: <Illustrations.CohortBuilder />,
    title: 'Getting Started With Explore Data By Participants',
    text: (
      <>
        This page helps you find data related to anonymized Participants. Add
        filters to build a list of participants. If you have a list of
        participant IDs, click <b>Filter by Participant</b> to add them. Once
        you've built your cohort, you can download the related data files,{' '}
        <b>Send to Cavatica</b> for analysis, or just <b>Save your Query</b> and
        come back to it later.
      </>
    ),
    /* secondaryButtonConfig: {
      text: 'Learn More About Cohort Builder',
      href: 'TODO',
    }, */
  },
}

export const Following: Story = {
  args: {
    name: 'Following',
    illustration: <Illustrations.Following />,
    title: "All the Discussions you're following",
    text: 'When you click the "follow" button on any forum or thread in Synapse, a link to that discussion will show up here. From here, it\'s easy to return to discussions you care about, or stop following the ones you don\'t.',
  },
}
