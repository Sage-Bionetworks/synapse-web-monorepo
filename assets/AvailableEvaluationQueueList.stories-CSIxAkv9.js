import{ix as t,iy as i,iz as l,j as r,Y as m}from"./iframe-DWQ8siyH.js";import{A as u}from"./AvailableEvaluationQueueList-D0i5eehC.js";import"./index-Chi_LkuB.js";import"./LightTooltip-BRCcdYv9.js";import"./MarkdownSynapse-BZXBdfm0.js";import"./SkeletonButton-Drh7CQoD.js";import"./SkeletonInlineBlock-U2SdkY6_.js";import"./SkeletonTable-pyMLa-VH.js";import"./SkeletonParagraph-BzFwIbvm.js";import"./Autocomplete-CTt9Lj7C.js";import"./usePreviousProps-0YhiVRha.js";import"./Chip--ZUBGmuC.js";import"./MenuItem-B0BEM2XP.js";import"./ListItem-C1Ju9U5d.js";import"./listItemButtonClasses-BRcdgKHq.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,j={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:u,decorators:[n=>r.jsx(m,{sx:{maxWidth:"600px"},children:r.jsx(n,{})})],args:{onChangeSelectedEvaluation:c()}},a={args:{evaluations:[]}},p="*markdown* given to the **component**",e={args:{evaluations:[{...i,submissionInstructionsMessage:p}]}},s={args:{evaluations:l}},o={args:{evaluations:t}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
