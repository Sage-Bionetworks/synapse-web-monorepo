import{j as r,iJ as t,iK as i,iL as l,W as m}from"./iframe-CKkRwo5v.js";import{A as u}from"./AvailableEvaluationQueueList-BKor4zt3.js";import"./index-Chi_LkuB.js";import"./LightTooltip-Bt97fi6r.js";import"./MarkdownSynapse-COK-Gxgq.js";import"./SkeletonButton-DLboZNuU.js";import"./SkeletonInlineBlock-DfpGMDXv.js";import"./SkeletonTable-bRkZRSb0.js";import"./SkeletonParagraph-DGFhmrY6.js";import"./Autocomplete-Bb29v8nk.js";import"./usePreviousProps-Cu5Ufv-Z.js";import"./Chip-Dbbmbwqm.js";import"./MenuItem-CL505aRp.js";import"./ListItem-y0JfTV8V.js";import"./listItemButtonClasses-CNogcDxo.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,j={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:u,decorators:[n=>r.jsx(m,{sx:{maxWidth:"600px"},children:r.jsx(n,{})})],args:{onChangeSelectedEvaluation:c()}},a={args:{evaluations:[]}},p="*markdown* given to the **component**",e={args:{evaluations:[{...t,submissionInstructionsMessage:p}]}},s={args:{evaluations:i}},o={args:{evaluations:l}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const L=["NoneAvailable","OneAvailable","SevenAvailable","ManyAvailable"];export{o as ManyAvailable,a as NoneAvailable,e as OneAvailable,s as SevenAvailable,L as __namedExportsOrder,j as default};
