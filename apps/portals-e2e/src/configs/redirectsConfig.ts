import { Portal } from './routesConfig'

/**
 * Per-portal `[from, to]` URL pairs. The spec navigates to `from` and
 * asserts the URL settles at `to`. If the destination route gates a further
 * client-side redirect on a data fetch, `from` must reference a real id.
 */
type RedirectPair = readonly [from: string, to: string]
type RedirectsConfig = Record<Portal, readonly RedirectPair[]>

// Known-good ids for redirects that chain through a data-gated step.
const NF_STUDY_ID = 'syn2343195'
const NF_TOOL_ID = '18ba4c2e-e8d5-4032-a6ab-d0fca3f0f984'
const NF_HACKATHON_ID = 'syn26004582'

const CCKP_TOOL_NAME = 'Cytoscape'

const redirectsConfig: RedirectsConfig = {
  adknowledgeportal: [],
  arkportal: [],
  bsmn: [],
  cancercomplexity: [
    // Tools (tabbed; default tab = Details; param = toolName)
    [
      `/Explore/Tools/DetailsPage?toolName=${CCKP_TOOL_NAME}`,
      `/Explore/Tools/${CCKP_TOOL_NAME}/Details`,
    ],
    [
      `/Explore/Tools/DetailsPage/Details?toolName=${CCKP_TOOL_NAME}`,
      `/Explore/Tools/${CCKP_TOOL_NAME}/Details`,
    ],
    [
      `/Explore/Tools/DetailsPage/SustainabilityAndReusabilityReport?toolName=${CCKP_TOOL_NAME}`,
      `/Explore/Tools/${CCKP_TOOL_NAME}/SustainabilityAndReusabilityReport`,
    ],
    [
      `/Explore/Tools/DetailsPage/BogusTab?toolName=${CCKP_TOOL_NAME}`,
      `/Explore/Tools/${CCKP_TOOL_NAME}/Details`,
    ],

    // Grants (non-tabbed; param = grantId)
    ['/Explore/Grants/DetailsPage?grantId=syn1', '/Explore/Grants/syn1'],

    // People (non-tabbed; param = name)
    ['/Explore/People/DetailsPage?name=Jane', '/Explore/People/Jane'],

    // Publications (non-tabbed; param = pubMedId)
    [
      '/Explore/Publications/DetailsPage?pubMedId=12345',
      '/Explore/Publications/12345',
    ],

    // Datasets (non-tabbed; param = datasetId)
    ['/Explore/Datasets/DetailsPage?datasetId=syn2', '/Explore/Datasets/syn2'],

    // Educational Resources (non-tabbed; param = title; path contains a space)
    [
      '/Explore/Educational Resources/DetailsPage?title=MyResource',
      '/Explore/Educational Resources/MyResource',
    ],
  ],
  challenges: [],
  digitalhealth: [],
  eliteportal: [],
  genie: [],
  namshub: [],
  nf: [
    // Studies (tabbed; default tab = Details)
    [
      `/Explore/Studies/DetailsPage?studyId=${NF_STUDY_ID}`,
      `/Explore/Studies/${NF_STUDY_ID}/Details`,
    ],
    [
      `/Explore/Studies/DetailsPage/Details?studyId=${NF_STUDY_ID}`,
      `/Explore/Studies/${NF_STUDY_ID}/Details`,
    ],
    [
      `/Explore/Studies/DetailsPage/Datasets?studyId=${NF_STUDY_ID}`,
      `/Explore/Studies/${NF_STUDY_ID}/Datasets`,
    ],
    [
      `/Explore/Studies/DetailsPage/Files?studyId=${NF_STUDY_ID}`,
      `/Explore/Studies/${NF_STUDY_ID}/Files`,
    ],
    [
      `/Explore/Studies/DetailsPage/AdditionalFiles?studyId=${NF_STUDY_ID}`,
      `/Explore/Studies/${NF_STUDY_ID}/AdditionalFiles`,
    ],
    // Unknown legacy tab → :tab fallback → DefaultTabWildcardRedirect → default tab
    [
      `/Explore/Studies/DetailsPage/BogusTab?studyId=${NF_STUDY_ID}`,
      `/Explore/Studies/${NF_STUDY_ID}/Details`,
    ],
    // Missing ID case
    [`/Explore/Studies/DetailsPage/Details`, `/Explore/Studies`],

    // Tools (tabbed; default tab = Details; param = resourceId)
    [
      `/Explore/Tools/DetailsPage?resourceId=${NF_TOOL_ID}`,
      `/Explore/Tools/${NF_TOOL_ID}/Details`,
    ],
    [
      `/Explore/Tools/DetailsPage/Details?resourceId=${NF_TOOL_ID}`,
      `/Explore/Tools/${NF_TOOL_ID}/Details`,
    ],
    [
      `/Explore/Tools/DetailsPage/Observations?resourceId=${NF_TOOL_ID}`,
      `/Explore/Tools/${NF_TOOL_ID}/Observations`,
    ],
    [
      `/Explore/Tools/DetailsPage/Data?resourceId=${NF_TOOL_ID}`,
      `/Explore/Tools/${NF_TOOL_ID}/Data`,
    ],

    // Hackathon (tabbed; default tab = Background&Results; param = id)
    [
      `/Explore/Hackathon/DetailsPage?id=${NF_HACKATHON_ID}`,
      `/Explore/Hackathon/${NF_HACKATHON_ID}/Background&Results`,
    ],
    [
      `/Explore/Hackathon/DetailsPage/Background&Results?id=${NF_HACKATHON_ID}`,
      `/Explore/Hackathon/${NF_HACKATHON_ID}/Background&Results`,
    ],
    [
      `/Explore/Hackathon/DetailsPage/Methodology?id=${NF_HACKATHON_ID}`,
      `/Explore/Hackathon/${NF_HACKATHON_ID}/Methodology`,
    ],

    // Organizations (tabbed; default tab = Details; param = abbreviation)
    [
      '/Organizations/DetailsPage?abbreviation=CTF',
      '/Organizations/CTF/Details',
    ],
    [
      '/Organizations/DetailsPage/Data?abbreviation=CTF',
      '/Organizations/CTF/Data',
    ],

    // Initiatives (non-tabbed; param = initiative)
    [
      '/Explore/Initiatives/DetailsPage?initiative=Foo',
      '/Explore/Initiatives/Foo',
    ],

    // Datasets (non-tabbed; param = id)
    ['/Explore/Datasets/DetailsPage?id=syn999', '/Explore/Datasets/syn999'],
  ],
  stopadportal: [],
}

export default redirectsConfig
