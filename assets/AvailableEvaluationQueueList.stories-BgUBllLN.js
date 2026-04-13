import{iw as t,ix as i,iy as l,j as r,X as m}from"./iframe-zB-jZjF1.js";import{A as u}from"./AvailableEvaluationQueueList-Dk7Rpdh3.js";import"./index-Chi_LkuB.js";import"./LightTooltip-Bbhh6aTb.js";import"./MarkdownSynapse-DWu3M3VU.js";import"./SkeletonButton-DitOEAxO.js";import"./SkeletonInlineBlock-CeW9qPuC.js";import"./SkeletonTable-Xio-92ZC.js";import"./SkeletonParagraph-D0noDT_a.js";import"./Autocomplete-DdeAb70f.js";import"./usePreviousProps-Bo09v6Gt.js";import"./Chip-C8ZEijAb.js";import"./MenuItem-BWX0VE3I.js";import"./ListItem-B9DASHzs.js";import"./listItemButtonClasses-BkTygPr_.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,j={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:u,decorators:[n=>r.jsx(m,{sx:{maxWidth:"600px"},children:r.jsx(n,{})})],args:{onChangeSelectedEvaluation:c()}},a={args:{evaluations:[]}},p="*markdown* given to the **component**",e={args:{evaluations:[{...i,submissionInstructionsMessage:p}]}},s={args:{evaluations:l}},o={args:{evaluations:t}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const w=["NoneAvailable","OneAvailable","SevenAvailable","ManyAvailable"];export{o as ManyAvailable,a as NoneAvailable,e as OneAvailable,s as SevenAvailable,w as __namedExportsOrder,j as default};
