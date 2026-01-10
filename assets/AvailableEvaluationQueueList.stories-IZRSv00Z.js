import{j as r,iF as t,iG as i,iH as l,V as m}from"./iframe-BulltPlS.js";import{A as u}from"./AvailableEvaluationQueueList-hQluViVF.js";import"./index-Chi_LkuB.js";import"./LightTooltip-CEqUG5nY.js";import"./MarkdownSynapse-BTFSrs3B.js";import"./SkeletonButton-DU72c3M6.js";import"./SkeletonInlineBlock-BXxRvNES.js";import"./SkeletonTable-BgsdlaOw.js";import"./SkeletonParagraph-DH5smUkj.js";import"./Autocomplete-DwAfPvxW.js";import"./usePreviousProps-CbD8beHC.js";import"./Chip-CTw5NN0f.js";import"./MenuItem-Bei-3O4r.js";import"./ListItem-DA8rVcGY.js";import"./listItemButtonClasses-DDru6bL7.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,j={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:u,decorators:[n=>r.jsx(m,{sx:{maxWidth:"600px"},children:r.jsx(n,{})})],args:{onChangeSelectedEvaluation:c()}},a={args:{evaluations:[]}},p="*markdown* given to the **component**",e={args:{evaluations:[{...t,submissionInstructionsMessage:p}]}},s={args:{evaluations:i}},o={args:{evaluations:l}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
