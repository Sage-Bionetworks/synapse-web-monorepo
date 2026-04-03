import{iw as t,ix as i,iy as l,j as r,X as m}from"./iframe-BfB6FrYj.js";import{A as u}from"./AvailableEvaluationQueueList-D8NYkWMf.js";import"./index-Chi_LkuB.js";import"./LightTooltip-BjAj_W1D.js";import"./MarkdownSynapse-BMEskP2u.js";import"./SkeletonButton-CyKkbiIk.js";import"./SkeletonInlineBlock-CtmRc0d4.js";import"./SkeletonTable-KlaWzsOV.js";import"./SkeletonParagraph-CD0x-Nfw.js";import"./Autocomplete-Debb-qQe.js";import"./usePreviousProps-Dh5fkFTb.js";import"./Chip-H1nC51OX.js";import"./MenuItem-CG4XGW7R.js";import"./ListItem-D5pRGaNH.js";import"./listItemButtonClasses-8UczhBBp.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,j={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:u,decorators:[n=>r.jsx(m,{sx:{maxWidth:"600px"},children:r.jsx(n,{})})],args:{onChangeSelectedEvaluation:c()}},a={args:{evaluations:[]}},p="*markdown* given to the **component**",e={args:{evaluations:[{...i,submissionInstructionsMessage:p}]}},s={args:{evaluations:l}},o={args:{evaluations:t}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
