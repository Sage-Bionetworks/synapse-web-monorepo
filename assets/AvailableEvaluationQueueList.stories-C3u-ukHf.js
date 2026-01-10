import{j as r,iF as t,iG as i,iH as l,V as m}from"./iframe-xmmb_I0l.js";import{A as u}from"./AvailableEvaluationQueueList-B_iBkMzI.js";import"./index-Chi_LkuB.js";import"./LightTooltip-D9ucYA3A.js";import"./MarkdownSynapse-DiGGFE3_.js";import"./SkeletonButton-9FRcX2_1.js";import"./SkeletonInlineBlock-CLZ8B174.js";import"./SkeletonTable-jOb-G6tL.js";import"./SkeletonParagraph-BjPCkGoh.js";import"./Autocomplete-DDW5OL9X.js";import"./usePreviousProps-B4NwU-is.js";import"./Chip-5gf_Tn0T.js";import"./MenuItem-PkdQuBZK.js";import"./ListItem-CUqzWDmV.js";import"./listItemButtonClasses-DdhxpvT0.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,j={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:u,decorators:[n=>r.jsx(m,{sx:{maxWidth:"600px"},children:r.jsx(n,{})})],args:{onChangeSelectedEvaluation:c()}},a={args:{evaluations:[]}},p="*markdown* given to the **component**",e={args:{evaluations:[{...t,submissionInstructionsMessage:p}]}},s={args:{evaluations:i}},o={args:{evaluations:l}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
