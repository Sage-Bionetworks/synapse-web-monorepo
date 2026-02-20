import{j as r,iF as t,iG as i,iH as l,W as m}from"./iframe-D1nGOIH-.js";import{A as u}from"./AvailableEvaluationQueueList-C0jvYI0Z.js";import"./index-Chi_LkuB.js";import"./LightTooltip-CyHZNf0u.js";import"./MarkdownSynapse-DdwRiDDQ.js";import"./SkeletonButton-B1c1lzEn.js";import"./SkeletonInlineBlock-BiIlwrm4.js";import"./SkeletonTable-DawIinBB.js";import"./SkeletonParagraph-DPQazNTU.js";import"./Autocomplete-BCeLGzUu.js";import"./usePreviousProps-mKIxkupj.js";import"./Chip-BUJWntqC.js";import"./MenuItem-3MOxvSFm.js";import"./ListItem-DPbOfcdh.js";import"./listItemButtonClasses-BWGNlQvP.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,j={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:u,decorators:[n=>r.jsx(m,{sx:{maxWidth:"600px"},children:r.jsx(n,{})})],args:{onChangeSelectedEvaluation:c()}},a={args:{evaluations:[]}},p="*markdown* given to the **component**",e={args:{evaluations:[{...t,submissionInstructionsMessage:p}]}},s={args:{evaluations:i}},o={args:{evaluations:l}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    evaluations: []
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    evaluations: [{
      ...mockEvaluationQueue,
      submissionInstructionsMessage: markdownText
    }]
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    evaluations: sevenGeneratedEvaulations
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    evaluations: generatedEvaulations
  }
}`,...o.parameters?.docs?.source}}};const Q=["NoneAvailable","OneAvailable","SevenAvailable","ManyAvailable"];export{o as ManyAvailable,a as NoneAvailable,e as OneAvailable,s as SevenAvailable,Q as __namedExportsOrder,j as default};
