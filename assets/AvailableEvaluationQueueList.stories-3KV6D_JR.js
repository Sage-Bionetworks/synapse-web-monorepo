import{ix as t,iy as i,iz as l,j as r,Y as m}from"./iframe-DW4EtDFR.js";import{A as u}from"./AvailableEvaluationQueueList-CJA4_K9l.js";import"./index-Chi_LkuB.js";import"./LightTooltip-RHqCPVzc.js";import"./MarkdownSynapse-BRThLhl9.js";import"./SkeletonButton-DsCjZbv1.js";import"./SkeletonInlineBlock-ItfWjoQ8.js";import"./SkeletonTable-ItfNMNmd.js";import"./SkeletonParagraph-B74Z-tR5.js";import"./Autocomplete-Cqyov7nf.js";import"./usePreviousProps-2W2UBLJ8.js";import"./Chip-CUP-lTls.js";import"./MenuItem-Cc9sDD7i.js";import"./ListItem-BVKcch1j.js";import"./listItemButtonClasses-B4kVsD_z.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,j={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:u,decorators:[n=>r.jsx(m,{sx:{maxWidth:"600px"},children:r.jsx(n,{})})],args:{onChangeSelectedEvaluation:c()}},a={args:{evaluations:[]}},p="*markdown* given to the **component**",e={args:{evaluations:[{...i,submissionInstructionsMessage:p}]}},s={args:{evaluations:l}},o={args:{evaluations:t}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const y=["NoneAvailable","OneAvailable","SevenAvailable","ManyAvailable"];export{o as ManyAvailable,a as NoneAvailable,e as OneAvailable,s as SevenAvailable,y as __namedExportsOrder,j as default};
