import{j as r,iI as t,iJ as i,iK as l,W as m}from"./iframe-Ya-g_qay.js";import{A as u}from"./AvailableEvaluationQueueList-CAdVbKAI.js";import"./index-Chi_LkuB.js";import"./LightTooltip-CmE9Hp-T.js";import"./MarkdownSynapse-CFShCHbb.js";import"./SkeletonButton-WGw1QxaV.js";import"./SkeletonInlineBlock-BhpPIW12.js";import"./SkeletonTable-gSh9dXdS.js";import"./SkeletonParagraph-B7nhBI0o.js";import"./Autocomplete-CsNog2r6.js";import"./usePreviousProps-C9_GVCp9.js";import"./Chip-CWV3Xi6n.js";import"./MenuItem-BuXikWov.js";import"./ListItem-WVfw-_Td.js";import"./listItemButtonClasses-CkcGfhEa.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,j={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:u,decorators:[n=>r.jsx(m,{sx:{maxWidth:"600px"},children:r.jsx(n,{})})],args:{onChangeSelectedEvaluation:c()}},a={args:{evaluations:[]}},p="*markdown* given to the **component**",e={args:{evaluations:[{...t,submissionInstructionsMessage:p}]}},s={args:{evaluations:i}},o={args:{evaluations:l}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
