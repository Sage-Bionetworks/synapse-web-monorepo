import{ix as t,iy as i,iz as l,j as r,X as m}from"./iframe-CyTUL3rw.js";import{A as u}from"./AvailableEvaluationQueueList-BPnEwjE0.js";import"./index-Chi_LkuB.js";import"./LightTooltip-Br9ozYpY.js";import"./MarkdownSynapse-C3mcPF1h.js";import"./SkeletonButton-DChDzo9i.js";import"./SkeletonInlineBlock-B96TZts7.js";import"./SkeletonTable-BzEL_yMf.js";import"./SkeletonParagraph-D3EKUoCV.js";import"./Autocomplete-CXkWE5V9.js";import"./usePreviousProps-Bk4ZH_gp.js";import"./Chip-RUiUFPKg.js";import"./MenuItem-48CaJz-o.js";import"./ListItem-CARBcda3.js";import"./listItemButtonClasses-CuHOQPFx.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,j={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:u,decorators:[n=>r.jsx(m,{sx:{maxWidth:"600px"},children:r.jsx(n,{})})],args:{onChangeSelectedEvaluation:c()}},a={args:{evaluations:[]}},p="*markdown* given to the **component**",e={args:{evaluations:[{...i,submissionInstructionsMessage:p}]}},s={args:{evaluations:l}},o={args:{evaluations:t}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
