import{iw as t,ix as i,iy as l,j as r,X as m}from"./iframe-BCS2zFLE.js";import{A as u}from"./AvailableEvaluationQueueList-Ba0Wv_Q6.js";import"./index-Chi_LkuB.js";import"./LightTooltip-CQxu9Yos.js";import"./MarkdownSynapse-CJf-YsFP.js";import"./SkeletonButton-BlPG-SPD.js";import"./SkeletonInlineBlock-9a6I1Gvz.js";import"./SkeletonTable-D-hZBWBR.js";import"./SkeletonParagraph-Ch_An-pk.js";import"./Autocomplete-CGtpzGiq.js";import"./usePreviousProps-Dzc1i5J4.js";import"./Chip-BWwS-E8w.js";import"./MenuItem-p1NQf3Mg.js";import"./ListItem-vzlQW0vR.js";import"./listItemButtonClasses-CaYoUFjn.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,j={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:u,decorators:[n=>r.jsx(m,{sx:{maxWidth:"600px"},children:r.jsx(n,{})})],args:{onChangeSelectedEvaluation:c()}},a={args:{evaluations:[]}},p="*markdown* given to the **component**",e={args:{evaluations:[{...i,submissionInstructionsMessage:p}]}},s={args:{evaluations:l}},o={args:{evaluations:t}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
