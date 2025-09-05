import B2AI_ORG_114_svg from '@/assets/B2AI_ORG_114.svg?url'
import B2AI_ORG_115_svg from '@/assets/B2AI_ORG_115.svg?url'
import B2AI_ORG_116_svg from '@/assets/B2AI_ORG_116.svg?url'
import B2AI_ORG_117_svg from '@/assets/B2AI_ORG_117.svg?url'

/*
The d4d html will be updated sometimes. The process for doing this hasn't been determined
yet, but there is discussion about it in this Slack thread around 2025-07-21:
https://b2aiworkspace.slack.com/archives/C0738H2KVGB/p1752187350029169

Probably we will be importing html and css content into Synapse tables instead
of as static files like we're doing now.
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
