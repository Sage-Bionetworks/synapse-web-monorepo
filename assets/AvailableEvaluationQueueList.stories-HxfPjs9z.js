import{j as r,ix as t,iy as i,iz as l,Y as m}from"./iframe-Du6HmmeA.js";import{A as u}from"./AvailableEvaluationQueueList-BPywFKYs.js";import"./index-Chi_LkuB.js";import"./LightTooltip-zyXlWYi4.js";import"./MarkdownSynapse-BKsKuzoi.js";import"./SkeletonButton-B7NYOcGY.js";import"./SkeletonInlineBlock-hXkytNVp.js";import"./SkeletonTable-DFkOLILK.js";import"./SkeletonParagraph-xJMe6-dP.js";import"./Autocomplete-BlrjFx2A.js";import"./usePreviousProps-DXsH9NBJ.js";import"./Chip-CcMLA9LH.js";import"./MenuItem-CKx8ssIT.js";import"./ListItem-dLoTxdvw.js";import"./listItemButtonClasses-D181yDZA.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,j={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:u,decorators:[n=>r.jsx(m,{sx:{maxWidth:"600px"},children:r.jsx(n,{})})],args:{onChangeSelectedEvaluation:c()}},a={args:{evaluations:[]}},p="*markdown* given to the **component**",e={args:{evaluations:[{...t,submissionInstructionsMessage:p}]}},s={args:{evaluations:i}},o={args:{evaluations:l}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
