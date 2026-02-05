import{j as r,iH as t,iI as i,iJ as l,V as m}from"./iframe-Fj4lak5c.js";import{A as u}from"./AvailableEvaluationQueueList-ClP6JnKW.js";import"./index-Chi_LkuB.js";import"./LightTooltip-BvGcOz9H.js";import"./MarkdownSynapse-o56dOjAb.js";import"./SkeletonButton-Caf_IZFe.js";import"./SkeletonInlineBlock-BlJ5s_Kh.js";import"./SkeletonTable-t4KSioMX.js";import"./SkeletonParagraph-CrmOE7Us.js";import"./Autocomplete-BixN2QaB.js";import"./usePreviousProps-D80ZqI7V.js";import"./Chip-CGB0K5Hb.js";import"./MenuItem-B8CcEiWE.js";import"./ListItem-By4wjk0j.js";import"./listItemButtonClasses-DJ1LX7Q2.js";const{fn:c}=__STORYBOOK_MODULE_TEST__,j={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:u,decorators:[n=>r.jsx(m,{sx:{maxWidth:"600px"},children:r.jsx(n,{})})],args:{onChangeSelectedEvaluation:c()}},a={args:{evaluations:[]}},p="*markdown* given to the **component**",e={args:{evaluations:[{...t,submissionInstructionsMessage:p}]}},s={args:{evaluations:i}},o={args:{evaluations:l}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
