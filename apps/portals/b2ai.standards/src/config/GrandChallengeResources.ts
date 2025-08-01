import B2AI_ORG_114_svg from '@/assets/B2AI_ORG_114.svg?url'
import B2AI_ORG_115_svg from '@/assets/B2AI_ORG_115.svg?url'
import B2AI_ORG_116_svg from '@/assets/B2AI_ORG_116.svg?url'
import B2AI_ORG_117_svg from '@/assets/B2AI_ORG_117.svg?url'

/*
The d4d html will be updated sometimes. The process for doing this hasn't been determined
yet, but there is discussion about it in this Slack thread around 2025-07-21:
https://b2aiworkspace.slack.com/archives/C0738H2KVGB/p1752187350029169

Particularly (from @sigfried):
I don't think the D4D html/css necessarily needs to be copied into the
standards-registry repo (https://github.com/bridge2ai/b2ai-standards-registry)
but they do need to be copied (and updated) here on the Synapse monorepo
(https://github.com/Sigfried/synapse-web-monorepo/tree/b2ai-org-detail-GC-landing-page/apps/portals/b2ai.standards/src/assets/d4d).
That link is to my fork. Whoever puts this copying process together will need
to figure out if the copies go into a fork or the main repo, and whether to
create a new branch each time or use a dedicated branch for this. In either
case, after copying, a PR will need to be made and merged. If we want to do
face validation before merging to staging, we will need someone to do it on a
local development environment, in which case the files should go to their fork.
 */
import B2AI_ORG_114_html from '@/assets/d4d/B2AI_ORG_114_d4d.html?raw'
import B2AI_ORG_116_html from '@/assets/d4d/B2AI_ORG_116_d4d.html?raw'
import B2AI_ORG_117_html from '@/assets/d4d/B2AI_ORG_117_d4d.html?raw'

export const GCInfo = {
  'B2AI_ORG:114': {
    orgName: 'Salutogenesis Grand Challenge',
    aka: 'AI-READI',
    other:
      'Artificial Intelligence Ready and Equitable Atlas for Diabetes Insights',
    d4dHtml: B2AI_ORG_114_html,
    svg: B2AI_ORG_114_svg,
  },
  'B2AI_ORG:115': {
    orgName: 'AI/ML for Clinical Care Grand Challenge',
    aka: 'CHoRUS',
    other:
      'Patient-Focused Collaborative Hospital Repository Uniting Standards',
    svg: B2AI_ORG_115_svg,
  },
  'B2AI_ORG:116': {
    orgName: 'Functional Genomics Grand Challenge',
    aka: 'CM4AI',
    other: 'Cell Maps for AI',
    d4dHtml: B2AI_ORG_116_html,
    svg: B2AI_ORG_116_svg,
  },
  'B2AI_ORG:117': {
    orgName: 'Precision Public Health Grand Challenge',
    aka: 'Voice',
    other: 'Voice as a Biomarker of Health',
    d4dHtml: B2AI_ORG_117_html,
    svg: B2AI_ORG_117_svg,
  },
}
