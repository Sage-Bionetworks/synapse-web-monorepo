import{iw as t,ix as i,iy as l,j as r,X as m}from"./iframe-DcOQ9qHF.js";import{A as u}from"./AvailableEvaluationQueueList-DyPMAhyh.js";import"./index-Chi_LkuB.js";import"./LightTooltip-BcNiBJVl.js";import"./MarkdownSynapse-D3IIkX0j.js";import"./SkeletonButton-BlWvLvXj.js";import"./SkeletonInlineBlock-YBvARA_9.js";import"./SkeletonTable-DMmO1dBv.js";import"./SkeletonParagraph-agQpiA4S.js";import"./Autocomplete-DXi90Z3V.js";import"./usePreviousProps-BCJjj9Wa.js";import"./Chip-CelqGmC0.js";import"./MenuItem-BnSVsxfU.js";import"./ListItem-BXiXSFOh.js";import"./listItemButtonClasses-CUva6xBS.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,j={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:u,decorators:[n=>r.jsx(m,{sx:{maxWidth:"600px"},children:r.jsx(n,{})})],args:{onChangeSelectedEvaluation:c()}},a={args:{evaluations:[]}},p="*markdown* given to the **component**",e={args:{evaluations:[{...i,submissionInstructionsMessage:p}]}},s={args:{evaluations:l}},o={args:{evaluations:t}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
