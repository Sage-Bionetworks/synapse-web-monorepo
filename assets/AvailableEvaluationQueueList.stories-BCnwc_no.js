import{j as r,iF as x,iG as A,iH as S,V as _}from"./iframe-6fxFvYFG.js";import{A as O}from"./AvailableEvaluationQueueList-K_ftO26C.js";import"./index-r8ZA1smB.js";import"./LightTooltip-B_bCqVrh.js";import"./MarkdownSynapse-BiQ8eplM.js";import"./SkeletonButton-CwN3sKyQ.js";import"./SkeletonInlineBlock-DeCoWgUQ.js";import"./SkeletonTable-B0KdXxpl.js";import"./SkeletonParagraph-P8Ugt_HA.js";import"./Autocomplete-COKRJiZM.js";import"./usePreviousProps-DyzcoV3l.js";import"./Chip-BwWvwcwU.js";import"./MenuItem-B2VLGt4Y.js";import"./ListItem-DV91SgrA.js";import"./listItemButtonClasses-DbmKHAul.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,F={title:"Synapse/Challenge/AvailableEvaluationQueueList",component:O,decorators:[b=>r.jsx(_,{sx:{maxWidth:"600px"},children:r.jsx(b,{})})],args:{onChangeSelectedEvaluation:h()}},a={args:{evaluations:[]}},k="*markdown* given to the **component**",e={args:{evaluations:[{...x,submissionInstructionsMessage:k}]}},s={args:{evaluations:A}},o={args:{evaluations:S}};var n,t,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    evaluations: []
  }
}`,...(i=(t=a.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var l,m,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    evaluations: [{
      ...mockEvaluationQueue,
      submissionInstructionsMessage: markdownText
    }]
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var c,p,v;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    evaluations: sevenGeneratedEvaulations
  }
}`,...(v=(p=s.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var d,g,E;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    evaluations: generatedEvaulations
  }
}`,...(E=(g=o.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};const H=["NoneAvailable","OneAvailable","SevenAvailable","ManyAvailable"];export{o as ManyAvailable,a as NoneAvailable,e as OneAvailable,s as SevenAvailable,H as __namedExportsOrder,F as default};
