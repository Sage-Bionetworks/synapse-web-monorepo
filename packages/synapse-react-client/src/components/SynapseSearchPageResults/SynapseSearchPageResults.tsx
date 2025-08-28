import {
  Box,
  Paper,
  PaperProps,
  Button,
  styled,
  Typography,
} from '@mui/material'

import SynapseSearchResultsCard from './SynapseSearchResultsCard'

const searchResultsOutput = {
  found: 9,
  start: 0,
  hits: [
    {
      id: 'syn68790341',
      etag: '88733e96-770c-4e98-9b15-0c90623beb33',
      name: 'SEA-AD DREAM Challenge (Home)',
      description:
        "  ${image?fileName=SEA%2DAD DREAM Challenge%5Fbanner%5Fv4%2Ejpg&align=None&scale=100&responsive=true&altText=}  ${image?fileName=register%2Epng&align=None&scale=100&responsive=true&altText=}  ## What is this challenge about?  Alzheimer\u2019s disease (AD) is the most common neurodegenerative disorder, affecting millions worldwide and leading to progressive cognitive decline. Understanding its underlying biology is essential for developing better diagnostics and treatments.  Recent advances in single-cell RNA sequencing (snRNA-seq) have opened the door to discovering cellular and molecular signatures linked to Alzheimer\u2019s pathology. However, predicting classical neuropathology or protein aggregates from these data remains an open problem.  The SEA-AD DREAM Challenge invites the research community to tackle this problem by building models that predict Alzheimer\u2019s disease pathology directly from single-cell transcriptomic data. Your solutions can help move us closer to precision medicine in Alzheimer\u2019s care.  <hr/>  ## Your mission  - Task 1: Predict neuropathology stages (Thal, Braak, CERAD, ADNC) from snRNA-seq data. - Task 2: Predict quantitative measures of protein aggregates and cellular markers from immunohistochemistry.  Compete for leaderboard positions and contribute to advancing AD research through open collaboration.  <hr/>  ## Why participate?  - Innovate: Apply machine learning and statistical modeling to cutting-edge neuroscience data. - Collaborate: Join a global research effort supported by the SEA-AD consortium and NIA. - Impact: Help uncover molecular signatures driving Alzheimer\u2019s pathology.  <hr/>  ## Key dates  - July 27: Challenge launch - Aug 14 \u2013 Oct 8: Leaderboard Round - Oct 9 \u2013 Oct 22: Final Round - Oct 22: Write-up submission deadline - Mid-Nov: Winners announced  View full timeline →  <hr/>  ## How to participate  1. Register on Synapse. 2. Download the data and review the task descriptions. 3. Develop your model and submit predictions. 4. Track your progress on the leaderboard and aim for the final round!  Learn more about tasks → | Access data → | How to compete →  <hr/>  ## Data source  The challenge leverages data from the Seattle Alzheimer\u2019s Disease Brain Cell Atlas (SEA-AD), a collaborative effort led by the Allen Institute for Brain Science, University of Washington, and the Adult Changes in Thought (ACT) study.  <hr/>  ## Join the effort to advance Alzheimer\u2019s research through open science.  <hr/>  ## References  [1] Alzheimer\u2019s Association. 2024 Alzheimer\u2019s Disease Facts and Figures. [2] Gabitto MI, Travaglini KJ, Rachleff VM, Kaplan ES, Long B, Ariza J, et al. Integrated multimodal cell atlas of Alzheimer's disease. Nat Neurosci. 2024;27(12):2366\u201383. [3] Jorstad NL, Close J, Johansen N, Yanny AM, Barkan ER, Travaglini KJ, et al. Transcriptomic cell census reveals principles of human neocortex organization. Science. 2023;382:eADF6812. DOI:10.1126/science.adf6812",
      node_type: 'project',
      created_on: 1753886990,
      modified_on: 1753887641,
      created_by: '3329874',
      modified_by: '3329874',
    },
    {
      id: 'syn68784819',
      etag: '55016ba4-119a-4a88-b032-d294be5e1fbd',
      name: 'Model AD Test - DPE-1411',
      node_type: 'project',
      created_on: 1753813239,
      modified_on: 1755890882,
      created_by: '3443707',
      modified_by: '3443707',
    },
    {
      id: 'syn68883786',
      etag: '0f9db670-ba0c-4fc3-8a78-3b38fe47c789',
      name: 'SEA-AD Dream-2025-0811 copy.mp4',
      node_type: 'file',
      created_on: 1755100008,
      modified_on: 1755101943,
      created_by: '3393723',
      modified_by: '3393723',
    },
  ],
}

export function SynapseSearchPageResults() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Box
        sx={{
          height: '200px',
          width: '100%',
          bgcolor: '#223549',
        }}
      ></Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          pr: '150px',
          py: '25px',
          gap: '25px',
        }}
      >
        {searchResultsOutput.hits.map((hit: any) => (
          <SynapseSearchResultsCard
            key={hit.name}
            name={hit.name}
            entityType={hit.node_type}
            modifiedOn={new Date(hit.modified_on * 1000)}
          />
        ))}
      </Box>
    </Box>
  )
}
